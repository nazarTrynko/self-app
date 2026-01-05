/**
 * INTERSTELLAR VOID — Cosmic Scale
 * 
 * Star field with parallax scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
    // Star field canvas
    const starsCanvas = document.getElementById('stars');
    const parallaxCanvas = document.getElementById('parallax-stars');
    const starsCtx = starsCanvas.getContext('2d');
    const parallaxCtx = parallaxCanvas.getContext('2d');
    
    // Resize canvases
    const resize = () => {
        starsCanvas.width = window.innerWidth;
        starsCanvas.height = window.innerHeight;
        parallaxCanvas.width = window.innerWidth;
        parallaxCanvas.height = window.innerHeight;
        drawStars();
    };
    
    // Star class
    class Star {
        constructor(ctx, layer) {
            this.ctx = ctx;
            this.layer = layer;
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * starsCanvas.width;
            this.y = Math.random() * starsCanvas.height;
            this.size = Math.random() * (this.layer === 'far' ? 1.5 : 2.5) + 0.5;
            this.twinkleSpeed = Math.random() * 0.02 + 0.01;
            this.twinklePhase = Math.random() * Math.PI * 2;
            this.baseOpacity = Math.random() * 0.5 + 0.3;
            
            // Color variation
            const colors = ['#ffffff', '#ffd700', '#87ceeb', '#ffb6c1'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        draw(scrollOffset = 0) {
            const twinkle = Math.sin(Date.now() * this.twinkleSpeed + this.twinklePhase);
            const opacity = this.baseOpacity + twinkle * 0.2;
            
            // Parallax offset
            const parallaxFactor = this.layer === 'far' ? 0.1 : 0.3;
            const y = (this.y - scrollOffset * parallaxFactor + starsCanvas.height) % starsCanvas.height;
            
            this.ctx.beginPath();
            this.ctx.arc(this.x, y, this.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.color;
            this.ctx.globalAlpha = opacity;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
            
            // Glow for larger stars
            if (this.size > 1.5) {
                const gradient = this.ctx.createRadialGradient(
                    this.x, y, 0,
                    this.x, y, this.size * 3
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');
                this.ctx.fillStyle = gradient;
                this.ctx.globalAlpha = opacity * 0.3;
                this.ctx.beginPath();
                this.ctx.arc(this.x, y, this.size * 3, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.globalAlpha = 1;
            }
        }
    }
    
    // Create stars
    const farStars = [];
    const nearStars = [];
    
    for (let i = 0; i < 200; i++) {
        farStars.push(new Star(starsCtx, 'far'));
    }
    
    for (let i = 0; i < 50; i++) {
        nearStars.push(new Star(parallaxCtx, 'near'));
    }
    
    // Draw function
    let scrollY = 0;
    
    const drawStars = () => {
        starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
        parallaxCtx.clearRect(0, 0, parallaxCanvas.width, parallaxCanvas.height);
        
        farStars.forEach(star => star.draw(scrollY));
        nearStars.forEach(star => star.draw(scrollY));
    };
    
    // Animation loop
    const animate = () => {
        drawStars();
        requestAnimationFrame(animate);
    };
    
    // Scroll handler
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });
    
    // Initialize
    resize();
    window.addEventListener('resize', resize);
    
    // Check for reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animate();
    } else {
        drawStars();
    }
    
    // Scroll reveal for content
    const revealElements = document.querySelectorAll('.content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1.5s ease';
        observer.observe(el);
    });
    
    // Console message
    console.log('%c✨ SELF — Interstellar Edition', 'color: #ffd700; font-size: 14px;');
    console.log('%cAcross the cosmic void, intelligence emerges...', 'color: #87ceeb; font-style: italic;');
});

