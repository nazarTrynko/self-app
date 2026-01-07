/**
 * Falling Leaves Canvas Background
 * Autumn leaves with physics for Gratitude Practice carousel
 */

class LeavesCanvas extends BaseCanvasBackground {
    init() {
        this.leaves = [];
        this.maxLeaves = 40;
        
        // Autumn colors
        this.colors = [
            { r: 218, g: 165, b: 32 },   // Goldenrod
            { r: 205, g: 133, b: 63 },   // Peru
            { r: 184, g: 115, b: 51 },   // Copper
            { r: 255, g: 191, b: 0 },    // Amber
            { r: 178, g: 102, b: 51 },   // Brown
            { r: 230, g: 160, b: 50 }    // Orange-gold
        ];
        
        this._generateLeaves();
    }

    _generateLeaves() {
        this.leaves = [];
        for (let i = 0; i < this.maxLeaves; i++) {
            this.leaves.push(this._createLeaf());
        }
    }

    _createLeaf() {
        const color = this.colors[randomInt(0, this.colors.length - 1)];
        return {
            x: randomRange(-50, this.width + 50),
            y: randomRange(-100, -20),
            rotation: randomRange(0, Math.PI * 2),
            rotationSpeed: randomRange(-2, 2),
            size: randomRange(15, 35),
            fallSpeed: randomRange(30, 80),
            swayAmplitude: randomRange(20, 50),
            swaySpeed: randomRange(1, 3),
            swayPhase: Math.random() * Math.PI * 2,
            color: { ...color },
            type: randomInt(0, 2) // Different leaf shapes
        };
    }

    onResize(width, height) {
        this._generateLeaves();
    }

    update(deltaTime, totalTime) {
        this.leaves.forEach(leaf => {
            // Fall
            leaf.y += leaf.fallSpeed * deltaTime;
            
            // Sway
            leaf.x += Math.sin(totalTime * leaf.swaySpeed + leaf.swayPhase) * leaf.swayAmplitude * deltaTime;
            
            // Rotate
            leaf.rotation += leaf.rotationSpeed * deltaTime;
            
            // Reset if below screen
            if (leaf.y > this.height + 50) {
                leaf.y = -50;
                leaf.x = randomRange(-50, this.width + 50);
            }
        });
    }

    draw(ctx) {
        // Warm cream background
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, '#F5EDE0');
        gradient.addColorStop(0.5, '#F8F0E3');
        gradient.addColorStop(1, '#FCF5E8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Soft light overlay
        const lightGradient = ctx.createRadialGradient(
            this.width * 0.7, this.height * 0.2, 0,
            this.width * 0.7, this.height * 0.2, this.width * 0.6
        );
        lightGradient.addColorStop(0, 'rgba(255, 240, 200, 0.3)');
        lightGradient.addColorStop(1, 'rgba(255, 240, 200, 0)');
        
        ctx.fillStyle = lightGradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Sort leaves by y for depth effect
        const sortedLeaves = [...this.leaves].sort((a, b) => a.y - b.y);
        
        // Draw leaves
        sortedLeaves.forEach(leaf => {
            this._drawLeaf(ctx, leaf);
        });
    }

    _drawLeaf(ctx, leaf) {
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        
        const { r, g, b } = leaf.color;
        const size = leaf.size;
        
        // Shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetY = 3;
        
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        
        switch (leaf.type) {
            case 0: // Maple-like
                this._drawMapleLeaf(ctx, size);
                break;
            case 1: // Oval
                this._drawOvalLeaf(ctx, size);
                break;
            case 2: // Heart-shaped
                this._drawHeartLeaf(ctx, size);
                break;
        }
        
        // Stem
        ctx.beginPath();
        ctx.moveTo(0, size * 0.5);
        ctx.lineTo(0, size * 0.8);
        ctx.strokeStyle = `rgb(${r - 30}, ${g - 30}, ${b - 30})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Vein
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.4);
        ctx.lineTo(0, size * 0.4);
        ctx.strokeStyle = `rgba(${r - 20}, ${g - 20}, ${b - 20}, 0.3)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
    }

    _drawMapleLeaf(ctx, size) {
        ctx.beginPath();
        const points = 5;
        for (let i = 0; i < points * 2; i++) {
            const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
            const radius = i % 2 === 0 ? size * 0.5 : size * 0.25;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }

    _drawOvalLeaf(ctx, size) {
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.3, size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    _drawHeartLeaf(ctx, size) {
        ctx.beginPath();
        ctx.moveTo(0, size * 0.4);
        ctx.bezierCurveTo(
            -size * 0.5, size * 0.1,
            -size * 0.5, -size * 0.3,
            0, -size * 0.5
        );
        ctx.bezierCurveTo(
            size * 0.5, -size * 0.3,
            size * 0.5, size * 0.1,
            0, size * 0.4
        );
        ctx.fill();
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Add burst of leaves on slide change
        for (let i = 0; i < 5; i++) {
            if (this.leaves.length < this.maxLeaves + 10) {
                const leaf = this._createLeaf();
                leaf.y = this.height * 0.3;
                leaf.x = this.width / 2 + randomRange(-100, 100);
                leaf.fallSpeed *= 1.5;
                this.leaves.push(leaf);
            }
        }
    }
}

