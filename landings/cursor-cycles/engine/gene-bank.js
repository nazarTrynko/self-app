/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GENE BANK — Storage System for High-Performing Prompt Genes
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Stores and manages successful prompt components (genes) for reuse across
 * evolutions. Uses IndexedDB for persistent storage.
 */

class GeneBank {
    constructor() {
        this.dbName = 'CursorCyclesGeneBank';
        this.dbVersion = 1;
        this.db = null;
        this.genes = new Map(); // In-memory cache
        
        // Initialize database
        this.initDB();
    }

    /**
     * Initialize IndexedDB
     */
    async initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                console.warn('IndexedDB not available, using memory-only mode');
                resolve();
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                this.loadGenesFromDB();
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create genes store
                if (!db.objectStoreNames.contains('genes')) {
                    const store = db.createObjectStore('genes', { keyPath: 'id' });
                    store.createIndex('type', 'type', { unique: false });
                    store.createIndex('fitness', 'fitness', { unique: false });
                    store.createIndex('tags', 'tags', { unique: false, multiEntry: true });
                }

                // Create libraries store
                if (!db.objectStoreNames.contains('libraries')) {
                    db.createObjectStore('libraries', { keyPath: 'id' });
                }
            };
        });
    }

    /**
     * Load genes from IndexedDB into memory cache
     */
    async loadGenesFromDB() {
        if (!this.db) return;

        const transaction = this.db.transaction(['genes'], 'readonly');
        const store = transaction.objectStore('genes');
        const request = store.getAll();

        request.onsuccess = () => {
            for (const gene of request.result) {
                this.genes.set(gene.id, gene);
            }
        };
    }

    /**
     * Generate unique gene ID
     */
    generateId() {
        return `gene_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 6)}`;
    }

    /**
     * Store a gene in the bank
     * @param {Object} geneData - Gene data to store
     */
    async store(geneData) {
        const gene = {
            id: geneData.id || this.generateId(),
            type: geneData.type,
            content: geneData.content,
            fitness: geneData.fitness || 0,
            dimensions: geneData.dimensions || {},
            tags: geneData.tags || [],
            sourceEvolution: geneData.sourceEvolution || null,
            createdAt: Date.now(),
            usageCount: 0,
            rating: geneData.rating || 0,
            favorite: geneData.favorite || false
        };

        // Store in memory
        this.genes.set(gene.id, gene);

        // Store in IndexedDB
        if (this.db) {
            const transaction = this.db.transaction(['genes'], 'readwrite');
            const store = transaction.objectStore('genes');
            store.put(gene);
        }

        return gene;
    }

    /**
     * Store multiple genes from a DNA
     * @param {PromptDNA} dna - The DNA to extract genes from
     */
    async storeFromDNA(dna) {
        const storedGenes = [];

        for (const [type, gene] of Object.entries(dna.genes)) {
            if (gene.active && gene.content && gene.content.trim()) {
                const stored = await this.store({
                    type,
                    content: gene.content,
                    fitness: dna.fitness,
                    dimensions: dna.dimensions,
                    sourceEvolution: dna.id
                });
                storedGenes.push(stored);
            }
        }

        return storedGenes;
    }

    /**
     * Get a gene by ID
     */
    get(id) {
        return this.genes.get(id);
    }

    /**
     * Get all genes of a specific type
     * @param {string} type - Gene type (role, task, constraints, etc.)
     */
    getByType(type) {
        return Array.from(this.genes.values())
            .filter(g => g.type === type)
            .sort((a, b) => b.fitness - a.fitness);
    }

    /**
     * Get top genes by fitness
     * @param {number} limit - Number of genes to return
     */
    getTop(limit = 10) {
        return Array.from(this.genes.values())
            .sort((a, b) => b.fitness - a.fitness)
            .slice(0, limit);
    }

    /**
     * Get favorite genes
     */
    getFavorites() {
        return Array.from(this.genes.values())
            .filter(g => g.favorite)
            .sort((a, b) => b.fitness - a.fitness);
    }

    /**
     * Search genes by tags or content
     * @param {string} query - Search query
     */
    search(query) {
        const queryLower = query.toLowerCase();
        return Array.from(this.genes.values())
            .filter(g => 
                g.content.toLowerCase().includes(queryLower) ||
                g.tags.some(t => t.toLowerCase().includes(queryLower))
            )
            .sort((a, b) => b.fitness - a.fitness);
    }

    /**
     * Update a gene's metadata
     */
    async update(id, updates) {
        const gene = this.genes.get(id);
        if (!gene) return null;

        Object.assign(gene, updates);
        gene.updatedAt = Date.now();

        // Update in IndexedDB
        if (this.db) {
            const transaction = this.db.transaction(['genes'], 'readwrite');
            const store = transaction.objectStore('genes');
            store.put(gene);
        }

        return gene;
    }

    /**
     * Toggle favorite status
     */
    async toggleFavorite(id) {
        const gene = this.genes.get(id);
        if (!gene) return null;
        return this.update(id, { favorite: !gene.favorite });
    }

    /**
     * Add tags to a gene
     */
    async addTags(id, tags) {
        const gene = this.genes.get(id);
        if (!gene) return null;
        const newTags = [...new Set([...gene.tags, ...tags])];
        return this.update(id, { tags: newTags });
    }

    /**
     * Rate a gene (1-5)
     */
    async rate(id, rating) {
        return this.update(id, { rating: Math.max(1, Math.min(5, rating)) });
    }

    /**
     * Increment usage count
     */
    async recordUsage(id) {
        const gene = this.genes.get(id);
        if (!gene) return null;
        return this.update(id, { usageCount: gene.usageCount + 1, lastUsed: Date.now() });
    }

    /**
     * Delete a gene
     */
    async delete(id) {
        this.genes.delete(id);

        if (this.db) {
            const transaction = this.db.transaction(['genes'], 'readwrite');
            const store = transaction.objectStore('genes');
            store.delete(id);
        }
    }

    /**
     * Inject a gene into a DNA
     * @param {PromptDNA} dna - Target DNA
     * @param {string} geneId - Gene to inject
     */
    async injectGene(dna, geneId) {
        const gene = this.genes.get(geneId);
        if (!gene) return null;

        // Update DNA
        if (dna.genes[gene.type]) {
            dna.genes[gene.type].content = gene.content;
            dna.genes[gene.type].active = true;
        }

        // Record usage
        await this.recordUsage(geneId);

        return dna;
    }

    /**
     * Get statistics about the gene bank
     */
    getStats() {
        const genes = Array.from(this.genes.values());
        const byType = {};
        
        for (const gene of genes) {
            byType[gene.type] = (byType[gene.type] || 0) + 1;
        }

        return {
            total: genes.length,
            byType,
            favorites: genes.filter(g => g.favorite).length,
            avgFitness: genes.length > 0 
                ? genes.reduce((sum, g) => sum + g.fitness, 0) / genes.length 
                : 0,
            topFitness: genes.length > 0 
                ? Math.max(...genes.map(g => g.fitness))
                : 0
        };
    }

    /**
     * Export gene bank to JSON
     */
    export() {
        return {
            version: 1,
            exportedAt: new Date().toISOString(),
            genes: Array.from(this.genes.values())
        };
    }

    /**
     * Import genes from JSON
     */
    async import(data) {
        if (!data.genes || !Array.isArray(data.genes)) {
            throw new Error('Invalid gene bank format');
        }

        let imported = 0;
        for (const gene of data.genes) {
            // Generate new ID to avoid conflicts
            gene.id = this.generateId();
            gene.importedAt = Date.now();
            await this.store(gene);
            imported++;
        }

        return imported;
    }

    /**
     * Clear all genes
     */
    async clear() {
        this.genes.clear();

        if (this.db) {
            const transaction = this.db.transaction(['genes'], 'readwrite');
            const store = transaction.objectStore('genes');
            store.clear();
        }
    }

    /**
     * Get suggested genes for a goal
     * @param {string} goal - The evolution goal
     */
    getSuggestions(goal) {
        // Simple keyword matching for suggestions
        const goalWords = goal.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        
        const scores = new Map();
        
        for (const gene of this.genes.values()) {
            let score = gene.fitness;
            const contentLower = gene.content.toLowerCase();
            
            for (const word of goalWords) {
                if (contentLower.includes(word)) {
                    score += 1;
                }
            }
            
            // Boost favorites
            if (gene.favorite) score += 2;
            
            // Boost highly rated
            if (gene.rating >= 4) score += 1;
            
            scores.set(gene.id, score);
        }

        return Array.from(this.genes.values())
            .map(g => ({ ...g, suggestionScore: scores.get(g.id) }))
            .sort((a, b) => b.suggestionScore - a.suggestionScore)
            .slice(0, 10);
    }
}

// Export
window.GeneBank = GeneBank;

