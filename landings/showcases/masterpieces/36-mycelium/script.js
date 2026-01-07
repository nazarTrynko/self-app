/**
 * THE MYCELIUM - Underground Network Growth
 * Diffusion Limited Aggregation visualization using Three.js
 */

// ============================================
// Background Canvas - Subtle soil texture
// ============================================
class SoilBackground {
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
        // Create subtle floating particles like soil motes
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(10, 5, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(139, 90, 43, ${p.opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// DLA Mycelium Growth System
// ============================================
class MyceliumGrowth {
    constructor() {
        this.container = document.getElementById('three-container');
        this.nodes = [];
        this.connections = [];
        this.seeds = [];
        this.particles = [];
        this.isGrowing = true;
        this.showNutrients = true;
        this.growthRate = 10;
        this.branchAngle = 30;
        this.maxNodes = 5000;
        this.attachRadius = 0.8;

        this.init();
        this.createInitialSeed();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0500);
        this.scene.fog = new THREE.FogExp2(0x0a0500, 0.02);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 30, 50);
        this.camera.lookAt(0, 0, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 10;
        this.controls.maxDistance = 150;

        // Lights
        const ambientLight = new THREE.AmbientLight(0x3a2510, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffd699, 1, 100);
        pointLight.position.set(0, 20, 0);
        this.scene.add(pointLight);

        // Ground plane (dark soil)
        const groundGeometry = new THREE.PlaneGeometry(200, 200);
        const groundMaterial = new THREE.MeshLambertMaterial({
            color: 0x1a0f00,
            side: THREE.DoubleSide
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -5;
        this.scene.add(ground);

        // Node geometry (instanced for performance)
        this.nodeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        this.nodeMaterial = new THREE.MeshPhongMaterial({
            color: 0xd4a574,
            emissive: 0x3a2510,
            shininess: 30
        });

        // Connection lines
        this.lineMaterial = new THREE.LineBasicMaterial({
            color: 0xd4a574,
            transparent: true,
            opacity: 0.6
        });

        // Particle material for drifting spores
        this.particleMaterial = new THREE.PointsMaterial({
            color: 0xffd699,
            size: 0.1,
            transparent: true,
            opacity: 0.5
        });

        // Nutrient flow particles
        this.nutrientGeometry = new THREE.BufferGeometry();
        this.nutrientMaterial = new THREE.PointsMaterial({
            color: 0xffb347,
            size: 0.15,
            transparent: true,
            opacity: 0.8
        });
        this.nutrientParticles = [];

        window.addEventListener('resize', () => this.onResize());
    }

    createInitialSeed() {
        this.addSeed(new THREE.Vector3(0, 0, 0));
    }

    addSeed(position) {
        const seed = {
            position: position.clone(),
            nodes: [{
                position: position.clone(),
                parent: null,
                depth: 0
            }]
        };
        this.seeds.push(seed);
        this.nodes.push(seed.nodes[0]);
        this.addNodeMesh(seed.nodes[0]);
        this.updateStats();
    }

    addNodeMesh(node) {
        const mesh = new THREE.Mesh(this.nodeGeometry, this.nodeMaterial);
        mesh.position.copy(node.position);
        this.scene.add(mesh);
        node.mesh = mesh;
    }

    addConnection(node1, node2) {
        const points = [node1.position, node2.position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, this.lineMaterial);
        this.scene.add(line);
        this.connections.push({ line, node1, node2 });
    }

    spawnParticle() {
        // Spawn from edge of visible area
        const angle = Math.random() * Math.PI * 2;
        const radius = 40;
        
        return {
            position: new THREE.Vector3(
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 10,
                Math.sin(angle) * radius
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.5
            ),
            active: true
        };
    }

    findNearestNode(position) {
        let nearest = null;
        let minDist = Infinity;

        for (const node of this.nodes) {
            const dist = position.distanceTo(node.position);
            if (dist < minDist) {
                minDist = dist;
                nearest = node;
            }
        }

        return { node: nearest, distance: minDist };
    }

    growStep() {
        if (!this.isGrowing || this.nodes.length >= this.maxNodes) return;

        // Ensure we have enough wandering particles
        while (this.particles.length < this.growthRate * 10) {
            this.particles.push(this.spawnParticle());
        }

        // Update particles (DLA random walk)
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            if (!p.active) continue;

            // Random walk with drift toward center
            const toCenter = new THREE.Vector3(-p.position.x, 0, -p.position.z).normalize().multiplyScalar(0.1);
            p.position.add(p.velocity);
            p.position.add(toCenter);
            
            // Add randomness
            p.position.x += (Math.random() - 0.5) * 0.3;
            p.position.y += (Math.random() - 0.5) * 0.1;
            p.position.z += (Math.random() - 0.5) * 0.3;

            // Keep vertical position bounded
            p.position.y = Math.max(-4, Math.min(4, p.position.y));

            // Check for attachment
            const { node, distance } = this.findNearestNode(p.position);
            
            if (distance < this.attachRadius) {
                // Attach! Create new node
                const direction = new THREE.Vector3()
                    .subVectors(p.position, node.position)
                    .normalize();
                
                const newPos = node.position.clone().add(
                    direction.multiplyScalar(this.attachRadius * 0.8)
                );

                const newNode = {
                    position: newPos,
                    parent: node,
                    depth: node.depth + 1
                };

                this.nodes.push(newNode);
                this.addNodeMesh(newNode);
                this.addConnection(node, newNode);

                // Remove this particle
                p.active = false;
                this.particles.splice(i, 1);

                // Maybe spawn nutrient
                if (this.showNutrients && Math.random() < 0.3) {
                    this.spawnNutrient(newNode);
                }
            }

            // Remove if too far
            if (p.position.length() > 60) {
                this.particles.splice(i, 1);
            }
        }

        this.updateStats();
    }

    spawnNutrient(node) {
        if (!node.parent) return;
        
        this.nutrientParticles.push({
            current: node.position.clone(),
            target: node.parent.position.clone(),
            node: node.parent,
            progress: 0,
            speed: 0.02 + Math.random() * 0.02
        });
    }

    updateNutrients() {
        for (let i = this.nutrientParticles.length - 1; i >= 0; i--) {
            const n = this.nutrientParticles[i];
            n.progress += n.speed;

            if (n.progress >= 1) {
                // Move to next segment
                if (n.node.parent) {
                    n.current.copy(n.target);
                    n.target.copy(n.node.parent.position);
                    n.node = n.node.parent;
                    n.progress = 0;
                } else {
                    // Reached root
                    this.nutrientParticles.splice(i, 1);
                }
            } else {
                // Interpolate position
                n.current.lerpVectors(
                    n.node.position,
                    n.target,
                    n.progress
                );
            }
        }

        // Update nutrient particle positions
        if (this.nutrientParticles.length > 0) {
            const positions = new Float32Array(this.nutrientParticles.length * 3);
            this.nutrientParticles.forEach((n, i) => {
                positions[i * 3] = n.current.x;
                positions[i * 3 + 1] = n.current.y;
                positions[i * 3 + 2] = n.current.z;
            });
            this.nutrientGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            if (!this.nutrientMesh) {
                this.nutrientMesh = new THREE.Points(this.nutrientGeometry, this.nutrientMaterial);
                this.scene.add(this.nutrientMesh);
            }
        }
    }

    reset() {
        // Remove all meshes
        this.nodes.forEach(node => {
            if (node.mesh) this.scene.remove(node.mesh);
        });
        this.connections.forEach(conn => {
            this.scene.remove(conn.line);
        });
        if (this.nutrientMesh) {
            this.scene.remove(this.nutrientMesh);
            this.nutrientMesh = null;
        }

        // Clear arrays
        this.nodes = [];
        this.connections = [];
        this.seeds = [];
        this.particles = [];
        this.nutrientParticles = [];

        // Create new seed
        this.createInitialSeed();
        this.updateStats();
    }

    updateStats() {
        document.getElementById('seedCount').textContent = this.seeds.length;
        document.getElementById('nodeCount').textContent = this.nodes.length;
        document.getElementById('connectionCount').textContent = this.connections.length;
    }

    bindEvents() {
        document.getElementById('plantSeed').addEventListener('click', () => {
            const angle = Math.random() * Math.PI * 2;
            const radius = 10 + Math.random() * 15;
            this.addSeed(new THREE.Vector3(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            ));
        });

        document.getElementById('toggleGrowth').addEventListener('click', (e) => {
            this.isGrowing = !this.isGrowing;
            e.target.textContent = this.isGrowing ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('resetNetwork').addEventListener('click', () => {
            this.reset();
        });

        document.getElementById('toggleNutrients').addEventListener('click', (e) => {
            this.showNutrients = !this.showNutrients;
            e.target.style.opacity = this.showNutrients ? 1 : 0.5;
        });

        document.getElementById('growthRate').addEventListener('input', (e) => {
            this.growthRate = parseInt(e.target.value);
        });

        document.getElementById('branchAngle').addEventListener('input', (e) => {
            this.branchAngle = parseInt(e.target.value);
        });

        // Click on scene to add seed
        this.renderer.domElement.addEventListener('dblclick', (e) => {
            const rect = this.renderer.domElement.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);
            
            const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            const intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersection);
            
            if (intersection) {
                this.addSeed(intersection);
            }
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Grow
        for (let i = 0; i < this.growthRate; i++) {
            this.growStep();
        }

        // Update nutrients
        if (this.showNutrients) {
            this.updateNutrients();
        }

        // Gentle rotation
        this.scene.rotation.y += 0.0005;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new SoilBackground();
    new MyceliumGrowth();
});

