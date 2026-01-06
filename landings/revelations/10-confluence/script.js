// CONFLUENCE - What Happens When Minds Meet?
// Two-stream fluid dynamics creating third color

class ConfluenceExperience {
    constructor() {
        this.canvas = document.getElementById('confluence');
        this.ctx = this.canvas.getContext('2d');
        this.phase = 'intro';
        this.hueA = 270;  // Purple default
        this.hueB = 200;  // Blue default
        this.fusionHue = 235;
        this.streamA = [];
        this.streamB = [];
        this.fusionParticles = [];
        this.flowing = false;
        this.flowProgress = 0;
        
        this.resize();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        // Color selection
        document.querySelectorAll('.color').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const picker = e.target.closest('.color-picker');
                picker.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
                e.target.classList.add('selected');
                
                const hue = parseInt(e.target.dataset.hue);
                const perspective = e.target.closest('.perspective');
                
                if (perspective.classList.contains('left')) {
                    this.hueA = hue;
                } else {
                    this.hueB = hue;
                }
                
                this.calculateFusionHue();
            });
        });

        // Merge button
        document.getElementById('merge-btn').addEventListener('click', () => {
            const inputA = document.getElementById('perspective-a').value.trim();
            const inputB = document.getElementById('perspective-b').value.trim();
            
            if (inputA || inputB) {
                this.startConfluence();
            }
        });

        // Select first colors by default
        document.querySelector('.left .color').classList.add('selected');
        document.querySelector('.right .color').classList.add('selected');
    }

    calculateFusionHue() {
        // Create a new color that's not just averaging
        // but something that emerges from the meeting
        const diff = Math.abs(this.hueA - this.hueB);
        if (diff > 180) {
            this.fusionHue = ((this.hueA + this.hueB + 360) / 2) % 360;
        } else {
            this.fusionHue = (this.hueA + this.hueB) / 2;
        }
        
        // Shift it to create emergence effect
        this.fusionHue = (this.fusionHue + 30) % 360;
    }

    startConfluence() {
        this.flowing = true;
        this.flowProgress = 0;
        this.transitionTo('flowing');
        
        // Initialize streams
        this.initStreams();
        
        // Progress through phases
        setTimeout(() => this.transitionTo('birth'), 4000);
        setTimeout(() => this.transitionTo('truth'), 8000);
    }

    initStreams() {
        // Create particles for stream A (from left)
        for (let i = 0; i < 100; i++) {
            this.streamA.push({
                x: -50,
                y: this.height / 2 + (Math.random() - 0.5) * 200,
                vx: 2 + Math.random() * 2,
                vy: (Math.random() - 0.5) * 0.5,
                size: 3 + Math.random() * 5,
                delay: i * 20,
                merged: false
            });
        }
        
        // Create particles for stream B (from right)
        for (let i = 0; i < 100; i++) {
            this.streamB.push({
                x: this.width + 50,
                y: this.height / 2 + (Math.random() - 0.5) * 200,
                vx: -(2 + Math.random() * 2),
                vy: (Math.random() - 0.5) * 0.5,
                size: 3 + Math.random() * 5,
                delay: i * 20,
                merged: false
            });
        }
    }

    createFusionParticle(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 2;
        
        this.fusionParticles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1,
            size: 4 + Math.random() * 6,
            life: 1,
            hue: this.fusionHue + (Math.random() - 0.5) * 30
        });
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'flowing') {
            document.getElementById('phase-flowing').classList.add('active');
        } else if (newPhase === 'birth') {
            document.getElementById('phase-birth').classList.add('active');
            // Set fusion color on text
            const birthText = document.getElementById('birth-text');
            birthText.style.color = `hsl(${this.fusionHue}, 70%, 70%)`;
        } else if (newPhase === 'truth') {
            document.getElementById('phase-truth').classList.add('active');
        }
    }

    animate() {
        // Background with subtle gradient
        const bgGrad = this.ctx.createRadialGradient(
            this.width / 2, this.height / 2, 0,
            this.width / 2, this.height / 2, this.width / 2
        );
        bgGrad.addColorStop(0, '#100818');
        bgGrad.addColorStop(1, '#0a0810');
        this.ctx.fillStyle = bgGrad;
        this.ctx.fillRect(0, 0, this.width, this.height);

        if (this.flowing) {
            this.flowProgress += 16;
            this.updateStreams();
        }

        // Draw ambient particles
        this.drawAmbient();

        requestAnimationFrame(() => this.animate());
    }

    updateStreams() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const mergeZone = 100;

        // Update stream A
        for (const p of this.streamA) {
            if (this.flowProgress < p.delay) continue;
            
            p.x += p.vx;
            p.y += p.vy;
            
            // Curve toward center
            const dy = centerY - p.y;
            p.vy += dy * 0.001;
            
            // Check if in merge zone
            if (!p.merged && Math.abs(p.x - centerX) < mergeZone) {
                p.merged = true;
                this.createFusionParticle(p.x, p.y);
            }
            
            // Draw
            if (!p.merged) {
                this.drawStreamParticle(p.x, p.y, p.size, this.hueA);
            }
        }

        // Update stream B
        for (const p of this.streamB) {
            if (this.flowProgress < p.delay) continue;
            
            p.x += p.vx;
            p.y += p.vy;
            
            // Curve toward center
            const dy = centerY - p.y;
            p.vy += dy * 0.001;
            
            // Check if in merge zone
            if (!p.merged && Math.abs(p.x - centerX) < mergeZone) {
                p.merged = true;
                this.createFusionParticle(p.x, p.y);
            }
            
            // Draw
            if (!p.merged) {
                this.drawStreamParticle(p.x, p.y, p.size, this.hueB);
            }
        }

        // Update and draw fusion particles
        for (let i = this.fusionParticles.length - 1; i >= 0; i--) {
            const p = this.fusionParticles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.02; // Gentle gravity
            p.life -= 0.005;
            
            if (p.life <= 0) {
                this.fusionParticles.splice(i, 1);
                continue;
            }
            
            this.drawFusionParticle(p);
        }

        // Draw center fusion glow
        this.drawFusionCenter();
    }

    drawStreamParticle(x, y, size, hue) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${hue}, 60%, 50%, 0.4)`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    drawFusionParticle(p) {
        const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.life})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 60%, ${p.life * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    drawFusionCenter() {
        if (!this.flowing) return;
        
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const time = Date.now() * 0.001;
        
        // Pulsing glow at center
        const pulse = 0.5 + Math.sin(time * 2) * 0.3;
        const size = 50 + pulse * 30;
        
        const gradient = this.ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, size * 2
        );
        gradient.addColorStop(0, `hsla(${this.fusionHue}, 80%, 70%, ${0.6 * pulse})`);
        gradient.addColorStop(0.3, `hsla(${this.fusionHue}, 70%, 60%, ${0.3 * pulse})`);
        gradient.addColorStop(0.6, `hsla(${this.fusionHue}, 60%, 50%, ${0.1 * pulse})`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, size * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    drawAmbient() {
        // Subtle ambient particles
        const time = Date.now() * 0.0005;
        
        for (let i = 0; i < 20; i++) {
            const x = (Math.sin(time + i * 0.7) * 0.5 + 0.5) * this.width;
            const y = (Math.cos(time * 0.8 + i * 0.5) * 0.5 + 0.5) * this.height;
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, 1, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(224, 216, 240, 0.1)';
            this.ctx.fill();
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    new ConfluenceExperience();
});

