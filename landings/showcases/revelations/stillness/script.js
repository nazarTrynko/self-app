// STILLNESS - Universe from Nothing
// The experience of creation itself

class StillnessExperience {
    constructor() {
        this.canvas = document.getElementById('void');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 0;
        this.phase = 'void'; // void -> awakening -> universe
        this.interactionCount = 0;
        this.hasStarted = false;
        
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
        
        // Any interaction creates light
        document.addEventListener('mousemove', (e) => this.onInteraction(e.clientX, e.clientY, 'move'));
        document.addEventListener('click', (e) => this.onInteraction(e.clientX, e.clientY, 'click'));
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.onInteraction(touch.clientX, touch.clientY, 'touch');
        });
        
        // Keyboard creates light too
        document.addEventListener('keydown', () => {
            const x = Math.random() * this.width;
            const y = Math.random() * this.height;
            this.onInteraction(x, y, 'key');
        });
    }

    onInteraction(x, y, type) {
        if (!this.hasStarted) {
            this.hasStarted = true;
            document.getElementById('particle-count').classList.add('visible');
        }

        // Create particles based on interaction type
        const count = type === 'click' || type === 'touch' ? 12 : 
                      type === 'key' ? 8 : 2;
        
        for (let i = 0; i < count; i++) {
            this.createParticle(x, y, type);
        }

        this.interactionCount++;
        this.checkPhaseTransition();
    }

    createParticle(x, y, type) {
        const angle = Math.random() * Math.PI * 2;
        const speed = type === 'move' ? 0.2 : 0.5 + Math.random() * 1;
        const size = 1 + Math.random() * 2;
        
        const particle = {
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: size,
            life: 1,
            decay: 0.001 + Math.random() * 0.002,
            hue: 40 + Math.random() * 20, // Warm light
            brightness: 0.8 + Math.random() * 0.2
        };

        this.particles.push(particle);
        this.particleCount++;
        this.updateCounter();
    }

    updateCounter() {
        const countEl = document.querySelector('.particle-count .count');
        if (countEl) {
            countEl.textContent = this.particleCount.toLocaleString();
        }
    }

    checkPhaseTransition() {
        if (this.phase === 'void' && this.particleCount > 50) {
            this.transitionTo('awakening');
        } else if (this.phase === 'awakening' && this.particleCount > 500) {
            this.transitionTo('universe');
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        
        // Hide all phases
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        // Show new phase
        if (newPhase === 'awakening') {
            document.getElementById('phase-birth').classList.add('active');
        } else if (newPhase === 'universe') {
            document.getElementById('phase-universe').classList.add('active');
        }
    }

    animate() {
        // Very subtle fade to create trailing effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            // Update position with slight drift
            p.x += p.vx;
            p.y += p.vy;
            
            // Very gentle gravity toward center (universe forming)
            if (this.phase === 'universe') {
                const dx = this.width / 2 - p.x;
                const dy = this.height / 2 - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 100) {
                    p.vx += (dx / dist) * 0.001;
                    p.vy += (dy / dist) * 0.001;
                }
            }
            
            // Decay
            p.life -= p.decay;
            
            // Remove dead particles
            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            // Draw
            const alpha = p.life * p.brightness;
            const glow = p.size * (1 + p.life);
            
            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                p.x, p.y, 0,
                p.x, p.y, glow * 3
            );
            gradient.addColorStop(0, `hsla(${p.hue}, 30%, 95%, ${alpha})`);
            gradient.addColorStop(0.5, `hsla(${p.hue}, 40%, 80%, ${alpha * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, glow * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 20%, 98%, ${alpha})`;
            this.ctx.fill();
        }

        // Add occasional spontaneous particles in universe phase
        if (this.phase === 'universe' && Math.random() < 0.1) {
            const x = Math.random() * this.width;
            const y = Math.random() * this.height;
            this.createParticle(x, y, 'ambient');
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on load
window.addEventListener('load', () => {
    new StillnessExperience();
});

