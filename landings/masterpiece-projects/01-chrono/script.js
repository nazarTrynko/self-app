/* CHRONO - Interactive Script */

// Time Canvas Animation
const canvas = document.getElementById('timeCanvas');
const ctx = canvas.getContext('2d');

let gridLines = [];
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initGrid();
}

function initGrid() {
    gridLines = [];
    const spacing = 80;
    
    // Horizontal lines (representing hours)
    for (let y = 0; y < canvas.height + spacing; y += spacing) {
        gridLines.push({
            type: 'h',
            y: y,
            offset: Math.random() * 100,
            speed: 0.5 + Math.random() * 0.5
        });
    }
    
    // Vertical lines (representing days)
    for (let x = 0; x < canvas.width + spacing; x += spacing) {
        gridLines.push({
            type: 'v',
            x: x,
            offset: Math.random() * 100,
            speed: 0.3 + Math.random() * 0.3
        });
    }
    
    // Time particles
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

let time = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += 0.01;
    
    // Draw perspective grid
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)';
    ctx.lineWidth = 1;
    
    gridLines.forEach(line => {
        const wave = Math.sin(time * line.speed + line.offset) * 10;
        
        ctx.beginPath();
        if (line.type === 'h') {
            ctx.moveTo(0, line.y + wave);
            ctx.lineTo(canvas.width, line.y + wave);
        } else {
            ctx.moveTo(line.x + wave, 0);
            ctx.lineTo(line.x + wave, canvas.height);
        }
        ctx.stroke();
    });
    
    // Draw particles flowing forward (representing time moving)
    particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        
        // Reset when off screen
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${p.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
    });
    
    // Draw central glow (representing "now")
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const glowRadius = 300 + Math.sin(time * 2) * 50;
    
    const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
    centerGlow.addColorStop(0, 'rgba(0, 212, 255, 0.03)');
    centerGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)');
    centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = centerGlow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

// Room hover effects
document.querySelectorAll('.room').forEach(room => {
    room.addEventListener('mouseenter', () => {
        room.style.transform = room.classList.contains('room-current') 
            ? 'scale(1.05)' 
            : 'scale(1.02)';
    });
    
    room.addEventListener('mouseleave', () => {
        room.style.transform = '';
    });
});

// Waitlist form
const waitlistForm = document.getElementById('waitlistForm');
if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = waitlistForm.querySelector('input').value;
        
        // Simulate submission
        const button = waitlistForm.querySelector('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<span>Joining...</span>';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = '<span>✓ You\'re on the list!</span>';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.disabled = false;
                waitlistForm.querySelector('input').value = '';
            }, 3000);
        }, 1500);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Keyboard navigation hint
console.log('%c🕰️ CHRONO', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
console.log('%cWalk through time. Navigate your future.', 'font-size: 14px; color: #8892a2;');

