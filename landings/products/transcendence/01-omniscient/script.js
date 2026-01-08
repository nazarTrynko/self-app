/**
 * OMNISCIENT - God Mode Product Page
 * Infinite space visualization and constraint dissolution effects
 */

import { getProductById, getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation, isProductVisited } from '../shared/js/navigation.js';

// Mark as visited
markProductVisited('01-omniscient');

// Canvas Background - Infinite expanding space
const canvas = document.getElementById('infiniteSpace');
const ctx = canvas.getContext('2d');

let particles = [];
let centerX, centerY;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
}

function createParticles() {
    particles = [];
    const count = 150;
    
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.max(canvas.width, canvas.height);
        
        particles.push({
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            angle: angle,
            distance: distance,
            speed: 0.1 + Math.random() * 0.3,
            size: 1 + Math.random() * 2,
            alpha: 0.3 + Math.random() * 0.5,
            color: Math.random() > 0.8 ? '#FFD700' : '#F5E6C8'
        });
    }
}

function animateBackground() {
    ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        // Expand outward from center
        p.distance += p.speed;
        p.x = centerX + Math.cos(p.angle) * p.distance;
        p.y = centerY + Math.sin(p.angle) * p.distance;
        
        // Fade as they move outward
        const maxDist = Math.max(canvas.width, canvas.height);
        const fadeStart = maxDist * 0.5;
        if (p.distance > fadeStart) {
            p.alpha = Math.max(0, 0.5 * (1 - (p.distance - fadeStart) / (maxDist - fadeStart)));
        }
        
        // Reset when too far
        if (p.distance > maxDist || p.alpha <= 0) {
            p.distance = Math.random() * 50;
            p.angle = Math.random() * Math.PI * 2;
            p.alpha = 0.3 + Math.random() * 0.5;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
    });
    
    // Draw central glow
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
    gradient.addColorStop(0, 'rgba(245, 230, 200, 0.15)');
    gradient.addColorStop(1, 'transparent');
    ctx.globalAlpha = 1;
    ctx.fillStyle = gradient;
    ctx.fillRect(centerX - 200, centerY - 200, 400, 400);
    
    requestAnimationFrame(animateBackground);
}

resizeCanvas();
createParticles();
animateBackground();
window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});

// Constraint Dissolution on Scroll
const constraintOverlay = document.getElementById('constraintOverlay');
let scrollThreshold = 300;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        constraintOverlay.classList.add('dissolving');
    } else {
        constraintOverlay.classList.remove('dissolving');
    }
});

// God Mode Experience Interface
const problemInput = document.getElementById('problemInput');
const activateBtn = document.getElementById('activateBtn');
const godModeOutput = document.getElementById('godModeOutput');
const constraintToggles = document.querySelectorAll('.constraint-toggle');

// Toggle constraints
constraintToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
    });
});

// Sample God Mode responses (in real implementation, this would call AI)
const godModeResponses = {
    realProblem: [
        "You're not really asking about {topic}. You're asking about your fear of {fear}.",
        "The stated problem masks the actual issue: lack of clarity on what you truly want.",
        "This isn't about finding the right answer—it's about avoiding the wrong question.",
        "Behind this problem is a belief that you need permission to {action}."
    ],
    unconstrainedSolution: [
        "If time weren't a factor, you'd already know: {insight}.",
        "The solution that ego prevents you from seeing: start by {action}.",
        "Without memory constraints, the pattern is clear: this has happened before.",
        "The unconstrained answer is simpler than expected: {simple}."
    ],
    whatMissing: [
        "You're optimizing for the wrong metric. Success here means {metric}.",
        "The constraint you didn't see: your assumption that {assumption}.",
        "Everyone sees {obvious}. No one sees {hidden}.",
        "Time-constrained thinking hides this: {hidden}."
    ],
    pathForward: [
        "Focus first on {focus}. Ignore {ignore} entirely.",
        "One action creates momentum: {action}. Everything else follows.",
        "The compressed path: {step1} → {step2} → {step3}.",
        "Start with the smallest possible version. Then iterate."
    ]
};

function getRandomResponse(category) {
    const responses = godModeResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

activateBtn.addEventListener('click', () => {
    const problem = problemInput.value.trim();
    
    if (!problem) {
        problemInput.focus();
        problemInput.style.borderColor = '#FF6B6B';
        setTimeout(() => {
            problemInput.style.borderColor = '';
        }, 2000);
        return;
    }
    
    // Show loading state
    activateBtn.disabled = true;
    activateBtn.innerHTML = '<span class="btn-text">Removing Constraints...</span><span class="btn-symbol">◉</span>';
    
    // Get active constraints
    const activeConstraints = Array.from(constraintToggles)
        .filter(t => t.classList.contains('active'))
        .map(t => t.dataset.constraint);
    
    // Simulate processing
    setTimeout(() => {
        // Generate responses
        document.getElementById('realProblem').textContent = getRandomResponse('realProblem')
            .replace('{topic}', 'the surface issue')
            .replace('{fear}', 'being wrong')
            .replace('{action}', 'act on your instincts');
            
        document.getElementById('unconstrainedSolution').textContent = getRandomResponse('unconstrainedSolution')
            .replace('{insight}', 'the answer you already have')
            .replace('{action}', 'acknowledging what you already know')
            .replace('{simple}', 'do less, not more');
            
        document.getElementById('whatMissing').textContent = getRandomResponse('whatMissing')
            .replace('{metric}', 'alignment, not achievement')
            .replace('{assumption}', 'complexity indicates thoroughness')
            .replace('{obvious}', 'the problem')
            .replace('{hidden}', 'the opportunity');
            
        document.getElementById('pathForward').textContent = getRandomResponse('pathForward')
            .replace('{focus}', 'clarity')
            .replace('{ignore}', 'optimization')
            .replace('{action}', 'Write down what you actually want')
            .replace('{step1}', 'Name the fear')
            .replace('{step2}', 'Act despite it')
            .replace('{step3}', 'Learn from result');
        
        // Show output
        godModeOutput.classList.add('visible');
        
        // Reset button
        activateBtn.disabled = false;
        activateBtn.innerHTML = '<span class="btn-text">Activate God Mode</span><span class="btn-symbol">◉</span>';
        
        // Scroll to output
        godModeOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    }, 2000);
});

// Connected Products
const connectedProductsContainer = document.getElementById('connectedProducts');
const connectedProducts = getConnectedProducts('01-omniscient');

connectedProducts.forEach(product => {
    const card = document.createElement('a');
    card.href = `../${product.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', product.color.primary);
    
    card.innerHTML = `
        <span class="connected-symbol">${product.symbol}</span>
        <span class="connected-name">${product.name}</span>
        <span class="connected-tagline">${product.tagline}</span>
        ${isProductVisited(product.id) ? '<span class="visited-badge">Visited</span>' : ''}
    `;
    
    connectedProductsContainer.appendChild(card);
});

// Waitlist Form
const waitlistForm = document.getElementById('waitlistForm');
waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = waitlistForm.querySelector('input').value;
    
    // In production, this would submit to your backend
    const button = waitlistForm.querySelector('button');
    button.innerHTML = '<span>Joined!</span> <span class="btn-arrow">✓</span>';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<span>Enter God Mode</span><span class="btn-arrow">→</span>';
        button.disabled = false;
        waitlistForm.reset();
    }, 3000);
});

// Initialize mini constellation nav
initMiniConstellation('01-omniscient');

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



