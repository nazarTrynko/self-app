import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('09-synthesis');

const canvas = document.getElementById('synthesisCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

let particles = [];
function animate() {
    ctx.fillStyle = 'rgba(15, 10, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (particles.length < 50 && Math.random() < 0.1) {
        particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, life: 100 });
    }
    
    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.life--;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 179, 71, ${p.life / 100 * 0.5})`;
        ctx.fill();
        
        particles.forEach(p2 => {
            const d = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (d < 100 && d > 0) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(255, 179, 71, ${0.1 * (1 - d / 100)})`;
                ctx.stroke();
            }
        });
        
        if (p.life <= 0) particles.splice(i, 1);
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

const emergeBtn = document.getElementById('emergeBtn');
const emergeOutput = document.getElementById('emergeOutput');

emergeBtn.addEventListener('click', () => {
    if (!document.getElementById('partsInput').value.trim()) {
        document.getElementById('partsInput').focus();
        return;
    }
    
    emergeBtn.disabled = true;
    emergeBtn.textContent = '◎ Analyzing...';
    
    setTimeout(() => {
        document.getElementById('partsView').textContent = 'Each part has its own properties and behaviors in isolation.';
        document.getElementById('interactionView').textContent = 'When parts interact, new dynamics arise that weren\'t present in any single component.';
        document.getElementById('emergenceView').textContent = 'The emergent property is consciousness of the whole—something none of the parts possess individually but arises from their combination.';
        
        emergeOutput.classList.add('visible');
        emergeBtn.disabled = false;
        emergeBtn.textContent = '◎ Find Emergent Properties';
        emergeOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

const container = document.getElementById('connectedProducts');
getConnectedProducts('09-synthesis').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Emerged!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join SYNTHESIS'; e.target.reset(); }, 3000);
});

initMiniConstellation('09-synthesis');

