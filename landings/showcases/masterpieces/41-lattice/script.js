/**
 * THE LATTICE - Infinite Grid Growth
 * Procedural infinite 3D lattice using Three.js
 */

class InfiniteLattice {
    constructor() {
        this.container = document.getElementById('three-container');
        this.gridType = 'cubic';
        this.gridDensity = 2;
        this.autoRotate = true;
        this.showPulses = true;
        this.pulseSpeed = 5;
        this.pulses = [];
        this.pulseCount = 0;
        this.time = 0;
        this.travelDistance = 0;

        this.init();
        this.createLattice();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000508);
        this.scene.fog = new THREE.FogExp2(0x000508, 0.015);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 5, 20);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x001020, 0.5);
        this.scene.add(ambientLight);

        window.addEventListener('resize', () => this.onResize());
    }

    createLattice() {
        // Clear existing
        if (this.latticeGroup) {
            this.scene.remove(this.latticeGroup);
        }

        this.latticeGroup = new THREE.Group();
        this.scene.add(this.latticeGroup);

        const gridSize = 30;
        const spacing = 4 / this.gridDensity;

        // Create grid lines
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.3
        });

        const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
        const nodeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.6
        });

        this.nodes = [];

        if (this.gridType === 'cubic') {
            this.createCubicLattice(gridSize, spacing, material, nodeGeometry, nodeMaterial);
        } else if (this.gridType === 'hexagonal') {
            this.createHexagonalLattice(gridSize, spacing, material, nodeGeometry, nodeMaterial);
        } else {
            this.createTetrahedralLattice(gridSize, spacing, material, nodeGeometry, nodeMaterial);
        }
    }

    createCubicLattice(size, spacing, lineMaterial, nodeGeometry, nodeMaterial) {
        const halfSize = size / 2;
        const points = [];

        // Create grid lines in all three directions
        for (let i = -halfSize; i <= halfSize; i += spacing) {
            for (let j = -halfSize; j <= halfSize; j += spacing) {
                // X-aligned lines
                points.push(
                    new THREE.Vector3(-halfSize, i, j),
                    new THREE.Vector3(halfSize, i, j)
                );
                // Y-aligned lines
                points.push(
                    new THREE.Vector3(i, -halfSize, j),
                    new THREE.Vector3(i, halfSize, j)
                );
                // Z-aligned lines
                points.push(
                    new THREE.Vector3(i, j, -halfSize),
                    new THREE.Vector3(i, j, halfSize)
                );
            }
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const lines = new THREE.LineSegments(geometry, lineMaterial);
        this.latticeGroup.add(lines);

        // Add nodes at intersections
        for (let x = -halfSize; x <= halfSize; x += spacing) {
            for (let y = -halfSize; y <= halfSize; y += spacing) {
                for (let z = -halfSize; z <= halfSize; z += spacing) {
                    const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
                    node.position.set(x, y, z);
                    this.latticeGroup.add(node);
                    this.nodes.push(node);
                }
            }
        }
    }

    createHexagonalLattice(size, spacing, lineMaterial, nodeGeometry, nodeMaterial) {
        const halfSize = size / 2;
        const sqrt3 = Math.sqrt(3);
        const points = [];

        for (let y = -halfSize; y <= halfSize; y += spacing) {
            for (let i = -halfSize; i <= halfSize; i += spacing) {
                for (let j = -halfSize; j <= halfSize; j += spacing * sqrt3 / 2) {
                    const offset = Math.floor(j / (spacing * sqrt3 / 2)) % 2 === 0 ? 0 : spacing / 2;
                    const x = i + offset;
                    const z = j;

                    // Hexagonal connections
                    const angles = [0, 60, 120, 180, 240, 300];
                    angles.forEach(angle => {
                        const rad = angle * Math.PI / 180;
                        const dx = Math.cos(rad) * spacing;
                        const dz = Math.sin(rad) * spacing;
                        points.push(
                            new THREE.Vector3(x, y, z),
                            new THREE.Vector3(x + dx * 0.5, y, z + dz * 0.5)
                        );
                    });

                    const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
                    node.position.set(x, y, z);
                    this.latticeGroup.add(node);
                    this.nodes.push(node);
                }
            }
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const lines = new THREE.LineSegments(geometry, lineMaterial);
        this.latticeGroup.add(lines);
    }

    createTetrahedralLattice(size, spacing, lineMaterial, nodeGeometry, nodeMaterial) {
        const halfSize = size / 2;
        const points = [];
        const nodePositions = [];

        // FCC-like tetrahedral arrangement
        for (let x = -halfSize; x <= halfSize; x += spacing) {
            for (let y = -halfSize; y <= halfSize; y += spacing) {
                for (let z = -halfSize; z <= halfSize; z += spacing) {
                    nodePositions.push(new THREE.Vector3(x, y, z));
                    nodePositions.push(new THREE.Vector3(x + spacing / 2, y + spacing / 2, z));
                    nodePositions.push(new THREE.Vector3(x + spacing / 2, y, z + spacing / 2));
                    nodePositions.push(new THREE.Vector3(x, y + spacing / 2, z + spacing / 2));
                }
            }
        }

        // Connect nearby nodes
        nodePositions.forEach(pos => {
            const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
            node.position.copy(pos);
            this.latticeGroup.add(node);
            this.nodes.push(node);

            // Find and connect to nearby nodes
            nodePositions.forEach(other => {
                const dist = pos.distanceTo(other);
                if (dist > 0.1 && dist < spacing * 0.8) {
                    points.push(pos, other);
                }
            });
        });

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const lines = new THREE.LineSegments(geometry, lineMaterial);
        this.latticeGroup.add(lines);
    }

    spawnPulse() {
        if (this.nodes.length === 0) return;

        const startNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        
        const pulse = {
            position: startNode.position.clone(),
            direction: new THREE.Vector3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5
            ).normalize(),
            speed: 0.1 + Math.random() * 0.1,
            life: 1.0,
            mesh: null
        };

        // Create pulse mesh
        const geometry = new THREE.SphereGeometry(0.2, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 1
        });
        pulse.mesh = new THREE.Mesh(geometry, material);
        pulse.mesh.position.copy(pulse.position);
        this.scene.add(pulse.mesh);

        this.pulses.push(pulse);
        this.pulseCount++;
        this.updateStats();
    }

    updatePulses() {
        const speedFactor = this.pulseSpeed / 5;

        for (let i = this.pulses.length - 1; i >= 0; i--) {
            const pulse = this.pulses[i];

            // Move pulse
            pulse.position.add(pulse.direction.clone().multiplyScalar(pulse.speed * speedFactor));
            pulse.mesh.position.copy(pulse.position);

            // Fade out
            pulse.life -= 0.005 * speedFactor;
            pulse.mesh.material.opacity = pulse.life;
            pulse.mesh.scale.setScalar(1 + (1 - pulse.life) * 2);

            // Remove dead pulses
            if (pulse.life <= 0) {
                this.scene.remove(pulse.mesh);
                pulse.mesh.geometry.dispose();
                pulse.mesh.material.dispose();
                this.pulses.splice(i, 1);
            }
        }

        // Spawn new pulses
        if (this.showPulses && Math.random() < 0.1) {
            this.spawnPulse();
        }
    }

    updateStats() {
        document.getElementById('pulseCount').textContent = this.pulseCount;
        document.getElementById('distValue').textContent = this.travelDistance.toFixed(0);
    }

    bindEvents() {
        document.getElementById('togglePulse').addEventListener('click', (e) => {
            this.showPulses = !this.showPulses;
            e.target.style.opacity = this.showPulses ? 1 : 0.5;
        });

        document.getElementById('toggleRotate').addEventListener('click', (e) => {
            this.autoRotate = !this.autoRotate;
            e.target.style.opacity = this.autoRotate ? 1 : 0.5;
        });

        document.getElementById('resetView').addEventListener('click', () => {
            this.camera.position.set(0, 5, 20);
            this.controls.target.set(0, 0, 0);
            this.travelDistance = 0;
            this.updateStats();
        });

        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.gridType = btn.dataset.type;
                document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.createLattice();
            });
        });

        document.getElementById('densitySlider').addEventListener('input', (e) => {
            this.gridDensity = parseInt(e.target.value);
            this.createLattice();
        });

        document.getElementById('pulseSpeed').addEventListener('input', (e) => {
            this.pulseSpeed = parseInt(e.target.value);
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

        // Auto rotation
        if (this.autoRotate) {
            this.latticeGroup.rotation.y += 0.002;
            this.latticeGroup.rotation.x = Math.sin(this.time * 0.5) * 0.1;
        }

        // Update travel distance
        this.travelDistance += 0.1;
        if (Math.floor(this.travelDistance) % 10 === 0) {
            this.updateStats();
        }

        // Node pulsing
        this.nodes.forEach((node, i) => {
            const pulse = Math.sin(this.time * 2 + i * 0.1) * 0.5 + 0.5;
            node.material.opacity = 0.3 + pulse * 0.4;
            node.scale.setScalar(0.8 + pulse * 0.4);
        });

        // Update energy pulses
        this.updatePulses();

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new InfiniteLattice();
});

