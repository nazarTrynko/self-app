/**
 * INSTINCT - Intuition Amplifier
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('03-instinct');

// Lightning canvas
const canvas = document.getElementById('instinctCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let lightnings = [];

function createLightning() {
    const startX = Math.random() * canvas.width;
    const points = [{ x: startX, y: 0 }];
    let y = 0;
    
    while (y < canvas.height) {
        y += 20 + Math.random() * 40;
        points.push({
            x: points[points.length - 1].x + (Math.random() - 0.5) * 100,
            y: y
        });
    }
    
    lightnings.push({ points, alpha: 1, decay: 0.02 + Math.random() * 0.03 });
}

function animate() {
    ctx.fillStyle = 'rgba(15, 10, 5, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (Math.random() < 0.02) createLightning();
    
    lightnings.forEach((l, i) => {
        ctx.beginPath();
        ctx.moveTo(l.points[0].x, l.points[0].y);
        l.points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = `rgba(255, 217, 61, ${l.alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        l.alpha -= l.decay;
        if (l.alpha <= 0) lightnings.splice(i, 1);
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

// Sensation selection
let selectedSensation = null;
document.querySelectorAll('.sensation').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sensation').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSensation = btn.dataset.value;
    });
});

// Amplify
const amplifyBtn = document.getElementById('amplifyBtn');
const instinctOutput = document.getElementById('instinctOutput');
const questionInput = document.getElementById('questionInput');

const responses = {
    expand: {
        signal: "Your body is opening. There's a 'yes' in this—an energetic pull forward.",
        meaning: "This direction aligns with something deeper. The expansion you feel is recognition.",
        action: "Move toward it. The hesitation is mind; the expansion is wisdom."
    },
    contract: {
        signal: "Your body is closing. There's a 'no' here—a protective pulling back.",
        meaning: "Something about this doesn't fit. The contraction is your system preserving itself.",
        action: "Honor the warning. Find what's causing the resistance before proceeding."
    },
    static: {
        signal: "Neither pull nor push. This might not be the real question.",
        meaning: "Neutrality suggests you haven't touched the core issue yet.",
        action: "Go deeper. What question would create a strong sensation?"
    }
};

amplifyBtn.addEventListener('click', () => {
    if (!questionInput.value.trim()) {
        questionInput.focus();
        return;
    }
    
    if (!selectedSensation) {
        document.querySelector('.gut-check').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    amplifyBtn.disabled = true;
    amplifyBtn.textContent = '⚡ AMPLIFYING...';
    
    setTimeout(() => {
        const r = responses[selectedSensation];
        document.getElementById('gutSignal').textContent = r.signal;
        document.getElementById('gutMeaning').textContent = r.meaning;
        document.getElementById('gutAction').textContent = r.action;
        
        instinctOutput.classList.add('visible');
        amplifyBtn.disabled = false;
        amplifyBtn.textContent = '⚡ AMPLIFY SIGNAL';
        instinctOutput.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

// Connected
const container = document.getElementById('connectedProducts');
getConnectedProducts('03-instinct').forEach(p => {
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
    e.target.querySelector('button').textContent = '⚡ Joined!';
    setTimeout(() => { e.target.querySelector('button').textContent = '⚡ Amplify'; e.target.reset(); }, 3000);
});

initMiniConstellation('03-instinct');



