/* MINDPALACE - Interactive Script */

const canvas = document.getElementById('palaceCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let columns = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initPalace();
}

function initPalace() {
    // Floating knowledge particles
    particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 2 + Math.random() * 4,
            speedY: -0.2 - Math.random() * 0.3,
            glow: Math.random() * Math.PI * 2,
            hue: 35 + Math.random() * 15 // Gold-amber range
        });
    }
    
    // Architectural columns
    columns = [];
    const columnCount = Math.floor(canvas.width / 200);
    for (let i = 0; i < columnCount; i++) {
        columns.push({
            x: (i + 0.5) * (canvas.width / columnCount),
            width: 20 + Math.random() * 20,
            opacity: 0.03 + Math.random() * 0.03
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(15, 13, 11, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw architectural columns
    columns.forEach(col => {
        const gradient = ctx.createLinearGradient(col.x, 0, col.x, canvas.height);
        gradient.addColorStop(0, `rgba(146, 64, 14, ${col.opacity})`);
        gradient.addColorStop(0.5, `rgba(146, 64, 14, ${col.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(col.x - col.width/2, 0, col.width, canvas.height);
    });
    
    // Draw and update particles
    particles.forEach(p => {
        p.y += p.speedY;
        p.glow += 0.02;
        
        if (p.y < -10) {
            p.y = canvas.height + 10;
            p.x = Math.random() * canvas.width;
        }
        
        const glowFactor = 0.5 + Math.sin(p.glow) * 0.5;
        
        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${glowFactor * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${glowFactor})`;
        ctx.fill();
    });
    
    // Warm ambient light in center
    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 400
    );
    gradient.addColorStop(0, 'rgba(252, 211, 77, 0.03)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
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
        btn.textContent = '✓ Room created!';
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

