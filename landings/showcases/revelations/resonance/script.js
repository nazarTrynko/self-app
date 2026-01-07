// RESONANCE - Where Great Ideas Come From
// Collision physics with fusion effects

class ResonanceExperience {
    constructor() {
        this.canvas = document.getElementById('resonance');
        this.ctx = this.canvas.getContext('2d');
        this.thoughts = [];
        this.sparks = [];
        this.collisionCount = 0;
        this.phase = 'intro';
        
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
        
        document.addEventListener('click', (e) => {
            this.createThought(e.clientX, e.clientY);
        });

        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.createThought(touch.clientX, touch.clientY);
        });
    }

    createThought(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 2;
        
        const thought = {
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: 20 + Math.random() * 30,
            hue: 20 + Math.random() * 40, // Warm oranges
            energy: 1,
            age: 0
        };
        
        this.thoughts.push(thought);
        document.getElementById('collision-count').classList.add('visible');
    }

    checkCollisions() {
        for (let i = 0; i < this.thoughts.length; i++) {
            for (let j = i + 1; j < this.thoughts.length; j++) {
                const a = this.thoughts[i];
                const b = this.thoughts[j];
                
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = a.radius + b.radius;
                
                if (dist < minDist && dist > 0) {
                    this.onCollision(a, b, dx, dy, dist);
                }
            }
        }
    }

    onCollision(a, b, dx, dy, dist) {
        // Create fusion sparks
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 5;
            
            this.sparks.push({
                x: midX,
                y: midY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                hue: (a.hue + b.hue) / 2,
                size: 2 + Math.random() * 3
            });
        }
        
        // Bounce physics
        const nx = dx / dist;
        const ny = dy / dist;
        
        const dvx = a.vx - b.vx;
        const dvy = a.vy - b.vy;
        const dvn = dvx * nx + dvy * ny;
        
        if (dvn > 0) return;
        
        const restitution = 0.8;
        const impulse = -(1 + restitution) * dvn / 2;
        
        a.vx += impulse * nx;
        a.vy += impulse * ny;
        b.vx -= impulse * nx;
        b.vy -= impulse * ny;
        
        // Transfer energy
        const energyTransfer = Math.min(a.energy, b.energy) * 0.1;
        a.energy = Math.min(2, a.energy + energyTransfer);
        b.energy = Math.min(2, b.energy + energyTransfer);
        
        // Count collision
        this.collisionCount++;
        this.updateCounter();
        this.checkPhaseTransition();
    }

    updateCounter() {
        const countEl = document.querySelector('.collision-count .count');
        if (countEl) {
            countEl.textContent = this.collisionCount.toLocaleString();
        }
    }

    checkPhaseTransition() {
        if (this.phase === 'intro' && this.collisionCount >= 3) {
            this.transitionTo('collision');
        } else if (this.phase === 'collision' && this.collisionCount >= 20) {
            this.transitionTo('insight');
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'collision') {
            document.getElementById('phase-collision').classList.add('active');
        } else if (newPhase === 'insight') {
            document.getElementById('phase-insight').classList.add('active');
        }
    }

    animate() {
        // Fade trail
        this.ctx.fillStyle = 'rgba(10, 8, 8, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Update and draw thoughts
        for (let i = this.thoughts.length - 1; i >= 0; i--) {
            const t = this.thoughts[i];
            
            // Update position
            t.x += t.vx;
            t.y += t.vy;
            
            // Bounce off walls
            if (t.x - t.radius < 0 || t.x + t.radius > this.width) {
                t.vx *= -0.9;
                t.x = Math.max(t.radius, Math.min(this.width - t.radius, t.x));
            }
            if (t.y - t.radius < 0 || t.y + t.radius > this.height) {
                t.vy *= -0.9;
                t.y = Math.max(t.radius, Math.min(this.height - t.radius, t.y));
            }
            
            // Friction
            t.vx *= 0.999;
            t.vy *= 0.999;
            
            // Age and energy decay
            t.age++;
            t.energy *= 0.999;
            
            // Draw thought
            const glow = t.radius * (1 + t.energy * 0.5);
            
            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                t.x, t.y, 0,
                t.x, t.y, glow
            );
            gradient.addColorStop(0, `hsla(${t.hue}, 80%, 60%, ${t.energy * 0.8})`);
            gradient.addColorStop(0.5, `hsla(${t.hue}, 70%, 50%, ${t.energy * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(t.x, t.y, glow, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Core
            this.ctx.beginPath();
            this.ctx.arc(t.x, t.y, t.radius * 0.3, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${t.hue}, 60%, 90%, ${t.energy})`;
            this.ctx.fill();
        }

        // Check collisions
        this.checkCollisions();

        // Update and draw sparks
        for (let i = this.sparks.length - 1; i >= 0; i--) {
            const s = this.sparks[i];
            
            s.x += s.vx;
            s.y += s.vy;
            s.vx *= 0.98;
            s.vy *= 0.98;
            s.life -= 0.02;
            
            if (s.life <= 0) {
                this.sparks.splice(i, 1);
                continue;
            }
            
            // Draw spark
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${s.life})`;
            this.ctx.fill();
            
            // Spark trail
            this.ctx.beginPath();
            this.ctx.moveTo(s.x, s.y);
            this.ctx.lineTo(s.x - s.vx * 3, s.y - s.vy * 3);
            this.ctx.strokeStyle = `hsla(${s.hue}, 80%, 60%, ${s.life * 0.5})`;
            this.ctx.lineWidth = s.size * s.life * 0.5;
            this.ctx.stroke();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize
window.addEventListener('load', () => {
    new ResonanceExperience();
});

