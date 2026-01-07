/**
 * THE AUTOMATON - Life in Three Dimensions
 * 3D Cellular Automata using Three.js instanced meshes
 */

class AutomatonVisualization {
    constructor() {
        this.container = document.getElementById('three-container');
        this.gridSize = 20;
        this.grid = null;
        this.nextGrid = null;
        this.generation = 0;
        this.isPlaying = true;
        this.simSpeed = 5;
        this.lastUpdate = 0;
        
        // Rule: [surviveMin, surviveMax, birthMin, birthMax]
        this.rules = {
            '4445': [4, 4, 4, 5],  // Classic-ish
            '5576': [5, 5, 7, 6],  // Amoeba
            '6677': [6, 6, 7, 7],  // Crystal
            '4567': [4, 5, 6, 7],  // Builder
            '3356': [3, 3, 5, 6],  // Explosive
        };
        this.currentRule = this.rules['4445'];

        this.init();
        this.initGrid();
        this.randomize();
        this.updateMesh();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050008);

        this.camera = new THREE.PerspectiveCamera(
            60, window.innerWidth / window.innerHeight, 0.1, 500
        );
        this.camera.position.set(35, 35, 35);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Lighting
        const ambient = new THREE.AmbientLight(0x303030);
        this.scene.add(ambient);

        const directional = new THREE.DirectionalLight(0x00ff88, 0.8);
        directional.position.set(20, 30, 20);
        this.scene.add(directional);

        const backLight = new THREE.DirectionalLight(0x88ff00, 0.4);
        backLight.position.set(-20, -10, -20);
        this.scene.add(backLight);

        // Grid helper
        const gridHelper = new THREE.BoxHelper(
            new THREE.Mesh(new THREE.BoxGeometry(this.gridSize, this.gridSize, this.gridSize)),
            0x303030
        );
        gridHelper.position.set(this.gridSize / 2 - 0.5, this.gridSize / 2 - 0.5, this.gridSize / 2 - 0.5);
        this.scene.add(gridHelper);
        this.gridHelper = gridHelper;

        window.addEventListener('resize', () => this.onResize());
    }

    initGrid() {
        this.grid = new Uint8Array(this.gridSize * this.gridSize * this.gridSize);
        this.nextGrid = new Uint8Array(this.gridSize * this.gridSize * this.gridSize);
    }

    idx(x, y, z) {
        return x + y * this.gridSize + z * this.gridSize * this.gridSize;
    }

    randomize() {
        const density = 0.15;
        const center = this.gridSize / 2;
        const radius = this.gridSize / 3;

        for (let z = 0; z < this.gridSize; z++) {
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const dx = x - center;
                    const dy = y - center;
                    const dz = z - center;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    
                    if (dist < radius && Math.random() < density) {
                        this.grid[this.idx(x, y, z)] = 1;
                    } else {
                        this.grid[this.idx(x, y, z)] = 0;
                    }
                }
            }
        }
        this.generation = 0;
        this.updateStats();
    }

    clear() {
        this.grid.fill(0);
        this.generation = 0;
        this.updateMesh();
        this.updateStats();
    }

    countNeighbors(x, y, z) {
        let count = 0;
        for (let dz = -1; dz <= 1; dz++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0 && dz === 0) continue;
                    
                    const nx = (x + dx + this.gridSize) % this.gridSize;
                    const ny = (y + dy + this.gridSize) % this.gridSize;
                    const nz = (z + dz + this.gridSize) % this.gridSize;
                    
                    count += this.grid[this.idx(nx, ny, nz)];
                }
            }
        }
        return count;
    }

    step() {
        const [sMin, sMax, bMin, bMax] = this.currentRule;

        for (let z = 0; z < this.gridSize; z++) {
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const i = this.idx(x, y, z);
                    const neighbors = this.countNeighbors(x, y, z);
                    const alive = this.grid[i];

                    if (alive) {
                        // Survival
                        this.nextGrid[i] = (neighbors >= sMin && neighbors <= sMax) ? 1 : 0;
                    } else {
                        // Birth
                        this.nextGrid[i] = (neighbors >= bMin && neighbors <= bMax) ? 1 : 0;
                    }
                }
            }
        }

        // Swap grids
        const temp = this.grid;
        this.grid = this.nextGrid;
        this.nextGrid = temp;

        this.generation++;
        this.updateMesh();
        this.updateStats();
    }

    updateMesh() {
        // Remove old mesh
        if (this.instancedMesh) {
            this.scene.remove(this.instancedMesh);
            this.instancedMesh.geometry.dispose();
            this.instancedMesh.material.dispose();
        }

        // Count living cells
        let count = 0;
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i]) count++;
        }

        if (count === 0) {
            this.updateStats();
            return;
        }

        const geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
        const material = new THREE.MeshLambertMaterial({
            color: 0x00ff88,
            transparent: true,
            opacity: 0.85
        });

        this.instancedMesh = new THREE.InstancedMesh(geometry, material, count);

        const matrix = new THREE.Matrix4();
        const color = new THREE.Color();
        let instanceIdx = 0;

        for (let z = 0; z < this.gridSize; z++) {
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    if (this.grid[this.idx(x, y, z)]) {
                        matrix.setPosition(x, y, z);
                        this.instancedMesh.setMatrixAt(instanceIdx, matrix);

                        // Color based on position
                        const hue = (x + y + z) / (this.gridSize * 3) * 0.3 + 0.25;
                        color.setHSL(hue, 0.8, 0.55);
                        this.instancedMesh.setColorAt(instanceIdx, color);

                        instanceIdx++;
                    }
                }
            }
        }

        this.instancedMesh.instanceMatrix.needsUpdate = true;
        if (this.instancedMesh.instanceColor) {
            this.instancedMesh.instanceColor.needsUpdate = true;
        }

        this.scene.add(this.instancedMesh);
    }

    updateStats() {
        let count = 0;
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i]) count++;
        }
        document.getElementById('cellCount').textContent = count.toLocaleString();
        document.getElementById('generation').textContent = this.generation;
        document.getElementById('ruleSet').textContent = 
            `${this.currentRule[0]}/${this.currentRule[1]}/${this.currentRule[2]}/${this.currentRule[3]}`;
    }

    changeGridSize(newSize) {
        this.gridSize = newSize;
        
        // Update grid helper
        this.scene.remove(this.gridHelper);
        const gridHelper = new THREE.BoxHelper(
            new THREE.Mesh(new THREE.BoxGeometry(newSize, newSize, newSize)),
            0x303030
        );
        gridHelper.position.set(newSize / 2 - 0.5, newSize / 2 - 0.5, newSize / 2 - 0.5);
        this.scene.add(gridHelper);
        this.gridHelper = gridHelper;

        this.initGrid();
        this.randomize();
        this.updateMesh();
    }

    bindEvents() {
        document.getElementById('randomize').addEventListener('click', () => {
            this.randomize();
            this.updateMesh();
        });

        document.getElementById('togglePlay').addEventListener('click', (e) => {
            this.isPlaying = !this.isPlaying;
            e.target.textContent = this.isPlaying ? '⏸️ Pause' : '▶️ Play';
        });

        document.getElementById('stepOnce').addEventListener('click', () => {
            this.step();
        });

        document.getElementById('clear').addEventListener('click', () => {
            this.clear();
        });

        document.getElementById('gridSize').addEventListener('input', (e) => {
            const size = parseInt(e.target.value);
            document.getElementById('sizeValue').textContent = size;
            this.changeGridSize(size);
        });

        document.getElementById('simSpeed').addEventListener('input', (e) => {
            this.simSpeed = parseInt(e.target.value);
        });

        document.getElementById('ruleSelect').addEventListener('change', (e) => {
            this.currentRule = this.rules[e.target.value];
            this.updateStats();
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate(time = 0) {
        requestAnimationFrame((t) => this.animate(t));

        const interval = 1000 / this.simSpeed;
        if (this.isPlaying && time - this.lastUpdate > interval) {
            this.step();
            this.lastUpdate = time;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => new AutomatonVisualization());

