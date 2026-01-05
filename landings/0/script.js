/**
 * SELF Landing Page - Interactive Script
 * Synthetic Emergent Learning Framework
 * 
 * Features:
 * - Neural network particle system
 * - Scroll-triggered reveals
 * - Interactive card effects
 * - Smooth scrolling
 */

// ==========================================================================
// Neural Network Particle System
// ==========================================================================

class NeuralCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };
        
        // Configuration
        this.config = {
            particleCount: 80,
            particleColor: 'rgba(139, 92, 246, 0.6)',    // synapse-violet
            connectionColor: 'rgba(59, 130, 246, 0.15)', // neuron-blue
            maxConnectionDistance: 150,
            particleSpeed: 0.3,
            particleSize: { min: 1, max: 3 }
        };
        
        this.init();
        this.bindEvents();
        this.animate();
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.particleSpeed,
                vy: (Math.random() - 0.5) * this.config.particleSpeed,
                size: Math.random() * (this.config.particleSize.max - this.config.particleSize.min) + this.config.particleSize.min,
                opacity: Math.random() * 0.5 + 0.3,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
    }
    
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
    }
    
    updateParticles() {
        const time = Date.now() * 0.001;
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Pulse effect
            particle.currentOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(time + particle.pulsePhase));
            
            // Boundary wrapping
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Mouse interaction - gentle push
            if (this.mouse.x && this.mouse.y) {
                const dx = particle.x - this.mouse.x;
                const dy = particle.y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    particle.x += dx * force * 0.02;
                    particle.y += dy * force * 0.02;
                }
            }
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.config.particleColor.replace('0.6', particle.currentOpacity.toFixed(2));
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.maxConnectionDistance) {
                    const opacity = (1 - distance / this.config.maxConnectionDistance) * 0.3;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = this.config.connectionColor.replace('0.15', opacity.toFixed(2));
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
        
        // Draw connections to mouse
        if (this.mouse.x && this.mouse.y) {
            this.particles.forEach(particle => {
                const dx = particle.x - this.mouse.x;
                const dy = particle.y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const opacity = (1 - distance / this.mouse.radius) * 0.5;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = `rgba(245, 158, 11, ${opacity.toFixed(2)})`; // emergence-amber
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// Scroll Reveal System
// ==========================================================================

class ScrollReveal {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        // Add reveal class to elements that should animate on scroll
        this.setupElements();
        
        // Create intersection observer
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                root: null,
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.1
            }
        );
        
        // Observe all reveal elements
        this.elements.forEach(el => this.observer.observe(el));
    }
    
    setupElements() {
        // Section headers
        document.querySelectorAll('.section-header').forEach((el, i) => {
            el.classList.add('reveal');
            this.elements.push(el);
        });
        
        // Problem cards
        document.querySelectorAll('.problem-card').forEach((el, i) => {
            el.classList.add('reveal', `reveal-delay-${i + 1}`);
            this.elements.push(el);
        });
        
        // Concept cards
        document.querySelectorAll('.concept-card').forEach((el, i) => {
            el.classList.add('reveal', `reveal-delay-${(i % 4) + 1}`);
            this.elements.push(el);
        });
        
        // Architecture layers
        document.querySelectorAll('.arch-layer').forEach((el, i) => {
            el.classList.add('reveal', `reveal-delay-${i + 1}`);
            this.elements.push(el);
        });
        
        // Use case cards
        document.querySelectorAll('.use-case-card').forEach((el, i) => {
            el.classList.add('reveal', `reveal-delay-${i + 1}`);
            this.elements.push(el);
        });
        
        // Section intro
        document.querySelectorAll('.section-intro').forEach(el => {
            el.classList.add('reveal');
            this.elements.push(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally stop observing once revealed
                // this.observer.unobserve(entry.target);
            }
        });
    }
}

// ==========================================================================
// Interactive Card Effects
// ==========================================================================

class CardEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMouseTracking();
        this.setupHeroCTA();
    }
    
    setupMouseTracking() {
        // Track mouse position for radial gradient effect on concept cards
        document.querySelectorAll('.concept-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }
    
    setupHeroCTA() {
        const cta = document.querySelector('.hero-cta');
        if (cta) {
            cta.addEventListener('click', () => {
                const problemSection = document.getElementById('problem');
                if (problemSection) {
                    problemSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }
}

// ==========================================================================
// Text Animation Effects
// ==========================================================================

class TextEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Stagger animation for mode tags on hover
        this.setupModeBlend();
    }
    
    setupModeBlend() {
        const cognitionCard = document.querySelector('[data-concept="cognition"]');
        if (!cognitionCard) return;
        
        const modes = cognitionCard.querySelectorAll('.mode');
        
        cognitionCard.addEventListener('mouseenter', () => {
            modes.forEach((mode, i) => {
                mode.style.transitionDelay = `${i * 50}ms`;
                mode.style.transform = 'translateY(-2px)';
            });
        });
        
        cognitionCard.addEventListener('mouseleave', () => {
            modes.forEach((mode, i) => {
                mode.style.transitionDelay = `${(modes.length - i - 1) * 50}ms`;
                mode.style.transform = 'translateY(0)';
            });
        });
    }
}

// ==========================================================================
// Architecture Diagram Interactions
// ==========================================================================

class ArchitectureDiagram {
    constructor() {
        this.nodes = document.querySelectorAll('.arch-node');
        this.init();
    }
    
    init() {
        this.setupNodeHighlights();
    }
    
    setupNodeHighlights() {
        this.nodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                // Dim other nodes
                this.nodes.forEach(n => {
                    if (n !== node) {
                        n.style.opacity = '0.4';
                    }
                });
            });
            
            node.addEventListener('mouseleave', () => {
                // Restore all nodes
                this.nodes.forEach(n => {
                    n.style.opacity = '1';
                });
            });
        });
    }
}

// ==========================================================================
// Performance Optimizations
// ==========================================================================

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ==========================================================================
// Smooth Scroll for Navigation
// ==========================================================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==========================================================================
// Initialize Everything
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural network background
    const neural = new NeuralCanvas('neural-canvas');
    
    // Initialize scroll reveal
    const reveal = new ScrollReveal();
    
    // Initialize card effects
    const cards = new CardEffects();
    
    // Initialize text effects
    const text = new TextEffects();
    
    // Initialize architecture diagram
    const arch = new ArchitectureDiagram();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Log initialization (for development)
    console.log('%c🧠 SELF Landing Page Initialized', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
    console.log('%cSynthetic Emergent Learning Framework', 'color: #71717a; font-size: 12px;');
});

// ==========================================================================
// Visibility API - Pause animations when tab is not visible
// ==========================================================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Tab is hidden - could pause heavy animations here
        document.body.classList.add('tab-hidden');
    } else {
        // Tab is visible again
        document.body.classList.remove('tab-hidden');
    }
});

