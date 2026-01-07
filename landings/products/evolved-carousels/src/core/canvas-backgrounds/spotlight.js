/**
 * Spotlight Canvas Background
 * Dramatic spotlight effect for Imposter Syndrome carousel
 */

class SpotlightCanvas extends BaseCanvasBackground {
    init() {
        this.mouseX = this.width / 2;
        this.mouseY = this.height / 2;
        this.targetX = this.width / 2;
        this.targetY = this.height / 2;
        
        this.spotlightRadius = 150;
        this.softness = 100;
        
        // Ambient particles (dust in light)
        this.particles = [];
        this.maxParticles = 30;
        
        this._generateParticles();
        this._bindMouse();
    }

    _bindMouse() {
        this.canvas.parentElement?.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.targetX = e.clientX - rect.left;
            this.targetY = e.clientY - rect.top;
        });
        
        this.canvas.parentElement?.addEventListener('mouseleave', () => {
            this.targetX = this.width / 2;
            this.targetY = this.height / 2;
        });
    }

    _generateParticles() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                x: randomRange(0, this.width),
                y: randomRange(0, this.height),
                size: randomRange(1, 3),
                speed: randomRange(10, 30),
                angle: randomRange(0, Math.PI * 2),
                wobble: randomRange(0.5, 1.5)
            });
        }
    }

    onResize(width, height) {
        this.targetX = width / 2;
        this.targetY = height / 2;
        this.mouseX = width / 2;
        this.mouseY = height / 2;
        this._generateParticles();
    }

    update(deltaTime, totalTime) {
        // Smooth follow mouse
        this.mouseX += (this.targetX - this.mouseX) * 0.05;
        this.mouseY += (this.targetY - this.mouseY) * 0.05;
        
        // Update particles
        this.particles.forEach(p => {
            // Float upward
            p.y -= p.speed * deltaTime;
            
            // Wobble
            p.x += Math.sin(totalTime * p.wobble + p.angle) * 0.5;
            
            // Reset if off screen
            if (p.y < -10) {
                p.y = this.height + 10;
                p.x = randomRange(0, this.width);
            }
        });
    }

    draw(ctx) {
        // Dark background
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Create spotlight gradient
        const gradient = ctx.createRadialGradient(
            this.mouseX, this.mouseY, 0,
            this.mouseX, this.mouseY, this.spotlightRadius + this.softness
        );
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(0.3, 'rgba(255, 250, 240, 0.08)');
        gradient.addColorStop(0.7, 'rgba(200, 180, 160, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw cone of light (from top)
        ctx.beginPath();
        ctx.moveTo(this.mouseX, -50);
        ctx.lineTo(this.mouseX - this.spotlightRadius * 1.5, this.height + 50);
        ctx.lineTo(this.mouseX + this.spotlightRadius * 1.5, this.height + 50);
        ctx.closePath();
        
        const coneGradient = ctx.createLinearGradient(0, 0, 0, this.height);
        coneGradient.addColorStop(0, 'rgba(255, 250, 240, 0.03)');
        coneGradient.addColorStop(1, 'rgba(255, 250, 240, 0)');
        
        ctx.fillStyle = coneGradient;
        ctx.fill();
        
        // Draw particles (dust in light)
        this.particles.forEach(p => {
            // Check if particle is in spotlight
            const distFromLight = Math.sqrt(
                Math.pow(p.x - this.mouseX, 2) + 
                Math.pow(p.y - this.mouseY, 2)
            );
            
            const inSpotlight = distFromLight < this.spotlightRadius + this.softness;
            const opacity = inSpotlight 
                ? 0.6 * (1 - distFromLight / (this.spotlightRadius + this.softness))
                : 0.05;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 250, 240, ${opacity})`;
            ctx.fill();
        });
        
        // Vignette effect
        const vignette = ctx.createRadialGradient(
            this.width / 2, this.height / 2, this.width * 0.2,
            this.width / 2, this.height / 2, this.width * 0.8
        );
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
        
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, this.width, this.height);
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Pulse the spotlight on slide change
        const originalRadius = this.spotlightRadius;
        this.spotlightRadius *= 1.5;
        
        setTimeout(() => {
            this.spotlightRadius = originalRadius;
        }, 300);
    }
}

