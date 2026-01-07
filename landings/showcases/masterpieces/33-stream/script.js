// CONSCIOUSNESS STREAM - Awareness Flow Visualization
// Emergent Intelligence Category - Showcase 33

class AwarenessBackground {
    constructor() {
        this.canvas = document.getElementById('awareness-canvas');
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
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 1 + Math.random() * 2,
                speed: 0.5 + Math.random() * 1,
                phase: Math.random() * Math.PI * 2,
                hue: 250 + Math.random() * 40
            });
        }
    }

    update() {
        this.time += 0.016;
        this.particles.forEach(p => {
            p.x -= p.speed;
            p.y += Math.sin(this.time + p.phase) * 0.5;
            if (p.x < 0) {
                p.x = this.canvas.width;
                p.y = Math.random() * this.canvas.height;
            }
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 10, 24, 0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
            glow.addColorStop(0, `hsla(${p.hue}, 70%, 60%, 0.4)`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Consciousness Stream Visualization
class ConsciousnessStream {
    constructor() {
        this.canvas = document.getElementById('stream-viz-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.thoughts = [];
        this.streamParticles = [];
        this.time = 0;
        this.depth = 0.5;
        
        this.categoryColors = {
            work: '#3b82f6',
            memory: '#a855f7',
            future: '#06b6d4',
            emotion: '#f43f5e',
            body: '#f97316',
            default: '#8b5cf6'
        };
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    init() {
        this.streamParticles = [];
        for (let i = 0; i < 150; i++) {
            this.streamParticles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height / 2 + (Math.random() - 0.5) * 100,
                speed: 0.5 + Math.random() * 1.5,
                radius: 1 + Math.random() * 2,
                phase: Math.random() * Math.PI * 2,
                amplitude: 30 + Math.random() * 50,
                hue: 250 + Math.random() * 60
            });
        }
    }

    addThought(text, category = 'default') {
        const color = this.categoryColors[category] || this.categoryColors.default;
        
        this.thoughts.push({
            text: text.slice(0, 30),
            x: this.canvas.width + 50,
            y: this.canvas.height / 2 + (Math.random() - 0.5) * 80,
            speed: 0.8 + Math.random() * 0.5,
            opacity: 1,
            color,
            category,
            size: 14 + Math.random() * 4
        });
        
        // Increase depth temporarily
        this.depth = Math.min(1, this.depth + 0.1);
    }

    categorize(text) {
        const lower = text.toLowerCase();
        if (/work|task|meeting|project|deadline|email/.test(lower)) return 'work';
        if (/remember|used to|ago|when I|childhood/.test(lower)) return 'memory';
        if (/will|want|hope|plan|tomorrow|future/.test(lower)) return 'future';
        if (/feel|happy|sad|angry|anxious|love|hate/.test(lower)) return 'emotion';
        if (/tired|hungry|pain|body|breath|sleep/.test(lower)) return 'body';
        return 'default';
    }

    update() {
        this.time += 0.016;
        
        // Decay depth
        this.depth = Math.max(0.3, this.depth - 0.001);
        document.getElementById('depth-fill').style.width = `${this.depth * 100}%`;

        // Update stream particles
        this.streamParticles.forEach(p => {
            p.x -= p.speed;
            p.y = this.canvas.height / 2 + Math.sin(this.time + p.phase) * p.amplitude * this.depth;
            
            if (p.x < 0) p.x = this.canvas.width;
        });

        // Update thoughts
        this.thoughts.forEach(t => {
            t.x -= t.speed;
            t.opacity -= 0.002;
        });
        
        this.thoughts = this.thoughts.filter(t => t.opacity > 0 && t.x > -200);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(18, 18, 42, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw stream particles
        this.streamParticles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 60%, 60%, ${0.3 + this.depth * 0.3})`;
            this.ctx.fill();
        });

        // Draw thoughts
        this.thoughts.forEach(t => {
            // Bubble
            this.ctx.beginPath();
            const bubbleWidth = this.ctx.measureText(t.text).width + 20;
            this.ctx.roundRect(t.x - 10, t.y - t.size - 5, bubbleWidth, t.size + 10, 5);
            this.ctx.fillStyle = `${t.color}${Math.floor(t.opacity * 40).toString(16).padStart(2, '0')}`;
            this.ctx.fill();
            
            // Text
            this.ctx.font = `${t.size}px Inter`;
            this.ctx.fillStyle = `rgba(255, 255, 255, ${t.opacity})`;
            this.ctx.fillText(t.text, t.x, t.y);
        });

        // Draw "NOW" marker
        const nowX = this.canvas.width * 0.7;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(nowX, 30);
        this.ctx.lineTo(nowX, this.canvas.height - 30);
        this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        this.ctx.font = '10px Space Mono';
        this.ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NOW', nowX, 20);
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class StreamApp {
    constructor() {
        this.bg = new AwarenessBackground();
        this.stream = new ConsciousnessStream();
        this.bindEvents();
    }

    bindEvents() {
        const input = document.getElementById('thought-text');
        const addBtn = document.getElementById('add-thought');
        const categories = document.querySelectorAll('.category');

        const addThought = () => {
            const text = input.value.trim();
            if (text && this.stream) {
                const category = this.stream.categorize(text);
                this.stream.addThought(text, category);
                input.value = '';
            }
        };

        if (addBtn) addBtn.addEventListener('click', addThought);
        if (input) input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addThought();
        });

        categories.forEach(cat => {
            cat.addEventListener('click', () => {
                const category = cat.dataset.cat;
                const examples = {
                    work: 'Need to finish the project...',
                    memory: 'I remember when...',
                    future: 'Someday I will...',
                    emotion: 'Feeling grateful...',
                    body: 'A bit tired today...'
                };
                if (this.stream) {
                    this.stream.addThought(examples[category], category);
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StreamApp();
});

