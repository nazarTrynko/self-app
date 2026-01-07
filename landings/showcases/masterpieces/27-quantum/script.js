// QUANTUM DECISION ENGINE - Probability Space Visualization
// Emergent Intelligence Category - Showcase 27

class QuantumField {
    constructor() {
        this.canvas = document.getElementById('quantum-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.time = 0;
        this.collapsed = false;
        
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
        const count = Math.min(200, Math.floor((this.canvas.width * this.canvas.height) / 10000));
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: 1 + Math.random() * 2,
                phase: Math.random() * Math.PI * 2,
                frequency: 0.5 + Math.random() * 2,
                superposition: true,
                hue: 190 + Math.random() * 40
            });
        }
    }

    update() {
        this.time += 0.016;

        this.particles.forEach(p => {
            if (p.superposition) {
                // Quantum uncertainty - particles shimmer between positions
                p.x += p.vx + Math.sin(this.time * p.frequency + p.phase) * 0.5;
                p.y += p.vy + Math.cos(this.time * p.frequency + p.phase) * 0.5;
            } else {
                // Collapsed state - particles move normally
                p.x += p.vx;
                p.y += p.vy;
            }

            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(3, 8, 24, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw probability connections
        this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
        this.ctx.lineWidth = 0.5;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw particles
        this.particles.forEach(p => {
            // Probability cloud (superposition effect)
            if (p.superposition) {
                const spread = 10 + Math.sin(this.time * p.frequency) * 5;
                for (let i = 0; i < 3; i++) {
                    const offsetX = Math.sin(this.time * p.frequency + i * 2) * spread;
                    const offsetY = Math.cos(this.time * p.frequency + i * 2) * spread;
                    
                    this.ctx.beginPath();
                    this.ctx.arc(p.x + offsetX, p.y + offsetY, p.radius * 0.5, 0, Math.PI * 2);
                    this.ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.2)`;
                    this.ctx.fill();
                }
            }

            // Main particle
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
            glow.addColorStop(0, `hsla(${p.hue}, 80%, 60%, 0.6)`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.8)`;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Decision Field Visualization
class DecisionField {
    constructor() {
        this.canvas = document.getElementById('field-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.options = [
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: 0 },
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: Math.PI * 0.66 },
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: Math.PI * 1.33 }
        ];
        this.time = 0;
        this.collapsed = false;
        this.collapsedOption = null;
        this.collapseProgress = 0;
        
        this.resize();
        this.initPositions();
        window.addEventListener('resize', () => {
            this.resize();
            this.initPositions();
        });
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    initPositions() {
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
        this.options.forEach((opt, i) => {
            const angle = opt.phase;
            opt.x = this.centerX + Math.cos(angle) * radius;
            opt.y = this.centerY + Math.sin(angle) * radius;
            opt.baseX = opt.x;
            opt.baseY = opt.y;
        });
    }

    addOption() {
        const newPhase = Math.random() * Math.PI * 2;
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
        
        this.options.push({
            text: '',
            probability: 0,
            x: this.centerX + Math.cos(newPhase) * radius,
            y: this.centerY + Math.sin(newPhase) * radius,
            baseX: this.centerX + Math.cos(newPhase) * radius,
            baseY: this.centerY + Math.sin(newPhase) * radius,
            vx: 0,
            vy: 0,
            phase: newPhase
        });
        
        this.redistributeProbabilities();
        this.updateProbabilityDisplay();
    }

    redistributeProbabilities() {
        const prob = 1 / this.options.length;
        this.options.forEach(opt => opt.probability = prob);
    }

    collapse() {
        if (this.collapsed) return;
        
        this.collapsed = true;
        
        // Weighted random selection
        const rand = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < this.options.length; i++) {
            cumulative += this.options[i].probability;
            if (rand <= cumulative) {
                this.collapsedOption = i;
                break;
            }
        }
        
        if (this.collapsedOption === null) {
            this.collapsedOption = this.options.length - 1;
        }
        
        return this.options[this.collapsedOption];
    }

    reset() {
        this.collapsed = false;
        this.collapsedOption = null;
        this.collapseProgress = 0;
        this.redistributeProbabilities();
    }

    updateProbabilityDisplay() {
        this.options.forEach((opt, i) => {
            const el = document.getElementById(`prob-${i}`);
            if (el) {
                el.textContent = `${Math.round(opt.probability * 100)}%`;
            }
        });
    }

    update() {
        this.time += 0.016;

        if (this.collapsed) {
            this.collapseProgress = Math.min(1, this.collapseProgress + 0.02);
            
            this.options.forEach((opt, i) => {
                if (i === this.collapsedOption) {
                    // Winner moves to center
                    opt.x += (this.centerX - opt.x) * 0.05;
                    opt.y += (this.centerY - opt.y) * 0.05;
                } else {
                    // Others fade out and move away
                    const angle = Math.atan2(opt.y - this.centerY, opt.x - this.centerX);
                    opt.x += Math.cos(angle) * 3;
                    opt.y += Math.sin(angle) * 3;
                }
            });
        } else {
            // Superposition state - options orbit and fluctuate
            this.options.forEach((opt, i) => {
                const orbitSpeed = 0.3;
                const wobble = Math.sin(this.time * 2 + opt.phase) * 20;
                const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25 + wobble;
                
                opt.x = this.centerX + Math.cos(this.time * orbitSpeed + opt.phase) * radius;
                opt.y = this.centerY + Math.sin(this.time * orbitSpeed + opt.phase) * radius;
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw probability cloud at center
        if (!this.collapsed) {
            const cloudRadius = 50 + Math.sin(this.time * 3) * 10;
            const gradient = this.ctx.createRadialGradient(
                this.centerX, this.centerY, 0,
                this.centerX, this.centerY, cloudRadius
            );
            gradient.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
            gradient.addColorStop(0.5, 'rgba(129, 140, 248, 0.2)');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, cloudRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }

        // Draw options
        this.options.forEach((opt, i) => {
            const opacity = this.collapsed ? 
                (i === this.collapsedOption ? 1 : Math.max(0, 1 - this.collapseProgress * 2)) : 
                0.6 + opt.probability * 0.4;
            
            if (opacity <= 0) return;

            // Connection to center
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX, this.centerY);
            this.ctx.lineTo(opt.x, opt.y);
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
            this.ctx.lineWidth = opt.probability * 4;
            this.ctx.stroke();

            // Option circle
            const radius = 20 + opt.probability * 30;
            
            // Glow
            const glow = this.ctx.createRadialGradient(opt.x, opt.y, 0, opt.x, opt.y, radius * 2);
            glow.addColorStop(0, `rgba(56, 189, 248, ${opacity * 0.4})`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(opt.x, opt.y, radius * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Circle
            this.ctx.beginPath();
            this.ctx.arc(opt.x, opt.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(10, 22, 40, ${opacity})`;
            this.ctx.fill();
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Label
            const label = opt.text || `Option ${String.fromCharCode(65 + i)}`;
            this.ctx.font = '12px Inter';
            this.ctx.fillStyle = `rgba(232, 244, 255, ${opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, opt.x, opt.y - 5);
            
            // Probability
            this.ctx.font = '14px JetBrains Mono';
            this.ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
            this.ctx.fillText(`${Math.round(opt.probability * 100)}%`, opt.x, opt.y + 12);
        });

        // Draw collapse effect
        if (this.collapsed && this.collapseProgress < 1) {
            const rippleRadius = this.collapseProgress * 300;
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, rippleRadius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${1 - this.collapseProgress})`;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class QuantumDecisionApp {
    constructor() {
        this.bgField = new QuantumField();
        this.decisionField = new DecisionField();
        
        this.bindEvents();
    }

    bindEvents() {
        const collapseBtn = document.getElementById('collapse-btn');
        const addOptionBtn = document.getElementById('add-option');
        const optionInputs = document.querySelectorAll('.possibility-input input');

        if (collapseBtn) {
            collapseBtn.addEventListener('click', () => this.collapse());
        }

        if (addOptionBtn) {
            addOptionBtn.addEventListener('click', () => this.addOption());
        }

        optionInputs.forEach((input, i) => {
            input.addEventListener('input', (e) => {
                if (this.decisionField.options[i]) {
                    this.decisionField.options[i].text = e.target.value;
                }
            });
        });
    }

    addOption() {
        if (this.decisionField.options.length >= 6) return;
        
        this.decisionField.addOption();
        
        // Add new input field
        const container = document.querySelector('.possibility-inputs');
        const index = this.decisionField.options.length - 1;
        
        const inputDiv = document.createElement('div');
        inputDiv.className = 'possibility-input';
        inputDiv.innerHTML = `
            <input type="text" placeholder="Option ${String.fromCharCode(65 + index)}" data-option="${index}" />
            <span class="probability" id="prob-${index}">${Math.round(100 / this.decisionField.options.length)}%</span>
        `;
        
        container.appendChild(inputDiv);
        
        inputDiv.querySelector('input').addEventListener('input', (e) => {
            this.decisionField.options[index].text = e.target.value;
        });
        
        this.decisionField.updateProbabilityDisplay();
    }

    collapse() {
        const result = this.decisionField.collapse();
        
        if (result) {
            const resultDisplay = document.getElementById('result-display');
            const resultValue = document.getElementById('result-value');
            
            if (resultDisplay && resultValue) {
                setTimeout(() => {
                    resultValue.textContent = result.text || 'Option ' + String.fromCharCode(65 + this.decisionField.collapsedOption);
                    resultDisplay.classList.add('visible');
                }, 1000);
            }
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new QuantumDecisionApp();
});

