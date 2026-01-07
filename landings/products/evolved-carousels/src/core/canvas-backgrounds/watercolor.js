/**
 * Watercolor Canvas Background
 * Fluid organic blobs for Creative Flow carousel
 */

class WatercolorCanvas extends BaseCanvasBackground {
    init() {
        this.noise = new SimplexNoise();
        this.blobs = [];
        this.maxBlobs = 6;
        
        // Watercolor palette
        this.colors = [
            { r: 200, g: 180, b: 220, a: 0.3 },  // Lavender
            { r: 180, g: 200, b: 220, a: 0.25 }, // Light blue
            { r: 220, g: 190, b: 180, a: 0.3 },  // Peach
            { r: 180, g: 210, b: 190, a: 0.25 }, // Sage
            { r: 210, g: 180, b: 200, a: 0.3 }   // Rose
        ];
        
        this._generateBlobs();
    }

    _generateBlobs() {
        this.blobs = [];
        for (let i = 0; i < this.maxBlobs; i++) {
            const color = this.colors[i % this.colors.length];
            this.blobs.push({
                x: randomRange(this.width * 0.2, this.width * 0.8),
                y: randomRange(this.height * 0.2, this.height * 0.8),
                baseRadius: randomRange(80, 200),
                color: { ...color },
                noiseOffset: Math.random() * 1000,
                noiseSpeed: randomRange(0.2, 0.5),
                moveSpeed: randomRange(5, 15),
                movePhase: Math.random() * Math.PI * 2
            });
        }
    }

    onResize(width, height) {
        this._generateBlobs();
    }

    update(deltaTime, totalTime) {
        // Update blob positions with slow movement
        this.blobs.forEach(blob => {
            blob.x += Math.sin(totalTime * 0.1 + blob.movePhase) * blob.moveSpeed * deltaTime;
            blob.y += Math.cos(totalTime * 0.1 + blob.movePhase) * blob.moveSpeed * deltaTime;
            
            // Keep in bounds
            blob.x = clamp(blob.x, blob.baseRadius, this.width - blob.baseRadius);
            blob.y = clamp(blob.y, blob.baseRadius, this.height - blob.baseRadius);
        });
    }

    draw(ctx) {
        const time = this.time;
        
        // Cream background
        ctx.fillStyle = '#FAF7F2';
        ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw blobs with organic edges
        this.blobs.forEach(blob => {
            this._drawOrganicBlob(ctx, blob, time);
        });
        
        // Add paper texture effect
        this._addPaperTexture(ctx);
    }

    _drawOrganicBlob(ctx, blob, time) {
        const points = 64;
        const noiseScale = 0.01;
        
        ctx.beginPath();
        
        for (let i = 0; i <= points; i++) {
            const angle = (i / points) * Math.PI * 2;
            
            // Calculate radius with noise
            const noiseX = Math.cos(angle) * noiseScale + blob.noiseOffset;
            const noiseY = Math.sin(angle) * noiseScale + time * blob.noiseSpeed;
            const noiseValue = this.noise.noise2D(noiseX * 50, noiseY * 50);
            
            const radius = blob.baseRadius * (0.7 + 0.3 * noiseValue);
            
            const x = blob.x + Math.cos(angle) * radius;
            const y = blob.y + Math.sin(angle) * radius;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.closePath();
        
        // Create gradient fill
        const gradient = ctx.createRadialGradient(
            blob.x, blob.y, 0,
            blob.x, blob.y, blob.baseRadius * 1.2
        );
        
        const { r, g, b, a } = blob.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${a * 0.7})`);
        gradient.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${a * 0.3})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add edge bleed effect
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a * 0.5})`;
        ctx.lineWidth = 3;
        ctx.filter = 'blur(2px)';
        ctx.stroke();
        ctx.filter = 'none';
    }

    _addPaperTexture(ctx) {
        // Subtle grain
        const imageData = ctx.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * 8;
            data[i] = clamp(data[i] + noise, 0, 255);
            data[i + 1] = clamp(data[i + 1] + noise, 0, 255);
            data[i + 2] = clamp(data[i + 2] + noise, 0, 255);
        }
        
        ctx.putImageData(imageData, 0, 0);
    }

    handleSlideChange(slideIndex, totalSlides) {
        // Shift colors slightly on slide change
        this.blobs.forEach((blob, i) => {
            const colorIndex = (i + slideIndex) % this.colors.length;
            blob.color = { ...this.colors[colorIndex] };
        });
    }
}

