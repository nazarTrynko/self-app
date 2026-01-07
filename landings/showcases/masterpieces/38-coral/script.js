/**
 * THE CORAL - Living Reef Ecosystem
 * Procedural coral growth visualization using Three.js
 */

// ============================================
// Background Canvas - Underwater particles
// ============================================
class UnderwaterBackground {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.bubbles = [];
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
        // Floating particles (plankton)
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedY: (Math.random() - 0.7) * 0.3,
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
        
        // Bubbles
        for (let i = 0; i < 20; i++) {
            this.bubbles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + Math.random() * 200,
                size: Math.random() * 4 + 2,
                speed: Math.random() * 0.5 + 0.3,
                wobble: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5, 16, 21, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw light rays from above
        this.ctx.save();
        for (let i = 0; i < 5; i++) {
            const x = (this.canvas.width / 6) * (i + 1);
            const gradient = this.ctx.createLinearGradient(x, 0, x, this.canvas.height);
            gradient.addColorStop(0, 'rgba(78, 205, 196, 0.1)');
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(x - 50, 0, 100, this.canvas.height);
        }
        this.ctx.restore();

        // Particles
        this.particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(126, 184, 208, ${p.opacity})`;
            this.ctx.fill();
        });

        // Bubbles
        this.bubbles.forEach(b => {
            b.y -= b.speed;
            b.wobble += 0.05;
            b.x += Math.sin(b.wobble) * 0.5;

            if (b.y < -10) {
                b.y = this.canvas.height + 10;
                b.x = Math.random() * this.canvas.width;
            }

            this.ctx.beginPath();
            this.ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// Coral Colony Class
// ============================================
class CoralColony {
    constructor(scene, position, type, color) {
        this.scene = scene;
        this.position = position;
        this.type = type;
        this.color = color;
        this.branches = [];
        this.polyps = [];
        this.age = 0;
        this.group = new THREE.Group();
        this.group.position.copy(position);
        scene.add(this.group);
        
        this.growthParams = this.getGrowthParams();
        this.createInitialBranch();
    }

    getGrowthParams() {
        const params = {
            branching: {
                branchAngle: 35,
                lengthDecay: 0.7,
                branchProb: 0.4,
                maxBranches: 150,
                growthRate: 0.02
            },
            brain: {
                branchAngle: 20,
                lengthDecay: 0.9,
                branchProb: 0.1,
                maxBranches: 80,
                growthRate: 0.01
            },
            plate: {
                branchAngle: 85,
                lengthDecay: 0.95,
                branchProb: 0.6,
                maxBranches: 100,
                growthRate: 0.015
            },
            staghorn: {
                branchAngle: 25,
                lengthDecay: 0.75,
                branchProb: 0.5,
                maxBranches: 200,
                growthRate: 0.025
            }
        };
        return params[this.type] || params.branching;
    }

    createInitialBranch() {
        const branch = {
            start: new THREE.Vector3(0, 0, 0),
            end: new THREE.Vector3(0, 0.5, 0),
            direction: new THREE.Vector3(0, 1, 0),
            length: 0.5,
            thickness: 0.15,
            depth: 0,
            growing: true,
            mesh: null
        };
        this.branches.push(branch);
        this.createBranchMesh(branch);
    }

    createBranchMesh(branch) {
        const geometry = new THREE.CylinderGeometry(
            branch.thickness * 0.6,
            branch.thickness,
            branch.length,
            8
        );
        
        const material = new THREE.MeshPhongMaterial({
            color: this.color,
            emissive: new THREE.Color(this.color).multiplyScalar(0.2),
            shininess: 30
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position and orient
        const midpoint = new THREE.Vector3().addVectors(branch.start, branch.end).multiplyScalar(0.5);
        mesh.position.copy(midpoint);
        mesh.lookAt(branch.end);
        mesh.rotateX(Math.PI / 2);
        
        this.group.add(mesh);
        branch.mesh = mesh;
    }

    grow(lightLevel) {
        if (this.branches.length >= this.growthParams.maxBranches) return;

        const growthChance = this.growthParams.growthRate * (lightLevel / 100);
        
        // Try to grow each active branch tip
        const activeBranches = this.branches.filter(b => b.growing && b.depth < 8);
        
        activeBranches.forEach(branch => {
            if (Math.random() < growthChance) {
                // Extend or branch
                if (Math.random() < this.growthParams.branchProb) {
                    // Create branches
                    this.createBranches(branch);
                    branch.growing = false;
                } else {
                    // Extend
                    this.extendBranch(branch);
                }
            }
        });

        this.age++;
    }

    extendBranch(parent) {
        const newLength = parent.length * this.growthParams.lengthDecay;
        const newDir = parent.direction.clone();
        
        // Add some randomness
        newDir.x += (Math.random() - 0.5) * 0.3;
        newDir.z += (Math.random() - 0.5) * 0.3;
        newDir.normalize();
        
        const newEnd = parent.end.clone().add(newDir.clone().multiplyScalar(newLength));
        
        const branch = {
            start: parent.end.clone(),
            end: newEnd,
            direction: newDir,
            length: newLength,
            thickness: parent.thickness * 0.9,
            depth: parent.depth + 1,
            growing: true,
            mesh: null
        };
        
        this.branches.push(branch);
        this.createBranchMesh(branch);
        parent.growing = false;
    }

    createBranches(parent) {
        const branchCount = this.type === 'plate' ? 3 : 2;
        const angleRad = this.growthParams.branchAngle * Math.PI / 180;
        
        for (let i = 0; i < branchCount; i++) {
            const angle = angleRad * (i === 0 ? 1 : -1);
            const rotationAxis = new THREE.Vector3(
                Math.random() - 0.5,
                0,
                Math.random() - 0.5
            ).normalize();
            
            const newDir = parent.direction.clone()
                .applyAxisAngle(rotationAxis, angle);
            
            // Add upward bias for light-seeking
            newDir.y += 0.2;
            newDir.normalize();
            
            const newLength = parent.length * this.growthParams.lengthDecay;
            const newEnd = parent.end.clone().add(newDir.clone().multiplyScalar(newLength));
            
            const branch = {
                start: parent.end.clone(),
                end: newEnd,
                direction: newDir,
                length: newLength,
                thickness: parent.thickness * 0.7,
                depth: parent.depth + 1,
                growing: true,
                mesh: null
            };
            
            this.branches.push(branch);
            this.createBranchMesh(branch);
        }
    }

    getPolypCount() {
        return this.branches.length * 5; // Approximate polyps per branch
    }

    dispose() {
        this.branches.forEach(b => {
            if (b.mesh) {
                this.group.remove(b.mesh);
                b.mesh.geometry.dispose();
                b.mesh.material.dispose();
            }
        });
        this.scene.remove(this.group);
    }
}

// ============================================
// Coral Reef Visualization
// ============================================
class CoralReefVisualization {
    constructor() {
        this.container = document.getElementById('three-container');
        this.colonies = [];
        this.isGrowing = true;
        this.showPolyps = true;
        this.timeSpeed = 50;
        this.lightLevel = 80;
        this.selectedType = 'branching';
        this.years = 0;

        this.colors = {
            branching: 0xff6b6b,
            brain: 0xffd93d,
            plate: 0xff9999,
            staghorn: 0x4ecdc4
        };

        this.init();
        this.createInitialColonies();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x051015);
        this.scene.fog = new THREE.FogExp2(0x051015, 0.03);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 8, 20);
        this.camera.lookAt(0, 3, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.target.set(0, 3, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x1a3050, 0.4);
        this.scene.add(ambientLight);

        // Light from above (sunlight through water)
        const sunLight = new THREE.DirectionalLight(0x4ecdc4, 0.8);
        sunLight.position.set(0, 20, 5);
        this.scene.add(sunLight);

        const pointLight = new THREE.PointLight(0xff9999, 0.5, 30);
        pointLight.position.set(5, 10, 5);
        this.scene.add(pointLight);

        // Seafloor
        const floorGeometry = new THREE.PlaneGeometry(100, 100);
        const floorMaterial = new THREE.MeshLambertMaterial({
            color: 0x1a2530,
            side: THREE.DoubleSide
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        this.scene.add(floor);

        // Sand mounds
        for (let i = 0; i < 20; i++) {
            const mound = new THREE.Mesh(
                new THREE.SphereGeometry(Math.random() * 2 + 0.5, 8, 6),
                new THREE.MeshLambertMaterial({ color: 0x2a3540 })
            );
            mound.position.set(
                (Math.random() - 0.5) * 40,
                -0.5,
                (Math.random() - 0.5) * 40
            );
            mound.scale.y = 0.3;
            this.scene.add(mound);
        }

        window.addEventListener('resize', () => this.onResize());
    }

    createInitialColonies() {
        // Create a few starting colonies
        const types = ['branching', 'brain', 'staghorn'];
        for (let i = 0; i < 3; i++) {
            const type = types[i % types.length];
            const pos = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                0,
                (Math.random() - 0.5) * 10
            );
            this.addColony(pos, type);
        }
    }

    addColony(position, type) {
        const color = this.colors[type] || 0xff6b6b;
        const colony = new CoralColony(this.scene, position, type, color);
        this.colonies.push(colony);
        this.updateStats();
    }

    growAll() {
        if (!this.isGrowing) return;
        
        // Grow based on time speed
        const growthIterations = Math.ceil(this.timeSpeed / 10);
        
        for (let i = 0; i < growthIterations; i++) {
            this.colonies.forEach(colony => {
                colony.grow(this.lightLevel);
            });
        }

        this.years += this.timeSpeed / 100;
        this.updateStats();
    }

    reset() {
        this.colonies.forEach(colony => colony.dispose());
        this.colonies = [];
        this.years = 0;
        this.createInitialColonies();
        this.updateStats();
    }

    updateStats() {
        document.getElementById('yearCount').textContent = Math.floor(this.years).toLocaleString();
        document.getElementById('colonyCount').textContent = this.colonies.length;
        
        const totalPolyps = this.colonies.reduce((sum, c) => sum + c.getPolypCount(), 0);
        document.getElementById('polypCount').textContent = totalPolyps.toLocaleString();
    }

    bindEvents() {
        document.getElementById('addCoral').addEventListener('click', () => {
            const pos = new THREE.Vector3(
                (Math.random() - 0.5) * 15,
                0,
                (Math.random() - 0.5) * 15
            );
            this.addColony(pos, this.selectedType);
        });

        document.getElementById('toggleTime').addEventListener('click', (e) => {
            this.isGrowing = !this.isGrowing;
            e.target.textContent = this.isGrowing ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('resetReef').addEventListener('click', () => {
            this.reset();
        });

        document.getElementById('togglePolyps').addEventListener('click', (e) => {
            this.showPolyps = !this.showPolyps;
            e.target.style.opacity = this.showPolyps ? 1 : 0.5;
        });

        document.getElementById('timeSpeed').addEventListener('input', (e) => {
            this.timeSpeed = parseInt(e.target.value);
            document.getElementById('speedDisplay').textContent = this.timeSpeed + ' yr/s';
        });

        document.getElementById('lightLevel').addEventListener('input', (e) => {
            this.lightLevel = parseInt(e.target.value);
            document.getElementById('lightDisplay').textContent = this.lightLevel + '%';
        });

        // Coral type buttons
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectedType = btn.dataset.type;
                document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Double-click to place coral
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
                this.addColony(intersection, this.selectedType);
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

        // Grow corals
        this.growAll();

        // Subtle camera movement
        this.scene.rotation.y += 0.0003;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new UnderwaterBackground();
    new CoralReefVisualization();
});

