import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('08-infinite');

const canvas = document.getElementById('infiniteCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

let zoom = 1;
function animate() {
    ctx.fillStyle = 'rgba(15, 5, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    for (let i = 1; i <= 8; i++) {
        const radius = (i * 50 * zoom) % 400;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 105, 180, ${0.1 - radius / 4000})`;
        ctx.stroke();
    }
    
    zoom += 0.005;
    if (zoom > 10) zoom = 1;
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

const expandBtn = document.getElementById('expandBtn');
const expandOutput = document.getElementById('expandOutput');

expandBtn.addEventListener('click', () => {
    if (!document.getElementById('focusInput').value.trim()) {
        document.getElementById('focusInput').focus();
        return;
    }
    
    expandBtn.disabled = true;
    expandBtn.textContent = '∞ Expanding...';
    
    setTimeout(() => {
        document.getElementById('atomicView').textContent = 'At the smallest scale: individual decisions, specific words, single moments.';
        document.getElementById('localView').textContent = 'At the local level: patterns of behavior, relationships, immediate context.';
        document.getElementById('systemView').textContent = 'At the system level: organizational dynamics, cultural forces, structural constraints.';
        document.getElementById('cosmicView').textContent = 'At the cosmic level: life meaning, generational impact, universal patterns.';
        document.getElementById('synthesis').textContent = 'All levels are present simultaneously. The atomic contains the cosmic; the cosmic manifests in the atomic.';
        
        expandOutput.classList.add('visible');
        expandBtn.disabled = false;
        expandBtn.textContent = '∞ Expand View';
        expandOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

const container = document.getElementById('connectedProducts');
getConnectedProducts('08-infinite').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Expanded!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join INFINITE'; e.target.reset(); }, 3000);
});

initMiniConstellation('08-infinite');

