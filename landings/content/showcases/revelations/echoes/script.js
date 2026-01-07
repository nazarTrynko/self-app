// ECHOES - The Lives You Didn't Live
// Parallel translucent selves that follow your path

class EchoesExperience {
    constructor() {
        this.canvas = document.getElementById('echoes');
        this.ctx = this.canvas.getContext('2d');
        this.echoes = [];
        this.positions = [];
        this.maxPositions = 100;
        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;
        this.phase = 'intro';
        this.echoCount = 1;
        this.lastEchoTime = 0;
        this.hasStarted = false;
        
        this.resize();
        this.bindEvents();
        this.animate();
        
        // Create initial self
        this.createEcho(0, 1);
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.recordPosition();
            
            if (!this.hasStarted) {
                this.hasStarted = true;
                document.getElementById('echo-count').classList.add('visible');
            }
        });

        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.mouseX = touch.clientX;
            this.mouseY = touch.clientY;
            this.recordPosition();
        });

        // Click creates a new echo (a choice was made)
        document.addEventListener('click', () => this.onChoice());
    }

    recordPosition() {
        this.positions.unshift({ x: this.mouseX, y: this.mouseY, time: Date.now() });
        if (this.positions.length > this.maxPositions) {
            this.positions.pop();
        }
    }

    onChoice() {
        // Each click represents a choice, creating a new echo
        const now = Date.now();
        if (now - this.lastEchoTime > 500) {
            this.createEcho(this.echoes.length * 5, 0.8 - this.echoes.length * 0.1);
            this.lastEchoTime = now;
            this.echoCount++;
            this.updateCounter();
            this.checkPhaseTransition();
        }
    }

    createEcho(delay, opacity) {
        const echo = {
            delay: delay,
            opacity: Math.max(0.1, opacity),
            offsetX: (Math.random() - 0.5) * 50,
            offsetY: (Math.random() - 0.5) * 30,
            scale: 0.9 + Math.random() * 0.2,
            divergence: Math.random() * 0.3, // How much they diverge over time
            hue: 210 + Math.random() * 30
        };
        this.echoes.push(echo);
    }

    updateCounter() {
        const countEl = document.querySelector('.echo-count .count');
        if (countEl) {
            countEl.textContent = this.echoCount.toLocaleString();
        }
    }

    checkPhaseTransition() {
        if (this.phase === 'intro' && this.echoCount >= 5) {
            this.transitionTo('echoes');
        } else if (this.phase === 'echoes' && this.echoCount >= 15) {
            this.transitionTo('release');
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'echoes') {
            document.getElementById('phase-echoes').classList.add('active');
        } else if (newPhase === 'release') {
            document.getElementById('phase-release').classList.add('active');
            // Start fading echoes
            setTimeout(() => this.beginRelease(), 5000);
        }
    }

    beginRelease() {
        // Echoes slowly fade and drift away
        this.echoes.forEach((echo, i) => {
            echo.releasing = true;
            echo.releaseDelay = i * 500;
            echo.releaseStart = Date.now();
        });
    }

    getPositionAt(delay) {
        const index = Math.min(Math.floor(delay), this.positions.length - 1);
        if (index < 0 || this.positions.length === 0) {
            return { x: this.mouseX, y: this.mouseY };
        }
        return this.positions[index] || this.positions[this.positions.length - 1];
    }

    drawFigure(x, y, opacity, scale, hue) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.scale(scale, scale);
        
        // Ethereal human figure (abstract)
        const gradient = this.ctx.createRadialGradient(0, -20, 0, 0, 0, 80);
        gradient.addColorStop(0, `hsla(${hue}, 30%, 80%, ${opacity})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 25%, 70%, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        // Head glow
        this.ctx.beginPath();
        this.ctx.arc(0, -60, 25, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${hue}, 20%, 85%, ${opacity * 0.8})`;
        this.ctx.fill();
        
        // Body form
        this.ctx.beginPath();
        this.ctx.moveTo(-20, -40);
        this.ctx.quadraticCurveTo(-25, 0, -15, 50);
        this.ctx.quadraticCurveTo(0, 70, 15, 50);
        this.ctx.quadraticCurveTo(25, 0, 20, -40);
        this.ctx.closePath();
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Outer glow
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, 40, 80, 0, 0, Math.PI * 2);
        const outerGlow = this.ctx.createRadialGradient(0, 0, 20, 0, 0, 80);
        outerGlow.addColorStop(0, `hsla(${hue}, 30%, 80%, ${opacity * 0.3})`);
        outerGlow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = outerGlow;
        this.ctx.fill();
        
        this.ctx.restore();
    }

    animate() {
        // Soft fade
        this.ctx.fillStyle = 'rgba(10, 10, 18, 0.15)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw echoes from oldest to newest (so current self is on top)
        for (let i = this.echoes.length - 1; i >= 0; i--) {
            const echo = this.echoes[i];
            const pos = this.getPositionAt(echo.delay);
            
            let opacity = echo.opacity;
            let x = pos.x + echo.offsetX;
            let y = pos.y + echo.offsetY;
            
            // If releasing, fade out and drift
            if (echo.releasing) {
                const elapsed = Date.now() - echo.releaseStart - echo.releaseDelay;
                if (elapsed > 0) {
                    const progress = Math.min(elapsed / 3000, 1);
                    opacity *= (1 - progress);
                    y -= progress * 100;
                    x += Math.sin(progress * Math.PI) * 50 * (i % 2 ? 1 : -1);
                }
            }
            
            if (opacity > 0.01) {
                this.drawFigure(x, y, opacity, echo.scale, echo.hue);
            }
        }

        // Draw current self (most solid)
        this.drawFigure(this.mouseX, this.mouseY, 0.9, 1, 220);

        // Custom cursor
        this.ctx.beginPath();
        this.ctx.arc(this.mouseX, this.mouseY - 60, 3, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(200, 210, 230, 0.8)';
        this.ctx.fill();

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize
window.addEventListener('load', () => {
    new EchoesExperience();
});

