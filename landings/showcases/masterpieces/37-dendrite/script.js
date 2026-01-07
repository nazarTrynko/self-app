/**
 * THE DENDRITE - Branching Crystal Formation
 * L-System generative branching visualization using Three.js
 */

// ============================================
// Background Canvas - Frost particles
// ============================================
class FrostBackground {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedY: Math.random() * 0.3 + 0.1,
                opacity: Math.random() * 0.4 + 0.1,
                wobble: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5, 10, 20, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.y += p.speedY;
            p.wobble += 0.02;
            p.x += Math.sin(p.wobble) * 0.3;

            if (p.y > this.canvas.height) {
                p.y = 0;
                p.x = Math.random() * this.canvas.width;
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(168, 216, 255, ${p.opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// L-System Engine
// ============================================
class LSystem {
    constructor(axiom, rules) {
        this.axiom = axiom;
        this.rules = rules;
        this.result = axiom;
    }

    iterate(times) {
        this.result = this.axiom;
        for (let i = 0; i < times; i++) {
            let next = '';
            for (const char of this.result) {
                next += this.rules[char] || char;
            }
            this.result = next;
        }
        return this.result;
    }
}

// ============================================
// 3D Turtle Graphics
// ============================================
class Turtle3D {
    constructor() {
        this.position = new THREE.Vector3(0, 0, 0);
        this.heading = new THREE.Vector3(0, 1, 0);
        this.left = new THREE.Vector3(-1, 0, 0);
        this.up = new THREE.Vector3(0, 0, 1);
        this.stack = [];
        this.vertices = [];
        this.colors = [];
        this.depth = 0;
        this.maxDepth = 0;
    }

    reset() {
        this.position.set(0, 0, 0);
        this.heading.set(0, 1, 0);
        this.left.set(-1, 0, 0);
        this.up.set(0, 0, 1);
        this.stack = [];
        this.vertices = [];
        this.colors = [];
        this.depth = 0;
        this.maxDepth = 0;
    }

    forward(length) {
        const start = this.position.clone();
        this.position.add(this.heading.clone().multiplyScalar(length));
        this.vertices.push(start.x, start.y, start.z);
        this.vertices.push(this.position.x, this.position.y, this.position.z);
        
        // Color based on depth (ice blue gradient)
        const t = this.depth / 10;
        this.colors.push(0.66 + t * 0.3, 0.85 + t * 0.1, 1.0);
        this.colors.push(0.66 + t * 0.3, 0.85 + t * 0.1, 1.0);
    }

    rotateHeading(axis, angle) {
        const quaternion = new THREE.Quaternion().setFromAxisAngle(axis, angle);
        this.heading.applyQuaternion(quaternion);
        this.left.applyQuaternion(quaternion);
        this.up.applyQuaternion(quaternion);
    }

    yaw(angle) {
        this.rotateHeading(this.up, angle);
    }

    pitch(angle) {
        this.rotateHeading(this.left, angle);
    }

    roll(angle) {
        this.rotateHeading(this.heading, angle);
    }

    push() {
        this.stack.push({
            position: this.position.clone(),
            heading: this.heading.clone(),
            left: this.left.clone(),
            up: this.up.clone(),
            depth: this.depth
        });
        this.depth++;
        this.maxDepth = Math.max(this.maxDepth, this.depth);
    }

    pop() {
        if (this.stack.length > 0) {
            const state = this.stack.pop();
            this.position = state.position;
            this.heading = state.heading;
            this.left = state.left;
            this.up = state.up;
            this.depth = state.depth;
        }
    }

    interpret(instructions, params) {
        const { length, angle, decay, randomness } = params;
        let currentLength = length;

        for (const char of instructions) {
            const randAngle = angle * (1 + (Math.random() - 0.5) * randomness);
            const randLength = currentLength * (1 + (Math.random() - 0.5) * randomness * 0.5);

            switch (char) {
                case 'F':
                    this.forward(randLength);
                    break;
                case '+':
                    this.yaw(randAngle * Math.PI / 180);
                    break;
                case '-':
                    this.yaw(-randAngle * Math.PI / 180);
                    break;
                case '^':
                    this.pitch(randAngle * Math.PI / 180);
                    break;
                case '&':
                    this.pitch(-randAngle * Math.PI / 180);
                    break;
                case '\\':
                    this.roll(randAngle * Math.PI / 180);
                    break;
                case '/':
                    this.roll(-randAngle * Math.PI / 180);
                    break;
                case '[':
                    this.push();
                    currentLength *= decay;
                    break;
                case ']':
                    this.pop();
                    currentLength /= decay;
                    break;
            }
        }
    }
}

// ============================================
// Dendrite Visualization
// ============================================
class DendriteVisualization {
    constructor() {
        this.container = document.getElementById('three-container');
        this.turtle = new Turtle3D();
        this.isAnimating = true;
        this.currentPreset = 'frost';
        this.animatedVertexCount = 0;
        this.animationSpeed = 50;

        this.presets = {
            frost: {
                axiom: 'F',
                rules: { 'F': 'F[+F][-F]F[^F][&F]' },
                angle: 25,
                length: 3,
                decay: 0.7,
                iterations: 5,
                randomness: 0.3
            },
            neural: {
                axiom: 'F',
                rules: { 'F': 'FF[+F][−F][^F]' },
                angle: 30,
                length: 2.5,
                decay: 0.65,
                iterations: 5,
                randomness: 0.5
            },
            lightning: {
                axiom: 'F',
                rules: { 'F': 'F[+F]F[-F]F' },
                angle: 20,
                length: 4,
                decay: 0.75,
                iterations: 5,
                randomness: 0.6
            },
            tree: {
                axiom: 'F',
                rules: { 'F': 'FF+[+F-F-F]-[-F+F+F]' },
                angle: 22,
                length: 2,
                decay: 0.72,
                iterations: 4,
                randomness: 0.2
            }
        };

        this.params = { ...this.presets.frost };

        this.init();
        this.generate();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050a14);
        this.scene.fog = new THREE.FogExp2(0x050a14, 0.015);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 15, 40);
        this.camera.lookAt(0, 10, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.target.set(0, 10, 0);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x1a3050, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xa8d8ff, 1, 100);
        pointLight.position.set(10, 30, 10);
        this.scene.add(pointLight);

        // Ground reference (subtle)
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshBasicMaterial({
            color: 0x0a1628,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        this.scene.add(ground);

        window.addEventListener('resize', () => this.onResize());
    }

    generate() {
        // Remove old dendrite
        if (this.dendriteMesh) {
            this.scene.remove(this.dendriteMesh);
            this.dendriteMesh.geometry.dispose();
        }

        // Generate L-system string
        const lsystem = new LSystem(this.params.axiom, this.params.rules);
        const instructions = lsystem.iterate(this.params.iterations);

        // Interpret with turtle
        this.turtle.reset();
        this.turtle.interpret(instructions, {
            length: this.params.length,
            angle: this.params.angle,
            decay: this.params.decay,
            randomness: this.params.randomness
        });

        // Create geometry
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.turtle.vertices);
        const colors = new Float32Array(this.turtle.colors);
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Material with vertex colors
        const material = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            linewidth: 1
        });

        this.dendriteMesh = new THREE.LineSegments(geometry, material);
        this.scene.add(this.dendriteMesh);

        // Reset animation
        this.totalVertices = this.turtle.vertices.length / 3;
        this.animatedVertexCount = 0;
        geometry.setDrawRange(0, 0);

        // Update stats
        this.updateStats();
    }

    updateStats() {
        document.getElementById('depthValue').textContent = this.turtle.maxDepth;
        document.getElementById('branchCount').textContent = Math.floor(this.totalVertices / 2);
        document.getElementById('iterCount').textContent = this.params.iterations;
    }

    setPreset(name) {
        if (this.presets[name]) {
            this.currentPreset = name;
            this.params = { ...this.presets[name] };
            
            // Update UI
            document.getElementById('branchAngle').value = this.params.angle;
            document.getElementById('angleDisplay').textContent = this.params.angle + '°';
            document.getElementById('lengthDecay').value = this.params.decay * 100;
            document.getElementById('decayDisplay').textContent = this.params.decay.toFixed(2);
            document.getElementById('maxDepth').value = this.params.iterations;
            document.getElementById('depthDisplay').textContent = this.params.iterations;

            // Update preset buttons
            document.querySelectorAll('.preset-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.preset === name);
            });

            this.generate();
        }
    }

    bindEvents() {
        document.getElementById('growNew').addEventListener('click', () => {
            this.generate();
        });

        document.getElementById('toggleAnimate').addEventListener('click', (e) => {
            this.isAnimating = !this.isAnimating;
            e.target.textContent = this.isAnimating ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('resetView').addEventListener('click', () => {
            this.camera.position.set(0, 15, 40);
            this.controls.target.set(0, 10, 0);
            this.controls.update();
        });

        // Preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setPreset(btn.dataset.preset);
            });
        });

        // Parameter controls
        document.getElementById('branchAngle').addEventListener('input', (e) => {
            this.params.angle = parseInt(e.target.value);
            document.getElementById('angleDisplay').textContent = this.params.angle + '°';
        });

        document.getElementById('branchAngle').addEventListener('change', () => {
            this.generate();
        });

        document.getElementById('lengthDecay').addEventListener('input', (e) => {
            this.params.decay = parseInt(e.target.value) / 100;
            document.getElementById('decayDisplay').textContent = this.params.decay.toFixed(2);
        });

        document.getElementById('lengthDecay').addEventListener('change', () => {
            this.generate();
        });

        document.getElementById('maxDepth').addEventListener('input', (e) => {
            this.params.iterations = parseInt(e.target.value);
            document.getElementById('depthDisplay').textContent = this.params.iterations;
        });

        document.getElementById('maxDepth').addEventListener('change', () => {
            this.generate();
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Animate growth
        if (this.isAnimating && this.dendriteMesh && this.animatedVertexCount < this.totalVertices) {
            this.animatedVertexCount = Math.min(
                this.animatedVertexCount + this.animationSpeed,
                this.totalVertices
            );
            this.dendriteMesh.geometry.setDrawRange(0, this.animatedVertexCount);
        }

        // Gentle rotation
        if (this.dendriteMesh) {
            this.dendriteMesh.rotation.y += 0.001;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new FrostBackground();
    new DendriteVisualization();
});

