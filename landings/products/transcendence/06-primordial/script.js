/**
 * PRIMORDIAL - Genetic Evolver
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('06-primordial');

// DNA-like canvas
const canvas = document.getElementById('primordialCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

let phase = 0;
function animate() {
    ctx.fillStyle = 'rgba(10, 15, 5, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Rising particles (evolution)
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height - (phase * 2 + Math.random() * 100) % canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(50, 205, 50, ${0.2 + Math.random() * 0.3})`;
        ctx.fill();
    }
    
    phase += 1;
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

// DNA Helix visual
const dnaHelix = document.getElementById('dnaHelix');
for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    const offset = Math.sin(i * 0.5) * 60;
    dot.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: #32CD32;
        border-radius: 50%;
        left: ${100 + offset}px;
        top: ${i * 20}px;
        animation: pulse 2s ease-in-out ${i * 0.1}s infinite;
    `;
    dnaHelix.appendChild(dot);
    
    const dot2 = document.createElement('div');
    dot2.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: #006400;
        border-radius: 50%;
        left: ${100 - offset}px;
        top: ${i * 20}px;
        animation: pulse 2s ease-in-out ${i * 0.1 + 0.5}s infinite;
    `;
    dnaHelix.appendChild(dot2);
}

// Evolution interface
const evolveBtn = document.getElementById('evolveBtn');
const evolveOutput = document.getElementById('evolveOutput');

evolveBtn.addEventListener('click', () => {
    const problem = document.getElementById('problemInput').value.trim();
    if (!problem) { document.getElementById('problemInput').focus(); return; }
    
    evolveBtn.disabled = true;
    evolveBtn.textContent = '🧬 Evolving...';
    
    setTimeout(() => {
        const variants = [
            { name: 'Variant Alpha', fitness: 0.92 },
            { name: 'Variant Beta', fitness: 0.87 },
            { name: 'Variant Gamma', fitness: 0.81 }
        ];
        
        document.getElementById('variants').innerHTML = variants.map(v => 
            `<div class="variant-item"><span>${v.name}</span><span class="variant-fitness">${(v.fitness * 100).toFixed(0)}% fit</span></div>`
        ).join('');
        
        document.getElementById('insight').textContent = 
            "After 10 generations, the solution has evolved significantly. The fittest variant combines unexpected traits: simplicity with depth. Evolution found what design couldn't predict.";
        
        evolveOutput.classList.add('visible');
        evolveBtn.disabled = false;
        evolveBtn.textContent = '🧬 Run 10 Generations';
        evolveOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2500);
});

// Connected products
const container = document.getElementById('connectedProducts');
getConnectedProducts('06-primordial').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Evolved!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join PRIMORDIAL'; e.target.reset(); }, 3000);
});

initMiniConstellation('06-primordial');

