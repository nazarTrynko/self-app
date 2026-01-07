/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FITNESS CHART — Enhanced Canvas-based Fitness Landscape Visualization
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Features:
 * - Tooltips on hover
 * - Click to select generation
 * - Zoom/pan with mouse wheel
 * - Event markers (plateaus, diversity injection)
 */

class FitnessChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Data
        this.data = {
            best: [],
            avg: [],
            worst: []
        };

        // Event markers
        this.markers = [];

        // Styling
        this.colors = {
            best: '#00ff9d',
            avg: '#00d4ff',
            worst: '#5a6474',
            grid: 'rgba(255, 255, 255, 0.05)',
            text: '#8b95a5',
            background: '#0a0b0f',
            marker: '#ff6b9d',
            markerPlateau: '#ffb800',
            selected: 'rgba(0, 255, 157, 0.3)'
        };

        // Layout
        this.padding = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        };

        // Zoom state
        this.zoom = {
            level: 1,
            minLevel: 1,
            maxLevel: 5,
            offsetX: 0
        };

        // Interaction state
        this.hoveredGeneration = null;
        this.selectedGeneration = null;
        this.isDragging = false;
        this.dragStartX = 0;

        // Callbacks
        this.onSelect = null;
        this.onHover = null;

        // Tooltip element
        this.tooltip = this.createTooltip();

        // Setup
        this.setupCanvas();
        this.bindEvents();
        this.draw();

        // Resize handler
        window.addEventListener('resize', () => this.handleResize());
    }

    setupCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = 160 * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = '160px';
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = 160;
        this.chartWidth = this.width - this.padding.left - this.padding.right;
        this.chartHeight = this.height - this.padding.top - this.padding.bottom;
    }

    /**
     * Create tooltip element
     */
    createTooltip() {
        const tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(26, 29, 36, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 8px 12px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: #f0f4f8;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.15s;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        `;
        this.canvas.parentElement.style.position = 'relative';
        this.canvas.parentElement.appendChild(tooltip);
        return tooltip;
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
        this.canvas.style.cursor = 'crosshair';
    }

    /**
     * Get generation from mouse position
     */
    getGenerationFromX(clientX) {
        const rect = this.canvas.getBoundingClientRect();
        const x = clientX - rect.left - this.padding.left;
        
        const maxGen = Math.max(this.data.best.length, 10);
        const visibleWidth = this.chartWidth / this.zoom.level;
        const startGen = (this.zoom.offsetX / this.chartWidth) * maxGen;
        
        const gen = Math.round(startGen + (x / visibleWidth) * (maxGen / this.zoom.level));
        return Math.max(0, Math.min(gen, this.data.best.length - 1));
    }

    /**
     * Handle mouse move
     */
    handleMouseMove(e) {
        if (this.data.best.length === 0) return;

        if (this.isDragging && this.zoom.level > 1) {
            const dx = e.clientX - this.dragStartX;
            this.zoom.offsetX = Math.max(0, Math.min(
                this.zoom.offsetX - dx,
                this.chartWidth * (1 - 1 / this.zoom.level)
            ));
            this.dragStartX = e.clientX;
            this.draw();
            return;
        }

        const generation = this.getGenerationFromX(e.clientX);
        
        if (generation >= 0 && generation < this.data.best.length) {
            this.hoveredGeneration = generation;
            this.showTooltip(e, generation);
            this.draw();
            
            if (this.onHover) {
                this.onHover(generation, this.getFitnessAtGen(generation));
            }
        }
    }

    /**
     * Handle mouse leave
     */
    handleMouseLeave() {
        this.hoveredGeneration = null;
        this.hideTooltip();
        this.draw();
    }

    /**
     * Handle click - select generation
     */
    handleClick(e) {
        if (this.data.best.length === 0) return;

        const generation = this.getGenerationFromX(e.clientX);
        
        if (generation >= 0 && generation < this.data.best.length) {
            this.selectedGeneration = generation;
            this.draw();
            
            if (this.onSelect) {
                this.onSelect(generation, this.getFitnessAtGen(generation));
            }
        }
    }

    /**
     * Handle mouse wheel - zoom
     */
    handleWheel(e) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = Math.max(this.zoom.minLevel, Math.min(this.zoom.maxLevel, this.zoom.level * delta));
        
        if (newZoom !== this.zoom.level) {
            // Zoom centered on mouse position
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - this.padding.left;
            const mouseRatio = mouseX / this.chartWidth;
            
            const zoomDiff = newZoom - this.zoom.level;
            this.zoom.offsetX += (mouseRatio * this.chartWidth * zoomDiff) / newZoom;
            this.zoom.offsetX = Math.max(0, Math.min(
                this.zoom.offsetX,
                this.chartWidth * (1 - 1 / newZoom)
            ));
            
            this.zoom.level = newZoom;
            this.draw();
        }
    }

    /**
     * Handle mouse down - start drag
     */
    handleMouseDown(e) {
        if (this.zoom.level > 1) {
            this.isDragging = true;
            this.dragStartX = e.clientX;
            this.canvas.style.cursor = 'grabbing';
        }
    }

    /**
     * Handle mouse up - end drag
     */
    handleMouseUp() {
        this.isDragging = false;
        this.canvas.style.cursor = 'crosshair';
    }

    /**
     * Show tooltip
     */
    showTooltip(e, generation) {
        const fitness = this.getFitnessAtGen(generation);
        if (!fitness) return;

        const marker = this.markers.find(m => m.generation === generation);
        
        this.tooltip.innerHTML = `
            <div style="margin-bottom: 4px; color: #8b95a5;">Gen ${generation}</div>
            <div style="color: ${this.colors.best};">Best: ${fitness.best.toFixed(2)}</div>
            <div style="color: ${this.colors.avg};">Avg: ${fitness.avg.toFixed(2)}</div>
            <div style="color: ${this.colors.worst};">Worst: ${fitness.worst.toFixed(2)}</div>
            ${marker ? `<div style="color: ${marker.type === 'plateau' ? this.colors.markerPlateau : this.colors.marker}; margin-top: 4px;">⚡ ${marker.label}</div>` : ''}
        `;

        const rect = this.canvas.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        
        let left = e.clientX - rect.left + 10;
        if (left + tooltipRect.width > rect.width) {
            left = e.clientX - rect.left - tooltipRect.width - 10;
        }
        
        this.tooltip.style.left = `${left}px`;
        this.tooltip.style.top = `${e.clientY - rect.top - tooltipRect.height / 2}px`;
        this.tooltip.style.opacity = '1';
    }

    /**
     * Hide tooltip
     */
    hideTooltip() {
        this.tooltip.style.opacity = '0';
    }

    handleResize() {
        this.setupCanvas();
        this.draw();
    }

    /**
     * Add event marker
     */
    addMarker(generation, type, label) {
        this.markers.push({ generation, type, label });
        this.draw();
    }

    /**
     * Clear markers
     */
    clearMarkers() {
        this.markers = [];
    }

    /**
     * Update chart with new data
     */
    update(stats) {
        this.data.best = stats.bestFitness || [];
        this.data.avg = stats.avgFitness || [];
        this.data.worst = stats.worstFitness || [];
        this.draw();
    }

    /**
     * Add single data point
     */
    addPoint(best, avg, worst) {
        this.data.best.push(best);
        this.data.avg.push(avg);
        this.data.worst.push(worst);
        this.draw();
    }

    /**
     * Clear all data
     */
    clear() {
        this.data = { best: [], avg: [], worst: [] };
        this.markers = [];
        this.zoom = { level: 1, minLevel: 1, maxLevel: 5, offsetX: 0 };
        this.selectedGeneration = null;
        this.hoveredGeneration = null;
        this.draw();
    }

    /**
     * Get/set data for persistence
     */
    getData() {
        return {
            data: this.data,
            markers: this.markers
        };
    }

    setData(savedData) {
        if (savedData.data) this.data = savedData.data;
        if (savedData.markers) this.markers = savedData.markers;
        this.draw();
    }

    /**
     * Reset zoom
     */
    resetZoom() {
        this.zoom = { level: 1, minLevel: 1, maxLevel: 5, offsetX: 0 };
        this.draw();
    }

    /**
     * Main draw function
     */
    draw() {
        const ctx = this.ctx;
        
        // Clear
        ctx.fillStyle = this.colors.background;
        ctx.fillRect(0, 0, this.width, this.height);

        // Draw grid
        this.drawGrid();

        // Draw data
        if (this.data.best.length > 0) {
            // Draw selected generation highlight
            if (this.selectedGeneration !== null) {
                this.drawSelectionHighlight();
            }

            // Draw hover line
            if (this.hoveredGeneration !== null) {
                this.drawHoverLine();
            }

            this.drawLine(this.data.worst, this.colors.worst, 1);
            this.drawLine(this.data.avg, this.colors.avg, 1.5);
            this.drawLine(this.data.best, this.colors.best, 2);
            
            // Draw area under best line
            this.drawArea(this.data.best, this.colors.best);

            // Draw event markers
            this.drawMarkers();

            // Draw data points on hover
            if (this.hoveredGeneration !== null) {
                this.drawDataPoints();
            }
        } else {
            this.drawEmptyState();
        }

        // Draw axes labels
        this.drawLabels();

        // Draw zoom indicator
        if (this.zoom.level > 1) {
            this.drawZoomIndicator();
        }
    }

    /**
     * Draw selection highlight
     */
    drawSelectionHighlight() {
        const ctx = this.ctx;
        const x = this.getXForGeneration(this.selectedGeneration);
        
        ctx.fillStyle = this.colors.selected;
        ctx.fillRect(
            x - 10,
            this.padding.top,
            20,
            this.chartHeight
        );
    }

    /**
     * Draw hover line
     */
    drawHoverLine() {
        const ctx = this.ctx;
        const x = this.getXForGeneration(this.hoveredGeneration);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        
        ctx.beginPath();
        ctx.moveTo(x, this.padding.top);
        ctx.lineTo(x, this.height - this.padding.bottom);
        ctx.stroke();
        
        ctx.setLineDash([]);
    }

    /**
     * Draw data points on hover
     */
    drawDataPoints() {
        const ctx = this.ctx;
        const x = this.getXForGeneration(this.hoveredGeneration);
        const gen = this.hoveredGeneration;

        if (gen < 0 || gen >= this.data.best.length) return;

        // Draw points for each series
        const points = [
            { value: this.data.best[gen], color: this.colors.best },
            { value: this.data.avg[gen], color: this.colors.avg },
            { value: this.data.worst[gen], color: this.colors.worst }
        ];

        for (const point of points) {
            const y = this.padding.top + this.chartHeight - (point.value / 10) * this.chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = point.color;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.background;
            ctx.fill();
        }
    }

    /**
     * Draw event markers
     */
    drawMarkers() {
        const ctx = this.ctx;
        
        for (const marker of this.markers) {
            const x = this.getXForGeneration(marker.generation);
            const color = marker.type === 'plateau' ? this.colors.markerPlateau : this.colors.marker;
            
            // Draw marker line
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            
            ctx.beginPath();
            ctx.moveTo(x, this.padding.top);
            ctx.lineTo(x, this.height - this.padding.bottom);
            ctx.stroke();
            
            ctx.setLineDash([]);
            
            // Draw marker dot at top
            ctx.beginPath();
            ctx.arc(x, this.padding.top + 5, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    /**
     * Draw zoom indicator
     */
    drawZoomIndicator() {
        const ctx = this.ctx;
        const text = `${this.zoom.level.toFixed(1)}x`;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillText(text, this.width - this.padding.right, this.padding.top);
    }

    /**
     * Get X coordinate for generation
     */
    getXForGeneration(generation) {
        const maxGen = Math.max(this.data.best.length, 10);
        const x = this.padding.left + (generation / maxGen) * this.chartWidth * this.zoom.level - this.zoom.offsetX;
        return x;
    }

    /**
     * Draw grid lines
     */
    drawGrid() {
        const ctx = this.ctx;
        ctx.strokeStyle = this.colors.grid;
        ctx.lineWidth = 1;

        // Horizontal grid lines (fitness values)
        for (let i = 0; i <= 10; i += 2) {
            const y = this.padding.top + this.chartHeight - (i / 10) * this.chartHeight;
            
            ctx.beginPath();
            ctx.moveTo(this.padding.left, y);
            ctx.lineTo(this.width - this.padding.right, y);
            ctx.stroke();
        }

        // Vertical grid lines (generations)
        const maxGen = Math.max(this.data.best.length, 10);
        const genStep = Math.ceil(maxGen / 5);
        
        for (let i = 0; i <= maxGen; i += genStep) {
            const x = this.getXForGeneration(i);
            
            if (x >= this.padding.left && x <= this.width - this.padding.right) {
                ctx.beginPath();
                ctx.moveTo(x, this.padding.top);
                ctx.lineTo(x, this.height - this.padding.bottom);
                ctx.stroke();
            }
        }
    }

    /**
     * Draw a data line
     */
    drawLine(data, color, lineWidth) {
        if (data.length < 2) return;

        const ctx = this.ctx;
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();

        let started = false;
        
        for (let i = 0; i < data.length; i++) {
            const x = this.getXForGeneration(i);
            const y = this.padding.top + this.chartHeight - (data[i] / 10) * this.chartHeight;

            // Only draw points within visible area
            if (x >= this.padding.left && x <= this.width - this.padding.right) {
                if (!started) {
                    ctx.moveTo(x, y);
                    started = true;
                } else {
                    ctx.lineTo(x, y);
                }
            }
        }

        ctx.stroke();
    }

    /**
     * Draw filled area under line
     */
    drawArea(data, color) {
        if (data.length < 2) return;

        const ctx = this.ctx;
        const gradient = ctx.createLinearGradient(
            0, this.padding.top,
            0, this.height - this.padding.bottom
        );
        gradient.addColorStop(0, color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
        gradient.addColorStop(1, color.replace(')', ', 0)').replace('rgb', 'rgba'));

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Find visible range
        let firstVisible = -1;
        let lastVisible = -1;

        for (let i = 0; i < data.length; i++) {
            const x = this.getXForGeneration(i);
            if (x >= this.padding.left && x <= this.width - this.padding.right) {
                if (firstVisible === -1) firstVisible = i;
                lastVisible = i;
            }
        }

        if (firstVisible === -1) return;

        // Start at bottom left
        ctx.moveTo(this.getXForGeneration(firstVisible), this.height - this.padding.bottom);

        for (let i = firstVisible; i <= lastVisible; i++) {
            const x = this.getXForGeneration(i);
            const y = this.padding.top + this.chartHeight - (data[i] / 10) * this.chartHeight;
            ctx.lineTo(x, y);
        }

        // Close path at bottom right
        ctx.lineTo(this.getXForGeneration(lastVisible), this.height - this.padding.bottom);
        ctx.closePath();

        ctx.fill();
    }

    /**
     * Draw axis labels
     */
    drawLabels() {
        const ctx = this.ctx;
        ctx.fillStyle = this.colors.text;
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        // Y-axis labels (fitness)
        for (let i = 0; i <= 10; i += 2) {
            const y = this.padding.top + this.chartHeight - (i / 10) * this.chartHeight;
            ctx.fillText(i.toString(), this.padding.left - 8, y);
        }

        // X-axis labels (generations)
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const maxGen = Math.max(this.data.best.length, 10);
        const genStep = Math.ceil(maxGen / 5);

        for (let i = 0; i <= maxGen; i += genStep) {
            const x = this.getXForGeneration(i);
            if (x >= this.padding.left && x <= this.width - this.padding.right) {
                ctx.fillText(i.toString(), x, this.height - this.padding.bottom + 8);
            }
        }
    }

    /**
     * Draw empty state message
     */
    drawEmptyState() {
        const ctx = this.ctx;
        ctx.fillStyle = this.colors.text;
        ctx.font = '12px "Outfit", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
            'Start evolution to see fitness landscape',
            this.width / 2,
            this.height / 2
        );
    }

    /**
     * Get current fitness at generation
     */
    getFitnessAtGen(generation) {
        if (generation < 0 || generation >= this.data.best.length) return null;
        return {
            best: this.data.best[generation],
            avg: this.data.avg[generation],
            worst: this.data.worst[generation]
        };
    }
}

// Export
window.FitnessChart = FitnessChart;
