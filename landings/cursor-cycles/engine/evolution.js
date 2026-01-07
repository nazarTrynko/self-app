/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EVOLUTION ENGINE — Genetic Algorithm Core
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The main evolution engine that orchestrates population-based prompt evolution
 * using genetic algorithms with selection, crossover, and mutation.
 */

class EvolutionEngine {
    constructor(options = {}) {
        this.options = {
            populationSize: options.populationSize || 8,
            maxGenerations: options.maxGenerations || 50,
            eliteCount: options.eliteCount || 2,
            mutationRate: options.mutationRate || 0.25,
            crossoverRate: options.crossoverRate || 0.7,
            tournamentSize: options.tournamentSize || 3,
            checkpointInterval: options.checkpointInterval || 10,
            plateauThreshold: options.plateauThreshold || 0.02,
            plateauGenerations: options.plateauGenerations || 5,
            ...options
        };

        // Core systems
        this.fitnessSystem = new FitnessSystem();
        this.criticSystem = new CriticSystem();
        
        // State
        this.population = [];
        this.generation = 0;
        this.history = [];
        this.running = false;
        this.paused = false;
        
        // Statistics
        this.stats = {
            bestFitness: [],
            avgFitness: [],
            worstFitness: [],
            diversity: [],
            mutations: [],
            crossovers: []
        };

        // Callbacks
        this.callbacks = {
            onGeneration: null,
            onCheckpoint: null,
            onComplete: null,
            onLog: null,
            onBestUpdate: null
        };

        // Best ever found
        this.bestEver = null;
        this.bestEverFitness = 0;
    }

    /**
     * Initialize evolution with seed prompt
     * @param {string} seedPrompt - Starting prompt
     * @param {string} goal - Evolution goal
     * @param {string[]} benchmarks - Objective test cases
     */
    initialize(seedPrompt, goal, benchmarks = []) {
        this.goal = goal;
        this.benchmarks = benchmarks;
        this.generation = 0;
        this.history = [];
        this.bestEver = null;
        this.bestEverFitness = 0;

        // Reset stats
        this.stats = {
            bestFitness: [],
            avgFitness: [],
            worstFitness: [],
            diversity: [],
            mutations: [],
            crossovers: []
        };

        // Generate initial population
        this.population = GeneticOperators.generateInitialPopulation(
            seedPrompt,
            goal,
            this.options.populationSize
        );

        this.log('info', `Initialized population of ${this.population.length} prompts`);
        return this.population;
    }

    /**
     * Start the evolution process
     */
    async start() {
        if (this.running) return;
        
        this.running = true;
        this.paused = false;
        this.log('success', 'Evolution started');

        try {
            while (this.running && this.generation < this.options.maxGenerations) {
                if (this.paused) {
                    await this.sleep(100);
                    continue;
                }

                await this.runGeneration();
                
                // Check for checkpoint
                if (this.generation > 0 && this.generation % this.options.checkpointInterval === 0) {
                    if (this.callbacks.onCheckpoint) {
                        const shouldContinue = await this.callbacks.onCheckpoint(this.getCheckpointData());
                        if (!shouldContinue) {
                            this.stop('User stopped at checkpoint');
                            break;
                        }
                    }
                }

                // Check for plateau
                if (this.detectPlateau()) {
                    this.log('warning', 'Plateau detected! Injecting diversity...');
                    this.injectDiversity();
                }
            }

            if (this.generation >= this.options.maxGenerations) {
                this.stop('Max generations reached');
            }
        } catch (error) {
            this.log('error', `Evolution error: ${error.message}`);
            this.running = false;
            throw error;
        }
    }

    /**
     * Pause evolution
     */
    pause() {
        this.paused = true;
        this.log('warning', 'Evolution paused');
    }

    /**
     * Resume evolution
     */
    resume() {
        this.paused = false;
        this.log('info', 'Evolution resumed');
    }

    /**
     * Stop evolution
     */
    stop(reason = 'Stopped by user') {
        this.running = false;
        this.paused = false;
        this.log('info', reason);
        
        if (this.callbacks.onComplete) {
            this.callbacks.onComplete(this.getResults());
        }
    }

    /**
     * Run a single generation
     */
    async runGeneration() {
        this.generation++;
        const genStart = Date.now();

        // 1. Evaluate all individuals
        await this.evaluatePopulation();

        // 2. Sort by fitness
        this.population.sort((a, b) => (b.fitness || 0) - (a.fitness || 0));

        // 3. Update best ever
        const currentBest = this.population[0];
        if (currentBest.fitness > this.bestEverFitness) {
            this.bestEver = currentBest.clone();
            this.bestEver.fitness = currentBest.fitness;
            this.bestEver.dimensions = { ...currentBest.dimensions };
            this.bestEverFitness = currentBest.fitness;
            
            if (this.callbacks.onBestUpdate) {
                this.callbacks.onBestUpdate(this.bestEver);
            }
            this.log('success', `New best: ${this.bestEverFitness.toFixed(2)}`);
        }

        // 4. Record statistics
        this.recordStats();

        // 5. Store history
        this.history.push({
            generation: this.generation,
            population: this.population.map(d => d.toJSON()),
            best: currentBest.toJSON(),
            stats: this.getGenerationStats()
        });

        // 6. Create next generation
        const nextGen = this.createNextGeneration();
        this.population = nextGen;

        // 7. Notify
        if (this.callbacks.onGeneration) {
            this.callbacks.onGeneration({
                generation: this.generation,
                best: currentBest,
                stats: this.getGenerationStats(),
                duration: Date.now() - genStart
            });
        }

        this.log('info', `Gen ${this.generation}: Best ${currentBest.fitness?.toFixed(2)}, Avg ${this.stats.avgFitness[this.stats.avgFitness.length - 1]?.toFixed(2)}`);
    }

    /**
     * Evaluate fitness of entire population
     */
    async evaluatePopulation() {
        const evaluationPromises = this.population.map(async (dna) => {
            if (dna.fitness === null || dna.generation === this.generation) {
                const result = await this.fitnessSystem.evaluate(dna, {
                    population: this.population,
                    benchmarks: this.benchmarks,
                    goal: this.goal
                });
                return result;
            }
            return { composite: dna.fitness, dimensions: dna.dimensions };
        });

        await Promise.all(evaluationPromises);
    }

    /**
     * Create next generation using genetic operations
     */
    createNextGeneration() {
        const nextGen = [];
        const eliteCount = Math.min(this.options.eliteCount, this.population.length);
        
        // 1. Elite selection - keep top performers unchanged
        for (let i = 0; i < eliteCount; i++) {
            const elite = this.population[i].clone();
            elite.fitness = this.population[i].fitness;
            elite.dimensions = { ...this.population[i].dimensions };
            elite.mutations = [{ gene: 'origin', type: 'elite' }];
            nextGen.push(elite);
        }

        // 2. Fill rest with offspring
        let mutationCount = 0;
        let crossoverCount = 0;

        while (nextGen.length < this.options.populationSize) {
            const operation = Math.random();

            if (operation < this.options.crossoverRate && nextGen.length < this.options.populationSize - 1) {
                // Crossover
                const parent1 = this.tournamentSelect();
                const parent2 = this.tournamentSelect();
                
                if (parent1.id !== parent2.id) {
                    const child = GeneticOperators.crossover(parent1, parent2, 'best_genes');
                    child.generation = this.generation + 1;
                    
                    // Maybe mutate the child too
                    if (Math.random() < this.options.mutationRate) {
                        const mutated = GeneticOperators.mutate(child, 0.3);
                        nextGen.push(mutated);
                        mutationCount++;
                    } else {
                        nextGen.push(child);
                    }
                    crossoverCount++;
                } else {
                    // Same parent selected twice, just mutate
                    const mutated = GeneticOperators.mutate(parent1.clone(), this.options.mutationRate);
                    mutated.generation = this.generation + 1;
                    nextGen.push(mutated);
                    mutationCount++;
                }
            } else {
                // Mutation only
                const parent = this.tournamentSelect();
                const mutated = GeneticOperators.mutate(parent.clone(), this.options.mutationRate);
                mutated.generation = this.generation + 1;
                nextGen.push(mutated);
                mutationCount++;
            }
        }

        this.stats.mutations.push(mutationCount);
        this.stats.crossovers.push(crossoverCount);

        return nextGen;
    }

    /**
     * Tournament selection
     */
    tournamentSelect() {
        const tournamentSize = Math.min(this.options.tournamentSize, this.population.length);
        const candidates = [];
        
        for (let i = 0; i < tournamentSize; i++) {
            const idx = Math.floor(Math.random() * this.population.length);
            candidates.push(this.population[idx]);
        }

        // Return best from tournament
        candidates.sort((a, b) => (b.fitness || 0) - (a.fitness || 0));
        return candidates[0];
    }

    /**
     * Record generation statistics
     */
    recordStats() {
        const fitnesses = this.population.map(d => d.fitness || 0);
        
        this.stats.bestFitness.push(Math.max(...fitnesses));
        this.stats.avgFitness.push(fitnesses.reduce((a, b) => a + b, 0) / fitnesses.length);
        this.stats.worstFitness.push(Math.min(...fitnesses));
        this.stats.diversity.push(this.calculateDiversity());
    }

    /**
     * Calculate population diversity
     */
    calculateDiversity() {
        if (this.population.length < 2) return 1.0;

        const prompts = this.population.map(d => d.toPrompt());
        let totalDissimilarity = 0;
        let comparisons = 0;

        for (let i = 0; i < prompts.length; i++) {
            for (let j = i + 1; j < prompts.length; j++) {
                totalDissimilarity += 1 - this.fitnessSystem.calculateSimilarity(prompts[i], prompts[j]);
                comparisons++;
            }
        }

        return comparisons > 0 ? totalDissimilarity / comparisons : 0;
    }

    /**
     * Detect if evolution has plateaued
     */
    detectPlateau() {
        const n = this.options.plateauGenerations;
        if (this.stats.bestFitness.length < n) return false;

        const recent = this.stats.bestFitness.slice(-n);
        const improvement = Math.max(...recent) - Math.min(...recent);
        
        return improvement < this.options.plateauThreshold;
    }

    /**
     * Inject diversity when plateau detected
     */
    injectDiversity() {
        // Replace bottom 25% with new random variants
        const replaceCount = Math.floor(this.population.length * 0.25);
        
        for (let i = 0; i < replaceCount; i++) {
            const idx = this.population.length - 1 - i;
            
            // Create wild variant
            const source = this.population[Math.floor(Math.random() * this.options.eliteCount)];
            const wild = GeneticOperators.mutate(source.clone(), 0.6); // High mutation rate
            wild.mutations = [{ gene: 'origin', type: 'wild_injection' }];
            wild.fitness = null;
            
            this.population[idx] = wild;
        }

        // Also temporarily increase mutation rate
        this.options.mutationRate = Math.min(0.5, this.options.mutationRate * 1.5);
        
        this.log('mutation', `Injected ${replaceCount} wild variants, mutation rate now ${(this.options.mutationRate * 100).toFixed(0)}%`);
    }

    /**
     * Get current generation statistics
     */
    getGenerationStats() {
        const idx = this.stats.bestFitness.length - 1;
        return {
            generation: this.generation,
            best: this.stats.bestFitness[idx] || 0,
            avg: this.stats.avgFitness[idx] || 0,
            worst: this.stats.worstFitness[idx] || 0,
            diversity: this.stats.diversity[idx] || 0,
            mutations: this.stats.mutations[idx] || 0,
            crossovers: this.stats.crossovers[idx] || 0
        };
    }

    /**
     * Get checkpoint data for human review
     */
    getCheckpointData() {
        const sorted = [...this.population].sort((a, b) => (b.fitness || 0) - (a.fitness || 0));
        return {
            generation: this.generation,
            topCandidates: sorted.slice(0, 3).map(d => ({
                id: d.id,
                fitness: d.fitness,
                dimensions: d.dimensions,
                prompt: d.toPrompt(),
                mutations: d.mutations
            })),
            stats: this.getGenerationStats(),
            bestEver: this.bestEver ? {
                fitness: this.bestEverFitness,
                prompt: this.bestEver.toPrompt()
            } : null
        };
    }

    /**
     * Get final results
     */
    getResults() {
        return {
            success: true,
            generations: this.generation,
            bestPrompt: this.bestEver,
            bestFitness: this.bestEverFitness,
            finalPopulation: this.population,
            history: this.history,
            stats: this.stats,
            fitnessWeights: this.fitnessSystem.getWeights()
        };
    }

    /**
     * Select a specific prompt as winner
     */
    selectWinner(promptId) {
        const winner = this.population.find(d => d.id === promptId);
        if (winner) {
            this.bestEver = winner;
            this.bestEverFitness = winner.fitness;
            this.log('success', `Selected ${promptId} as winner`);
        }
        return winner;
    }

    /**
     * Export evolution history
     */
    exportHistory() {
        return {
            config: this.options,
            goal: this.goal,
            benchmarks: this.benchmarks,
            generations: this.generation,
            history: this.history,
            bestEver: this.bestEver?.toJSON(),
            bestFitness: this.bestEverFitness,
            stats: this.stats
        };
    }

    /**
     * Import and continue from history
     */
    importHistory(data) {
        this.options = { ...this.options, ...data.config };
        this.goal = data.goal;
        this.benchmarks = data.benchmarks || [];
        this.generation = data.generations;
        this.history = data.history;
        this.stats = data.stats;
        
        if (data.bestEver) {
            this.bestEver = PromptDNA.fromJSON(data.bestEver);
            this.bestEverFitness = data.bestFitness;
        }

        // Restore last population
        if (data.history.length > 0) {
            const lastGen = data.history[data.history.length - 1];
            this.population = lastGen.population.map(p => PromptDNA.fromJSON(p));
        }

        this.log('info', `Imported history: ${this.generation} generations`);
    }

    /**
     * Logging helper
     */
    log(type, message) {
        const entry = {
            timestamp: Date.now(),
            type,
            message,
            generation: this.generation
        };

        if (this.callbacks.onLog) {
            this.callbacks.onLog(entry);
        }
    }

    /**
     * Sleep helper
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Set callback
     */
    on(event, callback) {
        if (this.callbacks.hasOwnProperty(`on${this.capitalize(event)}`)) {
            this.callbacks[`on${this.capitalize(event)}`] = callback;
        }
        return this;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Export
window.EvolutionEngine = EvolutionEngine;

