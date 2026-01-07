/**
 * THE CRYSTAL - Geometric Formation
 * Crystal growth simulation using Three.js
 */

// ============================================
// Background - Sparkling particles
// ============================================
class SparkleBackground {
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
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.05 + 0.02
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(8, 0, 16, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.twinkle += p.twinkleSpeed;
            const opacity = (Math.sin(p.twinkle) + 1) * 0.3;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(224, 240, 255, ${opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// Crystal Growth System
// ============================================
class CrystalGrowth {
    constructor() {
        this.container = document.getElementById('three-container');
        this.atoms = [];
        this.isGrowing = true;
        this.latticeType = 'cubic';
        this.temperature = 250;
        this.saturation = 80;
        this.time = 0;
        this.crystalMesh = null;

        this.latticeVectors = {
            cubic: [
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0, 1, 0),
                new THREE.Vector3(0, 0, 1)
            ],
            hexagonal: [
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0.5, Math.sqrt(3) / 2, 0),
                new THREE.Vector3(0, 0, 1.5)
            ],
            orthorhombic: [
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0, 1.5, 0),
                new THREE.Vector3(0, 0, 0.7)
            ]
        };

        this.init();
        this.createSeed();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x080010);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 10, 25);
        this.camera.lookAt(0, 5, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.target.set(0, 5, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x1a0030, 0.5);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xb06bff, 1, 50);
        pointLight1.position.set(10, 20, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x6bfff7, 0.5, 50);
        pointLight2.position.set(-10, 10, -10);
        this.scene.add(pointLight2);

        // Atom geometry
        this.atomGeometry = new THREE.SphereGeometry(0.2, 12, 12);
        this.atomMaterial = new THREE.MeshPhongMaterial({
            color: 0xb06bff,
            emissive: 0x300050,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        });

        // Drifting atom material
        this.driftMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.3
        });

        // Drifting atoms pool
        this.driftingAtoms = [];

        window.addEventListener('resize', () => this.onResize());
    }

    createSeed() {
        // Start with a seed atom at origin
        this.addAtom(new THREE.Vector3(0, 0, 0));
    }

    addAtom(position) {
        const mesh = new THREE.Mesh(this.atomGeometry, this.atomMaterial);
        mesh.position.copy(position);
        mesh.scale.setScalar(0.1);
        this.scene.add(mesh);
        
        this.atoms.push({
            position: position.clone(),
            mesh: mesh,
            growing: true
        });

        // Animate scale
        this.animateAtomGrowth(mesh);
        this.updateStats();
    }

    animateAtomGrowth(mesh) {
        const startScale = 0.1;
        const endScale = 1;
        const duration = 500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            
            mesh.scale.setScalar(startScale + (endScale - startScale) * eased);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    getLatticeNeighbors(position) {
        const neighbors = [];
        const vectors = this.latticeVectors[this.latticeType];
        
        // All 26 neighbors in 3D lattice
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    if (dx === 0 && dy === 0 && dz === 0) continue;
                    
                    const offset = new THREE.Vector3()
                        .addScaledVector(vectors[0], dx)
                        .addScaledVector(vectors[1], dy)
                        .addScaledVector(vectors[2], dz);
                    
                    neighbors.push(position.clone().add(offset));
                }
            }
        }
        
        return neighbors;
    }

    isOccupied(position) {
        return this.atoms.some(atom => 
            atom.position.distanceTo(position) < 0.1
        );
    }

    getAttachmentSites() {
        const sites = [];
        const checked = new Set();

        this.atoms.forEach(atom => {
            const neighbors = this.getLatticeNeighbors(atom.position);
            
            neighbors.forEach(pos => {
                const key = `${pos.x.toFixed(2)},${pos.y.toFixed(2)},${pos.z.toFixed(2)}`;
                
                if (!checked.has(key) && !this.isOccupied(pos)) {
                    // Prefer upward growth (light seeking)
                    const neighborCount = this.countNeighbors(pos);
                    const heightBonus = pos.y * 0.1;
                    
                    sites.push({
                        position: pos,
                        energy: -neighborCount + heightBonus
                    });
                    checked.add(key);
                }
            });
        });

        // Sort by energy (lower is more favorable)
        sites.sort((a, b) => a.energy - b.energy);
        return sites;
    }

    countNeighbors(position) {
        return this.atoms.filter(atom => 
            atom.position.distanceTo(position) < 2
        ).length;
    }

    growStep() {
        if (!this.isGrowing || this.atoms.length >= 500) return;

        const sites = this.getAttachmentSites();
        if (sites.length === 0) return;

        // Growth probability based on temperature and saturation
        const growthProb = (this.saturation / 100) * Math.exp(-this.temperature / 1000);
        
        if (Math.random() < growthProb) {
            // Weighted random selection favoring low-energy sites
            const weights = sites.slice(0, 20).map((s, i) => Math.exp(-i * 0.5));
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            let random = Math.random() * totalWeight;
            
            let selectedSite = sites[0];
            for (let i = 0; i < weights.length; i++) {
                random -= weights[i];
                if (random <= 0) {
                    selectedSite = sites[i];
                    break;
                }
            }
            
            this.addAtom(selectedSite.position);
        }

        this.time += 0.1;
        this.updateStats();
    }

    updateCrystalMesh() {
        // Create convex hull for crystal surface
        if (this.atoms.length < 4) return;

        if (this.crystalMesh) {
            this.scene.remove(this.crystalMesh);
            this.crystalMesh.geometry.dispose();
        }

        // Simple approach: create icosahedron scaled to bound atoms
        const bounds = this.calculateBounds();
        const geometry = new THREE.IcosahedronGeometry(bounds.radius * 1.1, 1);
        
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xb06bff,
            metalness: 0.1,
            roughness: 0.1,
            transmission: 0.9,
            thickness: 0.5,
            transparent: true,
            opacity: 0.3
        });

        this.crystalMesh = new THREE.Mesh(geometry, material);
        this.crystalMesh.position.copy(bounds.center);
        this.scene.add(this.crystalMesh);
    }

    calculateBounds() {
        if (this.atoms.length === 0) {
            return { center: new THREE.Vector3(), radius: 1 };
        }

        const center = new THREE.Vector3();
        this.atoms.forEach(a => center.add(a.position));
        center.divideScalar(this.atoms.length);

        let maxDist = 0;
        this.atoms.forEach(a => {
            const dist = a.position.distanceTo(center);
            maxDist = Math.max(maxDist, dist);
        });

        return { center, radius: maxDist };
    }

    reset() {
        // Remove all atom meshes
        this.atoms.forEach(atom => {
            this.scene.remove(atom.mesh);
        });
        this.atoms = [];

        if (this.crystalMesh) {
            this.scene.remove(this.crystalMesh);
            this.crystalMesh = null;
        }

        this.time = 0;
        this.createSeed();
        this.updateStats();
    }

    updateStats() {
        document.getElementById('atomCount').textContent = this.atoms.length;
        document.getElementById('facetCount').textContent = Math.max(0, Math.floor(this.atoms.length / 5));
        document.getElementById('timeValue').textContent = this.time.toFixed(1) + 's';
    }

    bindEvents() {
        document.getElementById('newSeed').addEventListener('click', () => {
            const angle = Math.random() * Math.PI * 2;
            const r = 3 + Math.random() * 3;
            this.addAtom(new THREE.Vector3(
                Math.cos(angle) * r,
                0,
                Math.sin(angle) * r
            ));
        });

        document.getElementById('toggleGrowth').addEventListener('click', (e) => {
            this.isGrowing = !this.isGrowing;
            e.target.textContent = this.isGrowing ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('resetCrystal').addEventListener('click', () => {
            this.reset();
        });

        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.latticeType = btn.dataset.type;
                document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        document.getElementById('tempSlider').addEventListener('input', (e) => {
            this.temperature = parseInt(e.target.value);
            document.getElementById('tempDisplay').textContent = this.temperature + '°C';
        });

        document.getElementById('satSlider').addEventListener('input', (e) => {
            this.saturation = parseInt(e.target.value);
            document.getElementById('satDisplay').textContent = this.saturation + '%';
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Grow multiple times per frame for faster visualization
        for (let i = 0; i < 3; i++) {
            this.growStep();
        }

        // Update crystal mesh periodically
        if (this.atoms.length % 20 === 0 && this.atoms.length > 10) {
            this.updateCrystalMesh();
        }

        // Rotate scene slowly
        this.scene.rotation.y += 0.002;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SparkleBackground();
    new CrystalGrowth();
});

