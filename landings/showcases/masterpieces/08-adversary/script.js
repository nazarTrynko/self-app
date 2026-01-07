// THE ADVERSARY - Intelligent Opposition
// Chess-like antagonistic visualization

const adversaryResponses = [
    {
        opening: "I see what you're proposing. Let me show you where it breaks down.",
        attacks: [
            "Your first assumption is that %TOPIC%. But what if the opposite were true? What if %OPPOSITE%?",
            "You're assuming you have more time than you do. What happens when urgency forces a decision?",
            "This plan works in perfect conditions. But conditions are never perfect. What's your contingency?",
            "I notice you haven't considered %BLINDSPOT%. That's where plans like this typically fail.",
            "You're optimizing for what you can measure. What about what you can't measure?"
        ],
        closing: "I don't challenge you because I think you're wrong. I challenge you because I think you can be stronger."
    }
];

const blindspots = [
    "the second-order effects",
    "what happens if you succeed",
    "the opportunity cost",
    "how this changes you",
    "what you're not seeing because you don't want to",
    "the people affected who have no voice",
    "the long-term consequences",
    "your own biases in this assessment"
];

class AdversaryCanvas {
    constructor() {
        this.canvas = document.getElementById('adversary-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.pieces = [];
        
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
        this.pieces = [];
        // Chess-like pieces floating
        const symbols = ['♔', '♕', '♖', '♗', '♘', '♙'];
        const count = 15;
        
        for (let i = 0; i < count; i++) {
            this.pieces.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                size: 20 + Math.random() * 20,
                opacity: 0.02 + Math.random() * 0.03,
                speed: 0.2 + Math.random() * 0.3,
                drift: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(8, 4, 4, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw chess pieces floating
        this.pieces.forEach(piece => {
            this.ctx.font = `${piece.size}px serif`;
            this.ctx.fillStyle = `rgba(139, 0, 0, ${piece.opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(piece.symbol, piece.x, piece.y);
            
            // Slow drift
            piece.x += Math.sin(this.time + piece.drift) * 0.2;
            piece.y -= piece.speed;
            
            // Reset at top
            if (piece.y < -50) {
                piece.y = this.canvas.height + 50;
                piece.x = Math.random() * this.canvas.width;
            }
        });
        
        // Draw faint grid (chessboard hint)
        const gridSize = 80;
        this.ctx.strokeStyle = 'rgba(139, 0, 0, 0.02)';
        this.ctx.lineWidth = 1;
        
        for (let x = 0; x < this.canvas.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        
        for (let y = 0; y < this.canvas.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

class AdversaryChallenge {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('challenge-btn').addEventListener('click', () => {
            this.generateChallenge();
        });
    }

    generateChallenge() {
        const input = document.getElementById('position-input').value.trim();
        
        if (!input) {
            document.getElementById('position-input').focus();
            return;
        }

        const responseEl = document.getElementById('adversary-response');
        const contentEl = document.getElementById('response-content');
        
        // Extract key words from input for personalization
        const words = input.split(' ').filter(w => w.length > 4);
        const topic = words[Math.floor(Math.random() * words.length)] || 'this';
        const blindspot = blindspots[Math.floor(Math.random() * blindspots.length)];
        
        // Generate adversarial response
        const response = adversaryResponses[0];
        const attacks = response.attacks
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(attack => {
                return attack
                    .replace('%TOPIC%', topic)
                    .replace('%OPPOSITE%', 'the exact opposite is true')
                    .replace('%BLINDSPOT%', blindspot);
            });

        const html = `
            <p>${response.opening}</p>
            ${attacks.map(a => `<p>→ ${a}</p>`).join('')}
            <p style="margin-top: 2rem; opacity: 0.7;">${response.closing}</p>
        `;

        contentEl.innerHTML = html;
        responseEl.style.display = 'block';
        responseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new AdversaryCanvas();
    new AdversaryChallenge();
});

