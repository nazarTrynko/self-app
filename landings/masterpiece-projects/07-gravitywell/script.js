/* GRAVITYWELL - Interactive Script */

const canvas = document.getElementById('gravityCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
let bodies = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initGravity();
}

function initGravity() {
    // Background stars
    stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            twinkle: Math.random() * Math.PI * 2
        });
    }
    
    // Data bodies
    bodies = [];
    for (let i = 0; i < 15; i++) {
        bodies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            mass: 10 + Math.random() * 30,
            hue: 35 + Math.random() * 30 // Gold-orange range
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(3, 7, 18, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars
    stars.forEach(star => {
        star.twinkle += 0.02;
        const opacity = 0.3 + Math.sin(star.twinkle) * 0.3;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
    });
    
    // Simple gravity simulation
    bodies.forEach((b1, i) => {
        bodies.forEach((b2, j) => {
            if (i !== j) {
                const dx = b2.x - b1.x;
                const dy = b2.y - b1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist > 50) {
                    const force = (b2.mass * 0.001) / (dist * dist);
                    b1.vx += (dx / dist) * force;
                    b1.vy += (dy / dist) * force;
                }
            }
        });
    });
    
    // Update and draw bodies
    bodies.forEach(body => {
        body.x += body.vx;
        body.y += body.vy;
        
        // Wrap around
        if (body.x < 0) body.x = canvas.width;
        if (body.x > canvas.width) body.x = 0;
        if (body.y < 0) body.y = canvas.height;
        if (body.y > canvas.height) body.y = 0;
        
        // Gravity well effect (grid distortion hint)
        const wellSize = body.mass * 3;
        const gradient = ctx.createRadialGradient(body.x, body.y, 0, body.x, body.y, wellSize);
        gradient.addColorStop(0, `hsla(${body.hue}, 80%, 50%, 0.1)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(body.x - wellSize, body.y - wellSize, wellSize * 2, wellSize * 2);
        
        // Body
        ctx.beginPath();
        ctx.arc(body.x, body.y, body.mass / 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${body.hue}, 80%, 60%, 0.8)`;
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(body.x, body.y, body.mass / 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${body.hue}, 80%, 50%, 0.2)`;
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// Form
const form = document.getElementById('waitlistForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = '✓ In orbit!';
        setTimeout(() => {
            btn.textContent = 'Join Waitlist →';
            form.querySelector('input').value = '';
        }, 3000);
    });
}

// Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

