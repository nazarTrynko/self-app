// EMBER - What You Leave Behind
// Cascading light through generations

class EmberExperience {
    constructor() {
        this.canvas = document.getElementById('ember');
        this.ctx = this.canvas.getContext('2d');
        this.embers = [];
        this.generations = 0;
        this.phase = 'intro';
        this.userWisdom = '';
        this.started = false;
        
        this.resize();
        this.bindEvents();
        this.createInitialEmber();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        const input = document.getElementById('wisdom-input');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                this.userWisdom = input.value.trim();
                this.startJourney();
            }
        });
    }

    createInitialEmber() {
        // Central waiting ember
        this.embers.push({
            x: this.width / 2,
            y: this.height / 2,
            vx: 0,
            vy: 0,
            size: 15,
            brightness: 1,
            generation: 0,
            waiting: true,
            pulsePhase: 0
        });
    }

    startJourney() {
        this.started = true;
        this.transitionTo('passing');
        document.getElementById('generation-count').classList.add('visible');
        
        // Start the cascade
        const firstEmber = this.embers[0];
        firstEmber.waiting = false;
        
        // Begin spreading
        this.spreadEmber(firstEmber);
    }

    spreadEmber(source) {
        if (this.generations > 100) return;
        
        // Create child embers
        const childCount = 2 + Math.floor(Math.random() * 2);
        
        for (let i = 0; i < childCount; i++) {
            const angle = (Math.PI * 2 / childCount) * i + (Math.random() - 0.5) * 0.5;
            const speed = 1 + Math.random() * 1.5;
            
            const child = {
                x: source.x,
                y: source.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 0.5, // Slight upward bias (rising warmth)
                size: source.size * (0.7 + Math.random() * 0.2),
                brightness: source.brightness * 0.9,
                generation: source.generation + 1,
                age: 0,
                waiting: false,
                spreadDelay: 50 + Math.random() * 100,
                hasSpread: false,
                pulsePhase: Math.random() * Math.PI * 2
            };
            
            this.embers.push(child);
            this.generations++;
            this.updateCounter();
        }
        
        this.checkPhaseTransition();
    }

    updateCounter() {
        const countEl = document.querySelector('.generation-count .count');
        if (countEl) {
            countEl.textContent = this.generations.toLocaleString();
        }
    }

    checkPhaseTransition() {
        if (this.phase === 'passing' && this.generations >= 50) {
            this.transitionTo('legacy');
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'passing') {
            document.getElementById('phase-passing').classList.add('active');
        } else if (newPhase === 'legacy') {
            document.getElementById('phase-legacy').classList.add('active');
        }
    }

    animate() {
        // Warm fade
        this.ctx.fillStyle = 'rgba(10, 8, 6, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Update and draw embers
        for (let i = this.embers.length - 1; i >= 0; i--) {
            const e = this.embers[i];
            
            if (e.waiting) {
                // Pulse waiting ember
                e.pulsePhase += 0.03;
                const pulse = 0.7 + Math.sin(e.pulsePhase) * 0.3;
                this.drawEmber(e.x, e.y, e.size, pulse, 0);
                continue;
            }
            
            // Update position
            e.x += e.vx;
            e.y += e.vy;
            
            // Gentle floating
            e.vx += (Math.random() - 0.5) * 0.02;
            e.vy += (Math.random() - 0.5) * 0.02 - 0.01; // Slight rise
            
            // Damping
            e.vx *= 0.99;
            e.vy *= 0.99;
            
            // Age
            e.age++;
            
            // Spread to next generation
            if (!e.hasSpread && e.age > e.spreadDelay && e.brightness > 0.2) {
                e.hasSpread = true;
                this.spreadEmber(e);
            }
            
            // Fade over time
            e.brightness *= 0.998;
            
            // Remove very dim embers
            if (e.brightness < 0.05) {
                this.embers.splice(i, 1);
                continue;
            }
            
            // Draw
            this.drawEmber(e.x, e.y, e.size, e.brightness, e.generation);
        }

        // Keep spawning if we haven't reached the effect
        if (this.started && this.embers.length < 5 && this.generations < 100) {
            // Find brightest ember and spread from it
            const brightest = this.embers.reduce((a, b) => 
                a.brightness > b.brightness ? a : b, this.embers[0]);
            if (brightest && !brightest.hasSpread) {
                brightest.hasSpread = true;
                this.spreadEmber(brightest);
            }
        }

        requestAnimationFrame(() => this.animate());
    }

    drawEmber(x, y, size, brightness, generation) {
        // Hue shifts slightly with each generation (gold to warm white)
        const hue = 35 + generation * 2;
        const saturation = Math.max(30, 80 - generation * 3);
        const lightness = 50 + generation * 2;
        
        // Outer glow
        const glowSize = size * 3;
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${brightness})`);
        gradient.addColorStop(0.3, `hsla(${hue}, ${saturation - 10}%, ${lightness - 10}%, ${brightness * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Core
        this.ctx.beginPath();
        this.ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${hue}, 40%, 95%, ${brightness})`;
        this.ctx.fill();
        
        // Inner glow
        const innerGradient = this.ctx.createRadialGradient(x, y, 0, x, y, size);
        innerGradient.addColorStop(0, `hsla(${hue}, 50%, 90%, ${brightness * 0.8})`);
        innerGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fillStyle = innerGradient;
        this.ctx.fill();
    }
}

// Initialize
window.addEventListener('load', () => {
    new EmberExperience();
});

