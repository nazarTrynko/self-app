// THE DISSOLUTION - Strategic Forgetting
// Watch your thoughts dissolve into particles

class DissolutionBackground {
    constructor() {
        this.canvas = document.getElementById('dissolution-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.time = 0;
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        const count = 60;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.3 + 0.1,
                speed: Math.random() * 0.5 + 0.2,
                drift: Math.random() * 2 - 1,
                decay: 0.995 + Math.random() * 0.004
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        // Fade trail
        this.ctx.fillStyle = 'rgba(13, 10, 8, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(139, 115, 85, ${p.opacity})`;
            this.ctx.fill();
            
            // Update - particles drift upward and fade (dissolution effect)
            p.y -= p.speed;
            p.x += p.drift + Math.sin(this.time + p.x * 0.01) * 0.3;
            p.opacity *= p.decay;
            p.size *= 0.999;
            
            // Reset when too faded or off screen
            if (p.opacity < 0.02 || p.y < -20 || p.size < 0.5) {
                p.x = Math.random() * this.canvas.width;
                p.y = this.canvas.height + 20;
                p.opacity = Math.random() * 0.3 + 0.1;
                p.size = Math.random() * 3 + 1;
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Text dissolution effect
class TextDissolution {
    constructor() {
        this.canvas = document.getElementById('text-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.dissolving = false;
        this.text = '';
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.bindEvents();
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.offsetWidth;
        this.canvas.height = 200;
    }

    bindEvents() {
        document.getElementById('dissolve-btn').addEventListener('click', () => {
            this.startDissolution();
        });
    }

    startDissolution() {
        const input = document.getElementById('dissolution-input');
        this.text = input.value.trim();
        
        if (!this.text) return;
        
        // Clear input
        input.value = '';
        
        // Create particles from text
        this.createTextParticles();
        this.dissolving = true;
    }

    createTextParticles() {
        this.particles = [];
        
        // Render text to get pixel data
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = this.canvas.width;
        tempCanvas.height = this.canvas.height;
        
        // Style text
        tempCtx.fillStyle = '#d4c9b8';
        tempCtx.font = '20px "Cormorant Garamond", serif';
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        
        // Word wrap
        const words = this.text.split(' ');
        const lines = [];
        let currentLine = '';
        const maxWidth = this.canvas.width - 40;
        
        words.forEach(word => {
            const testLine = currentLine + (currentLine ? ' ' : '') + word;
            const metrics = tempCtx.measureText(testLine);
            
            if (metrics.width > maxWidth && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        lines.push(currentLine);
        
        // Draw text
        const lineHeight = 30;
        const startY = (this.canvas.height - lines.length * lineHeight) / 2;
        
        lines.forEach((line, i) => {
            tempCtx.fillText(line, this.canvas.width / 2, startY + i * lineHeight);
        });
        
        // Sample pixels
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        const step = 3; // Sample every 3rd pixel
        
        for (let y = 0; y < tempCanvas.height; y += step) {
            for (let x = 0; x < tempCanvas.width; x += step) {
                const i = (y * tempCanvas.width + x) * 4;
                const alpha = data[i + 3];
                
                if (alpha > 50) {
                    this.particles.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        size: Math.random() * 2 + 1,
                        opacity: alpha / 255,
                        vx: 0,
                        vy: 0,
                        phase: Math.random() * Math.PI * 2,
                        dissolved: false,
                        dissolveDelay: Math.random() * 60
                    });
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.dissolving && this.particles.length > 0) {
            let allDissolved = true;
            
            this.particles.forEach((p, index) => {
                if (p.dissolveDelay > 0) {
                    p.dissolveDelay--;
                    allDissolved = false;
                    
                    // Draw solid
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    this.ctx.fillStyle = `rgba(212, 201, 184, ${p.opacity})`;
                    this.ctx.fill();
                    return;
                }
                
                if (p.opacity > 0.01) {
                    allDissolved = false;
                    
                    // Dissolution physics
                    p.vx += (Math.random() - 0.5) * 0.5;
                    p.vy -= Math.random() * 0.3 + 0.1;
                    
                    p.x += p.vx;
                    p.y += p.vy;
                    p.opacity *= 0.97;
                    p.size *= 0.99;
                    
                    // Draw
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    this.ctx.fillStyle = `rgba(139, 115, 85, ${p.opacity})`;
                    this.ctx.fill();
                }
            });
            
            if (allDissolved) {
                this.dissolving = false;
                this.particles = [];
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new DissolutionBackground();
    new TextDissolution();
});


