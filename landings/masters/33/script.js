// THE MANTRA - Personal Affirmation Engine

const starterMantras = [
    { text: "I am worthy of love and belonging.", time: "anytime" },
    { text: "I release what I cannot control.", time: "evening" },
    { text: "Today, I choose peace over perfection.", time: "morning" },
    { text: "I am becoming the person I want to be.", time: "morning" },
    { text: "My challenges are opportunities for growth.", time: "anytime" },
    { text: "I forgive myself for my mistakes.", time: "evening" },
    { text: "I am enough, exactly as I am.", time: "anytime" },
    { text: "I trust the process of life.", time: "morning" }
];

const defaultMantras = [
    { id: 1, text: "I am exactly where I need to be.", time: "anytime", favorite: false, isDefault: true },
    { id: 2, text: "This too shall pass.", time: "anytime", favorite: false, isDefault: true },
    { id: 3, text: "I choose to be present in this moment.", time: "morning", favorite: false, isDefault: true },
    { id: 4, text: "I am grateful for another day.", time: "morning", favorite: false, isDefault: true },
    { id: 5, text: "I release the day and welcome rest.", time: "evening", favorite: false, isDefault: true }
];

// Background canvas
class MantraCanvas {
    constructor() {
        this.canvas = document.getElementById('mantra-canvas');
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
        this.time += 0.002;
        
        this.ctx.fillStyle = '#0c0c0c';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Golden light gradient
        const hour = new Date().getHours();
        const isMorning = hour >= 5 && hour < 12;
        const isEvening = hour >= 17 || hour < 5;
        
        const colors = isMorning 
            ? ['rgba(201, 168, 124, 0.08)', 'rgba(201, 168, 124, 0.02)']
            : isEvening 
            ? ['rgba(124, 142, 201, 0.08)', 'rgba(124, 142, 201, 0.02)']
            : ['rgba(180, 180, 180, 0.06)', 'rgba(180, 180, 180, 0.01)'];
        
        // Gentle breathing light
        const breathe = Math.sin(this.time) * 0.3 + 0.7;
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height * 0.4;
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.6 * breathe;
        
        const gradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class MantraApp {
    constructor() {
        this.mantras = [];
        this.currentIndex = 0;
        this.currentFilter = 'all';
        this.selectedTime = 'morning';
        this.touchStartX = 0;
        this.touchCurrentX = 0;
        this.isSwiping = false;
        
        this.loadMantras();
        this.updateTimeMode();
        this.bindEvents();
        this.renderCurrentMantra();
        this.renderDots();
        this.renderStarterMantras();
    }
    
    loadMantras() {
        const stored = localStorage.getItem('mantras');
        if (stored) {
            this.mantras = JSON.parse(stored);
        } else {
            this.mantras = [...defaultMantras];
            this.saveMantras();
        }
    }
    
    saveMantras() {
        localStorage.setItem('mantras', JSON.stringify(this.mantras));
    }
    
    updateTimeMode() {
        const hour = new Date().getHours();
        let mode = 'ANYTIME';
        
        if (hour >= 5 && hour < 12) mode = 'MORNING';
        else if (hour >= 17 || hour < 5) mode = 'EVENING';
        
        document.getElementById('time-mode').textContent = mode;
    }
    
    getFilteredMantras() {
        const hour = new Date().getHours();
        let timeFilter = 'anytime';
        
        if (hour >= 5 && hour < 12) timeFilter = 'morning';
        else if (hour >= 17 || hour < 5) timeFilter = 'evening';
        
        // For main view, filter by current time of day
        return this.mantras.filter(m => 
            m.time === 'anytime' || m.time === timeFilter
        );
    }
    
    bindEvents() {
        // Navigation
        document.getElementById('menu-btn').addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('add-btn').addEventListener('click', () => this.showScreen('add-screen'));
        document.getElementById('close-menu').addEventListener('click', () => this.showScreen('mantra-screen'));
        document.getElementById('close-add').addEventListener('click', () => this.showScreen('mantra-screen'));
        
        // Swipe handling
        const swipeArea = document.getElementById('swipe-area');
        swipeArea.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        swipeArea.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        swipeArea.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Mouse swipe for desktop
        swipeArea.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        swipeArea.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        swipeArea.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        swipeArea.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
        
        // Actions
        document.getElementById('speak-btn').addEventListener('click', () => this.speakMantra());
        document.getElementById('favorite-btn').addEventListener('click', () => this.toggleFavorite());
        
        // Add form
        const input = document.getElementById('mantra-input');
        input.addEventListener('input', () => this.validateInput());
        
        document.querySelectorAll('#time-options .category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('#time-options .category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.selectedTime = e.target.dataset.time;
            });
        });
        
        document.getElementById('save-mantra').addEventListener('click', () => this.saveNewMantra());
        
        // Filter tabs
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderMantrasList();
            });
        });
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        
        if (screenId === 'menu-screen') {
            this.renderMantrasList();
        }
        if (screenId === 'mantra-screen') {
            this.renderCurrentMantra();
            this.renderDots();
        }
    }
    
    // Touch handling
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.isSwiping = true;
        document.getElementById('mantra-card').classList.add('swiping');
    }
    
    handleTouchMove(e) {
        if (!this.isSwiping) return;
        this.touchCurrentX = e.touches[0].clientX;
        const diff = this.touchCurrentX - this.touchStartX;
        document.getElementById('mantra-card').style.transform = `translateX(${diff}px)`;
    }
    
    handleTouchEnd(e) {
        if (!this.isSwiping) return;
        this.isSwiping = false;
        
        const card = document.getElementById('mantra-card');
        card.classList.remove('swiping');
        
        const diff = this.touchCurrentX - this.touchStartX;
        const threshold = 80;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) this.prevMantra();
            else this.nextMantra();
        }
        
        card.style.transform = '';
    }
    
    // Mouse handling
    handleMouseDown(e) {
        this.touchStartX = e.clientX;
        this.isSwiping = true;
        document.getElementById('mantra-card').classList.add('swiping');
    }
    
    handleMouseMove(e) {
        if (!this.isSwiping) return;
        this.touchCurrentX = e.clientX;
        const diff = this.touchCurrentX - this.touchStartX;
        document.getElementById('mantra-card').style.transform = `translateX(${diff}px)`;
    }
    
    handleMouseUp(e) {
        if (!this.isSwiping) return;
        this.handleTouchEnd(e);
    }
    
    nextMantra() {
        const filtered = this.getFilteredMantras();
        if (filtered.length === 0) return;
        
        this.currentIndex = (this.currentIndex + 1) % filtered.length;
        this.animateTransition('left');
    }
    
    prevMantra() {
        const filtered = this.getFilteredMantras();
        if (filtered.length === 0) return;
        
        this.currentIndex = (this.currentIndex - 1 + filtered.length) % filtered.length;
        this.animateTransition('right');
    }
    
    animateTransition(direction) {
        const card = document.getElementById('mantra-card');
        const offset = direction === 'left' ? -100 : 100;
        
        card.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        card.style.transform = `translateX(${offset}px)`;
        card.style.opacity = '0';
        
        setTimeout(() => {
            this.renderCurrentMantra();
            this.renderDots();
            
            card.style.transition = 'none';
            card.style.transform = `translateX(${-offset}px)`;
            
            requestAnimationFrame(() => {
                card.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
                card.style.transform = 'translateX(0)';
                card.style.opacity = '1';
            });
        }, 200);
        
        // Haptic
        if ('vibrate' in navigator) navigator.vibrate(10);
    }
    
    renderCurrentMantra() {
        const filtered = this.getFilteredMantras();
        if (filtered.length === 0) {
            document.getElementById('mantra-text').textContent = 'Add your first mantra';
            return;
        }
        
        if (this.currentIndex >= filtered.length) this.currentIndex = 0;
        
        const mantra = filtered[this.currentIndex];
        document.getElementById('mantra-text').textContent = mantra.text;
        
        // Update favorite button
        const favBtn = document.getElementById('favorite-btn');
        if (mantra.favorite) {
            favBtn.classList.add('favorited');
        } else {
            favBtn.classList.remove('favorited');
        }
    }
    
    renderDots() {
        const filtered = this.getFilteredMantras();
        const container = document.getElementById('mantra-dots');
        
        container.innerHTML = filtered.map((_, i) => 
            `<div class="dot ${i === this.currentIndex ? 'active' : ''}"></div>`
        ).join('');
    }
    
    speakMantra() {
        const filtered = this.getFilteredMantras();
        if (filtered.length === 0) return;
        
        const mantra = filtered[this.currentIndex];
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(mantra.text);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
        }
        
        if ('vibrate' in navigator) navigator.vibrate(20);
    }
    
    toggleFavorite() {
        const filtered = this.getFilteredMantras();
        if (filtered.length === 0) return;
        
        const mantra = filtered[this.currentIndex];
        const original = this.mantras.find(m => m.id === mantra.id);
        if (original) {
            original.favorite = !original.favorite;
            this.saveMantras();
            this.renderCurrentMantra();
        }
        
        if ('vibrate' in navigator) navigator.vibrate(15);
    }
    
    validateInput() {
        const input = document.getElementById('mantra-input');
        const btn = document.getElementById('save-mantra');
        btn.disabled = input.value.trim().length < 5;
    }
    
    saveNewMantra() {
        const input = document.getElementById('mantra-input');
        const text = input.value.trim();
        
        if (text.length < 5) return;
        
        const newMantra = {
            id: Date.now(),
            text: text,
            time: this.selectedTime,
            favorite: false,
            isDefault: false
        };
        
        this.mantras.push(newMantra);
        this.saveMantras();
        
        input.value = '';
        this.validateInput();
        
        // Visual feedback
        const btn = document.getElementById('save-mantra');
        btn.textContent = 'Saved!';
        setTimeout(() => {
            btn.textContent = 'Save Mantra';
            this.showScreen('mantra-screen');
        }, 1000);
        
        if ('vibrate' in navigator) navigator.vibrate([20, 30, 20]);
    }
    
    renderStarterMantras() {
        const grid = document.getElementById('starters-grid');
        grid.innerHTML = starterMantras.slice(0, 5).map(m => 
            `<button class="starter-btn" data-text="${m.text}" data-time="${m.time}">"${m.text}"</button>`
        ).join('');
        
        grid.querySelectorAll('.starter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('mantra-input').value = btn.dataset.text;
                this.selectedTime = btn.dataset.time;
                
                document.querySelectorAll('#time-options .category-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.time === this.selectedTime);
                });
                
                this.validateInput();
            });
        });
    }
    
    renderMantrasList() {
        const list = document.getElementById('mantras-list');
        
        let filtered = this.mantras;
        if (this.currentFilter === 'morning') {
            filtered = this.mantras.filter(m => m.time === 'morning');
        } else if (this.currentFilter === 'evening') {
            filtered = this.mantras.filter(m => m.time === 'evening');
        } else if (this.currentFilter === 'favorites') {
            filtered = this.mantras.filter(m => m.favorite);
        }
        
        if (filtered.length === 0) {
            list.innerHTML = '<p class="empty-list">No mantras found.</p>';
            return;
        }
        
        list.innerHTML = filtered.map(m => `
            <div class="mantra-list-item" data-id="${m.id}">
                <p class="mantra-list-text">"${m.text}"</p>
                <div class="mantra-list-meta">
                    <span class="mantra-list-time">${m.time}</span>
                    ${!m.isDefault ? `<button class="mantra-delete" data-id="${m.id}">×</button>` : ''}
                </div>
            </div>
        `).join('');
        
        list.querySelectorAll('.mantra-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteMantra(parseInt(btn.dataset.id));
            });
        });
    }
    
    deleteMantra(id) {
        this.mantras = this.mantras.filter(m => m.id !== id);
        this.saveMantras();
        this.renderMantrasList();
        
        if ('vibrate' in navigator) navigator.vibrate(15);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new MantraCanvas();
    new MantraApp();
});

// PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

