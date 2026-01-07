// THE CLARITY - Decision Aid for Overwhelmed Moments

const homeWisdoms = [
    "The inability to make a decision is itself a decision.",
    "Clarity comes from action, not thought.",
    "When you can't decide, your values are unclear.",
    "The best time to decide was yesterday. The second best time is now.",
    "Indecision is the thief of opportunity.",
    "What would you do if you weren't afraid?"
];

const filterQuestions = [
    { id: 1, text: "What's the worst that could happen if you choose this?" },
    { id: 2, text: "What would you advise a friend in this situation?" },
    { id: 3, text: "Which option aligns with who you want to become?" },
    { id: 4, text: "What will you regret NOT doing in 10 years?" },
    { id: 5, text: "If you HAD to decide right now, what would you choose?" }
];

const reactionInsights = {
    relieved: "Your relief reveals your heart. The coin gave you permission to do what you already wanted. Trust that feeling.",
    disappointed: "Your disappointment is wisdom. The coin chose wrong—but now you know what right looks like. Go with your gut.",
    neutral: "True neutrality is rare. Perhaps this decision matters less than you thought, or perhaps you need more time to feel it."
};

// Background canvas
class ClarityCanvas {
    constructor() {
        this.canvas = document.getElementById('clarity-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = '#0b0b0f';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Abstract clarity visualization - converging lines
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2 + this.time * 0.2;
            const startDist = 300 + Math.sin(this.time + i) * 50;
            const endDist = 50 + Math.sin(this.time * 2 + i) * 20;
            
            const x1 = cx + Math.cos(angle) * startDist;
            const y1 = cy + Math.sin(angle) * startDist;
            const x2 = cx + Math.cos(angle) * endDist;
            const y2 = cy + Math.sin(angle) * endDist;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.strokeStyle = `rgba(157, 168, 184, ${0.1 + Math.sin(this.time + i) * 0.05})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Center glow
        const gradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 100);
        gradient.addColorStop(0, 'rgba(157, 168, 184, 0.1)');
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class ClarityApp {
    constructor() {
        // Weigh state
        this.pros = [];
        this.cons = [];
        
        // Sort state
        this.sortItems = [];
        this.comparisons = [];
        this.currentComparison = 0;
        this.scores = {};
        
        this.init();
    }
    
    init() {
        // Set random wisdom
        document.getElementById('home-wisdom').textContent = 
            `"${homeWisdoms[Math.floor(Math.random() * homeWisdoms.length)]}"`;
        
        this.bindEvents();
        this.renderFilterQuestions();
    }
    
    bindEvents() {
        // Tool selection
        document.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', () => {
                const tool = card.dataset.tool;
                this.showScreen(`${tool}-screen`);
            });
        });
        
        // Back buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.showScreen(btn.dataset.back);
            });
        });
        
        // THE FLIP
        document.getElementById('flip-btn').addEventListener('click', () => this.flipCoin());
        document.querySelectorAll('.reaction-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleReaction(btn.dataset.reaction));
        });
        
        // THE WEIGHT
        document.getElementById('add-pro').addEventListener('click', () => this.addPro());
        document.getElementById('pro-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addPro();
        });
        document.getElementById('add-con').addEventListener('click', () => this.addCon());
        document.getElementById('con-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addCon();
        });
        document.getElementById('reset-weigh').addEventListener('click', () => this.resetWeigh());
        
        // THE SORT
        document.getElementById('add-sort').addEventListener('click', () => this.addSortItem());
        document.getElementById('sort-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addSortItem();
        });
        document.getElementById('start-sort').addEventListener('click', () => this.startSort());
        document.getElementById('compare-a').addEventListener('click', () => this.selectComparison('a'));
        document.getElementById('compare-b').addEventListener('click', () => this.selectComparison('b'));
        document.getElementById('reset-sort').addEventListener('click', () => this.resetSort());
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }
    
    // THE FLIP
    flipCoin() {
        const coin = document.getElementById('coin');
        const result = Math.random() > 0.5 ? 'heads' : 'tails';
        
        coin.classList.remove('flipping', 'tails');
        void coin.offsetWidth; // Trigger reflow
        
        if (result === 'tails') {
            coin.classList.add('tails');
        }
        coin.classList.add('flipping');
        
        // Haptic
        if ('vibrate' in navigator) navigator.vibrate([30, 50, 30, 50, 30]);
        
        setTimeout(() => {
            const optionA = document.getElementById('option-a').value || 'Option A';
            const optionB = document.getElementById('option-b').value || 'Option B';
            const chosen = result === 'heads' ? optionA : optionB;
            
            document.getElementById('result-text').innerHTML = `The coin chose: <strong>${chosen}</strong>`;
            document.getElementById('flip-result').classList.remove('hidden');
            document.getElementById('result-insight').classList.add('hidden');
        }, 2000);
    }
    
    handleReaction(reaction) {
        document.getElementById('result-insight').textContent = reactionInsights[reaction];
        document.getElementById('result-insight').classList.remove('hidden');
        
        if ('vibrate' in navigator) navigator.vibrate(15);
    }
    
    // THE WEIGHT
    addPro() {
        const input = document.getElementById('pro-input');
        const text = input.value.trim();
        if (text) {
            this.pros.push({ text, weight: 3 });
            input.value = '';
            this.renderWeigh();
        }
    }
    
    addCon() {
        const input = document.getElementById('con-input');
        const text = input.value.trim();
        if (text) {
            this.cons.push({ text, weight: 3 });
            input.value = '';
            this.renderWeigh();
        }
    }
    
    renderWeigh() {
        const prosList = document.getElementById('pros-list');
        const consList = document.getElementById('cons-list');
        
        prosList.innerHTML = this.pros.map((p, i) => this.renderWeighItem(p, i, 'pro')).join('');
        consList.innerHTML = this.cons.map((c, i) => this.renderWeighItem(c, i, 'con')).join('');
        
        // Bind weight dots
        document.querySelectorAll('.weight-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                const index = parseInt(e.target.dataset.index);
                const weight = parseInt(e.target.dataset.weight);
                
                if (type === 'pro') this.pros[index].weight = weight;
                else this.cons[index].weight = weight;
                
                this.renderWeigh();
            });
        });
        
        // Bind remove buttons
        document.querySelectorAll('.weigh-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                const index = parseInt(e.target.dataset.index);
                
                if (type === 'pro') this.pros.splice(index, 1);
                else this.cons.splice(index, 1);
                
                this.renderWeigh();
            });
        });
        
        this.updateWeighScore();
    }
    
    renderWeighItem(item, index, type) {
        const dots = [1, 2, 3, 4, 5].map(w => 
            `<span class="weight-dot ${w <= item.weight ? 'active' : ''}" data-type="${type}" data-index="${index}" data-weight="${w}"></span>`
        ).join('');
        
        return `
            <div class="weigh-item">
                <span class="weigh-item-text">${item.text}</span>
                <div class="weigh-item-weight">${dots}</div>
                <button class="weigh-item-remove" data-type="${type}" data-index="${index}">×</button>
            </div>
        `;
    }
    
    updateWeighScore() {
        const proScore = this.pros.reduce((sum, p) => sum + p.weight, 0);
        const conScore = this.cons.reduce((sum, c) => sum + c.weight, 0);
        const total = proScore + conScore || 1;
        
        document.getElementById('pros-fill').style.width = `${(proScore / total) * 100}%`;
        document.getElementById('cons-fill').style.width = `${(conScore / total) * 100}%`;
        document.getElementById('pros-score').textContent = `Pros: ${proScore}`;
        document.getElementById('cons-score').textContent = `Cons: ${conScore}`;
    }
    
    resetWeigh() {
        this.pros = [];
        this.cons = [];
        this.renderWeigh();
    }
    
    // THE FILTER
    renderFilterQuestions() {
        const container = document.getElementById('filter-questions');
        container.innerHTML = filterQuestions.map(q => `
            <div class="filter-question">
                <p class="filter-question-text">${q.id}. ${q.text}</p>
                <textarea id="filter-${q.id}" rows="2" placeholder="Your answer..."></textarea>
            </div>
        `).join('');
        
        // Show result when last question is answered
        container.querySelectorAll('textarea').forEach(ta => {
            ta.addEventListener('input', () => this.checkFilterComplete());
        });
    }
    
    checkFilterComplete() {
        const answered = filterQuestions.filter(q => 
            document.getElementById(`filter-${q.id}`).value.trim()
        );
        
        if (answered.length >= 3) {
            const decision = document.getElementById('decision-input').value || 'this decision';
            const answer5 = document.getElementById('filter-5').value.trim();
            
            let summary = '';
            if (answer5) {
                summary = `When forced to choose, you said: "${answer5}". Trust that instinct.`;
            } else {
                summary = `You've reflected on ${answered.length} key questions about ${decision}. Review your answers—your clarity is in them.`;
            }
            
            document.getElementById('filter-summary').textContent = summary;
            document.getElementById('filter-result').classList.remove('hidden');
        }
    }
    
    // THE SORT
    addSortItem() {
        const input = document.getElementById('sort-input');
        const text = input.value.trim();
        
        if (text && this.sortItems.length < 6) {
            this.sortItems.push(text);
            input.value = '';
            this.renderSortItems();
        }
    }
    
    renderSortItems() {
        const container = document.getElementById('sort-items');
        container.innerHTML = this.sortItems.map((item, i) => `
            <div class="sort-item">
                <span>${item}</span>
                <button data-index="${i}">×</button>
            </div>
        `).join('');
        
        container.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.sortItems.splice(parseInt(e.target.dataset.index), 1);
                this.renderSortItems();
            });
        });
        
        document.getElementById('start-sort').disabled = this.sortItems.length < 2;
    }
    
    startSort() {
        // Initialize scores
        this.scores = {};
        this.sortItems.forEach(item => this.scores[item] = 0);
        
        // Generate all comparisons
        this.comparisons = [];
        for (let i = 0; i < this.sortItems.length; i++) {
            for (let j = i + 1; j < this.sortItems.length; j++) {
                this.comparisons.push([this.sortItems[i], this.sortItems[j]]);
            }
        }
        
        this.currentComparison = 0;
        
        document.getElementById('sort-input-area').classList.add('hidden');
        document.getElementById('sort-compare').classList.remove('hidden');
        
        this.showComparison();
    }
    
    showComparison() {
        const pair = this.comparisons[this.currentComparison];
        document.getElementById('compare-a').textContent = pair[0];
        document.getElementById('compare-b').textContent = pair[1];
        document.getElementById('compare-progress').textContent = 
            `${this.currentComparison + 1} of ${this.comparisons.length}`;
    }
    
    selectComparison(choice) {
        const pair = this.comparisons[this.currentComparison];
        const winner = choice === 'a' ? pair[0] : pair[1];
        this.scores[winner]++;
        
        if ('vibrate' in navigator) navigator.vibrate(15);
        
        this.currentComparison++;
        
        if (this.currentComparison >= this.comparisons.length) {
            this.showSortResult();
        } else {
            this.showComparison();
        }
    }
    
    showSortResult() {
        const sorted = Object.entries(this.scores)
            .sort((a, b) => b[1] - a[1])
            .map(([item]) => item);
        
        document.getElementById('priority-list').innerHTML = sorted
            .map(item => `<li>${item}</li>`).join('');
        
        document.getElementById('sort-compare').classList.add('hidden');
        document.getElementById('sort-result').classList.remove('hidden');
    }
    
    resetSort() {
        this.sortItems = [];
        this.comparisons = [];
        this.currentComparison = 0;
        this.scores = {};
        
        document.getElementById('sort-items').innerHTML = '';
        document.getElementById('sort-input-area').classList.remove('hidden');
        document.getElementById('sort-compare').classList.add('hidden');
        document.getElementById('sort-result').classList.add('hidden');
        document.getElementById('start-sort').disabled = true;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ClarityCanvas();
    new ClarityApp();
});

// PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

