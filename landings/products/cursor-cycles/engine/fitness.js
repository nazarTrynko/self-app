/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BENCHMARK VERIFIER — Structured Assertion-Based Verification
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Parses benchmark rules into structured assertions and evaluates them
 * against prompt structure and content.
 */

class BenchmarkVerifier {
    /**
     * Rule type patterns for automatic detection
     */
    static RULE_PATTERNS = {
        // "Must include X" / "Should have X" / "Contains X"
        contains: /(?:must|should|needs? to)?\s*(?:include|have|contain)s?\s+(.+)/i,
        
        // "Must NOT include X" / "Should not have X"
        excludes: /(?:must|should)?\s*(?:not|n't)\s+(?:include|have|contain)s?\s+(.+)/i,
        
        // "At least N words/characters/lines"
        minLength: /(?:at least|minimum|min)\s+(\d+)\s+(words?|characters?|chars?|lines?|tokens?)/i,
        
        // "No more than N words/characters/lines"
        maxLength: /(?:no more than|maximum|max|at most)\s+(\d+)\s+(words?|characters?|chars?|lines?|tokens?)/i,
        
        // "Must have examples" / "Include examples"
        hasExamples: /(?:must |should )?(?:have|include|provide)s?\s+examples?/i,
        
        // "Must have constraints" / "Include requirements"
        hasConstraints: /(?:must |should )?(?:have|include|provide)s?\s+(?:constraints?|requirements?|rules?)/i,
        
        // "Must define role" / "Specify role"
        hasRole: /(?:must |should )?(?:define|specify|include|have)s?\s+(?:a )?roles?/i,
        
        // "Must have format" / "Specify output format"
        hasFormat: /(?:must |should )?(?:specify|define|include|have)s?\s+(?:output )?formats?/i,
        
        // "Must have safeguards" / "Include verification"
        hasSafeguards: /(?:must |should )?(?:have|include)s?\s+(?:safeguards?|verification|checks?)/i,
        
        // "Must be structured" / "Use sections"
        isStructured: /(?:must |should )?(?:be |use |have )?\s*(?:structured|sections?|organized|formatted)/i,
        
        // "Must include step-by-step" / "Chain of thought"
        hasReasoning: /(?:must |should )?(?:include|have|use)s?\s+(?:step-by-step|chain[- ]of[- ]thought|reasoning)/i,
        
        // Match regex pattern: "/pattern/"
        matchesPattern: /^\/(.+)\/([gi]*)$/,
        
        // "Must mention X" (specific keyword)
        mentions: /(?:must |should )?mentions?\s+(.+)/i,
        
        // "Must start with X"
        startsWith: /(?:must |should )?starts?\s+with\s+(.+)/i,
        
        // "Must end with X"  
        endsWith: /(?:must |should )?ends?\s+with\s+(.+)/i
    };

    /**
     * Parse a benchmark rule string into a structured assertion
     * @param {string} rule - The benchmark rule text
     * @returns {Object} Parsed assertion with type and parameters
     */
    static parseRule(rule) {
        const trimmedRule = rule.trim();
        
        // Check for regex pattern first
        const regexMatch = trimmedRule.match(this.RULE_PATTERNS.matchesPattern);
        if (regexMatch) {
            return {
                type: 'pattern',
                pattern: regexMatch[1],
                flags: regexMatch[2] || 'i',
                original: rule
            };
        }

        // Check for exclusion (must not include)
        const excludeMatch = trimmedRule.match(this.RULE_PATTERNS.excludes);
        if (excludeMatch) {
            return {
                type: 'excludes',
                value: excludeMatch[1].trim(),
                original: rule
            };
        }

        // Check for minimum length
        const minLengthMatch = trimmedRule.match(this.RULE_PATTERNS.minLength);
        if (minLengthMatch) {
            return {
                type: 'minLength',
                value: parseInt(minLengthMatch[1]),
                unit: this.normalizeUnit(minLengthMatch[2]),
                original: rule
            };
        }

        // Check for maximum length
        const maxLengthMatch = trimmedRule.match(this.RULE_PATTERNS.maxLength);
        if (maxLengthMatch) {
            return {
                type: 'maxLength',
                value: parseInt(maxLengthMatch[1]),
                unit: this.normalizeUnit(maxLengthMatch[2]),
                original: rule
            };
        }

        // Check for gene-specific rules
        if (this.RULE_PATTERNS.hasExamples.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'examples', original: rule };
        }
        if (this.RULE_PATTERNS.hasConstraints.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'constraints', original: rule };
        }
        if (this.RULE_PATTERNS.hasRole.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'role', original: rule };
        }
        if (this.RULE_PATTERNS.hasFormat.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'format', original: rule };
        }
        if (this.RULE_PATTERNS.hasSafeguards.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'safeguards', original: rule };
        }
        if (this.RULE_PATTERNS.hasReasoning.test(trimmedRule)) {
            return { type: 'geneActive', gene: 'reasoning', original: rule };
        }

        // Check for structure requirement
        if (this.RULE_PATTERNS.isStructured.test(trimmedRule)) {
            return { type: 'isStructured', original: rule };
        }

        // Check for startsWith
        const startsWithMatch = trimmedRule.match(this.RULE_PATTERNS.startsWith);
        if (startsWithMatch) {
            return {
                type: 'startsWith',
                value: startsWithMatch[1].trim(),
                original: rule
            };
        }

        // Check for endsWith
        const endsWithMatch = trimmedRule.match(this.RULE_PATTERNS.endsWith);
        if (endsWithMatch) {
            return {
                type: 'endsWith',
                value: endsWithMatch[1].trim(),
                original: rule
            };
        }

        // Check for mentions
        const mentionsMatch = trimmedRule.match(this.RULE_PATTERNS.mentions);
        if (mentionsMatch) {
            return {
                type: 'contains',
                value: mentionsMatch[1].trim(),
                original: rule
            };
        }

        // Check for contains (general)
        const containsMatch = trimmedRule.match(this.RULE_PATTERNS.contains);
        if (containsMatch) {
            return {
                type: 'contains',
                value: containsMatch[1].trim(),
                original: rule
            };
        }

        // Default: treat as keyword contains check
        return {
            type: 'keywords',
            value: trimmedRule,
            original: rule
        };
    }

    /**
     * Normalize length unit to standard form
     */
    static normalizeUnit(unit) {
        const lower = unit.toLowerCase();
        if (lower.startsWith('word')) return 'words';
        if (lower.startsWith('char')) return 'characters';
        if (lower.startsWith('line')) return 'lines';
        if (lower.startsWith('token')) return 'tokens';
        return 'words';
    }

    /**
     * Evaluate a parsed assertion against prompt and DNA
     * @param {Object} assertion - Parsed assertion
     * @param {string} prompt - The prompt text
     * @param {PromptDNA} dna - The prompt DNA
     * @returns {Object} Evaluation result
     */
    static evaluate(assertion, prompt, dna) {
        const promptLower = prompt.toLowerCase();
        
        switch (assertion.type) {
            case 'contains': {
                const valueLower = assertion.value.toLowerCase();
                const passed = promptLower.includes(valueLower);
                return {
                    passed,
                    score: passed ? 1.0 : 0.0,
                    reason: passed 
                        ? `Contains "${assertion.value}"` 
                        : `Missing "${assertion.value}"`
                };
            }

            case 'excludes': {
                const valueLower = assertion.value.toLowerCase();
                const passed = !promptLower.includes(valueLower);
                return {
                    passed,
                    score: passed ? 1.0 : 0.0,
                    reason: passed 
                        ? `Does not contain "${assertion.value}"` 
                        : `Unexpectedly contains "${assertion.value}"`
                };
            }

            case 'minLength': {
                const count = this.countUnits(prompt, assertion.unit);
                const passed = count >= assertion.value;
                return {
                    passed,
                    score: Math.min(1.0, count / assertion.value),
                    reason: passed 
                        ? `Has ${count} ${assertion.unit} (>= ${assertion.value})` 
                        : `Only ${count} ${assertion.unit} (need >= ${assertion.value})`
                };
            }

            case 'maxLength': {
                const count = this.countUnits(prompt, assertion.unit);
                const passed = count <= assertion.value;
                return {
                    passed,
                    score: passed ? 1.0 : Math.max(0, 1 - (count - assertion.value) / assertion.value),
                    reason: passed 
                        ? `Has ${count} ${assertion.unit} (<= ${assertion.value})` 
                        : `Has ${count} ${assertion.unit} (need <= ${assertion.value})`
                };
            }

            case 'geneActive': {
                const gene = dna?.genes?.[assertion.gene];
                const passed = gene && gene.active && gene.content && gene.content.trim().length > 0;
                return {
                    passed,
                    score: passed ? 1.0 : 0.0,
                    reason: passed 
                        ? `Has active ${assertion.gene} gene` 
                        : `Missing or inactive ${assertion.gene} gene`
                };
            }

            case 'isStructured': {
                const hasLists = /\n\s*[-*•]\s/.test(prompt);
                const hasNumbering = /\n\s*\d+[.)]\s/.test(prompt);
                const hasSections = /\n##?\s/.test(prompt) || /\n[A-Z][^:]+:\s*\n/.test(prompt);
                const hasLineBreaks = (prompt.match(/\n\n/g) || []).length >= 2;
                
                const structureScore = (hasLists ? 0.3 : 0) + 
                                      (hasNumbering ? 0.3 : 0) + 
                                      (hasSections ? 0.2 : 0) + 
                                      (hasLineBreaks ? 0.2 : 0);
                const passed = structureScore >= 0.5;
                
                return {
                    passed,
                    score: structureScore,
                    reason: passed 
                        ? `Well-structured with lists/sections` 
                        : `Lacks clear structure`
                };
            }

            case 'startsWith': {
                const valueLower = assertion.value.toLowerCase();
                const passed = promptLower.trimStart().startsWith(valueLower);
                return {
                    passed,
                    score: passed ? 1.0 : 0.0,
                    reason: passed 
                        ? `Starts with "${assertion.value}"` 
                        : `Does not start with "${assertion.value}"`
                };
            }

            case 'endsWith': {
                const valueLower = assertion.value.toLowerCase();
                const passed = promptLower.trimEnd().endsWith(valueLower);
                return {
                    passed,
                    score: passed ? 1.0 : 0.0,
                    reason: passed 
                        ? `Ends with "${assertion.value}"` 
                        : `Does not end with "${assertion.value}"`
                };
            }

            case 'pattern': {
                try {
                    const regex = new RegExp(assertion.pattern, assertion.flags);
                    const passed = regex.test(prompt);
                    return {
                        passed,
                        score: passed ? 1.0 : 0.0,
                        reason: passed 
                            ? `Matches pattern /${assertion.pattern}/` 
                            : `Does not match pattern /${assertion.pattern}/`
                    };
                } catch (e) {
                    return {
                        passed: false,
                        score: 0,
                        reason: `Invalid regex pattern: ${e.message}`
                    };
                }
            }

            case 'keywords': {
                // Smart keyword matching for general rules
                const keywords = assertion.value.toLowerCase()
                    .split(/\s+/)
                    .filter(w => w.length > 3 && !this.isStopWord(w));
                
                if (keywords.length === 0) {
                    return { passed: true, score: 1.0, reason: 'No meaningful keywords to check' };
                }
                
                const matched = keywords.filter(k => promptLower.includes(k));
                const ratio = matched.length / keywords.length;
                const passed = ratio >= 0.6; // Need at least 60% keyword match
                
                return {
                    passed,
                    score: ratio,
                    reason: passed 
                        ? `Matches ${matched.length}/${keywords.length} keywords` 
                        : `Only matches ${matched.length}/${keywords.length} keywords`
                };
            }

            default:
                return {
                    passed: false,
                    score: 0,
                    reason: `Unknown assertion type: ${assertion.type}`
                };
        }
    }

    /**
     * Count units in prompt
     */
    static countUnits(prompt, unit) {
        switch (unit) {
            case 'words':
                return prompt.split(/\s+/).filter(w => w.trim()).length;
            case 'characters':
                return prompt.length;
            case 'lines':
                return prompt.split('\n').filter(l => l.trim()).length;
            case 'tokens':
                return Math.ceil(prompt.length / 4); // Rough estimate
            default:
                return prompt.split(/\s+/).length;
        }
    }

    /**
     * Check if word is a stop word
     */
    static isStopWord(word) {
        const stopWords = new Set([
            'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were',
            'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
            'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall',
            'can', 'need', 'dare', 'ought', 'used', 'to', 'of', 'in', 'for',
            'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during',
            'before', 'after', 'above', 'below', 'between', 'under', 'again',
            'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
            'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
            'only', 'own', 'same', 'than', 'too', 'very', 'just', 'also'
        ]);
        return stopWords.has(word.toLowerCase());
    }

    /**
     * Run all benchmarks and return aggregate results
     * @param {string} prompt - The prompt text
     * @param {PromptDNA} dna - The prompt DNA
     * @param {string[]} benchmarks - Array of benchmark rule strings
     * @returns {Object} Aggregate results
     */
    static runAll(prompt, dna, benchmarks) {
        if (!benchmarks || benchmarks.length === 0) {
            return { score: null, results: [], passed: 0, total: 0 };
        }

        const results = [];
        let totalScore = 0;
        let passedCount = 0;

        for (const benchmark of benchmarks) {
            const assertion = this.parseRule(benchmark);
            const result = this.evaluate(assertion, prompt, dna);
            
            results.push({
                rule: benchmark,
                assertion,
                ...result
            });
            
            totalScore += result.score;
            if (result.passed) passedCount++;
        }

        return {
            score: (totalScore / benchmarks.length) * 10, // Scale to 0-10
            passed: passedCount,
            total: benchmarks.length,
            passRate: passedCount / benchmarks.length,
            results
        };
    }
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FITNESS SYSTEM — Multi-Dimensional Fitness Evaluation
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Evaluates prompts across 6 dimensions with configurable weights.
 * Supports both objective verification and subjective scoring.
 */

class FitnessSystem {
    /**
     * Default fitness dimensions with weights
     */
    static DEFAULT_DIMENSIONS = {
        clarity: {
            name: 'Clarity',
            weight: 0.15,
            description: 'How clear and understandable is the prompt?',
            criteria: [
                'Uses simple, direct language',
                'Avoids ambiguity',
                'Has logical structure',
                'Can be understood by someone unfamiliar with context'
            ]
        },
        completeness: {
            name: 'Completeness',
            weight: 0.20,
            description: 'Does the prompt cover all necessary aspects?',
            criteria: [
                'Addresses the main objective',
                'Includes edge cases',
                'Specifies expected output format',
                'Provides necessary context'
            ]
        },
        specificity: {
            name: 'Specificity',
            weight: 0.15,
            description: 'How specific and actionable is the prompt?',
            criteria: [
                'Uses concrete terms instead of vague ones',
                'Provides specific examples',
                'Defines success criteria',
                'Avoids generic language'
            ]
        },
        robustness: {
            name: 'Robustness',
            weight: 0.20,
            description: 'Does the prompt handle varied inputs well?',
            criteria: [
                'Works with different input formats',
                'Handles edge cases gracefully',
                'Has fallback behaviors',
                'Is resilient to misinterpretation'
            ]
        },
        efficiency: {
            name: 'Efficiency',
            weight: 0.15,
            description: 'Is the prompt concise and token-efficient?',
            criteria: [
                'No unnecessary repetition',
                'Compact without losing meaning',
                'Well-organized sections',
                'No filler content'
            ]
        },
        novelty: {
            name: 'Novelty',
            weight: 0.15,
            description: 'Is the prompt differentiated from others?',
            criteria: [
                'Uses unique approaches',
                'Not duplicate of existing prompts',
                'Brings new perspective',
                'Explores different solution paths'
            ]
        }
    };

    constructor(customWeights = {}) {
        this.dimensions = JSON.parse(JSON.stringify(FitnessSystem.DEFAULT_DIMENSIONS));
        
        // Apply custom weights
        for (const [dim, weight] of Object.entries(customWeights)) {
            if (this.dimensions[dim]) {
                this.dimensions[dim].weight = weight;
            }
        }

        // Normalize weights to sum to 1
        this.normalizeWeights();
    }

    /**
     * Normalize dimension weights to sum to 1.0
     */
    normalizeWeights() {
        const total = Object.values(this.dimensions).reduce((sum, d) => sum + d.weight, 0);
        if (total > 0) {
            for (const dim of Object.values(this.dimensions)) {
                dim.weight = dim.weight / total;
            }
        }
    }

    /**
     * Calculate fitness score for a PromptDNA
     * @param {PromptDNA} dna - The DNA to evaluate
     * @param {Object} options - Evaluation options
     * @returns {Object} - Fitness results with composite and dimension scores
     */
    async evaluate(dna, options = {}) {
        const prompt = dna.toPrompt();
        const { 
            population = [],  // For novelty comparison
            benchmarks = [],  // Objective tests
            goal = ''         // Target goal
        } = options;

        const scores = {};

        // Evaluate each dimension
        scores.clarity = this.evaluateClarity(prompt, dna);
        scores.completeness = this.evaluateCompleteness(prompt, dna, goal);
        scores.specificity = this.evaluateSpecificity(prompt, dna);
        scores.robustness = this.evaluateRobustness(prompt, dna);
        scores.efficiency = this.evaluateEfficiency(prompt, dna);
        scores.novelty = this.evaluateNovelty(prompt, dna, population);

        // Run objective benchmarks if provided
        let objectiveScore = null;
        if (benchmarks.length > 0) {
            objectiveScore = await this.runBenchmarks(prompt, benchmarks, dna);
        }

        // Calculate composite score
        let composite = 0;
        for (const [dim, dimConfig] of Object.entries(this.dimensions)) {
            composite += scores[dim] * dimConfig.weight;
        }

        // Blend with objective score if available (60% objective, 40% subjective)
        if (objectiveScore !== null) {
            composite = objectiveScore * 0.6 + composite * 0.4;
        }

        // Update DNA with scores
        dna.fitness = composite;
        dna.dimensions = scores;

        return {
            composite: Math.round(composite * 100) / 100,
            dimensions: scores,
            objectiveScore,
            rawPrompt: prompt,
            tokenEstimate: dna.estimateTokens()
        };
    }

    /**
     * Evaluate clarity dimension
     */
    evaluateClarity(prompt, dna) {
        let score = 5.0; // Base score

        // Check sentence structure
        const sentences = prompt.split(/[.!?]+/).filter(s => s.trim());
        const avgSentenceLength = sentences.reduce((sum, s) => sum + s.split(' ').length, 0) / Math.max(sentences.length, 1);
        
        // Prefer moderate sentence length (10-20 words)
        if (avgSentenceLength >= 10 && avgSentenceLength <= 20) {
            score += 1.5;
        } else if (avgSentenceLength < 10 || avgSentenceLength > 30) {
            score -= 1.0;
        }

        // Check for clear structure (sections, lists)
        if (prompt.includes('\n-') || prompt.includes('\n1.') || prompt.includes('\n##')) {
            score += 1.0;
        }

        // Penalize very long prompts without structure
        if (prompt.length > 1000 && !prompt.includes('\n\n')) {
            score -= 1.5;
        }

        // Bonus for clear role definition
        if (dna.genes.role.active && dna.genes.role.content) {
            score += 0.5;
        }

        // Check for ambiguous words
        const ambiguousWords = ['maybe', 'perhaps', 'somehow', 'something', 'stuff', 'things', 'etc'];
        const foundAmbiguous = ambiguousWords.filter(w => prompt.toLowerCase().includes(w));
        score -= foundAmbiguous.length * 0.3;

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Evaluate completeness dimension
     */
    evaluateCompleteness(prompt, dna, goal) {
        let score = 5.0;

        // Check for presence of key genes
        const activeGenes = Object.values(dna.genes).filter(g => g.active && g.content);
        score += Math.min(activeGenes.length * 0.5, 2.0);

        // Check if goal keywords are addressed
        if (goal) {
            const goalWords = goal.toLowerCase().split(/\s+/).filter(w => w.length > 4);
            const promptLower = prompt.toLowerCase();
            const matchedWords = goalWords.filter(w => promptLower.includes(w));
            score += (matchedWords.length / Math.max(goalWords.length, 1)) * 2.0;
        }

        // Check for output format specification
        if (dna.genes.format.active && dna.genes.format.content) {
            score += 0.8;
        }

        // Check for constraints
        if (dna.genes.constraints.active && dna.genes.constraints.content) {
            const constraintCount = (dna.genes.constraints.content.match(/\n/g) || []).length + 1;
            score += Math.min(constraintCount * 0.3, 1.0);
        }

        // Penalize if no task is defined
        if (!dna.genes.task.content || dna.genes.task.content.length < 20) {
            score -= 2.0;
        }

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Evaluate specificity dimension
     */
    evaluateSpecificity(prompt, dna) {
        let score = 5.0;

        // Check for concrete numbers/quantities
        const numbers = prompt.match(/\d+/g) || [];
        score += Math.min(numbers.length * 0.2, 1.0);

        // Check for specific terminology
        const technicalTerms = prompt.match(/\b[A-Z][a-zA-Z]+(?:Script|Type|SQL|API|CSS|HTML|JSON|XML|HTTP)\b/g) || [];
        score += Math.min(technicalTerms.length * 0.3, 1.5);

        // Check for examples
        if (dna.genes.examples.active && dna.genes.examples.content) {
            score += 1.5;
        }

        // Penalize vague words
        const vagueWords = ['good', 'nice', 'proper', 'appropriate', 'suitable', 'various', 'certain', 'some'];
        const foundVague = vagueWords.filter(w => prompt.toLowerCase().includes(w));
        score -= foundVague.length * 0.2;

        // Check for action verbs
        const actionVerbs = ['create', 'build', 'implement', 'design', 'develop', 'write', 'generate', 'produce'];
        const foundActions = actionVerbs.filter(v => prompt.toLowerCase().includes(v));
        score += Math.min(foundActions.length * 0.3, 1.0);

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Evaluate robustness dimension
     */
    evaluateRobustness(prompt, dna) {
        let score = 5.0;

        // Check for edge case handling
        const edgeCaseWords = ['edge case', 'error', 'exception', 'invalid', 'empty', 'null', 'undefined', 'missing'];
        const foundEdgeCases = edgeCaseWords.filter(w => prompt.toLowerCase().includes(w));
        score += Math.min(foundEdgeCases.length * 0.4, 2.0);

        // Check for fallback behaviors
        if (prompt.toLowerCase().includes('if ') || prompt.toLowerCase().includes('otherwise')) {
            score += 0.8;
        }

        // Check for safeguards
        if (dna.genes.safeguards.active && dna.genes.safeguards.content) {
            score += 1.5;
        }

        // Check for validation mentions
        const validationWords = ['verify', 'validate', 'check', 'ensure', 'confirm'];
        const foundValidation = validationWords.filter(w => prompt.toLowerCase().includes(w));
        score += Math.min(foundValidation.length * 0.3, 1.0);

        // Penalize prompts that are too rigid
        const rigidWords = ['only', 'never', 'always', 'must', 'exactly'];
        const foundRigid = rigidWords.filter(w => prompt.toLowerCase().includes(w));
        if (foundRigid.length > 3) {
            score -= 0.5; // Too many rigid constraints reduce flexibility
        }

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Evaluate efficiency dimension
     */
    evaluateEfficiency(prompt, dna) {
        let score = 5.0;
        const tokens = dna.estimateTokens();

        // Optimal token range: 100-500
        if (tokens >= 100 && tokens <= 500) {
            score += 2.0;
        } else if (tokens < 50) {
            score -= 1.0; // Too short
        } else if (tokens > 1000) {
            score -= 1.5; // Too long
        } else if (tokens > 500) {
            score -= 0.5; // Slightly long
        }

        // Check for repetition
        const words = prompt.toLowerCase().split(/\s+/);
        const uniqueWords = new Set(words);
        const repetitionRatio = uniqueWords.size / words.length;
        
        if (repetitionRatio > 0.7) {
            score += 1.0; // Good variety
        } else if (repetitionRatio < 0.5) {
            score -= 1.5; // Too much repetition
        }

        // Check for efficient structure
        const activeGenes = dna.getActiveGenesCount();
        const contentPerGene = prompt.length / Math.max(activeGenes, 1);
        
        // Penalize if too much content per gene (unfocused)
        if (contentPerGene > 500) {
            score -= 1.0;
        }

        // Bonus for well-organized structure
        if (prompt.includes('\n') && !prompt.includes('\n\n\n')) {
            score += 0.5;
        }

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Evaluate novelty dimension (compared to population)
     */
    evaluateNovelty(prompt, dna, population) {
        let score = 5.0;

        if (population.length === 0) {
            return 7.0; // First in population is novel by default
        }

        // Calculate similarity to other prompts
        const similarities = population
            .filter(other => other.id !== dna.id)
            .map(other => this.calculateSimilarity(prompt, other.toPrompt()));

        if (similarities.length === 0) {
            return 7.0;
        }

        const avgSimilarity = similarities.reduce((a, b) => a + b, 0) / similarities.length;
        const maxSimilarity = Math.max(...similarities);

        // High similarity = low novelty
        score = 10 - (avgSimilarity * 5);

        // Penalize if too similar to any single prompt
        if (maxSimilarity > 0.9) {
            score -= 2.0;
        }

        // Bonus for unique mutation history
        const mutationTypes = new Set(dna.mutations.map(m => m.type));
        score += Math.min(mutationTypes.size * 0.3, 1.0);

        return Math.max(1, Math.min(10, score));
    }

    /**
     * Calculate similarity between two prompts (0-1)
     */
    calculateSimilarity(prompt1, prompt2) {
        const words1 = new Set(prompt1.toLowerCase().split(/\s+/));
        const words2 = new Set(prompt2.toLowerCase().split(/\s+/));
        
        const intersection = [...words1].filter(w => words2.has(w));
        const union = new Set([...words1, ...words2]);
        
        return intersection.length / union.size; // Jaccard similarity
    }

    /**
     * Run objective benchmarks using structured assertion verification
     * @param {string} prompt - The prompt text
     * @param {string[]} benchmarks - Array of benchmark rules
     * @param {PromptDNA} dna - The prompt DNA (optional, for gene checks)
     * @returns {Object} Benchmark results with score and details
     */
    async runBenchmarks(prompt, benchmarks, dna = null) {
        if (!benchmarks || benchmarks.length === 0) return null;

        // Use the BenchmarkVerifier for structured evaluation
        const results = BenchmarkVerifier.runAll(prompt, dna, benchmarks);
        
        // Store detailed results for debugging/display
        this.lastBenchmarkResults = results;
        
        return results.score;
    }

    /**
     * Evaluate a single benchmark rule
     * @param {string} prompt - The prompt text
     * @param {string} benchmark - The benchmark rule string
     * @param {PromptDNA} dna - The prompt DNA (optional)
     * @returns {Object} Evaluation result
     */
    evaluateBenchmark(prompt, benchmark, dna = null) {
        const assertion = BenchmarkVerifier.parseRule(benchmark);
        const result = BenchmarkVerifier.evaluate(assertion, prompt, dna);
        
        return {
            benchmark,
            assertion,
            ...result
        };
    }

    /**
     * Get the last benchmark evaluation results (for UI display)
     */
    getLastBenchmarkResults() {
        return this.lastBenchmarkResults || null;
    }

    /**
     * Update dimension weights based on what correlates with success
     */
    updateWeights(successfulDNAs, unsuccessfulDNAs) {
        const deltas = {};

        for (const dim of Object.keys(this.dimensions)) {
            const successAvg = successfulDNAs.length > 0 
                ? successfulDNAs.reduce((sum, d) => sum + (d.dimensions[dim] || 5), 0) / successfulDNAs.length 
                : 5;
            const failAvg = unsuccessfulDNAs.length > 0
                ? unsuccessfulDNAs.reduce((sum, d) => sum + (d.dimensions[dim] || 5), 0) / unsuccessfulDNAs.length
                : 5;

            // If successful DNAs score higher on this dimension, increase weight
            const diff = successAvg - failAvg;
            deltas[dim] = diff * 0.01; // Small adjustments
        }

        // Apply deltas
        for (const [dim, delta] of Object.entries(deltas)) {
            this.dimensions[dim].weight = Math.max(0.05, Math.min(0.4, this.dimensions[dim].weight + delta));
        }

        this.normalizeWeights();
        return deltas;
    }

    /**
     * Get current weight configuration
     */
    getWeights() {
        const weights = {};
        for (const [dim, config] of Object.entries(this.dimensions)) {
            weights[dim] = {
                name: config.name,
                weight: Math.round(config.weight * 100),
                description: config.description
            };
        }
        return weights;
    }
}

// Export
window.FitnessSystem = FitnessSystem;
window.BenchmarkVerifier = BenchmarkVerifier;

