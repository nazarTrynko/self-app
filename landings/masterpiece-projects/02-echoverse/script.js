/* ECHOVERSE - Interactive Script */

const canvas = document.getElementById('soundCanvas');
const ctx = canvas.getContext('2d');

let soundWaves = [];
let orbs = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initSound();
}

function initSound() {
    // Sound wave sources
    soundWaves = [];
    const sourceCount = 8;
    
    for (let i = 0; i < sourceCount; i++) {
        soundWaves.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 0,
            maxRadius: 150 + Math.random() * 200,
            speed: 0.5 + Math.random() * 1,
            opacity: 0.3 + Math.random() * 0.3,
            hue: 160 + Math.random() * 40 // Teal to green range
        });
    }
    
    // Floating orbs (conversations)
    orbs = [];
    for (let i = 0; i < 15; i++) {
        orbs.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 3 + Math.random() * 8,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            pulse: Math.random() * Math.PI * 2,
            brightness: 0.3 + Math.random() * 0.5
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw expanding sound waves
    soundWaves.forEach(wave => {
        wave.radius += wave.speed;
        
        if (wave.radius > wave.maxRadius) {
            wave.radius = 0;
            wave.x = Math.random() * canvas.width;
            wave.y = Math.random() * canvas.height;
        }
        
        const opacity = wave.opacity * (1 - wave.radius / wave.maxRadius);
        
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${wave.hue}, 100%, 50%, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    });
    
    // Draw floating orbs
    orbs.forEach(orb => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        orb.pulse += 0.02;
        
        // Wrap around
        if (orb.x < 0) orb.x = canvas.width;
        if (orb.x > canvas.width) orb.x = 0;
        if (orb.y < 0) orb.y = canvas.height;
        if (orb.y > canvas.height) orb.y = 0;
        
        const pulseFactor = 1 + Math.sin(orb.pulse) * 0.3;
        const size = orb.size * pulseFactor;
        
        // Glow
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, size * 3);
        gradient.addColorStop(0, `rgba(0, 255, 213, ${orb.brightness})`);
        gradient.addColorStop(1, 'rgba(0, 255, 213, 0)');
        
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 213, ${orb.brightness})`;
        ctx.fill();
    });
    
    // Draw connections between nearby orbs
    orbs.forEach((orb1, i) => {
        orbs.slice(i + 1).forEach(orb2 => {
            const dx = orb1.x - orb2.x;
            const dy = orb1.y - orb2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(orb1.x, orb1.y);
                ctx.lineTo(orb2.x, orb2.y);
                ctx.strokeStyle = `rgba(0, 255, 213, ${0.1 * (1 - dist / 150)})`;
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// Form handling
const form = document.getElementById('waitlistForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = '✓ Joined!';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #10b981)';
        setTimeout(() => {
            btn.textContent = 'Join Waitlist →';
            btn.style.background = '';
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

