// TIDE - Am I Alone In What I Feel?
// Large-scale emotional wave ocean

class TideExperience {
    constructor() {
        this.canvas = document.getElementById('tide');
        this.ctx = this.canvas.getContext('2d');
        this.phase = 'intro';
        this.emotion = null;
        this.emotionHue = 220;
        this.zoom = 1;
        this.targetZoom = 1;
        this.maxZoom = 50;
        this.waves = [];
        this.yourWave = null;
        this.waveCount = 1;
        this.started = false;
        
        this.resize();
        this.bindEvents();
        this.createOcean();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.querySelectorAll('.emotion').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.emotion = e.target.dataset.emotion;
                this.emotionHue = parseInt(e.target.dataset.hue);
                this.startJourney();
            });
        });

        // Scroll to zoom out
        document.addEventListener('wheel', (e) => {
            if (this.started) {
                e.preventDefault();
                this.targetZoom = Math.min(this.maxZoom, this.targetZoom + e.deltaY * 0.02);
                this.targetZoom = Math.max(1, this.targetZoom);
                this.checkPhaseTransition();
            }
        }, { passive: false });
    }

    createOcean() {
        // Create background wave field
        const gridSize = 30;
        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                // Skip center area initially
                const dx = x - gridSize / 2;
                const dy = y - gridSize / 2;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 3) continue;
                
                this.waves.push({
                    gridX: x,
                    gridY: y,
                    x: (x / gridSize) * this.width * 3 - this.width,
                    y: (y / gridSize) * this.height * 3 - this.height,
                    phase: Math.random() * Math.PI * 2,
                    amplitude: 0.3 + Math.random() * 0.7,
                    frequency: 0.5 + Math.random() * 0.5,
                    hue: 200 + Math.random() * 60,
                    isYou: false
                });
            }
        }
    }

    startJourney() {
        this.started = true;
        
        // Create your wave in the center
        this.yourWave = {
            x: this.width / 2,
            y: this.height / 2,
            phase: 0,
            amplitude: 1,
            frequency: 0.8,
            hue: this.emotionHue,
            isYou: true
        };
        
        document.getElementById('wave-count').classList.add('visible');
        this.transitionTo('wave');
    }

    checkPhaseTransition() {
        if (this.phase === 'wave' && this.zoom > 10) {
            this.transitionTo('ocean');
            // Start counting similar waves
            this.startCounting();
        }
    }

    startCounting() {
        // Simulate finding similar waves
        const interval = setInterval(() => {
            if (this.waveCount < 1000000) {
                const increment = Math.floor(this.waveCount * 0.3) + 1;
                this.waveCount = Math.min(1000000, this.waveCount + increment);
                this.updateCounter();
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    updateCounter() {
        const countEl = document.querySelector('.wave-count .count');
        if (countEl) {
            if (this.waveCount >= 1000000) {
                countEl.textContent = '∞';
            } else if (this.waveCount >= 1000) {
                countEl.textContent = Math.floor(this.waveCount / 1000) + 'K+';
            } else {
                countEl.textContent = this.waveCount.toLocaleString();
            }
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'wave') {
            document.getElementById('phase-wave').classList.add('active');
        } else if (newPhase === 'ocean') {
            document.getElementById('phase-ocean').classList.add('active');
        }
    }

    animate() {
        const time = Date.now() * 0.001;
        
        // Smooth zoom
        this.zoom += (this.targetZoom - this.zoom) * 0.05;
        
        // Deep ocean background
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, '#030810');
        gradient.addColorStop(1, '#051525');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw ocean waves
        this.drawOcean(time);

        // Draw your wave if started
        if (this.yourWave) {
            this.drawYourWave(time);
        }

        requestAnimationFrame(() => this.animate());
    }

    drawOcean(time) {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        for (const wave of this.waves) {
            // Transform position based on zoom
            const dx = wave.x - centerX;
            const dy = wave.y - centerY;
            const screenX = centerX + dx / this.zoom;
            const screenY = centerY + dy / this.zoom;
            
            // Skip if off screen
            if (screenX < -50 || screenX > this.width + 50 ||
                screenY < -50 || screenY > this.height + 50) continue;
            
            // Calculate wave motion
            const waveHeight = Math.sin(time * wave.frequency + wave.phase) * wave.amplitude;
            const size = Math.max(2, 30 / this.zoom);
            
            // Draw wave
            this.ctx.beginPath();
            this.ctx.arc(screenX, screenY + waveHeight * 5, size, 0, Math.PI * 2);
            
            const alpha = Math.max(0.1, 0.4 / Math.sqrt(this.zoom));
            this.ctx.fillStyle = `hsla(${wave.hue}, 50%, 50%, ${alpha})`;
            this.ctx.fill();
        }
        
        // Draw wave connections at high zoom
        if (this.zoom > 5) {
            this.drawCurrents(time);
        }
    }

    drawCurrents(time) {
        // Draw flowing currents connecting waves
        this.ctx.beginPath();
        
        for (let y = 0; y < this.height; y += 50) {
            const wave = Math.sin(time * 0.5 + y * 0.01) * 30;
            
            this.ctx.moveTo(0, y);
            for (let x = 0; x < this.width; x += 30) {
                const waveX = Math.sin(time + x * 0.02 + y * 0.01) * 10;
                this.ctx.lineTo(x, y + wave + waveX);
            }
        }
        
        this.ctx.strokeStyle = `rgba(58, 96, 144, ${0.1 / this.zoom})`;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }

    drawYourWave(time) {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        // Your wave stays centered but shrinks with zoom
        const size = Math.max(5, 50 / this.zoom);
        const waveHeight = Math.sin(time * this.yourWave.frequency) * 10 / this.zoom;
        
        // Glow
        const glowSize = size * 3;
        const gradient = this.ctx.createRadialGradient(
            centerX, centerY + waveHeight, 0,
            centerX, centerY + waveHeight, glowSize
        );
        gradient.addColorStop(0, `hsla(${this.yourWave.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${this.yourWave.hue}, 60%, 50%, 0.3)`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY + waveHeight, glowSize, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Core
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY + waveHeight, size, 0, Math.PI * 2);
        this.ctx.fillStyle = `hsla(${this.yourWave.hue}, 60%, 70%, 1)`;
        this.ctx.fill();
        
        // Label at close zoom
        if (this.zoom < 5) {
            this.ctx.font = `${14 / this.zoom}px Cormorant Garamond`;
            this.ctx.fillStyle = `rgba(160, 192, 224, ${1 / this.zoom})`;
            this.ctx.textAlign = 'center';
            this.ctx.fillText('You', centerX, centerY + waveHeight + size + 20 / this.zoom);
        }
        
        // Show similar waves emerging as we zoom out
        if (this.zoom > 2) {
            this.drawSimilarWaves(time);
        }
    }

    drawSimilarWaves(time) {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const count = Math.min(50, Math.floor(this.zoom * 3));
        
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 / count) * i + time * 0.1;
            const dist = 100 + i * 20;
            const x = centerX + Math.cos(angle) * dist / this.zoom;
            const y = centerY + Math.sin(angle) * dist / this.zoom;
            
            const waveHeight = Math.sin(time * 0.8 + i) * 5 / this.zoom;
            const size = Math.max(2, 20 / this.zoom);
            
            this.ctx.beginPath();
            this.ctx.arc(x, y + waveHeight, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${this.yourWave.hue + (Math.random() - 0.5) * 30}, 50%, 50%, 0.5)`;
            this.ctx.fill();
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    new TideExperience();
});

