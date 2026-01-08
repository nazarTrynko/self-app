import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('11-foundation');

const canvas = document.getElementById('foundationCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

function animate() {
    ctx.fillStyle = 'rgba(10, 8, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Descending layers
    for (let i = 0; i < 10; i++) {
        const y = (Date.now() / 50 + i * 100) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(139, 115, 85, ${0.05 + i * 0.02})`;
        ctx.stroke();
    }
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

const descendBtn = document.getElementById('descendBtn');
const descendOutput = document.getElementById('descendOutput');

descendBtn.addEventListener('click', () => {
    if (!document.getElementById('surfaceInput').value.trim()) {
        document.getElementById('surfaceInput').focus();
        return;
    }
    
    descendBtn.disabled = true;
    descendBtn.textContent = '▽ Descending...';
    
    setTimeout(() => {
        const whys = [
            'Because it feels important',
            'Because importance creates meaning',
            'Because meaning prevents existential void',
            'Because facing the void is terrifying',
            'Because identity depends on continuity'
        ];
        
        document.getElementById('whyChain').innerHTML = whys.map((w, i) => 
            `<div class="why-level" style="--level: ${i}"><span>Level ${i + 1}</span>${w}</div>`
        ).join('');
        
        document.getElementById('bedrockTruth').textContent = 
            'At the deepest level: all surface concerns rest on the need for coherent identity. This is bedrock.';
        
        descendOutput.classList.add('visible');
        descendBtn.disabled = false;
        descendBtn.textContent = '▽ Ask Why (5 Levels)';
        descendOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2500);
});

const container = document.getElementById('connectedProducts');
getConnectedProducts('11-foundation').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Grounded!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join FOUNDATION'; e.target.reset(); }, 3000);
});

initMiniConstellation('11-foundation');

