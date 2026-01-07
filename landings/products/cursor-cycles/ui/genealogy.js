/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GENEALOGY — Prompt Family Tree Visualization
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Canvas-based visualization of prompt lineage showing parent-child
 * relationships, fitness scores, and mutation history.
 */

class GenealogyView {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas?.getContext('2d');
        
        // Data
        this.nodes = new Map(); // id -> node data
        this.edges = []; // { from, to }
        this.generations = []; // array of arrays, each containing node ids
        
        // Layout
        this.padding = { top: 40, right: 40, bottom: 40, left: 40 };
        this.nodeRadius = 20;
        this.genSpacing = 100;
        this.nodeSpacing = 60;
        
        // Styling
        this.colors = {
            background: '#0a0b0f',
            node: '#1a1d24',
            nodeBorder: '#5a6474',
            nodeSelected: '#00ff9d',
            edge: 'rgba(255, 255, 255, 0.2)',
            edgeHighlight: '#00d4ff',
            text: '#f0f4f8',
            textMuted: '#8b95a5',
            fitness: {
                high: '#00ff9d',
                medium: '#00d4ff',
                low: '#5a6474'
            }
        };
        
        // Interaction state
        this.selectedNode = null;
        this.hoveredNode = null;
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
        
        // Callbacks
        this.onSelect = null;
        
        // Tooltip
        this.tooltip = null;
        
        if (this.canvas) {
            this.setupCanvas();
            this.bindEvents();
            this.createTooltip();
        }
    }

    /**
     * Setup canvas dimensions
     */
    setupCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
    }

    /**
     * Create tooltip element
     */
    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'genealogy-tooltip';
        this.tooltip.style.cssText = `
            position: absolute;
            background: rgba(26, 29, 36, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 12px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: #f0f4f8;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.15s;
            z-index: 100;
            max-width: 300px;
        `;
        this.canvas.parentElement.style.position = 'relative';
        this.canvas.parentElement.appendChild(this.tooltip);
    }

    /**
     * Bind interaction events
     */
    bindEvents() {
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.draw();
        });
    }

    /**
     * Build genealogy from evolution history
     */
    buildFromHistory(history) {
        this.nodes.clear();
        this.edges = [];
        this.generations = [];

        if (!history || history.length === 0) return;

        // Process each generation
        for (let genIndex = 0; genIndex < history.length; genIndex++) {
            const generation = history[genIndex];
            const genNodes = [];

            for (const dna of generation.population || []) {
                const node = {
                    id: dna.id,
                    generation: genIndex,
                    fitness: dna.fitness || 0,
                    mutations: dna.mutations || [],
                    parentIds: dna.parentIds || [],
                    prompt: dna.toPrompt?.() || '',
                    x: 0,
                    y: 0
                };

                this.nodes.set(dna.id, node);
                genNodes.push(dna.id);

                // Create edges to parents
                for (const parentId of dna.parentIds || []) {
                    if (this.nodes.has(parentId)) {
                        this.edges.push({ from: parentId, to: dna.id });
                    }
                }
            }

            this.generations.push(genNodes);
        }

        this.calculateLayout();
        this.draw();
    }

    /**
     * Calculate node positions
     */
    calculateLayout() {
        const startY = this.padding.top + this.nodeRadius;
        
        for (let genIndex = 0; genIndex < this.generations.length; genIndex++) {
            const genNodes = this.generations[genIndex];
            const y = startY + genIndex * this.genSpacing;
            
            const totalWidth = (genNodes.length - 1) * this.nodeSpacing;
            const startX = (this.width - totalWidth) / 2;
            
            for (let nodeIndex = 0; nodeIndex < genNodes.length; nodeIndex++) {
                const node = this.nodes.get(genNodes[nodeIndex]);
                if (node) {
                    node.x = startX + nodeIndex * this.nodeSpacing;
                    node.y = y;
                }
            }
        }
    }

    /**
     * Transform point with current view offset and scale
     */
    transformPoint(x, y) {
        return {
            x: (x + this.offset.x) * this.scale + this.width / 2 * (1 - this.scale),
            y: (y + this.offset.y) * this.scale + this.height / 2 * (1 - this.scale)
        };
    }

    /**
     * Inverse transform (screen to world)
     */
    inverseTransformPoint(screenX, screenY) {
        const x = (screenX - this.width / 2 * (1 - this.scale)) / this.scale - this.offset.x;
        const y = (screenY - this.height / 2 * (1 - this.scale)) / this.scale - this.offset.y;
        return { x, y };
    }

    /**
     * Find node at screen position
     */
    getNodeAt(screenX, screenY) {
        const { x, y } = this.inverseTransformPoint(screenX, screenY);
        
        for (const node of this.nodes.values()) {
            const dx = x - node.x;
            const dy = y - node.y;
            if (Math.sqrt(dx * dx + dy * dy) <= this.nodeRadius) {
                return node;
            }
        }
        return null;
    }

    /**
     * Handle mouse move
     */
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const screenX = e.clientX - rect.left;
        const screenY = e.clientY - rect.top;

        if (this.isDragging) {
            this.offset.x += (e.clientX - this.dragStart.x) / this.scale;
            this.offset.y += (e.clientY - this.dragStart.y) / this.scale;
            this.dragStart = { x: e.clientX, y: e.clientY };
            this.draw();
            return;
        }

        const node = this.getNodeAt(screenX, screenY);
        
        if (node !== this.hoveredNode) {
            this.hoveredNode = node;
            this.canvas.style.cursor = node ? 'pointer' : 'grab';
            
            if (node) {
                this.showTooltip(e, node);
            } else {
                this.hideTooltip();
            }
            
            this.draw();
        }
    }

    /**
     * Handle mouse leave
     */
    handleMouseLeave() {
        this.hoveredNode = null;
        this.isDragging = false;
        this.hideTooltip();
        this.draw();
    }

    /**
     * Handle click
     */
    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const node = this.getNodeAt(e.clientX - rect.left, e.clientY - rect.top);
        
        if (node) {
            this.selectedNode = node.id;
            if (this.onSelect) {
                this.onSelect(node);
            }
        } else {
            this.selectedNode = null;
        }
        
        this.draw();
    }

    /**
     * Handle wheel (zoom)
     */
    handleWheel(e) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.max(0.5, Math.min(3, this.scale * delta));
        
        if (newScale !== this.scale) {
            this.scale = newScale;
            this.draw();
        }
    }

    /**
     * Handle mouse down
     */
    handleMouseDown(e) {
        this.isDragging = true;
        this.dragStart = { x: e.clientX, y: e.clientY };
        this.canvas.style.cursor = 'grabbing';
    }

    /**
     * Handle mouse up
     */
    handleMouseUp() {
        this.isDragging = false;
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
    }

    /**
     * Show tooltip
     */
    showTooltip(e, node) {
        const mutations = node.mutations?.map(m => m.type).join(', ') || 'seed';
        const parentCount = node.parentIds?.length || 0;

        this.tooltip.innerHTML = `
            <div style="margin-bottom: 8px; font-size: 12px; font-weight: 600;">
                Generation ${node.generation}
            </div>
            <div style="margin-bottom: 4px;">
                <span style="color: ${this.getFitnessColor(node.fitness)}; font-weight: 600;">
                    Fitness: ${node.fitness?.toFixed(2) || '--'}
                </span>
            </div>
            <div style="margin-bottom: 4px; color: #8b95a5;">
                Parents: ${parentCount}
            </div>
            <div style="color: #ff6b9d; font-size: 10px;">
                ${mutations}
            </div>
        `;

        const rect = this.canvas.getBoundingClientRect();
        this.tooltip.style.left = `${e.clientX - rect.left + 15}px`;
        this.tooltip.style.top = `${e.clientY - rect.top + 15}px`;
        this.tooltip.style.opacity = '1';
    }

    /**
     * Hide tooltip
     */
    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.opacity = '0';
        }
    }

    /**
     * Get fitness color
     */
    getFitnessColor(fitness) {
        if (fitness >= 7) return this.colors.fitness.high;
        if (fitness >= 4) return this.colors.fitness.medium;
        return this.colors.fitness.low;
    }

    /**
     * Main draw function
     */
    draw() {
        if (!this.ctx) return;
        
        const ctx = this.ctx;
        
        // Clear
        ctx.fillStyle = this.colors.background;
        ctx.fillRect(0, 0, this.width, this.height);

        if (this.nodes.size === 0) {
            this.drawEmptyState();
            return;
        }

        // Save transform
        ctx.save();

        // Apply view transform
        ctx.translate(this.width / 2 * (1 - this.scale), this.height / 2 * (1 - this.scale));
        ctx.scale(this.scale, this.scale);
        ctx.translate(this.offset.x, this.offset.y);

        // Draw edges first
        this.drawEdges();

        // Draw nodes
        this.drawNodes();

        // Restore transform
        ctx.restore();

        // Draw generation labels (not transformed)
        this.drawGenerationLabels();
    }

    /**
     * Draw edges
     */
    drawEdges() {
        const ctx = this.ctx;
        
        for (const edge of this.edges) {
            const fromNode = this.nodes.get(edge.from);
            const toNode = this.nodes.get(edge.to);
            
            if (!fromNode || !toNode) continue;

            // Check if edge involves selected or hovered node
            const isHighlighted = 
                edge.from === this.selectedNode || 
                edge.to === this.selectedNode ||
                edge.from === this.hoveredNode?.id || 
                edge.to === this.hoveredNode?.id;

            ctx.strokeStyle = isHighlighted ? this.colors.edgeHighlight : this.colors.edge;
            ctx.lineWidth = isHighlighted ? 2 : 1;

            // Draw curved edge
            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y + this.nodeRadius);
            
            const midY = (fromNode.y + toNode.y) / 2;
            ctx.bezierCurveTo(
                fromNode.x, midY,
                toNode.x, midY,
                toNode.x, toNode.y - this.nodeRadius
            );
            
            ctx.stroke();
        }
    }

    /**
     * Draw nodes
     */
    drawNodes() {
        const ctx = this.ctx;
        
        for (const node of this.nodes.values()) {
            const isSelected = node.id === this.selectedNode;
            const isHovered = node.id === this.hoveredNode?.id;
            
            // Node circle
            ctx.beginPath();
            ctx.arc(node.x, node.y, this.nodeRadius, 0, Math.PI * 2);
            
            // Fill with fitness-based gradient
            const gradient = ctx.createRadialGradient(
                node.x, node.y - this.nodeRadius / 2, 0,
                node.x, node.y, this.nodeRadius
            );
            gradient.addColorStop(0, this.colors.node);
            gradient.addColorStop(1, 'rgba(26, 29, 36, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Border
            ctx.strokeStyle = isSelected 
                ? this.colors.nodeSelected 
                : isHovered 
                    ? this.colors.edgeHighlight 
                    : this.getFitnessColor(node.fitness);
            ctx.lineWidth = isSelected || isHovered ? 3 : 2;
            ctx.stroke();

            // Fitness score
            ctx.fillStyle = this.colors.text;
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(node.fitness?.toFixed(1) || '--', node.x, node.y);
        }
    }

    /**
     * Draw generation labels
     */
    drawGenerationLabels() {
        const ctx = this.ctx;
        ctx.fillStyle = this.colors.textMuted;
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';

        for (let i = 0; i < this.generations.length; i++) {
            const y = (this.padding.top + this.nodeRadius + i * this.genSpacing + this.offset.y) * this.scale 
                      + this.height / 2 * (1 - this.scale);
            ctx.fillText(`Gen ${i}`, 10, y);
        }
    }

    /**
     * Draw empty state
     */
    drawEmptyState() {
        const ctx = this.ctx;
        ctx.fillStyle = this.colors.textMuted;
        ctx.font = '14px "Outfit", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('No genealogy data available', this.width / 2, this.height / 2);
        ctx.font = '12px "Outfit", sans-serif';
        ctx.fillText('Start an evolution to see the family tree', this.width / 2, this.height / 2 + 24);
    }

    /**
     * Clear genealogy
     */
    clear() {
        this.nodes.clear();
        this.edges = [];
        this.generations = [];
        this.selectedNode = null;
        this.hoveredNode = null;
        this.draw();
    }

    /**
     * Reset view
     */
    resetView() {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.draw();
    }

    /**
     * Focus on a specific node
     */
    focusNode(nodeId) {
        const node = this.nodes.get(nodeId);
        if (!node) return;

        this.selectedNode = nodeId;
        this.offset = {
            x: this.width / 2 - node.x,
            y: this.height / 2 - node.y
        };
        this.draw();
    }
}

// Export
window.GenealogyView = GenealogyView;

