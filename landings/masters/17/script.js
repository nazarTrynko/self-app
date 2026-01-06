// THE LINEAGE - Ancestral Connection
// DNA-like visualization representing deep time

class LineageCanvas {
    constructor() {
        this.canvas = document.getElementById('lineage-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.strands = [];
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
        this.strands = [];
        const count = 5;
        
        for (let i = 0; i < count; i++) {
            this.strands.push({
                x: (this.canvas.width / (count + 1)) * (i + 1),
                phase: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.01,
                amplitude: 30 + Math.random() * 20,
                opacity: 0.1 + Math.random() * 0.1
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(10, 8, 6, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw DNA-like strands flowing upward
        this.strands.forEach(strand => {
            this.ctx.beginPath();
            
            for (let y = this.canvas.height + 50; y > -50; y -= 5) {
                const wave = Math.sin((y * 0.02) + this.time + strand.phase) * strand.amplitude;
                const x = strand.x + wave;
                
                if (y === this.canvas.height + 50) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.strokeStyle = `rgba(201, 162, 39, ${strand.opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Complementary strand
            this.ctx.beginPath();
            
            for (let y = this.canvas.height + 50; y > -50; y -= 5) {
                const wave = Math.sin((y * 0.02) + this.time + strand.phase + Math.PI) * strand.amplitude;
                const x = strand.x + wave;
                
                if (y === this.canvas.height + 50) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.strokeStyle = `rgba(139, 105, 20, ${strand.opacity * 0.7})`;
            this.ctx.stroke();
            
            // Connection rungs
            for (let y = this.canvas.height; y > 0; y -= 50) {
                const wave1 = Math.sin((y * 0.02) + this.time + strand.phase) * strand.amplitude;
                const wave2 = Math.sin((y * 0.02) + this.time + strand.phase + Math.PI) * strand.amplitude;
                
                this.ctx.beginPath();
                this.ctx.moveTo(strand.x + wave1, y);
                this.ctx.lineTo(strand.x + wave2, y);
                this.ctx.strokeStyle = `rgba(201, 162, 39, ${strand.opacity * 0.3})`;
                this.ctx.stroke();
            }
        });
        
        // Floating ancestor particles
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.sin(this.time * 0.5 + i) * 0.5 + 0.5) * this.canvas.width;
            const y = ((this.time * 20 + i * 100) % (this.canvas.height + 100)) - 50;
            const size = 2 + Math.sin(this.time + i) * 1;
            const opacity = 0.1 + Math.sin(this.time * 2 + i) * 0.05;
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(201, 162, 39, ${opacity})`;
            this.ctx.fill();
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Animation for generation counts
class LineageExperience {
    constructor() {
        this.animateGenerations();
    }

    animateGenerations() {
        const generations = document.querySelectorAll('.generation');
        
        generations.forEach((gen, i) => {
            gen.style.opacity = '0';
            gen.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                gen.style.transition = 'all 0.6s ease';
                gen.style.opacity = '1';
                gen.style.transform = 'translateY(0)';
            }, i * 200);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new LineageCanvas();
    new LineageExperience();
});


