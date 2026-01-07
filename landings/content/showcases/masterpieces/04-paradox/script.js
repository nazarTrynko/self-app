// THE PARADOX - Koan Technology
// Hold contradictions without resolution

const koans = [
    "What was your face before your parents were born?",
    "What is the sound of one hand clapping?",
    "If you meet the Buddha on the road, kill him.",
    "The arrow that flies is at rest.",
    "This statement is false.",
    "The more you know, the less you understand.",
    "To have everything, give everything away.",
    "The only constant is change.",
    "You cannot step into the same river twice, yet it is the same river.",
    "The finger pointing at the moon is not the moon.",
    "When you get to the top of the mountain, keep climbing.",
    "Before enlightenment: chop wood, carry water. After enlightenment: chop wood, carry water.",
    "Does a dog have Buddha nature? Mu.",
    "All things return to the One. Where does the One return to?",
    "Show me your original face, the face you had before the Big Bang."
];

const dualities = [
    { a: "You are completely free", b: "You are completely determined" },
    { a: "You are separate from the universe", b: "You are the universe" },
    { a: "This moment is all there is", b: "Time stretches infinitely" },
    { a: "You must try your hardest", b: "Effort is an illusion" },
    { a: "Trust yourself completely", b: "Never trust yourself" },
    { a: "Everything matters infinitely", b: "Nothing matters at all" },
    { a: "You are exactly who you should be", b: "You must change everything" },
    { a: "The self is real", b: "The self is an illusion" },
    { a: "Death is the end", b: "Death is a transformation" },
    { a: "Suffering is to be avoided", b: "Suffering is the path" },
    { a: "Love is unconditional", b: "Love requires boundaries" },
    { a: "We are all one", b: "We are utterly alone" }
];

// Canvas background - impossible geometry animation
class ParadoxCanvas {
    constructor() {
        this.canvas = document.getElementById('paradox-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.shapes = [];
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
        this.shapes = [];
        const count = 15;
        
        for (let i = 0; i < count; i++) {
            this.shapes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 30 + Math.random() * 50,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                type: Math.floor(Math.random() * 3),
                opacity: 0.1 + Math.random() * 0.2,
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    drawPenroseTriangle(x, y, size, rotation) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        
        const h = size * Math.sqrt(3) / 2;
        
        // Outer triangle
        this.ctx.beginPath();
        this.ctx.moveTo(0, -h * 0.6);
        this.ctx.lineTo(size * 0.5, h * 0.4);
        this.ctx.lineTo(-size * 0.5, h * 0.4);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Inner triangle (offset to create impossible effect)
        this.ctx.beginPath();
        this.ctx.moveTo(0, -h * 0.3);
        this.ctx.lineTo(size * 0.3, h * 0.2);
        this.ctx.lineTo(-size * 0.3, h * 0.2);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Connecting lines
        this.ctx.beginPath();
        this.ctx.moveTo(0, -h * 0.6);
        this.ctx.lineTo(0, -h * 0.3);
        this.ctx.moveTo(size * 0.5, h * 0.4);
        this.ctx.lineTo(size * 0.3, h * 0.2);
        this.ctx.moveTo(-size * 0.5, h * 0.4);
        this.ctx.lineTo(-size * 0.3, h * 0.2);
        this.ctx.stroke();
        
        this.ctx.restore();
    }

    drawImpossibleCube(x, y, size, rotation) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        
        const s = size * 0.5;
        
        // Hexagon outline
        this.ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3 - Math.PI / 6;
            const px = Math.cos(angle) * s;
            const py = Math.sin(angle) * s;
            if (i === 0) this.ctx.moveTo(px, py);
            else this.ctx.lineTo(px, py);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Inner lines
        for (let i = 0; i < 3; i++) {
            const angle = (i * Math.PI * 2) / 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(Math.cos(angle) * s * 0.6, Math.sin(angle) * s * 0.6);
            this.ctx.stroke();
        }
        
        this.ctx.restore();
    }

    drawMobiusHint(x, y, size, rotation) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        
        // Figure-8 / infinity symbol
        this.ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2; t += 0.1) {
            const px = Math.sin(t) * size * 0.5;
            const py = Math.sin(t) * Math.cos(t) * size * 0.3;
            if (t === 0) this.ctx.moveTo(px, py);
            else this.ctx.lineTo(px, py);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        
        this.ctx.restore();
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(10, 8, 18, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.shapes.forEach(shape => {
            shape.rotation += shape.rotationSpeed;
            
            // Subtle floating movement
            const floatX = Math.sin(this.time + shape.phase) * 20;
            const floatY = Math.cos(this.time * 0.7 + shape.phase) * 15;
            
            this.ctx.strokeStyle = `rgba(155, 89, 182, ${shape.opacity})`;
            this.ctx.lineWidth = 1;
            
            const x = shape.x + floatX;
            const y = shape.y + floatY;
            
            switch (shape.type) {
                case 0:
                    this.drawPenroseTriangle(x, y, shape.size, shape.rotation);
                    break;
                case 1:
                    this.drawImpossibleCube(x, y, shape.size, shape.rotation);
                    break;
                case 2:
                    this.drawMobiusHint(x, y, shape.size, shape.rotation);
                    break;
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Koan functionality
class KoanExperience {
    constructor() {
        this.currentKoan = 0;
        this.currentDuality = 0;
        this.sitting = false;
        
        this.koanText = document.getElementById('current-koan').querySelector('.koan-text');
        this.statementA = document.getElementById('statement-a');
        this.statementB = document.getElementById('statement-b');
        
        this.init();
        this.bindEvents();
    }

    init() {
        this.showRandomKoan();
        this.showRandomDuality();
    }

    showRandomKoan() {
        const index = Math.floor(Math.random() * koans.length);
        this.koanText.style.opacity = '0';
        
        setTimeout(() => {
            this.koanText.textContent = koans[index];
            this.koanText.style.opacity = '1';
        }, 300);
    }

    showRandomDuality() {
        const index = Math.floor(Math.random() * dualities.length);
        const duality = dualities[index];
        
        this.statementA.style.opacity = '0';
        this.statementB.style.opacity = '0';
        
        setTimeout(() => {
            this.statementA.textContent = duality.a;
            this.statementB.textContent = duality.b;
            this.statementA.style.opacity = '1';
            this.statementB.style.opacity = '1';
        }, 300);
    }

    sitWithKoan() {
        const koanCard = document.getElementById('current-koan');
        koanCard.style.transform = 'scale(1.05)';
        koanCard.style.boxShadow = '0 0 60px rgba(155, 89, 182, 0.3)';
        
        // Dim everything else
        document.body.style.setProperty('--bg', '#050308');
        
        setTimeout(() => {
            koanCard.style.transform = 'scale(1)';
            koanCard.style.boxShadow = 'none';
            document.body.style.setProperty('--bg', '#0a0812');
        }, 5000);
    }

    bindEvents() {
        document.getElementById('next-koan').addEventListener('click', () => {
            this.showRandomKoan();
        });

        document.getElementById('sit-with').addEventListener('click', () => {
            this.sitWithKoan();
        });

        document.getElementById('new-duality').addEventListener('click', () => {
            this.showRandomDuality();
        });

        // Add CSS transition for koan text
        this.koanText.style.transition = 'opacity 0.3s ease';
        this.statementA.style.transition = 'opacity 0.3s ease';
        this.statementB.style.transition = 'opacity 0.3s ease';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ParadoxCanvas();
    new KoanExperience();
});


