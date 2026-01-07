/* DREAMWEAVER - Interactive Script */

const canvas = document.getElementById('dreamCanvas');
const ctx = canvas.getContext('2d');

let fogLayers = [];
let dreamShapes = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDream();
}

function initDream() {
    // Fog layers
    fogLayers = [];
    for (let i = 0; i < 5; i++) {
        fogLayers.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            width: 200 + Math.random() * 400,
            height: 100 + Math.random() * 200,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: 0.02 + Math.random() * 0.03
        });
    }
    
    // Abstract dream shapes
    dreamShapes = [];
    for (let i = 0; i < 20; i++) {
        dreamShapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 20 + Math.random() * 80,
            sides: Math.floor(3 + Math.random() * 4),
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
            opacity: 0.02 + Math.random() * 0.05,
            hue: 270 + Math.random() * 60 // Purple to pink range
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(10, 8, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw fog layers
    fogLayers.forEach(fog => {
        fog.x += fog.speedX;
        
        if (fog.x < -fog.width) fog.x = canvas.width;
        if (fog.x > canvas.width + fog.width) fog.x = -fog.width;
        
        const gradient = ctx.createRadialGradient(
            fog.x, fog.y, 0,
            fog.x, fog.y, fog.width / 2
        );
        gradient.addColorStop(0, `rgba(124, 58, 237, ${fog.opacity})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(fog.x - fog.width/2, fog.y - fog.height/2, fog.width, fog.height);
    });
    
    // Draw abstract shapes
    dreamShapes.forEach(shape => {
        shape.rotation += shape.rotationSpeed;
        
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        ctx.beginPath();
        for (let i = 0; i < shape.sides; i++) {
            const angle = (i / shape.sides) * Math.PI * 2;
            const x = Math.cos(angle) * shape.size;
            const y = Math.sin(angle) * shape.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        ctx.strokeStyle = `hsla(${shape.hue}, 70%, 60%, ${shape.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
    });
    
    // Central glow
    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 400
    );
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.05)');
    gradient.addColorStop(0.5, 'rgba(244, 114, 182, 0.02)');
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// Portal interaction
const portal = document.querySelector('.portal-core');
if (portal) {
    portal.addEventListener('click', () => {
        portal.style.animation = 'portal-enter 1s ease forwards';
        setTimeout(() => {
            portal.style.animation = '';
        }, 1000);
    });
}

// Form
const form = document.getElementById('waitlistForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = '✓ Dream recorded!';
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

