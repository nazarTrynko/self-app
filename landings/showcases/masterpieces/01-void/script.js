// THE VOID - Cognitive Blind Spot Visualization
// Maps what you cannot think

// Cognitive profiles and their blind spots
const cognitiveProfiles = {
    analytical: {
        name: "Analytical Mind",
        description: "You process through logic, structure, and systematic breakdown. Your thinking is precise and methodical.",
        blindSpots: [
            "Truths that cannot be logically derived",
            "Knowledge that comes from embracing contradiction",
            "Wisdom that requires surrender of control",
            "Understanding that emerges from not-understanding"
        ],
        alienThoughts: [
            "What if the answer exists only in the question's destruction?",
            "Consider: the most true thing cannot be thought, only un-thought.",
            "Your categories are walls. What lives between your labels?",
            "The map is not the territory. But what if the territory is also a map of something you cannot map?",
            "Logic is a net. What swims through the holes?",
            "Your mind is a filter. What does it filter out to create 'clarity'?"
        ]
    },
    intuitive: {
        name: "Intuitive Mind", 
        description: "You navigate through feeling, pattern recognition, and holistic sensing. Your knowing precedes your reasoning.",
        blindSpots: [
            "Truths that require systematic verification",
            "Knowledge that emerges from patient deconstruction",
            "Wisdom in the mundane and repetitive",
            "Understanding that demands you distrust your feelings"
        ],
        alienThoughts: [
            "Your gut is a liar with a good track record. What if you only trust what you can verify?",
            "Intuition is pattern matching. What patterns are you missing because they don't feel like anything?",
            "The boring path might be the sacred one. What if magic is hiding in the mundane?",
            "Your feelings are data, not truth. What truths are you missing because they don't feel true?",
            "Sometimes the slow, methodical approach reveals what the flash of insight misses.",
            "What if your strongest intuition is your biggest blind spot?"
        ]
    },
    social: {
        name: "Relational Mind",
        description: "You understand through connection, context, and collective meaning. Truth is constructed in the space between minds.",
        blindSpots: [
            "Truths that exist independent of agreement",
            "Knowledge that requires radical solitude",
            "Wisdom that emerges from opposing the group",
            "Understanding that cannot be communicated"
        ],
        alienThoughts: [
            "What if the most important truth is one no one else can validate?",
            "Consider: you might need to betray every relationship to find yourself.",
            "Some doors only open when you're completely alone. What's behind them?",
            "The wisdom of crowds is also the madness of crowds. What can only the isolated see?",
            "What if your need for understanding is blocking your understanding?",
            "Some truths are incommunicable. What truths are you ignoring because you can't share them?"
        ]
    },
    adaptive: {
        name: "Flexible Mind",
        description: "You flow with context, holding beliefs lightly, adapting to what the situation requires.",
        blindSpots: [
            "Truths that require unwavering commitment",
            "Knowledge that comes from refusing to adapt",
            "Wisdom in stubbornness and immovability",
            "Understanding that demands you choose one thing forever"
        ],
        alienThoughts: [
            "What if you need to commit completely to something arbitrary?",
            "Your flexibility is rigidity in disguise. What would it mean to be truly fixed?",
            "Some doors only open if you refuse to walk through any other.",
            "What would you die for? What if that's the only question that matters?",
            "Adaptation is survival. But what requires you to refuse to survive?",
            "Your openness might be a sophisticated form of avoidance. What are you avoiding by staying open?"
        ]
    }
};

// Void canvas - subtle impossible geometries
class VoidCanvas {
    constructor() {
        this.canvas = document.getElementById('void-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.voids = [];
        
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
        this.voids = [];
        const count = 5;
        
        for (let i = 0; i < count; i++) {
            this.voids.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 50 + Math.random() * 150,
                phase: Math.random() * Math.PI * 2,
                speed: 0.001 + Math.random() * 0.002
            });
        }
    }

    animate() {
        this.time += 0.005;
        
        // Very subtle clear
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw void regions - areas of "nothing"
        this.voids.forEach(v => {
            const pulse = Math.sin(this.time + v.phase) * 0.3 + 0.7;
            const size = v.size * pulse;
            
            // Create a "void" - darker than black somehow
            const gradient = this.ctx.createRadialGradient(v.x, v.y, 0, v.x, v.y, size);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
            gradient.addColorStop(0.5, 'rgba(5, 5, 10, 0.05)');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(v.x, v.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Subtle edge glow
            this.ctx.beginPath();
            this.ctx.arc(v.x, v.y, size * 0.8, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(26, 26, 46, ${0.1 * pulse})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Slow drift
            v.x += Math.sin(this.time * 0.5 + v.phase) * 0.2;
            v.y += Math.cos(this.time * 0.3 + v.phase) * 0.2;
            
            // Wrap
            if (v.x < -v.size) v.x = this.canvas.width + v.size;
            if (v.x > this.canvas.width + v.size) v.x = -v.size;
            if (v.y < -v.size) v.y = this.canvas.height + v.size;
            if (v.y > this.canvas.height + v.size) v.y = -v.size;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Cognitive topology visualization
class TopologyCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.profile = null;
        this.time = 0;
        this.animating = false;
    }

    setProfile(profile) {
        this.profile = profile;
        this.resize();
        this.animating = true;
        this.animate();
    }

    resize() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.offsetWidth, 500);
        this.canvas.width = size;
        this.canvas.height = size;
    }

    animate() {
        if (!this.animating) return;
        
        this.time += 0.01;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        // Clear
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        // Draw "thinkable space" - illuminated area
        const thinkableGradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.35);
        thinkableGradient.addColorStop(0, 'rgba(40, 40, 60, 0.3)');
        thinkableGradient.addColorStop(0.7, 'rgba(20, 20, 35, 0.1)');
        thinkableGradient.addColorStop(1, 'transparent');
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, width * 0.35, 0, Math.PI * 2);
        this.ctx.fillStyle = thinkableGradient;
        this.ctx.fill();
        
        // Draw "void zones" - blind spots around the edges
        const voidCount = 4;
        for (let i = 0; i < voidCount; i++) {
            const angle = (i / voidCount) * Math.PI * 2 + this.time * 0.1;
            const dist = width * 0.32;
            const vx = cx + Math.cos(angle) * dist;
            const vy = cy + Math.sin(angle) * dist;
            const vSize = width * 0.12 + Math.sin(this.time + i) * width * 0.02;
            
            // Void gradient
            const voidGradient = this.ctx.createRadialGradient(vx, vy, 0, vx, vy, vSize);
            voidGradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
            voidGradient.addColorStop(0.5, 'rgba(5, 5, 15, 0.5)');
            voidGradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, vSize, 0, Math.PI * 2);
            this.ctx.fillStyle = voidGradient;
            this.ctx.fill();
            
            // Edge
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, vSize * 0.8, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(26, 26, 46, 0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Center label
        this.ctx.fillStyle = 'rgba(136, 136, 136, 0.5)';
        this.ctx.font = '12px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('THINKABLE', cx, cy - 10);
        this.ctx.fillText('SPACE', cx, cy + 10);
        
        // Outer ring - the void
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, width * 0.45, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(26, 26, 46, 0.2)';
        this.ctx.lineWidth = 30;
        this.ctx.stroke();
    }
}

// Questionnaire logic
class VoidExperience {
    constructor() {
        this.answers = {};
        this.currentQuestion = 1;
        this.totalQuestions = 5;
        this.profile = null;
        
        this.topologyCanvas = new TopologyCanvas('topology-canvas');
        
        this.bindEvents();
        this.updateProgress();
    }

    bindEvents() {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e));
        });

        document.getElementById('regenerate-btn')?.addEventListener('click', () => {
            this.generateAlienThought();
        });
    }

    handleAnswer(e) {
        const btn = e.target;
        const card = btn.closest('.question-card');
        const question = parseInt(card.dataset.question);
        const value = btn.dataset.value;
        
        // Store answer
        this.answers[question] = value;
        
        // Visual feedback
        card.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        // Move to next question after delay
        setTimeout(() => {
            if (question < this.totalQuestions) {
                this.showQuestion(question + 1);
            } else {
                this.analyzeProfile();
            }
        }, 500);
    }

    showQuestion(num) {
        document.querySelectorAll('.question-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const nextCard = document.querySelector(`[data-question="${num}"]`);
        if (nextCard) {
            nextCard.classList.add('active');
            this.currentQuestion = num;
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion - 1) / this.totalQuestions) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
    }

    analyzeProfile() {
        // Simple profile determination based on answer patterns
        const patterns = {
            analytical: 0,
            intuitive: 0,
            social: 0,
            adaptive: 0
        };
        
        // Question 1: Problem approach
        if (this.answers[1] === 'analyze') patterns.analytical += 2;
        if (this.answers[1] === 'intuit') patterns.intuitive += 2;
        if (this.answers[1] === 'consult') patterns.social += 2;
        if (this.answers[1] === 'delay') patterns.adaptive += 2;
        
        // Question 2: Truth finding
        if (this.answers[2] === 'logic') patterns.analytical += 2;
        if (this.answers[2] === 'experience') patterns.intuitive += 2;
        if (this.answers[2] === 'authority') patterns.social += 1;
        if (this.answers[2] === 'consensus') patterns.social += 2;
        
        // Question 3: Disagreement response
        if (this.answers[3] === 'defend') patterns.analytical += 1;
        if (this.answers[3] === 'question') patterns.adaptive += 2;
        if (this.answers[3] === 'synthesize') patterns.intuitive += 1;
        if (this.answers[3] === 'disengage') patterns.adaptive += 1;
        
        // Question 4: Nature of self
        if (this.answers[4] === 'fixed') patterns.analytical += 1;
        if (this.answers[4] === 'fluid') patterns.adaptive += 2;
        if (this.answers[4] === 'constructed') patterns.social += 2;
        if (this.answers[4] === 'illusion') patterns.intuitive += 2;
        
        // Question 5: Could never
        if (this.answers[5] === 'harm') patterns.social += 1;
        if (this.answers[5] === 'abandon') patterns.analytical += 1;
        if (this.answers[5] === 'conform') patterns.intuitive += 1;
        if (this.answers[5] === 'unknown') patterns.adaptive += 2;
        
        // Find dominant profile
        let maxScore = 0;
        let dominantProfile = 'analytical';
        
        for (const [profile, score] of Object.entries(patterns)) {
            if (score > maxScore) {
                maxScore = score;
                dominantProfile = profile;
            }
        }
        
        this.profile = cognitiveProfiles[dominantProfile];
        this.showResults();
    }

    showResults() {
        // Hide questionnaire
        document.querySelector('.blind-spot-test').style.display = 'none';
        
        // Show results
        const voidMap = document.getElementById('void-map');
        voidMap.style.display = 'block';
        
        // Update content
        document.getElementById('thinkable-description').textContent = this.profile.description;
        document.getElementById('void-description').innerHTML = this.profile.blindSpots
            .map(bs => `• ${bs}`)
            .join('<br>');
        
        this.generateAlienThought();
        
        // Start topology visualization
        this.topologyCanvas.setProfile(this.profile);
        
        // Scroll to results
        voidMap.scrollIntoView({ behavior: 'smooth' });
    }

    generateAlienThought() {
        const thoughts = this.profile.alienThoughts;
        const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
        
        const el = document.getElementById('alien-thought');
        el.style.opacity = '0';
        
        setTimeout(() => {
            el.textContent = thought;
            el.style.opacity = '1';
        }, 300);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new VoidCanvas();
    new VoidExperience();
    
    // Add transition style
    document.getElementById('alien-thought').style.transition = 'opacity 0.3s ease';
});


