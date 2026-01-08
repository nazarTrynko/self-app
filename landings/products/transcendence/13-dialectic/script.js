/**
 * DIALECTIC - Paradox Resolver
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('13-dialectic');

// Duality canvas
const canvas = document.getElementById('dialecticCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let phase = 0;
function animate() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Oscillating lines between black and white
    for (let i = 0; i < 20; i++) {
        const y = (canvas.height / 20) * i;
        const offset = Math.sin(phase + i * 0.2) * 50;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width / 2 + offset, y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 + offset, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.1)';
        ctx.stroke();
    }
    
    phase += 0.02;
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

// Resolver interface
const resolveBtn = document.getElementById('resolveBtn');
const resolverOutput = document.getElementById('resolverOutput');
const thesisInput = document.getElementById('thesisInput');
const antithesisInput = document.getElementById('antithesisInput');

const responses = {
    frame: [
        "The hidden frame: you're assuming these are mutually exclusive. But who said you can't have both?",
        "The opposition only exists because you've defined success in one dimension. Expand the definition.",
        "Both positions share an assumption: that resources (time, energy, attention) are fixed. What if they're not?"
    ],
    reframe: [
        "Reframe: instead of 'this OR that', ask 'how might I create conditions where this AND that reinforce each other?'",
        "The question isn't which to choose—it's which sequence and proportion creates harmony.",
        "What if the tension itself is the feature, not the bug? What would embracing both look like?"
    ],
    synthesis: [
        "The synthesis: the opposition was created by incomplete framing. In the larger view, both truths coexist and even require each other.",
        "Beyond either/or: a third position emerges where the tension becomes creative rather than destructive.",
        "The resolution: stop trying to eliminate one side. Instead, find the rhythm that honors both."
    ]
};

resolveBtn.addEventListener('click', () => {
    if (!thesisInput.value.trim() || !antithesisInput.value.trim()) {
        if (!thesisInput.value.trim()) thesisInput.focus();
        else antithesisInput.focus();
        return;
    }
    
    resolveBtn.disabled = true;
    resolveBtn.textContent = '☯ Synthesizing...';
    
    setTimeout(() => {
        const r = arr => arr[Math.floor(Math.random() * arr.length)];
        
        document.getElementById('frame').textContent = r(responses.frame);
        document.getElementById('reframe').textContent = r(responses.reframe);
        document.getElementById('synthesis').textContent = r(responses.synthesis);
        
        resolverOutput.classList.add('visible');
        resolveBtn.disabled = false;
        resolveBtn.textContent = '☯ Find Synthesis';
        resolverOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Connected products
const container = document.getElementById('connectedProducts');
getConnectedProducts('13-dialectic').forEach(p => {
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
    e.target.querySelector('button').textContent = 'Synthesized!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join DIALECTIC'; e.target.reset(); }, 3000);
});

initMiniConstellation('13-dialectic');

