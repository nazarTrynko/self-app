// THE HARVEST - Wound to Wisdom Transformer
// Every wound contains a teaching. Mine your pain for gold.

// Harvest canvas - transformation/alchemy visualization
class HarvestCanvas {
    constructor() {
        this.canvas = document.getElementById('harvest-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.particles = [];
        
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
        const count = 20;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 2 + Math.random() * 4,
                phase: Math.random() * Math.PI * 2,
                speed: 0.5 + Math.random() * 1,
                rising: Math.random() > 0.5
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            const pulse = Math.sin(this.time * p.speed + p.phase) * 0.5 + 0.5;
            
            // Gold particles rising/transforming
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
            gradient.addColorStop(0, `rgba(138, 122, 74, ${0.3 * pulse})`);
            gradient.addColorStop(0.5, `rgba(90, 78, 46, ${0.15 * pulse})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * (1 + pulse * 0.5), 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Movement - rising or falling
            if (p.rising) {
                p.y -= 0.2 + pulse * 0.3;
                if (p.y < -p.size) {
                    p.y = this.canvas.height + p.size;
                    p.x = Math.random() * this.canvas.width;
                }
            } else {
                p.y += 0.1;
                if (p.y > this.canvas.height + p.size) {
                    p.y = -p.size;
                    p.x = Math.random() * this.canvas.width;
                }
            }
            
            // Gentle horizontal sway
            p.x += Math.sin(this.time * 0.5 + p.phase) * 0.2;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Transform visualization canvas
class TransformCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.progress = 0;
        this.time = 0;
        this.animating = false;
    }

    start() {
        this.resize();
        this.progress = 0;
        this.animating = true;
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.offsetWidth, 400);
        this.canvas.width = size;
        this.canvas.height = size;
    }

    animate() {
        if (!this.animating) return;
        
        this.time += 0.02;
        this.progress = Math.min(this.progress + 0.01, 1);
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        // Bottom - the wound (dark)
        const woundGradient = this.ctx.createRadialGradient(cx, cy + 50, 0, cx, cy + 50, 80);
        woundGradient.addColorStop(0, `rgba(74, 62, 30, ${0.4 * (1 - this.progress * 0.5)})`);
        woundGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy + 50, 80, 0, Math.PI * 2);
        this.ctx.fillStyle = woundGradient;
        this.ctx.fill();
        
        // Rising particles (transformation in progress)
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const dist = 40 + Math.sin(this.time + i) * 10;
            const riseAmount = this.progress * 100;
            
            const px = cx + Math.cos(angle) * dist;
            const py = cy + 50 - riseAmount + Math.sin(this.time * 2 + i) * 5;
            const size = 3 + Math.sin(this.time + i) * 1;
            
            const particleAlpha = Math.min(this.progress * 2, 1);
            this.ctx.beginPath();
            this.ctx.arc(px, py, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(138, 122, 74, ${0.5 * particleAlpha})`;
            this.ctx.fill();
        }
        
        // Top - the gold (bright)
        if (this.progress > 0.3) {
            const goldAlpha = (this.progress - 0.3) / 0.7;
            const goldGradient = this.ctx.createRadialGradient(cx, cy - 50, 0, cx, cy - 50, 60);
            goldGradient.addColorStop(0, `rgba(138, 122, 74, ${0.6 * goldAlpha})`);
            goldGradient.addColorStop(0.5, `rgba(90, 78, 46, ${0.3 * goldAlpha})`);
            goldGradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(cx, cy - 50, 60, 0, Math.PI * 2);
            this.ctx.fillStyle = goldGradient;
            this.ctx.fill();
        }
        
        // Labels
        this.ctx.fillStyle = 'rgba(136, 136, 136, 0.5)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('WOUND', cx, cy + 90);
        
        if (this.progress > 0.5) {
            this.ctx.fillStyle = `rgba(138, 122, 74, ${(this.progress - 0.5) * 2})`;
            this.ctx.fillText('GOLD', cx, cy - 80);
        }
        
        // Arrow
        if (this.progress > 0.2) {
            const arrowAlpha = Math.min((this.progress - 0.2) / 0.3, 1);
            this.ctx.strokeStyle = `rgba(138, 122, 74, ${0.3 * arrowAlpha})`;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy + 30);
            this.ctx.lineTo(cx, cy - 20);
            this.ctx.stroke();
            
            // Arrowhead
            this.ctx.beginPath();
            this.ctx.moveTo(cx - 5, cy - 15);
            this.ctx.lineTo(cx, cy - 25);
            this.ctx.lineTo(cx + 5, cy - 15);
            this.ctx.stroke();
        }
    }
}

// Harvest experience logic
class HarvestExperience {
    constructor() {
        this.data = {
            wound: '',
            cost: '',
            teaching: '',
            gift: ''
        };
        this.transformCanvas = new TransformCanvas('transform-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.nextStep(e));
        });

        document.getElementById('harvest-btn')?.addEventListener('click', () => this.harvest());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    nextStep(e) {
        const nextStep = parseInt(e.target.dataset.next);
        const currentStep = nextStep - 1;
        
        // Validate current step
        const inputs = ['wound-name', 'wound-cost', 'wound-teaching', 'wound-gift'];
        const input = document.getElementById(inputs[currentStep - 1]);
        if (input && input.value.trim().length < 5) {
            input.focus();
            return;
        }
        
        // Hide current step
        document.querySelector(`[data-step="${currentStep}"]`).classList.add('hidden');
        
        // Show next step
        document.querySelector(`[data-step="${nextStep}"]`).classList.remove('hidden');
    }

    harvest() {
        const giftInput = document.getElementById('wound-gift');
        if (giftInput && giftInput.value.trim().length < 5) {
            giftInput.focus();
            return;
        }
        
        this.data = {
            wound: document.getElementById('wound-name').value.trim(),
            cost: document.getElementById('wound-cost').value.trim(),
            teaching: document.getElementById('wound-teaching').value.trim(),
            gift: document.getElementById('wound-gift').value.trim()
        };
        
        // Generate wisdom statement
        const wisdomStatements = [
            `Through ${this.getWoundSummary()}, I learned ${this.getTeachingSummary()}. Now I carry ${this.getGiftSummary()}.`,
            `What wounded me became my teacher. What broke me became my strength.`,
            `The pain of ${this.getWoundSummary()} forged in me ${this.getGiftSummary()}. This is my harvest.`,
            `I was changed by ${this.getWoundSummary()}. But the change made me ${this.getGiftSummary()}.`
        ];
        
        // Show results
        document.querySelector('.wound-transformer').style.display = 'none';
        const resultSection = document.getElementById('harvest-result');
        resultSection.style.display = 'block';
        
        // Update content
        document.getElementById('result-wound').textContent = this.data.wound + '. ' + this.data.cost;
        document.getElementById('result-gold').textContent = this.data.teaching + ' ' + this.data.gift;
        document.getElementById('wisdom-statement').textContent = wisdomStatements[Math.floor(Math.random() * wisdomStatements.length)];
        
        // Start transformation visualization
        this.transformCanvas.start();
        
        // Scroll to results
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }

    getWoundSummary() {
        const words = this.data.wound.split(' ');
        return words.slice(0, Math.min(5, words.length)).join(' ').toLowerCase();
    }

    getTeachingSummary() {
        const words = this.data.teaching.split(' ');
        return words.slice(0, Math.min(6, words.length)).join(' ').toLowerCase();
    }

    getGiftSummary() {
        const words = this.data.gift.split(' ');
        return words.slice(0, Math.min(5, words.length)).join(' ').toLowerCase();
    }

    reset() {
        // Reset form
        document.getElementById('wound-name').value = '';
        document.getElementById('wound-cost').value = '';
        document.getElementById('wound-teaching').value = '';
        document.getElementById('wound-gift').value = '';
        
        // Reset steps
        document.querySelectorAll('.transform-step').forEach((step, i) => {
            if (i === 0) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
            }
        });
        
        // Show transformer
        document.getElementById('harvest-result').style.display = 'none';
        document.querySelector('.wound-transformer').style.display = 'block';
        document.querySelector('.wound-transformer').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new HarvestCanvas();
    new HarvestExperience();
});

