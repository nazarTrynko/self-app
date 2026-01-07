// THE PRICE - Decision Cost Calculator
// Everything costs something. What did you pay for your current life?

// Verdict generator based on costs entered
const verdictTemplates = [
    "You traded certainty for possibility. The price was high, but so was the potential. The question isn't whether it was worth it—but whether you've honored what you paid.",
    "The cost was distributed across time, making it easy to ignore. But every small payment compounds. You've paid more than you realized—and you're still paying.",
    "Some prices are only visible in retrospect. You bought one life at the cost of another. Neither was wrong—but only one was lived.",
    "The ledger doesn't balance the way you expected. What you gained came at costs you didn't negotiate. But awareness of the price is itself valuable—it informs your next purchase.",
    "You've paid in the currencies that don't appear on bank statements: energy, identity, time, possibility. The question now is what this purchase should yield.",
    "The true price was higher than advertised. Most decisions are. But regret isn't required—only consciousness. You know what you paid. Now decide if you'd pay it again."
];

// Price canvas - scale/balance visualization
class PriceCanvas {
    constructor() {
        this.canvas = document.getElementById('price-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.scales = [];
        
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
        this.scales = [];
        const count = 6;
        
        for (let i = 0; i < count; i++) {
            this.scales.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 80 + Math.random() * 120,
                phase: Math.random() * Math.PI * 2,
                tilt: Math.random() * 0.3 - 0.15,
                speed: 0.3 + Math.random() * 0.5
            });
        }
    }

    animate() {
        this.time += 0.008;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.scales.forEach(s => {
            const tilt = Math.sin(this.time * s.speed + s.phase) * 0.2 + s.tilt;
            
            // Draw abstract scale shape
            this.ctx.save();
            this.ctx.translate(s.x, s.y);
            this.ctx.rotate(tilt);
            
            // Central beam
            const gradient = this.ctx.createLinearGradient(-s.size/2, 0, s.size/2, 0);
            gradient.addColorStop(0, 'rgba(74, 58, 46, 0.1)');
            gradient.addColorStop(0.5, 'rgba(90, 74, 62, 0.15)');
            gradient.addColorStop(1, 'rgba(74, 58, 46, 0.1)');
            
            this.ctx.beginPath();
            this.ctx.moveTo(-s.size/2, 0);
            this.ctx.lineTo(s.size/2, 0);
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Fulcrum
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(0, s.size * 0.3);
            this.ctx.strokeStyle = 'rgba(74, 58, 46, 0.1)';
            this.ctx.stroke();
            
            // Left pan
            this.ctx.beginPath();
            this.ctx.arc(-s.size/2, 15, 15, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(74, 58, 46, 0.08)';
            this.ctx.fill();
            
            // Right pan
            this.ctx.beginPath();
            this.ctx.arc(s.size/2, -15, 15, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(90, 74, 62, 0.08)';
            this.ctx.fill();
            
            this.ctx.restore();
            
            // Slow drift
            s.x += Math.sin(this.time * 0.2 + s.phase) * 0.2;
            s.y += Math.cos(this.time * 0.15 + s.phase) * 0.2;
            
            // Wrap
            if (s.x < -s.size) s.x = this.canvas.width + s.size;
            if (s.x > this.canvas.width + s.size) s.x = -s.size;
            if (s.y < -s.size) s.y = this.canvas.height + s.size;
            if (s.y > this.canvas.height + s.size) s.y = -s.size;
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
        this.costs = [];
        this.time = 0;
        this.animating = false;
    }

    setCosts(costs) {
        this.costs = costs;
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
        
        this.time += 0.015;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        const costLabels = ['Time', 'Relationships', 'Identity', 'Potential', 'Energy'];
        const costCount = this.costs.length;
        
        // Draw cost bars radiating from center
        this.costs.forEach((cost, i) => {
            if (!cost || cost.trim() === '') return;
            
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            const barLength = width * 0.35;
            const pulse = Math.sin(this.time + i * 0.5) * 0.1 + 0.9;
            
            const endX = cx + Math.cos(angle) * barLength * pulse;
            const endY = cy + Math.sin(angle) * barLength * pulse;
            
            // Cost bar gradient
            const gradient = this.ctx.createLinearGradient(cx, cy, endX, endY);
            gradient.addColorStop(0, 'rgba(90, 74, 62, 0.1)');
            gradient.addColorStop(1, `rgba(90, 74, 62, ${0.5 * pulse})`);
            
            // Draw bar
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 8;
            this.ctx.lineCap = 'round';
            this.ctx.stroke();
            
            // End node
            this.ctx.beginPath();
            this.ctx.arc(endX, endY, 6, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(90, 74, 62, ${0.7 * pulse})`;
            this.ctx.fill();
            
            // Label
            const labelDist = barLength + 25;
            const labelX = cx + Math.cos(angle) * labelDist;
            const labelY = cy + Math.sin(angle) * labelDist;
            
            this.ctx.fillStyle = `rgba(136, 136, 136, ${0.7 * pulse})`;
            this.ctx.font = '10px Outfit';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(costLabels[i].toUpperCase(), labelX, labelY);
        });
        
        // Center - the decision
        const centerGradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
        centerGradient.addColorStop(0, 'rgba(74, 58, 46, 0.5)');
        centerGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 40, 0, Math.PI * 2);
        this.ctx.fillStyle = centerGradient;
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.6)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('DECISION', cx, cy + 4);
    }
}

// Price calculator logic
class PriceExperience {
    constructor() {
        this.decision = '';
        this.costs = {
            time: '',
            relationships: '',
            identity: '',
            potential: '',
            energy: ''
        };
        this.ledgerCanvas = new LedgerCanvas('ledger-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        const decisionInput = document.getElementById('decision-input');
        const costCategories = document.getElementById('cost-categories');
        
        decisionInput?.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            if (value.length > 5 && costCategories) {
                costCategories.style.display = 'block';
            }
        });
        
        decisionInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && costCategories) {
                costCategories.style.display = 'block';
            }
        });

        document.getElementById('calculate-btn')?.addEventListener('click', () => this.calculate());
        document.getElementById('new-btn')?.addEventListener('click', () => this.reset());
    }

    calculate() {
        this.decision = document.getElementById('decision-input').value.trim();
        this.costs = {
            time: document.getElementById('cost-time').value.trim(),
            relationships: document.getElementById('cost-relationships').value.trim(),
            identity: document.getElementById('cost-identity').value.trim(),
            potential: document.getElementById('cost-potential').value.trim(),
            energy: document.getElementById('cost-energy').value.trim()
        };
        
        // Check if at least some costs are entered
        const filledCosts = Object.values(this.costs).filter(c => c.length > 0);
        if (filledCosts.length < 2) {
            alert('Please fill in at least two cost categories to see the full picture.');
            return;
        }
        
        // Show results
        document.querySelector('.price-calculator').style.display = 'none';
        const ledgerSection = document.getElementById('price-ledger');
        ledgerSection.style.display = 'block';
        
        // Update ledger content
        document.getElementById('ledger-decision').textContent = this.decision;
        
        const costsHtml = Object.entries(this.costs)
            .filter(([_, value]) => value.length > 0)
            .map(([key, value]) => `
                <div class="cost-line">
                    <span class="cost-icon">◇</span>
                    <span class="cost-text"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</span>
                </div>
            `).join('');
        
        document.getElementById('ledger-costs').innerHTML = costsHtml;
        
        // Generate verdict
        const verdict = verdictTemplates[Math.floor(Math.random() * verdictTemplates.length)];
        document.getElementById('ledger-verdict').textContent = verdict;
        
        // Start ledger visualization
        this.ledgerCanvas.setCosts(Object.values(this.costs));
        
        // Scroll to results
        ledgerSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        this.decision = '';
        this.costs = { time: '', relationships: '', identity: '', potential: '', energy: '' };
        
        // Reset form
        document.getElementById('decision-input').value = '';
        document.getElementById('cost-time').value = '';
        document.getElementById('cost-relationships').value = '';
        document.getElementById('cost-identity').value = '';
        document.getElementById('cost-potential').value = '';
        document.getElementById('cost-energy').value = '';
        document.getElementById('cost-categories').style.display = 'none';
        
        // Show calculator
        document.getElementById('price-ledger').style.display = 'none';
        document.querySelector('.price-calculator').style.display = 'block';
        document.querySelector('.price-calculator').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new PriceCanvas();
    new PriceExperience();
});

