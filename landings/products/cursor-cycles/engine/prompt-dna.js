/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PROMPT DNA — Chromosome Structure for Genetic Evolution
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Defines the genetic structure of prompts for meaningful crossover and mutation.
 * Each prompt is broken into discrete "genes" that can be independently evolved.
 */

class PromptDNA {
    /**
     * Gene types that make up a prompt chromosome
     */
    static GENES = {
        role: {
            name: 'role',
            weight: 0.15,
            description: 'The persona or expertise the AI should adopt',
            mutations: ['expand', 'specialize', 'generalize', 'add_credential', 'remove_credential']
        },
        context: {
            name: 'context',
            weight: 0.12,
            description: 'Background information and situational context',
            mutations: ['add_detail', 'remove_detail', 'reframe', 'add_constraint', 'temporal_shift']
        },
        task: {
            name: 'task',
            weight: 0.20,
            description: 'The core task or objective to accomplish',
            mutations: ['decompose', 'combine', 'rephrase', 'add_subtask', 'prioritize']
        },
        constraints: {
            name: 'constraints',
            weight: 0.15,
            description: 'Limitations, requirements, and boundaries',
            mutations: ['add', 'remove', 'tighten', 'relax', 'reorder']
        },
        format: {
            name: 'format',
            weight: 0.10,
            description: 'Output format specifications',
            mutations: ['structure', 'simplify', 'add_section', 'remove_section', 'reorder']
        },
        examples: {
            name: 'examples',
            weight: 0.10,
            description: 'Sample inputs/outputs for few-shot learning',
            mutations: ['add', 'remove', 'modify', 'diversify', 'simplify']
        },
        reasoning: {
            name: 'reasoning',
            weight: 0.10,
            description: 'Chain-of-thought or reasoning instructions',
            mutations: ['add_step', 'remove_step', 'elaborate', 'compress', 'reorder']
        },
        safeguards: {
            name: 'safeguards',
            weight: 0.08,
            description: 'Verification steps and quality checks',
            mutations: ['add_check', 'remove_check', 'strengthen', 'add_fallback', 'add_validation']
        }
    };

    /**
     * Create a new PromptDNA instance
     * @param {Object} genes - Initial gene values
     * @param {string} id - Unique identifier
     */
    constructor(genes = {}, id = null) {
        this.id = id || this.generateId();
        this.genes = this.initializeGenes(genes);
        this.fitness = null;
        this.dimensions = {};
        this.generation = 0;
        this.parentIds = [];
        this.mutations = [];
        this.createdAt = Date.now();
    }

    /**
     * Generate unique ID for this chromosome
     */
    generateId() {
        return `dna_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 6)}`;
    }

    /**
     * Initialize genes with defaults
     */
    initializeGenes(genes) {
        const initialized = {};
        for (const [geneName, geneMeta] of Object.entries(PromptDNA.GENES)) {
            initialized[geneName] = {
                content: genes[geneName]?.content || '',
                active: genes[geneName]?.active ?? false,
                mutationHistory: genes[geneName]?.mutationHistory || [],
                strength: genes[geneName]?.strength ?? 1.0
            };
        }
        return initialized;
    }

    /**
     * Parse a raw prompt string into DNA structure
     * @param {string} rawPrompt - The raw prompt text
     * @param {string} goal - The user's stated goal
     * @returns {PromptDNA}
     */
    static fromRawPrompt(rawPrompt, goal = '') {
        const dna = new PromptDNA();
        
        // Heuristic parsing - look for common patterns
        const lines = rawPrompt.split('\n').filter(l => l.trim());
        
        // Detect role (often starts with "You are" or "Act as")
        const roleMatch = rawPrompt.match(/(?:you are|act as|as a|role:?)\s*([^.!\n]+)/i);
        if (roleMatch) {
            dna.genes.role.content = roleMatch[1].trim();
            dna.genes.role.active = true;
        }

        // Detect task (often the main instruction)
        const taskPatterns = [
            /(?:create|build|generate|write|implement|design|develop)\s+([^.!\n]+)/i,
            /(?:task:?|objective:?|goal:?)\s*([^.!\n]+)/i
        ];
        for (const pattern of taskPatterns) {
            const match = rawPrompt.match(pattern);
            if (match) {
                dna.genes.task.content = match[0].trim();
                dna.genes.task.active = true;
                break;
            }
        }

        // Detect constraints (look for "must", "should", "don't", bullet points)
        const constraintMatches = rawPrompt.match(/(?:must|should|don't|do not|ensure|require|avoid)[^.!\n]+/gi);
        if (constraintMatches && constraintMatches.length > 0) {
            dna.genes.constraints.content = constraintMatches.join('\n');
            dna.genes.constraints.active = true;
        }

        // Detect examples (look for "example:", "e.g.", code blocks)
        const exampleMatch = rawPrompt.match(/(?:example|e\.g\.|for instance|such as)[:\s]*([^]+?)(?=\n\n|\n[A-Z]|$)/i);
        if (exampleMatch) {
            dna.genes.examples.content = exampleMatch[0].trim();
            dna.genes.examples.active = true;
        }

        // Detect format (look for output specifications)
        const formatMatch = rawPrompt.match(/(?:format|output|return|respond)[:\s]*([^]+?)(?=\n\n|\n[A-Z]|$)/i);
        if (formatMatch) {
            dna.genes.format.content = formatMatch[0].trim();
            dna.genes.format.active = true;
        }

        // Detect reasoning (chain of thought)
        const reasoningMatch = rawPrompt.match(/(?:think|step|reason|analyze|consider)[:\s]*([^]+?)(?=\n\n|\n[A-Z]|$)/i);
        if (reasoningMatch) {
            dna.genes.reasoning.content = reasoningMatch[0].trim();
            dna.genes.reasoning.active = true;
        }

        // If nothing was detected, use the whole prompt as task
        const hasActiveGene = Object.values(dna.genes).some(g => g.active);
        if (!hasActiveGene) {
            dna.genes.task.content = rawPrompt;
            dna.genes.task.active = true;
        }

        // Store goal as context if provided
        if (goal) {
            dna.genes.context.content = `Goal: ${goal}`;
            dna.genes.context.active = true;
        }

        return dna;
    }

    /**
     * Clean any legacy mutation markers from content
     * @param {string} content 
     * @returns {string}
     */
    static cleanMutationMarkers(content) {
        if (!content) return content;
        // Remove any [MUTATION: ...] markers that might exist from legacy data
        return content
            .replace(/\s*\[MUTATION:[^\]]*\]\s*/gi, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    /**
     * Compile DNA back into a prompt string
     * @returns {string}
     */
    toPrompt() {
        const sections = [];
        const clean = PromptDNA.cleanMutationMarkers;

        // Role
        if (this.genes.role.active && this.genes.role.content) {
            sections.push(`You are ${clean(this.genes.role.content)}.`);
        }

        // Context
        if (this.genes.context.active && this.genes.context.content) {
            sections.push(clean(this.genes.context.content));
        }

        // Task (always included if available)
        if (this.genes.task.content) {
            sections.push(clean(this.genes.task.content));
        }

        // Constraints
        if (this.genes.constraints.active && this.genes.constraints.content) {
            sections.push(`\nRequirements:\n${clean(this.genes.constraints.content)}`);
        }

        // Format
        if (this.genes.format.active && this.genes.format.content) {
            sections.push(`\nOutput Format:\n${clean(this.genes.format.content)}`);
        }

        // Examples
        if (this.genes.examples.active && this.genes.examples.content) {
            sections.push(`\nExamples:\n${clean(this.genes.examples.content)}`);
        }

        // Reasoning
        if (this.genes.reasoning.active && this.genes.reasoning.content) {
            sections.push(`\n${clean(this.genes.reasoning.content)}`);
        }

        // Safeguards
        if (this.genes.safeguards.active && this.genes.safeguards.content) {
            sections.push(`\nBefore responding, verify:\n${clean(this.genes.safeguards.content)}`);
        }

        return sections.join('\n\n');
    }

    /**
     * Export DNA as JSON for saving/sharing
     */
    toJSON() {
        return {
            id: this.id,
            genes: this.genes,
            fitness: this.fitness,
            dimensions: this.dimensions,
            generation: this.generation,
            parentIds: this.parentIds,
            mutations: this.mutations,
            createdAt: this.createdAt
        };
    }

    /**
     * Import DNA from JSON
     */
    static fromJSON(json) {
        const dna = new PromptDNA({}, json.id);
        dna.genes = json.genes;
        dna.fitness = json.fitness;
        dna.dimensions = json.dimensions;
        dna.generation = json.generation;
        dna.parentIds = json.parentIds;
        dna.mutations = json.mutations;
        dna.createdAt = json.createdAt;
        return dna;
    }

    /**
     * Clone this DNA with a new ID
     */
    clone() {
        const clone = new PromptDNA();
        clone.genes = JSON.parse(JSON.stringify(this.genes));
        clone.generation = this.generation;
        clone.parentIds = [this.id];
        return clone;
    }

    /**
     * Get active genes count
     */
    getActiveGenesCount() {
        return Object.values(this.genes).filter(g => g.active && g.content).length;
    }

    /**
     * Get total token estimate
     */
    estimateTokens() {
        const prompt = this.toPrompt();
        // Rough estimate: ~4 chars per token
        return Math.ceil(prompt.length / 4);
    }
}


/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MUTATION CONTENT GENERATOR — Smart Content Generation for Mutations
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Generates contextual content for mutations instead of placeholder markers.
 * Uses templates and variation strategies to create meaningful mutations.
 */

class MutationContentGenerator {
    /**
     * Expansion templates by gene type
     */
    static EXPANSIONS = {
        role: [
            'with expertise in system design and architecture',
            'specializing in clean code and maintainable solutions',
            'with deep knowledge of industry best practices',
            'experienced in building scalable applications',
            'proficient in modern development patterns',
            'with strong attention to code quality',
            'skilled in both frontend and backend development'
        ],
        context: [
            'Consider performance implications and optimization opportunities.',
            'The solution should be production-ready and battle-tested.',
            'Focus on maintainability and future extensibility.',
            'Account for edge cases and error scenarios.',
            'Consider the broader system context and integrations.',
            'Think about the developer experience when using this.',
            'Ensure compatibility with existing codebases.'
        ],
        task: [
            'Break this into clear, manageable steps.',
            'Consider all requirements before implementing.',
            'Validate the approach before proceeding.',
            'Document key decisions and rationale.',
            'Test the solution against expected outcomes.'
        ],
        constraints: [
            '- Maintain backward compatibility',
            '- Follow security best practices',
            '- Optimize for readability over cleverness',
            '- Handle all error cases gracefully',
            '- Keep the implementation simple and focused',
            '- Ensure proper input validation',
            '- Document any assumptions made'
        ],
        format: [
            'Use clear section headers for organization.',
            'Include code comments for complex logic.',
            'Provide a summary of key decisions.',
            'Structure output for easy scanning.',
            'Use consistent formatting throughout.'
        ],
        examples: [
            'Edge case: Empty input should return appropriate default.',
            'Edge case: Invalid input should throw descriptive error.',
            'Success case: Standard input produces expected output.',
            'Boundary case: Large input handles gracefully.'
        ],
        reasoning: [
            '- Consider alternative approaches and their trade-offs',
            '- Identify potential pitfalls before implementation',
            '- Validate assumptions against requirements',
            '- Think about edge cases and boundary conditions',
            '- Plan for error handling and recovery'
        ],
        safeguards: [
            '- Confirm all requirements are addressed',
            '- Validate output format matches specification',
            '- Check for potential security issues',
            '- Ensure error messages are helpful',
            '- Verify edge cases are handled'
        ]
    };

    /**
     * Credential additions for role gene
     */
    static CREDENTIALS = [
        'architecture patterns',
        'performance optimization',
        'security best practices',
        'testing methodologies',
        'code review processes',
        'CI/CD pipelines',
        'monitoring and observability',
        'database design',
        'API design',
        'microservices'
    ];

    /**
     * Specialization areas for role gene
     */
    static SPECIALIZATIONS = [
        'distributed systems',
        'real-time applications',
        'data-intensive applications',
        'user-facing products',
        'developer tools',
        'platform engineering',
        'infrastructure automation',
        'API development',
        'frontend architecture',
        'backend services'
    ];

    /**
     * Temporal considerations for context
     */
    static TEMPORAL_ASPECTS = [
        'Consider future scalability requirements.',
        'Account for potential feature additions.',
        'Plan for long-term maintenance needs.',
        'Think about version compatibility over time.',
        'Design for graceful deprecation if needed.'
    ];

    /**
     * Fallback behaviors for safeguards
     */
    static FALLBACKS = [
        'return a sensible default value',
        'provide a clear error message with recovery suggestions',
        'log the issue and continue with degraded functionality',
        'ask for clarification on ambiguous requirements',
        'document the limitation and suggest alternatives'
    ];

    /**
     * Validation methods for safeguards
     */
    static VALIDATIONS = [
        'checking against the original requirements',
        'testing with sample inputs and expected outputs',
        'reviewing for common error patterns',
        'verifying edge case handling',
        'confirming format compliance'
    ];

    /**
     * Get random item from array
     */
    static random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Get multiple random unique items from array
     */
    static randomMultiple(arr, count) {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, arr.length));
    }

    /**
     * Generate expansion content for a gene
     */
    static generateExpansion(geneName, existingContent) {
        const expansions = this.EXPANSIONS[geneName] || [];
        if (expansions.length === 0) return '';
        
        // Pick an expansion that doesn't duplicate existing content
        const availableExpansions = expansions.filter(e => 
            !existingContent.toLowerCase().includes(e.toLowerCase().slice(0, 20))
        );
        
        if (availableExpansions.length === 0) return this.random(expansions);
        return this.random(availableExpansions);
    }

    /**
     * Generate a new constraint
     */
    static generateConstraint() {
        return this.random(this.EXPANSIONS.constraints);
    }

    /**
     * Generate a new safeguard check
     */
    static generateSafeguard() {
        return this.random(this.EXPANSIONS.safeguards);
    }

    /**
     * Generate a reasoning step
     */
    static generateReasoningStep(stepNumber) {
        const steps = [
            `${stepNumber}. Analyze the input requirements carefully`,
            `${stepNumber}. Identify the core problem to solve`,
            `${stepNumber}. Consider potential edge cases`,
            `${stepNumber}. Plan the implementation approach`,
            `${stepNumber}. Validate against requirements`,
            `${stepNumber}. Review for completeness`
        ];
        return this.random(steps);
    }

    /**
     * Generate a credential for role expansion
     */
    static generateCredential() {
        return this.random(this.CREDENTIALS);
    }

    /**
     * Generate a specialization for role
     */
    static generateSpecialization() {
        return this.random(this.SPECIALIZATIONS);
    }

    /**
     * Generate temporal consideration
     */
    static generateTemporalAspect() {
        return this.random(this.TEMPORAL_ASPECTS);
    }

    /**
     * Generate fallback behavior
     */
    static generateFallback() {
        return this.random(this.FALLBACKS);
    }

    /**
     * Generate validation method
     */
    static generateValidation() {
        return this.random(this.VALIDATIONS);
    }

    /**
     * Generate an example case
     */
    static generateExample(index) {
        const types = ['standard', 'edge', 'error', 'boundary'];
        const type = types[index % types.length];
        
        switch (type) {
            case 'standard':
                return `Example ${index + 1}: Standard case with typical input → Expected output`;
            case 'edge':
                return `Example ${index + 1}: Edge case with minimal/empty input → Appropriate handling`;
            case 'error':
                return `Example ${index + 1}: Error case with invalid input → Clear error message`;
            case 'boundary':
                return `Example ${index + 1}: Boundary case with large/extreme input → Graceful handling`;
            default:
                return `Example ${index + 1}: Input → Output`;
        }
    }

    /**
     * Rephrase content using synonyms and restructuring
     */
    static rephrase(content) {
        // Simple rephrasing through synonym replacement
        const replacements = [
            [/\bcreate\b/gi, ['build', 'generate', 'implement', 'develop']],
            [/\bwrite\b/gi, ['compose', 'craft', 'produce', 'author']],
            [/\bensure\b/gi, ['verify', 'confirm', 'guarantee', 'make sure']],
            [/\bshould\b/gi, ['must', 'needs to', 'is expected to']],
            [/\bgood\b/gi, ['high-quality', 'robust', 'reliable', 'solid']],
            [/\bcheck\b/gi, ['verify', 'validate', 'confirm', 'inspect']],
            [/\buse\b/gi, ['utilize', 'employ', 'leverage', 'apply']],
            [/\bprovide\b/gi, ['supply', 'deliver', 'offer', 'present']]
        ];

        let result = content;
        // Apply 1-2 random replacements to avoid over-rephrasing
        const toApply = this.randomMultiple(replacements, 2);
        
        for (const [pattern, synonyms] of toApply) {
            const match = result.match(pattern);
            if (match) {
                result = result.replace(pattern, this.random(synonyms));
                break; // Only do one replacement to keep it subtle
            }
        }

        return result;
    }

    /**
     * Generate structure format
     */
    static generateStructure(content) {
        const lines = content.split('\n').filter(l => l.trim());
        if (lines.length <= 1) {
            return `1. ${content}\n2. Review and validate the approach\n3. Execute with attention to detail`;
        }
        return lines.map((line, i) => `${i + 1}. ${line.replace(/^\d+\.\s*/, '')}`).join('\n');
    }
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GENETIC OPERATORS — Crossover and Mutation Functions
 * ═══════════════════════════════════════════════════════════════════════════
 */

class GeneticOperators {
    /**
     * Perform crossover between two parent DNAs
     * @param {PromptDNA} parent1 
     * @param {PromptDNA} parent2 
     * @param {string} strategy - 'uniform', 'single_point', 'best_genes'
     * @returns {PromptDNA}
     */
    static crossover(parent1, parent2, strategy = 'best_genes') {
        const child = new PromptDNA();
        child.generation = Math.max(parent1.generation, parent2.generation) + 1;
        child.parentIds = [parent1.id, parent2.id];

        switch (strategy) {
            case 'uniform':
                // Each gene randomly from one parent
                for (const geneName of Object.keys(PromptDNA.GENES)) {
                    const source = Math.random() < 0.5 ? parent1 : parent2;
                    child.genes[geneName] = JSON.parse(JSON.stringify(source.genes[geneName]));
                }
                break;

            case 'single_point':
                // Split at random point
                const geneNames = Object.keys(PromptDNA.GENES);
                const splitPoint = Math.floor(Math.random() * geneNames.length);
                for (let i = 0; i < geneNames.length; i++) {
                    const source = i < splitPoint ? parent1 : parent2;
                    child.genes[geneNames[i]] = JSON.parse(JSON.stringify(source.genes[geneNames[i]]));
                }
                break;

            case 'best_genes':
            default:
                // Take each gene from whichever parent has better fitness for that dimension
                for (const geneName of Object.keys(PromptDNA.GENES)) {
                    // Use dimension scores if available, otherwise random
                    const p1Score = parent1.dimensions[geneName] || 0;
                    const p2Score = parent2.dimensions[geneName] || 0;
                    
                    let source;
                    if (p1Score > p2Score) {
                        source = parent1;
                    } else if (p2Score > p1Score) {
                        source = parent2;
                    } else {
                        // Equal or no scores - random selection
                        source = Math.random() < 0.5 ? parent1 : parent2;
                    }
                    
                    child.genes[geneName] = JSON.parse(JSON.stringify(source.genes[geneName]));
                }
                break;
        }

        return child;
    }

    /**
     * Apply mutation to a DNA
     * @param {PromptDNA} dna 
     * @param {number} mutationRate - Probability of mutation per gene (0-1)
     * @param {Object} options - Mutation options
     * @returns {PromptDNA}
     */
    static mutate(dna, mutationRate = 0.2, options = {}) {
        const mutated = dna.clone();
        const appliedMutations = [];

        for (const [geneName, geneMeta] of Object.entries(PromptDNA.GENES)) {
            if (Math.random() < mutationRate) {
                const mutation = this.selectMutation(geneName, mutated.genes[geneName], options);
                if (mutation) {
                    this.applyMutation(mutated.genes[geneName], mutation);
                    appliedMutations.push({ gene: geneName, type: mutation.type });
                    mutated.genes[geneName].mutationHistory.push({
                        type: mutation.type,
                        generation: mutated.generation,
                        timestamp: Date.now()
                    });
                }
            }
        }

        mutated.mutations = appliedMutations;
        return mutated;
    }

    /**
     * Select appropriate mutation for a gene
     */
    static selectMutation(geneName, gene, options) {
        const geneMeta = PromptDNA.GENES[geneName];
        const possibleMutations = geneMeta.mutations;
        
        // If gene is empty, prioritize adding content
        if (!gene.content || gene.content.trim() === '') {
            return { type: 'initialize', geneName };
        }

        // If gene has low strength, try to strengthen it
        if (gene.strength < 0.5) {
            const strengthMutations = ['expand', 'add_detail', 'elaborate', 'add'];
            const matching = possibleMutations.filter(m => strengthMutations.includes(m));
            if (matching.length > 0) {
                return { type: matching[Math.floor(Math.random() * matching.length)], geneName };
            }
        }

        // Random mutation from available types
        const mutationType = possibleMutations[Math.floor(Math.random() * possibleMutations.length)];
        return { type: mutationType, geneName };
    }

    /**
     * Apply a specific mutation to a gene
     */
    static applyMutation(gene, mutation) {
        const { type, geneName } = mutation;
        const content = gene.content || '';
        const generator = MutationContentGenerator;

        switch (type) {
            case 'initialize':
                gene.content = this.generateInitialContent(geneName);
                gene.active = true;
                break;

            case 'expand':
            case 'add_detail':
            case 'elaborate':
                // Generate contextual expansion instead of placeholder
                const expansion = generator.generateExpansion(geneName, content);
                if (expansion) {
                    gene.content = content + '\n' + expansion;
                }
                gene.strength = Math.min(1.0, gene.strength + 0.1);
                break;

            case 'compress':
            case 'simplify':
            case 'remove_detail':
                // Keep first sentence/line, but clean it up
                const sentences = content.split(/(?<=[.!?])\s+/);
                if (sentences.length > 1) {
                    gene.content = sentences.slice(0, Math.ceil(sentences.length / 2)).join(' ');
                } else {
                    const firstPart = content.split(/\n/)[0];
                    gene.content = firstPart.trim();
                }
                gene.strength = Math.max(0.3, gene.strength - 0.1);
                break;

            case 'add':
            case 'add_constraint':
                // Add a real constraint
                gene.content = content + '\n' + generator.generateConstraint();
                gene.active = true;
                break;

            case 'add_check':
                // Add a real safeguard check
                gene.content = content + '\n' + generator.generateSafeguard();
                gene.active = true;
                break;

            case 'add_step':
                // Add a real reasoning step
                const stepCount = (content.match(/^\d+\./gm) || []).length;
                gene.content = content + '\n' + generator.generateReasoningStep(stepCount + 1);
                gene.active = true;
                break;

            case 'add_subtask':
            case 'add_section':
                // Add relevant section content
                const sectionContent = generator.generateExpansion(geneName, content);
                gene.content = content + '\n' + (sectionContent || 'Additional considerations for completeness.');
                gene.active = true;
                break;

            case 'remove':
            case 'remove_check':
            case 'remove_step':
            case 'remove_section':
                const lines = content.split('\n').filter(l => l.trim());
                if (lines.length > 1) {
                    // Remove a random line from the middle or end, not the first
                    const removeIdx = Math.floor(Math.random() * (lines.length - 1)) + 1;
                    lines.splice(removeIdx, 1);
                    gene.content = lines.join('\n');
                }
                break;

            case 'reorder':
            case 'prioritize':
                const items = content.split('\n').filter(l => l.trim());
                if (items.length > 1) {
                    // Shuffle maintaining any numbering
                    const hasNumbers = items.some(i => /^\d+\./.test(i));
                    for (let i = items.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [items[i], items[j]] = [items[j], items[i]];
                    }
                    // Renumber if originally numbered
                    if (hasNumbers) {
                        gene.content = items.map((item, idx) => 
                            item.replace(/^\d+\./, `${idx + 1}.`)
                        ).join('\n');
                    } else {
                        gene.content = items.join('\n');
                    }
                }
                break;

            case 'specialize':
                // Add a real specialization
                const specialization = generator.generateSpecialization();
                gene.content = content + ` specializing in ${specialization}`;
                break;

            case 'generalize':
                // Remove specific qualifiers
                gene.content = content.replace(/\s+(specifically|particularly|especially|only|just)\s+/gi, ' ');
                break;

            case 'add_credential':
                // Add a real credential
                const credential = generator.generateCredential();
                gene.content = content + ` with extensive experience in ${credential}`;
                break;

            case 'reframe':
            case 'rephrase':
                // Actually rephrase the content
                gene.content = generator.rephrase(content);
                break;

            case 'tighten':
            case 'strengthen':
                gene.content = content.replace(/(?:should|could|might|may)/gi, 'must');
                break;

            case 'relax':
                gene.content = content.replace(/(?:must|require|need to)/gi, 'should');
                break;

            case 'decompose':
                // Create actual decomposition
                gene.content = generator.generateStructure(content);
                break;

            case 'combine':
                // Combine with enhancement
                gene.content = content + ' while ensuring comprehensive coverage of all aspects';
                break;

            case 'diversify':
                // Add diverse example
                const exampleCount = (content.match(/example/gi) || []).length;
                gene.content = content + '\n\n' + generator.generateExample(exampleCount);
                break;

            case 'temporal_shift':
                // Add real temporal consideration
                gene.content = content + '\n' + generator.generateTemporalAspect();
                break;

            case 'structure':
                // Add real structure
                gene.content = generator.generateStructure(content);
                break;

            case 'add_fallback':
                // Add real fallback behavior
                const fallback = generator.generateFallback();
                gene.content = content + `\nIf unable to complete as requested, ${fallback}.`;
                break;

            case 'add_validation':
                // Add real validation method
                const validation = generator.generateValidation();
                gene.content = content + `\nValidate the output by ${validation}.`;
                break;

            default:
                // For unknown mutations, add contextual enhancement instead of marker
                const enhancement = generator.generateExpansion(geneName, content);
                if (enhancement) {
                    gene.content = content + '\n' + enhancement;
                }
        }

        return gene;
    }

    /**
     * Generate initial content for empty gene
     */
    static generateInitialContent(geneName) {
        const templates = {
            role: 'an expert software developer with deep knowledge of best practices',
            context: 'Working on a production codebase that requires high quality and maintainability',
            task: 'Complete the requested task with attention to detail and quality',
            constraints: '- Follow best practices\n- Write clean, readable code\n- Consider edge cases',
            format: 'Provide well-structured output with clear organization',
            examples: 'Example:\nInput: [sample input]\nOutput: [expected output]',
            reasoning: 'Think through this step by step:\n1. Analyze the requirements\n2. Plan the approach\n3. Implement the solution',
            safeguards: '- Verify the solution is complete\n- Check for errors\n- Ensure requirements are met'
        };
        return templates[geneName] || '';
    }

    /**
     * Generate initial population from seed prompt
     * @param {string} seedPrompt 
     * @param {string} goal 
     * @param {number} populationSize 
     * @returns {PromptDNA[]}
     */
    static generateInitialPopulation(seedPrompt, goal, populationSize = 8) {
        const population = [];
        
        // First member: direct parse of seed
        const original = PromptDNA.fromRawPrompt(seedPrompt, goal);
        original.mutations = [{ gene: 'origin', type: 'seed' }];
        population.push(original);

        // Generate variants
        const variants = [
            { name: 'structured', transform: this.makeStructured },
            { name: 'minimal', transform: this.makeMinimal },
            { name: 'detailed', transform: this.makeDetailed },
            { name: 'example_heavy', transform: this.makeExampleHeavy },
            { name: 'constraint_focused', transform: this.makeConstraintFocused },
            { name: 'chain_of_thought', transform: this.makeChainOfThought },
            { name: 'safeguarded', transform: this.makeSafeguarded }
        ];

        for (let i = 1; i < populationSize && i <= variants.length; i++) {
            const variant = variants[i - 1];
            const dna = variant.transform(original.clone());
            dna.mutations = [{ gene: 'origin', type: variant.name }];
            population.push(dna);
        }

        // Fill remaining with mutations of existing
        while (population.length < populationSize) {
            const source = population[Math.floor(Math.random() * population.length)];
            const mutated = this.mutate(source, 0.4);
            population.push(mutated);
        }

        return population;
    }

    // Variant transformers
    static makeStructured(dna) {
        dna.genes.format.content = 'Provide output in a clear, structured format with sections and headers';
        dna.genes.format.active = true;
        return dna;
    }

    static makeMinimal(dna) {
        // Remove optional genes
        dna.genes.examples.active = false;
        dna.genes.reasoning.active = false;
        dna.genes.safeguards.active = false;
        return dna;
    }

    static makeDetailed(dna) {
        dna.genes.context.content += '\nBe thorough and comprehensive in your response.';
        dna.genes.context.active = true;
        return dna;
    }

    static makeExampleHeavy(dna) {
        dna.genes.examples.content = 'Example 1:\n[Input] → [Output]\n\nExample 2:\n[Input] → [Output]\n\nExample 3:\n[Input] → [Output]';
        dna.genes.examples.active = true;
        return dna;
    }

    static makeConstraintFocused(dna) {
        dna.genes.constraints.content += '\n- Strictly adhere to all requirements\n- Do not deviate from specifications\n- Validate against requirements before responding';
        dna.genes.constraints.active = true;
        return dna;
    }

    static makeChainOfThought(dna) {
        dna.genes.reasoning.content = 'Think through this systematically:\n1. First, understand the requirements completely\n2. Identify potential challenges\n3. Plan the approach before implementing\n4. Verify the solution meets all requirements';
        dna.genes.reasoning.active = true;
        return dna;
    }

    static makeSafeguarded(dna) {
        dna.genes.safeguards.content = '- Double-check all outputs for accuracy\n- Verify edge cases are handled\n- Ensure the solution is complete and correct\n- If uncertain, explain the uncertainty';
        dna.genes.safeguards.active = true;
        return dna;
    }
}

// Export for use in other modules
window.PromptDNA = PromptDNA;
window.GeneticOperators = GeneticOperators;
window.MutationContentGenerator = MutationContentGenerator;

