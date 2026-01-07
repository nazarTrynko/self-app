// RIPPLE - Do Your Actions Matter?
// Infinite zoom water ripple physics

class RippleExperience {
    constructor() {
        this.canvas = document.getElementById('ripple');
        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.zoom = 1;
        this.targetZoom = 1;
        this.maxZoom = 100;
        this.centerX = 0;
        this.centerY = 0;
        this.phase = 'intro';
        this.hasDropped = false;
        
        this.resize();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('click', (e) => {
            if (!this.hasDropped) {
                this.dropPebble(e.clientX, e.clientY);
            }
        });

        document.addEventListener('touchstart', (e) => {
            if (!this.hasDropped) {
                const touch = e.touches[0];
                this.dropPebble(touch.clientX, touch.clientY);
            }
        });

        // Scroll to zoom out
        document.addEventListener('wheel', (e) => {
            if (this.hasDropped) {
                e.preventDefault();
                this.targetZoom = Math.min(this.maxZoom, this.targetZoom + e.deltaY * 0.01);
                this.targetZoom = Math.max(1, this.targetZoom);
                this.updateZoomIndicator();
                this.checkPhaseTransition();
            }
        }, { passive: false });
    }

    dropPebble(x, y) {
        this.hasDropped = true;
        this.centerX = x;
        this.centerY = y;
        
        // Create initial ripple
        this.createRipple(x, y, true);
        
        document.getElementById('zoom-indicator').classList.add('visible');
        this.transitionTo('zoom');
    }

    createRipple(x, y, isPrimary = false) {
        const ripple = {
            x: x,
            y: y,
            radius: 0,
            maxRadius: isPrimary ? 5000 : 2000 + Math.random() * 3000,
            speed: isPrimary ? 2 : 1 + Math.random(),
            opacity: isPrimary ? 1 : 0.5 + Math.random() * 0.5,
            width: isPrimary ? 3 : 1 + Math.random() * 2,
            isPrimary: isPrimary
        };
        
        this.ripples.push(ripple);
        
        // Secondary ripples spawn over time
        if (isPrimary) {
            this.spawnSecondaryRipples(x, y);
        }
    }

    spawnSecondaryRipples(originX, originY) {
        // Spawn ripples that represent cascading effects
        let delay = 0;
        for (let ring = 1; ring <= 20; ring++) {
            const count = 3 + ring * 2;
            const distance = ring * 200;
            
            for (let i = 0; i < count; i++) {
                delay += 50 + Math.random() * 100;
                const angle = (Math.PI * 2 / count) * i + Math.random() * 0.3;
                const x = originX + Math.cos(angle) * distance;
                const y = originY + Math.sin(angle) * distance;
                
                setTimeout(() => {
                    if (this.hasDropped) {
                        this.createRipple(x, y, false);
                    }
                }, delay);
            }
        }
    }

    updateZoomIndicator() {
        const el = document.querySelector('.zoom-level');
        if (el) {
            if (this.zoom < 10) {
                el.textContent = this.zoom.toFixed(1) + 'x';
            } else {
                el.textContent = Math.floor(this.zoom) + 'x';
            }
        }
    }

    checkPhaseTransition() {
        if (this.phase === 'zoom' && this.zoom > 20) {
            this.transitionTo('infinite');
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'zoom') {
            document.getElementById('phase-zoom').classList.add('active');
        } else if (newPhase === 'infinite') {
            document.getElementById('phase-infinite').classList.add('active');
        }
    }

    worldToScreen(x, y) {
        // Transform world coordinates to screen based on zoom
        const dx = x - this.centerX;
        const dy = y - this.centerY;
        return {
            x: this.width / 2 + dx / this.zoom,
            y: this.height / 2 + dy / this.zoom
        };
    }

    animate() {
        // Smooth zoom
        this.zoom += (this.targetZoom - this.zoom) * 0.05;
        
        // Dark water background
        this.ctx.fillStyle = '#050a10';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Subtle water texture
        this.drawWaterTexture();

        // Update and draw ripples
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const r = this.ripples[i];
            
            // Expand
            r.radius += r.speed;
            
            // Fade as it expands
            const progress = r.radius / r.maxRadius;
            const alpha = r.opacity * (1 - progress);
            
            if (alpha < 0.01 || r.radius > r.maxRadius) {
                this.ripples.splice(i, 1);
                continue;
            }
            
            // Transform to screen space
            const screenPos = this.worldToScreen(r.x, r.y);
            const screenRadius = r.radius / this.zoom;
            
            // Only draw if visible
            if (screenRadius > 0.5 && 
                screenPos.x + screenRadius > 0 && 
                screenPos.x - screenRadius < this.width &&
                screenPos.y + screenRadius > 0 && 
                screenPos.y - screenRadius < this.height) {
                
                this.drawRipple(screenPos.x, screenPos.y, screenRadius, alpha, r.width / this.zoom, r.isPrimary);
            }
        }

        // Draw pebble drop point
        if (this.hasDropped) {
            const center = this.worldToScreen(this.centerX, this.centerY);
            const size = Math.max(2, 5 / this.zoom);
            
            this.ctx.beginPath();
            this.ctx.arc(center.x, center.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(74, 158, 255, 0.8)';
            this.ctx.fill();
        }

        // Keep spawning distant ripples as we zoom out
        if (this.hasDropped && this.zoom > 5 && Math.random() < 0.1) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 1000 + this.zoom * 100 + Math.random() * 2000;
            const x = this.centerX + Math.cos(angle) * dist;
            const y = this.centerY + Math.sin(angle) * dist;
            this.createRipple(x, y, false);
        }

        requestAnimationFrame(() => this.animate());
    }

    drawWaterTexture() {
        // Subtle animated water surface
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < 50; i++) {
            const x = (Math.sin(time + i * 0.5) * 0.5 + 0.5) * this.width;
            const y = (Math.cos(time * 0.7 + i * 0.3) * 0.5 + 0.5) * this.height;
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, 1, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(74, 158, 255, 0.05)';
            this.ctx.fill();
        }
    }

    drawRipple(x, y, radius, alpha, width, isPrimary) {
        // Main ripple circle
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = isPrimary 
            ? `rgba(74, 158, 255, ${alpha})`
            : `rgba(100, 160, 220, ${alpha * 0.7})`;
        this.ctx.lineWidth = Math.max(0.5, width);
        this.ctx.stroke();
        
        // Inner glow for primary
        if (isPrimary && radius > 10) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius * 0.95, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(150, 200, 255, ${alpha * 0.3})`;
            this.ctx.lineWidth = Math.max(0.3, width * 0.5);
            this.ctx.stroke();
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    new RippleExperience();
});

