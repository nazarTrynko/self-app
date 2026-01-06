// THE SILENCE - Strategic Silence Trainer
// Your greatest power is what you don't say

// Insights for completion
const silenceInsights = {
    short: [
        "Even 10 seconds of held silence is rare in modern life. You've taken the first step toward mastery.",
        "The breath pause is the foundation. From here, longer silences become possible.",
        "Notice how even a brief silence changed your inner state? That's the power beginning to emerge."
    ],
    medium: [
        "Thirty seconds of silence reveals how noisy your default state is. The discomfort is the signal of growth.",
        "In that silence, your mind produced a thousand urges to fill it. You resisted them all. That's power.",
        "A minute of silence is longer than most people experience in a week. You're building rare capacity."
    ],
    long: [
        "Two minutes of held silence puts you in the top 1% of self-regulated minds. What did you see in that space?",
        "The deep silence reveals what the noise hides. What did you notice that you usually miss?",
        "At this level, you're not just practicing—you're becoming. Silence is now part of your toolkit."
    ],
    master: [
        "Five minutes of silence is a meditation. You've touched something most people flee from their entire lives.",
        "In extended silence, the self that needs constant validation dissolves. What remains is pure presence.",
        "You've demonstrated mastery over the most fundamental human anxiety: the fear of empty space. You are ready."
    ]
};

// Silence canvas - minimal, still, sparse
class SilenceCanvas {
    constructor() {
        this.canvas = document.getElementById('silence-canvas');
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
    }

    init() {
        this.particles = [];
        const count = 3; // Very few, for silence
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 100 + Math.random() * 200,
                phase: Math.random() * Math.PI * 2,
                speed: 0.1 + Math.random() * 0.2
            });
        }
    }

    animate() {
        this.time += 0.003; // Very slow
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            const pulse = Math.sin(this.time * p.speed + p.phase) * 0.3 + 0.7;
            
            // Very subtle presence
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * pulse);
            gradient.addColorStop(0, `rgba(30, 58, 58, ${0.03 * pulse})`);
            gradient.addColorStop(0.5, `rgba(46, 74, 74, ${0.02 * pulse})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Almost imperceptible drift
            p.x += Math.sin(this.time + p.phase) * 0.1;
            p.y += Math.cos(this.time * 0.7 + p.phase) * 0.1;
            
            // Wrap
            if (p.x < -p.size) p.x = this.canvas.width + p.size;
            if (p.x > this.canvas.width + p.size) p.x = -p.size;
            if (p.y < -p.size) p.y = this.canvas.height + p.size;
            if (p.y > this.canvas.height + p.size) p.y = -p.size;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Silence trainer logic
class SilenceExperience {
    constructor() {
        this.targetSeconds = 0;
        this.currentSeconds = 0;
        this.isActive = false;
        this.timer = null;
        this.stats = this.loadStats();
        
        this.bindEvents();
        this.updateStats();
    }

    loadStats() {
        const stored = localStorage.getItem('silence-stats');
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            totalSessions: 0,
            totalSeconds: 0,
            longestHold: 0,
            lastDate: null,
            streak: 0
        };
    }

    saveStats() {
        localStorage.setItem('silence-stats', JSON.stringify(this.stats));
    }

    updateStats() {
        document.getElementById('total-sessions').textContent = this.stats.totalSessions;
        document.getElementById('total-seconds').textContent = this.stats.totalSeconds;
        document.getElementById('longest-hold').textContent = this.stats.longestHold + 's';
        document.getElementById('current-streak').textContent = this.stats.streak;
    }

    bindEvents() {
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectLevel(e));
        });

        document.getElementById('abort-btn')?.addEventListener('click', () => this.abort());
        document.getElementById('again-btn')?.addEventListener('click', () => this.reset());
    }

    selectLevel(e) {
        const seconds = parseInt(e.target.dataset.seconds);
        
        // Update button states
        document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        this.targetSeconds = seconds;
        this.startSilence();
    }

    startSilence() {
        this.currentSeconds = 0;
        this.isActive = true;
        
        // Update UI
        document.getElementById('instructions').style.display = 'none';
        document.querySelector('.silence-levels').style.display = 'none';
        document.getElementById('active-state').style.display = 'block';
        document.getElementById('complete-state').style.display = 'none';
        
        // Update prompt based on duration
        const prompts = [
            "Hold the silence. Notice the discomfort. You are stronger than the urge to fill it.",
            "Breathe. The silence is not empty—it is full of what you usually miss.",
            "Every second you hold this space, you grow. Don't break. Don't check. Just be.",
            "The mind will rebel. Let it. You are not your thoughts. You are what watches them.",
            "In this silence, notice: what arises? What wants to escape? Stay with it."
        ];
        document.getElementById('active-prompt').textContent = prompts[Math.floor(Math.random() * prompts.length)];
        
        // Start timer
        this.timer = setInterval(() => this.tick(), 100);
    }

    tick() {
        if (!this.isActive) return;
        
        this.currentSeconds += 0.1;
        
        // Update display
        document.getElementById('timer-seconds').textContent = Math.floor(this.currentSeconds);
        
        // Update ring progress
        const progress = Math.min(this.currentSeconds / this.targetSeconds, 1);
        const circumference = 2 * Math.PI * 90;
        const offset = circumference * (1 - progress);
        document.getElementById('ring-progress').style.strokeDashoffset = offset;
        
        // Check completion
        if (this.currentSeconds >= this.targetSeconds) {
            this.complete(true);
        }
    }

    abort() {
        this.complete(false);
    }

    complete(success) {
        this.isActive = false;
        clearInterval(this.timer);
        
        const heldTime = Math.floor(this.currentSeconds);
        
        // Update stats
        this.stats.totalSessions++;
        this.stats.totalSeconds += heldTime;
        if (heldTime > this.stats.longestHold) {
            this.stats.longestHold = heldTime;
        }
        
        // Update streak
        const today = new Date().toDateString();
        if (this.stats.lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (this.stats.lastDate === yesterday.toDateString()) {
                this.stats.streak++;
            } else {
                this.stats.streak = 1;
            }
            this.stats.lastDate = today;
        }
        
        this.saveStats();
        this.updateStats();
        
        // Show completion
        document.getElementById('active-state').style.display = 'none';
        document.getElementById('complete-state').style.display = 'block';
        document.getElementById('held-time').textContent = heldTime;
        
        // Generate insight
        let insight;
        if (heldTime < 20) {
            insight = silenceInsights.short[Math.floor(Math.random() * silenceInsights.short.length)];
        } else if (heldTime < 90) {
            insight = silenceInsights.medium[Math.floor(Math.random() * silenceInsights.medium.length)];
        } else if (heldTime < 180) {
            insight = silenceInsights.long[Math.floor(Math.random() * silenceInsights.long.length)];
        } else {
            insight = silenceInsights.master[Math.floor(Math.random() * silenceInsights.master.length)];
        }
        
        if (!success) {
            insight = "You broke the silence. That's information too. What was the urge that overtook you? Name it, and next time, you'll be ready for it.";
        }
        
        document.getElementById('complete-insight').textContent = insight;
    }

    reset() {
        this.currentSeconds = 0;
        this.targetSeconds = 0;
        
        // Reset UI
        document.getElementById('timer-seconds').textContent = '0';
        document.getElementById('ring-progress').style.strokeDashoffset = 565.48;
        document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById('complete-state').style.display = 'none';
        document.getElementById('active-state').style.display = 'none';
        document.getElementById('instructions').style.display = 'block';
        document.querySelector('.silence-levels').style.display = 'block';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SilenceCanvas();
    new SilenceExperience();
});

