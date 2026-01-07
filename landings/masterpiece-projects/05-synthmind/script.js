/* SYNTHMIND - Interactive Script */

const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

let nodes = [];
let connections = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initNetwork();
}

function initNetwork() {
    nodes = [];
    const nodeCount = 30;
    
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 3 + Math.random() * 6,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            pulse: Math.random() * Math.PI * 2
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw nodes
    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
    });
    
    // Draw connections
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 1;
    
    nodes.forEach((n1, i) => {
        nodes.slice(i + 1).forEach(n2 => {
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                const opacity = 0.15 * (1 - dist / 150);
                ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.stroke();
            }
        });
    });
    
    // Draw nodes
    nodes.forEach(node => {
        const pulseFactor = 0.7 + Math.sin(node.pulse) * 0.3;
        
        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 4);
        gradient.addColorStop(0, `rgba(59, 130, 246, ${pulseFactor * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${pulseFactor})`;
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
        btn.textContent = '✓ Connected!';
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

