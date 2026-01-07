// BIOMORPHIC AI - Evolutionary Life Simulation
// Emergent Intelligence Category - Showcase 29

class LifeBackground {
    constructor() {
        this.canvas = document.getElementById('life-canvas');
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
        const count = 50;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 1 + Math.random() * 2,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                phase: Math.random() * Math.PI * 2,
                hue: 120 + Math.random() * 60
            });
        }
    }

    update() {
        this.time += 0.016;
        
        this.particles.forEach(p => {
            p.x += p.vx + Math.sin(this.time + p.phase) * 0.3;
            p.y += p.vy + Math.cos(this.time + p.phase) * 0.3;
            
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
        });
    }

    draw() {
        this.ctx.fillStyle = 'rgba(10, 26, 15, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
            glow.addColorStop(0, `hsla(${p.hue}, 70%, 50%, 0.3)`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Creature with neural network brain
class Creature {
    constructor(x, y, type, genome = null) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.energy = 100;
        this.age = 0;
        this.radius = type === 'predator' ? 8 : type === 'herbivore' ? 6 : 5;
        
        // Neural network weights (genome)
        this.genome = genome || this.randomGenome();
        
        // Movement
        this.vx = 0;
        this.vy = 0;
        this.direction = Math.random() * Math.PI * 2;
        
        // Stats
        this.fitness = 0;
        this.kills = 0;
        this.offspring = 0;
    }

    randomGenome() {
        // Simple neural network: 4 inputs → 4 hidden → 2 outputs
        return {
            weights1: Array(4).fill(0).map(() => Array(4).fill(0).map(() => Math.random() * 2 - 1)),
            weights2: Array(4).fill(0).map(() => Array(2).fill(0).map(() => Math.random() * 2 - 1)),
            speed: 0.5 + Math.random() * 1.5,
            senseRange: 50 + Math.random() * 100
        };
    }

    mutate(genome) {
        const mutated = JSON.parse(JSON.stringify(genome));
        const mutationRate = 0.1;
        
        mutated.weights1 = mutated.weights1.map(row =>
            row.map(w => Math.random() < mutationRate ? w + (Math.random() - 0.5) * 0.5 : w)
        );
        mutated.weights2 = mutated.weights2.map(row =>
            row.map(w => Math.random() < mutationRate ? w + (Math.random() - 0.5) * 0.5 : w)
        );
        
        if (Math.random() < mutationRate) {
            mutated.speed = Math.max(0.3, mutated.speed + (Math.random() - 0.5) * 0.3);
        }
        if (Math.random() < mutationRate) {
            mutated.senseRange = Math.max(30, mutated.senseRange + (Math.random() - 0.5) * 30);
        }
        
        return mutated;
    }

    think(nearestFood, nearestPredator, nearestPrey) {
        // Inputs: distance to food, angle to food, distance to threat, angle to threat
        const inputs = [
            nearestFood ? Math.min(1, nearestFood.dist / this.genome.senseRange) : 1,
            nearestFood ? nearestFood.angle / Math.PI : 0,
            nearestPredator ? Math.min(1, nearestPredator.dist / this.genome.senseRange) : 1,
            nearestPrey ? Math.min(1, nearestPrey.dist / this.genome.senseRange) : 1
        ];
        
        // Hidden layer
        const hidden = this.genome.weights1.map(row =>
            Math.tanh(row.reduce((sum, w, i) => sum + w * inputs[i], 0))
        );
        
        // Output layer: [turn, speed]
        const outputs = this.genome.weights2[0].map((_, outIdx) =>
            Math.tanh(hidden.reduce((sum, h, i) => sum + this.genome.weights2[i][outIdx] * h, 0))
        );
        
        return {
            turn: outputs[0] * 0.2,
            speedMod: (outputs[1] + 1) / 2
        };
    }

    update(creatures, width, height) {
        this.age++;
        this.energy -= 0.1 + this.genome.speed * 0.05;
        
        // Find nearest entities
        let nearestFood = null;
        let nearestPredator = null;
        let nearestPrey = null;
        
        creatures.forEach(other => {
            if (other === this) return;
            
            const dx = other.x - this.x;
            const dy = other.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) - this.direction;
            
            if (dist < this.genome.senseRange) {
                if (this.type === 'herbivore' && other.type === 'predator') {
                    if (!nearestPredator || dist < nearestPredator.dist) {
                        nearestPredator = { creature: other, dist, angle };
                    }
                }
                if (this.type === 'predator' && other.type !== 'predator') {
                    if (!nearestPrey || dist < nearestPrey.dist) {
                        nearestPrey = { creature: other, dist, angle };
                    }
                }
                if (this.type === 'scavenger' && other.energy <= 0) {
                    if (!nearestFood || dist < nearestFood.dist) {
                        nearestFood = { creature: other, dist, angle };
                    }
                }
            }
        });
        
        // Think and act
        const decision = this.think(nearestFood, nearestPredator, nearestPrey);
        
        this.direction += decision.turn;
        const speed = this.genome.speed * decision.speedMod;
        
        this.vx = Math.cos(this.direction) * speed;
        this.vy = Math.sin(this.direction) * speed;
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        
        this.fitness = this.age + this.offspring * 100 + this.energy;
        
        return this.energy > 0;
    }

    reproduce() {
        this.offspring++;
        this.energy -= 30;
        return new Creature(
            this.x + (Math.random() - 0.5) * 20,
            this.y + (Math.random() - 0.5) * 20,
            this.type,
            this.mutate(this.genome)
        );
    }
}

// Main Ecosystem
class Ecosystem {
    constructor() {
        this.canvas = document.getElementById('ecosystem-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.creatures = [];
        this.generation = 1;
        this.time = 0;
        this.speed = 1;
        this.behaviors = [];
        
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    init() {
        this.creatures = [];
        this.generation = 1;
        this.behaviors = [{ gen: 1, text: 'Basic movement patterns' }];
        
        // Spawn initial creatures
        for (let i = 0; i < 30; i++) {
            this.creatures.push(new Creature(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                'herbivore'
            ));
        }
        
        for (let i = 0; i < 8; i++) {
            this.creatures.push(new Creature(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                'predator'
            ));
        }
        
        for (let i = 0; i < 10; i++) {
            this.creatures.push(new Creature(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                'scavenger'
            ));
        }
        
        this.updateUI();
    }

    extinctionEvent() {
        // Kill 70% of creatures
        const survivors = Math.floor(this.creatures.length * 0.3);
        this.creatures.sort((a, b) => b.fitness - a.fitness);
        this.creatures = this.creatures.slice(0, survivors);
        
        this.addBehavior('Extinction event! Only fittest survive.');
    }

    addBehavior(text) {
        this.behaviors.unshift({ gen: this.generation, text });
        if (this.behaviors.length > 10) this.behaviors.pop();
        this.updateBehaviorUI();
    }

    checkEmergentBehaviors() {
        // Detect herding (herbivores clustering)
        const herbivores = this.creatures.filter(c => c.type === 'herbivore');
        if (herbivores.length > 5) {
            let clusterCount = 0;
            herbivores.forEach(h => {
                const nearby = herbivores.filter(other => {
                    if (h === other) return false;
                    const dx = h.x - other.x;
                    const dy = h.y - other.y;
                    return Math.sqrt(dx * dx + dy * dy) < 50;
                }).length;
                if (nearby >= 3) clusterCount++;
            });
            
            if (clusterCount > herbivores.length * 0.5 && !this.behaviors.some(b => b.text.includes('Herding'))) {
                this.addBehavior('Herding behavior detected in herbivores!');
            }
        }
        
        // Detect pack hunting
        const predators = this.creatures.filter(c => c.type === 'predator');
        if (predators.length > 3 && Math.random() < 0.001) {
            if (!this.behaviors.some(b => b.text.includes('Coordinated'))) {
                this.addBehavior('Coordinated hunting patterns emerging');
            }
        }
    }

    update() {
        this.time++;
        
        // Handle collisions and interactions
        for (let i = 0; i < this.creatures.length; i++) {
            const c = this.creatures[i];
            
            for (let j = i + 1; j < this.creatures.length; j++) {
                const other = this.creatures[j];
                
                const dx = c.x - other.x;
                const dy = c.y - other.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < c.radius + other.radius) {
                    // Predator eats prey
                    if (c.type === 'predator' && other.type !== 'predator' && other.energy > 0) {
                        c.energy += other.energy * 0.5;
                        other.energy = 0;
                        c.kills++;
                    }
                    if (other.type === 'predator' && c.type !== 'predator' && c.energy > 0) {
                        other.energy += c.energy * 0.5;
                        c.energy = 0;
                        other.kills++;
                    }
                    
                    // Scavenger eats dead
                    if (c.type === 'scavenger' && other.energy <= 0) {
                        c.energy += 20;
                    }
                    if (other.type === 'scavenger' && c.energy <= 0) {
                        other.energy += 20;
                    }
                }
            }
        }
        
        // Update all creatures
        this.creatures = this.creatures.filter(c =>
            c.update(this.creatures, this.canvas.width, this.canvas.height)
        );
        
        // Reproduction
        const newCreatures = [];
        this.creatures.forEach(c => {
            if (c.energy > 80 && Math.random() < 0.02) {
                newCreatures.push(c.reproduce());
            }
        });
        this.creatures.push(...newCreatures);
        
        // Spawn food (ambient herbivore spawning)
        if (this.creatures.filter(c => c.type === 'herbivore').length < 10 && Math.random() < 0.05) {
            this.creatures.push(new Creature(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                'herbivore'
            ));
        }
        
        // Generation tracking
        if (this.time % 500 === 0) {
            this.generation++;
            this.checkEmergentBehaviors();
        }
        
        if (this.time % 60 === 0) {
            this.updateUI();
        }
    }

    updateUI() {
        document.getElementById('generation').textContent = this.generation;
        document.getElementById('population').textContent = this.creatures.length;
        
        const herbivores = this.creatures.filter(c => c.type === 'herbivore').length;
        const predators = this.creatures.filter(c => c.type === 'predator').length;
        const scavengers = this.creatures.filter(c => c.type === 'scavenger').length;
        
        document.getElementById('herbivore-count').textContent = herbivores;
        document.getElementById('predator-count').textContent = predators;
        document.getElementById('scavenger-count').textContent = scavengers;
    }

    updateBehaviorUI() {
        const container = document.getElementById('behaviors');
        container.innerHTML = this.behaviors.map(b => `
            <div class="behavior-item">
                <span class="behavior-gen">Gen ${b.gen}</span>
                <span class="behavior-text">${b.text}</span>
            </div>
        `).join('');
    }

    draw() {
        this.ctx.fillStyle = 'rgba(15, 38, 26, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const colors = {
            herbivore: '#4ade80',
            predator: '#f87171',
            scavenger: '#facc15'
        };

        this.creatures.forEach(c => {
            if (c.energy <= 0) return;
            
            const color = colors[c.type];
            const alpha = Math.min(1, c.energy / 100);
            
            // Glow
            const glow = this.ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius * 3);
            glow.addColorStop(0, `${color}${Math.floor(alpha * 80).toString(16).padStart(2, '0')}`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(c.x, c.y, c.radius * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Body
            this.ctx.beginPath();
            this.ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();

            // Direction indicator
            this.ctx.beginPath();
            this.ctx.moveTo(c.x, c.y);
            this.ctx.lineTo(
                c.x + Math.cos(c.direction) * c.radius * 2,
                c.y + Math.sin(c.direction) * c.radius * 2
            );
            this.ctx.strokeStyle = `${color}80`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });
    }

    animate() {
        for (let i = 0; i < this.speed; i++) {
            this.update();
        }
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class BiomorphicApp {
    constructor() {
        this.bgLife = new LifeBackground();
        this.ecosystem = new Ecosystem();
        
        this.bindEvents();
    }

    bindEvents() {
        const speedBtn = document.getElementById('speed-btn');
        const eventBtn = document.getElementById('event-btn');
        const resetBtn = document.getElementById('reset-btn');

        if (speedBtn) {
            speedBtn.addEventListener('click', () => {
                this.ecosystem.speed = this.ecosystem.speed === 1 ? 3 : 1;
                speedBtn.textContent = this.ecosystem.speed === 1 ? '⏩ Speed Up' : '⏸ Normal Speed';
            });
        }

        if (eventBtn) {
            eventBtn.addEventListener('click', () => this.ecosystem.extinctionEvent());
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.ecosystem.init());
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new BiomorphicApp();
});

