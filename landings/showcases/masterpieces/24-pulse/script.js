// THE PULSE - Emotional Check-in Tracker

const emotionEmojis = {
    peaceful: '😌', content: '🙂', happy: '😊', excited: '🤩',
    tired: '😴', neutral: '😐', anxious: '😰', stressed: '😤',
    sad: '😢', frustrated: '😠', confused: '🤔', grateful: '🙏'
};

// Background canvas - subtle heartbeat visualization
class PulseCanvas {
    constructor() {
        this.canvas = document.getElementById('pulse-canvas');
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
        this.time += 0.02;
        
        this.ctx.fillStyle = '#0a0a0e';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Heartbeat-like pulse
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        
        // Create multiple concentric pulses
        for (let i = 0; i < 3; i++) {
            const phase = (this.time + i * 0.7) % 3;
            const radius = phase * 150;
            const opacity = Math.max(0, 0.15 - phase * 0.05);
            
            const gradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
            gradient.addColorStop(0, 'transparent');
            gradient.addColorStop(0.7, `rgba(138, 184, 184, ${opacity})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Pattern visualization canvas
class PatternCanvas {
    constructor() {
        this.canvas = document.getElementById('pattern-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.entries = [];
    }
    
    setEntries(entries) {
        this.entries = entries.slice(0, 30); // Last 30 entries
        this.draw();
    }
    
    draw() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * 2;
        this.canvas.height = rect.height * 2;
        this.ctx.scale(2, 2);
        
        const { width, height } = rect;
        
        this.ctx.fillStyle = 'transparent';
        this.ctx.fillRect(0, 0, width, height);
        
        if (this.entries.length === 0) {
            this.ctx.fillStyle = '#4a4a4a';
            this.ctx.font = '12px Work Sans';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Your emotional pattern will appear here', width / 2, height / 2);
            return;
        }
        
        // Draw emotion line graph
        const padding = 20;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;
        
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgba(138, 184, 184, 0.6)';
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        this.entries.forEach((entry, i) => {
            const x = padding + (i / Math.max(this.entries.length - 1, 1)) * graphWidth;
            
            // Map valence to y position
            const valenceMap = { positive: 0.2, neutral: 0.5, negative: 0.8 };
            const y = padding + valenceMap[entry.valence] * graphHeight;
            
            if (i === 0) this.ctx.moveTo(x, y);
            else this.ctx.lineTo(x, y);
        });
        
        this.ctx.stroke();
        
        // Draw dots at each point
        this.entries.forEach((entry, i) => {
            const x = padding + (i / Math.max(this.entries.length - 1, 1)) * graphWidth;
            const valenceMap = { positive: 0.2, neutral: 0.5, negative: 0.8 };
            const y = padding + valenceMap[entry.valence] * graphHeight;
            
            const colors = { positive: '#7cb88c', neutral: '#8a8ab8', negative: '#b87c7c' };
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, 4, 0, Math.PI * 2);
            this.ctx.fillStyle = colors[entry.valence];
            this.ctx.fill();
        });
    }
}

// Main App
class PulseApp {
    constructor() {
        this.entries = [];
        this.currentEntry = null;
        this.patternCanvas = new PatternCanvas();
        
        this.loadEntries();
        this.bindEvents();
        this.updateLastCheckin();
        this.updateTime();
        
        // Update time every minute
        setInterval(() => this.updateTime(), 60000);
    }
    
    loadEntries() {
        const stored = localStorage.getItem('pulse-entries');
        if (stored) {
            this.entries = JSON.parse(stored);
        }
    }
    
    saveEntries() {
        localStorage.setItem('pulse-entries', JSON.stringify(this.entries));
    }
    
    updateTime() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = 'Now';
        
        if (hour >= 5 && hour < 12) greeting = 'Good morning';
        else if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
        else if (hour >= 17 && hour < 21) greeting = 'Good evening';
        else greeting = 'Late night';
        
        document.getElementById('current-time').textContent = greeting;
    }
    
    bindEvents() {
        // Emotion buttons
        document.querySelectorAll('.emotion-btn').forEach(btn => {
            btn.addEventListener('click', () => this.logEmotion(btn));
        });
        
        // Navigation
        document.getElementById('history-btn').addEventListener('click', () => this.showHistory());
        document.getElementById('back-btn').addEventListener('click', () => this.showScreen('checkin-screen'));
        document.getElementById('done-btn').addEventListener('click', () => this.showScreen('checkin-screen'));
        document.getElementById('clear-btn').addEventListener('click', () => this.clearHistory());
        
        // Note handling
        document.getElementById('add-note-btn').addEventListener('click', () => {
            document.getElementById('note-area').classList.remove('hidden');
            document.getElementById('add-note-btn').style.display = 'none';
        });
        
        document.getElementById('save-note').addEventListener('click', () => this.saveNote());
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        
        if (screenId === 'checkin-screen') {
            this.updateLastCheckin();
            // Reset note area
            document.getElementById('note-area').classList.add('hidden');
            document.getElementById('add-note-btn').style.display = '';
            document.getElementById('note-input').value = '';
        }
    }
    
    logEmotion(btn) {
        const emotion = btn.dataset.emotion;
        const energy = btn.dataset.energy;
        const valence = btn.dataset.valence;
        
        this.currentEntry = {
            id: Date.now(),
            emotion,
            energy,
            valence,
            timestamp: new Date().toISOString(),
            note: ''
        };
        
        this.entries.unshift(this.currentEntry);
        this.saveEntries();
        
        // Update confirmation screen
        document.getElementById('confirm-emoji').textContent = emotionEmojis[emotion];
        document.getElementById('confirm-message').textContent = `You're feeling ${emotion}.`;
        
        // Haptic feedback
        if ('vibrate' in navigator) navigator.vibrate([20, 30, 20]);
        
        this.showScreen('confirm-screen');
    }
    
    saveNote() {
        const note = document.getElementById('note-input').value.trim();
        if (note && this.currentEntry) {
            this.currentEntry.note = note;
            // Update in array
            const index = this.entries.findIndex(e => e.id === this.currentEntry.id);
            if (index !== -1) {
                this.entries[index].note = note;
                this.saveEntries();
            }
            
            document.getElementById('note-area').classList.add('hidden');
            document.getElementById('add-note-btn').textContent = '✓ Note saved';
            document.getElementById('add-note-btn').style.display = '';
        }
    }
    
    updateLastCheckin() {
        const last = this.entries[0];
        const el = document.getElementById('last-emotion');
        
        if (last) {
            const time = new Date(last.timestamp);
            const diff = Date.now() - time.getTime();
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const mins = Math.floor(diff / (1000 * 60));
            
            let timeStr;
            if (mins < 1) timeStr = 'just now';
            else if (mins < 60) timeStr = `${mins}m ago`;
            else if (hours < 24) timeStr = `${hours}h ago`;
            else timeStr = time.toLocaleDateString();
            
            el.textContent = `${emotionEmojis[last.emotion]} ${last.emotion} (${timeStr})`;
        } else {
            el.textContent = '—';
        }
    }
    
    showHistory() {
        this.renderHistory();
        this.updateStats();
        this.patternCanvas.setEntries(this.entries);
        this.showScreen('history-screen');
    }
    
    updateStats() {
        // Total
        document.getElementById('stat-total').textContent = this.entries.length;
        
        // Most frequent
        if (this.entries.length > 0) {
            const counts = {};
            this.entries.forEach(e => {
                counts[e.emotion] = (counts[e.emotion] || 0) + 1;
            });
            const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
            document.getElementById('stat-top').textContent = emotionEmojis[top[0]];
        } else {
            document.getElementById('stat-top').textContent = '—';
        }
        
        // Streak
        const today = new Date().toDateString();
        let streak = 0;
        let checkDate = new Date();
        
        while (true) {
            const dateStr = checkDate.toDateString();
            const hasEntry = this.entries.some(e => new Date(e.timestamp).toDateString() === dateStr);
            
            if (hasEntry) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        document.getElementById('stat-streak').textContent = streak;
    }
    
    renderHistory() {
        const list = document.getElementById('history-list');
        
        if (this.entries.length === 0) {
            list.innerHTML = '<p class="empty-history">No check-ins yet. Tap an emotion to begin.</p>';
            return;
        }
        
        // Group by day
        const grouped = {};
        this.entries.forEach(entry => {
            const date = new Date(entry.timestamp);
            const dayKey = date.toDateString();
            if (!grouped[dayKey]) grouped[dayKey] = [];
            grouped[dayKey].push(entry);
        });
        
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        list.innerHTML = Object.entries(grouped).slice(0, 7).map(([day, entries]) => {
            let label = day;
            if (day === today) label = 'Today';
            else if (day === yesterday) label = 'Yesterday';
            else label = new Date(day).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
            
            return `
                <div class="history-day">
                    <div class="history-day-label">${label}</div>
                    <div class="history-entries">
                        ${entries.map(e => `
                            <div class="history-entry">
                                <span class="history-emoji">${emotionEmojis[e.emotion]}</span>
                                <div class="history-details">
                                    <div class="history-emotion">${e.emotion}</div>
                                    <div class="history-time">${new Date(e.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    ${e.note ? `<div class="history-note">"${e.note}"</div>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    clearHistory() {
        if (confirm('Clear all check-in history?')) {
            this.entries = [];
            this.saveEntries();
            this.renderHistory();
            this.updateStats();
            this.patternCanvas.setEntries([]);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new PulseCanvas();
    new PulseApp();
});

// PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

