// SEED - What Can You Create?
// Procedural organic growth from single word

class SeedExperience {
    constructor() {
        this.canvas = document.getElementById('seed');
        this.ctx = this.canvas.getContext('2d');
        this.branches = [];
        this.leaves = [];
        this.phase = 'intro';
        this.seedWord = '';
        this.growing = false;
        this.growthTime = 0;
        
        this.resize();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        const input = document.getElementById('seed-input');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                this.seedWord = input.value.trim();
                this.plantSeed();
            }
        });
    }

    plantSeed() {
        this.growing = true;
        this.growthTime = 0;
        
        // Display the seed word
        document.querySelector('.seed-word').textContent = `"${this.seedWord}"`;
        document.getElementById('seed-display').classList.add('visible');
        
        this.transitionTo('growing');
        
        // Create initial trunk
        this.createBranch(
            this.width / 2,
            this.height,
            -Math.PI / 2, // Straight up
            150,           // Initial length
            15,            // Initial thickness
            0              // Generation
        );
        
        // Transition to forest after growth
        setTimeout(() => {
            this.transitionTo('forest');
        }, 12000);
    }

    createBranch(x, y, angle, length, thickness, generation) {
        if (generation > 8 || thickness < 1) return;
        
        const branch = {
            startX: x,
            startY: y,
            angle: angle,
            targetLength: length,
            currentLength: 0,
            thickness: thickness,
            generation: generation,
            growing: true,
            growSpeed: 2 + Math.random(),
            children: [],
            hasSpawned: false,
            spawnAt: length * (0.6 + Math.random() * 0.3),
            hue: 80 + generation * 10 + Math.random() * 20
        };
        
        this.branches.push(branch);
        return branch;
    }

    spawnChildren(parent) {
        if (parent.hasSpawned) return;
        parent.hasSpawned = true;
        
        const endX = parent.startX + Math.cos(parent.angle) * parent.currentLength;
        const endY = parent.startY + Math.sin(parent.angle) * parent.currentLength;
        
        // Determine number of children (fewer as generations increase)
        const childCount = parent.generation < 3 ? 2 + Math.floor(Math.random() * 2) : 
                          parent.generation < 6 ? 1 + Math.floor(Math.random() * 2) : 1;
        
        for (let i = 0; i < childCount; i++) {
            const angleSpread = 0.3 + Math.random() * 0.4;
            const direction = i === 0 ? -1 : 1;
            const childAngle = parent.angle + angleSpread * direction * (0.5 + Math.random() * 0.5);
            
            const lengthFactor = 0.6 + Math.random() * 0.3;
            const thicknessFactor = 0.6 + Math.random() * 0.2;
            
            this.createBranch(
                endX,
                endY,
                childAngle,
                parent.targetLength * lengthFactor,
                parent.thickness * thicknessFactor,
                parent.generation + 1
            );
        }
        
        // Maybe spawn leaves on higher generations
        if (parent.generation >= 4 && Math.random() < 0.7) {
            this.createLeaf(endX, endY, parent.generation);
        }
    }

    createLeaf(x, y, generation) {
        const meanings = this.generateMeanings(this.seedWord);
        const meaning = meanings[Math.floor(Math.random() * meanings.length)];
        
        this.leaves.push({
            x: x + (Math.random() - 0.5) * 30,
            y: y + (Math.random() - 0.5) * 30,
            size: 0,
            targetSize: 8 + Math.random() * 12,
            growSpeed: 0.1 + Math.random() * 0.1,
            hue: 60 + Math.random() * 60,
            rotation: Math.random() * Math.PI * 2,
            meaning: meaning,
            showMeaning: Math.random() < 0.3,
            sway: Math.random() * Math.PI * 2,
            swaySpeed: 0.01 + Math.random() * 0.02
        });
    }

    generateMeanings(word) {
        // Poetic associations/meanings that could grow from any word
        const universalMeanings = [
            'memory', 'hope', 'change', 'wonder', 'silence',
            'echo', 'dream', 'light', 'shadow', 'breath',
            'time', 'space', 'connection', 'growth', 'truth',
            'beauty', 'mystery', 'flow', 'presence', 'becoming'
        ];
        
        // Add word-specific variations
        const specific = [
            word + '...?',
            'not ' + word,
            word + ' again',
            'like ' + word,
            'before ' + word,
            'after ' + word
        ];
        
        return [...universalMeanings, ...specific];
    }

    transitionTo(newPhase) {
        this.phase = newPhase;
        document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
        
        if (newPhase === 'growing') {
            document.getElementById('phase-growing').classList.add('active');
        } else if (newPhase === 'forest') {
            document.getElementById('phase-forest').classList.add('active');
        }
    }

    animate() {
        // Dark earth background
        this.ctx.fillStyle = 'rgba(5, 8, 4, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        if (this.growing) {
            this.growthTime++;
        }

        // Update and draw branches
        for (const branch of this.branches) {
            if (branch.growing) {
                branch.currentLength += branch.growSpeed;
                
                if (branch.currentLength >= branch.targetLength) {
                    branch.currentLength = branch.targetLength;
                    branch.growing = false;
                }
                
                // Spawn children when reaching spawn point
                if (branch.currentLength >= branch.spawnAt && !branch.hasSpawned) {
                    this.spawnChildren(branch);
                }
            }
            
            this.drawBranch(branch);
        }

        // Update and draw leaves
        for (const leaf of this.leaves) {
            if (leaf.size < leaf.targetSize) {
                leaf.size += leaf.growSpeed;
            }
            
            leaf.sway += leaf.swaySpeed;
            
            this.drawLeaf(leaf);
        }

        requestAnimationFrame(() => this.animate());
    }

    drawBranch(branch) {
        const endX = branch.startX + Math.cos(branch.angle) * branch.currentLength;
        const endY = branch.startY + Math.sin(branch.angle) * branch.currentLength;
        
        // Branch body
        this.ctx.beginPath();
        this.ctx.moveTo(branch.startX, branch.startY);
        this.ctx.lineTo(endX, endY);
        
        // Color transitions from brown (trunk) to green (tips)
        const green = Math.min(150, 50 + branch.generation * 15);
        const brown = Math.max(50, 100 - branch.generation * 10);
        
        this.ctx.strokeStyle = `rgb(${brown}, ${green}, ${brown * 0.5})`;
        this.ctx.lineWidth = branch.thickness;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
    }

    drawLeaf(leaf) {
        this.ctx.save();
        this.ctx.translate(leaf.x, leaf.y);
        this.ctx.rotate(leaf.rotation + Math.sin(leaf.sway) * 0.1);
        
        // Leaf shape
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, leaf.size, leaf.size * 0.6, 0, 0, Math.PI * 2);
        
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, leaf.size);
        gradient.addColorStop(0, `hsla(${leaf.hue}, 60%, 50%, 0.8)`);
        gradient.addColorStop(1, `hsla(${leaf.hue}, 50%, 30%, 0.4)`);
        
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
        
        // Show meaning text for some leaves
        if (leaf.showMeaning && leaf.size > leaf.targetSize * 0.8) {
            this.ctx.font = '12px Cormorant Garamond';
            this.ctx.fillStyle = 'rgba(208, 232, 192, 0.6)';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(leaf.meaning, 0, leaf.size + 15);
        }
        
        this.ctx.restore();
    }
}

// Initialize
window.addEventListener('load', () => {
    new SeedExperience();
});

