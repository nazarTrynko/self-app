/**
 * Ember Canvas Background
 * Phoenix-rising ember effect for Burnout Recovery carousel
 */

class EmberCanvas extends BaseCanvasBackground {
    init() {
        this.embers = [];
        this.maxEmbers = 100;
        this.intensity = 0.3; // 0 = cold, 1 = full fire
        this.targetIntensity = 0.3;
        
        // Color gradient from gray to fire
        this.coldColor = { r: 80, g: 75, b: 70 };
        this.emberColor = { r: 255, g: 140, b: 50 };
        this.fireColor = { r: 255, g: 200, b: 80 };
        
        this._generateEmbers();
    }

    _generateEmbers() {
        this.embers = [];
        for (let i = 0; i < this.maxEmbers; i++) {
            this.embers.push(this._createEmber());
        }
    }

    _createEmber() {
        return {
            x: randomRange(0, this.width),
            y: randomRange(this.height * 0.5, this.height + 50),
            vx: randomRange(-10, 10),
            vy: randomRange(-30, -80),
            size: randomRange(2, 6),
            life: randomRange(2, 5),
            maxLife: 5,
            phase: Math.random() * Math.PI * 2,
            flicker: randomRange(5, 15)
        };
    }

    onResize(width, height) {
        this._generateEmbers();
    }

    update(deltaTime, totalTime) {
        // Smooth intensity transition
        this.intensity += (this.targetIntensity - this.intensity) * 0.05;
        
        // Update embers
        this.embers.forEach(ember => {
            // Physics
            ember.vy += randomRange(-5, 5) * deltaTime; // Turbulence
            ember.vx += randomRange(-20, 20) * deltaTime;
            
            ember.x += ember.vx * deltaTime;
            ember.y += ember.vy * deltaTime * this.intensity;
            
            // Age
            ember.life -= deltaTime;
            
            // Reset dead embers
            if (ember.life <= 0 || ember.y < -20) {
                ember.x = randomRange(0, this.width);
                ember.y = this.height + randomRange(0, 50);
                ember.life = randomRange(2, 5);
                ember.vx = randomRange(-10, 10);
                ember.vy = randomRange(-30, -80);
            }
        });
    }

    draw(ctx) {
        const time = this.time;
        const intensity = this.intensity;
        
        // Background gradient - dark to warm
        const bgGradient = ctx.createLinearGradient(0, 0, 0, this.height);
        
        const bgTopR = lerp(20, 40, intensity);
        const bgTopG = lerp(18, 25, intensity);
        const bgTopB = lerp(22, 20, intensity);
        
        const bgBottomR = lerp(30, 80, intensity);
        const bgBottomG = lerp(25, 40, intensity);
        const bgBottomB = lerp(28, 30, intensity);
        
        bgGradient.addColorStop(0, `rgb(${Math.round(bgTopR)}, ${Math.round(bgTopG)}, ${Math.round(bgTopB)})`);
        bgGradient.addColorStop(1, `rgb(${Math.round(bgBottomR)}, ${Math.round(bgBottomG)}, ${Math.round(bgBottomB)})`);
        
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Fire glow at bottom
        if (intensity > 0.3) {
            const glowGradient = ctx.createRadialGradient(
                this.width / 2, this.height + 100, 0,
                this.width / 2, this.height + 100, this.height * 0.8
            );
            
            const glowIntensity = (intensity - 0.3) / 0.7;
            glowGradient.addColorStop(0, `rgba(255, 100, 30, ${0.3 * glowIntensity})`);
            glowGradient.addColorStop(0.5, `rgba(255, 80, 20, ${0.1 * glowIntensity})`);
            glowGradient.addColorStop(1, 'rgba(255, 50, 0, 0)');
            
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, this.width, this.height);
        }
        
        // Draw embers
        this.embers.forEach(ember => {
            const lifeRatio = ember.life / ember.maxLife;
            const flicker = 0.5 + 0.5 * Math.sin(time * ember.flicker + ember.phase);
            
            // Color interpolation based on intensity and life
            const colorT = intensity * lifeRatio;
            const r = lerp(this.coldColor.r, lerp(this.emberColor.r, this.fireColor.r, lifeRatio), colorT);
            const g = lerp(this.coldColor.g, lerp(this.emberColor.g, this.fireColor.g, lifeRatio), colorT);
            const b = lerp(this.coldColor.b, lerp(this.emberColor.b, this.fireColor.b, lifeRatio), colorT);
            
            const size = ember.size * lifeRatio * (0.8 + 0.2 * flicker);
            const opacity = lifeRatio * (0.6 + 0.4 * flicker) * (0.3 + 0.7 * intensity);
            
            // Ember glow
            if (intensity > 0.4) {
                const glowSize = size * 3;
                const glowGradient = ctx.createRadialGradient(
                    ember.x, ember.y, 0,
                    ember.x, ember.y, glowSize
                );
                glowGradient.addColorStop(0, `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity * 0.5})`);
                glowGradient.addColorStop(1, `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0)`);
                
                ctx.fillStyle = glowGradient;
                ctx.fillRect(ember.x - glowSize, ember.y - glowSize, glowSize * 2, glowSize * 2);
            }
            
            // Ember core
            ctx.beginPath();
            ctx.arc(ember.x, ember.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`;
            ctx.fill();
        });
        
        // Smoke effect at top (when intensity is lower)
        if (intensity < 0.7) {
            const smokeGradient = ctx.createLinearGradient(0, 0, 0, this.height * 0.3);
            smokeGradient.addColorStop(0, `rgba(50, 45, 48, ${0.3 * (1 - intensity)})`);
            smokeGradient.addColorStop(1, 'rgba(50, 45, 48, 0)');
            
            ctx.fillStyle = smokeGradient;
            ctx.fillRect(0, 0, this.width, this.height * 0.3);
        }
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Increase intensity through slides (phoenix rising)
        this.targetIntensity = 0.2 + (slideIndex / (totalSlides - 1)) * 0.8;
    }
}

