// THE MEMENTO - Mortality Visualization
// Death as the ultimate clarifier

class MementoCanvas {
    constructor() {
        this.canvas = document.getElementById('memento-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.grains = [];
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
        this.grains = [];
        const count = 100;
        
        // Hourglass sand effect
        for (let i = 0; i < count; i++) {
            this.grains.push({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 100,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 1 + 0.5,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(8, 6, 4, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw falling grains (sand through hourglass)
        this.grains.forEach(grain => {
            // Narrow in the middle (hourglass waist)
            const centerY = this.canvas.height / 2;
            const distFromCenter = Math.abs(grain.y - centerY);
            const maxSpread = 200;
            const spreadFactor = Math.max(0.1, 1 - distFromCenter / (this.canvas.height / 2));
            
            const drift = Math.sin(this.time + grain.y * 0.01) * 5 * spreadFactor;
            
            this.ctx.beginPath();
            this.ctx.arc(grain.x + drift, grain.y, grain.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(166, 124, 82, ${grain.opacity})`;
            this.ctx.fill();
            
            // Fall
            grain.y += grain.speed;
            
            // Reset at bottom
            if (grain.y > this.canvas.height + 10) {
                grain.y = -10;
                grain.x = this.canvas.width / 2 + (Math.random() - 0.5) * 100;
            }
        });
        
        // Draw faint hourglass shape
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        
        this.ctx.strokeStyle = 'rgba(166, 124, 82, 0.05)';
        this.ctx.lineWidth = 1;
        
        // Top triangle
        this.ctx.beginPath();
        this.ctx.moveTo(cx - 150, 100);
        this.ctx.lineTo(cx + 150, 100);
        this.ctx.lineTo(cx, cy);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Bottom triangle
        this.ctx.beginPath();
        this.ctx.moveTo(cx - 150, this.canvas.height - 100);
        this.ctx.lineTo(cx + 150, this.canvas.height - 100);
        this.ctx.lineTo(cx, cy);
        this.ctx.closePath();
        this.ctx.stroke();
        
        requestAnimationFrame(() => this.animate());
    }
}

class MortalityCalculator {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('calculate-btn').addEventListener('click', () => {
            this.calculate();
        });

        document.getElementById('birth-year').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculate();
            }
        });
    }

    calculate() {
        const birthYear = parseInt(document.getElementById('birth-year').value);
        
        if (!birthYear || birthYear < 1900 || birthYear > 2025) {
            return;
        }

        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        const lifeExpectancy = 80;
        const yearsLeft = Math.max(0, lifeExpectancy - age);
        const weeksLeft = yearsLeft * 52;
        const daysLeft = yearsLeft * 365;
        const percentLived = Math.min(100, (age / lifeExpectancy) * 100);

        // Update display
        document.getElementById('years-lived').textContent = age;
        document.getElementById('years-left').textContent = yearsLeft;
        document.getElementById('weeks-left').textContent = weeksLeft.toLocaleString();
        document.getElementById('days-left').textContent = daysLeft.toLocaleString();
        
        document.getElementById('life-lived').style.width = percentLived + '%';
        
        // Show display
        document.getElementById('mortality-display').style.display = 'block';
        document.getElementById('mortality-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new MementoCanvas();
    new MortalityCalculator();
});


