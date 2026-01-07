// THE ALCHEMY - Emotional Forging
// Design emotional states like a craftsman

const protocols = {
    courage: {
        title: "Protocol: Courage",
        steps: [
            { title: "Ground", desc: "Feel your feet on the floor. You are here. You are solid." },
            { title: "Breathe", desc: "Three deep breaths. In through the nose, out through the mouth. Slow." },
            { title: "Recall", desc: "Remember a time you were brave. Feel it in your body. That courage is still in you." },
            { title: "Visualize", desc: "See yourself moving through the fear. Not around it—through it." },
            { title: "Embody", desc: "Stand taller. Shoulders back. This is the posture of courage." },
            { title: "Speak", desc: "Say aloud: 'I move toward what matters, even when afraid.'" }
        ]
    },
    focus: {
        title: "Protocol: Focus",
        steps: [
            { title: "Clear", desc: "Close all unnecessary tabs—mental and digital. One thing at a time." },
            { title: "Breathe", desc: "Box breathing: 4 seconds in, 4 hold, 4 out, 4 hold. Repeat 4 times." },
            { title: "Anchor", desc: "What is the ONE thing that matters right now? Name it." },
            { title: "Eliminate", desc: "Everything else is noise. Let it fade to the periphery." },
            { title: "Embody", desc: "Lean slightly forward. Eyes soft but directed. This is the posture of focus." },
            { title: "Begin", desc: "Start with the smallest possible action. Momentum follows." }
        ]
    },
    peace: {
        title: "Protocol: Peace",
        steps: [
            { title: "Soften", desc: "Unclench your jaw. Drop your shoulders. Release your belly." },
            { title: "Breathe", desc: "Long exhales. Twice as long as your inhales. The parasympathetic key." },
            { title: "Accept", desc: "What is, is. This moment is already here. Resistance creates suffering." },
            { title: "Expand", desc: "Widen your awareness. You are part of something much larger." },
            { title: "Release", desc: "Whatever you're holding—you can set it down. Just for now." },
            { title: "Rest", desc: "Peace is not the absence of challenge. It's presence within it." }
        ]
    },
    creativity: {
        title: "Protocol: Creativity",
        steps: [
            { title: "Play", desc: "Lower the stakes. This is not a test. This is exploration." },
            { title: "Breathe", desc: "Energizing breath: quick inhales through the nose, sharp exhales." },
            { title: "Connect", desc: "Combine two unrelated things. What do they have in common?" },
            { title: "Move", desc: "Shake your body. Creativity lives in movement, not stillness." },
            { title: "Question", desc: "What if the opposite were true? What if there were no rules?" },
            { title: "Begin Badly", desc: "The first draft is allowed to be terrible. Just start." }
        ]
    },
    confidence: {
        title: "Protocol: Confidence",
        steps: [
            { title: "Remember", desc: "List three things you've accomplished. Evidence of your capability." },
            { title: "Breathe", desc: "Deep belly breaths. Fill your space. Take up room." },
            { title: "Posture", desc: "Stand like someone who has already succeeded. Embody it." },
            { title: "Speak", desc: "Hear your voice at full volume. You are allowed to be heard." },
            { title: "Prepare", desc: "Confidence is preparation meeting opportunity. What do you know?" },
            { title: "Act", desc: "Confidence comes from action, not the reverse. Move first." }
        ]
    },
    gratitude: {
        title: "Protocol: Gratitude",
        steps: [
            { title: "Pause", desc: "Stop striving. Just for a moment. You are here." },
            { title: "Breathe", desc: "Gentle, natural breathing. No effort required." },
            { title: "Notice", desc: "What is working in your life right now? Name three things." },
            { title: "Feel", desc: "Don't just think gratitude—feel it. Where does it live in your body?" },
            { title: "Extend", desc: "Send silent thanks to someone who has helped you." },
            { title: "Receive", desc: "You are worthy of good things. Let that land." }
        ]
    }
};

class AlchemyCanvas {
    constructor() {
        this.canvas = document.getElementById('alchemy-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
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
        this.particles = [];
        const count = 40;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + Math.random() * 100,
                size: Math.random() * 4 + 2,
                speed: Math.random() * 2 + 1,
                opacity: Math.random() * 0.4 + 0.1,
                hue: 35 + Math.random() * 20 // Gold spectrum
            });
        }
    }

    animate() {
        this.time += 0.01;
        
        this.ctx.fillStyle = 'rgba(10, 8, 6, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            // Rising ember effect
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
            glow.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${p.opacity})`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();
            
            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${p.opacity})`;
            this.ctx.fill();
            
            // Rise and drift
            p.y -= p.speed;
            p.x += Math.sin(this.time + p.x * 0.01) * 0.5;
            p.opacity *= 0.995;
            
            // Reset
            if (p.y < -20 || p.opacity < 0.05) {
                p.y = this.canvas.height + 20;
                p.x = Math.random() * this.canvas.width;
                p.opacity = Math.random() * 0.4 + 0.1;
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

class AlchemyExperience {
    constructor() {
        this.selectedEmotion = null;
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.emotion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectEmotion(e));
        });

        document.getElementById('begin-btn')?.addEventListener('click', () => {
            this.beginForging();
        });
    }

    selectEmotion(e) {
        const btn = e.currentTarget;
        const emotion = btn.dataset.emotion;
        
        // Update active state
        document.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Activate forge flame
        document.getElementById('forge-flame').classList.add('active');
        
        // Show protocol
        this.showProtocol(emotion);
        this.selectedEmotion = emotion;
    }

    showProtocol(emotion) {
        const protocol = protocols[emotion];
        const protocolEl = document.getElementById('protocol');
        const titleEl = document.getElementById('protocol-title');
        const stepsEl = document.getElementById('protocol-steps');
        
        titleEl.textContent = protocol.title;
        stepsEl.innerHTML = protocol.steps.map((step, i) => `
            <div class="protocol-step">
                <span class="step-number">${i + 1}</span>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                </div>
            </div>
        `).join('');
        
        protocolEl.style.display = 'block';
        protocolEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    beginForging() {
        const steps = document.querySelectorAll('.protocol-step');
        let currentStep = 0;
        
        const highlightStep = () => {
            steps.forEach((step, i) => {
                step.style.opacity = i === currentStep ? '1' : '0.3';
                step.style.transform = i === currentStep ? 'scale(1.02)' : 'scale(1)';
                step.style.transition = 'all 0.5s ease';
            });
            
            if (currentStep < steps.length - 1) {
                currentStep++;
                setTimeout(highlightStep, 5000); // 5 seconds per step
            } else {
                // Complete
                setTimeout(() => {
                    steps.forEach(step => {
                        step.style.opacity = '1';
                        step.style.transform = 'scale(1)';
                    });
                }, 5000);
            }
        };
        
        highlightStep();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new AlchemyCanvas();
    new AlchemyExperience();
});


