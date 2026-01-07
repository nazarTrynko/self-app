// THE INVERSION - Perspective Transformation
// Mirror and duality visualization

class InversionCanvas {
    constructor() {
        this.canvas = document.getElementById('inversion-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        // Draw mirror line
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, 0);
        this.ctx.lineTo(centerX, this.canvas.height);
        this.ctx.strokeStyle = 'rgba(160, 160, 160, 0.05)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        
        // Draw symmetric particles on both sides
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2 + this.time * 0.3;
            const radius = 100 + Math.sin(this.time + i * 0.5) * 50;
            
            // Left side (original)
            const leftX = centerX - 150 + Math.cos(angle) * radius * 0.3;
            const leftY = centerY + Math.sin(angle) * radius * 0.5;
            
            // Right side (reflection)
            const rightX = centerX + 150 - Math.cos(angle) * radius * 0.3;
            const rightY = centerY + Math.sin(angle) * radius * 0.5;
            
            const size = 2 + Math.sin(this.time * 2 + i) * 1;
            const opacity = 0.1 + Math.sin(this.time + i) * 0.05;
            
            // Original
            this.ctx.beginPath();
            this.ctx.arc(leftX, leftY, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(192, 192, 192, ${opacity})`;
            this.ctx.fill();
            
            // Reflection
            this.ctx.beginPath();
            this.ctx.arc(rightX, rightY, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(160, 160, 160, ${opacity * 0.7})`;
            this.ctx.fill();
            
            // Connection across the mirror
            if (i % 5 === 0) {
                this.ctx.beginPath();
                this.ctx.moveTo(leftX, leftY);
                this.ctx.lineTo(rightX, rightY);
                this.ctx.strokeStyle = `rgba(160, 160, 160, ${opacity * 0.2})`;
                this.ctx.stroke();
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

class InversionPractice {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('invert-btn').addEventListener('click', () => {
            this.showSteps();
        });
    }

    showSteps() {
        const belief = document.getElementById('belief-input').value.trim();
        
        if (!belief) {
            document.getElementById('belief-input').focus();
            return;
        }
        
        const stepsEl = document.getElementById('inversion-steps');
        stepsEl.style.display = 'block';
        stepsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Animate steps appearing
        const steps = stepsEl.querySelectorAll('.step');
        steps.forEach((step, i) => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                step.style.transition = 'all 0.5s ease';
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }, i * 300);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new InversionCanvas();
    new InversionPractice();
});

