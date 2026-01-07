// THE DEBT - Life Balance Sheet Builder
// What do you owe yourself? What debts are you carrying?

// Debt insights
const debtInsights = {
    self: "The debt to yourself is often the heaviest because it's the most invisible. Each broken promise erodes self-trust. But self-trust can be rebuilt—one kept promise at a time.",
    others: "Relationship debts accumulate in silence. The words unsaid become walls. But it's never too late to reach out. One message can begin to balance years of distance.",
    potential: "The debt to potential is the ghost of the person you could be. It doesn't haunt to punish—it haunts to remind. The path is still there if you're willing to take the first step.",
    health: "The body keeps perfect records. Every hour of sleep lost, every stress absorbed—it's all on the ledger. But the body is forgiving if you begin to pay it back.",
    mixed: "You carry debts across multiple dimensions of life. This is normal—we're all in debt to something. The question isn't whether you owe, but what you'll choose to pay first."
};

const repaymentPrompts = {
    self: "What's one small promise you could make to yourself today—and keep? Something tiny. Something you'll definitely do. Start there.",
    others: "Who's one person you've been meaning to contact? What's stopping you from sending a simple message right now?",
    potential: "What's one skill or dream you've been putting off? What's the smallest possible action you could take toward it this week?",
    health: "What's one thing your body has been asking for? An extra hour of sleep? A walk? Water? Give it one thing today."
};

// Debt canvas - weight/gravity visualization
class DebtCanvas {
    constructor() {
        this.canvas = document.getElementById('debt-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.weights = [];
        
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
        this.weights = [];
        const count = 5;
        
        for (let i = 0; i < count; i++) {
            this.weights.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 60 + Math.random() * 100,
                phase: Math.random() * Math.PI * 2,
                speed: 0.2 + Math.random() * 0.4,
                sinkSpeed: 0.1 + Math.random() * 0.2
            });
        }
    }

    animate() {
        this.time += 0.006;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.weights.forEach(w => {
            const pulse = Math.sin(this.time * w.speed + w.phase) * 0.2 + 0.8;
            
            // Weight - sinking circles
            const gradient = this.ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.size * pulse);
            gradient.addColorStop(0, 'rgba(78, 62, 62, 0.1)');
            gradient.addColorStop(0.5, 'rgba(62, 46, 46, 0.08)');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(w.x, w.y, w.size * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Weight lines (like pressure/gravity)
            for (let i = 0; i < 3; i++) {
                const lineY = w.y + w.size * pulse * 0.3 + i * 10;
                this.ctx.beginPath();
                this.ctx.moveTo(w.x - w.size * 0.3, lineY);
                this.ctx.lineTo(w.x + w.size * 0.3, lineY);
                this.ctx.strokeStyle = `rgba(62, 46, 46, ${0.1 * (1 - i * 0.3) * pulse})`;
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
            }
            
            // Slow sink effect
            w.y += Math.sin(this.time * w.sinkSpeed) * 0.2;
            w.x += Math.cos(this.time * 0.1 + w.phase) * 0.1;
            
            // Wrap
            if (w.y > this.canvas.height + w.size) w.y = -w.size;
            if (w.x < -w.size) w.x = this.canvas.width + w.size;
            if (w.x > this.canvas.width + w.size) w.x = -w.size;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Ledger visualization canvas
class LedgerCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.debts = {};
        this.time = 0;
        this.animating = false;
    }

    setDebts(debts) {
        this.debts = debts;
        this.resize();
        this.animating = true;
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.offsetWidth, 500);
        this.canvas.width = size;
        this.canvas.height = size;
    }

    animate() {
        if (!this.animating) return;
        
        this.time += 0.012;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        const debtTypes = ['self', 'others', 'potential', 'health'];
        const labels = ['Self', 'Others', 'Potential', 'Health'];
        const total = Object.values(this.debts).reduce((a, b) => a + b, 0);
        if (total === 0) return;
        
        // Draw debt weights descending
        debtTypes.forEach((type, i) => {
            const weight = this.debts[type] || 0;
            if (weight === 0) return;
            
            const ratio = weight / 100; // Normalize to 0-1
            const baseY = height * 0.2 + i * (height * 0.18);
            const barWidth = width * 0.6 * ratio;
            const pulse = Math.sin(this.time + i * 0.8) * 0.05 + 0.95;
            
            // Weight bar
            const gradient = this.ctx.createLinearGradient(cx - barWidth/2, baseY, cx + barWidth/2, baseY);
            gradient.addColorStop(0, `rgba(78, 62, 62, ${0.3 * pulse})`);
            gradient.addColorStop(0.5, `rgba(62, 46, 46, ${0.5 * pulse})`);
            gradient.addColorStop(1, `rgba(78, 62, 62, ${0.3 * pulse})`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(cx - barWidth/2 * pulse, baseY - 10, barWidth * pulse, 20);
            
            // Label
            this.ctx.fillStyle = 'rgba(136, 136, 136, 0.7)';
            this.ctx.font = '10px Outfit';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(labels[i].toUpperCase(), width * 0.1, baseY + 4);
            
            // Weight value
            this.ctx.textAlign = 'right';
            this.ctx.fillText(Math.round(weight) + '%', width * 0.9, baseY + 4);
        });
        
        // Total load at bottom
        const totalWeight = Math.round(total / 4);
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.5)';
        this.ctx.font = '12px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`TOTAL LOAD: ${totalWeight}%`, cx, height * 0.92);
    }
}

// Debt experience logic
class DebtExperience {
    constructor() {
        this.debts = {
            self: '',
            others: '',
            potential: '',
            health: ''
        };
        this.ledgerCanvas = new LedgerCanvas('ledger-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('calculate-btn')?.addEventListener('click', () => this.calculate());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    calculateDebtWeight(text) {
        if (!text || text.trim() === '') return 0;
        // Simple heuristic: longer, more detailed = heavier debt
        const words = text.trim().split(/\s+/).length;
        const sentences = text.split(/[.!?]+/).length;
        return Math.min(100, words * 3 + sentences * 10);
    }

    calculate() {
        this.debts = {
            self: document.getElementById('self-debt').value.trim(),
            others: document.getElementById('others-debt').value.trim(),
            potential: document.getElementById('potential-debt').value.trim(),
            health: document.getElementById('health-debt').value.trim()
        };
        
        // Calculate weights
        const weights = {
            self: this.calculateDebtWeight(this.debts.self),
            others: this.calculateDebtWeight(this.debts.others),
            potential: this.calculateDebtWeight(this.debts.potential),
            health: this.calculateDebtWeight(this.debts.health)
        };
        
        // Find heaviest debt
        let maxWeight = 0;
        let heaviestDebt = 'self';
        for (const [type, weight] of Object.entries(weights)) {
            if (weight > maxWeight) {
                maxWeight = weight;
                heaviestDebt = type;
            }
        }
        
        // Count active debts
        const activeDebts = Object.values(this.debts).filter(d => d.length > 0).length;
        if (activeDebts < 1) {
            alert('Please fill in at least one debt category.');
            return;
        }
        
        // Show results
        document.querySelector('.debt-inventory').style.display = 'none';
        const ledgerSection = document.getElementById('debt-ledger');
        ledgerSection.style.display = 'block';
        
        // Calculate total load
        const totalLoad = Math.round(Object.values(weights).reduce((a, b) => a + b, 0) / 4);
        
        // Update content
        document.getElementById('total-load').textContent = 
            totalLoad > 60 ? `Heavy (${totalLoad}% capacity). The weight is significant. Time to start paying down.` :
            totalLoad > 30 ? `Moderate (${totalLoad}% capacity). Manageable, but don't let it accumulate further.` :
            `Light (${totalLoad}% capacity). You're carrying less than most. Stay aware.`;
        
        const debtLabels = { self: 'Self', others: 'Others', potential: 'Potential', health: 'Health' };
        document.getElementById('priority-debt').textContent = 
            `Your heaviest debt is to ${debtLabels[heaviestDebt]}. This is where the most pressure lives. Consider prioritizing payments here.`;
        
        document.getElementById('debt-insight').textContent = 
            activeDebts > 2 ? debtInsights.mixed : debtInsights[heaviestDebt];
        
        document.getElementById('repayment-prompt').textContent = repaymentPrompts[heaviestDebt];
        
        // Start visualization
        this.ledgerCanvas.setDebts(weights);
        
        // Scroll to results
        ledgerSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        document.getElementById('debt-ledger').style.display = 'none';
        document.querySelector('.debt-inventory').style.display = 'block';
        document.querySelector('.debt-inventory').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new DebtCanvas();
    new DebtExperience();
});

