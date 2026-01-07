/* PIXELDUST - Interactive Script */

const canvas = document.getElementById('dustCanvas');
const ctx = canvas.getContext('2d');

let dustParticles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDust();
}

function initDust() {
    dustParticles = [];
    
    for (let i = 0; i < 80; i++) {
        dustParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 1 + Math.random() * 3,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: Math.random() * 0.3,
            opacity: 0.1 + Math.random() * 0.3,
            decay: Math.random()
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(15, 13, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    dustParticles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Reset when off screen (falling dust)
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        
        // Draw dust with warm color
        const hue = 30 + p.decay * 20; // Orange-brown range
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 50%, 50%, ${p.opacity})`;
        ctx.fill();
    });
    
    // Subtle rust patches
    const time = Date.now() * 0.001;
    for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.1);
        const radius = 50 + Math.sin(time * 0.5 + i) * 20;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(180, 83, 9, 0.02)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }
    
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
        btn.textContent = '✓ Aging begins...';
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

