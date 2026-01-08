import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('14-collective');

const canvas = document.getElementById('collectiveCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

let minds = [];
function animate() {
    ctx.fillStyle = 'rgba(10, 5, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (minds.length < 30 && Math.random() < 0.05) {
        minds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: canvas.width / 2,
            targetY: canvas.height / 2,
            speed: 0.5 + Math.random()
        });
    }
    
    minds.forEach((m, i) => {
        const dx = m.targetX - m.x;
        const dy = m.targetY - m.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist > 10) {
            m.x += (dx / dist) * m.speed;
            m.y += (dy / dist) * m.speed;
        } else {
            minds.splice(i, 1);
        }
        
        ctx.beginPath();
        ctx.arc(m.x, m.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(153, 50, 204, 0.6)';
        ctx.fill();
    });
    
    // Central glow
    const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, 100);
    gradient.addColorStop(0, 'rgba(153, 50, 204, 0.1)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(canvas.width/2 - 100, canvas.height/2 - 100, 200, 200);
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

const mergeBtn = document.getElementById('mergeBtn');
const mergeOutput = document.getElementById('mergeOutput');

mergeBtn.addEventListener('click', () => {
    const input = document.getElementById('perspectivesInput').value.trim();
    if (!input) {
        document.getElementById('perspectivesInput').focus();
        return;
    }
    
    mergeBtn.disabled = true;
    mergeBtn.textContent = '⬢ Merging...';
    
    setTimeout(() => {
        const perspectives = input.split('\n').filter(p => p.trim());
        
        document.getElementById('individuals').innerHTML = perspectives.slice(0, 4).map(p => 
            `<div class="individual-item">${p}</div>`
        ).join('') || '<div class="individual-item">Each perspective brings unique insight</div>';
        
        document.getElementById('unified').textContent = 
            'The unified intelligence sees what no single perspective could: the truth lies not in any one view, but in the space between them. Integration reveals the meta-pattern.';
        
        mergeOutput.classList.add('visible');
        mergeBtn.disabled = false;
        mergeBtn.textContent = '⬢ Merge Perspectives';
        mergeOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

const container = document.getElementById('connectedProducts');
getConnectedProducts('14-collective').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Unified!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join COLLECTIVE'; e.target.reset(); }, 3000);
});

initMiniConstellation('14-collective');

