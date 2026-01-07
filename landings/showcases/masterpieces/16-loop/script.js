// THE LOOP - Recurring Pattern Mapper
// You are trapped in patterns you cannot see

// Loop analysis data
const loopInsights = {
    relationships: {
        core: "Your relationship loop likely involves a recurring dynamic around attachment, control, or validation. You may seek partners who trigger familiar wounds, creating a cycle that feels inevitable but is actually chosen.",
        trigger: "The loop often starts when you feel a sense of familiarity with someone—a comfort that is actually recognition of a pattern, not genuine compatibility.",
        exit: "The exit point is at the moment of 'chemistry.' When you feel that instant pull, pause. Ask: is this attraction or recognition of a wound?",
        intervention: "Before entering your next relationship, write down what you're looking for. Then write down what you've always gotten. The gap between these reveals your loop."
    },
    work: {
        core: "Your work loop involves repeating scenarios around authority, recognition, or boundaries. Different jobs, same dynamics. You recreate the same tensions because you bring the same unresolved patterns.",
        trigger: "The loop activates when you encounter situations that echo past workplace wounds—feeling undervalued, controlled, or unseen.",
        exit: "The exit point is when you feel the familiar frustration rising. That moment of 'here we go again' is your chance to respond differently.",
        intervention: "Map the common factors across all your job experiences. Remove the companies, the colleagues. What remains is your contribution to the pattern."
    },
    emotional: {
        core: "Your emotional loop involves cycling through the same feeling states—perhaps anxiety to relief to anxiety, or confidence to doubt to confidence. The external triggers change, but the internal cycle persists.",
        trigger: "The loop starts when a specific type of event occurs—often something that connects to an old wound or fear, even if it looks different on the surface.",
        exit: "The exit point is in the moment between stimulus and response. That gap—however small—is where change lives. Widen it through awareness.",
        intervention: "Name the feeling. 'I'm in the loop right now. I notice anxiety arising.' This simple act of naming creates distance and choice."
    },
    behavior: {
        core: "Your behavioral loop is a sequence of actions you repeat despite knowing better—self-sabotage, procrastination, or overcommitment. The behavior serves a hidden purpose, often protection.",
        trigger: "The loop begins when success or intimacy approaches. The behavior protects you from something you're not ready to have—often because having it would require becoming someone new.",
        exit: "The exit point is at the moment of self-sabotage itself. When you reach for the behavior, stop. Ask: what am I actually protecting myself from?",
        intervention: "Instead of fighting the behavior, get curious about it. What does it give you? What would you have to face if you stopped?"
    },
    mixed: {
        core: "Your loops span multiple domains—relationships, work, emotions, behavior. This suggests a core pattern that manifests everywhere, likely rooted in fundamental beliefs about yourself or the world.",
        trigger: "The trigger is likely tied to self-worth, belonging, or safety. When these feel threatened—consciously or not—the loops activate across all areas.",
        exit: "The exit point is in recognizing the common thread. What belief underlies all these patterns? That belief is what needs to be examined.",
        intervention: "Write: 'I believe that I am...' Complete it honestly. Then ask: 'Is this still true? Does it have to be?' The answer might surprise you."
    }
};

// Loop canvas - circular/spiral visualization
class LoopCanvas {
    constructor() {
        this.canvas = document.getElementById('loop-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.loops = [];
        
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
        this.loops = [];
        const count = 4;
        
        for (let i = 0; i < count; i++) {
            this.loops.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 80 + Math.random() * 120,
                phase: Math.random() * Math.PI * 2,
                speed: 0.3 + Math.random() * 0.5,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }
    }

    animate() {
        this.time += 0.008;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.loops.forEach(l => {
            // Rotating loop
            this.ctx.save();
            this.ctx.translate(l.x, l.y);
            this.ctx.rotate(this.time * l.speed * l.direction + l.phase);
            
            // Multiple nested loops
            for (let i = 0; i < 3; i++) {
                const r = l.radius * (1 - i * 0.25);
                const alpha = 0.1 - i * 0.02;
                
                this.ctx.beginPath();
                this.ctx.arc(0, 0, r, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(62, 78, 62, ${alpha})`;
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }
            
            // Entry/exit point marker
            const markerAngle = this.time * l.speed * l.direction * 0.5;
            const mx = Math.cos(markerAngle) * l.radius;
            const my = Math.sin(markerAngle) * l.radius;
            
            this.ctx.beginPath();
            this.ctx.arc(mx, my, 5, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(62, 78, 62, 0.3)';
            this.ctx.fill();
            
            this.ctx.restore();
            
            // Slow drift
            l.x += Math.sin(this.time * 0.1 + l.phase) * 0.15;
            l.y += Math.cos(this.time * 0.08 + l.phase) * 0.15;
            
            // Wrap
            if (l.x < -l.radius) l.x = this.canvas.width + l.radius;
            if (l.x > this.canvas.width + l.radius) l.x = -l.radius;
            if (l.y < -l.radius) l.y = this.canvas.height + l.radius;
            if (l.y > this.canvas.height + l.radius) l.y = -l.radius;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Structure visualization canvas
class StructureCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.patterns = [];
        this.time = 0;
        this.animating = false;
    }

    setPatterns(patterns) {
        this.patterns = patterns;
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
        
        this.time += 0.02;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const { width, height } = this.canvas;
        const cx = width / 2;
        const cy = height / 2;
        
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, width, height);
        
        const patternCount = this.patterns.filter(p => p).length;
        if (patternCount === 0) return;
        
        // Draw interconnected loops
        this.patterns.forEach((pattern, i) => {
            if (!pattern) return;
            
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const dist = width * 0.25;
            const lx = cx + Math.cos(angle) * dist;
            const ly = cy + Math.sin(angle) * dist;
            const loopRadius = width * 0.1;
            const pulse = Math.sin(this.time + i) * 0.1 + 0.9;
            
            // Loop circle
            this.ctx.beginPath();
            this.ctx.arc(lx, ly, loopRadius * pulse, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(62, 78, 62, ${0.4 * pulse})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Rotating marker on loop
            const markerAngle = this.time * 2 + i;
            const markerX = lx + Math.cos(markerAngle) * loopRadius * pulse;
            const markerY = ly + Math.sin(markerAngle) * loopRadius * pulse;
            
            this.ctx.beginPath();
            this.ctx.arc(markerX, markerY, 4, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(78, 94, 78, ${0.7 * pulse})`;
            this.ctx.fill();
            
            // Connection to center
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.lineTo(lx, ly);
            this.ctx.strokeStyle = `rgba(46, 62, 46, ${0.2 * pulse})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Label
            const labels = ['RELATIONSHIPS', 'WORK', 'EMOTIONS', 'BEHAVIOR'];
            const labelDist = dist + loopRadius + 20;
            const labelX = cx + Math.cos(angle) * labelDist;
            const labelY = cy + Math.sin(angle) * labelDist;
            
            this.ctx.fillStyle = `rgba(136, 136, 136, ${0.6 * pulse})`;
            this.ctx.font = '9px Outfit';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(labels[i], labelX, labelY);
        });
        
        // Center - the self
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 25, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(46, 62, 46, 0.3)';
        this.ctx.fill();
        
        this.ctx.fillStyle = 'rgba(204, 204, 204, 0.6)';
        this.ctx.font = '10px Outfit';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('YOU', cx, cy + 4);
    }
}

// Loop mapper experience
class LoopExperience {
    constructor() {
        this.patterns = {
            relationships: '',
            work: '',
            emotional: '',
            behavior: ''
        };
        this.structureCanvas = new StructureCanvas('structure-canvas');
        
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('analyze-btn')?.addEventListener('click', () => this.analyze());
        document.getElementById('reset-btn')?.addEventListener('click', () => this.reset());
    }

    analyze() {
        this.patterns = {
            relationships: document.getElementById('pattern-relationships').value.trim(),
            work: document.getElementById('pattern-work').value.trim(),
            emotional: document.getElementById('pattern-emotional').value.trim(),
            behavior: document.getElementById('pattern-behavior').value.trim()
        };
        
        // Find which patterns are filled
        const activePatterns = Object.entries(this.patterns)
            .filter(([_, value]) => value.length > 10)
            .map(([key, _]) => key);
        
        if (activePatterns.length < 1) {
            alert('Please describe at least one recurring pattern.');
            return;
        }
        
        // Determine primary pattern area
        let primaryPattern = 'mixed';
        let maxLength = 0;
        for (const [key, value] of Object.entries(this.patterns)) {
            if (value.length > maxLength) {
                maxLength = value.length;
                primaryPattern = key;
            }
        }
        
        const insight = activePatterns.length > 2 ? loopInsights.mixed : loopInsights[primaryPattern];
        
        // Show results
        document.querySelector('.pattern-mapper').style.display = 'none';
        const analysisSection = document.getElementById('loop-analysis');
        analysisSection.style.display = 'block';
        
        // Update content
        document.getElementById('core-loop').textContent = insight.core;
        document.getElementById('loop-trigger').textContent = insight.trigger;
        document.getElementById('exit-point').textContent = insight.exit;
        document.getElementById('break-prompt').textContent = insight.intervention;
        
        // Start visualization
        this.structureCanvas.setPatterns([
            this.patterns.relationships,
            this.patterns.work,
            this.patterns.emotional,
            this.patterns.behavior
        ]);
        
        // Scroll to results
        analysisSection.scrollIntoView({ behavior: 'smooth' });
    }

    reset() {
        document.getElementById('loop-analysis').style.display = 'none';
        document.querySelector('.pattern-mapper').style.display = 'block';
        document.querySelector('.pattern-mapper').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new LoopCanvas();
    new LoopExperience();
});

