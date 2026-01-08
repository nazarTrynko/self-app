import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('07-prophet');

const canvas = document.getElementById('prophetCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

let waves = [];
function animate() {
    ctx.fillStyle = 'rgba(15, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (Math.random() < 0.02) {
        waves.push({ x: canvas.width / 2, y: canvas.height / 2, radius: 10, alpha: 0.5 });
    }
    
    waves.forEach((w, i) => {
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 112, 219, ${w.alpha})`;
        ctx.stroke();
        w.radius += 2;
        w.alpha -= 0.005;
        if (w.alpha <= 0) waves.splice(i, 1);
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

const foreseeBtn = document.getElementById('foreseeBtn');
const foreseeOutput = document.getElementById('foreseeOutput');

foreseeBtn.addEventListener('click', () => {
    if (!document.getElementById('contextInput').value.trim()) {
        document.getElementById('contextInput').focus();
        return;
    }
    
    foreseeBtn.disabled = true;
    foreseeBtn.textContent = '◈ Foreseeing...';
    
    setTimeout(() => {
        const predictions = [
            { need: 'You will need clarity on next steps', confidence: '94%' },
            { need: 'A decision point is approaching', confidence: '87%' },
            { need: 'You will want validation', confidence: '81%' }
        ];
        
        document.getElementById('predictions').innerHTML = predictions.map(p => 
            `<div class="prediction-item"><span>${p.need}</span><span class="prediction-confidence">${p.confidence}</span></div>`
        ).join('');
        
        document.getElementById('insights').textContent = 
            "Pre-computed: The path you're considering has a hidden dependency. Address the underlying constraint first.";
        
        foreseeOutput.classList.add('visible');
        foreseeBtn.disabled = false;
        foreseeBtn.textContent = '◈ Anticipate Needs';
        foreseeOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

const container = document.getElementById('connectedProducts');
getConnectedProducts('07-prophet').forEach(p => {
    const card = document.createElement('a');
    card.href = `../${p.id}/`;
    card.className = 'connected-card';
    card.style.setProperty('--card-color', p.color.primary);
    card.innerHTML = `<span class="connected-symbol">${p.symbol}</span><span class="connected-name">${p.name}</span><span class="connected-tagline">${p.tagline}</span>`;
    container.appendChild(card);
});

document.getElementById('waitlistForm').addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('button').textContent = 'Foreseen!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join PROPHET'; e.target.reset(); }, 3000);
});

initMiniConstellation('07-prophet');

