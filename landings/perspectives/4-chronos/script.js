// CHRONOS - Temporal Distortion Clock
const canvas = document.getElementById('clock-canvas');
const ctx = canvas.getContext('2d');
const timeDisplay = document.getElementById('time-current');
const realTimeDisplay = document.getElementById('real-time');
const driftValue = document.getElementById('drift-value');
const driftZone = document.getElementById('drift-zone');

let width, height, centerX, centerY, radius;
let timeSpeed = 1;
let perceivedTime = new Date();
let lastUpdate = Date.now();
let driftAmount = 0;
let targetDrift = 0;

// Distortion parameters
let distortion = {
    wave: 0,
    pulse: 0,
    jitter: { x: 0, y: 0 }
};

function resize() {
    const container = canvas.parentElement;
    const size = Math.min(container.clientWidth, container.clientHeight);
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    
    width = canvas.width;
    height = canvas.height;
    centerX = width / 2;
    centerY = height / 2;
    radius = Math.min(width, height) * 0.4;
}

function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function drawWarpedCircle(cx, cy, r, warp = 0) {
    ctx.beginPath();
    for (let angle = 0; angle <= Math.PI * 2; angle += 0.02) {
        const warpR = r + Math.sin(angle * 6 + distortion.wave) * warp * 10;
        const x = cx + Math.cos(angle) * warpR + distortion.jitter.x;
        const y = cy + Math.sin(angle) * warpR + distortion.jitter.y;
        if (angle === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
}

function drawHand(angle, length, width, color, glow = false) {
    const x = centerX + Math.cos(angle) * length + distortion.jitter.x * 0.5;
    const y = centerY + Math.sin(angle) * length + distortion.jitter.y * 0.5;
    
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    
    if (glow) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 20;
    }
    
    ctx.beginPath();
    ctx.moveTo(centerX + distortion.jitter.x * 0.3, centerY + distortion.jitter.y * 0.3);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.restore();
}

function draw() {
    const now = Date.now();
    const delta = now - lastUpdate;
    lastUpdate = now;
    
    // Update perceived time based on speed
    const effectiveSpeed = timeSpeed * (1 + driftAmount);
    const timeDelta = delta * effectiveSpeed;
    perceivedTime = new Date(perceivedTime.getTime() + timeDelta);
    
    // Update distortion
    distortion.wave += 0.02 * Math.abs(timeSpeed);
    distortion.pulse = Math.sin(now * 0.003) * 0.5 + 0.5;
    
    // Jitter increases with speed
    const jitterIntensity = Math.abs(timeSpeed - 1) * 2 + Math.abs(driftAmount) * 5;
    distortion.jitter.x = (Math.random() - 0.5) * jitterIntensity;
    distortion.jitter.y = (Math.random() - 0.5) * jitterIntensity;
    
    // Smooth drift
    driftAmount += (targetDrift - driftAmount) * 0.1;
    
    // Clear
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, width, height);
    
    // Draw outer glow
    const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.2);
    glowGradient.addColorStop(0, 'transparent');
    glowGradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.05 + distortion.pulse * 0.05})`);
    glowGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);
    
    // Draw warped clock face
    const warpAmount = Math.abs(timeSpeed - 1) * 0.5 + Math.abs(driftAmount);
    
    // Outer ring
    ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + distortion.pulse * 0.2})`;
    ctx.lineWidth = 2;
    drawWarpedCircle(centerX, centerY, radius, warpAmount);
    ctx.stroke();
    
    // Inner ring
    ctx.strokeStyle = `rgba(255, 0, 255, ${0.2 + distortion.pulse * 0.1})`;
    ctx.lineWidth = 1;
    drawWarpedCircle(centerX, centerY, radius * 0.85, warpAmount * 0.5);
    ctx.stroke();
    
    // Hour markers
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const waveOffset = Math.sin(angle * 3 + distortion.wave) * warpAmount * 5;
        const innerR = radius * 0.75 + waveOffset;
        const outerR = radius * 0.85 + waveOffset;
        
        const x1 = centerX + Math.cos(angle) * innerR;
        const y1 = centerY + Math.sin(angle) * innerR;
        const x2 = centerX + Math.cos(angle) * outerR;
        const y2 = centerY + Math.sin(angle) * outerR;
        
        ctx.strokeStyle = i % 3 === 0 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = i % 3 === 0 ? 3 : 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    
    // Get time components
    const hours = perceivedTime.getHours() % 12;
    const minutes = perceivedTime.getMinutes();
    const seconds = perceivedTime.getSeconds();
    const ms = perceivedTime.getMilliseconds();
    
    // Calculate angles
    const secondAngle = ((seconds + ms / 1000) / 60) * Math.PI * 2 - Math.PI / 2;
    const minuteAngle = ((minutes + seconds / 60) / 60) * Math.PI * 2 - Math.PI / 2;
    const hourAngle = ((hours + minutes / 60) / 12) * Math.PI * 2 - Math.PI / 2;
    
    // Draw hands with warp
    drawHand(hourAngle, radius * 0.5, 4, 'rgba(255, 255, 255, 0.8)');
    drawHand(minuteAngle, radius * 0.65, 3, 'rgba(255, 255, 255, 0.6)');
    drawHand(secondAngle, radius * 0.75, 2, '#00ffff', true);
    
    // Center dot
    ctx.fillStyle = '#ff00ff';
    ctx.shadowColor = '#ff00ff';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    
    // Update displays
    timeDisplay.textContent = formatTime(perceivedTime);
    realTimeDisplay.textContent = formatTime(new Date());
    
    // Drift indicator
    const driftPercent = Math.round(driftAmount * 100);
    driftValue.textContent = (driftPercent >= 0 ? '+' : '') + driftPercent + '%';
    driftValue.style.color = driftAmount > 0 ? '#00ffff' : driftAmount < 0 ? '#ff00ff' : '#888';
    
    requestAnimationFrame(draw);
}

// Speed controls
const controlBtns = document.querySelectorAll('.control-btn');
controlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        controlBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timeSpeed = parseFloat(btn.dataset.speed);
    });
});

// Drift zone interaction
driftZone.addEventListener('mousemove', (e) => {
    const rect = driftZone.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Map position to drift: left = slow, right = fast, up = reverse effect
    targetDrift = (x - 0.5) * 4;
});

driftZone.addEventListener('mouseleave', () => {
    targetDrift = 0;
});

// Touch support for drift zone
driftZone.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = driftZone.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    targetDrift = (x - 0.5) * 4;
});

driftZone.addEventListener('touchend', () => {
    targetDrift = 0;
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case '1': document.getElementById('btn-normal').click(); break;
        case '2': document.getElementById('btn-slow').click(); break;
        case '3': document.getElementById('btn-fast').click(); break;
        case '4': document.getElementById('btn-reverse').click(); break;
    }
});

// Initialize
window.addEventListener('resize', resize);
resize();
draw();

