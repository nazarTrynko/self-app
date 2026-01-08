/**
 * Book Genesis Engine — Particle Background
 * Animated particle canvas with theme-aware colors
 * 
 * Performance optimized with requestAnimationFrame and canvas pooling
 */

const ParticleBackground = (function() {
    'use strict';

    // Default configuration
    const defaultConfig = {
        containerId: 'bg-canvas',
        particleCount: 50,
        particleSize: { min: 1, max: 3 },
        particleSpeed: { min: 0.1, max: 0.5 },
        connectionDistance: 150,
        connectionOpacity: 0.15,
        mouseInteraction: true,
        mouseRadius: 200,
        color: null, // null = use CSS custom property
        responsive: true,
        reducedMotion: true
    };

    // Create particle background instance
    function create(config = {}) {
        const settings = { ...defaultConfig, ...config };
        
        // Check for reduced motion preference
        if (settings.reducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return { destroy: () => {} };
        }

        let container = document.getElementById(settings.containerId);
        if (!container) {
            // Create container if it doesn't exist
            container = document.createElement('div');
            container.id = settings.containerId;
            container.className = 'bg-canvas';
            document.body.prepend(container);
        }

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        container.appendChild(canvas);

        // State
        let particles = [];
        let mousePosition = { x: null, y: null };
        let animationId = null;
        let isRunning = false;

        // Get accent color from CSS or config
        function getAccentColor() {
            if (settings.color) return settings.color;
            
            const style = getComputedStyle(document.documentElement);
            const rgb = style.getPropertyValue('--accent-primary-rgb').trim();
            
            if (rgb) {
                return `rgb(${rgb})`;
            }
            
            return 'rgb(212, 165, 116)'; // Default gold
        }

        // Parse color to RGB values
        function parseColor(color) {
            if (color.startsWith('rgb')) {
                const match = color.match(/\d+/g);
                return match ? match.map(Number) : [212, 165, 116];
            }
            
            if (color.startsWith('#')) {
                const hex = color.slice(1);
                return [
                    parseInt(hex.substr(0, 2), 16),
                    parseInt(hex.substr(2, 2), 16),
                    parseInt(hex.substr(4, 2), 16)
                ];
            }
            
            return [212, 165, 116];
        }

        // Resize canvas
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Adjust particle count for mobile
            if (settings.responsive && window.innerWidth < 768) {
                const targetCount = Math.floor(settings.particleCount * 0.5);
                while (particles.length > targetCount) {
                    particles.pop();
                }
            }
        }

        // Create particle
        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: settings.particleSize.min + Math.random() * (settings.particleSize.max - settings.particleSize.min),
                speedX: (Math.random() - 0.5) * settings.particleSpeed.max,
                speedY: (Math.random() - 0.5) * settings.particleSpeed.max,
                opacity: 0.3 + Math.random() * 0.7
            };
        }

        // Initialize particles
        function initParticles() {
            particles = [];
            const count = settings.responsive && window.innerWidth < 768 
                ? Math.floor(settings.particleCount * 0.5)
                : settings.particleCount;
                
            for (let i = 0; i < count; i++) {
                particles.push(createParticle());
            }
        }

        // Update particle positions
        function updateParticles() {
            particles.forEach(p => {
                // Move particle
                p.x += p.speedX;
                p.y += p.speedY;
                
                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                
                // Mouse interaction
                if (settings.mouseInteraction && mousePosition.x !== null) {
                    const dx = mousePosition.x - p.x;
                    const dy = mousePosition.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < settings.mouseRadius) {
                        const force = (settings.mouseRadius - distance) / settings.mouseRadius;
                        p.x -= dx * force * 0.02;
                        p.y -= dy * force * 0.02;
                    }
                }
            });
        }

        // Draw particles and connections
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const [r, g, b] = parseColor(getAccentColor());
            
            // Draw connections
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${settings.connectionOpacity})`;
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < settings.connectionDistance) {
                        const opacity = (1 - distance / settings.connectionDistance) * settings.connectionOpacity;
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            // Draw particles
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.6})`;
                ctx.fill();
            });
        }

        // Animation loop
        function animate() {
            if (!isRunning) return;
            
            updateParticles();
            draw();
            animationId = requestAnimationFrame(animate);
        }

        // Start animation
        function start() {
            if (isRunning) return;
            isRunning = true;
            animate();
        }

        // Stop animation
        function stop() {
            isRunning = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        }

        // Destroy instance
        function destroy() {
            stop();
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            canvas.remove();
        }

        // Event handlers
        function handleMouseMove(e) {
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
        }

        function handleMouseLeave() {
            mousePosition.x = null;
            mousePosition.y = null;
        }

        // Initialize
        resize();
        initParticles();
        
        // Event listeners
        window.addEventListener('resize', resize);
        
        if (settings.mouseInteraction) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);
        }
        
        // Visibility change handling
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        });
        
        // Start animation
        start();

        // Return public API
        return {
            start,
            stop,
            destroy,
            resize,
            setColor: (color) => { settings.color = color; },
            getParticleCount: () => particles.length
        };
    }

    // Return factory
    return { create };
})();

// Auto-initialize if container exists
if (typeof module === 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('bg-canvas') || 
                         document.querySelector('.bg-canvas');
        if (container) {
            ParticleBackground.create({ containerId: container.id || 'bg-canvas' });
        }
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ParticleBackground;
}


