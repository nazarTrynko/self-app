/**
 * ═══════════════════════════════════════════════════════════════════════════
 * META-LEARNING SYSTEM — Self-Improving Evolution Parameters
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The meta-learning layer that observes evolution patterns and adjusts
 * fitness weights, mutation rates, and selection pressure over time.
 */

class MetaLearningSystem {
    constructor(evolutionEngine) {
        this.engine = evolutionEngine;
        
        // Track what correlates with success
        this.correlations = {
            dimensions: {},      // Which fitness dimensions predict success
            mutations: {},       // Which mutation types improve fitness
            genes: {},          // Which genes matter most
            crossover: {}       // Which crossover strategies work
        };

        // Learning parameters
        this.learningRate = 0.1;
        this.observationWindow = 10; // Generations to look back
        this.minObservations = 5;
        
        // Adaptation state
        this.adaptations = [];
        this.plateauCount = 0;
        this.diversityThreshold = 0.3;
    }

    /**
     * Analyze evolution progress and suggest adaptations
     */
    analyze() {
        if (this.engine.generation < this.minObservations) {
            return { suggestions: [], confidence: 0 };
        }

        const analysis = {
            fitnessProgress: this.analyzeFitnessProgress(),
            diversityTrend: this.analyzeDiversityTrend(),
            mutationEffectiveness: this.analyzeMutationEffectiveness(),
            dimensionCorrelations: this.analyzeDimensionCorrelations(),
            suggestions: []
        };

        // Generate suggestions based on analysis
        analysis.suggestions = this.generateSuggestions(analysis);
        analysis.confidence = this.calculateConfidence(analysis);

        return analysis;
    }

    /**
     * Analyze fitness progress over time
     */
    analyzeFitnessProgress() {
        const stats = this.engine.stats;
        const window = Math.min(this.observationWindow, stats.bestFitness.length);
        
        if (window < 2) return { trend: 'unknown', rate: 0 };

        const recent = stats.bestFitness.slice(-window);
        const older = stats.bestFitness.slice(-window * 2, -window);

        const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
        const recentMax = Math.max(...recent);
        const recentMin = Math.min(...recent);
        
        // Calculate improvement rate
        let olderAvg = recentAvg;
        if (older.length > 0) {
            olderAvg = older.reduce((a, b) => a + b, 0) / older.length;
        }
        
        const improvementRate = (recentAvg - olderAvg) / Math.max(olderAvg, 1);
        const variance = recentMax - recentMin;

        let trend = 'stable';
        if (improvementRate > 0.05) trend = 'improving';
        else if (improvementRate < -0.02) trend = 'declining';
        else if (variance < 0.1) trend = 'plateau';

        return {
            trend,
            rate: improvementRate,
            variance,
            recentAvg,
            recentMax,
            window
        };
    }

    /**
     * Analyze diversity trends
     */
    analyzeDiversityTrend() {
        const diversity = this.engine.stats.diversity;
        if (diversity.length < 2) return { trend: 'unknown', current: 0 };

        const current = diversity[diversity.length - 1];
        const previous = diversity.length > 5 
            ? diversity.slice(-5, -1).reduce((a, b) => a + b, 0) / 4
            : diversity[diversity.length - 2];

        const change = current - previous;
        
        let trend = 'stable';
        if (change > 0.1) trend = 'increasing';
        else if (change < -0.1) trend = 'decreasing';

        return {
            trend,
            current,
            previous,
            change,
            belowThreshold: current < this.diversityThreshold
        };
    }

    /**
     * Analyze which mutations are most effective
     */
    analyzeMutationEffectiveness() {
        const history = this.engine.history;
        if (history.length < this.minObservations) {
            return { effective: [], ineffective: [] };
        }

        // Track mutation -> fitness change
        const mutationImpact = {};
        
        for (let i = 1; i < history.length; i++) {
            const prevGen = history[i - 1];
            const currGen = history[i];
            
            for (const curr of currGen.population) {
                if (curr.mutations && curr.mutations.length > 0) {
                    const parent = prevGen.population.find(p => 
                        curr.parentIds && curr.parentIds.includes(p.id)
                    );
                    
                    if (parent) {
                        const improvement = (curr.fitness || 5) - (parent.fitness || 5);
                        
                        for (const mutation of curr.mutations) {
                            const key = `${mutation.gene}:${mutation.type}`;
                            if (!mutationImpact[key]) {
                                mutationImpact[key] = { total: 0, count: 0 };
                            }
                            mutationImpact[key].total += improvement;
                            mutationImpact[key].count++;
                        }
                    }
                }
            }
        }

        // Calculate average impact
        const impacts = Object.entries(mutationImpact)
            .map(([key, data]) => ({
                mutation: key,
                avgImpact: data.count > 0 ? data.total / data.count : 0,
                count: data.count
            }))
            .filter(m => m.count >= 2)
            .sort((a, b) => b.avgImpact - a.avgImpact);

        return {
            effective: impacts.filter(m => m.avgImpact > 0).slice(0, 5),
            ineffective: impacts.filter(m => m.avgImpact < 0).slice(0, 5),
            all: impacts
        };
    }

    /**
     * Analyze which fitness dimensions correlate with overall success
     */
    analyzeDimensionCorrelations() {
        const population = this.engine.population;
        if (population.length < 4) return {};

        const correlations = {};
        const dimensions = Object.keys(FitnessSystem.DEFAULT_DIMENSIONS);

        for (const dim of dimensions) {
            const pairs = population
                .filter(d => d.fitness !== null && d.dimensions && d.dimensions[dim] !== undefined)
                .map(d => ({ overall: d.fitness, dimension: d.dimensions[dim] }));

            if (pairs.length >= 4) {
                correlations[dim] = this.calculateCorrelation(
                    pairs.map(p => p.dimension),
                    pairs.map(p => p.overall)
                );
            }
        }

        return correlations;
    }

    /**
     * Calculate Pearson correlation coefficient
     */
    calculateCorrelation(x, y) {
        if (x.length !== y.length || x.length < 2) return 0;

        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((total, xi, i) => total + xi * y[i], 0);
        const sumX2 = x.reduce((total, xi) => total + xi * xi, 0);
        const sumY2 = y.reduce((total, yi) => total + yi * yi, 0);

        const numerator = n * sumXY - sumX * sumY;
        const denominator = Math.sqrt(
            (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
        );

        return denominator === 0 ? 0 : numerator / denominator;
    }

    /**
     * Generate adaptive suggestions based on analysis
     */
    generateSuggestions(analysis) {
        const suggestions = [];

        // Fitness progress suggestions
        if (analysis.fitnessProgress.trend === 'plateau') {
            this.plateauCount++;
            
            if (this.plateauCount >= 3) {
                suggestions.push({
                    type: 'diversity_injection',
                    reason: 'Persistent plateau detected',
                    action: 'Inject wild variants and increase mutation rate',
                    params: { mutationRate: 0.4, wildCount: 3 }
                });
            } else {
                suggestions.push({
                    type: 'increase_mutation',
                    reason: 'Fitness plateau detected',
                    action: 'Increase mutation rate to explore more',
                    params: { mutationRate: this.engine.options.mutationRate * 1.3 }
                });
            }
        } else if (analysis.fitnessProgress.trend === 'improving') {
            this.plateauCount = 0;
            
            if (analysis.fitnessProgress.rate > 0.1) {
                suggestions.push({
                    type: 'increase_selection',
                    reason: 'Strong improvement trend',
                    action: 'Increase selection pressure to exploit gains',
                    params: { eliteCount: Math.min(4, this.engine.options.populationSize / 2) }
                });
            }
        } else if (analysis.fitnessProgress.trend === 'declining') {
            suggestions.push({
                type: 'revert_elite',
                reason: 'Fitness declining',
                action: 'Reduce mutation, increase elite preservation',
                params: { mutationRate: 0.15, eliteCount: 3 }
            });
        }

        // Diversity suggestions
        if (analysis.diversityTrend.belowThreshold) {
            suggestions.push({
                type: 'boost_diversity',
                reason: 'Population diversity too low',
                action: 'Inject random variants and reduce crossover rate',
                params: { crossoverRate: 0.5, injectCount: 2 }
            });
        }

        // Mutation effectiveness suggestions
        if (analysis.mutationEffectiveness.effective.length > 0) {
            const bestMutation = analysis.mutationEffectiveness.effective[0];
            suggestions.push({
                type: 'favor_mutation',
                reason: `${bestMutation.mutation} shows positive impact`,
                action: 'Increase probability of effective mutations',
                params: { favoredMutation: bestMutation.mutation }
            });
        }

        // Dimension weight suggestions
        const dimCorr = analysis.dimensionCorrelations;
        const highCorr = Object.entries(dimCorr)
            .filter(([_, corr]) => Math.abs(corr) > 0.5)
            .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

        if (highCorr.length > 0) {
            suggestions.push({
                type: 'adjust_weights',
                reason: 'Strong dimension correlations detected',
                action: 'Adjust fitness dimension weights',
                params: {
                    weightAdjustments: highCorr.slice(0, 3).map(([dim, corr]) => ({
                        dimension: dim,
                        adjustment: corr > 0 ? 1.2 : 0.8
                    }))
                }
            });
        }

        return suggestions;
    }

    /**
     * Calculate confidence in analysis
     */
    calculateConfidence(analysis) {
        let confidence = 0.5; // Base confidence

        // More generations = more confidence
        const genFactor = Math.min(this.engine.generation / 20, 1);
        confidence += genFactor * 0.2;

        // Clear trends = more confidence
        if (analysis.fitnessProgress.trend !== 'unknown') {
            confidence += 0.1;
        }
        if (Math.abs(analysis.fitnessProgress.rate) > 0.05) {
            confidence += 0.1;
        }

        // Strong correlations = more confidence
        const strongCorrelations = Object.values(analysis.dimensionCorrelations)
            .filter(c => Math.abs(c) > 0.6).length;
        confidence += strongCorrelations * 0.05;

        return Math.min(0.95, confidence);
    }

    /**
     * Apply suggested adaptations to the engine
     */
    applyAdaptation(suggestion) {
        const { type, params } = suggestion;

        switch (type) {
            case 'increase_mutation':
            case 'decrease_mutation':
                this.engine.options.mutationRate = params.mutationRate;
                break;

            case 'increase_selection':
            case 'revert_elite':
                if (params.eliteCount) {
                    this.engine.options.eliteCount = params.eliteCount;
                }
                if (params.mutationRate) {
                    this.engine.options.mutationRate = params.mutationRate;
                }
                break;

            case 'diversity_injection':
                this.engine.options.mutationRate = params.mutationRate;
                this.engine.injectDiversity();
                break;

            case 'boost_diversity':
                this.engine.options.crossoverRate = params.crossoverRate;
                break;

            case 'adjust_weights':
                for (const adj of params.weightAdjustments) {
                    const dim = this.engine.fitnessSystem.dimensions[adj.dimension];
                    if (dim) {
                        dim.weight *= adj.adjustment;
                    }
                }
                this.engine.fitnessSystem.normalizeWeights();
                break;
        }

        this.adaptations.push({
            timestamp: Date.now(),
            generation: this.engine.generation,
            suggestion
        });

        return true;
    }

    /**
     * Auto-adapt based on analysis
     */
    autoAdapt() {
        const analysis = this.analyze();
        
        if (analysis.confidence < 0.6) {
            return { applied: false, reason: 'Confidence too low' };
        }

        // Apply suggestions with high confidence
        const applied = [];
        for (const suggestion of analysis.suggestions) {
            // Don't apply too many at once
            if (applied.length >= 2) break;
            
            // Check if we recently applied same type
            const recentSame = this.adaptations.filter(a => 
                a.suggestion.type === suggestion.type &&
                this.engine.generation - a.generation < 5
            );
            
            if (recentSame.length === 0) {
                this.applyAdaptation(suggestion);
                applied.push(suggestion);
            }
        }

        return { 
            applied: applied.length > 0,
            suggestions: applied,
            analysis
        };
    }

    /**
     * Get adaptation history
     */
    getAdaptationHistory() {
        return this.adaptations.map(a => ({
            generation: a.generation,
            type: a.suggestion.type,
            reason: a.suggestion.reason,
            timestamp: a.timestamp
        }));
    }

    /**
     * Reset learning state
     */
    reset() {
        this.correlations = {
            dimensions: {},
            mutations: {},
            genes: {},
            crossover: {}
        };
        this.adaptations = [];
        this.plateauCount = 0;
    }

    /**
     * Export learned parameters
     */
    exportLearning() {
        return {
            correlations: this.correlations,
            adaptations: this.adaptations,
            fitnessWeights: this.engine.fitnessSystem.getWeights(),
            evolutionParams: {
                mutationRate: this.engine.options.mutationRate,
                crossoverRate: this.engine.options.crossoverRate,
                eliteCount: this.engine.options.eliteCount
            }
        };
    }

    /**
     * Import learned parameters
     */
    importLearning(data) {
        if (data.evolutionParams) {
            Object.assign(this.engine.options, data.evolutionParams);
        }
        if (data.fitnessWeights) {
            for (const [dim, config] of Object.entries(data.fitnessWeights)) {
                if (this.engine.fitnessSystem.dimensions[dim]) {
                    this.engine.fitnessSystem.dimensions[dim].weight = config.weight / 100;
                }
            }
            this.engine.fitnessSystem.normalizeWeights();
        }
        this.correlations = data.correlations || this.correlations;
    }
}

// Export
window.MetaLearningSystem = MetaLearningSystem;

