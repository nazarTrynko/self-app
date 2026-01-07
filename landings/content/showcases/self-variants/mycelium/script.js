/**
 * MYCELIUM NETWORK — Nature's Original Neural Net
 * 
 * Organic spreading network visualization
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mycelium');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Colors
    const colors = {
        thread: 'rgba(245, 240, 230, 0.15)',
        node: 'rgba(201, 162, 39, 0.6)',
        glow: 'rgba(201, 162, 39, 0.2)'
    };
    
    // Mycelium node class
    class Node {
        constructor(x, y, parent = null) {
            this.x = x;
            this.y = y;
            this.parent = parent;
            this.children = [];
            this.age = 0;
            this.maxAge = 100 + Math.random() * 200;
            this.growing = true;
            this.size = 2 + Math.random() * 2;
        }
        
        grow() {
            if (!this.growing || this.age > this.maxAge) return;
            
            this.age++;
            
            // Chance to branch
            if (this.age > 20 && Math.random() < 0.02 && this.children.length < 3) {
                const angle = (Math.random() - 0.5) * Math.PI;
                const distance = 20 + Math.random() * 40;
                const newX = this.x + Math.cos(angle) * distance;
                const newY = this.y + Math.sin(angle) * distance + distance * 0.5; // Bias downward
                
                // Stay within bounds
                if (newX > 0 && newX < canvas.width && newY > 0 && newY < canvas.height) {
                    const child = new Node(newX, newY, this);
                    this.children.push(child);
                    nodes.push(child);
                }
            }
            
            // Stop growing eventually
            if (this.age > this.maxAge) {
                this.growing = false;
            }
        }
        
        draw() {
            // Draw connection to parent
            if (this.parent) {
                ctx.beginPath();
                ctx.moveTo(this.parent.x, this.parent.y);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = colors.thread;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            
            // Draw node
            const alpha = Math.min(this.age / 50, 1);
            
            // Glow
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 5
            );
            gradient.addColorStop(0, `rgba(201, 162, 39, ${alpha * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2);
            ctx.fill();
            
            // Core
            ctx.fillStyle = `rgba(201, 162, 39, ${alpha * 0.8})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Initialize nodes
    const nodes = [];
    const seedCount = 5;
    
    for (let i = 0; i < seedCount; i++) {
        const x = Math.random() * canvas.width;
        const y = 100 + Math.random() * 200; // Start near top
        nodes.push(new Node(x, y));
    }
    
    // Animation loop
    let frame = 0;
    
    const animate = () => {
        // Clear with fade effect
        ctx.fillStyle = 'rgba(26, 20, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Grow and draw nodes
        nodes.forEach(node => {
            node.grow();
            node.draw();
        });
        
        // Add new seed nodes occasionally
        if (frame % 500 === 0 && nodes.length < 200) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height * 0.3;
            nodes.push(new Node(x, y));
        }
        
        frame++;
        requestAnimationFrame(animate);
    };
    
    // Check for reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animate();
    } else {
        // Draw static network
        for (let i = 0; i < 100; i++) {
            nodes.forEach(node => node.grow());
        }
        nodes.forEach(node => node.draw());
    }
    
    // Scroll reveal
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
        section.style.transition = 'all 1s ease';
        observer.observe(section);
    });
    
    // Console message
    console.log('%c🍄 SELF — Mycelium Edition', 'color: #c9a227; font-size: 14px;');
    console.log('%cThe network remembers. The network learns.', 'color: #d4c5a9; font-style: italic;');
});

