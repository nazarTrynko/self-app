// QUANTUM DECISION ENGINE - Advanced 3D Probability Space Visualization
// Emergent Intelligence Category - Showcase 27
// Features Three.js 3D quantum field with particle physics

// Three.js Quantum Field Background
class QuantumField3D {
    constructor() {
        this.container = document.getElementById('three-container');
        if (!this.container || typeof THREE === 'undefined') {
            console.warn('Three.js container not found or THREE not loaded');
            return;
        }
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.particles = null;
        this.connections = null;
        this.time = 0;
        this.mouse = { x: 0, y: 0 };
        this.collapsed = false;
        
        this.init();
        this.createParticles();
        this.createConnections();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x030818, 1);
        this.container.appendChild(this.renderer.domElement);
        
        this.camera.position.z = 30;
        
        // Add subtle fog for depth
        this.scene.fog = new THREE.FogExp2(0x030818, 0.015);
    }

    createParticles() {
        const particleCount = 500;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const phases = new Float32Array(particleCount);
        
        for (let i = 0; i < particleCount; i++) {
            // Spherical distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 10 + Math.random() * 30;
            
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            
            // Cyan to purple gradient
            const hue = 0.5 + Math.random() * 0.2;
            const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
            
            sizes[i] = 0.5 + Math.random() * 1.5;
            phases[i] = Math.random() * Math.PI * 2;
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
        
        // Custom shader material for quantum particles
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                collapsed: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute float phase;
                varying vec3 vColor;
                varying float vPhase;
                uniform float time;
                uniform float collapsed;
                
                void main() {
                    vColor = color;
                    vPhase = phase;
                    
                    vec3 pos = position;
                    
                    // Superposition oscillation
                    float oscillation = sin(time * 2.0 + phase) * (1.0 - collapsed);
                    pos.x += oscillation * 2.0;
                    pos.y += cos(time * 1.5 + phase) * 2.0 * (1.0 - collapsed);
                    pos.z += sin(time + phase * 2.0) * 1.5 * (1.0 - collapsed);
                    
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                varying float vPhase;
                uniform float time;
                
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    
                    float alpha = 1.0 - (dist * 2.0);
                    alpha *= 0.6 + sin(time * 3.0 + vPhase) * 0.2;
                    
                    // Glow effect
                    vec3 glow = vColor * (1.0 + (0.5 - dist) * 2.0);
                    
                    gl_FragColor = vec4(glow, alpha);
                }
            `,
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
        
        // Store original positions for collapse animation
        this.originalPositions = positions.slice();
    }

    createConnections() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(1000 * 6); // 1000 line segments
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.LineBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0.1,
            blending: THREE.AdditiveBlending
        });
        
        this.connections = new THREE.LineSegments(geometry, material);
        this.scene.add(this.connections);
    }

    updateConnections() {
        if (!this.particles) return;
        
        const particlePositions = this.particles.geometry.attributes.position.array;
        const connectionPositions = this.connections.geometry.attributes.position.array;
        const maxConnections = 500;
        const connectionDistance = 8;
        
        let connectionIndex = 0;
        
        for (let i = 0; i < particlePositions.length / 3 && connectionIndex < maxConnections; i++) {
            for (let j = i + 1; j < particlePositions.length / 3 && connectionIndex < maxConnections; j++) {
                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (dist < connectionDistance) {
                    connectionPositions[connectionIndex * 6] = particlePositions[i * 3];
                    connectionPositions[connectionIndex * 6 + 1] = particlePositions[i * 3 + 1];
                    connectionPositions[connectionIndex * 6 + 2] = particlePositions[i * 3 + 2];
                    connectionPositions[connectionIndex * 6 + 3] = particlePositions[j * 3];
                    connectionPositions[connectionIndex * 6 + 4] = particlePositions[j * 3 + 1];
                    connectionPositions[connectionIndex * 6 + 5] = particlePositions[j * 3 + 2];
                    connectionIndex++;
                }
            }
        }
        
        // Clear remaining connections
        for (let i = connectionIndex * 6; i < connectionPositions.length; i++) {
            connectionPositions[i] = 0;
        }
        
        this.connections.geometry.attributes.position.needsUpdate = true;
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    }

    collapse() {
        this.collapsed = true;
    }

    reset() {
        this.collapsed = false;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.time += 0.016;
        
        if (this.particles) {
            this.particles.material.uniforms.time.value = this.time;
            this.particles.material.uniforms.collapsed.value = this.collapsed ? 1 : 0;
            
            // Gentle rotation
            this.particles.rotation.y += 0.001;
            this.particles.rotation.x = Math.sin(this.time * 0.2) * 0.1;
            
            // Mouse influence
            this.particles.rotation.y += this.mouse.x * 0.001;
            this.particles.rotation.x += this.mouse.y * 0.001;
        }
        
        if (this.connections) {
            this.connections.rotation.y = this.particles.rotation.y;
            this.connections.rotation.x = this.particles.rotation.x;
        }
        
        // Update connections every few frames for performance
        if (Math.floor(this.time * 60) % 3 === 0) {
            this.updateConnections();
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// 2D Canvas overlay for additional effects
class QuantumField2D {
    constructor() {
        this.canvas = document.getElementById('quantum-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.time = 0;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addRipple(x, y) {
        this.ripples.push({
            x: x || this.canvas.width / 2,
            y: y || this.canvas.height / 2,
            radius: 0,
            opacity: 0.8,
            speed: 3 + Math.random() * 2
        });
    }

    update() {
        this.time += 0.016;
        
        this.ripples.forEach(r => {
            r.radius += r.speed;
            r.opacity -= 0.01;
        });
        
        this.ripples = this.ripples.filter(r => r.opacity > 0);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw ripples
        this.ripples.forEach(r => {
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${r.opacity})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Decision Field Visualization
class DecisionField {
    constructor() {
        this.canvas = document.getElementById('field-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.options = [
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: 0 },
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: Math.PI * 0.66 },
            { text: '', probability: 0.33, x: 0, y: 0, vx: 0, vy: 0, phase: Math.PI * 1.33 }
        ];
        this.time = 0;
        this.collapsed = false;
        this.collapsedOption = null;
        this.collapseProgress = 0;
        
        this.resize();
        this.initPositions();
        window.addEventListener('resize', () => {
            this.resize();
            this.initPositions();
        });
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    initPositions() {
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
        this.options.forEach((opt, i) => {
            const angle = opt.phase;
            opt.x = this.centerX + Math.cos(angle) * radius;
            opt.y = this.centerY + Math.sin(angle) * radius;
            opt.baseX = opt.x;
            opt.baseY = opt.y;
        });
    }

    addOption() {
        const newPhase = Math.random() * Math.PI * 2;
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25;
        
        this.options.push({
            text: '',
            probability: 0,
            x: this.centerX + Math.cos(newPhase) * radius,
            y: this.centerY + Math.sin(newPhase) * radius,
            baseX: this.centerX + Math.cos(newPhase) * radius,
            baseY: this.centerY + Math.sin(newPhase) * radius,
            vx: 0,
            vy: 0,
            phase: newPhase
        });
        
        this.redistributeProbabilities();
        this.updateProbabilityDisplay();
    }

    redistributeProbabilities() {
        const prob = 1 / this.options.length;
        this.options.forEach(opt => opt.probability = prob);
    }

    collapse() {
        if (this.collapsed) return;
        
        this.collapsed = true;
        
        // Weighted random selection
        const rand = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < this.options.length; i++) {
            cumulative += this.options[i].probability;
            if (rand <= cumulative) {
                this.collapsedOption = i;
                break;
            }
        }
        
        if (this.collapsedOption === null) {
            this.collapsedOption = this.options.length - 1;
        }
        
        return this.options[this.collapsedOption];
    }

    reset() {
        this.collapsed = false;
        this.collapsedOption = null;
        this.collapseProgress = 0;
        this.redistributeProbabilities();
    }

    updateProbabilityDisplay() {
        this.options.forEach((opt, i) => {
            const el = document.getElementById(`prob-${i}`);
            if (el) {
                el.textContent = `${Math.round(opt.probability * 100)}%`;
            }
        });
    }

    update() {
        this.time += 0.016;

        if (this.collapsed) {
            this.collapseProgress = Math.min(1, this.collapseProgress + 0.02);
            
            this.options.forEach((opt, i) => {
                if (i === this.collapsedOption) {
                    // Winner moves to center
                    opt.x += (this.centerX - opt.x) * 0.05;
                    opt.y += (this.centerY - opt.y) * 0.05;
                } else {
                    // Others fade out and move away
                    const angle = Math.atan2(opt.y - this.centerY, opt.x - this.centerX);
                    opt.x += Math.cos(angle) * 3;
                    opt.y += Math.sin(angle) * 3;
                }
            });
        } else {
            // Superposition state - options orbit and fluctuate
            this.options.forEach((opt, i) => {
                const orbitSpeed = 0.3;
                const wobble = Math.sin(this.time * 2 + opt.phase) * 20;
                const radius = Math.min(this.canvas.width, this.canvas.height) * 0.25 + wobble;
                
                opt.x = this.centerX + Math.cos(this.time * orbitSpeed + opt.phase) * radius;
                opt.y = this.centerY + Math.sin(this.time * orbitSpeed + opt.phase) * radius;
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw probability cloud at center
        if (!this.collapsed) {
            const cloudRadius = 50 + Math.sin(this.time * 3) * 10;
            const gradient = this.ctx.createRadialGradient(
                this.centerX, this.centerY, 0,
                this.centerX, this.centerY, cloudRadius
            );
            gradient.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
            gradient.addColorStop(0.5, 'rgba(129, 140, 248, 0.2)');
            gradient.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, cloudRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }

        // Draw options
        this.options.forEach((opt, i) => {
            const opacity = this.collapsed ? 
                (i === this.collapsedOption ? 1 : Math.max(0, 1 - this.collapseProgress * 2)) : 
                0.6 + opt.probability * 0.4;
            
            if (opacity <= 0) return;

            // Connection to center
            this.ctx.beginPath();
            this.ctx.moveTo(this.centerX, this.centerY);
            this.ctx.lineTo(opt.x, opt.y);
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
            this.ctx.lineWidth = opt.probability * 4;
            this.ctx.stroke();

            // Option circle
            const radius = 20 + opt.probability * 30;
            
            // Glow
            const glow = this.ctx.createRadialGradient(opt.x, opt.y, 0, opt.x, opt.y, radius * 2);
            glow.addColorStop(0, `rgba(56, 189, 248, ${opacity * 0.4})`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(opt.x, opt.y, radius * 2, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();

            // Circle
            this.ctx.beginPath();
            this.ctx.arc(opt.x, opt.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(10, 22, 40, ${opacity})`;
            this.ctx.fill();
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Label
            const label = opt.text || `Option ${String.fromCharCode(65 + i)}`;
            this.ctx.font = '12px Inter';
            this.ctx.fillStyle = `rgba(232, 244, 255, ${opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, opt.x, opt.y - 5);
            
            // Probability
            this.ctx.font = '14px JetBrains Mono';
            this.ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
            this.ctx.fillText(`${Math.round(opt.probability * 100)}%`, opt.x, opt.y + 12);
        });

        // Draw collapse effect
        if (this.collapsed && this.collapseProgress < 1) {
            const rippleRadius = this.collapseProgress * 300;
            this.ctx.beginPath();
            this.ctx.arc(this.centerX, this.centerY, rippleRadius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(56, 189, 248, ${1 - this.collapseProgress})`;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class QuantumDecisionApp {
    constructor() {
        this.bgField3D = new QuantumField3D();
        this.bgField2D = new QuantumField2D();
        this.decisionField = new DecisionField();
        
        this.bindEvents();
    }

    bindEvents() {
        const collapseBtn = document.getElementById('collapse-btn');
        const addOptionBtn = document.getElementById('add-option');
        const optionInputs = document.querySelectorAll('.possibility-input input');

        if (collapseBtn) {
            collapseBtn.addEventListener('click', () => this.collapse());
        }

        if (addOptionBtn) {
            addOptionBtn.addEventListener('click', () => this.addOption());
        }

        optionInputs.forEach((input, i) => {
            input.addEventListener('input', (e) => {
                if (this.decisionField.options[i]) {
                    this.decisionField.options[i].text = e.target.value;
                }
            });
        });
        
        // Add ripple on click
        document.addEventListener('click', (e) => {
            if (this.bgField2D) {
                this.bgField2D.addRipple(e.clientX, e.clientY);
            }
        });
    }

    addOption() {
        if (this.decisionField.options.length >= 6) return;
        
        this.decisionField.addOption();
        
        // Add new input field
        const container = document.querySelector('.possibility-inputs');
        const index = this.decisionField.options.length - 1;
        
        const inputDiv = document.createElement('div');
        inputDiv.className = 'possibility-input';
        inputDiv.innerHTML = `
            <input type="text" placeholder="Option ${String.fromCharCode(65 + index)}" data-option="${index}" />
            <span class="probability" id="prob-${index}">${Math.round(100 / this.decisionField.options.length)}%</span>
        `;
        
        container.appendChild(inputDiv);
        
        inputDiv.querySelector('input').addEventListener('input', (e) => {
            this.decisionField.options[index].text = e.target.value;
        });
        
        this.decisionField.updateProbabilityDisplay();
    }

    collapse() {
        const result = this.decisionField.collapse();
        
        // Collapse the 3D field too
        if (this.bgField3D) {
            this.bgField3D.collapse();
        }
        
        // Add multiple ripples for dramatic effect
        if (this.bgField2D) {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    this.bgField2D.addRipple(window.innerWidth / 2, window.innerHeight / 2);
                }, i * 200);
            }
        }
        
        if (result) {
            const resultDisplay = document.getElementById('result-display');
            const resultValue = document.getElementById('result-value');
            
            if (resultDisplay && resultValue) {
                setTimeout(() => {
                    resultValue.textContent = result.text || 'Option ' + String.fromCharCode(65 + this.decisionField.collapsedOption);
                    resultDisplay.classList.add('visible');
                }, 1000);
            }
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new QuantumDecisionApp();
});
