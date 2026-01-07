/**
 * THE NEBULA - Star Birth & Cosmic Dust
 * Volumetric nebula with particle system using Three.js
 */

class NebulaVisualization {
    constructor() {
        this.container = document.getElementById('three-container');
        this.particles = [];
        this.stars = [];
        this.isRunning = true;
        this.density = 5;
        this.timeSpeed = 5;
        this.age = 0;
        this.particleCount = 50000;

        this.init();
        this.createNebula();
        this.createStarfield();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x020005);

        this.camera = new THREE.PerspectiveCamera(
            70, window.innerWidth / window.innerHeight, 0.1, 2000
        );
        this.camera.position.set(0, 0, 100);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.3;

        window.addEventListener('resize', () => this.onResize());
    }

    createNebula() {
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);

        // Color palette
        const colorPalette = [
            new THREE.Color(0xff6b9d), // Pink
            new THREE.Color(0x9b6bff), // Purple
            new THREE.Color(0x6b9bff), // Blue
            new THREE.Color(0xff9b6b)  // Orange
        ];

        for (let i = 0; i < this.particleCount; i++) {
            // Spherical distribution with density variations
            const radius = 50 + Math.random() * 50;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            // Add turbulence
            const turbulence = (Math.random() - 0.5) * 30;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta) + turbulence;
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) + turbulence;
            positions[i * 3 + 2] = radius * Math.cos(phi) + turbulence;

            // Random color from palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 2 + 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 1,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.nebulaMesh = new THREE.Points(geometry, material);
        this.scene.add(this.nebulaMesh);
    }

    createStarfield() {
        const starCount = 2000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const radius = 500 + Math.random() * 500;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.5,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        this.starfield = new THREE.Points(geometry, material);
        this.scene.add(this.starfield);
    }

    igniteStar() {
        // Create a bright new star
        const positions = this.nebulaMesh.geometry.attributes.position.array;
        const randomIndex = Math.floor(Math.random() * this.particleCount) * 3;

        const starPos = new THREE.Vector3(
            positions[randomIndex],
            positions[randomIndex + 1],
            positions[randomIndex + 2]
        );

        const starGeometry = new THREE.SphereGeometry(2, 16, 16);
        const starMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffaa,
            transparent: true,
            opacity: 1
        });

        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.copy(starPos);
        this.scene.add(star);
        this.stars.push({ mesh: star, age: 0, maxAge: 200 });

        // Create light
        const light = new THREE.PointLight(0xffffaa, 2, 50);
        light.position.copy(starPos);
        this.scene.add(light);
        star.light = light;

        this.updateStats();
    }

    updateStats() {
        document.getElementById('starCount').textContent = this.stars.length;
        document.getElementById('particleCount').textContent = (this.particleCount / 1000).toFixed(0) + 'K';
        document.getElementById('ageValue').textContent = this.age.toFixed(1);
    }

    reset() {
        this.stars.forEach(s => {
            this.scene.remove(s.mesh);
            if (s.mesh.light) this.scene.remove(s.mesh.light);
        });
        this.stars = [];
        this.age = 0;
        this.updateStats();
    }

    bindEvents() {
        document.getElementById('igniteStar').addEventListener('click', () => this.igniteStar());

        document.getElementById('toggleTime').addEventListener('click', (e) => {
            this.isRunning = !this.isRunning;
            e.target.textContent = this.isRunning ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('resetNebula').addEventListener('click', () => this.reset());

        document.getElementById('densitySlider').addEventListener('input', (e) => {
            this.density = parseInt(e.target.value);
        });

        document.getElementById('timeSpeed').addEventListener('input', (e) => {
            this.timeSpeed = parseInt(e.target.value);
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.isRunning) {
            this.age += 0.01 * this.timeSpeed;

            // Gentle nebula rotation
            this.nebulaMesh.rotation.y += 0.0003 * this.timeSpeed;
            this.nebulaMesh.rotation.x += 0.0001 * this.timeSpeed;

            // Update stars
            this.stars.forEach((star, i) => {
                star.age++;
                const scale = 1 + Math.sin(star.age * 0.1) * 0.2;
                star.mesh.scale.setScalar(scale);

                if (star.age > star.maxAge) {
                    star.mesh.material.opacity *= 0.99;
                }
            });

            // Random star ignition
            if (Math.random() < 0.001 * this.timeSpeed) {
                this.igniteStar();
            }

            this.updateStats();
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => new NebulaVisualization());

