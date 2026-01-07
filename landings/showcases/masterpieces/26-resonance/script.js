// NEURAL RESONANCE - Advanced Neural Visualization
// Emergent Intelligence Category - Showcase 26

class NeuralField {
    constructor() {
        this.canvas = document.getElementById('neural-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.neurons = [];
        this.connections = [];
        this.time = 0;
        this.pulses = [];
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        if (this.neurons.length > 0) {
            this.init();
        }
    }

    init() {
        this.neurons = [];
        this.connections = [];
        
        const count = Math.min(150, Math.floor((this.canvas.width * this.canvas.height) / 15000));
        
        for (let i = 0; i < count; i++) {
            this.neurons.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: 2 + Math.random() * 2,
                activation: Math.random(),
                frequency: 0.5 + Math.random() * 2,
                phase: Math.random() * Math.PI * 2,
                type: Math.random() < 0.3 ? 'excitatory' : 'inhibitory'
            });
        }

        // Create connections based on proximity
        for (let i = 0; i < this.neurons.length; i++) {
            for (let j = i + 1; j < this.neurons.length; j++) {
                const dx = this.neurons[i].x - this.neurons[j].x;
                const dy = this.neurons[i].y - this.neurons[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150 && Math.random() < 0.3) {
                    this.connections.push({
                        from: i,
                        to: j,
                        strength: Math.random(),
                        active: false,
                        pulseProgress: 0
                    });
                }
            }
        }
    }

    firePulse(neuronIndex) {
        const neuron = this.neurons[neuronIndex];
        
        this.pulses.push({
            x: neuron.x,
            y: neuron.y,
            radius: 0,
            maxRadius: 100,
            opacity: 1,
            color: neuron.type === 'excitatory' ? '#a855f7' : '#06b6d4'
        });

        // Activate connected neurons
        this.connections.forEach(conn => {
            if (conn.from === neuronIndex || conn.to === neuronIndex) {
                conn.active = true;
                conn.pulseProgress = 0;
            }
        });
    }

    update() {
        this.time += 0.016;

        // Update neurons
        this.neurons.forEach((neuron, i) => {
            // Movement
            neuron.x += neuron.vx;
            neuron.y += neuron.vy;

            // Bounds
            if (neuron.x < 0 || neuron.x > this.canvas.width) neuron.vx *= -1;
            if (neuron.y < 0 || neuron.y > this.canvas.height) neuron.vy *= -1;

            // Activation oscillation
            neuron.activation = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(this.time * neuron.frequency + neuron.phase));

            // Random firing
            if (Math.random() < 0.001) {
                this.firePulse(i);
            }
        });

        // Update connections
        this.connections.forEach(conn => {
            if (conn.active) {
                conn.pulseProgress += 0.03;
                if (conn.pulseProgress >= 1) {
                    conn.active = false;
                    conn.pulseProgress = 0;
                }
            }
        });

        // Update pulses
        this.pulses.forEach(pulse => {
            pulse.radius += 3;
            pulse.opacity = 1 - (pulse.radius / pulse.maxRadius);
        });
        this.pulses = this.pulses.filter(p => p.opacity > 0);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 0, 18, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections
        this.connections.forEach(conn => {
            const from = this.neurons[conn.from];
            const to = this.neurons[conn.to];
            
            const gradient = this.ctx.createLinearGradient(from.x, from.y, to.x, to.y);
            const alpha = conn.active ? 0.4 : 0.08;
            
            gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`);
            gradient.addColorStop(1, `rgba(99, 102, 241, ${alpha})`);
            
            this.ctx.beginPath();
            this.ctx.moveTo(from.x, from.y);
            this.ctx.lineTo(to.x, to.y);
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = conn.active ? 2 : 0.5;
            this.ctx.stroke();

            // Draw pulse along connection
            if (conn.active) {
                const px = from.x + (to.x - from.x) * conn.pulseProgress;
                const py = from.y + (to.y - from.y) * conn.pulseProgress;
                
                const pulseGrad = this.ctx.createRadialGradient(px, py, 0, px, py, 8);
                pulseGrad.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
                pulseGrad.addColorStop(1, 'transparent');
                
                this.ctx.beginPath();
                this.ctx.arc(px, py, 8, 0, Math.PI * 2);
                this.ctx.fillStyle = pulseGrad;
                this.ctx.fill();
            }
        });

        // Draw pulses
        this.pulses.forEach(pulse => {
            this.ctx.beginPath();
            this.ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `${pulse.color}${Math.floor(pulse.opacity * 255).toString(16).padStart(2, '0')}`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });

        // Draw neurons
        this.neurons.forEach(neuron => {
            const color = neuron.type === 'excitatory' ? 
                `rgba(168, 85, 247, ${neuron.activation})` : 
                `rgba(6, 182, 212, ${neuron.activation})`;
            
            // Glow
            const glow = this.ctx.createRadialGradient(
                neuron.x, neuron.y, 0,
                neuron.x, neuron.y, neuron.radius * 4
            );
            glow.addColorStop(0, color);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(neuron.x, neuron.y, neuron.radius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(neuron.x, neuron.y, neuron.radius * neuron.activation, 0, Math.PI * 2);
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

// Brain Visualization Canvas
class BrainVisualization {
    constructor() {
        this.canvas = document.getElementById('brain-visualization');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.time = 0;
        this.state = 'sensing';
        this.frequencies = {
            delta: 0.15,
            theta: 0.25,
            alpha: 0.45,
            beta: 0.35,
            gamma: 0.20
        };
        this.coherence = 0;
        this.resonance = 0;
        this.hrv = 55;
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    init() {
        this.particles = [];
        const count = 800;
        
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * Math.min(this.canvas.width, this.canvas.height) * 0.4;
            
            this.particles.push({
                x: this.centerX + Math.cos(angle) * radius,
                y: this.centerY + Math.sin(angle) * radius,
                baseX: Math.cos(angle) * radius,
                baseY: Math.sin(angle) * radius,
                radius: 1 + Math.random() * 2,
                frequency: 0.5 + Math.random() * 3,
                phase: Math.random() * Math.PI * 2,
                layer: Math.floor(Math.random() * 5),
                hue: 260 + Math.random() * 60
            });
        }
    }

    setState(newState) {
        this.state = newState;
        
        const states = {
            focus: { delta: 0.1, theta: 0.15, alpha: 0.3, beta: 0.7, gamma: 0.5 },
            flow: { delta: 0.1, theta: 0.4, alpha: 0.6, beta: 0.4, gamma: 0.3 },
            creative: { delta: 0.15, theta: 0.6, alpha: 0.4, beta: 0.25, gamma: 0.35 },
            meditative: { delta: 0.2, theta: 0.35, alpha: 0.7, beta: 0.15, gamma: 0.1 },
            sensing: { delta: 0.15, theta: 0.25, alpha: 0.45, beta: 0.35, gamma: 0.2 }
        };
        
        const target = states[newState] || states.sensing;
        
        // Animate transition
        const animate = () => {
            let changed = false;
            Object.keys(target).forEach(key => {
                const diff = target[key] - this.frequencies[key];
                if (Math.abs(diff) > 0.01) {
                    this.frequencies[key] += diff * 0.05;
                    changed = true;
                }
            });
            if (changed) requestAnimationFrame(animate);
        };
        animate();
        
        document.getElementById('current-state').textContent = newState.toUpperCase();
    }

    update() {
        this.time += 0.016;

        // Calculate coherence based on frequency alignment
        const freqValues = Object.values(this.frequencies);
        const freqAvg = freqValues.reduce((a, b) => a + b) / freqValues.length;
        const freqVariance = freqValues.reduce((sum, v) => sum + Math.pow(v - freqAvg, 2), 0) / freqValues.length;
        this.coherence = Math.round((1 - freqVariance) * 100);
        
        // Calculate resonance based on particle synchronization
        let syncSum = 0;
        this.particles.forEach(p => {
            syncSum += Math.abs(Math.sin(this.time * p.frequency + p.phase));
        });
        this.resonance = Math.round((syncSum / this.particles.length) * 100);
        
        // Simulate HRV variation
        this.hrv = 55 + Math.sin(this.time * 0.5) * 10 + Math.random() * 5;

        // Update particles
        const freqMultiplier = {
            0: this.frequencies.delta,
            1: this.frequencies.theta,
            2: this.frequencies.alpha,
            3: this.frequencies.beta,
            4: this.frequencies.gamma
        };

        this.particles.forEach(p => {
            const layerFreq = freqMultiplier[p.layer];
            const wave = Math.sin(this.time * p.frequency * layerFreq * 2 + p.phase);
            const expansion = 1 + wave * 0.2 * layerFreq;
            
            p.x = this.centerX + p.baseX * expansion;
            p.y = this.centerY + p.baseY * expansion;
        });

        // Update UI
        this.updateUI();
    }

    updateUI() {
        // Update frequency bars
        Object.keys(this.frequencies).forEach(key => {
            const fill = document.getElementById(`${key}-fill`);
            if (fill) {
                fill.style.height = `${this.frequencies[key] * 100}%`;
            }
        });

        // Update metrics
        document.getElementById('coherence-value').textContent = `${this.coherence}%`;
        document.getElementById('resonance-value').textContent = `${this.resonance}%`;
        document.getElementById('hrv-value').textContent = Math.round(this.hrv);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(18, 8, 32, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw particles with layer-based colors
        const layerColors = [
            'rgba(139, 92, 246, ', // Delta - purple
            'rgba(99, 102, 241, ', // Theta - indigo
            'rgba(6, 182, 212, ',  // Alpha - cyan
            'rgba(16, 185, 129, ', // Beta - green
            'rgba(245, 158, 11, '  // Gamma - amber
        ];

        // Sort by layer for depth effect
        const sortedParticles = [...this.particles].sort((a, b) => a.layer - b.layer);

        sortedParticles.forEach(p => {
            const layerFreq = [this.frequencies.delta, this.frequencies.theta, 
                              this.frequencies.alpha, this.frequencies.beta, 
                              this.frequencies.gamma][p.layer];
            const alpha = 0.3 + layerFreq * 0.7;
            
            // Glow
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
            glow.addColorStop(0, layerColors[p.layer] + alpha + ')');
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * layerFreq * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = layerColors[p.layer] + (alpha + 0.3) + ')';
            this.ctx.fill();
        });

        // Draw center brain outline
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 50 + Math.sin(this.time * 2) * 5, 0, Math.PI * 2);
        this.ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 + this.resonance / 500})`;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class NeuralResonanceApp {
    constructor() {
        this.neuralField = new NeuralField();
        this.brainViz = new BrainVisualization();
        this.sessionActive = false;
        this.currentStateIndex = 0;
        this.states = ['sensing', 'focus', 'flow', 'creative', 'meditative'];
        
        this.bindEvents();
    }

    bindEvents() {
        const startBtn = document.getElementById('start-btn');
        const modeBtn = document.getElementById('mode-btn');
        const stateCards = document.querySelectorAll('.state-card');

        if (startBtn) {
            startBtn.addEventListener('click', () => this.toggleSession());
        }

        if (modeBtn) {
            modeBtn.addEventListener('click', () => this.cycleState());
        }

        stateCards.forEach(card => {
            card.addEventListener('click', () => {
                const state = card.dataset.state;
                if (state && this.brainViz) {
                    this.brainViz.setState(state);
                    
                    // Update active state
                    stateCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            });
        });
    }

    toggleSession() {
        this.sessionActive = !this.sessionActive;
        const btn = document.getElementById('start-btn');
        
        if (this.sessionActive) {
            btn.textContent = 'End Session';
            btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        } else {
            btn.textContent = 'Begin Session';
            btn.style.background = '';
        }
    }

    cycleState() {
        this.currentStateIndex = (this.currentStateIndex + 1) % this.states.length;
        const newState = this.states[this.currentStateIndex];
        
        if (this.brainViz) {
            this.brainViz.setState(newState);
        }

        // Update state cards
        const cards = document.querySelectorAll('.state-card');
        cards.forEach(card => {
            card.classList.toggle('active', card.dataset.state === newState);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new NeuralResonanceApp();
});

