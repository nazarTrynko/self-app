/**
 * MORPHEUS - Dream Synthesizer Product Page
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation, isProductVisited } from '../shared/js/navigation.js';

markProductVisited('02-morpheus');

// Dream-like canvas background
const canvas = document.getElementById('dreamCanvas');
const ctx = canvas.getContext('2d');
let blobs = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createBlobs() {
    blobs = [];
    for (let i = 0; i < 8; i++) {
        blobs.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 100 + Math.random() * 200,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            phase: Math.random() * Math.PI * 2,
            color: `rgba(123, 104, 238, ${0.03 + Math.random() * 0.05})`
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(13, 13, 26, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        blob.phase += 0.01;
        
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;
        
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius * (1 + Math.sin(blob.phase) * 0.1), 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
createBlobs();
animate();
window.addEventListener('resize', () => { resizeCanvas(); createBlobs(); });

// Fragments System
const fragmentsList = document.getElementById('fragmentsList');
const fragmentInput = document.getElementById('fragmentInput');
let fragments = [];

fragmentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && fragmentInput.value.trim()) {
        addFragment(fragmentInput.value.trim());
        fragmentInput.value = '';
    }
});

function addFragment(text) {
    fragments.push(text);
    renderFragments();
}

function removeFragment(index) {
    fragments.splice(index, 1);
    renderFragments();
}

function renderFragments() {
    if (fragments.length === 0) {
        fragmentsList.innerHTML = '<div class="fragment-placeholder">Type and press Enter to add fragments...</div>';
        return;
    }
    
    fragmentsList.innerHTML = fragments.map((f, i) => `
        <span class="fragment-tag">
            ${f}
            <button onclick="window.removeFragment(${i})">×</button>
        </span>
    `).join('');
}

window.removeFragment = removeFragment;

// Dream Synthesis
const dreamInput = document.getElementById('dreamInput');
const dreamBtn = document.getElementById('dreamBtn');
const dreamOutput = document.getElementById('dreamOutput');

const dreamResponses = {
    emergence: [
        "From the fragments, a shape forms: what you're really seeking is not {topic}, but the feeling it represents.",
        "The pattern reveals itself: these disparate pieces share a common thread—they all point toward {deeper}.",
        "In the dream state, connections appear that logic couldn't see. What emerges: {insight}."
    ],
    hidden: [
        "The hidden connection: you already knew this. Your unconscious assembled the answer while you were distracted.",
        "What lay beneath: a fear masquerading as a question. The real inquiry is about {real}.",
        "The fragments weren't random. They trace an invisible architecture your mind built without permission."
    ],
    insight: [
        "You are not seeking answers—you are seeking permission to trust what you already know.",
        "The dream speaks: stop looking outward. The synthesis happened long ago. Now you must simply remember.",
        "What you call confusion is actually gestation. The insight is ready to be born."
    ]
};

dreamBtn.addEventListener('click', () => {
    const topic = dreamInput.value.trim();
    
    if (!topic) {
        dreamInput.focus();
        return;
    }
    
    dreamBtn.disabled = true;
    dreamBtn.innerHTML = '<span class="btn-text">Synthesizing dream...</span><span class="btn-icon">◐</span>';
    
    setTimeout(() => {
        const getResponse = (arr) => arr[Math.floor(Math.random() * arr.length)]
            .replace('{topic}', topic)
            .replace('{deeper}', 'transformation')
            .replace('{insight}', 'the question contains its answer')
            .replace('{real}', 'identity');
        
        document.getElementById('emergence').textContent = getResponse(dreamResponses.emergence);
        document.getElementById('hidden').textContent = getResponse(dreamResponses.hidden);
        document.getElementById('insight').textContent = getResponse(dreamResponses.insight);
        
        dreamOutput.classList.add('visible');
        dreamBtn.disabled = false;
        dreamBtn.innerHTML = '<span class="btn-text">Synthesize Dream</span><span class="btn-icon">◐</span>';
        dreamOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Connected Products
const connectedProductsContainer = document.getElementById('connectedProducts');
getConnectedProducts('02-morpheus').forEach(product => {
    const card = document.createElement('a');
    card.href = `../${product.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', product.color.primary);
    card.innerHTML = `
        <span class="connected-symbol">${product.symbol}</span>
        <span class="connected-name">${product.name}</span>
        <span class="connected-tagline">${product.tagline}</span>
    `;
    connectedProductsContainer.appendChild(card);
});

// Waitlist
document.getElementById('waitlistForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Dream Joined!';
    setTimeout(() => { btn.textContent = 'Enter The Dream'; e.target.reset(); }, 3000);
});

initMiniConstellation('02-morpheus');



