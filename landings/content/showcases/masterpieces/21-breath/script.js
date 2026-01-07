// THE BREATH - Emergency Calm Mobile App

// Breathing patterns (in seconds)
const breathingPatterns = {
    calm: {
        name: '4-7-8 Calm',
        inhale: 4,
        hold1: 7,
        exhale: 8,
        hold2: 0,
        description: 'The calming breath. Activates parasympathetic nervous system.'
    },
    box: {
        name: 'Box Breathing',
        inhale: 4,
        hold1: 4,
        exhale: 4,
        hold2: 4,
        description: 'Used by Navy SEALs to stay calm under pressure.'
    },
    energize: {
        name: '2-2 Energize',
        inhale: 2,
        hold1: 0,
        exhale: 2,
        hold2: 0,
        description: 'Quick energizing breath for an instant reset.'
    },
    sleep: {
        name: '4-8 Sleep',
        inhale: 4,
        hold1: 0,
        exhale: 8,
        hold2: 2,
        description: 'Extended exhale triggers the relaxation response.'
    }
};

const wisdoms = [
    "The breath is the bridge between mind and body.",
    "In the space between breaths, find stillness.",
    "You cannot control the waves, but you can learn to breathe.",
    "Every breath is a small death and a small rebirth.",
    "The present moment is only one breath away.",
    "Breath is the finest gift of nature. Be grateful for this wonderful gift.",
    "When you own your breath, nobody can steal your peace.",
    "Feelings come and go like clouds. The breath is your anchor."
];

// Background canvas
class BreathCanvas {
    constructor() {
        this.canvas = document.getElementById('breath-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.waves = [];
        
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
        this.waves = [];
        for (let i = 0; i < 5; i++) {
            this.waves.push({
                y: this.canvas.height * (0.3 + i * 0.15),
                amplitude: 20 + i * 10,
                frequency: 0.003 - i * 0.0005,
                phase: i * Math.PI / 3,
                speed: 0.02 + i * 0.005,
                opacity: 0.1 - i * 0.015
            });
        }
    }
    
    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = '#0a0a0f';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw flowing waves
        this.waves.forEach(wave => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height);
            
            for (let x = 0; x <= this.canvas.width; x += 5) {
                const y = wave.y + Math.sin(x * wave.frequency + this.time * wave.speed + wave.phase) * wave.amplitude;
                this.ctx.lineTo(x, y);
            }
            
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.closePath();
            
            this.ctx.fillStyle = `rgba(74, 124, 140, ${wave.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class BreathApp {
    constructor() {
        this.currentPattern = null;
        this.isBreathing = false;
        this.isPaused = true;
        this.currentPhase = 'idle';
        this.phaseTime = 0;
        this.cycleCount = 0;
        this.targetCycles = 5;
        this.animationFrame = null;
        this.lastTime = 0;
        
        // Settings
        this.hapticEnabled = true;
        this.soundEnabled = false;
        
        this.loadSettings();
        this.bindEvents();
    }
    
    loadSettings() {
        const settings = localStorage.getItem('breath-settings');
        if (settings) {
            const parsed = JSON.parse(settings);
            this.hapticEnabled = parsed.haptic ?? true;
            this.soundEnabled = parsed.sound ?? false;
            this.targetCycles = parsed.cycles ?? 5;
        }
        
        // Update UI
        document.getElementById('haptic-toggle').checked = this.hapticEnabled;
        document.getElementById('sound-toggle').checked = this.soundEnabled;
        document.getElementById('cycles-select').value = this.targetCycles;
    }
    
    saveSettings() {
        localStorage.setItem('breath-settings', JSON.stringify({
            haptic: this.hapticEnabled,
            sound: this.soundEnabled,
            cycles: this.targetCycles
        }));
    }
    
    bindEvents() {
        // Pattern selection
        document.querySelectorAll('.pattern-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pattern = btn.dataset.pattern;
                this.selectPattern(pattern);
            });
        });
        
        // Breath circle tap
        document.querySelector('.breath-circle').addEventListener('click', () => {
            if (this.isBreathing) {
                this.togglePause();
            } else {
                this.startBreathing();
            }
        });
        
        // Controls
        document.getElementById('back-btn').addEventListener('click', () => this.goHome());
        document.getElementById('pause-btn').addEventListener('click', () => this.togglePause());
        document.getElementById('settings-btn').addEventListener('click', () => this.openSettings());
        document.getElementById('close-settings').addEventListener('click', () => this.closeSettings());
        
        // Settings toggles
        document.getElementById('haptic-toggle').addEventListener('change', (e) => {
            this.hapticEnabled = e.target.checked;
            this.saveSettings();
        });
        
        document.getElementById('sound-toggle').addEventListener('change', (e) => {
            this.soundEnabled = e.target.checked;
            this.saveSettings();
        });
        
        document.getElementById('cycles-select').addEventListener('change', (e) => {
            this.targetCycles = parseInt(e.target.value);
            this.saveSettings();
        });
        
        // Complete screen
        document.getElementById('another-session').addEventListener('click', () => {
            this.resetSession();
            this.showScreen('breathing-screen');
        });
        
        document.getElementById('go-home').addEventListener('click', () => this.goHome());
    }
    
    selectPattern(patternKey) {
        this.currentPattern = breathingPatterns[patternKey];
        document.querySelector('.pattern-label').textContent = this.currentPattern.name.toUpperCase();
        this.showScreen('breathing-screen');
        this.resetSession();
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }
    
    startBreathing() {
        this.isBreathing = true;
        this.isPaused = false;
        this.currentPhase = 'inhale';
        this.phaseTime = 0;
        this.lastTime = performance.now();
        
        this.updatePauseButton();
        this.haptic('medium');
        this.animate();
    }
    
    togglePause() {
        if (!this.isBreathing) {
            this.startBreathing();
            return;
        }
        
        this.isPaused = !this.isPaused;
        this.updatePauseButton();
        
        if (!this.isPaused) {
            this.lastTime = performance.now();
            this.animate();
        }
        
        this.haptic('light');
    }
    
    updatePauseButton() {
        const playIcon = document.querySelector('.play-icon');
        const pauseIcon = document.querySelector('.pause-icon');
        
        if (this.isPaused) {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        } else {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
    }
    
    animate() {
        if (this.isPaused) return;
        
        const now = performance.now();
        const delta = (now - this.lastTime) / 1000;
        this.lastTime = now;
        
        this.phaseTime += delta;
        
        const pattern = this.currentPattern;
        let phaseDuration;
        let nextPhase;
        let instruction;
        
        switch (this.currentPhase) {
            case 'inhale':
                phaseDuration = pattern.inhale;
                nextPhase = pattern.hold1 > 0 ? 'hold1' : 'exhale';
                instruction = 'BREATHE IN';
                break;
            case 'hold1':
                phaseDuration = pattern.hold1;
                nextPhase = 'exhale';
                instruction = 'HOLD';
                break;
            case 'exhale':
                phaseDuration = pattern.exhale;
                nextPhase = pattern.hold2 > 0 ? 'hold2' : 'inhale';
                instruction = 'BREATHE OUT';
                break;
            case 'hold2':
                phaseDuration = pattern.hold2;
                nextPhase = 'inhale';
                instruction = 'HOLD';
                break;
        }
        
        // Phase transition
        if (this.phaseTime >= phaseDuration) {
            this.phaseTime = 0;
            
            // Complete cycle check
            if (this.currentPhase === 'exhale' && pattern.hold2 === 0 ||
                this.currentPhase === 'hold2') {
                this.cycleCount++;
                this.updateCycleCount();
                
                if (this.targetCycles > 0 && this.cycleCount >= this.targetCycles) {
                    this.completeSession();
                    return;
                }
            }
            
            this.currentPhase = nextPhase;
            this.haptic('light');
        }
        
        // Update visuals
        this.updateBreathCircle(phaseDuration);
        this.updateInstruction(instruction);
        this.updateProgress(phaseDuration);
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
    
    updateBreathCircle(phaseDuration) {
        const progress = this.phaseTime / phaseDuration;
        const circle = document.querySelector('.breath-circle');
        const inner = document.querySelector('.breath-inner');
        
        let scale;
        
        switch (this.currentPhase) {
            case 'inhale':
                scale = 1 + progress * 0.3;
                circle.classList.add('expanding');
                break;
            case 'exhale':
                scale = 1.3 - progress * 0.3;
                circle.classList.remove('expanding');
                break;
            default:
                scale = this.currentPhase === 'hold1' ? 1.3 : 1;
                break;
        }
        
        inner.style.transform = `scale(${scale})`;
    }
    
    updateInstruction(text) {
        document.querySelector('.breath-instruction').textContent = text;
    }
    
    updateProgress(phaseDuration) {
        const totalCycleTime = this.currentPattern.inhale + 
                             this.currentPattern.hold1 + 
                             this.currentPattern.exhale + 
                             this.currentPattern.hold2;
        
        let elapsed = 0;
        switch (this.currentPhase) {
            case 'inhale':
                elapsed = this.phaseTime;
                break;
            case 'hold1':
                elapsed = this.currentPattern.inhale + this.phaseTime;
                break;
            case 'exhale':
                elapsed = this.currentPattern.inhale + this.currentPattern.hold1 + this.phaseTime;
                break;
            case 'hold2':
                elapsed = this.currentPattern.inhale + this.currentPattern.hold1 + this.currentPattern.exhale + this.phaseTime;
                break;
        }
        
        const progress = elapsed / totalCycleTime;
        const circumference = 597; // 2 * PI * 95
        const offset = circumference * (1 - progress);
        
        document.querySelector('.progress-ring-fill').style.strokeDashoffset = offset;
    }
    
    updateCycleCount() {
        const display = this.targetCycles > 0 
            ? `Cycle ${this.cycleCount} of ${this.targetCycles}`
            : `Cycle ${this.cycleCount}`;
        document.querySelector('.cycle-count').textContent = display;
    }
    
    completeSession() {
        this.isBreathing = false;
        this.isPaused = true;
        cancelAnimationFrame(this.animationFrame);
        
        document.getElementById('completed-cycles').textContent = this.cycleCount;
        document.querySelector('.complete-wisdom').textContent = 
            `"${wisdoms[Math.floor(Math.random() * wisdoms.length)]}"`;
        
        this.haptic('heavy');
        this.showScreen('complete-screen');
    }
    
    resetSession() {
        this.isBreathing = false;
        this.isPaused = true;
        this.currentPhase = 'idle';
        this.phaseTime = 0;
        this.cycleCount = 0;
        
        cancelAnimationFrame(this.animationFrame);
        
        document.querySelector('.breath-inner').style.transform = 'scale(1)';
        document.querySelector('.breath-instruction').textContent = 'TAP TO START';
        document.querySelector('.progress-ring-fill').style.strokeDashoffset = 597;
        this.updateCycleCount();
        this.updatePauseButton();
    }
    
    goHome() {
        this.resetSession();
        this.showScreen('welcome-screen');
    }
    
    openSettings() {
        document.getElementById('settings-modal').classList.add('active');
    }
    
    closeSettings() {
        document.getElementById('settings-modal').classList.remove('active');
    }
    
    haptic(intensity) {
        if (!this.hapticEnabled) return;
        
        if ('vibrate' in navigator) {
            const durations = {
                light: 10,
                medium: 25,
                heavy: 50
            };
            navigator.vibrate(durations[intensity] || 15);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new BreathCanvas();
    new BreathApp();
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed, app still works
        });
    });
}

