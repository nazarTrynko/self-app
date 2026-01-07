/**
 * Sunrise Canvas Background
 * Golden hour gradient animation for Morning Rituals carousel
 */

class SunriseCanvas extends BaseCanvasBackground {
    init() {
        this.sunProgress = 0; // 0 = night, 1 = full sunrise
        this.targetProgress = 0.3;
        
        // Color stops for different times
        this.nightColors = [
            { pos: 0, color: [15, 20, 35] },
            { pos: 0.5, color: [25, 35, 55] },
            { pos: 1, color: [35, 45, 65] }
        ];
        
        this.sunriseColors = [
            { pos: 0, color: [255, 200, 150] },
            { pos: 0.3, color: [255, 180, 120] },
            { pos: 0.5, color: [255, 160, 100] },
            { pos: 0.7, color: [200, 150, 120] },
            { pos: 1, color: [150, 180, 200] }
        ];
        
        this.dayColors = [
            { pos: 0, color: [255, 245, 230] },
            { pos: 0.4, color: [255, 235, 210] },
            { pos: 1, color: [240, 235, 225] }
        ];
        
        // Sun rays
        this.rays = [];
        for (let i = 0; i < 12; i++) {
            this.rays.push({
                angle: (i / 12) * Math.PI,
                length: randomRange(100, 300),
                width: randomRange(20, 60),
                speed: randomRange(0.1, 0.3),
                phase: Math.random() * Math.PI * 2
            });
        }
        
        // Clouds
        this.clouds = [];
        this._generateClouds();
    }

    _generateClouds() {
        this.clouds = [];
        for (let i = 0; i < 5; i++) {
            this.clouds.push({
                x: randomRange(-100, this.width + 100),
                y: randomRange(this.height * 0.1, this.height * 0.4),
                width: randomRange(100, 250),
                height: randomRange(30, 60),
                speed: randomRange(5, 15),
                opacity: randomRange(0.3, 0.6)
            });
        }
    }

    _interpolateColor(colors1, colors2, t) {
        // Simple interpolation between two color arrays
        const result = [];
        for (let i = 0; i < colors1.length && i < colors2.length; i++) {
            result.push({
                pos: colors1[i].pos,
                color: [
                    lerp(colors1[i].color[0], colors2[i].color[0], t),
                    lerp(colors1[i].color[1], colors2[i].color[1], t),
                    lerp(colors1[i].color[2], colors2[i].color[2], t)
                ]
            });
        }
        return result;
    }

    onResize(width, height) {
        this._generateClouds();
    }

    update(deltaTime, totalTime) {
        // Smooth transition to target
        this.sunProgress += (this.targetProgress - this.sunProgress) * 0.02;
        
        // Update clouds
        this.clouds.forEach(cloud => {
            cloud.x += cloud.speed * deltaTime;
            if (cloud.x > this.width + cloud.width) {
                cloud.x = -cloud.width;
            }
        });
    }

    draw(ctx) {
        const progress = this.sunProgress;
        const time = this.time;
        
        // Determine current colors based on progress
        let colors;
        if (progress < 0.3) {
            colors = this._interpolateColor(this.nightColors, this.sunriseColors, progress / 0.3);
        } else if (progress < 0.7) {
            colors = this._interpolateColor(this.sunriseColors, this.dayColors, (progress - 0.3) / 0.4);
        } else {
            colors = this.dayColors;
        }
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        colors.forEach(stop => {
            gradient.addColorStop(stop.pos, `rgb(${Math.round(stop.color[0])}, ${Math.round(stop.color[1])}, ${Math.round(stop.color[2])})`);
        });
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw sun
        const sunY = this.height * (1.2 - progress * 0.5);
        const sunX = this.width * 0.7;
        const sunRadius = 60 + progress * 20;
        
        // Sun glow
        const glowGradient = ctx.createRadialGradient(
            sunX, sunY, 0,
            sunX, sunY, sunRadius * 4
        );
        glowGradient.addColorStop(0, `rgba(255, 200, 100, ${0.3 * progress})`);
        glowGradient.addColorStop(0.5, `rgba(255, 180, 80, ${0.1 * progress})`);
        glowGradient.addColorStop(1, 'rgba(255, 150, 50, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Sun rays
        if (progress > 0.2) {
            ctx.save();
            ctx.translate(sunX, sunY);
            
            this.rays.forEach(ray => {
                const rayLength = ray.length * (0.5 + 0.5 * Math.sin(time * ray.speed + ray.phase));
                const opacity = 0.1 * progress * (0.5 + 0.5 * Math.sin(time * ray.speed + ray.phase));
                
                ctx.save();
                ctx.rotate(ray.angle);
                
                const rayGradient = ctx.createLinearGradient(0, 0, rayLength, 0);
                rayGradient.addColorStop(0, `rgba(255, 220, 150, ${opacity})`);
                rayGradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
                
                ctx.fillStyle = rayGradient;
                ctx.beginPath();
                ctx.moveTo(sunRadius, -ray.width / 2);
                ctx.lineTo(sunRadius + rayLength, 0);
                ctx.lineTo(sunRadius, ray.width / 2);
                ctx.closePath();
                ctx.fill();
                
                ctx.restore();
            });
            
            ctx.restore();
        }
        
        // Sun disc
        const sunGradient = ctx.createRadialGradient(
            sunX, sunY, 0,
            sunX, sunY, sunRadius
        );
        sunGradient.addColorStop(0, `rgba(255, 240, 200, ${progress})`);
        sunGradient.addColorStop(0.8, `rgba(255, 200, 100, ${progress})`);
        sunGradient.addColorStop(1, `rgba(255, 180, 80, ${progress * 0.5})`);
        
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = sunGradient;
        ctx.fill();
        
        // Draw clouds
        this.clouds.forEach(cloud => {
            const cloudOpacity = cloud.opacity * (progress > 0.3 ? 1 : progress / 0.3);
            this._drawCloud(ctx, cloud.x, cloud.y, cloud.width, cloud.height, cloudOpacity);
        });
    }

    _drawCloud(ctx, x, y, w, h, opacity) {
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        
        // Draw cloud as overlapping ellipses
        ctx.beginPath();
        ctx.ellipse(x, y, w * 0.3, h * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(x + w * 0.2, y - h * 0.2, w * 0.25, h * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(x + w * 0.4, y, w * 0.35, h * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(x + w * 0.6, y - h * 0.1, w * 0.25, h * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Progress sun based on slide
        this.targetProgress = (slideIndex + 1) / totalSlides;
    }
}

