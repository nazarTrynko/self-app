/**
 * ABYSSAL BIOLUMINESCENCE — Living Darkness
 * 
 * Floating bioluminescent organisms in the deep
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('organisms');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 5; // Tall for scrolling
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Organism class
    class Organism {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            
            // Color variation
            const colors = [
                { r: 0, g: 229, b: 255 },   // cyan
                { r: 255, g: 0, b: 170 },   // magenta
                { r: 170, g: 0, b: 255 },   // purple
                { r: 0, g: 255, b: 136 },   // green
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += this.pulseSpeed;
            
            // Wrap around
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;
        }
        
        draw() {
            const glow = (Math.sin(this.pulse) + 1) / 2;
            const alpha = 0.3 + glow * 0.5;
            const size = this.size * (1 + glow * 0.3);
            
            // Glow
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, size * 10
            );
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, size * 10, 0, Math.PI * 2);
            ctx.fill();
            
            // Core
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha + 0.2})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create organisms - more at deeper depths
    const organisms = [];
    const organismCount = 60;
    
    for (let i = 0; i < organismCount; i++) {
        organisms.push(new Organism());
    }
    
    // Animation loop
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        organisms.forEach(org => {
            org.update();
            org.draw();
        });
        
        requestAnimationFrame(animate);
    };
    
    // Check for reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animate();
    } else {
        // Draw static organisms
        organisms.forEach(org => org.draw());
    }
    
    // Scroll-triggered content reveals
    const sections = document.querySelectorAll('section .content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 1.5s ease';
        observer.observe(section);
    });
    
    // Console message
    console.log('%c🌊 SELF — Abyssal Edition', 'color: #00e5ff; font-size: 14px;');
    console.log('%cFrom the depths, intelligence emerges...', 'color: #ff00aa; font-style: italic;');
});

