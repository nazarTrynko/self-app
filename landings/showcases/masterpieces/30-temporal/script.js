// TEMPORAL CONSCIOUSNESS - Time Perception Visualization
// Emergent Intelligence Category - Showcase 30

class TimeBackground {
    constructor() {
        this.canvas = document.getElementById('time-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
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
        const count = 100;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                speed: 0.2 + Math.random() * 0.5,
                radius: 1 + Math.random() * 2,
                opacity: Math.random() * 0.5,
                trail: []
            });
        }
    }

    update() {
        this.time += 0.016;
        
        this.particles.forEach(p => {
            // Store trail
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 20) p.trail.shift();
            
            // Move left (time flowing)
            p.x -= p.speed;
            
            // Wrap
            if (p.x < 0) {
                p.x = this.canvas.width;
                p.trail = [];
            }
            
            // Subtle vertical drift
            p.y += Math.sin(this.time + p.x * 0.01) * 0.2;
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(15, 10, 26, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Trail
            if (p.trail.length > 1) {
                this.ctx.beginPath();
                this.ctx.moveTo(p.trail[0].x, p.trail[0].y);
                p.trail.forEach(point => {
                    this.ctx.lineTo(point.x, point.y);
                });
                this.ctx.strokeStyle = `rgba(192, 132, 252, ${p.opacity * 0.3})`;
                this.ctx.lineWidth = p.radius * 0.5;
                this.ctx.stroke();
            }
            
            // Particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(192, 132, 252, ${p.opacity})`;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Time Stream Visualization
class TimeStream {
    constructor() {
        this.canvas = document.getElementById('stream-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.state = 'neutral';
        this.timeMultiplier = 1;
        this.streamParticles = [];
        this.sessionStart = Date.now();
        this.subjectiveTime = 0;
        
        this.stateMultipliers = {
            flow: 1.5,      // Time flies
            boredom: 0.5,   // Time crawls
            anxiety: 0.3,   // Time stretches
            neutral: 1.0
        };
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    init() {
        this.streamParticles = [];
        
        for (let i = 0; i < 200; i++) {
            this.streamParticles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height / 2 + (Math.random() - 0.5) * this.canvas.height * 0.6,
                baseY: this.canvas.height / 2,
                speed: 0.5 + Math.random() * 2,
                radius: 1 + Math.random() * 3,
                phase: Math.random() * Math.PI * 2,
                amplitude: 20 + Math.random() * 50
            });
        }
    }

    setState(newState) {
        this.state = newState;
        this.timeMultiplier = this.stateMultipliers[newState];
        
        // Update UI
        document.querySelectorAll('.state-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.state === newState);
        });
    }

    updateClocks() {
        const elapsed = (Date.now() - this.sessionStart) / 1000;
        
        // Clock time
        const clockHours = Math.floor(elapsed / 3600);
        const clockMins = Math.floor((elapsed % 3600) / 60);
        const clockSecs = Math.floor(elapsed % 60);
        document.getElementById('clock-time').textContent = 
            `${String(clockHours).padStart(2, '0')}:${String(clockMins).padStart(2, '0')}:${String(clockSecs).padStart(2, '0')}`;
        
        // Subjective time (accumulated based on state)
        this.subjectiveTime += 0.016 * this.timeMultiplier;
        const subHours = Math.floor(this.subjectiveTime / 3600);
        const subMins = Math.floor((this.subjectiveTime % 3600) / 60);
        const subSecs = Math.floor(this.subjectiveTime % 60);
        document.getElementById('subjective-time').textContent = 
            `${String(subHours).padStart(2, '0')}:${String(subMins).padStart(2, '0')}:${String(subSecs).padStart(2, '0')}`;
    }

    update() {
        this.time += 0.016;
        this.updateClocks();

        const flowSpeed = this.timeMultiplier;
        
        this.streamParticles.forEach(p => {
            // Move based on time perception
            p.x -= p.speed * flowSpeed;
            
            // Vertical oscillation (more chaotic in anxiety, smooth in flow)
            let oscillation;
            if (this.state === 'anxiety') {
                oscillation = Math.sin(this.time * 3 + p.phase) * p.amplitude * 0.3 +
                             Math.sin(this.time * 7 + p.phase * 2) * p.amplitude * 0.2;
            } else if (this.state === 'flow') {
                oscillation = Math.sin(this.time * 0.5 + p.phase) * p.amplitude * 0.5;
            } else {
                oscillation = Math.sin(this.time + p.phase) * p.amplitude;
            }
            
            p.y = p.baseY + oscillation;
            
            // Wrap
            if (p.x < 0) {
                p.x = this.canvas.width;
            }
        });
    }

    draw() {
        // Background with state-dependent color
        const colors = {
            flow: 'rgba(26, 18, 48, 0.2)',
            boredom: 'rgba(20, 15, 30, 0.15)',
            anxiety: 'rgba(30, 15, 25, 0.25)',
            neutral: 'rgba(26, 18, 48, 0.15)'
        };
        
        this.ctx.fillStyle = colors[this.state];
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw stream
        const streamColors = {
            flow: '#818cf8',
            boredom: '#6b7280',
            anxiety: '#f87171',
            neutral: '#c084fc'
        };
        
        const color = streamColors[this.state];
        
        this.streamParticles.forEach(p => {
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
            glow.addColorStop(0, color + '60');
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();
        });

        // Draw "NOW" marker
        const nowX = this.canvas.width / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(nowX, 0);
        this.ctx.lineTo(nowX, this.canvas.height);
        this.ctx.strokeStyle = `${color}40`;
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        // NOW label
        this.ctx.font = '12px Space Mono';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NOW', nowX, 20);
        
        // Past/Future labels
        this.ctx.fillStyle = color + '60';
        this.ctx.fillText('← PAST', 60, 20);
        this.ctx.fillText('FUTURE →', this.canvas.width - 60, 20);
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Time Calibration Test
class TimeCalibration {
    constructor() {
        this.btn = document.getElementById('calibrate-btn');
        this.result = document.getElementById('calibration-result');
        this.text = document.getElementById('calibration-text');
        this.targetDuration = 10;
        this.isRunning = false;
        this.startTime = null;
        
        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        if (!this.isRunning) {
            this.start();
        } else {
            this.stop();
        }
    }

    start() {
        this.isRunning = true;
        this.startTime = Date.now();
        this.btn.textContent = 'STOP';
        this.btn.style.background = 'linear-gradient(135deg, #f87171, #ef4444)';
        this.text.textContent = `Press STOP when you think ${this.targetDuration} seconds have passed`;
        this.result.innerHTML = '';
    }

    stop() {
        if (!this.isRunning) return;
        
        this.isRunning = false;
        const elapsed = (Date.now() - this.startTime) / 1000;
        const ratio = elapsed / this.targetDuration;
        
        this.btn.textContent = 'TRY AGAIN';
        this.btn.style.background = '';
        
        let interpretation;
        if (ratio < 0.7) {
            interpretation = 'Your time is rushing. You\'re experiencing time compression—the world feels fast.';
        } else if (ratio < 0.9) {
            interpretation = 'Slight time compression. You perceive time as moving slightly faster than it is.';
        } else if (ratio > 1.3) {
            interpretation = 'Your time is stretching. You\'re experiencing time dilation—moments feel longer.';
        } else if (ratio > 1.1) {
            interpretation = 'Slight time dilation. You perceive time as moving slightly slower.';
        } else {
            interpretation = 'Remarkable accuracy! Your temporal perception is well-calibrated.';
        }
        
        this.result.innerHTML = `
            <p class="result-text">${interpretation}</p>
            <p class="result-detail">You waited ${elapsed.toFixed(1)}s for a ${this.targetDuration}s target (ratio: ${ratio.toFixed(2)}x)</p>
        `;
        
        this.text.textContent = `Press TRY AGAIN to test your time perception`;
    }
}

// Main App
class TemporalApp {
    constructor() {
        this.bgTime = new TimeBackground();
        this.timeStream = new TimeStream();
        this.calibration = new TimeCalibration();
        
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.state-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const state = btn.dataset.state;
                if (state && this.timeStream) {
                    this.timeStream.setState(state);
                }
            });
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new TemporalApp();
});

