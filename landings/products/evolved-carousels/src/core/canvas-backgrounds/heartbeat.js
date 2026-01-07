/**
 * Heartbeat Canvas Background
 * Soft particle heartbeat effect for Loving Kindness carousel
 */

class HeartbeatCanvas extends BaseCanvasBackground {
    init() {
        this.particles = [];
        this.heartbeatPhase = 0;
        this.heartbeatSpeed = 0.8; // Beats per second
        this.baseColor = { r: 232, g: 114, b: 92 }; // Coral
        this.secondaryColor = { r: 212, g: 165, b: 116 }; // Gold
        this.maxParticles = 80;
        
        // Heart center
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        
        // Generate initial particles
        this._generateParticles();
    }

    _generateParticles() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this._createParticle());
        }
    }

    _createParticle() {
        const angle = Math.random() * Math.PI * 2;
        const distance = randomRange(50, Math.min(this.width, this.height) * 0.4);
        
        return {
            x: this.centerX + Math.cos(angle) * distance,
            y: this.centerY + Math.sin(angle) * distance,
            baseX: this.centerX + Math.cos(angle) * distance,
            baseY: this.centerY + Math.sin(angle) * distance,
            size: randomRange(2, 6),
            speed: randomRange(0.5, 1.5),
            phase: Math.random() * Math.PI * 2,
            opacity: randomRange(0.2, 0.6),
            distance: distance
        };
    }

    onResize(width, height) {
        this.centerX = width / 2;
        this.centerY = height / 2;
        this._generateParticles();
    }

    update(deltaTime, totalTime) {
        // Update heartbeat phase
        this.heartbeatPhase = totalTime * this.heartbeatSpeed * Math.PI * 2;
        
        // Heartbeat intensity (double-beat pattern)
        const beat1 = Math.max(0, Math.sin(this.heartbeatPhase * 2));
        const beat2 = Math.max(0, Math.sin(this.heartbeatPhase * 2 + 0.5));
        this.heartbeatIntensity = Math.max(beat1 * 0.8, beat2 * 0.5);
        
        // Update particles
        this.particles.forEach(p => {
            // Pulsing movement towards/away from center
            const pulseOffset = this.heartbeatIntensity * 30 * (1 - p.distance / (Math.min(this.width, this.height) * 0.4));
            const angle = Math.atan2(p.baseY - this.centerY, p.baseX - this.centerX);
            
            p.x = p.baseX + Math.cos(angle) * pulseOffset + Math.sin(totalTime * p.speed + p.phase) * 5;
            p.y = p.baseY + Math.sin(angle) * pulseOffset + Math.cos(totalTime * p.speed + p.phase) * 5;
            
            // Gentle floating
            p.y += Math.sin(totalTime * 0.5 + p.phase) * 2;
        });
    }

    draw(ctx) {
        // Background gradient
        const gradient = ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, Math.max(this.width, this.height) * 0.7
        );
        gradient.addColorStop(0, 'rgba(245, 240, 232, 1)');
        gradient.addColorStop(0.5, 'rgba(245, 240, 232, 0.98)');
        gradient.addColorStop(1, 'rgba(237, 232, 224, 1)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw soft glow at center
        const glowSize = 150 + this.heartbeatIntensity * 50;
        const glowGradient = ctx.createRadialGradient(
            this.centerX, this.centerY, 0,
            this.centerX, this.centerY, glowSize
        );
        glowGradient.addColorStop(0, `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${0.1 + this.heartbeatIntensity * 0.1})`);
        glowGradient.addColorStop(1, 'rgba(232, 114, 92, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw particles
        this.particles.forEach(p => {
            const distFromCenter = Math.sqrt(
                Math.pow(p.x - this.centerX, 2) + 
                Math.pow(p.y - this.centerY, 2)
            );
            const normalizedDist = distFromCenter / (Math.min(this.width, this.height) * 0.4);
            
            // Interpolate color based on distance
            const r = lerp(this.baseColor.r, this.secondaryColor.r, normalizedDist);
            const g = lerp(this.baseColor.g, this.secondaryColor.g, normalizedDist);
            const b = lerp(this.baseColor.b, this.secondaryColor.b, normalizedDist);
            
            // Pulse opacity
            const pulseOpacity = p.opacity + this.heartbeatIntensity * 0.2;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${pulseOpacity})`;
            ctx.fill();
        });
        
        // Draw connecting lines between nearby particles
        ctx.strokeStyle = `rgba(232, 114, 92, ${0.03 + this.heartbeatIntensity * 0.02})`;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 80) {
                    ctx.beginPath();
                    ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Increase heartbeat intensity on slide change
        // This creates a momentary pulse effect
    }
}

