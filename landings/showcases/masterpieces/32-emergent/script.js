// EMERGENT LANGUAGE - Linguistic Evolution Simulation
// Emergent Intelligence Category - Showcase 32

const SYMBOLS = ['◈', '◇', '△', '○', '□', '◆', '▽', '⬡', '⬢', '★', '✦', '❖', '✿', '⚡', '⚛'];
const MEANINGS = ['food', 'danger', 'friend', 'water', 'shelter', 'hunt', 'gather', 'rest', 'go', 'stop'];

class LanguageBackground {
    constructor() {
        this.canvas = document.getElementById('lang-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.symbols = [];
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
        this.symbols = [];
        for (let i = 0; i < 30; i++) {
            this.symbols.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
                opacity: 0.1 + Math.random() * 0.2,
                size: 20 + Math.random() * 30,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }
    }

    update() {
        this.time += 0.016;
        this.symbols.forEach(s => {
            s.x += s.vx;
            s.y += s.vy;
            if (s.x < 0 || s.x > this.canvas.width) s.vx *= -1;
            if (s.y < 0 || s.y > this.canvas.height) s.vy *= -1;
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 20, 15, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.symbols.forEach(s => {
            this.ctx.font = `${s.size}px serif`;
            this.ctx.fillStyle = `rgba(52, 211, 153, ${s.opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(s.symbol, s.x, s.y);
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Linguistic Agent
class LinguisticAgent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.lexicon = new Map(); // symbol → meaning associations
        this.speaking = false;
        this.currentSymbol = null;
    }

    // Learn a symbol-meaning association
    learn(symbol, meaning, success) {
        if (!this.lexicon.has(symbol)) {
            this.lexicon.set(symbol, new Map());
        }
        const meanings = this.lexicon.get(symbol);
        const current = meanings.get(meaning) || 0;
        meanings.set(meaning, current + (success ? 0.3 : -0.1));
    }

    // Get the meaning of a symbol
    interpret(symbol) {
        if (!this.lexicon.has(symbol)) return null;
        const meanings = this.lexicon.get(symbol);
        let bestMeaning = null;
        let bestScore = -Infinity;
        meanings.forEach((score, meaning) => {
            if (score > bestScore) {
                bestScore = score;
                bestMeaning = meaning;
            }
        });
        return bestMeaning;
    }

    // Choose a symbol for a meaning
    express(meaning) {
        let bestSymbol = null;
        let bestScore = -Infinity;
        
        this.lexicon.forEach((meanings, symbol) => {
            const score = meanings.get(meaning) || 0;
            if (score > bestScore) {
                bestScore = score;
                bestSymbol = symbol;
            }
        });
        
        // If no good symbol, create new association
        if (bestScore < 0.3) {
            bestSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        }
        
        return bestSymbol;
    }
}

// Language Simulation
class LanguageSimulation {
    constructor() {
        this.canvas = document.getElementById('agents-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.agents = [];
        this.generation = 1;
        this.interactions = 0;
        this.successes = 0;
        this.emergentLexicon = new Map();
        this.speed = 1;
        this.time = 0;
        
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
        this.agents = [];
        this.generation = 1;
        this.interactions = 0;
        this.successes = 0;
        this.emergentLexicon = new Map();
        
        for (let i = 0; i < 20; i++) {
            this.agents.push(new LinguisticAgent(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height
            ));
        }
        
        this.updateUI();
    }

    runInteraction(speaker, listener) {
        // Choose a random meaning to communicate
        const meaning = MEANINGS[Math.floor(Math.random() * MEANINGS.length)];
        
        // Speaker expresses the meaning
        const symbol = speaker.express(meaning);
        speaker.speaking = true;
        speaker.currentSymbol = symbol;
        
        // Listener interprets
        const interpreted = listener.interpret(symbol);
        const success = interpreted === meaning;
        
        // Both learn from the interaction
        speaker.learn(symbol, meaning, success);
        listener.learn(symbol, meaning, success);
        
        this.interactions++;
        if (success) this.successes++;
        
        // Track emergent consensus
        if (!this.emergentLexicon.has(symbol)) {
            this.emergentLexicon.set(symbol, new Map());
        }
        const counts = this.emergentLexicon.get(symbol);
        counts.set(meaning, (counts.get(meaning) || 0) + 1);
        
        setTimeout(() => {
            speaker.speaking = false;
            speaker.currentSymbol = null;
        }, 200);
        
        return success;
    }

    update() {
        this.time += 0.016;
        
        // Move agents
        this.agents.forEach(agent => {
            agent.x += agent.vx;
            agent.y += agent.vy;
            
            // Bounce
            if (agent.x < 20 || agent.x > this.canvas.width - 20) agent.vx *= -1;
            if (agent.y < 20 || agent.y > this.canvas.height - 20) agent.vy *= -1;
        });
        
        // Random interactions
        if (Math.random() < 0.1 * this.speed) {
            const i = Math.floor(Math.random() * this.agents.length);
            let j = Math.floor(Math.random() * this.agents.length);
            while (j === i) j = Math.floor(Math.random() * this.agents.length);
            
            const a1 = this.agents[i];
            const a2 = this.agents[j];
            const dx = a1.x - a2.x;
            const dy = a1.y - a2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                this.runInteraction(a1, a2);
            }
        }
        
        // Generation tracking
        if (this.interactions > 0 && this.interactions % 100 === 0) {
            this.generation++;
        }
        
        if (this.time % 1 < 0.02) {
            this.updateUI();
        }
    }

    updateUI() {
        document.getElementById('gen-count').textContent = this.generation;
        document.getElementById('vocab-count').textContent = this.emergentLexicon.size;
        
        const rate = this.interactions > 0 ? Math.round((this.successes / this.interactions) * 100) : 0;
        document.getElementById('success-rate').textContent = `${rate}%`;
        
        // Update lexicon display
        const lexiconEl = document.getElementById('lexicon');
        const items = [];
        
        this.emergentLexicon.forEach((meanings, symbol) => {
            let bestMeaning = null;
            let bestCount = 0;
            meanings.forEach((count, meaning) => {
                if (count > bestCount) {
                    bestCount = count;
                    bestMeaning = meaning;
                }
            });
            
            if (bestCount >= 5) {
                items.push({ symbol, meaning: bestMeaning, count: bestCount });
            }
        });
        
        items.sort((a, b) => b.count - a.count);
        
        lexiconEl.innerHTML = items.length > 0 ? items.slice(0, 8).map(item => `
            <div class="lexicon-item">
                <span class="symbol-display">${item.symbol}</span>
                <span class="meaning">${item.meaning} (${item.count})</span>
            </div>
        `).join('') : '<div class="lexicon-item"><span class="meaning">Awaiting emergence...</span></div>';
    }

    draw() {
        this.ctx.fillStyle = 'rgba(15, 31, 22, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw agents
        this.agents.forEach(agent => {
            // Agent body
            this.ctx.beginPath();
            this.ctx.arc(agent.x, agent.y, 8, 0, Math.PI * 2);
            this.ctx.fillStyle = agent.speaking ? '#fbbf24' : '#34d399';
            this.ctx.fill();
            
            // Speech bubble
            if (agent.speaking && agent.currentSymbol) {
                this.ctx.font = '16px serif';
                this.ctx.fillStyle = '#fbbf24';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(agent.currentSymbol, agent.x, agent.y - 20);
            }
        });

        // Draw communication lines
        for (let i = 0; i < this.agents.length; i++) {
            for (let j = i + 1; j < this.agents.length; j++) {
                const dx = this.agents[i].x - this.agents[j].x;
                const dy = this.agents[i].y - this.agents[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.agents[i].x, this.agents[i].y);
                    this.ctx.lineTo(this.agents[j].x, this.agents[j].y);
                    this.ctx.strokeStyle = `rgba(52, 211, 153, ${0.3 * (1 - dist / 100)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        for (let i = 0; i < this.speed; i++) {
            this.update();
        }
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class EmergentLanguageApp {
    constructor() {
        this.bg = new LanguageBackground();
        this.sim = new LanguageSimulation();
        this.bindEvents();
    }

    bindEvents() {
        const speedBtn = document.getElementById('speed-btn');
        const resetBtn = document.getElementById('reset-btn');

        if (speedBtn) {
            speedBtn.addEventListener('click', () => {
                this.sim.speed = this.sim.speed === 1 ? 5 : 1;
                speedBtn.textContent = this.sim.speed === 1 ? '⏩ Speed Up' : '⏸ Normal';
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.sim.init());
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EmergentLanguageApp();
});

