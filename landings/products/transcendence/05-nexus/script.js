/**
 * NEXUS - Knowledge Graph Builder
 */

import { getConnectedProducts } from '../shared/js/product-data.js';
import { markProductVisited, initMiniConstellation } from '../shared/js/navigation.js';

markProductVisited('05-nexus');

// Network canvas
const canvas = document.getElementById('nexusCanvas');
const ctx = canvas.getContext('2d');
let nodes = [];
let connections = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createNetwork();
}

function createNetwork() {
    nodes = [];
    connections = [];
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: 3 + Math.random() * 4
        });
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() < 0.15) {
                connections.push([i, j]);
            }
        }
    }
}

function animate() {
    ctx.fillStyle = 'rgba(5, 15, 10, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw connections
    connections.forEach(([i, j]) => {
        const a = nodes[i], b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 255, 127, ${0.3 * (1 - dist / 200)})`;
            ctx.stroke();
        }
    });
    
    // Update and draw nodes
    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 127, 0.6)';
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);

// Hero network visualization
const networkViz = document.getElementById('networkViz');
for (let i = 0; i < 12; i++) {
    const node = document.createElement('div');
    const angle = (i / 12) * Math.PI * 2;
    const radius = 120 + (i % 3) * 40;
    node.style.cssText = `
        position: absolute;
        width: 12px;
        height: 12px;
        background: #00FF7F;
        border-radius: 50%;
        left: ${200 + Math.cos(angle) * radius}px;
        top: ${200 + Math.sin(angle) * radius}px;
        transform: translate(-50%, -50%);
        animation: pulse 2s ease-in-out ${i * 0.2}s infinite;
    `;
    networkViz.appendChild(node);
}

// Node input system
const nodesList = document.getElementById('nodesList');
const nodeInput = document.getElementById('nodeInput');
let userNodes = [];

nodeInput.addEventListener('keypress', e => {
    if (e.key === 'Enter' && nodeInput.value.trim()) {
        userNodes.push(nodeInput.value.trim());
        renderNodes();
        nodeInput.value = '';
    }
});

function renderNodes() {
    nodesList.innerHTML = userNodes.map((n, i) => `
        <span class="node-tag">${n}<button onclick="window.removeNode(${i})">×</button></span>
    `).join('');
}

window.removeNode = i => { userNodes.splice(i, 1); renderNodes(); };

// Map generation
const mapBtn = document.getElementById('mapBtn');
const mapOutput = document.getElementById('mapOutput');
const domainInput = document.getElementById('domainInput');

mapBtn.addEventListener('click', () => {
    if (userNodes.length < 2) {
        nodeInput.focus();
        return;
    }
    
    mapBtn.disabled = true;
    mapBtn.textContent = '⬡ Mapping...';
    
    setTimeout(() => {
        // Generate connections
        const conns = [];
        for (let i = 0; i < userNodes.length; i++) {
            for (let j = i + 1; j < userNodes.length; j++) {
                if (Math.random() < 0.6) {
                    const types = ['influences', 'depends on', 'enables', 'contradicts', 'amplifies'];
                    conns.push(`${userNodes[i]} → ${types[Math.floor(Math.random() * types.length)]} → ${userNodes[j]}`);
                }
            }
        }
        
        document.getElementById('connections').innerHTML = conns.map(c => `<div class="connection-item">${c}</div>`).join('');
        document.getElementById('insights').textContent = `Your knowledge graph has ${userNodes.length} nodes and ${conns.length} connections. The most connected concept appears to be "${userNodes[0]}", suggesting it's central to your understanding of ${domainInput.value || 'this domain'}.`;
        
        mapOutput.classList.add('visible');
        mapBtn.disabled = false;
        mapBtn.textContent = '⬡ Generate Knowledge Graph';
        mapOutput.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

// Connected products
const container = document.getElementById('connectedProducts');
getConnectedProducts('05-nexus').forEach(p => {
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
    e.target.querySelector('button').textContent = 'Connected!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Join NEXUS'; e.target.reset(); }, 3000);
});

initMiniConstellation('05-nexus');

