// THREADS - Everything Is Connected
// Path-finding revealing hidden connections

class ThreadsExperience {
    constructor() {
        this.canvas = document.getElementById('threads');
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.path = [];
        this.phase = 'intro';
        this.thingA = '';
        this.thingB = '';
        this.pathProgress = 0;
        this.backgroundNodes = [];
        
        this.resize();
        this.bindEvents();
        this.createBackgroundWeb();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.createBackgroundWeb();
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.getElementById('reveal-btn').addEventListener('click', () => {
            const inputA = document.getElementById('thing-a');
            const inputB = document.getElementById('thing-b');
            
            if (inputA.value.trim() && inputB.value.trim()) {
                this.thingA = inputA.value.trim();
                this.thingB = inputB.value.trim();
                this.revealConnection();
            }
        });

        // Enter key to submit
        document.querySelectorAll('.thing-input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    document.getElementById('reveal-btn').click();
                }
            });
        });
    }

    createBackgroundWeb() {
        this.backgroundNodes = [];
        const count = 50;
        
        for (let i = 0; i < count; i++) {
            this.backgroundNodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: 1 + Math.random() * 2
            });
        }
    }

    revealConnection() {
        this.transitionTo('reveal');
        
        // Display the things
        document.getElementById('display-from').textContent = this.thingA;
        document.getElementById('display-to').textContent = this.thingB;
        document.getElementById('connection-display').classList.add('visible');
        
        // Create path nodes
        this.createPath();
        
        // Start animating the path
        this.pathProgress = 0;
        
        // Transition to truth after path is revealed
        setTimeout(() => {
            this.transitionTo('truth');
        }, 8000);
    }

    createPath() {
        this.nodes = [];
        this.connections = [];
        
        // Start and end nodes
        const startX = this.width * 0.15;
        const endX = this.width * 0.85;
        const centerY = this.height * 0.5;
        
        // Create intermediary nodes (the "path" between concepts)
        const steps = 8 + Math.floor(Math.random() * 5);
        const concepts = this.generateIntermediateConcepts(this.thingA, this.thingB, steps);
        
        for (let i = 0; i < concepts.length; i++) {
            const progress = i / (concepts.length - 1);
            const x = startX + (endX - startX) * progress;
            const y = centerY + Math.sin(progress * Math.PI * 2) * 80 + (Math.random() - 0.5) * 60;
            
            this.nodes.push({
                x: x,
                y: y,
                label: concepts[i],
                revealed: false,
                revealTime: i * 500,
                size: i === 0 || i === concepts.length - 1 ? 8 : 4 + Math.random() * 3
            });
        }
        
        // Create connections between sequential nodes
        for (let i = 0; i < this.nodes.length - 1; i++) {
            this.connections.push({
                from: i,
                to: i + 1,
                revealed: false,
                revealTime: i * 500 + 250,
                progress: 0
            });
        }
        
        // Add some cross-connections (showing interconnected web)
        for (let i = 0; i < this.nodes.length - 2; i++) {
            if (Math.random() < 0.3) {
                this.connections.push({
                    from: i,
                    to: i + 2,
                    revealed: false,
                    revealTime: (i + 1) * 500,
                    progress: 0,
                    secondary: true
                });
            }
        }
    }

    generateIntermediateConcepts(a, b, count) {
        // Generate poetic intermediary concepts
        const bridges = [
            'memory', 'light', 'time', 'energy', 'atoms', 'waves',
            'patterns', 'breath', 'motion', 'stories', 'dreams',
            'echoes', 'shadows', 'reflections', 'vibrations', 'silence',
            'moments', 'change', 'cycles', 'origins', 'possibility'
        ];
        
        const concepts = [a];
        const usedBridges = [];
        
        for (let i = 0; i < count - 2; i++) {
            let bridge;
            do {
                bridge = bridges[Math.floor(Math.random() * bridges.length)];
            } while (usedBridges.includes(bridge));
            usedBridges.push(bridge);
            concepts.push(bridge);
        }
        
        concepts.push(b);
        return concepts;
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'reveal') {
            document.getElementById('phase-reveal').classList.add('active');
        } else if (newPhase === 'truth') {
            document.getElementById('phase-truth').classList.add('active');
        }
    }

    animate() {
        // Clear with slight trail
        this.ctx.fillStyle = 'rgba(8, 8, 12, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw background web
        this.drawBackgroundWeb();

        // Draw main path if in reveal phase
        if (this.phase === 'reveal' || this.phase === 'truth') {
            this.pathProgress += 16; // ms since last frame
            this.drawPath();
        }

        requestAnimationFrame(() => this.animate());
    }

    drawBackgroundWeb() {
        // Update and draw floating background nodes
        for (let i = 0; i < this.backgroundNodes.length; i++) {
            const node = this.backgroundNodes[i];
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Wrap around
            if (node.x < 0) node.x = this.width;
            if (node.x > this.width) node.x = 0;
            if (node.y < 0) node.y = this.height;
            if (node.y > this.height) node.y = 0;
            
            // Draw node
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(160, 160, 192, 0.1)';
            this.ctx.fill();
            
            // Draw connections to nearby nodes
            for (let j = i + 1; j < this.backgroundNodes.length; j++) {
                const other = this.backgroundNodes[j];
                const dx = other.x - node.x;
                const dy = other.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const alpha = (1 - dist / 150) * 0.05;
                    this.ctx.beginPath();
                    this.ctx.moveTo(node.x, node.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(192, 192, 208, ${alpha})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }

    drawPath() {
        // Draw connections
        for (const conn of this.connections) {
            if (this.pathProgress > conn.revealTime) {
                const progress = Math.min(1, (this.pathProgress - conn.revealTime) / 500);
                const from = this.nodes[conn.from];
                const to = this.nodes[conn.to];
                
                // Interpolate line drawing
                const currentX = from.x + (to.x - from.x) * progress;
                const currentY = from.y + (to.y - from.y) * progress;
                
                this.ctx.beginPath();
                this.ctx.moveTo(from.x, from.y);
                this.ctx.lineTo(currentX, currentY);
                this.ctx.strokeStyle = conn.secondary 
                    ? `rgba(192, 192, 208, ${0.15 * progress})`
                    : `rgba(192, 192, 208, ${0.5 * progress})`;
                this.ctx.lineWidth = conn.secondary ? 0.5 : 1.5;
                this.ctx.stroke();
            }
        }

        // Draw nodes
        for (const node of this.nodes) {
            if (this.pathProgress > node.revealTime) {
                const progress = Math.min(1, (this.pathProgress - node.revealTime) / 300);
                
                // Glow
                const gradient = this.ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.size * 4
                );
                gradient.addColorStop(0, `rgba(192, 192, 208, ${0.3 * progress})`);
                gradient.addColorStop(1, 'transparent');
                
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
                
                // Core
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.size * progress, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(220, 220, 235, ${progress})`;
                this.ctx.fill();
                
                // Label
                if (progress > 0.5) {
                    this.ctx.font = '14px Cormorant Garamond';
                    this.ctx.fillStyle = `rgba(192, 192, 208, ${(progress - 0.5) * 2})`;
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(node.label, node.x, node.y + node.size + 20);
                }
            }
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    new ThreadsExperience();
});

