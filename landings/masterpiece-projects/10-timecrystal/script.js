/* TIMECRYSTAL - Interactive Script */

const canvas = document.getElementById('crystalCanvas');
const ctx = canvas.getContext('2d');

let crystalFragments = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initCrystals();
}

function initCrystals() {
    crystalFragments = [];
    
    // Create floating crystal fragments
    for (let i = 0; i < 30; i++) {
        crystalFragments.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 10 + Math.random() * 30,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
            speedY: -0.1 - Math.random() * 0.2,
            speedX: (Math.random() - 0.5) * 0.2,
            hue: 200 + Math.random() * 80, // Blue to purple range
            sides: Math.floor(4 + Math.random() * 4),
            opacity: 0.1 + Math.random() * 0.2
        });
    }
}

function drawCrystal(x, y, size, sides, rotation, hue, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    // Glow
    const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
    glowGradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity * 0.5})`);
    glowGradient.addColorStop(1, 'transparent');
    
    ctx.beginPath();
    ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
    ctx.fillStyle = glowGradient;
    ctx.fill();
    
    // Crystal shape
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    
    // Fill with gradient
    const fillGradient = ctx.createLinearGradient(-size, -size, size, size);
    fillGradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity})`);
    fillGradient.addColorStop(1, `hsla(${hue + 40}, 70%, 40%, ${opacity * 0.5})`);
    
    ctx.fillStyle = fillGradient;
    ctx.fill();
    
    ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${opacity * 0.5})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.restore();
}

function animate() {
    ctx.fillStyle = 'rgba(10, 8, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    crystalFragments.forEach(crystal => {
        crystal.x += crystal.speedX;
        crystal.y += crystal.speedY;
        crystal.rotation += crystal.rotationSpeed;
        
        // Wrap around
        if (crystal.y < -crystal.size * 2) {
            crystal.y = canvas.height + crystal.size * 2;
            crystal.x = Math.random() * canvas.width;
        }
        if (crystal.x < -crystal.size * 2) crystal.x = canvas.width + crystal.size * 2;
        if (crystal.x > canvas.width + crystal.size * 2) crystal.x = -crystal.size * 2;
        
        drawCrystal(
            crystal.x, 
            crystal.y, 
            crystal.size, 
            crystal.sides, 
            crystal.rotation, 
            crystal.hue, 
            crystal.opacity
        );
    });
    
    // Central glow
    const centerGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 300
    );
    centerGlow.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
    centerGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.02)');
    centerGlow.addColorStop(1, 'transparent');
    
    ctx.fillStyle = centerGlow;
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
        btn.textContent = '✓ Crystallizing...';
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

