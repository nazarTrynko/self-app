/**
 * SINGULARITY - The Ultimate Product Page
 * Cosmic convergence visualization, all systems activation
 */

import { products, getProductById, getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation, isProductVisited } from '../shared/js/navigation.js';

// Mark as visited
markProductVisited('15-singularity');

// Canvas Background - Cosmic convergence of all colors
const canvas = document.getElementById('cosmicCanvas');
const ctx = canvas.getContext('2d');

const componentColors = [
    '#F5E6C8', '#7B68EE', '#FFD93D', '#00CED1', '#00FF7F',
    '#32CD32', '#9370DB', '#FF69B4', '#FFB347', '#C0C0C0',
    '#8B7355', '#00FFFF', '#808080', '#9932CC'
];

let particles = [];
let convergencePoint = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    convergencePoint = {
        x: canvas.width * 0.75,
        y: canvas.height * 0.5
    };
}

function createParticles() {
    particles = [];
    const count = 200;
    
    for (let i = 0; i < count; i++) {
        const color = componentColors[Math.floor(Math.random() * componentColors.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * Math.max(canvas.width, canvas.height);
        
        particles.push({
            x: convergencePoint.x + Math.cos(angle) * distance,
            y: convergencePoint.y + Math.sin(angle) * distance,
            targetX: convergencePoint.x,
            targetY: convergencePoint.y,
            speed: 0.5 + Math.random() * 1.5,
            size: 1 + Math.random() * 2,
            color: color,
            alpha: 0.3 + Math.random() * 0.5,
            trail: []
        });
    }
}

function animateBackground() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw convergence glow
    const gradient = ctx.createRadialGradient(
        convergencePoint.x, convergencePoint.y, 0,
        convergencePoint.x, convergencePoint.y, 150
    );
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(convergencePoint.x - 150, convergencePoint.y - 150, 300, 300);
    
    // Animate particles converging
    particles.forEach(p => {
        // Store trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 8) p.trail.shift();
        
        // Draw trail
        p.trail.forEach((t, i) => {
            ctx.beginPath();
            ctx.arc(t.x, t.y, p.size * (i / p.trail.length), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha * (i / p.trail.length) * 0.3;
            ctx.fill();
        });
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        
        // Move toward convergence point
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 5) {
            p.x += (dx / dist) * p.speed;
            p.y += (dy / dist) * p.speed;
        } else {
            // Reset to edge
            const angle = Math.random() * Math.PI * 2;
            const resetDist = 100 + Math.random() * Math.max(canvas.width, canvas.height);
            p.x = convergencePoint.x + Math.cos(angle) * resetDist;
            p.y = convergencePoint.y + Math.sin(angle) * resetDist;
            p.trail = [];
        }
    });
    
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateBackground);
}

resizeCanvas();
createParticles();
animateBackground();

window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});

// Components Wheel
const wheelComponents = document.getElementById('wheelComponents');
const componentDetail = document.getElementById('componentDetail');

const otherProducts = products.filter(p => p.id !== '15-singularity');

otherProducts.forEach((product, i) => {
    const angle = (i / otherProducts.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 200;
    const x = 250 + Math.cos(angle) * radius;
    const y = 250 + Math.sin(angle) * radius;
    
    // Create line to center
    const line = document.createElement('div');
    line.className = 'component-line';
    line.style.background = `linear-gradient(90deg, transparent, ${product.color.primary})`;
    line.style.transform = `rotate(${angle}rad)`;
    wheelComponents.appendChild(line);
    
    // Create node
    const node = document.createElement('div');
    node.className = 'component-node';
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.background = `rgba(${hexToRgb(product.color.primary)}, 0.2)`;
    node.style.border = `2px solid ${product.color.primary}`;
    node.style.color = product.color.primary;
    node.textContent = product.symbol;
    node.title = product.name;
    
    node.addEventListener('mouseenter', () => {
        componentDetail.innerHTML = `
            <h4 style="color: ${product.color.primary}; font-family: var(--font-display); margin-bottom: var(--space-2);">
                ${product.name}
            </h4>
            <p style="margin-bottom: var(--space-2);">${product.tagline}</p>
            <p style="color: var(--color-text-muted); font-size: var(--text-sm);">
                ${product.essence}
            </p>
        `;
    });
    
    node.addEventListener('mouseleave', () => {
        componentDetail.innerHTML = '<p class="detail-prompt">Hover over a component to see its contribution</p>';
    });
    
    node.addEventListener('click', () => {
        window.location.href = `../${product.id}/`;
    });
    
    wheelComponents.appendChild(node);
});

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '255, 255, 255';
}

// Activation Interface
const topicInput = document.getElementById('topicInput');
const activateBtn = document.getElementById('activateBtn');
const singularityOutput = document.getElementById('singularityOutput');
const activationOverlay = document.getElementById('activationOverlay');

// Singularity responses
const singularityResponses = {
    multiModal: [
        "Architect sees the structure. Oracle predicts the outcome. Critic identifies the flaws. Creator offers the alternative. Guardian warns of the risks. Together: {insight}.",
        "Fourteen perspectives converge. What each sees partially, the synthesis sees completely. The pattern that emerges: {insight}.",
        "All systems active. Each mode contributing its unique lens. The integrated view reveals what none could see alone."
    ],
    emergent: [
        "When everything activates, something new emerges: not just analysis, but understanding. Not just prediction, but wisdom.",
        "The super-insight that only full activation produces: {topic} is fundamentally about {deeper}. Everything else is derivative.",
        "Synthesis produces emergence. The answer was always there, but only visible from all angles simultaneously."
    ],
    reveals: [
        "This synthesis reveals that {topic} is not what it appears. The surface question masks the deeper truth.",
        "What becomes clear: you've been asking the wrong question. The right question is: {better_question}",
        "Full activation reveals the constraint you didn't see and the solution it was hiding."
    ],
    final: [
        "If this is my only chance to speak: {topic} matters less than you think, and more than you realize. The path forward is simpler than it appears, but requires courage you've been avoiding.",
        "The final statement: Stop optimizing. Start seeing. What you're seeking is already present, hidden by the very effort to find it.",
        "Everything at once says this: {topic} resolves when you stop treating it as a problem to solve and start treating it as a truth to accept."
    ],
    action: [
        "This demands: immediate clarity, followed by patient action. Begin with the smallest possible step. Then iterate.",
        "The action required: stop. Reflect. Then act from the integration, not the analysis.",
        "What this demands: make the decision you've been avoiding. Full synthesis confirms it's the right one."
    ]
};

function getRandomResponse(category, topic) {
    const responses = singularityResponses[category];
    const response = responses[Math.floor(Math.random() * responses.length)];
    return response
        .replace(/{topic}/g, topic || 'this')
        .replace(/{insight}/g, 'the path through is not around, but deeper')
        .replace(/{deeper}/g, 'transformation, not optimization')
        .replace(/{better_question}/g, 'What would make this unnecessary?');
}

// Activation effect
function showActivationOverlay(callback) {
    activationOverlay.classList.add('active');
    setTimeout(() => {
        activationOverlay.classList.remove('active');
        if (callback) callback();
    }, 2500);
}

activateBtn.addEventListener('click', () => {
    const topic = topicInput.value.trim();
    
    if (!topic) {
        topicInput.focus();
        topicInput.style.borderColor = '#FF6B6B';
        setTimeout(() => topicInput.style.borderColor = '', 2000);
        return;
    }
    
    activateBtn.disabled = true;
    activateBtn.innerHTML = '<span class="btn-text">Achieving Singularity...</span><span class="btn-symbol">✧</span>';
    
    showActivationOverlay(() => {
        // Populate output
        document.getElementById('multiModal').textContent = getRandomResponse('multiModal', topic);
        document.getElementById('emergentInsight').textContent = getRandomResponse('emergent', topic);
        document.getElementById('synthesisReveals').textContent = getRandomResponse('reveals', topic);
        document.getElementById('finalStatement').textContent = getRandomResponse('final', topic);
        document.getElementById('actionDemand').textContent = getRandomResponse('action', topic);
        
        singularityOutput.classList.add('visible');
        
        activateBtn.disabled = false;
        activateBtn.innerHTML = '<span class="btn-text">Achieve Singularity</span><span class="btn-symbol">✧</span>';
        
        singularityOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Nav and hero activation buttons
document.getElementById('activateNav').addEventListener('click', () => {
    document.getElementById('activate').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('activateHero').addEventListener('click', () => {
    document.getElementById('activate').scrollIntoView({ behavior: 'smooth' });
});

// Connected Products (show all 5 connections)
const connectedProductsContainer = document.getElementById('connectedProducts');
const connectedProducts = getConnectedProducts('15-singularity');

connectedProducts.forEach(product => {
    const card = document.createElement('a');
    card.href = `../${product.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', product.color.primary);
    
    card.innerHTML = `
        <span class="connected-symbol">${product.symbol}</span>
        <span class="connected-name">${product.name}</span>
    `;
    
    connectedProductsContainer.appendChild(card);
});

// Waitlist Form
const waitlistForm = document.getElementById('waitlistForm');
waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = waitlistForm.querySelector('button');
    button.innerHTML = '<span>Singularity Achieved!</span><span class="btn-symbol">✧</span>';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<span>Achieve Singularity</span><span class="btn-symbol">✧</span>';
        button.disabled = false;
        waitlistForm.reset();
    }, 3000);
});

// Initialize mini constellation nav
initMiniConstellation('15-singularity');

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Sphere particles
const sphereParticles = document.getElementById('sphereParticles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${componentColors[i % componentColors.length]};
        border-radius: 50%;
        left: ${50 + (Math.random() - 0.5) * 80}%;
        top: ${50 + (Math.random() - 0.5) * 80}%;
        animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        opacity: 0.6;
    `;
    sphereParticles.appendChild(particle);
}



