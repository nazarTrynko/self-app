// THE BRIDGE - Temporal Self Connector
// Your future self is waiting. What will you say to them?

// Bridge canvas - time/connection visualization
class BridgeCanvas {
    constructor() {
        this.canvas = document.getElementById('bridge-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.bridges = [];
        
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
        this.bridges = [];
        const count = 3;
        
        for (let i = 0; i < count; i++) {
            this.bridges.push({
                y: (i + 1) * (this.canvas.height / (count + 1)),
                phase: Math.random() * Math.PI * 2,
                speed: 0.3 + Math.random() * 0.3
            });
        }
    }

    animate() {
        this.time += 0.008;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.bridges.forEach(b => {
            const wave = Math.sin(this.time * b.speed + b.phase) * 30;
            const y = b.y + wave;
            
            // Bridge line
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            
            // Curved bridge
            const midX = this.canvas.width / 2;
            const cpY = y - 50 + Math.sin(this.time + b.phase) * 20;
            
            this.ctx.quadraticCurveTo(midX, cpY, this.canvas.width, y);
            this.ctx.strokeStyle = 'rgba(62, 74, 94, 0.1)';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Traveling points (messages across time)
            const numPoints = 3;
            for (let i = 0; i < numPoints; i++) {
                const progress = ((this.time * 0.1 + i / numPoints + b.phase / Math.PI) % 1);
                const px = progress * this.canvas.width;
                const t = progress;
                const py = y - 50 * (4 * t * (1 - t)) + Math.sin(this.time * b.speed + b.phase) * 30 * (1 - 2 * Math.abs(t - 0.5));
                
                this.ctx.beginPath();
                this.ctx.arc(px, py + 50 * (4 * t * (1 - t)), 4, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(106, 122, 154, ${0.3 + 0.3 * Math.sin(progress * Math.PI)})`;
                this.ctx.fill();
            }
            
            // End points (past and future selves)
            this.ctx.beginPath();
            this.ctx.arc(30, y, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(62, 74, 94, 0.2)';
            this.ctx.fill();
            
            this.ctx.beginPath();
            this.ctx.arc(this.canvas.width - 30, y, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(106, 122, 154, 0.2)';
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Time visualization canvas
class TimeCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.days = 0;
        this.time = 0;
        this.animating = false;
    }

    setDays(days) {
        this.days = days;
        this.resize();
        this.animating = true;
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.offsetWidth, 400);
        this.canvas.width = size;
        this.canvas.height = size;
    }

    animate() {
        if (!this.animating) return;
        
        this.time += 0.015;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        // Timeline
        const startX = width * 0.15;
        const endX = width * 0.85;
        const lineY = cy;
        
        // Base line
        this.ctx.beginPath();
        this.ctx.moveTo(startX, lineY);
        this.ctx.lineTo(endX, lineY);
        this.ctx.strokeStyle = 'rgba(62, 74, 94, 0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // NOW marker
        this.ctx.beginPath();
        this.ctx.arc(startX, lineY, 12, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(62, 74, 94, 0.4)';
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(136, 136, 136, 0.7)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NOW', startX, lineY + 30);
        
        // FUTURE marker
        const pulse = Math.sin(this.time * 2) * 0.2 + 0.8;
        this.ctx.beginPath();
        this.ctx.arc(endX, lineY, 12 * pulse, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(106, 122, 154, ${0.5 * pulse})`;
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(106, 122, 154, 0.8)';
        this.ctx.fillText('FUTURE', endX, lineY + 30);
        
        // Traveling message
        const progress = (this.time * 0.05) % 1;
        const msgX = startX + (endX - startX) * progress;
        
        this.ctx.beginPath();
        this.ctx.arc(msgX, lineY, 6, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(106, 122, 154, 0.7)';
        this.ctx.fill();
        
        // Trail
        for (let i = 1; i <= 5; i++) {
            const trailProgress = ((this.time * 0.05) - i * 0.02) % 1;
            if (trailProgress > 0) {
                const tx = startX + (endX - startX) * trailProgress;
                this.ctx.beginPath();
                this.ctx.arc(tx, lineY, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(106, 122, 154, ${0.3 - i * 0.05})`;
                this.ctx.fill();
            }
        }
        
        // Days count
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.7)';
        this.ctx.font = '14px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${this.days} DAYS`, cx, lineY - 50);
        
        // Envelope icon
        this.ctx.strokeStyle = 'rgba(106, 122, 154, 0.5)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.rect(cx - 15, lineY + 50, 30, 20);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(cx - 15, lineY + 50);
        this.ctx.lineTo(cx, lineY + 62);
        this.ctx.lineTo(cx + 15, lineY + 50);
        this.ctx.stroke();
    }
}

// Bridge experience logic
class BridgeExperience {
    constructor() {
        this.selectedDays = 0;
        this.letters = this.loadLetters();
        this.timeCanvas = new TimeCanvas('time-canvas');
        
        this.bindEvents();
        this.checkArrivedLetters();
    }

    loadLetters() {
        const stored = localStorage.getItem('bridge-letters');
        return stored ? JSON.parse(stored) : [];
    }

    saveLetters() {
        localStorage.setItem('bridge-letters', JSON.stringify(this.letters));
    }

    bindEvents() {
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectTime(e));
        });

        document.getElementById('seal-btn')?.addEventListener('click', () => this.sealLetter());
        document.getElementById('new-btn')?.addEventListener('click', () => this.reset());
    }

    selectTime(e) {
        const days = parseInt(e.target.dataset.days);
        
        // Update button states
        document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        this.selectedDays = days;
        
        // Show composer
        document.getElementById('message-composer').style.display = 'block';
    }

    sealLetter() {
        const remember = document.getElementById('message-remember').value.trim();
        const hopes = document.getElementById('message-hopes').value.trim();
        const question = document.getElementById('message-question').value.trim();
        
        if (remember.length < 10 && hopes.length < 10 && question.length < 5) {
            alert('Please write at least one meaningful message to your future self.');
            return;
        }
        
        // Create letter
        const now = new Date();
        const deliveryDate = new Date(now.getTime() + this.selectedDays * 24 * 60 * 60 * 1000);
        
        const letter = {
            id: Date.now(),
            created: now.toISOString(),
            delivery: deliveryDate.toISOString(),
            days: this.selectedDays,
            remember: remember,
            hopes: hopes,
            question: question,
            arrived: false
        };
        
        this.letters.push(letter);
        this.saveLetters();
        
        // Show sealed state
        document.querySelector('.bridge-builder').style.display = 'none';
        const sealedSection = document.getElementById('letter-sealed');
        sealedSection.style.display = 'block';
        
        // Update display
        document.getElementById('delivery-date').textContent = deliveryDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('days-until').textContent = this.selectedDays;
        
        // Message preview
        const preview = remember || hopes || question;
        document.getElementById('message-preview').textContent = 
            preview.substring(0, 150) + (preview.length > 150 ? '...' : '');
        
        // Show past letters
        this.renderPastLetters();
        
        // Start time visualization
        this.timeCanvas.setDays(this.selectedDays);
        
        // Scroll
        sealedSection.scrollIntoView({ behavior: 'smooth' });
    }

    checkArrivedLetters() {
        const now = new Date();
        let updated = false;
        
        this.letters.forEach(letter => {
            if (!letter.arrived && new Date(letter.delivery) <= now) {
                letter.arrived = true;
                updated = true;
            }
        });
        
        if (updated) {
            this.saveLetters();
        }
    }

    renderPastLetters() {
        const list = document.getElementById('letters-list');
        if (!list) return;
        
        const arrivedLetters = this.letters.filter(l => l.arrived);
        const pendingLetters = this.letters.filter(l => !l.arrived);
        
        if (arrivedLetters.length === 0 && pendingLetters.length <= 1) {
            list.innerHTML = '<p class="no-letters">No letters from your past have arrived yet.</p>';
            return;
        }
        
        let html = '';
        
        // Arrived letters (can be read)
        arrivedLetters.forEach(letter => {
            const created = new Date(letter.created).toLocaleDateString();
            html += `
                <div class="past-letter arrived">
                    <p class="letter-date">Written: ${created} • ARRIVED</p>
                    <p class="letter-excerpt">${letter.remember || letter.hopes || letter.question}</p>
                </div>
            `;
        });
        
        // Pending letters (sealed)
        pendingLetters.slice(0, -1).forEach(letter => { // Exclude the one just written
            const delivery = new Date(letter.delivery).toLocaleDateString();
            html += `
                <div class="past-letter">
                    <p class="letter-date">Arrives: ${delivery} • SEALED</p>
                    <p class="letter-excerpt">[This letter has not yet arrived]</p>
                </div>
            `;
        });
        
        list.innerHTML = html || '<p class="no-letters">No letters from your past yet.</p>';
    }

    reset() {
        // Clear form
        document.getElementById('message-remember').value = '';
        document.getElementById('message-hopes').value = '';
        document.getElementById('message-question').value = '';
        document.getElementById('message-composer').style.display = 'none';
        document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
        
        this.selectedDays = 0;
        
        // Show builder
        document.getElementById('letter-sealed').style.display = 'none';
        document.querySelector('.bridge-builder').style.display = 'block';
        document.querySelector('.bridge-builder').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new BridgeCanvas();
    new BridgeExperience();
});

