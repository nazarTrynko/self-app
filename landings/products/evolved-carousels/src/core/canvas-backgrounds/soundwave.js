/**
 * Sound Wave Canvas Background
 * Audio wave visualization for Mindful Communication carousel
 */

class SoundwaveCanvas extends BaseCanvasBackground {
    init() {
        this.waves = [];
        this.maxWaves = 5;
        
        // Two wave sources (representing two people)
        this.sourceLeft = { x: this.width * 0.25, y: this.height * 0.5 };
        this.sourceRight = { x: this.width * 0.75, y: this.height * 0.5 };
        
        // Colors
        this.leftColor = { r: 232, g: 114, b: 92 };  // Coral
        this.rightColor = { r: 106, g: 182, b: 176 }; // Teal
        this.connectionColor = { r: 212, g: 165, b: 116 }; // Gold
        
        // Wave particles for flowing lines
        this.flowParticles = [];
        this._generateFlowParticles();
    }

    _generateFlowParticles() {
        this.flowParticles = [];
        for (let i = 0; i < 50; i++) {
            this.flowParticles.push({
                x: randomRange(0, this.width),
                y: randomRange(0, this.height),
                size: randomRange(2, 4),
                speed: randomRange(20, 40),
                side: Math.random() > 0.5 ? 'left' : 'right'
            });
        }
    }

    onResize(width, height) {
        this.sourceLeft = { x: width * 0.25, y: height * 0.5 };
        this.sourceRight = { x: width * 0.75, y: height * 0.5 };
        this._generateFlowParticles();
    }

    update(deltaTime, totalTime) {
        // Update flow particles
        this.flowParticles.forEach(p => {
            if (p.side === 'left') {
                p.x += p.speed * deltaTime;
                if (p.x > this.width * 0.75) {
                    p.x = this.width * 0.25;
                    p.y = randomRange(this.height * 0.3, this.height * 0.7);
                }
            } else {
                p.x -= p.speed * deltaTime;
                if (p.x < this.width * 0.25) {
                    p.x = this.width * 0.75;
                    p.y = randomRange(this.height * 0.3, this.height * 0.7);
                }
            }
            
            // Gentle vertical wave
            p.y += Math.sin(totalTime * 2 + p.x * 0.01) * 0.5;
        });
    }

    draw(ctx) {
        const time = this.time;
        
        // Soft background
        const bgGradient = ctx.createLinearGradient(0, 0, this.width, 0);
        bgGradient.addColorStop(0, '#F8F5F0');
        bgGradient.addColorStop(0.5, '#FAF7F2');
        bgGradient.addColorStop(1, '#F5F2ED');
        
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw wave emanating from left
        this._drawWaves(ctx, this.sourceLeft, this.leftColor, time, 1);
        
        // Draw wave emanating from right
        this._drawWaves(ctx, this.sourceRight, this.rightColor, time, -1);
        
        // Draw connecting wave in center
        this._drawConnectingWave(ctx, time);
        
        // Draw flow particles
        this._drawFlowParticles(ctx);
        
        // Draw source indicators
        this._drawSource(ctx, this.sourceLeft, this.leftColor);
        this._drawSource(ctx, this.sourceRight, this.rightColor);
    }

    _drawWaves(ctx, source, color, time, direction) {
        const waveCount = 4;
        
        for (let w = 0; w < waveCount; w++) {
            const waveOffset = (time * 30 + w * 50) % 200;
            const opacity = 0.3 * (1 - waveOffset / 200);
            
            ctx.beginPath();
            
            for (let y = 0; y <= this.height; y += 5) {
                const distFromCenter = Math.abs(y - source.y);
                const amplitude = 30 * Math.max(0, 1 - distFromCenter / (this.height * 0.4));
                
                const x = source.x + direction * (waveOffset + 
                    amplitude * Math.sin(time * 3 + y * 0.02 + w));
                
                if (y === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    _drawConnectingWave(ctx, time) {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        // Draw horizontal wave in center
        ctx.beginPath();
        
        for (let x = this.sourceLeft.x; x <= this.sourceRight.x; x += 3) {
            const progress = (x - this.sourceLeft.x) / (this.sourceRight.x - this.sourceLeft.x);
            const y = centerY + Math.sin(time * 2 + x * 0.02) * 20 * Math.sin(progress * Math.PI);
            
            if (x === this.sourceLeft.x) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        const gradient = ctx.createLinearGradient(
            this.sourceLeft.x, 0, this.sourceRight.x, 0
        );
        gradient.addColorStop(0, `rgba(${this.leftColor.r}, ${this.leftColor.g}, ${this.leftColor.b}, 0.3)`);
        gradient.addColorStop(0.5, `rgba(${this.connectionColor.r}, ${this.connectionColor.g}, ${this.connectionColor.b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${this.rightColor.r}, ${this.rightColor.g}, ${this.rightColor.b}, 0.3)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    _drawFlowParticles(ctx) {
        this.flowParticles.forEach(p => {
            const progress = (p.x - this.sourceLeft.x) / (this.sourceRight.x - this.sourceLeft.x);
            const clampedProgress = clamp(progress, 0, 1);
            
            // Interpolate color
            const r = lerp(this.leftColor.r, this.rightColor.r, clampedProgress);
            const g = lerp(this.leftColor.g, this.rightColor.g, clampedProgress);
            const b = lerp(this.leftColor.b, this.rightColor.b, clampedProgress);
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.4)`;
            ctx.fill();
        });
    }

    _drawSource(ctx, source, color) {
        // Pulsing circle
        const pulseSize = 30 + Math.sin(this.time * 3) * 5;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
            source.x, source.y, 0,
            source.x, source.y, pulseSize * 2
        );
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(source.x - pulseSize * 2, source.y - pulseSize * 2, pulseSize * 4, pulseSize * 4);
        
        // Inner circle
        ctx.beginPath();
        ctx.arc(source.x, source.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(source.x, source.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`;
        ctx.fill();
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Create ripple effect on slide change
    }
}

