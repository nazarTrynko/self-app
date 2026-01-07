// THE FIVE - Flowing Mind Bands
const canvas = document.getElementById('flow-canvas');
const ctx = canvas.getContext('2d');

const minds = {
    architect: { color: '#1e3a5f', name: 'Architect', desc: 'The builder of systems. Sees structure where others see chaos. Transforms abstract into concrete, possibility into architecture.', traits: ['Structure', 'Implementation', 'Systems Thinking'] },
    oracle: { color: '#c9a227', name: 'Oracle', desc: 'The seer of patterns. Draws wisdom from the deep well of accumulated knowledge. Predicts, advises, illuminates the path forward.', traits: ['Strategy', 'Prediction', 'Wisdom'] },
    critic: { color: '#8b1e3f', name: 'Critic', desc: 'The guardian of truth. Challenges assumptions, tests foundations, ensures nothing weak survives. Uncomfortable but necessary.', traits: ['Validation', 'Challenge', 'Truth-seeking'] },
    creator: { color: '#6b3fa0', name: 'Creator', desc: 'The source of novelty. Synthesizes the unprecedented, connects the unconnected. Where others see walls, sees doors.', traits: ['Innovation', 'Synthesis', 'Imagination'] },
    guardian: { color: '#2d5a3e', name: 'Guardian', desc: 'The keeper of safety. Watches for danger, protects from harm, ensures responsibility. The conscience that never sleeps.', traits: ['Safety', 'Ethics', 'Protection'] }
};

const mindOrder = ['architect', 'oracle', 'critic', 'creator', 'guardian'];
let bands = [];
let mouseX = 0.5;
let mouseY = 0.5;
let targetMouseX = 0.5;
let targetMouseY = 0.5;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBands();
}

function initBands() {
    bands = mindOrder.map((mind, i) => ({
        mind,
        baseX: (i + 0.5) / mindOrder.length,
        x: (i + 0.5) / mindOrder.length,
        width: 1 / mindOrder.length,
        targetWidth: 1 / mindOrder.length,
        offset: 0,
        phase: Math.random() * Math.PI * 2
    }));
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function draw() {
    const time = Date.now() * 0.001;
    
    // Smooth mouse follow
    mouseX = lerp(mouseX, targetMouseX, 0.05);
    mouseY = lerp(mouseY, targetMouseY, 0.05);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate blend weights based on mouse position
    const blendWeights = {};
    let totalWeight = 0;
    
    bands.forEach((band, i) => {
        const distX = Math.abs(mouseX - band.baseX);
        const weight = Math.max(0, 1 - distX * 3);
        blendWeights[band.mind] = weight;
        totalWeight += weight;
    });
    
    // Normalize weights
    Object.keys(blendWeights).forEach(key => {
        blendWeights[key] = totalWeight > 0 ? blendWeights[key] / totalWeight : 0.2;
    });
    
    // Update blend indicator
    updateBlendIndicator(blendWeights);
    
    // Draw bands with flowing effect
    bands.forEach((band, i) => {
        const color = hexToRgb(minds[band.mind].color);
        
        // Calculate wave offset based on time and mouse
        const waveInfluence = (mouseY - 0.5) * 100;
        band.offset = Math.sin(time * 0.5 + band.phase) * 20 + waveInfluence;
        
        // Expand band near mouse
        const mouseInfluence = 1 - Math.min(1, Math.abs(mouseX - band.baseX) * 4);
        band.targetWidth = (1 / mindOrder.length) * (1 + mouseInfluence * 0.5);
        band.width = lerp(band.width, band.targetWidth, 0.1);
        
        // Calculate position
        let xPos = 0;
        for (let j = 0; j < i; j++) {
            xPos += bands[j].width;
        }
        band.x = xPos + band.width / 2;
        
        // Draw flowing band
        const bandWidth = band.width * canvas.width;
        const bandX = band.x * canvas.width - bandWidth / 2;
        
        // Create gradient with wave distortion
        for (let y = 0; y < canvas.height; y += 2) {
            const waveX = Math.sin((y / canvas.height) * Math.PI * 4 + time + band.phase) * band.offset;
            const alpha = 0.6 + Math.sin((y / canvas.height) * Math.PI * 2 + time * 0.5) * 0.2;
            
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
            ctx.fillRect(bandX + waveX, y, bandWidth, 3);
        }
        
        // Add glow at mouse position
        if (mouseInfluence > 0.3) {
            const gradient = ctx.createRadialGradient(
                mouseX * canvas.width, mouseY * canvas.height, 0,
                mouseX * canvas.width, mouseY * canvas.height, 200
            );
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${mouseInfluence * 0.3})`);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(bandX - 100, 0, bandWidth + 200, canvas.height);
        }
    });
    
    // Draw interference lines where bands meet
    for (let i = 0; i < bands.length - 1; i++) {
        const band1 = bands[i];
        const band2 = bands[i + 1];
        const meetX = (band1.x + band1.width / 2) * canvas.width;
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let y = 0; y < canvas.height; y += 4) {
            const wave1 = Math.sin((y / canvas.height) * Math.PI * 4 + time + band1.phase) * band1.offset;
            const wave2 = Math.sin((y / canvas.height) * Math.PI * 4 + time + band2.phase) * band2.offset;
            const x = meetX + (wave1 + wave2) / 2;
            
            if (y === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    
    requestAnimationFrame(draw);
}

function updateBlendIndicator(weights) {
    const bars = document.querySelectorAll('.blend-bar');
    bars.forEach(bar => {
        const mind = bar.dataset.mind;
        const span = bar.querySelector('span');
        span.style.width = `${weights[mind] * 100}%`;
    });
}

// Mouse tracking
document.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX / window.innerWidth;
    targetMouseY = e.clientY / window.innerHeight;
});

// Touch support
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    targetMouseX = touch.clientX / window.innerWidth;
    targetMouseY = touch.clientY / window.innerHeight;
});

// Mind overlay
const overlay = document.getElementById('mind-overlay');
const mindContent = document.getElementById('mind-content');
const closeBtn = document.getElementById('close-overlay');
const mindLabels = document.querySelectorAll('.mind-label');

mindLabels.forEach(label => {
    label.addEventListener('click', () => {
        const mind = label.dataset.mind;
        const data = minds[mind];
        
        overlay.setAttribute('data-active', mind);
        mindContent.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.desc}</p>
            <div class="mind-traits">
                ${data.traits.map(t => `<span class="trait">${t}</span>`).join('')}
            </div>
        `;
        overlay.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});

// Initialize
window.addEventListener('resize', resize);
resize();
draw();

