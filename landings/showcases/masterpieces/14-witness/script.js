// THE WITNESS - Observer Self Developer
// You are not your thoughts - you are what watches them

// Witness insights based on thought patterns
const witnessInsights = {
    planning: "Your mind is busy building futures. But the witness notices: most planned futures never arrive. You are not your plans—you are the one who makes and abandons them.",
    judging: "The judging mind is working hard. But notice: the witness doesn't judge. It simply sees. The judgments are content; the witness is the space they appear in.",
    worrying: "Anxiety has a loud voice. But the witness remains calm behind it. The worried thoughts are weather; the witness is the sky. Storms pass.",
    remembering: "Memory is replaying old films. The witness notices they're just images, not reality. You are not your past—you are the one watching it on repeat.",
    wanting: "Desire is restless. Always reaching. The witness sees this grasping without joining it. You are not your wants—you are the awareness that contains them.",
    resisting: "The mind pushes against what is. But the witness accepts all thoughts equally—even thoughts of resistance. You are the acceptance, not the fight.",
    analyzing: "The analytical mind loves to dissect. But the witness doesn't analyze—it simply witnesses. Understanding is not the goal; awareness is.",
    imagining: "The creative mind builds castles. The witness smiles—it knows they're made of thought, not stone. You are not your fantasies—you are the witness of the imagination.",
    mixed: "Your mind moves through many modes. The witness sees them all without preference. Planning, judging, worrying—all just thoughts. You are the silent observer of this parade."
};

const patternDescriptions = {
    planning: "future-focused, control-seeking",
    judging: "evaluative, critical",
    worrying: "anxious, threat-scanning",
    remembering: "past-oriented, nostalgic",
    wanting: "desiring, seeking",
    resisting: "oppositional, avoidant",
    analyzing: "logical, dissecting",
    imagining: "creative, fantasy-building"
};

// Witness canvas - eye/observer visualization
class WitnessCanvas {
    constructor() {
        this.canvas = document.getElementById('witness-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.observers = [];
        
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
        this.observers = [];
        const count = 4;
        
        for (let i = 0; i < count; i++) {
            this.observers.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 80 + Math.random() * 100,
                phase: Math.random() * Math.PI * 2,
                speed: 0.2 + Math.random() * 0.3
            });
        }
    }

    animate() {
        this.time += 0.005;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.observers.forEach(o => {
            const pulse = Math.sin(this.time * o.speed + o.phase) * 0.2 + 0.8;
            
            // Eye/observer shape
            const gradient = this.ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.size * pulse);
            gradient.addColorStop(0, 'rgba(62, 62, 94, 0.15)');
            gradient.addColorStop(0.3, 'rgba(46, 46, 78, 0.1)');
            gradient.addColorStop(0.7, 'rgba(26, 26, 46, 0.05)');
            gradient.addColorStop(1, 'transparent');
            
            // Outer awareness
            this.ctx.beginPath();
            this.ctx.arc(o.x, o.y, o.size * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Inner focus point
            this.ctx.beginPath();
            this.ctx.arc(o.x, o.y, o.size * 0.15 * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(62, 62, 94, ${0.3 * pulse})`;
            this.ctx.fill();
            
            // Subtle ring
            this.ctx.beginPath();
            this.ctx.arc(o.x, o.y, o.size * 0.6 * pulse, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(46, 46, 78, ${0.1 * pulse})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Slow drift
            o.x += Math.sin(this.time * 0.3 + o.phase) * 0.15;
            o.y += Math.cos(this.time * 0.2 + o.phase) * 0.15;
            
            // Wrap
            if (o.x < -o.size) o.x = this.canvas.width + o.size;
            if (o.x > this.canvas.width + o.size) o.x = -o.size;
            if (o.y < -o.size) o.y = this.canvas.height + o.size;
            if (o.y > this.canvas.height + o.size) o.y = -o.size;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Pattern visualization canvas
class PatternCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.patterns = {};
        this.time = 0;
        this.animating = false;
    }

    setPatterns(patterns) {
        this.patterns = patterns;
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
        
        const labels = Object.keys(this.patterns);
        const total = Object.values(this.patterns).reduce((a, b) => a + b, 0);
        if (total === 0) return;
        
        // Draw thought type distribution as orbital rings
        labels.forEach((label, i) => {
            const count = this.patterns[label];
            if (count === 0) return;
            
            const ratio = count / total;
            const radius = width * 0.15 + (i * width * 0.04);
            const pulse = Math.sin(this.time + i * 0.7) * 0.1 + 0.9;
            
            // Ring
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius * pulse, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(62, 62, 94, ${ratio * 0.5})`;
            this.ctx.lineWidth = 2 + ratio * 8;
            this.ctx.stroke();
            
            // Nodes on ring representing thoughts
            for (let j = 0; j < count; j++) {
                const angle = (j / count) * Math.PI * 2 + this.time * 0.2;
                const nx = cx + Math.cos(angle) * radius * pulse;
                const ny = cy + Math.sin(angle) * radius * pulse;
                
                this.ctx.beginPath();
                this.ctx.arc(nx, ny, 4, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(62, 62, 94, ${0.6 * pulse})`;
                this.ctx.fill();
            }
        });
        
        // Center - the witness
        const witnessGradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
        witnessGradient.addColorStop(0, 'rgba(62, 62, 94, 0.4)');
        witnessGradient.addColorStop(0.5, 'rgba(46, 46, 78, 0.2)');
        witnessGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 50, 0, Math.PI * 2);
        this.ctx.fillStyle = witnessGradient;
        this.ctx.fill();
        
        // Witness label
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.7)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('WITNESS', cx, cy + 4);
    }
}

// Witness experience logic
class WitnessExperience {
    constructor() {
        this.thoughts = [];
        this.patternCounts = {
            planning: 0,
            judging: 0,
            worrying: 0,
            remembering: 0,
            wanting: 0,
            resisting: 0,
            analyzing: 0,
            imagining: 0
        };
        this.patternCanvas = new PatternCanvas('pattern-canvas');
        
        this.loadFromStorage();
        this.bindEvents();
        this.updateUI();
    }

    loadFromStorage() {
        const stored = localStorage.getItem('witness-thoughts');
        if (stored) {
            const data = JSON.parse(stored);
            this.thoughts = data.thoughts || [];
            this.patternCounts = data.patternCounts || this.patternCounts;
        }
    }

    saveToStorage() {
        localStorage.setItem('witness-thoughts', JSON.stringify({
            thoughts: this.thoughts,
            patternCounts: this.patternCounts
        }));
    }

    bindEvents() {
        document.querySelectorAll('.label-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.labelThought(e));
        });

        document.getElementById('analyze-btn')?.addEventListener('click', () => this.analyze());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    labelThought(e) {
        const input = document.getElementById('thought-input');
        const thought = input.value.trim();
        const label = e.target.dataset.label;
        
        if (thought.length < 3) {
            input.focus();
            return;
        }
        
        // Store thought
        this.thoughts.push({ content: thought, label: label, time: Date.now() });
        this.patternCounts[label]++;
        
        // Clear input
        input.value = '';
        
        this.saveToStorage();
        this.updateUI();
        
        // Visual feedback on button
        e.target.classList.add('active');
        setTimeout(() => e.target.classList.remove('active'), 200);
    }

    updateUI() {
        const list = document.getElementById('labeled-thoughts');
        const analyzeBtn = document.getElementById('analyze-btn');
        
        if (!list) return;
        
        // Show last 5 thoughts
        const recentThoughts = this.thoughts.slice(-5).reverse();
        list.innerHTML = recentThoughts.map(t => `
            <div class="labeled-thought">
                <span class="thought-content">"${t.content}"</span>
                <span class="thought-tag">${t.label}</span>
            </div>
        `).join('');
        
        // Show/hide analyze button
        if (analyzeBtn) {
            analyzeBtn.style.display = this.thoughts.length >= 3 ? 'block' : 'none';
        }
    }

    analyze() {
        // Find dominant pattern
        let maxCount = 0;
        let dominantPattern = 'mixed';
        
        for (const [pattern, count] of Object.entries(this.patternCounts)) {
            if (count > maxCount) {
                maxCount = count;
                dominantPattern = pattern;
            }
        }
        
        // Show results
        document.querySelector('.observer-practice').style.display = 'none';
        const analysisSection = document.getElementById('witness-analysis');
        analysisSection.style.display = 'block';
        
        // Build pattern description
        const activePatterns = Object.entries(this.patternCounts)
            .filter(([_, count]) => count > 0)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([pattern, count]) => `${pattern} (${count})`);
        
        const patternDesc = activePatterns.length > 0 
            ? `Your thoughts tend toward: ${activePatterns.join(', ')}. This reveals a mind that is ${patternDescriptions[dominantPattern] || 'diverse in its movements'}.`
            : 'Not enough data to determine patterns yet.';
        
        document.getElementById('pattern-description').textContent = patternDesc;
        document.getElementById('witness-insight').textContent = witnessInsights[dominantPattern] || witnessInsights.mixed;
        
        // Start pattern visualization
        this.patternCanvas.setPatterns(this.patternCounts);
        
        // Scroll to results
        analysisSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        // Don't clear data, just return to practice
        document.getElementById('witness-analysis').style.display = 'none';
        document.querySelector('.observer-practice').style.display = 'block';
        document.querySelector('.observer-practice').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new WitnessCanvas();
    new WitnessExperience();
});

