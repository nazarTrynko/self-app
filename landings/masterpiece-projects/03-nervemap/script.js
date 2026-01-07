/* NERVEMAP - Interactive Script */

const canvas = document.getElementById('nerveCanvas');
const ctx = canvas.getContext('2d');

let nerveParticles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initNerves();
}

function initNerves() {
    nerveParticles = [];
    
    for (let i = 0; i < 100; i++) {
        nerveParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            pulse: Math.random() * Math.PI * 2,
            hue: 170 + Math.random() * 20 // Teal range
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    nerveParticles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;
        
        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        const pulseFactor = 0.5 + Math.sin(p.pulse) * 0.5;
        
        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 50%, ${pulseFactor * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 50%, ${pulseFactor})`;
        ctx.fill();
    });
    
    // Draw nerve-like connections
    nerveParticles.forEach((p1, i) => {
        nerveParticles.slice(i + 1, i + 5).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(13, 148, 136, ${0.1 * (1 - dist / 100)})`;
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// Simulate state changes
let isCalm = true;
const stateLabel = document.querySelector('.state-label');
const stateFill = document.querySelector('.state-fill');
const heartRate = document.querySelector('.heart-rate');

setInterval(() => {
    const variation = Math.random() > 0.7;
    if (variation) {
        isCalm = !isCalm;
        if (isCalm) {
            stateLabel.textContent = 'CALM';
            stateLabel.style.color = '#0d9488';
            stateFill.style.width = '75%';
            stateFill.className = 'state-fill calm';
            heartRate.textContent = 68 + Math.floor(Math.random() * 5);
        } else {
            stateLabel.textContent = 'ALERT';
            stateLabel.style.color = '#dc2626';
            stateFill.style.width = '40%';
            stateFill.className = 'state-fill stress';
            heartRate.textContent = 85 + Math.floor(Math.random() * 10);
        }
    }
}, 5000);

// Form
const form = document.getElementById('waitlistForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = '✓ Joined!';
        setTimeout(() => {
            btn.textContent = 'Join Waitlist →';
            form.querySelector('input').value = '';
        }, 3000);
    });
}

// Reveal animations
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

