/**
 * Water Ripple Canvas Background
 * Calming water effect for Digital Detox carousel
 */

class WaterCanvas extends BaseCanvasBackground {
    init() {
        this.ripples = [];
        this.maxRipples = 5;
        this.rippleTimer = 0;
        this.rippleInterval = 2;
        
        // Colors - serene blues and greens
        this.waterColor = { r: 200, g: 215, b: 220 }; // Soft blue-gray
        this.rippleColor = { r: 180, g: 200, b: 210 };
        
        // Noise for subtle movement
        this.noise = new SimplexNoise();
        
        // Wave parameters
        this.waves = [];
        for (let i = 0; i < 5; i++) {
            this.waves.push({
                amplitude: randomRange(5, 15),
                frequency: randomRange(0.005, 0.015),
                speed: randomRange(0.3, 0.8),
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    _addRipple(x, y) {
        if (this.ripples.length >= this.maxRipples) {
            this.ripples.shift();
        }
        
        this.ripples.push({
            x: x || randomRange(this.width * 0.2, this.width * 0.8),
            y: y || randomRange(this.height * 0.3, this.height * 0.7),
            radius: 0,
            maxRadius: randomRange(100, 200),
            speed: randomRange(30, 60),
            opacity: 0.5
        });
    }

    onResize(width, height) {
        // Ripples adapt to new size
    }

    update(deltaTime, totalTime) {
        // Auto-generate ripples
        this.rippleTimer += deltaTime;
        if (this.rippleTimer >= this.rippleInterval) {
            this._addRipple();
            this.rippleTimer = 0;
            this.rippleInterval = randomRange(1.5, 3);
        }
        
        // Update ripples
        this.ripples = this.ripples.filter(r => {
            r.radius += r.speed * deltaTime;
            r.opacity = 0.5 * (1 - r.radius / r.maxRadius);
            return r.radius < r.maxRadius;
        });
    }

    draw(ctx) {
        const time = this.time;
        
        // Base gradient - soft blue-gray
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, '#D4DEE4');
        gradient.addColorStop(0.5, '#C8D5DC');
        gradient.addColorStop(1, '#B8C8D0');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw horizontal wave lines
        ctx.strokeStyle = 'rgba(160, 180, 190, 0.3)';
        ctx.lineWidth = 1;
        
        for (let y = 50; y < this.height; y += 30) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            
            for (let x = 0; x <= this.width; x += 5) {
                let waveY = y;
                this.waves.forEach(wave => {
                    waveY += Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude * (y / this.height);
                });
                
                // Add noise for organic feel
                waveY += this.noise.noise2D(x * 0.01, time * 0.2) * 3;
                
                ctx.lineTo(x, waveY);
            }
            
            ctx.stroke();
        }
        
        // Draw ripples
        this.ripples.forEach(r => {
            // Multiple concentric circles for each ripple
            for (let i = 0; i < 3; i++) {
                const radius = r.radius - i * 10;
                if (radius > 0) {
                    const opacity = r.opacity * (1 - i * 0.3);
                    
                    ctx.beginPath();
                    ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 2 - i * 0.5;
                    ctx.stroke();
                }
            }
        });
        
        // Subtle light reflection
        const reflectionGradient = ctx.createRadialGradient(
            this.width * 0.3, this.height * 0.3, 0,
            this.width * 0.3, this.height * 0.3, this.width * 0.4
        );
        reflectionGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        reflectionGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = reflectionGradient;
        ctx.fillRect(0, 0, this.width, this.height);
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Add ripple on slide change
        this._addRipple(this.width / 2, this.height / 2);
    }
}

