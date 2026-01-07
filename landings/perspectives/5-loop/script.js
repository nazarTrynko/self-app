// THE LOOP - Infinite Recursive Geometry
const canvas = document.getElementById('loop-canvas');
const ctx = canvas.getContext('2d');
const depthDisplay = document.getElementById('depth-value');
const textLayers = document.querySelectorAll('.text-layer');

let width, height, centerX, centerY;
let scrollDepth = 0;
let targetDepth = 0;
let time = 0;

// Geometry parameters
const shapes = [];
const maxShapes = 12;
const baseSize = 200;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    centerX = width / 2;
    centerY = height / 2;
    initShapes();
}

function initShapes() {
    shapes.length = 0;
    for (let i = 0; i < maxShapes; i++) {
        shapes.push({
            rotation: (i / maxShapes) * Math.PI * 2,
            scale: 1 - (i / maxShapes) * 0.8,
            opacity: 1 - (i / maxShapes) * 0.9,
            sides: 4 + Math.floor(i / 3), // Gradually more sides
            depth: i
        });
    }
}

function drawPolygon(cx, cy, radius, sides, rotation) {
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + rotation;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
}

function drawPenroseTriangle(cx, cy, size, rotation) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    
    const s = size;
    const t = s * 0.2; // thickness
    
    // Outer triangle
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.866, s * 0.5);
    ctx.lineTo(-s * 0.866, s * 0.5);
    ctx.closePath();
    ctx.stroke();
    
    // Inner connections (impossible geometry illusion)
    ctx.beginPath();
    ctx.moveTo(0, -s + t * 2);
    ctx.lineTo(s * 0.866 - t, s * 0.5 - t);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(s * 0.866 - t * 2, s * 0.5);
    ctx.lineTo(-s * 0.866 + t, s * 0.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(-s * 0.866 + t * 2, s * 0.5 - t);
    ctx.lineTo(0, -s + t);
    ctx.stroke();
    
    ctx.restore();
}

function draw() {
    time += 0.005;
    
    // Smooth depth transition
    scrollDepth += (targetDepth - scrollDepth) * 0.1;
    
    // Clear with slight fade for trail effect
    ctx.fillStyle = 'rgba(15, 15, 15, 0.1)';
    ctx.fillRect(0, 0, width, height);
    
    // Calculate center offset based on scroll
    const offsetY = scrollDepth * 50;
    const dynamicCenterY = centerY - offsetY * 0.2;
    
    // Draw recursive shapes
    shapes.forEach((shape, i) => {
        const depthInfluence = Math.max(0, 1 - Math.abs(scrollDepth - i) * 0.3);
        const size = baseSize * shape.scale * (1 + depthInfluence * 0.3);
        const rotation = shape.rotation + time * (0.5 - i * 0.03);
        const opacity = shape.opacity * (0.3 + depthInfluence * 0.7);
        
        // Calculate position with subtle spiral
        const spiralAngle = time * 0.2 + i * 0.5;
        const spiralRadius = i * 5 * (1 - depthInfluence);
        const x = centerX + Math.cos(spiralAngle) * spiralRadius;
        const y = dynamicCenterY + Math.sin(spiralAngle) * spiralRadius;
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1 + depthInfluence;
        
        // Alternate between different impossible shapes
        if (i % 3 === 0) {
            drawPenroseTriangle(x, y, size * 0.6, rotation);
        } else {
            drawPolygon(x, y, size, shape.sides, rotation);
            ctx.stroke();
        }
        
        // Draw connecting lines to create depth illusion
        if (i < shapes.length - 1) {
            const nextShape = shapes[i + 1];
            const nextSize = baseSize * nextShape.scale;
            const nextRotation = nextShape.rotation + time * (0.5 - (i + 1) * 0.03);
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            
            for (let j = 0; j < 4; j++) {
                const angle1 = (j / 4) * Math.PI * 2 + rotation;
                const angle2 = (j / 4) * Math.PI * 2 + nextRotation;
                
                const x1 = x + Math.cos(angle1) * size;
                const y1 = y + Math.sin(angle1) * size;
                const x2 = x + Math.cos(angle2) * nextSize;
                const y2 = y + Math.sin(angle2) * nextSize;
                
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        }
    });
    
    // Draw central infinity symbol
    const infSize = 30 + Math.sin(time * 2) * 5;
    const infOpacity = 0.3 + scrollDepth * 0.05;
    
    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(infOpacity, 0.6)})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
        const x = centerX + Math.sin(t) * infSize;
        const y = dynamicCenterY + Math.sin(t * 2) * (infSize * 0.5);
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Update depth display
    depthDisplay.textContent = Math.floor(scrollDepth);
    
    requestAnimationFrame(draw);
}

// Scroll-based depth
function handleScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    targetDepth = (scrollY / maxScroll) * maxShapes;
    
    // Reveal text layers based on scroll
    textLayers.forEach((layer, i) => {
        const threshold = (i / textLayers.length) * maxScroll;
        if (scrollY >= threshold * 0.8) {
            layer.classList.add('visible');
        }
    });
}

// Mouse influence on geometry
let mouseX = 0.5;
let mouseY = 0.5;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / width;
    mouseY = e.clientY / height;
    
    // Subtly influence the center
    centerX = width / 2 + (mouseX - 0.5) * 50;
});

// Scroll handler with throttle
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Initialize
window.addEventListener('resize', resize);
resize();
handleScroll();
draw();

// Initial reveal of first text layer
setTimeout(() => {
    textLayers[0]?.classList.add('visible');
}, 500);

