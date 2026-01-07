/**
 * Matrix Rain Canvas Background
 * Digital rain effect with Ukrainian characters for Programmer's Day
 */

class MatrixCanvas extends BaseCanvasBackground {
    init() {
        // Ukrainian and programming characters
        this.chars = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЮЯ01{}[]<>=+-*/;:()&|!?#@$%^'.split('');
        
        this.columns = [];
        this.fontSize = 14;
        this.columnWidth = this.fontSize * 1.2;
        
        // Colors
        this.primaryColor = { r: 139, g: 92, b: 246 }; // Purple
        this.secondaryColor = { r: 6, g: 182, b: 212 }; // Cyan
        
        this._initColumns();
    }

    _initColumns() {
        const numColumns = Math.ceil(this.width / this.columnWidth);
        this.columns = [];
        
        for (let i = 0; i < numColumns; i++) {
            this.columns.push({
                x: i * this.columnWidth,
                y: randomRange(-this.height, 0),
                speed: randomRange(50, 150),
                chars: this._generateColumnChars(),
                opacity: randomRange(0.3, 0.8),
                hue: Math.random() > 0.5 ? 'purple' : 'cyan'
            });
        }
    }

    _generateColumnChars() {
        const length = randomInt(5, 20);
        const chars = [];
        for (let i = 0; i < length; i++) {
            chars.push({
                char: this.chars[randomInt(0, this.chars.length - 1)],
                changeTimer: randomRange(0, 2)
            });
        }
        return chars;
    }

    onResize(width, height) {
        this._initColumns();
    }

    update(deltaTime, totalTime) {
        this.columns.forEach(col => {
            // Move column down
            col.y += col.speed * deltaTime;
            
            // Reset if off screen
            if (col.y - col.chars.length * this.fontSize > this.height) {
                col.y = -col.chars.length * this.fontSize;
                col.chars = this._generateColumnChars();
                col.speed = randomRange(50, 150);
            }
            
            // Randomly change characters
            col.chars.forEach(c => {
                c.changeTimer -= deltaTime;
                if (c.changeTimer <= 0) {
                    c.char = this.chars[randomInt(0, this.chars.length - 1)];
                    c.changeTimer = randomRange(0.5, 2);
                }
            });
        });
    }

    draw(ctx) {
        // Dark background
        ctx.fillStyle = '#0d1117';
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Add subtle gradient overlay
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, 'rgba(26, 26, 46, 0.5)');
        gradient.addColorStop(1, 'rgba(13, 17, 23, 0.8)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        
        ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
        
        this.columns.forEach(col => {
            col.chars.forEach((c, i) => {
                const y = col.y + i * this.fontSize;
                
                // Skip if off screen
                if (y < -this.fontSize || y > this.height + this.fontSize) return;
                
                // Calculate opacity based on position in column
                const positionRatio = i / col.chars.length;
                let opacity = col.opacity;
                
                // First character is brightest
                if (i === 0) {
                    opacity = 1;
                } else {
                    // Fade out towards the end
                    opacity *= (1 - positionRatio * 0.8);
                }
                
                // Get color
                const color = col.hue === 'purple' ? this.primaryColor : this.secondaryColor;
                
                // Draw glow for first character
                if (i === 0) {
                    ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
                    ctx.shadowBlur = 10;
                } else {
                    ctx.shadowBlur = 0;
                }
                
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
                ctx.fillText(c.char, col.x, y);
            });
        });
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Add scan line effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        for (let y = 0; y < this.height; y += 2) {
            ctx.fillRect(0, y, this.width, 1);
        }
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Speed up rain briefly on slide change
        this.columns.forEach(col => {
            col.speed *= 2;
            setTimeout(() => {
                col.speed /= 2;
            }, 500);
        });
    }
}

