// QUANTUM ENTANGLEMENT VIEWER
// Emergent Intelligence Category - Showcase 34

class EntanglementBackground {
    constructor() {
        this.canvas = document.getElementById('entangle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.pairs = [];
        this.time = 0;
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        this.pairs = [];
        
        for (let i = 0; i < 30; i++) {
            const x1 = Math.random() * this.canvas.width;
            const y1 = Math.random() * this.canvas.height;
            const x2 = Math.random() * this.canvas.width;
            const y2 = Math.random() * this.canvas.height;
            
            this.pairs.push({
                p1: { x: x1, y: y1, vx: (Math.random() - 0.5), vy: (Math.random() - 0.5) },
                p2: { x: x2, y: y2, vx: (Math.random() - 0.5), vy: (Math.random() - 0.5) },
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    update() {
        this.time += 0.016;
        
        this.pairs.forEach(pair => {
            ['p1', 'p2'].forEach(key => {
                const p = pair[key];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
            });
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(3, 8, 16, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.pairs.forEach(pair => {
            const alpha = 0.2 + 0.2 * Math.sin(this.time * 2 + pair.phase);
            
            // Entanglement line
            this.ctx.beginPath();
            this.ctx.moveTo(pair.p1.x, pair.p1.y);
            this.ctx.lineTo(pair.p2.x, pair.p2.y);
            this.ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.3})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Particles
            [pair.p1, pair.p2].forEach((p, i) => {
                const color = i === 0 ? '0, 212, 255' : '255, 0, 212';
                const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
                glow.addColorStop(0, `rgba(${color}, ${alpha})`);
                glow.addColorStop(1, 'transparent');
                
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
                this.ctx.fillStyle = glow;
                this.ctx.fill();
                
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(${color}, ${alpha + 0.3})`;
                this.ctx.fill();
            });
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Lab Simulation
class EntanglementLab {
    constructor() {
        this.canvas = document.getElementById('lab-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particleA = null;
        this.particleB = null;
        this.entangled = false;
        this.measuredA = false;
        this.measuredB = false;
        this.resultA = null;
        this.resultB = null;
        this.time = 0;
        
        this.trials = 0;
        this.correlations = 0;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.width * 9 / 16;
    }

    createPair() {
        this.particleA = {
            x: this.canvas.width * 0.3,
            y: this.canvas.height / 2,
            spin: null // In superposition
        };
        this.particleB = {
            x: this.canvas.width * 0.7,
            y: this.canvas.height / 2,
            spin: null
        };
        this.entangled = true;
        this.measuredA = false;
        this.measuredB = false;
        this.resultA = null;
        this.resultB = null;
        
        this.updateUI();
    }

    measureA() {
        if (!this.entangled || this.measuredA) return;
        
        // Collapse the wave function
        this.resultA = Math.random() < 0.5 ? 'up' : 'down';
        this.particleA.spin = this.resultA;
        
        // Due to entanglement, B is now determined (anti-correlated)
        this.resultB = this.resultA === 'up' ? 'down' : 'up';
        this.particleB.spin = this.resultB;
        
        this.measuredA = true;
        this.measuredB = true;
        
        this.trials++;
        this.correlations++;
        
        this.updateUI();
    }

    measureB() {
        if (!this.entangled || this.measuredB) return;
        
        // Same as measuring A
        this.resultB = Math.random() < 0.5 ? 'up' : 'down';
        this.particleB.spin = this.resultB;
        this.resultA = this.resultB === 'up' ? 'down' : 'up';
        this.particleA.spin = this.resultA;
        
        this.measuredA = true;
        this.measuredB = true;
        
        this.trials++;
        this.correlations++;
        
        this.updateUI();
    }

    updateUI() {
        const stateA = document.getElementById('state-a');
        const stateB = document.getElementById('state-b');
        const resultA = document.getElementById('result-a');
        const resultB = document.getElementById('result-b');
        
        if (this.entangled && !this.measuredA) {
            stateA.textContent = '|ψ⟩ = ↑+↓';
            stateB.textContent = '|ψ⟩ = ↑+↓';
        } else if (this.measuredA) {
            stateA.textContent = `|${this.resultA === 'up' ? '↑' : '↓'}⟩`;
            stateB.textContent = `|${this.resultB === 'up' ? '↑' : '↓'}⟩`;
        } else {
            stateA.textContent = 'Not created';
            stateB.textContent = 'Not created';
        }
        
        resultA.textContent = this.resultA ? (this.resultA === 'up' ? '↑' : '↓') : '';
        resultA.style.color = this.resultA === 'up' ? '#00d4ff' : '#ff00d4';
        resultB.textContent = this.resultB ? (this.resultB === 'up' ? '↑' : '↓') : '';
        resultB.style.color = this.resultB === 'up' ? '#00d4ff' : '#ff00d4';
        
        document.getElementById('trials').textContent = this.trials;
        document.getElementById('correlations').textContent = this.correlations;
        
        const bellValue = this.trials > 10 ? (2 + Math.random() * 0.8).toFixed(2) : '-';
        document.getElementById('bell-value').textContent = bellValue;
        
        // Disable buttons appropriately
        document.getElementById('measure-a').disabled = !this.entangled || this.measuredA;
        document.getElementById('measure-b').disabled = !this.entangled || this.measuredB;
    }

    resetStats() {
        this.trials = 0;
        this.correlations = 0;
        this.updateUI();
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 21, 32, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.time += 0.016;

        const centerY = this.canvas.height / 2;
        
        if (this.entangled) {
            // Draw entanglement line
            const lineAlpha = this.measuredA ? 0.1 : 0.5 + 0.3 * Math.sin(this.time * 5);
            
            this.ctx.beginPath();
            this.ctx.moveTo(this.particleA.x, this.particleA.y);
            
            // Wavy line
            for (let x = this.particleA.x; x < this.particleB.x; x += 5) {
                const progress = (x - this.particleA.x) / (this.particleB.x - this.particleA.x);
                const wave = Math.sin(this.time * 10 + progress * 20) * 10 * (1 - Math.abs(progress - 0.5) * 2);
                this.ctx.lineTo(x, centerY + wave);
            }
            
            this.ctx.lineTo(this.particleB.x, this.particleB.y);
            
            const gradient = this.ctx.createLinearGradient(this.particleA.x, 0, this.particleB.x, 0);
            gradient.addColorStop(0, `rgba(0, 212, 255, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(255, 0, 212, ${lineAlpha})`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Draw particles
            this.drawParticle(this.particleA, '#00d4ff', this.resultA);
            this.drawParticle(this.particleB, '#ff00d4', this.resultB);
        }
    }

    drawParticle(p, color, result) {
        const size = 30 + (result ? 0 : Math.sin(this.time * 5) * 5);
        
        // Glow
        const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2);
        glow.addColorStop(0, color + '60');
        glow.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = glow;
        this.ctx.fill();
        
        // Core
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        this.ctx.fillStyle = color + '40';
        this.ctx.fill();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Spin arrow if measured
        if (result) {
            this.ctx.beginPath();
            const arrowY = result === 'up' ? -20 : 20;
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x, p.y + arrowY);
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
            
            // Arrow head
            this.ctx.beginPath();
            const headY = result === 'up' ? p.y - 20 : p.y + 20;
            const dir = result === 'up' ? 1 : -1;
            this.ctx.moveTo(p.x - 8, headY + dir * 8);
            this.ctx.lineTo(p.x, headY);
            this.ctx.lineTo(p.x + 8, headY + dir * 8);
            this.ctx.stroke();
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class EntanglementApp {
    constructor() {
        this.bg = new EntanglementBackground();
        this.lab = new EntanglementLab();
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('create-pair')?.addEventListener('click', () => this.lab.createPair());
        document.getElementById('measure-a')?.addEventListener('click', () => this.lab.measureA());
        document.getElementById('measure-b')?.addEventListener('click', () => this.lab.measureB());
        document.getElementById('reset-stats')?.addEventListener('click', () => this.lab.resetStats());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EntanglementApp();
});

