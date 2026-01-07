// THE THRESHOLD - Kairos Recognition
// Focus on the present moment - the only place where choice exists

class ThresholdCanvas {
    constructor() {
        this.canvas = document.getElementById('threshold-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.doorways = [];
        
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
        this.doorways = [];
        const count = 8;
        
        for (let i = 0; i < count; i++) {
            this.doorways.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                width: 30 + Math.random() * 40,
                height: 60 + Math.random() * 80,
                opacity: 0.02 + Math.random() * 0.05,
                phase: Math.random() * Math.PI * 2,
                speed: 0.005 + Math.random() * 0.01
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        // Subtle clear
        this.ctx.fillStyle = 'rgba(10, 5, 16, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw liminal doorways
        this.doorways.forEach(d => {
            const pulse = Math.sin(this.time * d.speed + d.phase) * 0.5 + 0.5;
            const opacity = d.opacity * (0.5 + pulse * 0.5);
            
            // Door frame
            this.ctx.strokeStyle = `rgba(155, 89, 182, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(d.x - d.width/2, d.y - d.height/2, d.width, d.height);
            
            // Light from within
            const gradient = this.ctx.createRadialGradient(
                d.x, d.y, 0,
                d.x, d.y, d.height * 0.4
            );
            gradient.addColorStop(0, `rgba(201, 162, 39, ${opacity * 0.5})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.rect(d.x - d.width/2 + 2, d.y - d.height/2 + 2, d.width - 4, d.height - 4);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Slow drift
            d.x += Math.sin(this.time * 0.3 + d.phase) * 0.1;
            d.y += Math.cos(this.time * 0.2 + d.phase) * 0.1;
            
            // Wrap
            if (d.x < -d.width) d.x = this.canvas.width + d.width;
            if (d.x > this.canvas.width + d.width) d.x = -d.width;
            if (d.y < -d.height) d.y = this.canvas.height + d.height;
            if (d.y > this.canvas.height + d.height) d.y = -d.height;
        });
        
        // Draw threshold lines - horizontal bands suggesting liminal space
        for (let i = 0; i < 3; i++) {
            const y = (this.canvas.height / 4) * (i + 1);
            const wave = Math.sin(this.time + i) * 20;
            const opacity = 0.02 + Math.sin(this.time * 0.5 + i) * 0.01;
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, y + wave);
            
            for (let x = 0; x < this.canvas.width; x += 50) {
                const localWave = Math.sin(this.time + x * 0.01 + i) * 10;
                this.ctx.lineTo(x, y + wave + localWave);
            }
            
            this.ctx.strokeStyle = `rgba(155, 89, 182, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Threshold indicator logic
class ThresholdExperience {
    constructor() {
        this.activeIndicators = 0;
        this.totalIndicators = 5;
        
        this.bindEvents();
        this.updateMoment();
    }

    bindEvents() {
        document.querySelectorAll('.indicator-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleIndicator(e));
        });
    }

    toggleIndicator(e) {
        const btn = e.target;
        const indicator = btn.closest('.indicator');
        const isActive = indicator.dataset.active === 'true';
        
        // Toggle state
        indicator.dataset.active = !isActive;
        
        // Count active indicators
        this.activeIndicators = document.querySelectorAll('.indicator[data-active="true"]').length;
        
        this.updateResult();
    }

    updateResult() {
        const percentage = (this.activeIndicators / this.totalIndicators) * 100;
        document.getElementById('meter-fill').style.width = percentage + '%';
        
        let message;
        
        if (this.activeIndicators === 0) {
            message = "Click the indicators that resonate with you.";
        } else if (this.activeIndicators === 1) {
            message = "A signal. Something may be stirring beneath the surface.";
        } else if (this.activeIndicators === 2) {
            message = "Two signs. Pay attention. Something is asking for your awareness.";
        } else if (this.activeIndicators === 3) {
            message = "You are approaching a threshold. This moment may be more significant than it appears.";
        } else if (this.activeIndicators === 4) {
            message = "You are standing at a doorway. The question is: will you step through?";
        } else {
            message = "You are at a crossroads. This is Kairos—the right moment. Don't let it pass unrecognized.";
        }
        
        document.getElementById('result-text').textContent = message;
    }

    updateMoment() {
        // The "NOW" display pulses in sync with the current second
        const update = () => {
            const now = new Date();
            const ms = now.getMilliseconds();
            
            // Create a breathing effect
            const scale = 1 + Math.sin((ms / 1000) * Math.PI * 2) * 0.02;
            const nowElement = document.getElementById('moment-now');
            
            if (nowElement) {
                nowElement.style.transform = `scale(${scale})`;
            }
            
            requestAnimationFrame(update);
        };
        
        update();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ThresholdCanvas();
    new ThresholdExperience();
});


