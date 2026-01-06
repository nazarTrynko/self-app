// THE EMERGENCE - Chaos to Order Visualization
// Genuine emergence through particle physics and attraction

class EmergenceSimulation {
    constructor() {
        this.canvas = document.getElementById('emergence-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.attractors = [];
        this.entropy = 1.0;
        this.targetEntropy = 0.3;
        this.time = 0;
        
        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        this.attractors = [];
        this.entropy = 1.0;
        
        // Create particles in chaotic state
        const particleCount = Math.min(800, Math.floor((this.canvas.width * this.canvas.height) / 2000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                size: Math.random() * 2 + 1,
                hue: 140 + Math.random() * 40, // Green spectrum
                connections: [],
                energy: Math.random()
            });
        }

        // Create emergence attractors that will form patterns
        this.generateAttractors();
        
        this.updateUI();
    }

    generateAttractors() {
        this.attractors = [];
        const count = 3 + Math.floor(Math.random() * 4);
        
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
            
            this.attractors.push({
                x: this.canvas.width / 2 + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5),
                y: this.canvas.height / 2 + Math.sin(angle) * radius * (0.5 + Math.random() * 0.5),
                strength: 0.5 + Math.random() * 1.5,
                radius: 50 + Math.random() * 100,
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    injectChaos() {
        this.entropy = 1.0;
        this.targetEntropy = 0.2 + Math.random() * 0.3;
        
        // Add energy to particles
        this.particles.forEach(p => {
            p.vx += (Math.random() - 0.5) * 8;
            p.vy += (Math.random() - 0.5) * 8;
            p.energy = 1.0;
        });

        // Generate new attractor pattern
        this.generateAttractors();
        
        this.updateUI();
    }

    reset() {
        this.init();
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.getElementById('chaos-btn').addEventListener('click', () => this.injectChaos());
        document.getElementById('reset-btn').addEventListener('click', () => this.reset());

        // Click on canvas to create local disturbance
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create temporary attractor at click point
            this.attractors.push({
                x: x,
                y: y,
                strength: 2,
                radius: 100,
                phase: 0,
                temporary: true,
                life: 1.0
            });

            // Push nearby particles
            this.particles.forEach(p => {
                const dx = p.x - x;
                const dy = p.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    p.vx += (dx / dist) * force * 3;
                    p.vy += (dy / dist) * force * 3;
                    p.energy = Math.min(1, p.energy + force);
                }
            });

            this.entropy = Math.min(1, this.entropy + 0.2);
        });
    }

    updateUI() {
        document.getElementById('particle-count').textContent = this.particles.length;
        
        const entropyText = this.entropy > 0.7 ? 'High Entropy' : 
                           this.entropy > 0.4 ? 'Ordering...' : 
                           'Emergence Achieved';
        document.getElementById('entropy-level').textContent = entropyText;
    }

    update() {
        this.time += 0.01;
        
        // Gradually reduce entropy (system moves toward order)
        this.entropy += (this.targetEntropy - this.entropy) * 0.001;
        
        // Update temporary attractors
        this.attractors = this.attractors.filter(a => {
            if (a.temporary) {
                a.life -= 0.02;
                return a.life > 0;
            }
            return true;
        });

        // Update particles
        this.particles.forEach(p => {
            // Apply attractor forces (emergence force)
            this.attractors.forEach(a => {
                const dx = a.x - p.x;
                const dy = a.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < a.radius * 3 && dist > 1) {
                    // Oscillating attraction (creates organic patterns)
                    const oscillation = Math.sin(this.time * 2 + a.phase + dist * 0.01);
                    const force = (a.strength * (1 - this.entropy) * (1 + oscillation * 0.5)) / (dist * 0.1);
                    
                    p.vx += (dx / dist) * force * 0.1;
                    p.vy += (dy / dist) * force * 0.1;
                }
            });

            // Particle-particle interaction (local emergence)
            this.particles.forEach(other => {
                if (p === other) return;
                
                const dx = other.x - p.x;
                const dy = other.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Attraction at medium range, repulsion at close range
                if (dist < 80 && dist > 1) {
                    const optimalDist = 30;
                    const force = (dist - optimalDist) * 0.0005 * (1 - this.entropy * 0.5);
                    
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            });

            // Damping (increases as order emerges)
            const damping = 0.99 - (1 - this.entropy) * 0.02;
            p.vx *= damping;
            p.vy *= damping;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Decay energy
            p.energy *= 0.99;
        });

        // Update UI periodically
        if (Math.floor(this.time * 100) % 50 === 0) {
            this.updateUI();
        }
    }

    draw() {
        // Semi-transparent clear for trails
        this.ctx.fillStyle = 'rgba(2, 10, 6, 0.15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections between nearby particles (emergent structure)
        if (this.entropy < 0.7) {
            this.ctx.strokeStyle = `rgba(0, 230, 118, ${0.1 * (1 - this.entropy)})`;
            this.ctx.lineWidth = 0.5;

            this.particles.forEach((p, i) => {
                this.particles.slice(i + 1).forEach(other => {
                    const dx = other.x - p.x;
                    const dy = other.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 50) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(p.x, p.y);
                        this.ctx.lineTo(other.x, other.y);
                        this.ctx.stroke();
                    }
                });
            });
        }

        // Draw particles
        this.particles.forEach(p => {
            const alpha = 0.3 + p.energy * 0.7;
            const size = p.size * (1 + p.energy * 0.5);
            
            // Glow
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
            gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${alpha * 0.5})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${alpha})`;
            this.ctx.fill();
        });

        // Draw subtle attractor regions (optional, for debugging/beauty)
        if (this.entropy < 0.5) {
            this.attractors.forEach(a => {
                if (a.temporary) return;
                
                const gradient = this.ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.radius);
                gradient.addColorStop(0, `rgba(0, 230, 118, ${0.05 * (1 - this.entropy)})`);
                gradient.addColorStop(1, 'transparent');
                
                this.ctx.beginPath();
                this.ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
            });
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new EmergenceSimulation();
});


