// SURFACE - Who Am I Really?
// Abstract self-form emerging from reflection

class SurfaceExperience {
    constructor() {
        this.canvas = document.getElementById('surface');
        this.ctx = this.canvas.getContext('2d');
        this.phase = 'intro';
        this.answers = {};
        this.currentQuestion = 0;
        this.formPoints = [];
        this.formRevealed = false;
        this.waterRipples = [];
        
        this.questions = [
            {
                text: "When you're alone, do you feel...",
                options: ["Peaceful", "Restless", "Creative", "Reflective"],
                trait: 'solitude'
            },
            {
                text: "In a crisis, you tend to...",
                options: ["Analyze", "Act", "Feel", "Wait"],
                trait: 'crisis'
            },
            {
                text: "Your thoughts flow like...",
                options: ["A river", "Lightning", "Fog", "Waves"],
                trait: 'mind'
            },
            {
                text: "Others see you as...",
                options: ["Warm", "Intense", "Calm", "Complex"],
                trait: 'perceived'
            }
        ];
        
        this.resize();
        this.bindEvents();
        this.showQuestions();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        // Create water ripples on mouse move
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.1) {
                this.createRipple(e.clientX, e.clientY);
            }
        });
    }

    showQuestions() {
        const container = document.getElementById('questions');
        container.innerHTML = '';
        
        this.questions.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question';
            questionEl.style.animationDelay = `${5 + index * 1.5}s`;
            
            questionEl.innerHTML = `
                <p class="question-text">${q.text}</p>
                <div class="options">
                    ${q.options.map((opt, i) => 
                        `<button class="option" data-question="${index}" data-option="${i}">${opt}</button>`
                    ).join('')}
                </div>
            `;
            
            container.appendChild(questionEl);
        });
        
        // Bind option clicks
        container.querySelectorAll('.option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const qIndex = parseInt(e.target.dataset.question);
                const oIndex = parseInt(e.target.dataset.option);
                this.answerQuestion(qIndex, oIndex, e.target);
            });
        });
    }

    answerQuestion(questionIndex, optionIndex, element) {
        // Mark as selected
        const question = element.closest('.question');
        question.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        element.classList.add('selected');
        
        // Store answer
        this.answers[this.questions[questionIndex].trait] = optionIndex;
        
        // Create ripple effect
        const rect = element.getBoundingClientRect();
        this.createRipple(rect.left + rect.width / 2, rect.top + rect.height / 2);
        
        // Check if all answered
        if (Object.keys(this.answers).length === this.questions.length) {
            setTimeout(() => this.revealForm(), 1000);
        }
    }

    createRipple(x, y) {
        this.waterRipples.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: 100 + Math.random() * 100,
            opacity: 0.5
        });
    }

    revealForm() {
        this.formRevealed = true;
        this.transitionTo('forming');
        this.generateForm();
        
        setTimeout(() => {
            this.transitionTo('truth');
        }, 6000);
    }

    generateForm() {
        // Generate abstract shape based on answers
        const traits = {
            solitude: this.answers.solitude || 0,
            crisis: this.answers.crisis || 0,
            mind: this.answers.mind || 0,
            perceived: this.answers.perceived || 0
        };
        
        // Create form points based on traits
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const baseRadius = 80;
        const points = 12;
        
        this.formPoints = [];
        
        for (let i = 0; i < points; i++) {
            const angle = (Math.PI * 2 / points) * i;
            
            // Modify radius based on traits
            let radiusMultiplier = 1;
            
            // Solitude affects upper portion
            if (angle > -Math.PI && angle < 0) {
                radiusMultiplier += (traits.solitude - 1.5) * 0.2;
            }
            
            // Crisis affects right side
            if (angle > -Math.PI / 2 && angle < Math.PI / 2) {
                radiusMultiplier += (traits.crisis - 1.5) * 0.15;
            }
            
            // Mind affects overall flow
            radiusMultiplier += Math.sin(i * traits.mind) * 0.2;
            
            // Perceived affects symmetry
            const asymmetry = (traits.perceived - 1.5) * 0.1;
            if (i % 2 === 0) radiusMultiplier += asymmetry;
            
            const radius = baseRadius * (0.8 + radiusMultiplier * 0.4);
            
            this.formPoints.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                baseX: centerX + Math.cos(angle) * radius,
                baseY: centerY + Math.sin(angle) * radius,
                angle: angle,
                breathPhase: Math.random() * Math.PI * 2
            });
        }
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'forming') {
            document.getElementById('phase-forming').classList.add('active');
        } else if (newPhase === 'truth') {
            document.getElementById('phase-truth').classList.add('active');
        }
    }

    animate() {
        // Water-like background
        this.ctx.fillStyle = 'rgba(10, 10, 16, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw water ripples
        for (let i = this.waterRipples.length - 1; i >= 0; i--) {
            const r = this.waterRipples[i];
            r.radius += 2;
            r.opacity -= 0.01;
            
            if (r.opacity <= 0) {
                this.waterRipples.splice(i, 1);
                continue;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(184, 196, 208, ${r.opacity * 0.3})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        // Draw form if revealed
        if (this.formRevealed && this.formPoints.length > 0) {
            this.drawForm();
        }

        // Subtle water surface effect
        this.drawWaterSurface();

        requestAnimationFrame(() => this.animate());
    }

    drawForm() {
        const time = Date.now() * 0.001;
        
        // Update points with breathing motion
        for (const point of this.formPoints) {
            point.breathPhase += 0.02;
            const breathOffset = Math.sin(point.breathPhase) * 5;
            point.x = point.baseX + Math.cos(point.angle) * breathOffset;
            point.y = point.baseY + Math.sin(point.angle) * breathOffset;
        }
        
        // Draw outer glow
        this.ctx.beginPath();
        this.ctx.moveTo(this.formPoints[0].x, this.formPoints[0].y);
        
        for (let i = 1; i <= this.formPoints.length; i++) {
            const p = this.formPoints[i % this.formPoints.length];
            const prev = this.formPoints[(i - 1) % this.formPoints.length];
            const cpX = (prev.x + p.x) / 2;
            const cpY = (prev.y + p.y) / 2;
            this.ctx.quadraticCurveTo(prev.x, prev.y, cpX, cpY);
        }
        
        this.ctx.closePath();
        
        // Gradient fill
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const gradient = this.ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, 120
        );
        gradient.addColorStop(0, 'rgba(200, 210, 230, 0.4)');
        gradient.addColorStop(0.5, 'rgba(184, 196, 208, 0.2)');
        gradient.addColorStop(1, 'rgba(150, 160, 180, 0.05)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Outer stroke
        this.ctx.strokeStyle = 'rgba(184, 196, 208, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Inner reflections
        this.ctx.beginPath();
        for (let i = 0; i < this.formPoints.length; i += 2) {
            const p = this.formPoints[i];
            const offset = Math.sin(time + i) * 10;
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(p.x + offset, p.y + offset);
        }
        this.ctx.strokeStyle = 'rgba(200, 210, 230, 0.1)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }

    drawWaterSurface() {
        const time = Date.now() * 0.0005;
        
        // Horizontal reflection lines
        for (let y = 0; y < this.height; y += 50) {
            const wave = Math.sin(time + y * 0.01) * 20;
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, y + wave);
            
            for (let x = 0; x < this.width; x += 50) {
                const waveX = Math.sin(time * 2 + x * 0.02) * 5;
                this.ctx.lineTo(x, y + wave + waveX);
            }
            
            this.ctx.strokeStyle = 'rgba(184, 196, 208, 0.02)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    new SurfaceExperience();
});

