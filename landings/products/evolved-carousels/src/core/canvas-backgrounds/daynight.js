/**
 * Day/Night Canvas Background
 * Sun to moon morph animation for Work-Life Balance carousel
 */

class DayNightCanvas extends BaseCanvasBackground {
    init() {
        this.progress = 0.5; // 0 = day, 1 = night
        this.targetProgress = 0.5;
        
        // Stars (visible at night)
        this.stars = [];
        this._generateStars();
        
        // Clouds
        this.clouds = [];
        this._generateClouds();
    }

    _generateStars() {
        this.stars = [];
        for (let i = 0; i < 100; i++) {
            this.stars.push({
                x: randomRange(0, this.width),
                y: randomRange(0, this.height * 0.7),
                size: randomRange(1, 3),
                twinkleSpeed: randomRange(2, 5),
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    _generateClouds() {
        this.clouds = [];
        for (let i = 0; i < 4; i++) {
            this.clouds.push({
                x: randomRange(-100, this.width),
                y: randomRange(this.height * 0.1, this.height * 0.4),
                width: randomRange(100, 200),
                speed: randomRange(5, 15)
            });
        }
    }

    onResize(width, height) {
        this._generateStars();
        this._generateClouds();
    }

    update(deltaTime, totalTime) {
        // Smooth transition
        this.progress += (this.targetProgress - this.progress) * 0.03;
        
        // Update clouds
        this.clouds.forEach(cloud => {
            cloud.x += cloud.speed * deltaTime;
            if (cloud.x > this.width + cloud.width) {
                cloud.x = -cloud.width;
            }
        });
    }

    draw(ctx) {
        const time = this.time;
        const progress = this.progress;
        
        // Sky gradient
        this._drawSky(ctx, progress);
        
        // Stars (fade in at night)
        if (progress > 0.3) {
            this._drawStars(ctx, time, progress);
        }
        
        // Sun/Moon
        this._drawCelestialBody(ctx, time, progress);
        
        // Clouds
        this._drawClouds(ctx, progress);
        
        // Horizon line
        this._drawHorizon(ctx, progress);
        
        // Yin-yang overlay (subtle)
        this._drawYinYangOverlay(ctx, progress);
    }

    _drawSky(ctx, progress) {
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        
        // Day colors
        const dayTop = { r: 135, g: 206, b: 235 }; // Sky blue
        const dayBottom = { r: 255, g: 245, b: 230 }; // Cream
        
        // Night colors
        const nightTop = { r: 15, g: 20, b: 40 }; // Deep blue
        const nightBottom = { r: 40, g: 45, b: 70 }; // Dark blue
        
        const topR = lerp(dayTop.r, nightTop.r, progress);
        const topG = lerp(dayTop.g, nightTop.g, progress);
        const topB = lerp(dayTop.b, nightTop.b, progress);
        
        const bottomR = lerp(dayBottom.r, nightBottom.r, progress);
        const bottomG = lerp(dayBottom.g, nightBottom.g, progress);
        const bottomB = lerp(dayBottom.b, nightBottom.b, progress);
        
        gradient.addColorStop(0, `rgb(${Math.round(topR)}, ${Math.round(topG)}, ${Math.round(topB)})`);
        gradient.addColorStop(1, `rgb(${Math.round(bottomR)}, ${Math.round(bottomG)}, ${Math.round(bottomB)})`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
    }

    _drawStars(ctx, time, progress) {
        const opacity = (progress - 0.3) / 0.7;
        
        this.stars.forEach(star => {
            const twinkle = 0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);
            const alpha = opacity * twinkle * 0.8;
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
        });
    }

    _drawCelestialBody(ctx, time, progress) {
        const centerX = this.width / 2;
        const baseY = this.height * 0.35;
        
        // Sun/Moon arc position
        const arcProgress = progress; // 0 = sun at top, 1 = moon at top
        const y = baseY - Math.sin(arcProgress * Math.PI) * 50;
        
        const radius = 50;
        
        // Sun (visible when progress < 0.7)
        if (progress < 0.7) {
            const sunOpacity = 1 - (progress / 0.7);
            
            // Sun glow
            const glowGradient = ctx.createRadialGradient(
                centerX, y, 0,
                centerX, y, radius * 3
            );
            glowGradient.addColorStop(0, `rgba(255, 220, 100, ${0.4 * sunOpacity})`);
            glowGradient.addColorStop(0.5, `rgba(255, 180, 50, ${0.1 * sunOpacity})`);
            glowGradient.addColorStop(1, 'rgba(255, 150, 0, 0)');
            
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, this.width, this.height);
            
            // Sun disc
            const sunGradient = ctx.createRadialGradient(
                centerX, y, 0,
                centerX, y, radius
            );
            sunGradient.addColorStop(0, `rgba(255, 250, 200, ${sunOpacity})`);
            sunGradient.addColorStop(1, `rgba(255, 200, 100, ${sunOpacity})`);
            
            ctx.beginPath();
            ctx.arc(centerX, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = sunGradient;
            ctx.fill();
        }
        
        // Moon (visible when progress > 0.3)
        if (progress > 0.3) {
            const moonOpacity = (progress - 0.3) / 0.7;
            
            // Moon glow
            const glowGradient = ctx.createRadialGradient(
                centerX, y, 0,
                centerX, y, radius * 2
            );
            glowGradient.addColorStop(0, `rgba(200, 210, 230, ${0.3 * moonOpacity})`);
            glowGradient.addColorStop(1, 'rgba(200, 210, 230, 0)');
            
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, this.width, this.height);
            
            // Moon disc
            ctx.beginPath();
            ctx.arc(centerX, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(240, 240, 250, ${moonOpacity})`;
            ctx.fill();
            
            // Moon craters
            ctx.beginPath();
            ctx.arc(centerX - 15, y - 10, 8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 220, 230, ${moonOpacity * 0.5})`;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(centerX + 10, y + 15, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    _drawClouds(ctx, progress) {
        // Day clouds are white, night clouds are darker
        const cloudR = lerp(255, 80, progress);
        const cloudG = lerp(255, 85, progress);
        const cloudB = lerp(255, 100, progress);
        const cloudOpacity = lerp(0.8, 0.3, progress);
        
        this.clouds.forEach(cloud => {
            ctx.fillStyle = `rgba(${Math.round(cloudR)}, ${Math.round(cloudG)}, ${Math.round(cloudB)}, ${cloudOpacity})`;
            
            // Simple cloud shape
            ctx.beginPath();
            ctx.ellipse(cloud.x, cloud.y, cloud.width * 0.5, 25, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.ellipse(cloud.x - cloud.width * 0.3, cloud.y + 10, cloud.width * 0.3, 20, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.ellipse(cloud.x + cloud.width * 0.3, cloud.y + 5, cloud.width * 0.35, 22, 0, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    _drawHorizon(ctx, progress) {
        const horizonY = this.height * 0.85;
        
        // Ground gradient
        const groundGradient = ctx.createLinearGradient(0, horizonY, 0, this.height);
        
        const dayGround = { r: 100, g: 140, b: 80 }; // Green
        const nightGround = { r: 30, g: 40, b: 50 }; // Dark
        
        const r = lerp(dayGround.r, nightGround.r, progress);
        const g = lerp(dayGround.g, nightGround.g, progress);
        const b = lerp(dayGround.b, nightGround.b, progress);
        
        groundGradient.addColorStop(0, `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`);
        groundGradient.addColorStop(1, `rgb(${Math.round(r * 0.7)}, ${Math.round(g * 0.7)}, ${Math.round(b * 0.7)})`);
        
        ctx.fillStyle = groundGradient;
        ctx.fillRect(0, horizonY, this.width, this.height - horizonY);
    }

    _drawYinYangOverlay(ctx, progress) {
        // Very subtle yin-yang pattern in center
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const radius = 80;
        
        ctx.globalAlpha = 0.03;
        
        // Light half
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, Math.PI / 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        
        // Dark half
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI / 2, -Math.PI / 2);
        ctx.fillStyle = '#000';
        ctx.fill();
        
        ctx.globalAlpha = 1;
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Transition from day to night based on slide
        this.targetProgress = slideIndex / (totalSlides - 1);
    }
}

