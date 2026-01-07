// THE COMPASS - Internal Direction Finder
// Not where you should go—where your attention naturally pulls

// Compass analysis data
const compassInsights = {
    creative: {
        gravity: "Your attention gravitates toward creation, expression, and bringing new things into being. You're pulled toward making, designing, writing, building—transforming ideas into reality.",
        truth: "This reveals a deep need to leave your mark, to contribute something that didn't exist before. The creative pull is about meaning through making.",
        direction: "Your true north points toward creative expression. The question isn't whether to create—it's what form your creation should take.",
        alignment: "How much of your current life allows for genuine creation? Are you making things, or just maintaining them?"
    },
    understanding: {
        gravity: "Your attention gravitates toward understanding—how things work, why they happen, the patterns beneath the surface. You're drawn to learning, analyzing, and connecting ideas.",
        truth: "This reveals a mind that finds satisfaction in comprehension itself. For you, understanding isn't a means to an end—it's the end.",
        direction: "Your true north points toward knowledge and insight. The question isn't whether to learn—it's what questions are worth your lifetime.",
        alignment: "Does your current life feed your need to understand? Or are you starving your most essential hunger?"
    },
    connection: {
        gravity: "Your attention gravitates toward people—relationships, community, belonging. You're pulled toward understanding others, building bonds, and creating meaningful connections.",
        truth: "This reveals that your deepest meaning comes through others. Your purpose is relational, not solitary. Impact for you flows through people.",
        direction: "Your true north points toward human connection. The question isn't whether relationships matter—it's which relationships deserve your deepest investment.",
        alignment: "Are you investing in the relationships that matter most? Or are you giving your presence to people who don't feed your soul?"
    },
    mastery: {
        gravity: "Your attention gravitates toward skill development, excellence, and mastery. You're pulled toward getting better at things, refining abilities, and achieving competence.",
        truth: "This reveals a drive for capability itself. You find meaning in the process of improvement, in the gap between where you are and where you could be.",
        direction: "Your true north points toward mastery. The question isn't whether to improve—it's which skills are worth your dedicated practice.",
        alignment: "Are you developing mastery in areas that matter to you? Or are you pursuing competencies that don't align with your deeper self?"
    },
    impact: {
        gravity: "Your attention gravitates toward making a difference—solving problems, helping others, leaving things better than you found them. You're pulled toward meaningful contribution.",
        truth: "This reveals that your satisfaction comes from impact, not just activity. You need to know your efforts matter, that you're making a dent.",
        direction: "Your true north points toward meaningful contribution. The question isn't whether to help—it's where your help creates the most value.",
        alignment: "Is your current life creating the impact you're capable of? Or are you contributing in ways that feel hollow?"
    }
};

// Compass canvas - navigation/direction visualization
class CompassCanvas {
    constructor() {
        this.canvas = document.getElementById('compass-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.needles = [];
        
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
        this.needles = [];
        const count = 4;
        
        for (let i = 0; i < count; i++) {
            this.needles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: 80 + Math.random() * 100,
                phase: Math.random() * Math.PI * 2,
                speed: 0.2 + Math.random() * 0.4,
                targetAngle: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.time += 0.008;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.needles.forEach(n => {
            const wobble = Math.sin(this.time * n.speed + n.phase) * 0.2;
            const currentAngle = n.targetAngle + wobble;
            
            // Compass circle
            this.ctx.beginPath();
            this.ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(46, 74, 90, 0.1)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Cardinal points
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const px = n.x + Math.cos(angle) * n.size;
                const py = n.y + Math.sin(angle) * n.size;
                
                this.ctx.beginPath();
                this.ctx.arc(px, py, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(46, 74, 90, 0.2)';
                this.ctx.fill();
            }
            
            // Needle
            const needleLength = n.size * 0.7;
            const nx = n.x + Math.cos(currentAngle) * needleLength;
            const ny = n.y + Math.sin(currentAngle) * needleLength;
            
            this.ctx.beginPath();
            this.ctx.moveTo(n.x, n.y);
            this.ctx.lineTo(nx, ny);
            this.ctx.strokeStyle = 'rgba(74, 122, 138, 0.3)';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Needle tip
            this.ctx.beginPath();
            this.ctx.arc(nx, ny, 4, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(74, 122, 138, 0.4)';
            this.ctx.fill();
            
            // Center
            this.ctx.beginPath();
            this.ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(46, 74, 90, 0.3)';
            this.ctx.fill();
            
            // Slow drift
            n.x += Math.sin(this.time * 0.15 + n.phase) * 0.2;
            n.y += Math.cos(this.time * 0.1 + n.phase) * 0.2;
            
            // Wrap
            if (n.x < -n.size) n.x = this.canvas.width + n.size;
            if (n.x > this.canvas.width + n.size) n.x = -n.size;
            if (n.y < -n.size) n.y = this.canvas.height + n.size;
            if (n.y > this.canvas.height + n.size) n.y = -n.size;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Direction visualization canvas
class DirectionCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.direction = 0;
        this.time = 0;
        this.animating = false;
    }

    setDirection(angle) {
        this.direction = angle;
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
        const radius = width * 0.38;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        // Compass rose
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(46, 74, 90, 0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Inner rings
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(46, 74, 90, 0.15)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Cardinal markers
        const cardinals = ['N', 'E', 'S', 'W'];
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const px = cx + Math.cos(angle) * (radius + 20);
            const py = cy + Math.sin(angle) * (radius + 20);
            
            this.ctx.fillStyle = i === 0 ? 'rgba(74, 122, 138, 0.8)' : 'rgba(136, 136, 136, 0.4)';
            this.ctx.font = '12px Outfit';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(cardinals[i], px, py);
        }
        
        // Needle wobble
        const wobble = Math.sin(this.time * 2) * 0.03;
        const needleAngle = this.direction + wobble - Math.PI / 2;
        
        // Needle (pointing north)
        const needleLength = radius * 0.75;
        const nx = cx + Math.cos(needleAngle) * needleLength;
        const ny = cy + Math.sin(needleAngle) * needleLength;
        
        // Needle gradient
        const gradient = this.ctx.createLinearGradient(cx, cy, nx, ny);
        gradient.addColorStop(0, 'rgba(46, 74, 90, 0.2)');
        gradient.addColorStop(1, 'rgba(74, 122, 138, 0.8)');
        
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(nx, ny);
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Needle tip
        this.ctx.beginPath();
        this.ctx.arc(nx, ny, 6, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(74, 122, 138, 0.8)';
        this.ctx.fill();
        
        // Opposite side (dimmer)
        const ox = cx + Math.cos(needleAngle + Math.PI) * needleLength * 0.4;
        const oy = cy + Math.sin(needleAngle + Math.PI) * needleLength * 0.4;
        
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(ox, oy);
        this.ctx.strokeStyle = 'rgba(46, 74, 90, 0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Center pivot
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(46, 74, 90, 0.5)';
        this.ctx.fill();
        
        // Label
        this.ctx.fillStyle = 'rgba(74, 122, 138, 0.8)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('TRUE NORTH', cx, cy + radius * 0.55);
    }
}

// Compass experience logic
class CompassExperience {
    constructor() {
        this.answers = {};
        this.directionCanvas = new DirectionCanvas('direction-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('calibrate-btn')?.addEventListener('click', () => this.calibrate());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    analyzeThemes(text) {
        const themes = {
            creative: ['create', 'make', 'build', 'design', 'write', 'art', 'music', 'draw', 'imagine', 'invent', 'craft', 'produce'],
            understanding: ['learn', 'understand', 'read', 'research', 'study', 'discover', 'know', 'figure', 'analyze', 'question', 'explore', 'curious'],
            connection: ['people', 'friend', 'family', 'talk', 'help', 'together', 'community', 'relationship', 'share', 'connect', 'belong', 'love'],
            mastery: ['practice', 'improve', 'skill', 'better', 'master', 'develop', 'train', 'perfect', 'excel', 'achieve', 'compete', 'grow'],
            impact: ['help', 'change', 'solve', 'matter', 'difference', 'contribute', 'improve', 'fix', 'support', 'serve', 'value', 'meaningful']
        };
        
        const scores = {};
        const lowerText = text.toLowerCase();
        
        for (const [theme, keywords] of Object.entries(themes)) {
            scores[theme] = 0;
            keywords.forEach(keyword => {
                if (lowerText.includes(keyword)) {
                    scores[theme]++;
                }
            });
        }
        
        return scores;
    }

    calibrate() {
        this.answers = {
            q1: document.getElementById('q1').value.trim(),
            q2: document.getElementById('q2').value.trim(),
            q3: document.getElementById('q3').value.trim(),
            q4: document.getElementById('q4').value.trim(),
            q5: document.getElementById('q5').value.trim()
        };
        
        // Check if enough answers
        const filledAnswers = Object.values(this.answers).filter(a => a.length > 10);
        if (filledAnswers.length < 3) {
            alert('Please answer at least three questions to calibrate your compass.');
            return;
        }
        
        // Combine all answers and analyze
        const allText = Object.values(this.answers).join(' ');
        const scores = this.analyzeThemes(allText);
        
        // Find dominant theme
        let maxScore = 0;
        let dominantTheme = 'creative';
        for (const [theme, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                dominantTheme = theme;
            }
        }
        
        const insight = compassInsights[dominantTheme];
        
        // Calculate direction angle based on theme
        const themeAngles = {
            creative: 0,          // North
            understanding: Math.PI / 4,  // NE
            connection: Math.PI / 2,     // East
            mastery: -Math.PI / 4,       // NW
            impact: -Math.PI / 6         // NNW
        };
        
        // Show results
        document.querySelector('.attention-mapper').style.display = 'none';
        const readingSection = document.getElementById('compass-reading');
        readingSection.style.display = 'block';
        
        // Update content
        document.getElementById('gravity-description').textContent = insight.gravity;
        document.getElementById('truth-description').textContent = insight.truth;
        document.getElementById('direction-description').textContent = insight.direction;
        document.getElementById('alignment-prompt').textContent = insight.alignment;
        
        // Start direction visualization
        this.directionCanvas.setDirection(themeAngles[dominantTheme]);
        
        // Scroll to results
        readingSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        document.getElementById('compass-reading').style.display = 'none';
        document.querySelector('.attention-mapper').style.display = 'block';
        document.querySelector('.attention-mapper').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CompassCanvas();
    new CompassExperience();
});

