// THE ANCHOR - 5-4-3-2-1 Grounding App

const senses = [
    { id: 'see', name: 'SEE', count: 5, prompt: 'Name <strong>5 things</strong> you can see right now', placeholder: 'What do you see?', icon: '👁️' },
    { id: 'touch', name: 'TOUCH', count: 4, prompt: 'Name <strong>4 things</strong> you can physically feel', placeholder: 'What do you feel?', icon: '✋' },
    { id: 'hear', name: 'HEAR', count: 3, prompt: 'Name <strong>3 things</strong> you can hear', placeholder: 'What do you hear?', icon: '👂' },
    { id: 'smell', name: 'SMELL', count: 2, prompt: 'Name <strong>2 things</strong> you can smell', placeholder: 'What do you smell?', icon: '👃' },
    { id: 'taste', name: 'TASTE', count: 1, prompt: 'Name <strong>1 thing</strong> you can taste', placeholder: 'What do you taste?', icon: '👅' }
];

const wisdoms = [
    "The present moment is the only moment available to us, and it is the door to all moments.",
    "You are not your thoughts. You are the observer of your thoughts.",
    "Anxiety is experiencing failure in advance. Grounding brings you back to now.",
    "Where attention goes, energy flows. You chose to flow here.",
    "The body is always in the present. Follow it home.",
    "Between stimulus and response there is a space. You just expanded that space.",
    "You cannot stop the waves, but you can learn to swim."
];

// Background canvas
class AnchorCanvas {
    constructor() {
        this.canvas = document.getElementById('anchor-canvas');
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
        this.init();
    }
    
    init() {
        this.particles = [];
        const count = 30;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 2 + Math.random() * 3,
                speed: 0.2 + Math.random() * 0.3,
                opacity: 0.1 + Math.random() * 0.2,
                drift: Math.random() * Math.PI * 2
            });
        }
    }
    
    animate() {
        this.time += 0.005;
        
        this.ctx.fillStyle = '#08080c';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw floating particles (like dust in light)
        this.particles.forEach(p => {
            const pulse = Math.sin(this.time * 2 + p.drift) * 0.3 + 0.7;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(107, 142, 125, ${p.opacity * pulse})`;
            this.ctx.fill();
            
            // Gentle drift
            p.y -= p.speed;
            p.x += Math.sin(this.time + p.drift) * 0.3;
            
            // Reset at top
            if (p.y < -10) {
                p.y = this.canvas.height + 10;
                p.x = Math.random() * this.canvas.width;
            }
        });
        
        // Subtle center glow
        const gradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, this.canvas.height / 2, 0,
            this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(107, 142, 125, 0.03)');
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class AnchorApp {
    constructor() {
        this.currentStep = 0;
        this.entries = {
            see: [],
            touch: [],
            hear: [],
            smell: [],
            taste: []
        };
        this.savedAnchors = [];
        
        this.loadSavedAnchors();
        this.bindEvents();
    }
    
    loadSavedAnchors() {
        const stored = localStorage.getItem('anchor-history');
        if (stored) {
            this.savedAnchors = JSON.parse(stored);
        }
    }
    
    saveToStorage() {
        localStorage.setItem('anchor-history', JSON.stringify(this.savedAnchors));
    }
    
    bindEvents() {
        // Welcome screen
        document.getElementById('start-grounding').addEventListener('click', () => this.startGrounding());
        document.getElementById('view-anchors').addEventListener('click', () => this.showHistory());
        
        // Grounding screen
        document.getElementById('add-item').addEventListener('click', () => this.addItem());
        document.getElementById('item-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addItem();
        });
        document.getElementById('prev-sense').addEventListener('click', () => this.prevStep());
        document.getElementById('next-sense').addEventListener('click', () => this.nextStep());
        
        // Complete screen
        document.getElementById('save-anchor').addEventListener('click', () => this.saveAnchor());
        document.getElementById('return-home').addEventListener('click', () => this.goHome());
        
        // History screen
        document.getElementById('back-from-history').addEventListener('click', () => this.showScreen('welcome-screen'));
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }
    
    startGrounding() {
        this.currentStep = 0;
        this.entries = { see: [], touch: [], hear: [], smell: [], taste: [] };
        this.updateGroundingUI();
        this.showScreen('grounding-screen');
        document.getElementById('item-input').focus();
    }
    
    updateGroundingUI() {
        const sense = senses[this.currentStep];
        const entries = this.entries[sense.id];
        
        // Update sense indicator
        document.querySelector('.sense-icon').textContent = sense.icon;
        document.querySelector('.sense-name').textContent = sense.name;
        document.querySelector('.sense-indicator').dataset.sense = sense.id;
        
        // Update prompt
        document.querySelector('.prompt-number').textContent = sense.count;
        document.querySelector('.prompt-text').innerHTML = sense.prompt;
        
        // Update input
        document.getElementById('item-input').placeholder = sense.placeholder;
        document.getElementById('item-input').value = '';
        
        // Update items list
        this.renderItemsList();
        
        // Update navigation
        document.getElementById('prev-sense').disabled = this.currentStep === 0;
        document.getElementById('next-sense').disabled = entries.length < sense.count;
        document.querySelector('.nav-step').textContent = `${this.currentStep + 1} of 5`;
        
        // Update progress bar
        const totalSteps = senses.length;
        const completedSteps = this.currentStep;
        const currentProgress = entries.length / sense.count;
        const progress = ((completedSteps + currentProgress * 0.8) / totalSteps) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
    }
    
    renderItemsList() {
        const sense = senses[this.currentStep];
        const entries = this.entries[sense.id];
        const list = document.getElementById('items-list');
        
        list.innerHTML = entries.map((item, i) => `
            <div class="item-tag">
                <span>${item}</span>
                <button data-index="${i}">×</button>
            </div>
        `).join('');
        
        // Bind remove buttons
        list.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                entries.splice(index, 1);
                this.updateGroundingUI();
            });
        });
    }
    
    addItem() {
        const input = document.getElementById('item-input');
        const value = input.value.trim();
        const sense = senses[this.currentStep];
        
        if (value && this.entries[sense.id].length < sense.count) {
            this.entries[sense.id].push(value);
            input.value = '';
            this.updateGroundingUI();
            
            // Haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(10);
            }
            
            // Auto-advance if complete
            if (this.entries[sense.id].length >= sense.count) {
                if (this.currentStep < senses.length - 1) {
                    setTimeout(() => this.nextStep(), 500);
                } else {
                    setTimeout(() => this.completeGrounding(), 500);
                }
            }
        }
        
        input.focus();
    }
    
    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.updateGroundingUI();
        }
    }
    
    nextStep() {
        if (this.currentStep < senses.length - 1) {
            this.currentStep++;
            this.updateGroundingUI();
            document.getElementById('item-input').focus();
        } else {
            this.completeGrounding();
        }
    }
    
    completeGrounding() {
        // Update summary counts
        senses.forEach(sense => {
            const count = this.entries[sense.id].length;
            document.querySelector(`.summary-item[data-sense="${sense.id}"] .summary-count`).textContent = count;
        });
        
        // Set wisdom
        document.getElementById('wisdom-text').textContent = 
            `"${wisdoms[Math.floor(Math.random() * wisdoms.length)]}"`;
        
        // Haptic
        if ('vibrate' in navigator) {
            navigator.vibrate([50, 30, 50]);
        }
        
        this.showScreen('complete-screen');
    }
    
    saveAnchor() {
        const anchor = {
            id: Date.now(),
            date: new Date().toISOString(),
            entries: { ...this.entries }
        };
        
        this.savedAnchors.unshift(anchor);
        
        // Keep only last 20 anchors
        if (this.savedAnchors.length > 20) {
            this.savedAnchors = this.savedAnchors.slice(0, 20);
        }
        
        this.saveToStorage();
        
        // Visual feedback
        const btn = document.getElementById('save-anchor');
        btn.textContent = 'Saved!';
        btn.disabled = true;
        
        setTimeout(() => {
            this.goHome();
        }, 1000);
    }
    
    goHome() {
        const btn = document.getElementById('save-anchor');
        btn.textContent = 'Save This Anchor';
        btn.disabled = false;
        
        this.showScreen('welcome-screen');
    }
    
    showHistory() {
        this.renderHistoryList();
        this.showScreen('history-screen');
    }
    
    renderHistoryList() {
        const list = document.getElementById('anchors-list');
        
        if (this.savedAnchors.length === 0) {
            list.innerHTML = '<p class="empty-state">No anchors saved yet. Complete a grounding session to save your first anchor.</p>';
            return;
        }
        
        list.innerHTML = this.savedAnchors.map(anchor => {
            const date = new Date(anchor.date);
            const dateStr = date.toLocaleDateString(undefined, { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const allItems = [
                ...anchor.entries.see,
                ...anchor.entries.touch,
                ...anchor.entries.hear,
                ...anchor.entries.smell,
                ...anchor.entries.taste
            ].slice(0, 8);
            
            return `
                <div class="anchor-card" data-id="${anchor.id}">
                    <div class="anchor-card-header">
                        <span class="anchor-date">${dateStr}</span>
                        <button class="anchor-delete" data-id="${anchor.id}">×</button>
                    </div>
                    <div class="anchor-items">
                        ${allItems.map(item => `<span class="anchor-item">${item}</span>`).join('')}
                        ${allItems.length < 15 ? '' : '<span class="anchor-item">...</span>'}
                    </div>
                </div>
            `;
        }).join('');
        
        // Bind delete buttons
        list.querySelectorAll('.anchor-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(e.target.dataset.id);
                this.deleteAnchor(id);
            });
        });
    }
    
    deleteAnchor(id) {
        this.savedAnchors = this.savedAnchors.filter(a => a.id !== id);
        this.saveToStorage();
        this.renderHistoryList();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new AnchorCanvas();
    new AnchorApp();
});

// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

