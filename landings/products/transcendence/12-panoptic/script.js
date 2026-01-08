/**
 * PANOPTIC - Holographic Viewer
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('12-panoptic');

// Kaleidoscopic canvas
const canvas = document.getElementById('panopticCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let rotation = 0;
function animate() {
    ctx.fillStyle = 'rgba(5, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    // Draw rotating perspective lines
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + rotation;
        const x = cx + Math.cos(angle) * Math.max(canvas.width, canvas.height);
        const y = cy + Math.sin(angle) * Math.max(canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + (i % 2) * 0.1})`;
        ctx.stroke();
    }
    
    rotation += 0.002;
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

// Viewer interface
const renderBtn = document.getElementById('renderBtn');
const viewerOutput = document.getElementById('viewerOutput');
const situationInput = document.getElementById('situationInput');

const perspectives = {
    self: ["From your position, you see threat and opportunity intertwined.", "Your view is colored by past experiences and current desires."],
    other: ["They see a different situation entirely—one where their interests are primary.", "From their angle, your actions appear differently than you intended."],
    observer: ["A neutral observer would note the gap between positions.", "From outside, the pattern is clearer: this is about something deeper."],
    opposite: ["The contrarian sees what everyone ignores: the assumption underlying both sides.", "Inverting the frame: what if the goal itself is wrong?"],
    system: ["The larger system doesn't care about individual perspectives—only outcomes.", "Zoom out: this situation is a symptom of structural dynamics."],
    future: ["Future you has compassion for present you's confusion.", "Looking back, this will seem simpler than it feels now."]
};

renderBtn.addEventListener('click', () => {
    if (!situationInput.value.trim()) {
        situationInput.focus();
        return;
    }
    
    renderBtn.disabled = true;
    renderBtn.textContent = '⊛ Rendering...';
    
    setTimeout(() => {
        const r = arr => arr[Math.floor(Math.random() * arr.length)];
        
        document.querySelector('#selfView p').textContent = r(perspectives.self);
        document.querySelector('#otherView p').textContent = r(perspectives.other);
        document.querySelector('#observerView p').textContent = r(perspectives.observer);
        document.querySelector('#oppositeView p').textContent = r(perspectives.opposite);
        document.querySelector('#systemView p').textContent = r(perspectives.system);
        document.querySelector('#futureView p').textContent = r(perspectives.future);
        document.getElementById('synthesis').textContent = 
            "When all perspectives merge, the truth becomes clear: no single angle holds the complete picture. The answer exists in the integration, not the parts.";
        
        viewerOutput.classList.add('visible');
        renderBtn.disabled = false;
        renderBtn.textContent = '⊛ Render All Angles';
        viewerOutput.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Connected products
const container = document.getElementById('connectedProducts');
getConnectedProducts('12-panoptic').forEach(p => {
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
    e.target.querySelector('button').textContent = 'All Seen!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join PANOPTIC'; e.target.reset(); }, 3000);
});

initMiniConstellation('12-panoptic');

