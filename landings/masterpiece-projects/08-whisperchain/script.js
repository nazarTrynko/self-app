/* WHISPERCHAIN - Interactive Script */

const canvas = document.getElementById('chainCanvas');
const ctx = canvas.getContext('2d');

let nodes = [];
let connections = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initChain();
}

function initChain() {
    nodes = [];
    
    for (let i = 0; i < 25; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 4 + Math.random() * 6,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            pulse: Math.random() * Math.PI * 2
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(10, 14, 20, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update nodes
    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
    });
    
    // Draw chain connections
    nodes.forEach((n1, i) => {
        // Connect to nearest few nodes
        const distances = nodes.map((n2, j) => {
            if (i === j) return { dist: Infinity, node: n2 };
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            return { dist: Math.sqrt(dx * dx + dy * dy), node: n2 };
        }).sort((a, b) => a.dist - b.dist);
        
        distances.slice(0, 2).forEach(({ dist, node: n2 }) => {
            if (dist < 200) {
                const opacity = 0.15 * (1 - dist / 200);
                
                // Draw chain line
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
                
                // Draw traveling particle
                const progress = (Math.sin(Date.now() * 0.002 + i) + 1) / 2;
                const px = n1.x + (n2.x - n1.x) * progress;
                const py = n1.y + (n2.y - n1.y) * progress;
                
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 158, 11, ${opacity * 2})`;
                ctx.fill();
            }
        });
    });
    
    // Draw nodes
    nodes.forEach(node => {
        const pulseFactor = 0.7 + Math.sin(node.pulse) * 0.3;
        
        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${pulseFactor * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${pulseFactor})`;
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
        btn.textContent = '✓ Chain started!';
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

