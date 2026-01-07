// COLLECTIVE MIND - Network Visualization
// Emergent Intelligence Category - Showcase 28

class NetworkBackground {
    constructor() {
        this.canvas = document.getElementById('network-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.edges = [];
        this.time = 0;
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.nodes.length > 0) this.init();
    }

    init() {
        this.nodes = [];
        this.edges = [];
        
        const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 20000));
        
        for (let i = 0; i < count; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: 2 + Math.random() * 3,
                cluster: Math.floor(Math.random() * 3),
                activity: Math.random()
            });
        }

        // Create edges
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // More likely to connect within same cluster
                const sameCluster = this.nodes[i].cluster === this.nodes[j].cluster;
                const threshold = sameCluster ? 150 : 80;
                
                if (dist < threshold && Math.random() < 0.3) {
                    this.edges.push({ from: i, to: j, strength: Math.random() });
                }
            }
        }
    }

    update() {
        this.time += 0.016;

        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

            // Pulsing activity
            node.activity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(this.time * 2 + node.x * 0.01));
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 15, 26, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const clusterColors = ['#22d3ee', '#a78bfa', '#34d399'];

        // Draw edges
        this.edges.forEach(edge => {
            const from = this.nodes[edge.from];
            const to = this.nodes[edge.to];
            
            this.ctx.beginPath();
            this.ctx.moveTo(from.x, from.y);
            this.ctx.lineTo(to.x, to.y);
            this.ctx.strokeStyle = `rgba(34, 211, 238, ${edge.strength * 0.15})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
            const color = clusterColors[node.cluster];
            
            // Glow
            const glow = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.radius * 4
            );
            glow.addColorStop(0, `${color}40`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * node.activity, 0, Math.PI * 2);
            this.ctx.fillStyle = `${color}${Math.floor(node.activity * 255).toString(16).padStart(2, '0')}`;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Galaxy Network Visualization
class IdeaGalaxy {
    constructor() {
        this.canvas = document.getElementById('galaxy-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.edges = [];
        this.cascades = [];
        this.time = 0;
        this.cascadeCount = 0;
        
        this.topics = [
            'AI Ethics', 'Climate Action', 'Digital Privacy',
            'Web3 Future', 'Mental Health', 'Remote Work'
        ];
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
        
        // Periodic cascades
        setInterval(() => this.triggerCascade(), 3000);
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    init() {
        this.nodes = [];
        this.edges = [];
        
        const count = 60;
        const clusters = 4;
        
        for (let i = 0; i < count; i++) {
            const cluster = Math.floor(Math.random() * clusters);
            const clusterAngle = (cluster / clusters) * Math.PI * 2;
            const clusterRadius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
            const clusterX = this.canvas.width / 2 + Math.cos(clusterAngle) * clusterRadius * 0.5;
            const clusterY = this.canvas.height / 2 + Math.sin(clusterAngle) * clusterRadius * 0.5;
            
            const spread = clusterRadius * 0.4;
            
            this.nodes.push({
                x: clusterX + (Math.random() - 0.5) * spread,
                y: clusterY + (Math.random() - 0.5) * spread,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                radius: 3 + Math.random() * 5,
                cluster: cluster,
                activity: 0,
                influence: Math.random()
            });
        }

        // Create edges
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                const sameCluster = this.nodes[i].cluster === this.nodes[j].cluster;
                const threshold = sameCluster ? 120 : 60;
                const probability = sameCluster ? 0.4 : 0.1;
                
                if (dist < threshold && Math.random() < probability) {
                    this.edges.push({
                        from: i,
                        to: j,
                        strength: Math.random(),
                        activity: 0
                    });
                }
            }
        }

        this.updateUI();
    }

    injectIdea() {
        // Add new high-influence node
        const x = this.canvas.width / 2 + (Math.random() - 0.5) * 100;
        const y = this.canvas.height / 2 + (Math.random() - 0.5) * 100;
        
        const newNode = {
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            radius: 10,
            cluster: Math.floor(Math.random() * 4),
            activity: 1,
            influence: 1
        };
        
        const newIndex = this.nodes.length;
        this.nodes.push(newNode);
        
        // Connect to nearby nodes
        this.nodes.forEach((node, i) => {
            if (i === newIndex) return;
            const dx = node.x - x;
            const dy = node.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                this.edges.push({
                    from: newIndex,
                    to: i,
                    strength: 0.8,
                    activity: 1
                });
            }
        });
        
        this.triggerCascade(newIndex);
        this.updateUI();
    }

    triggerCascade(startNode = null) {
        if (this.nodes.length === 0) return;
        
        const start = startNode !== null ? startNode : Math.floor(Math.random() * this.nodes.length);
        
        this.cascades.push({
            startNode: start,
            activeNodes: new Set([start]),
            frontier: [start],
            age: 0
        });
        
        this.nodes[start].activity = 1;
        this.cascadeCount++;
    }

    updateCascades() {
        this.cascades.forEach(cascade => {
            cascade.age += 0.016;
            
            if (cascade.age > 0.3 && cascade.frontier.length > 0) {
                cascade.age = 0;
                const newFrontier = [];
                
                cascade.frontier.forEach(nodeIndex => {
                    // Find connected nodes
                    this.edges.forEach(edge => {
                        let neighbor = null;
                        if (edge.from === nodeIndex) neighbor = edge.to;
                        if (edge.to === nodeIndex) neighbor = edge.from;
                        
                        if (neighbor !== null && !cascade.activeNodes.has(neighbor)) {
                            if (Math.random() < 0.6 * edge.strength) {
                                cascade.activeNodes.add(neighbor);
                                newFrontier.push(neighbor);
                                this.nodes[neighbor].activity = 1;
                                edge.activity = 1;
                            }
                        }
                    });
                });
                
                cascade.frontier = newFrontier;
            }
        });
        
        // Remove finished cascades
        this.cascades = this.cascades.filter(c => c.frontier.length > 0);
    }

    updateUI() {
        document.getElementById('node-count').textContent = this.nodes.length;
        document.getElementById('cascade-count').textContent = Math.round(this.cascadeCount / 3);
        
        // Update trends
        const trendsContainer = document.getElementById('trends');
        trendsContainer.innerHTML = this.topics.slice(0, 4).map((topic, i) => `
            <div class="trend-item">
                <span class="trend-topic">${topic}</span>
                <div class="trend-bar"><div class="trend-fill" style="width: ${30 + Math.random() * 60}%"></div></div>
            </div>
        `).join('');
    }

    update() {
        this.time += 0.016;
        
        this.updateCascades();

        // Update nodes
        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Gentle boundary force
            const margin = 50;
            if (node.x < margin) node.vx += 0.1;
            if (node.x > this.canvas.width - margin) node.vx -= 0.1;
            if (node.y < margin) node.vy += 0.1;
            if (node.y > this.canvas.height - margin) node.vy -= 0.1;

            // Decay activity
            node.activity *= 0.98;

            // Speed limit
            const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
            if (speed > 1) {
                node.vx = (node.vx / speed) * 1;
                node.vy = (node.vy / speed) * 1;
            }
        });

        // Decay edge activity
        this.edges.forEach(edge => {
            edge.activity *= 0.95;
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(17, 24, 39, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const clusterColors = ['#22d3ee', '#a78bfa', '#34d399', '#fbbf24'];

        // Draw edges
        this.edges.forEach(edge => {
            const from = this.nodes[edge.from];
            const to = this.nodes[edge.to];
            
            const baseAlpha = 0.1 + edge.activity * 0.6;
            
            this.ctx.beginPath();
            this.ctx.moveTo(from.x, from.y);
            this.ctx.lineTo(to.x, to.y);
            this.ctx.strokeStyle = `rgba(34, 211, 238, ${baseAlpha})`;
            this.ctx.lineWidth = 0.5 + edge.activity * 2;
            this.ctx.stroke();
        });

        // Draw nodes
        this.nodes.forEach(node => {
            const color = clusterColors[node.cluster];
            const alpha = 0.5 + node.activity * 0.5;
            const size = node.radius * (1 + node.activity * 0.5);
            
            // Glow
            const glow = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, size * 3
            );
            glow.addColorStop(0, `${color}${Math.floor(alpha * 100).toString(16).padStart(2, '0')}`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class CollectiveMindApp {
    constructor() {
        this.bgNetwork = new NetworkBackground();
        this.galaxy = new IdeaGalaxy();
        
        this.bindEvents();
    }

    bindEvents() {
        const injectBtn = document.getElementById('inject-btn');
        const cascadeBtn = document.getElementById('cascade-btn');
        const resetBtn = document.getElementById('reset-btn');

        if (injectBtn) {
            injectBtn.addEventListener('click', () => this.galaxy.injectIdea());
        }

        if (cascadeBtn) {
            cascadeBtn.addEventListener('click', () => this.galaxy.triggerCascade());
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.galaxy.cascadeCount = 0;
                this.galaxy.init();
            });
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CollectiveMindApp();
});

