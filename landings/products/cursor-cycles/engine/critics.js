/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MULTI-CRITIC SYSTEM — Adversarial Evaluation Agents
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Multiple critic agents evaluate prompts from different perspectives.
 * Designed to counter sycophancy through adversarial evaluation.
 */

class CriticSystem {
    /**
     * Available critic types
     */
    static CRITICS = {
        harsh: {
            name: 'Harsh Critic',
            description: 'Finds every possible flaw',
            temperament: 'adversarial',
            systemPrompt: `You are a harsh prompt critic. Your job is to find flaws.
- Do NOT be generous
- A score of 8+ requires exceptional quality
- Most prompts should score 5-7
- Be specific about every weakness
- Question every assumption
- Point out what's missing

Rate this prompt 1-10 and explain specific weaknesses.`,
            weight: 0.35
        },
        rubric: {
            name: 'Rubric Scorer',
            description: 'Scores against specific criteria',
            temperament: 'analytical',
            systemPrompt: `You are a systematic prompt evaluator using a rubric.

Score each criterion 1-10:
1. CLARITY: Is the prompt clear and unambiguous?
2. COMPLETENESS: Does it cover all necessary aspects?
3. SPECIFICITY: Is it concrete, not vague?
4. ACTIONABILITY: Can it be executed as written?
5. ROBUSTNESS: Will it handle edge cases?

Provide scores and brief justification for each.`,
            weight: 0.35
        },
        comparator: {
            name: 'Gold Standard Comparator',
            description: 'Compares against best practices',
            temperament: 'comparative',
            systemPrompt: `You are a prompt quality comparator.

Compare this prompt against prompt engineering best practices:
- Does it follow the role-task-format pattern?
- Does it provide necessary context?
- Does it use examples effectively?
- Does it handle edge cases?
- Is it appropriately constrained?

Rate overall quality 1-10 relative to industry best practices.`,
            weight: 0.30
        }
    };

    constructor() {
        this.critics = JSON.parse(JSON.stringify(CriticSystem.CRITICS));
        this.evaluationHistory = [];
    }

    /**
     * Run all critics on a prompt
     * @param {string} prompt - The prompt to evaluate
     * @param {Object} context - Additional context (goal, benchmarks)
     * @returns {Object} - Aggregated scores and feedback
     */
    async evaluate(prompt, context = {}) {
        const results = {};
        
        // Run each critic
        for (const [criticId, critic] of Object.entries(this.critics)) {
            results[criticId] = await this.runCritic(criticId, prompt, context);
        }

        // Aggregate scores
        const aggregated = this.aggregate(results);
        
        // Store in history
        this.evaluationHistory.push({
            timestamp: Date.now(),
            prompt: prompt.substring(0, 200),
            results,
            aggregated
        });

        return aggregated;
    }

    /**
     * Run a single critic
     */
    async runCritic(criticId, prompt, context) {
        const critic = this.critics[criticId];
        
        // In production, this would call an LLM API
        // For now, we use heuristic scoring
        const score = this.heuristicScore(criticId, prompt, context);
        const feedback = this.generateFeedback(criticId, prompt, context, score);

        return {
            criticId,
            criticName: critic.name,
            score,
            feedback,
            weight: critic.weight,
            timestamp: Date.now()
        };
    }

    /**
     * Heuristic scoring based on critic type
     */
    heuristicScore(criticId, prompt, context) {
        let baseScore = 5.0;
        const promptLower = prompt.toLowerCase();
        const promptLength = prompt.length;

        switch (criticId) {
            case 'harsh':
                // Harsh critic - looks for problems
                
                // Penalize vague language
                const vagueWords = ['maybe', 'perhaps', 'might', 'some', 'things', 'stuff', 'etc'];
                vagueWords.forEach(w => {
                    if (promptLower.includes(w)) baseScore -= 0.4;
                });

                // Penalize lack of structure
                if (!prompt.includes('\n')) baseScore -= 1.0;
                
                // Penalize too short
                if (promptLength < 100) baseScore -= 1.5;
                
                // Penalize no clear instruction
                const hasInstruction = ['create', 'build', 'write', 'implement', 'generate'].some(
                    w => promptLower.includes(w)
                );
                if (!hasInstruction) baseScore -= 1.0;

                // Penalize missing context
                if (!promptLower.includes('you are') && !promptLower.includes('as a')) {
                    baseScore -= 0.5;
                }

                // Cap at 8 - harsh critics rarely give higher
                baseScore = Math.min(baseScore, 8);
                break;

            case 'rubric':
                // Rubric scorer - systematic evaluation
                const rubricScores = {
                    clarity: 5,
                    completeness: 5,
                    specificity: 5,
                    actionability: 5,
                    robustness: 5
                };

                // Clarity
                if (prompt.split(/[.!?]/).filter(s => s.trim()).length > 2) {
                    rubricScores.clarity += 1;
                }
                if (!prompt.includes('???') && !prompt.includes('...')) {
                    rubricScores.clarity += 0.5;
                }

                // Completeness
                if (promptLower.includes('format') || promptLower.includes('output')) {
                    rubricScores.completeness += 1;
                }
                if (promptLower.includes('example')) {
                    rubricScores.completeness += 1;
                }

                // Specificity
                if (/\d+/.test(prompt)) rubricScores.specificity += 0.5;
                if (/[A-Z][a-z]+(?:Script|Type)/.test(prompt)) rubricScores.specificity += 0.5;

                // Actionability
                if (prompt.includes('Step') || prompt.includes('1.') || prompt.includes('-')) {
                    rubricScores.actionability += 1;
                }

                // Robustness
                if (promptLower.includes('edge case') || promptLower.includes('error')) {
                    rubricScores.robustness += 1;
                }
                if (promptLower.includes('if ') || promptLower.includes('otherwise')) {
                    rubricScores.robustness += 0.5;
                }

                // Average rubric scores
                baseScore = Object.values(rubricScores).reduce((a, b) => a + b, 0) / 5;
                break;

            case 'comparator':
                // Comparator - best practices check
                
                // Role-task-format pattern
                if (promptLower.includes('you are')) baseScore += 1.0;
                if (['create', 'build', 'write', 'implement'].some(w => promptLower.includes(w))) {
                    baseScore += 0.5;
                }
                if (promptLower.includes('format') || promptLower.includes('output')) {
                    baseScore += 0.5;
                }

                // Examples
                if (promptLower.includes('example')) baseScore += 1.0;

                // Constraints
                if (promptLower.includes('must') || promptLower.includes('should')) {
                    baseScore += 0.5;
                }

                // Structure
                if (prompt.includes('\n\n') || prompt.includes('##')) {
                    baseScore += 0.5;
                }

                // Length appropriateness (100-800 tokens ideal)
                const tokens = prompt.length / 4;
                if (tokens >= 100 && tokens <= 800) {
                    baseScore += 0.5;
                }
                break;
        }

        // Goal alignment bonus
        if (context.goal) {
            const goalWords = context.goal.toLowerCase().split(/\s+/);
            const matchCount = goalWords.filter(w => promptLower.includes(w) && w.length > 3).length;
            baseScore += (matchCount / Math.max(goalWords.length, 1)) * 1.0;
        }

        return Math.max(1, Math.min(10, baseScore));
    }

    /**
     * Generate feedback based on evaluation
     */
    generateFeedback(criticId, prompt, context, score) {
        const feedback = [];
        const promptLower = prompt.toLowerCase();

        const weaknesses = [];
        const strengths = [];

        // Common checks
        if (!prompt.includes('\n')) {
            weaknesses.push('Lacks structure - consider breaking into sections');
        }
        if (prompt.length < 100) {
            weaknesses.push('Too brief - add more detail and context');
        }
        if (!promptLower.includes('you are') && !promptLower.includes('as a')) {
            weaknesses.push('Missing role definition');
        }
        if (!['create', 'build', 'write', 'implement', 'generate'].some(w => promptLower.includes(w))) {
            weaknesses.push('No clear action verb - what should be done?');
        }

        // Identify strengths
        if (promptLower.includes('example')) {
            strengths.push('Good use of examples');
        }
        if (promptLower.includes('step') || prompt.includes('1.')) {
            strengths.push('Good structural organization');
        }
        if (promptLower.includes('verify') || promptLower.includes('check')) {
            strengths.push('Includes verification steps');
        }

        // Critic-specific feedback
        switch (criticId) {
            case 'harsh':
                if (weaknesses.length === 0) {
                    feedback.push('Acceptable, but always room for improvement.');
                } else {
                    feedback.push(`Issues found: ${weaknesses.join('; ')}`);
                }
                break;

            case 'rubric':
                feedback.push(`Rubric evaluation complete.`);
                if (strengths.length > 0) {
                    feedback.push(`Strengths: ${strengths.join(', ')}`);
                }
                if (weaknesses.length > 0) {
                    feedback.push(`Areas to improve: ${weaknesses.join(', ')}`);
                }
                break;

            case 'comparator':
                if (score >= 7) {
                    feedback.push('Aligns well with prompt engineering best practices.');
                } else if (score >= 5) {
                    feedback.push('Partially follows best practices.');
                } else {
                    feedback.push('Significant deviation from best practices.');
                }
                if (weaknesses.length > 0) {
                    feedback.push(`Missing: ${weaknesses.slice(0, 2).join(', ')}`);
                }
                break;
        }

        return feedback.join(' ');
    }

    /**
     * Aggregate scores from all critics
     */
    aggregate(results) {
        let weightedSum = 0;
        let totalWeight = 0;
        const allFeedback = [];
        const breakdown = {};

        for (const [criticId, result] of Object.entries(results)) {
            weightedSum += result.score * result.weight;
            totalWeight += result.weight;
            allFeedback.push(`[${result.criticName}] ${result.feedback}`);
            breakdown[criticId] = {
                score: Math.round(result.score * 10) / 10,
                weight: result.weight,
                feedback: result.feedback
            };
        }

        const compositeScore = totalWeight > 0 ? weightedSum / totalWeight : 5.0;

        return {
            score: Math.round(compositeScore * 10) / 10,
            breakdown,
            feedback: allFeedback,
            unanimousAbove: Object.values(results).every(r => r.score >= 7),
            unanimousBelow: Object.values(results).every(r => r.score <= 4),
            disagreement: this.calculateDisagreement(results)
        };
    }

    /**
     * Calculate disagreement between critics
     */
    calculateDisagreement(results) {
        const scores = Object.values(results).map(r => r.score);
        if (scores.length < 2) return 0;

        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        const variance = scores.reduce((sum, s) => sum + Math.pow(s - avg, 2), 0) / scores.length;
        
        return Math.sqrt(variance); // Standard deviation
    }

    /**
     * Get improvement suggestions based on critic feedback
     */
    getSuggestions(aggregatedResult) {
        const suggestions = [];
        
        for (const [criticId, breakdown] of Object.entries(aggregatedResult.breakdown)) {
            if (breakdown.score < 6) {
                // Extract actionable suggestions from feedback
                const feedback = breakdown.feedback;
                
                if (feedback.includes('structure')) {
                    suggestions.push({
                        gene: 'format',
                        action: 'Add clear sections with headers or bullet points'
                    });
                }
                if (feedback.includes('role')) {
                    suggestions.push({
                        gene: 'role',
                        action: 'Define a specific role/persona for the AI'
                    });
                }
                if (feedback.includes('example')) {
                    suggestions.push({
                        gene: 'examples',
                        action: 'Add concrete examples of expected input/output'
                    });
                }
                if (feedback.includes('detail') || feedback.includes('brief')) {
                    suggestions.push({
                        gene: 'context',
                        action: 'Provide more context and background information'
                    });
                }
            }
        }

        // Remove duplicates
        const seen = new Set();
        return suggestions.filter(s => {
            const key = `${s.gene}-${s.action}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    /**
     * Adjust critic weights based on prediction accuracy
     */
    calibrate(predictions, outcomes) {
        // Track which critic best predicted actual outcomes
        const accuracy = {};
        
        for (const criticId of Object.keys(this.critics)) {
            accuracy[criticId] = { correct: 0, total: 0 };
        }

        // Compare predictions to outcomes
        for (let i = 0; i < predictions.length; i++) {
            const pred = predictions[i];
            const outcome = outcomes[i];
            
            for (const [criticId, result] of Object.entries(pred.breakdown)) {
                const predicted = result.score >= 7 ? 'good' : result.score <= 4 ? 'bad' : 'neutral';
                const actual = outcome >= 7 ? 'good' : outcome <= 4 ? 'bad' : 'neutral';
                
                accuracy[criticId].total++;
                if (predicted === actual) {
                    accuracy[criticId].correct++;
                }
            }
        }

        // Adjust weights based on accuracy
        for (const [criticId, acc] of Object.entries(accuracy)) {
            if (acc.total > 0) {
                const accuracyRate = acc.correct / acc.total;
                // Adjust weight toward accurate critics
                this.critics[criticId].weight *= (0.9 + accuracyRate * 0.2);
            }
        }

        // Normalize weights
        const totalWeight = Object.values(this.critics).reduce((s, c) => s + c.weight, 0);
        for (const critic of Object.values(this.critics)) {
            critic.weight /= totalWeight;
        }

        return accuracy;
    }
}

// Export
window.CriticSystem = CriticSystem;

