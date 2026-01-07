/**
 * SELF Neural Consciousness Background
 * A living particle system that responds to user behavior and mind states
 */

class NeuralConsciousness {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.scrollY = 0;
    this.activeMind = 'oracle'; // default mind
    this.mindIntensity = 0.5;
    
    // Mind color schemes
    this.mindColors = {
      architect: { primary: '#3b82f6', secondary: '#60a5fa', glow: 'rgba(59, 130, 246, 0.3)' },
      oracle: { primary: '#8b5cf6', secondary: '#a78bfa', glow: 'rgba(139, 92, 246, 0.3)' },
      critic: { primary: '#f59e0b', secondary: '#fbbf24', glow: 'rgba(245, 158, 11, 0.3)' },
      creator: { primary: '#ec4899', secondary: '#f472b6', glow: 'rgba(236, 72, 153, 0.3)' },
      guardian: { primary: '#10b981', secondary: '#34d399', glow: 'rgba(16, 185, 129, 0.3)' },
      neutral: { primary: '#00f0ff', secondary: '#ff00aa', glow: 'rgba(0, 240, 255, 0.2)' }
    };
    
    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }
  
  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }
  
  init() {
    // Create particles based on screen size
    const particleCount = Math.min(80, Math.floor((this.width * this.height) / 15000));
    this.particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }
    
    // Create central consciousness node
    this.centralNode = {
      x: this.width / 2,
      y: this.height / 2,
      radius: 4,
      pulsePhase: 0,
      connections: []
    };
  }
  
  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      baseVx: (Math.random() - 0.5) * 0.5,
      baseVy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      mindAffinity: ['architect', 'oracle', 'critic', 'creator', 'guardian'][Math.floor(Math.random() * 5)]
    };
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });
    
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    });
    
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    });
  }
  
  setActiveMind(mind, intensity = 0.7) {
    this.activeMind = mind;
    this.mindIntensity = intensity;
  }
  
  update() {
    // Smooth mouse tracking
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.08;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.08;
    
    const colors = this.mindColors[this.activeMind] || this.mindColors.neutral;
    
    this.particles.forEach((p, i) => {
      // Base movement
      p.x += p.vx;
      p.y += p.vy;
      
      // Mouse attraction (particles flow toward cursor)
      const dx = this.mouseX - p.x;
      const dy = this.mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 250) {
        const force = (250 - dist) / 250 * 0.02;
        p.vx += dx * force * 0.01;
        p.vy += dy * force * 0.01;
      }
      
      // Mind affinity - particles with matching affinity become more active
      if (p.mindAffinity === this.activeMind) {
        p.opacity = Math.min(0.9, p.opacity + 0.01);
        p.radius = Math.min(3.5, p.radius + 0.02);
      } else {
        p.opacity = Math.max(0.15, p.opacity - 0.005);
        p.radius = Math.max(1, p.radius - 0.01);
      }
      
      // Damping
      p.vx *= 0.98;
      p.vy *= 0.98;
      
      // Return to base velocity
      p.vx += (p.baseVx - p.vx) * 0.01;
      p.vy += (p.baseVy - p.vy) * 0.01;
      
      // Boundary wrapping
      if (p.x < -50) p.x = this.width + 50;
      if (p.x > this.width + 50) p.x = -50;
      if (p.y < -50) p.y = this.height + 50;
      if (p.y > this.height + 50) p.y = -50;
      
      // Pulse animation
      p.pulsePhase += 0.02;
    });
    
    // Update central node
    this.centralNode.pulsePhase += 0.03;
    this.centralNode.x = this.width / 2;
    this.centralNode.y = Math.max(this.height / 2 - this.scrollY * 0.3, 100);
  }
  
  draw() {
    // Clear with fade effect for trails
    this.ctx.fillStyle = 'rgba(8, 8, 12, 0.15)';
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    const colors = this.mindColors[this.activeMind] || this.mindColors.neutral;
    
    // Draw connections between nearby particles
    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.15 * this.mindIntensity;
          
          // Connection color based on particle affinity
          let connectionColor = colors.primary;
          if (p1.mindAffinity === this.activeMind || p2.mindAffinity === this.activeMind) {
            connectionColor = colors.secondary;
          }
          
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = connectionColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', '');
          
          // Convert hex to rgba
          const hex = connectionColor;
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      });
    });
    
    // Draw particles
    this.particles.forEach(p => {
      const pulse = Math.sin(p.pulsePhase) * 0.3 + 1;
      const particleRadius = p.radius * pulse;
      
      // Particle glow
      const gradient = this.ctx.createRadialGradient(
        p.x, p.y, 0,
        p.x, p.y, particleRadius * 3
      );
      
      let particleColor = colors.primary;
      if (p.mindAffinity === this.activeMind) {
        particleColor = colors.secondary;
      }
      
      const hex = particleColor;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, particleRadius * 3, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();
      
      // Particle core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
      this.ctx.fill();
    });
    
    // Draw central consciousness node
    this.drawCentralNode(colors);
    
    // Draw mouse attraction field
    this.drawMouseField(colors);
  }
  
  drawCentralNode(colors) {
    const pulse = Math.sin(this.centralNode.pulsePhase) * 0.5 + 1;
    const radius = (this.centralNode.radius + 2 * this.mindIntensity) * pulse;
    
    // Only draw if visible
    if (this.centralNode.y < -50) return;
    
    // Outer glow rings
    for (let i = 3; i > 0; i--) {
      const ringRadius = radius * (3 + i * 2);
      const opacity = 0.05 * (4 - i) * this.mindIntensity;
      
      this.ctx.beginPath();
      this.ctx.arc(this.centralNode.x, this.centralNode.y, ringRadius, 0, Math.PI * 2);
      this.ctx.strokeStyle = colors.glow.replace('0.3', String(opacity));
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
    
    // Core glow
    const gradient = this.ctx.createRadialGradient(
      this.centralNode.x, this.centralNode.y, 0,
      this.centralNode.x, this.centralNode.y, radius * 8
    );
    
    gradient.addColorStop(0, colors.primary);
    gradient.addColorStop(0.2, colors.secondary);
    gradient.addColorStop(0.5, colors.glow);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    this.ctx.beginPath();
    this.ctx.arc(this.centralNode.x, this.centralNode.y, radius * 8, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    
    // Core
    this.ctx.beginPath();
    this.ctx.arc(this.centralNode.x, this.centralNode.y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#fff';
    this.ctx.fill();
  }
  
  drawMouseField(colors) {
    // Subtle glow around mouse position
    const gradient = this.ctx.createRadialGradient(
      this.mouseX, this.mouseY, 0,
      this.mouseX, this.mouseY, 100
    );
    
    gradient.addColorStop(0, colors.glow.replace('0.3', '0.1'));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    this.ctx.beginPath();
    this.ctx.arc(this.mouseX, this.mouseY, 100, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }
  
  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Export for use
window.NeuralConsciousness = NeuralConsciousness;

