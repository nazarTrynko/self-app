// NEGATIVE SPACE - Reveal through absence
const canvas = document.getElementById('reveal-canvas');
const ctx = canvas.getContext('2d');
const instruction = document.getElementById('instruction');
const scrollHint = document.getElementById('scroll-hint');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let targetX = mouseX;
let targetY = mouseY;
let isMouseMoving = false;
let mouseTimeout;
let revealRadius = 0;
let targetRadius = 150;
let hasInteracted = false;
let isMobile = window.matchMedia('(max-width: 768px)').matches;

// Trail points for smooth reveal effect
const trail = [];
const maxTrailLength = 20;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function draw() {
    // Smooth mouse follow
    mouseX = lerp(mouseX, targetX, 0.15);
    mouseY = lerp(mouseY, targetY, 0.15);
    
    // Smooth radius
    revealRadius = lerp(revealRadius, targetRadius, 0.1);
    
    // Add to trail
    trail.push({ x: mouseX, y: mouseY, radius: revealRadius });
    if (trail.length > maxTrailLength) {
        trail.shift();
    }
    
    // Clear canvas (fill with white - the "mask")
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Use composite operation to "cut out" circles
    ctx.globalCompositeOperation = 'destination-out';
    
    // Draw trail of circles (older = smaller, more transparent)
    trail.forEach((point, i) => {
        const progress = i / trail.length;
        const alpha = progress * 0.5;
        const radius = point.radius * (0.3 + progress * 0.7);
        
        const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, radius
        );
        gradient.addColorStop(0, `rgba(0, 0, 0, ${alpha})`);
        gradient.addColorStop(0.7, `rgba(0, 0, 0, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw main reveal circle
    const mainGradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, revealRadius
    );
    mainGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    mainGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
    mainGradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.3)');
    mainGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = mainGradient;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, revealRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';
    
    requestAnimationFrame(draw);
}

// Mouse tracking
document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    
    if (!hasInteracted) {
        hasInteracted = true;
        instruction.classList.add('hidden');
    }
    
    isMouseMoving = true;
    targetRadius = 150;
    
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
        targetRadius = 80;
    }, 100);
});

// Touch support
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    targetX = touch.clientX;
    targetY = touch.clientY;
    
    if (!hasInteracted) {
        hasInteracted = true;
        instruction.classList.add('hidden');
    }
    
    targetRadius = 120;
});

document.addEventListener('touchend', () => {
    targetRadius = 0;
});

// Scroll handling
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Hide scroll hint after scrolling
    if (scrollY > 100) {
        scrollHint.classList.add('hidden');
    }
    
    // Expand reveal area while scrolling
    if (Math.abs(scrollY - lastScrollY) > 5) {
        targetRadius = 200;
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            targetRadius = 150;
        }, 300);
    }
    
    lastScrollY = scrollY;
    
    // Mobile: reveal sections in view
    if (isMobile) {
        revealSectionsInView();
    }
});

// Mobile: reveal sections based on scroll position
function revealSectionsInView() {
    const sections = document.querySelectorAll('.hidden-section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
        
        if (inView) {
            section.classList.add('in-view');
        }
    });
}

// Create custom cursor element
function createCursor() {
    if (isMobile) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => cursor.classList.add('active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));
}

// Initialize
window.addEventListener('resize', () => {
    resize();
    isMobile = window.matchMedia('(max-width: 768px)').matches;
});

resize();
createCursor();

// On mobile, start with canvas hidden and use CSS transitions
if (isMobile) {
    canvas.style.display = 'none';
    revealSectionsInView();
} else {
    draw();
}

