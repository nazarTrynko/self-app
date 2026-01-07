/**
 * THE FLOW - Energy Field Dynamics
 * Particle flow field visualization using Three.js
 */

class FlowVisualization {
    constructor() {
        this.container = document.getElementById('three-container');
        this.particleCount = 100000;
        this.forces = [];
        this.turbulence = 5;
        this.flowSpeed = 5;
        this.time = 0;

        this.init();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000308);

        this.camera = new THREE.PerspectiveCamera(
            70, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        this.camera.position.set(0, 0, 80);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        window.addEventListener('resize', () => this.onResize());
    }

    // Simple Perlin-like noise
    noise3D(x, y, z) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const Z = Math.floor(z) & 255;
        
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        
        const u = x * x * (3 - 2 * x);
        const v = y * y * (3 - 2 * y);
        const w = z * z * (3 - 2 * z);
        
        // Simplified hash
        const n = X + Y * 57 + Z * 113;
        const hash = (n) => Math.sin(n * 12.9898 + 78.233) * 43758.5453 % 1;
        
        return hash(n) * (1 - u) * (1 - v) * (1 - w) +
               hash(n + 1) * u * (1 - v) * (1 - w) +
               hash(n + 57) * (1 - u) * v * (1 - w) +
               hash(n + 58) * u * v * (1 - w) +
               hash(n + 113) * (1 - u) * (1 - v) * w +
               hash(n + 114) * u * (1 - v) * w +
               hash(n + 170) * (1 - u) * v * w +
               hash(n + 171) * u * v * w;
    }

    // Curl noise for divergence-free flow
    curl(x, y, z) {
        const eps = 0.01;
        const scale = this.turbulence * 0.05;
        
        const dx = (this.noise3D(x + eps, y, z) - this.noise3D(x - eps, y, z)) / (2 * eps);
        const dy = (this.noise3D(x, y + eps, z) - this.noise3D(x, y - eps, z)) / (2 * eps);
        const dz = (this.noise3D(x, y, z + eps) - this.noise3D(x, y, z - eps)) / (2 * eps);
        
        return {
            x: (dy - dz) * scale,
            y: (dz - dx) * scale,
            z: (dx - dy) * scale
        };
    }

    createParticles() {
        this.positions = new Float32Array(this.particleCount * 3);
        this.velocities = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            // Random position in sphere
            const radius = 30 + Math.random() * 20;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            this.positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            this.positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            this.positions[i * 3 + 2] = radius * Math.cos(phi);

            this.velocities[i * 3] = 0;
            this.velocities[i * 3 + 1] = 0;
            this.velocities[i * 3 + 2] = 0;

            // Color based on initial position
            const hue = (theta / (Math.PI * 2) + 0.5) % 1;
            const color = new THREE.Color().setHSL(hue * 0.3 + 0.5, 0.8, 0.6);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.3,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particleMesh = new THREE.Points(geometry, material);
        this.scene.add(this.particleMesh);
    }

    addForce(type) {
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40
        );

        const force = {
            type: type,
            position: pos,
            strength: type === 'repeller' ? -2 : 2
        };

        this.forces.push(force);

        // Visualize force
        const geo = new THREE.SphereGeometry(1, 16, 16);
        const mat = new THREE.MeshBasicMaterial({
            color: type === 'attractor' ? 0x00ff88 : type === 'repeller' ? 0xff4444 : 0xffff00,
            transparent: true,
            opacity: 0.5
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        this.scene.add(mesh);
        force.mesh = mesh;

        this.updateStats();
    }

    reset() {
        // Remove force meshes
        this.forces.forEach(f => {
            if (f.mesh) this.scene.remove(f.mesh);
        });
        this.forces = [];

        // Reset particle positions
        for (let i = 0; i < this.particleCount; i++) {
            const radius = 30 + Math.random() * 20;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            this.positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            this.positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            this.positions[i * 3 + 2] = radius * Math.cos(phi);

            this.velocities[i * 3] = 0;
            this.velocities[i * 3 + 1] = 0;
            this.velocities[i * 3 + 2] = 0;
        }

        this.particleMesh.geometry.attributes.position.needsUpdate = true;
        this.updateStats();
    }

    updateStats() {
        document.getElementById('forceCount').textContent = this.forces.length;
        document.getElementById('turbValue').textContent = this.turbulence;
    }

    updateParticles() {
        const speedFactor = this.flowSpeed * 0.1;

        for (let i = 0; i < this.particleCount; i++) {
            const x = this.positions[i * 3];
            const y = this.positions[i * 3 + 1];
            const z = this.positions[i * 3 + 2];

            // Get curl noise velocity
            const curl = this.curl(
                x * 0.03 + this.time * 0.1,
                y * 0.03,
                z * 0.03
            );

            // Apply curl noise
            this.velocities[i * 3] += curl.x * speedFactor;
            this.velocities[i * 3 + 1] += curl.y * speedFactor;
            this.velocities[i * 3 + 2] += curl.z * speedFactor;

            // Apply forces
            this.forces.forEach(force => {
                const dx = force.position.x - x;
                const dy = force.position.y - y;
                const dz = force.position.z - z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 1;

                if (force.type === 'vortex') {
                    // Tangential force
                    const strength = force.strength / (dist * 0.5);
                    this.velocities[i * 3] += (-dy / dist) * strength * speedFactor;
                    this.velocities[i * 3 + 1] += (dx / dist) * strength * speedFactor;
                } else {
                    // Radial force
                    const strength = force.strength / (dist * dist);
                    this.velocities[i * 3] += (dx / dist) * strength * speedFactor;
                    this.velocities[i * 3 + 1] += (dy / dist) * strength * speedFactor;
                    this.velocities[i * 3 + 2] += (dz / dist) * strength * speedFactor;
                }
            });

            // Apply velocity with damping
            this.positions[i * 3] += this.velocities[i * 3];
            this.positions[i * 3 + 1] += this.velocities[i * 3 + 1];
            this.positions[i * 3 + 2] += this.velocities[i * 3 + 2];

            this.velocities[i * 3] *= 0.98;
            this.velocities[i * 3 + 1] *= 0.98;
            this.velocities[i * 3 + 2] *= 0.98;

            // Wrap around if too far
            const dist = Math.sqrt(x * x + y * y + z * z);
            if (dist > 60) {
                const angle = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                this.positions[i * 3] = 30 * Math.sin(phi) * Math.cos(angle);
                this.positions[i * 3 + 1] = 30 * Math.sin(phi) * Math.sin(angle);
                this.positions[i * 3 + 2] = 30 * Math.cos(phi);
            }
        }

        this.particleMesh.geometry.attributes.position.needsUpdate = true;
    }

    bindEvents() {
        document.getElementById('addAttractor').addEventListener('click', () => this.addForce('attractor'));
        document.getElementById('addRepeller').addEventListener('click', () => this.addForce('repeller'));
        document.getElementById('addVortex').addEventListener('click', () => this.addForce('vortex'));
        document.getElementById('resetFlow').addEventListener('click', () => this.reset());

        document.getElementById('turbulence').addEventListener('input', (e) => {
            this.turbulence = parseInt(e.target.value);
            this.updateStats();
        });

        document.getElementById('flowSpeed').addEventListener('input', (e) => {
            this.flowSpeed = parseInt(e.target.value);
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.time += 0.01;
        this.updateParticles();

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => new FlowVisualization());

