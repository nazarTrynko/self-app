/**
 * CHRONOS - Temporal Reasoner
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('10-chronos');

// Timeline particles canvas
const canvas = document.getElementById('chronosCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let timeParticles = [];

function createParticles() {
    timeParticles = [];
    for (let i = 0; i < 100; i++) {
        timeParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.5 + Math.random() * 1.5,
            size: 1 + Math.random() * 2,
            alpha: 0.2 + Math.random() * 0.4
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(8, 8, 12, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Horizontal time flow
    timeParticles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 192, 192, ${p.alpha})`;
        ctx.fill();
        
        // Draw tail
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - 20, p.y);
        ctx.strokeStyle = `rgba(70, 130, 180, ${p.alpha * 0.3})`;
        ctx.stroke();
        
        p.x += p.speed;
        if (p.x > canvas.width + 20) {
            p.x = -20;
            p.y = Math.random() * canvas.height;
        }
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
createParticles();
animate();
window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });

// Temporal interface
const traverseBtn = document.getElementById('traverseBtn');
const temporalOutput = document.getElementById('temporalOutput');
const contextInput = document.getElementById('contextInput');

const responses = {
    past: [
        "Looking back, the pattern is clear: this situation has roots in decisions made {years} ago. The seeds were planted in moments that seemed insignificant then.",
        "The past shows a recurring cycle. You've been here before, perhaps in different forms. What was the lesson you didn't fully learn?"
    ],
    present: [
        "Right now is the inflection point. The past has led here; the future branches from this moment. What you choose matters more than you think.",
        "The present holds tension between what was and what could be. This discomfort is not a problem—it's the energy of transformation."
    ],
    future: [
        "Multiple trajectories extend from here. The most likely path follows current momentum. But the most meaningful path requires a deliberate break.",
        "In {years} years, looking back at this moment, what will you wish you had done? That answer is already available to you."
    ],
    synthesis: [
        "Time collapses into one truth: you are not trapped by the past, nor determined by the future. Each moment is a choice to continue or to change.",
        "The temporal field reveals that causality flows both ways. Your vision of the future shapes your present actions, which rewrite the meaning of the past."
    ]
};

traverseBtn.addEventListener('click', () => {
    if (!contextInput.value.trim()) {
        contextInput.focus();
        return;
    }
    
    const pastYears = document.getElementById('pastRange').value;
    const futureYears = document.getElementById('futureRange').value;
    
    traverseBtn.disabled = true;
    traverseBtn.textContent = '⧖ Traversing...';
    
    setTimeout(() => {
        const r = (arr, years) => arr[Math.floor(Math.random() * arr.length)].replace('{years}', years);
        
        document.getElementById('pastPatterns').textContent = r(responses.past, pastYears);
        document.getElementById('presentMoment').textContent = r(responses.present, '');
        document.getElementById('futureTrajectories').textContent = r(responses.future, futureYears);
        document.getElementById('temporalSynthesis').textContent = r(responses.synthesis, '');
        
        temporalOutput.classList.add('visible');
        traverseBtn.disabled = false;
        traverseBtn.textContent = '⧖ Traverse Timeline';
        temporalOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Connected products
const container = document.getElementById('connectedProducts');
getConnectedProducts('10-chronos').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

// Waitlist
document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Time Joined!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join CHRONOS'; e.target.reset(); }, 3000);
});

initMiniConstellation('10-chronos');

