// THE EXILE - Shadow Work Integrator
// What did you reject to become who you are?

// Exile analysis data
const exileInsights = {
    wild: {
        cost: "Suppressing your wild side costs you vitality and spontaneity. The energy spent containing impulses could fuel creative expression.",
        gift: "Your exiled wildness carries the gift of authentic expression, courage to break rules that no longer serve, and the freedom to truly live.",
        invitation: "What if you gave your wild side permission to exist—not to act destructively, but simply to be acknowledged? What would that look like?"
    },
    vulnerable: {
        cost: "Hiding vulnerability creates isolation. You become an island, self-sufficient but alone. Connection requires risk.",
        gift: "Your exiled vulnerability carries the gift of authentic connection, the ability to be truly seen, and access to deeper intimacy.",
        invitation: "What if showing vulnerability was not weakness but courage? Who is one person you could let see you, really see you?"
    },
    ambitious: {
        cost: "Dimming your ambitions costs you your full potential. Playing small protects you from failure but also from success.",
        gift: "Your exiled ambition carries the gift of vision, drive, and the courage to matter. It knows what you're really capable of.",
        invitation: "What would you pursue if you knew you couldn't fail? What if you gave yourself permission to want that—out loud?"
    },
    angry: {
        cost: "Swallowing rage doesn't make it disappear—it redirects it inward or leaks out sideways. The energy of anger is energy.",
        gift: "Your exiled anger carries the gift of boundaries, the power to protect what matters, and the fire that says 'this is not acceptable.'",
        invitation: "What if your anger was information, not danger? What is it trying to protect? What boundary needs to be set?"
    }
};

// Exile canvas - shadow/split visualization
class ExileCanvas {
    constructor() {
        this.canvas = document.getElementById('exile-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.shadows = [];
        
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
        this.shadows = [];
        const count = 5;
        
        for (let i = 0; i < count; i++) {
            this.shadows.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 100 + Math.random() * 150,
                phase: Math.random() * Math.PI * 2,
                speed: 0.2 + Math.random() * 0.4
            });
        }
    }

    animate() {
        this.time += 0.005;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.shadows.forEach(s => {
            const pulse = Math.sin(this.time * s.speed + s.phase) * 0.3 + 0.7;
            
            // Shadow shape - vague, obscured
            const gradient = this.ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * pulse);
            gradient.addColorStop(0, `rgba(78, 62, 78, ${0.08 * pulse})`);
            gradient.addColorStop(0.4, `rgba(46, 30, 46, ${0.05 * pulse})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Inner shadow - the hidden self
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size * 0.3 * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(46, 30, 46, ${0.1 * pulse})`;
            this.ctx.fill();
            
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

// Shadow visualization canvas
class ShadowCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.exiles = [];
        this.time = 0;
        this.animating = false;
    }

    setExiles(exiles) {
        this.exiles = exiles;
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
        
        const exileLabels = ['WILD', 'VULNERABLE', 'AMBITIOUS', 'ANGRY'];
        const activeCount = this.exiles.filter(e => e).length;
        
        // Draw center self (light)
        const selfGradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
        selfGradient.addColorStop(0, 'rgba(204, 204, 204, 0.3)');
        selfGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 50, 0, Math.PI * 2);
        this.ctx.fillStyle = selfGradient;
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.7)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('SELF', cx, cy + 4);
        
        // Draw exiled parts in shadow
        this.exiles.forEach((exile, i) => {
            if (!exile) return;
            
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const dist = width * 0.32;
            const pulse = Math.sin(this.time + i * 0.8) * 0.1 + 0.9;
            
            const ex = cx + Math.cos(angle) * dist;
            const ey = cy + Math.sin(angle) * dist;
            
            // Exile shadow
            const exileGradient = this.ctx.createRadialGradient(ex, ey, 0, ex, ey, 40 * pulse);
            exileGradient.addColorStop(0, `rgba(78, 62, 78, ${0.4 * pulse})`);
            exileGradient.addColorStop(0.5, `rgba(46, 30, 46, ${0.2 * pulse})`);
            exileGradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(ex, ey, 40 * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = exileGradient;
            this.ctx.fill();
            
            // Broken connection line
            this.ctx.setLineDash([5, 10]);
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.lineTo(ex, ey);
            this.ctx.strokeStyle = `rgba(78, 62, 78, ${0.2 * pulse})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            // Label
            const labelDist = dist + 55;
            const labelX = cx + Math.cos(angle) * labelDist;
            const labelY = cy + Math.sin(angle) * labelDist;
            
            this.ctx.fillStyle = `rgba(136, 136, 136, ${0.5 * pulse})`;
            this.ctx.font = '9px Outfit';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(exileLabels[i], labelX, labelY);
        });
    }
}

// Exile experience logic
class ExileExperience {
    constructor() {
        this.exiles = {
            wild: '',
            vulnerable: '',
            ambitious: '',
            angry: ''
        };
        this.shadowCanvas = new ShadowCanvas('shadow-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('integrate-btn')?.addEventListener('click', () => this.integrate());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    integrate() {
        this.exiles = {
            wild: document.getElementById('exile-wild').value.trim(),
            vulnerable: document.getElementById('exile-vulnerable').value.trim(),
            ambitious: document.getElementById('exile-ambitious').value.trim(),
            angry: document.getElementById('exile-angry').value.trim()
        };
        
        // Find which exiles are filled
        const activeExiles = Object.entries(this.exiles)
            .filter(([_, value]) => value.length > 10);
        
        if (activeExiles.length < 1) {
            alert('Please describe at least one exiled part.');
            return;
        }
        
        // Find primary exile
        let primaryExile = 'wild';
        let maxLength = 0;
        for (const [key, value] of Object.entries(this.exiles)) {
            if (value.length > maxLength) {
                maxLength = value.length;
                primaryExile = key;
            }
        }
        
        const insight = exileInsights[primaryExile];
        
        // Show results
        document.querySelector('.exile-inventory').style.display = 'none';
        const integrationSection = document.getElementById('exile-integration');
        integrationSection.style.display = 'block';
        
        // Build exile summary
        const exileNames = { wild: 'Wild One', vulnerable: 'Vulnerable One', ambitious: 'Ambitious One', angry: 'Angry One' };
        const exiledList = activeExiles.map(([key, _]) => exileNames[key]).join(', ');
        
        // Update content
        document.getElementById('exiled-summary').textContent = 
            `You've identified exiled parts: ${exiledList}. These are the selves you learned to suppress to survive, succeed, or belong.`;
        
        document.getElementById('exile-cost').textContent = insight.cost;
        document.getElementById('exile-gift').textContent = insight.gift;
        document.getElementById('invitation-prompt').textContent = insight.invitation;
        
        // Start visualization
        this.shadowCanvas.setExiles([
            this.exiles.wild,
            this.exiles.vulnerable,
            this.exiles.ambitious,
            this.exiles.angry
        ]);
        
        // Scroll to results
        integrationSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        document.getElementById('exile-integration').style.display = 'none';
        document.querySelector('.exile-inventory').style.display = 'block';
        document.querySelector('.exile-inventory').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ExileCanvas();
    new ExileExperience();
});

