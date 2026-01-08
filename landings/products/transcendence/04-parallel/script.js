/**
 * PARALLEL - Multiverse Explorer Product Page
 * Branching timeline visualization and universe exploration
 */

import { getProductById, getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation, isProductVisited } from '../shared/js/navigation.js';

// Mark as visited
markProductVisited('04-parallel');

// Canvas Background - Branching particle paths
const canvas = document.getElementById('multiverseCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let branches = [];

const universeColors = {
    a: '#00CED1',
    b: '#4169E1',
    c: '#9370DB',
    d: '#FF6B6B'
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    particles = [];
    const count = 80;
    
    for (let i = 0; i < count; i++) {
        const colorKeys = Object.keys(universeColors);
        const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
        
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            vx: (Math.random() - 0.5) * 2,
            vy: -1 - Math.random() * 2,
            size: 1 + Math.random() * 2,
            color: universeColors[colorKey],
            alpha: 0.3 + Math.random() * 0.4,
            trail: []
        });
    }
}

function createBranches() {
    branches = [];
    const centerX = canvas.width / 2;
    const startY = canvas.height;
    
    // Create branching paths
    const angles = [-30, -10, 10, 30];
    const colors = [universeColors.a, universeColors.b, universeColors.c, universeColors.d];
    
    angles.forEach((angle, i) => {
        const radians = (angle * Math.PI) / 180;
        const length = canvas.height * 0.7;
        
        branches.push({
            startX: centerX,
            startY: startY,
            endX: centerX + Math.sin(radians) * length,
            endY: startY - Math.cos(radians) * length,
            color: colors[i],
            progress: 0,
            targetProgress: 0
        });
    });
}

function animateBackground() {
    ctx.fillStyle = 'rgba(5, 10, 15, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw branch paths
    branches.forEach(branch => {
        if (branch.progress < branch.targetProgress) {
            branch.progress += 0.01;
        }
        
        const currentX = branch.startX + (branch.endX - branch.startX) * branch.progress;
        const currentY = branch.startY + (branch.endY - branch.startY) * branch.progress;
        
        // Draw glow
        ctx.beginPath();
        ctx.moveTo(branch.startX, branch.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = branch.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        
        // Draw core line
        ctx.beginPath();
        ctx.moveTo(branch.startX, branch.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = branch.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.6;
        ctx.stroke();
    });
    
    // Animate particles
    ctx.globalAlpha = 1;
    particles.forEach(p => {
        // Store trail position
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 10) p.trail.shift();
        
        // Draw trail
        p.trail.forEach((t, i) => {
            ctx.beginPath();
            ctx.arc(t.x, t.y, p.size * (i / p.trail.length), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha * (i / p.trail.length) * 0.5;
            ctx.fill();
        });
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Branch at random intervals
        if (Math.random() < 0.01) {
            p.vx = (Math.random() - 0.5) * 3;
        }
        
        // Reset when off screen
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
            p.x = canvas.width / 2 + (Math.random() - 0.5) * 100;
            p.y = canvas.height + 10;
            p.trail = [];
        }
    });
    
    requestAnimationFrame(animateBackground);
}

resizeCanvas();
createParticles();
createBranches();

// Animate branches appearing
setTimeout(() => {
    branches.forEach((b, i) => {
        setTimeout(() => {
            b.targetProgress = 1;
        }, i * 200);
    });
}, 500);

animateBackground();

window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
    createBranches();
});

// Explorer Interface
const decisionInput = document.getElementById('decisionInput');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const exploreBtn = document.getElementById('exploreBtn');
const explorerResults = document.getElementById('explorerResults');
const universeDetails = document.getElementById('universeDetails');

// Universe narratives generator
const generateUniverseNarrative = (type, optionAText, optionBText) => {
    const narratives = {
        A: {
            title: 'Universe A: The Safe Path',
            choice: `You chose: ${optionAText || 'Option A'}`,
            fiveYears: [
                'Life is stable. Predictable. You know exactly where you stand.',
                'The worst case scenarios you feared never materialized.',
                'You wonder sometimes about the road not taken.'
            ],
            grateful: 'Security and peace of mind',
            regret: 'Not knowing what could have been',
            surprise: 'How quickly comfort becomes routine',
            advice: 'The certainty you sought was never the point. Growth was.'
        },
        B: {
            title: 'Universe B: The Bold Path',
            choice: `You chose: ${optionBText || 'Option B'}`,
            fiveYears: [
                'The ride was wilder than expected.',
                'Some things worked spectacularly. Others crashed hard.',
                'You are not the same person who made that choice.'
            ],
            grateful: 'The courage to leap',
            regret: 'It depends on which Tuesday you ask',
            surprise: 'How resilient you actually were',
            advice: 'The outcome mattered less than who you became.'
        },
        C: {
            title: 'Universe C: The Third Door',
            choice: 'You chose neither. You found another way.',
            fiveYears: [
                'The binary was false all along.',
                'You created an option no one had offered.',
                'People ask how you thought of it. You don\'t really know.'
            ],
            grateful: 'Refusing to accept limited choices',
            regret: 'None that matter',
            surprise: 'How often the best path isn\'t on the menu',
            advice: 'When all options feel wrong, the frame is wrong.'
        },
        D: {
            title: 'Universe D: The Black Swan',
            choice: 'An external event changed everything',
            fiveYears: [
                'Your careful decision became irrelevant.',
                'Something nobody predicted rewrote all plans.',
                'You adapted. You had no choice.'
            ],
            grateful: 'Learning that control is illusion',
            regret: 'Time spent optimizing what didn\'t matter',
            surprise: 'How little the choice itself mattered',
            advice: 'Optimize for adaptability, not outcomes.'
        }
    };
    
    return narratives[type];
};

exploreBtn.addEventListener('click', () => {
    const decision = decisionInput.value.trim();
    
    if (!decision) {
        decisionInput.focus();
        decisionInput.style.borderColor = '#FF6B6B';
        setTimeout(() => {
            decisionInput.style.borderColor = '';
        }, 2000);
        return;
    }
    
    // Show loading
    exploreBtn.disabled = true;
    exploreBtn.innerHTML = '<span class="btn-text">Splitting realities...</span><span class="btn-icon">⫿</span>';
    
    setTimeout(() => {
        explorerResults.classList.add('visible');
        exploreBtn.disabled = false;
        exploreBtn.innerHTML = '<span class="btn-text">Split Into Universes</span><span class="btn-icon">⫿</span>';
        
        // Scroll to results
        explorerResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
});

// Path selection
document.querySelectorAll('.path').forEach(path => {
    path.addEventListener('click', () => {
        const universe = path.dataset.universe;
        const narrative = generateUniverseNarrative(
            universe,
            optionA.value,
            optionB.value
        );
        
        // Update UI
        document.querySelectorAll('.path').forEach(p => p.style.opacity = '0.4');
        path.style.opacity = '1';
        
        universeDetails.innerHTML = `
            <div class="universe-detail-card">
                <h3 style="color: var(--color-universe-${universe.toLowerCase()})">${narrative.title}</h3>
                <p class="detail-choice">${narrative.choice}</p>
                
                <div class="detail-section">
                    <h4>5 Years From Now</h4>
                    <ul>
                        ${narrative.fiveYears.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Grateful For</span>
                        <span class="detail-value">${narrative.grateful}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Regret</span>
                        <span class="detail-value">${narrative.regret}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Surprised By</span>
                        <span class="detail-value">${narrative.surprise}</span>
                    </div>
                </div>
                
                <div class="detail-section advice">
                    <h4>Message From Future Self</h4>
                    <blockquote>"${narrative.advice}"</blockquote>
                </div>
            </div>
        `;
        
        // Add styles for the detail card
        const style = document.createElement('style');
        style.textContent = `
            .universe-detail-card h3 {
                font-family: var(--font-display);
                font-size: var(--text-xl);
                margin-bottom: var(--space-2);
            }
            .detail-choice {
                color: var(--color-text-muted);
                margin-bottom: var(--space-6);
            }
            .detail-section {
                margin-bottom: var(--space-6);
            }
            .detail-section h4 {
                font-family: var(--font-mono);
                font-size: var(--text-xs);
                color: var(--color-primary);
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin-bottom: var(--space-2);
            }
            .detail-section ul {
                list-style: none;
                padding: 0;
            }
            .detail-section li {
                padding: var(--space-2) 0;
                border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .detail-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: var(--space-4);
                margin-bottom: var(--space-6);
            }
            .detail-item {
                text-align: center;
                padding: var(--space-4);
                background: rgba(255,255,255,0.02);
                border-radius: var(--radius-md);
            }
            .detail-label {
                display: block;
                font-size: var(--text-xs);
                color: var(--color-text-muted);
                margin-bottom: var(--space-1);
            }
            .detail-value {
                font-size: var(--text-sm);
            }
            .advice blockquote {
                font-style: italic;
                font-size: var(--text-lg);
                color: var(--color-primary);
                border-left: 3px solid var(--color-primary);
                padding-left: var(--space-4);
                margin: 0;
            }
            @media (max-width: 768px) {
                .detail-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        if (!document.querySelector('#detail-styles')) {
            style.id = 'detail-styles';
            document.head.appendChild(style);
        }
    });
});

// Connected Products
const connectedProductsContainer = document.getElementById('connectedProducts');
const connectedProducts = getConnectedProducts('04-parallel');

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
    const button = waitlistForm.querySelector('button');
    button.innerHTML = '<span>Joined the Multiverse!</span>';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<span>Enter The Multiverse</span>';
        button.disabled = false;
        waitlistForm.reset();
    }, 3000);
});

// Initialize mini constellation nav
initMiniConstellation('04-parallel');

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



