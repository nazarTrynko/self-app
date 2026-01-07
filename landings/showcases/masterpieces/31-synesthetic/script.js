// SYNESTHETIC PERCEPTION - Cross-modal Sensory Translation
// Emergent Intelligence Category - Showcase 31

class SynestheticBackground {
    constructor() {
        this.canvas = document.getElementById('synth-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.waves = [];
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
        this.waves = [];
        for (let i = 0; i < 5; i++) {
            this.waves.push({
                y: this.canvas.height * (0.2 + i * 0.15),
                amplitude: 30 + i * 10,
                frequency: 0.01 + i * 0.005,
                phase: i * Math.PI / 3,
                hue: i * 60
            });
        }
    }

    update() {
        this.time += 0.016;
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.waves.forEach(wave => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, wave.y);
            
            for (let x = 0; x <= this.canvas.width; x += 5) {
                const y = wave.y + Math.sin(x * wave.frequency + this.time + wave.phase) * wave.amplitude;
                this.ctx.lineTo(x, y);
            }
            
            this.ctx.strokeStyle = `hsla(${wave.hue + this.time * 10}, 70%, 50%, 0.15)`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Chromesthesia Visualization (Sound → Color)
class Chromesthesia {
    constructor() {
        this.canvas = document.getElementById('chromesthesia-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.soundBlobs = [];
        this.time = 0;
        this.audioContext = null;
        this.mode = 'chromesthesia';
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.bindEvents();
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    bindEvents() {
        this.canvas.addEventListener('click', (e) => this.createSoundBlob(e));
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.createSoundBlob(touch);
        });

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.mode = btn.dataset.mode;
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    createSoundBlob(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Map position to frequency and color
        const normalizedX = x / this.canvas.width;
        const normalizedY = 1 - (y / this.canvas.height);
        
        // X position = pitch (left = low/red, right = high/violet)
        const frequency = 100 + normalizedX * 800;
        const hue = normalizedX * 270; // Red to Violet
        
        // Y position = amplitude/brightness
        const amplitude = 0.3 + normalizedY * 0.7;
        const size = 30 + normalizedY * 70;
        
        this.soundBlobs.push({
            x, y,
            radius: size,
            maxRadius: size * 3,
            hue,
            saturation: 80,
            lightness: 40 + amplitude * 30,
            opacity: amplitude,
            frequency,
            age: 0
        });
        
        // Play sound
        this.playTone(frequency, amplitude);
    }

    playTone(frequency, amplitude) {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(amplitude * 0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    update() {
        this.time += 0.016;
        
        this.soundBlobs.forEach(blob => {
            blob.age += 0.016;
            blob.radius = blob.maxRadius * (1 - Math.exp(-blob.age * 3));
            blob.opacity = Math.max(0, 1 - blob.age * 2);
        });
        
        this.soundBlobs = this.soundBlobs.filter(b => b.opacity > 0);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(18, 18, 31, 0.15)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.soundBlobs.forEach(blob => {
            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                blob.x, blob.y, 0,
                blob.x, blob.y, blob.radius
            );
            
            gradient.addColorStop(0, `hsla(${blob.hue}, ${blob.saturation}%, ${blob.lightness}%, ${blob.opacity * 0.8})`);
            gradient.addColorStop(0.5, `hsla(${blob.hue}, ${blob.saturation}%, ${blob.lightness}%, ${blob.opacity * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Inner core
            this.ctx.beginPath();
            this.ctx.arc(blob.x, blob.y, blob.radius * 0.2 * blob.opacity, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${blob.hue}, ${blob.saturation}%, ${blob.lightness + 20}%, ${blob.opacity})`;
            this.ctx.fill();
        });

        // Draw frequency spectrum hint
        const spectrumY = this.canvas.height - 30;
        const spectrumGradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        spectrumGradient.addColorStop(0, 'hsla(0, 70%, 50%, 0.3)');
        spectrumGradient.addColorStop(0.33, 'hsla(60, 70%, 50%, 0.3)');
        spectrumGradient.addColorStop(0.66, 'hsla(180, 70%, 50%, 0.3)');
        spectrumGradient.addColorStop(1, 'hsla(270, 70%, 50%, 0.3)');
        
        this.ctx.fillStyle = spectrumGradient;
        this.ctx.fillRect(20, spectrumY, this.canvas.width - 40, 10);
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class SynestheticApp {
    constructor() {
        this.bg = new SynestheticBackground();
        this.chromesthesia = new Chromesthesia();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SynestheticApp();
});

