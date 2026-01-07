/**
 * SELF Landing Page - Interactive JavaScript
 * Neural Network Background, Mind Blending, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    NeuralBackground.init();
    CognitiveLoop.init();
    MindBlending.init();
    PatternExplorer.init();
    ConfidenceMeter.init();
    ScrollReveal.init();
    SmoothScroll.init();
});

/**
 * Neural Network Background Animation
 * Creates a canvas-based particle system with connecting lines
 */
const NeuralBackground = {
    canvas: null,
    ctx: null,
    particles: [],
    config: {
        particleCount: 80,
        particleSize: 2,
        connectionDistance: 150,
        mouseRadius: 200,
        speed: 0.3,
        colors: {
            particle: 'rgba(0, 240, 255, 0.6)',
            connection: 'rgba(0, 240, 255, 0.15)',
            connectionHover: 'rgba(255, 0, 170, 0.3)'
        }
    },
    mouse: { x: null, y: null },

    init() {
        this.canvas = document.getElementById('neural-bg');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                size: Math.random() * this.config.particleSize + 1
            });
        }
    },

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    },

    drawParticle(particle) {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.config.colors.particle;
        this.ctx.fill();
    },

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.connectionDistance) {
                    const opacity = 1 - (distance / this.config.connectionDistance);
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.15})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.mouseRadius) {
                    const opacity = 1 - (distance / this.config.mouseRadius);
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = `rgba(255, 0, 170, ${opacity * 0.4})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    },

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Mouse repulsion
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = particle.x - this.mouse.x;
                const dy = particle.y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.mouseRadius) {
                    const force = (this.config.mouseRadius - distance) / this.config.mouseRadius;
                    particle.vx += (dx / distance) * force * 0.02;
                    particle.vy += (dy / distance) * force * 0.02;
                }
            }

            // Speed limiting
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > this.config.speed * 2) {
                particle.vx = (particle.vx / speed) * this.config.speed * 2;
                particle.vy = (particle.vy / speed) * this.config.speed * 2;
            }
        });
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateParticles();
        this.drawConnections();
        this.particles.forEach(p => this.drawParticle(p));
        requestAnimationFrame(() => this.animate());
    }
};

/**
 * Cognitive Loop Animation
 * Animates the 6-step cognitive loop in the hero section
 */
const CognitiveLoop = {
    steps: null,
    currentStep: 0,
    interval: null,

    init() {
        this.steps = document.querySelectorAll('.loop-step');
        if (this.steps.length === 0) return;
        
        this.startAnimation();
    },

    startAnimation() {
        // Initial activation
        this.activateStep(0);

        // Cycle through steps
        this.interval = setInterval(() => {
            this.deactivateStep(this.currentStep);
            this.currentStep = (this.currentStep + 1) % this.steps.length;
            this.activateStep(this.currentStep);
        }, 1500);
    },

    activateStep(index) {
        this.steps[index].classList.add('active');
    },

    deactivateStep(index) {
        this.steps[index].classList.remove('active');
    }
};

/**
 * Mind Blending System
 * Interactive pentagon visualization with slider controls
 */
const MindBlending = {
    sliders: null,
    pentagon: null,
    modeDisplay: null,
    mindWeights: {
        architect: 0.5,
        oracle: 0.5,
        critic: 0.5,
        creator: 0.5,
        guardian: 0.5
    },
    // Pentagon vertex positions (relative to center at 200,200, radius ~160)
    vertices: {
        architect: { x: 200, y: 40 },   // top
        oracle: { x: 370, y: 160 },     // top-right
        critic: { x: 320, y: 350 },     // bottom-right
        creator: { x: 80, y: 350 },     // bottom-left
        guardian: { x: 30, y: 160 }     // top-left
    },
    center: { x: 200, y: 200 },

    init() {
        this.sliders = document.querySelectorAll('.blend-slider input');
        this.pentagon = document.getElementById('mindBlendArea');
        this.modeDisplay = document.getElementById('currentMode');
        
        if (this.sliders.length === 0) return;
        
        this.bindEvents();
        this.updateVisualization();
    },

    bindEvents() {
        this.sliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                const mind = e.target.dataset.mind;
                const value = e.target.value / 100;
                this.mindWeights[mind] = value;
                
                // Update display value
                const valueDisplay = e.target.parentElement.querySelector('.blend-value');
                if (valueDisplay) {
                    valueDisplay.textContent = value.toFixed(2);
                }
                
                this.updateVisualization();
                this.updateMode();
            });
        });

        // Mind label hover effects
        const mindLabels = document.querySelectorAll('.mind-label');
        mindLabels.forEach(label => {
            label.addEventListener('mouseenter', () => {
                const mind = label.dataset.mind;
                this.highlightMind(mind);
            });
            label.addEventListener('mouseleave', () => {
                this.clearHighlight();
            });
        });
    },

    updateVisualization() {
        if (!this.pentagon) return;

        // Calculate new polygon points based on weights
        const points = ['architect', 'oracle', 'critic', 'creator', 'guardian'].map(mind => {
            const vertex = this.vertices[mind];
            const weight = this.mindWeights[mind];
            
            // Interpolate between center and vertex based on weight
            const x = this.center.x + (vertex.x - this.center.x) * weight;
            const y = this.center.y + (vertex.y - this.center.y) * weight;
            
            return `${x},${y}`;
        }).join(' ');

        this.pentagon.setAttribute('points', points);
    },

    updateMode() {
        if (!this.modeDisplay) return;

        const weights = Object.values(this.mindWeights);
        const maxWeight = Math.max(...weights);
        const activeMinds = Object.entries(this.mindWeights)
            .filter(([_, w]) => w >= 0.5)
            .map(([m, _]) => m);

        let mode = 'Multi-Perspective';
        
        if (maxWeight >= 0.7 && weights.filter(w => w >= 0.4).length <= 2) {
            const primaryMind = Object.entries(this.mindWeights)
                .find(([_, w]) => w === maxWeight)[0];
            mode = `${this.capitalize(primaryMind)}-Dominant`;
        } else if (activeMinds.length === 2) {
            mode = 'Dual Blend';
        } else if (activeMinds.length >= 4) {
            mode = 'Full Council';
        }

        this.modeDisplay.textContent = mode;
    },

    highlightMind(mind) {
        const card = document.querySelector(`.mind-card[data-mind="${mind}"]`);
        if (card) {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        }
    },

    clearHighlight() {
        document.querySelectorAll('.mind-card').forEach(card => {
            card.style.transform = '';
        });
    },

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

/**
 * Pattern Explorer
 * Tab-based pattern type showcase
 */
const PatternExplorer = {
    tabs: null,
    panels: null,

    init() {
        this.tabs = document.querySelectorAll('.pattern-tab');
        this.panels = document.querySelectorAll('.pattern-panel');
        
        if (this.tabs.length === 0) return;
        
        this.bindEvents();
    },

    bindEvents() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const pattern = tab.dataset.pattern;
                this.switchPattern(pattern);
            });
        });
    },

    switchPattern(pattern) {
        // Update tabs
        this.tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.pattern === pattern);
        });

        // Update panels
        this.panels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.pattern === pattern);
        });
    }
};

/**
 * Confidence Meter
 * Interactive slider demonstrating confidence-driven autonomy
 */
const ConfidenceMeter = {
    slider: null,
    indicator: null,

    init() {
        this.slider = document.getElementById('confidenceSlider');
        this.indicator = document.getElementById('confidenceIndicator');
        
        if (!this.slider || !this.indicator) return;
        
        this.bindEvents();
    },

    bindEvents() {
        this.slider.addEventListener('input', (e) => {
            const value = e.target.value / 100;
            this.updateIndicator(value);
        });
    },

    updateIndicator(value) {
        // Update position
        this.indicator.style.left = `${value * 100}%`;
        
        // Update value display
        const valueDisplay = this.indicator.querySelector('.indicator-value');
        if (valueDisplay) {
            valueDisplay.textContent = value.toFixed(2);
        }

        // Update color based on zone
        let color = '#8b5cf6'; // uncertain
        if (value >= 0.9) {
            color = '#10b981'; // high
        } else if (value >= 0.7) {
            color = '#00f0ff'; // medium
        } else if (value >= 0.5) {
            color = '#f59e0b'; // low
        }
        
        this.indicator.style.background = color;
        this.indicator.style.setProperty('--indicator-color', color);
    }
};

/**
 * Scroll Reveal Animation
 * Reveals elements as they come into viewport
 */
const ScrollReveal = {
    elements: null,
    observer: null,

    init() {
        // Add reveal class to sections and key elements
        const revealSelectors = [
            '.section-header',
            '.mind-card',
            '.consciousness-card',
            '.pillar-card',
            '.law-card',
            '.command-group',
            '.fitness-tracker',
            '.pattern-explorer',
            '.context-budget',
            '.signals-table-container',
            '.minds-visualization',
            '.evolution-cycle',
            '.confidence-meter',
            '.prompt-architecture',
            '.file-tree',
            '.emergence-loop'
        ];

        this.elements = document.querySelectorAll(revealSelectors.join(', '));
        
        if (this.elements.length === 0) return;

        // Add initial class
        this.elements.forEach(el => el.classList.add('reveal'));

        // Create observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements
        this.elements.forEach(el => this.observer.observe(el));
    }
};

/**
 * Smooth Scroll
 * Smooth scrolling for anchor links
 */
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

/**
 * Navigation Active State
 * Updates nav links based on scroll position
 */
const NavHighlight = {
    sections: null,
    navLinks: null,

    init() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-links a');
        
        if (this.sections.length === 0) return;
        
        window.addEventListener('scroll', () => this.update());
    },

    update() {
        const scrollPos = window.scrollY + 100;

        this.sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                this.navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }
};

// Initialize nav highlight after DOM load
document.addEventListener('DOMContentLoaded', () => {
    NavHighlight.init();
});

/**
 * Evolution Cycle Animation
 * Animates the evolution cycle steps
 */
const EvolutionCycle = {
    steps: null,
    currentStep: 0,
    interval: null,

    init() {
        this.steps = document.querySelectorAll('.evolution-section .cycle-step');
        if (this.steps.length === 0) return;
        
        // Start animation when section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startAnimation();
                } else {
                    this.stopAnimation();
                }
            });
        }, { threshold: 0.3 });

        const section = document.querySelector('.evolution-section');
        if (section) observer.observe(section);
    },

    startAnimation() {
        if (this.interval) return;
        
        this.activateStep(0);
        this.interval = setInterval(() => {
            this.deactivateStep(this.currentStep);
            this.currentStep = (this.currentStep + 1) % this.steps.length;
            this.activateStep(this.currentStep);
        }, 1200);
    },

    stopAnimation() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    },

    activateStep(index) {
        this.steps[index].style.borderColor = 'var(--accent-green)';
        this.steps[index].style.transform = 'scale(1.1)';
    },

    deactivateStep(index) {
        this.steps[index].style.borderColor = 'var(--border-color)';
        this.steps[index].style.transform = 'scale(1)';
    }
};

// Initialize evolution cycle after DOM load
document.addEventListener('DOMContentLoaded', () => {
    EvolutionCycle.init();
});

/**
 * Fitness Bar Animation
 * Animates fitness bars when they come into view
 */
const FitnessBars = {
    bars: null,
    animated: false,

    init() {
        this.bars = document.querySelectorAll('.bar-fill');
        if (this.bars.length === 0) return;

        // Store original widths and reset
        this.bars.forEach(bar => {
            bar.dataset.width = bar.style.width;
            bar.style.width = '0%';
        });

        // Observe
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animated = true;
                    this.animate();
                }
            });
        }, { threshold: 0.5 });

        const tracker = document.querySelector('.fitness-tracker');
        if (tracker) observer.observe(tracker);
    },

    animate() {
        this.bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.dataset.width;
            }, index * 150);
        });
    }
};

// Initialize fitness bars after DOM load
document.addEventListener('DOMContentLoaded', () => {
    FitnessBars.init();
});

/**
 * Memory Visualization Animation
 * Subtle animation for the memory graph
 */
const MemoryVis = {
    nodes: null,

    init() {
        this.nodes = document.querySelectorAll('.memory-node:not(.central)');
        if (this.nodes.length === 0) return;

        // Add subtle floating animation
        this.nodes.forEach((node, index) => {
            node.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
            node.style.animationDelay = `${index * 0.3}s`;
        });

        // Add CSS animation if not exists
        if (!document.querySelector('#memory-animation-style')) {
            const style = document.createElement('style');
            style.id = 'memory-animation-style';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
};

// Initialize memory visualization after DOM load
document.addEventListener('DOMContentLoaded', () => {
    MemoryVis.init();
});

/**
 * File Tree Toggle
 * Collapsible file tree (optional enhancement)
 */
const FileTree = {
    init() {
        const folders = document.querySelectorAll('.tree-item.folder');
        
        folders.forEach(folder => {
            folder.addEventListener('click', () => {
                const children = folder.nextElementSibling;
                if (children && children.classList.contains('tree-children')) {
                    children.classList.toggle('collapsed');
                    folder.classList.toggle('open');
                }
            });
        });
    }
};

// Initialize file tree after DOM load
document.addEventListener('DOMContentLoaded', () => {
    FileTree.init();
});

/**
 * Parallax Effect for Hero
 * Subtle parallax on scroll
 */
const HeroParallax = {
    hero: null,
    content: null,

    init() {
        this.hero = document.querySelector('.hero');
        this.content = document.querySelector('.hero-content');
        
        if (!this.hero || !this.content) return;

        window.addEventListener('scroll', () => this.update());
    },

    update() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        if (scrolled < window.innerHeight) {
            this.content.style.transform = `translateY(${rate}px)`;
            this.content.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    }
};

// Initialize parallax after DOM load
document.addEventListener('DOMContentLoaded', () => {
    HeroParallax.init();
});

