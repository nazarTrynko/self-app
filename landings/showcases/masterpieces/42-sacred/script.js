/**
 * THE SACRED - Divine Geometry Unfolds
 * Sacred geometry visualization using Three.js
 */

// Background
class SacredBackground {
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
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.03 + 0.01
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5, 3, 16, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.twinkle += p.twinkleSpeed;
            const opacity = (Math.sin(p.twinkle) + 1) * 0.25;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Sacred Geometry Visualization
class SacredGeometry {
    constructor() {
        this.container = document.getElementById('three-container');
        this.currentForm = 'flower';
        this.isAnimating = true;
        this.showPhi = false;
        this.time = 0;
        this.formGroup = null;

        this.formData = {
            flower: { circles: 19, symmetry: '6-fold' },
            metatron: { circles: 13, symmetry: '6-fold' },
            seed: { circles: 7, symmetry: '6-fold' },
            torus: { circles: 36, symmetry: 'Infinite' }
        };

        this.init();
        this.createForm('flower');
        this.bindEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050310);

        this.camera = new THREE.PerspectiveCamera(
            60, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        this.camera.position.set(0, 0, 15);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        const ambientLight = new THREE.AmbientLight(0x201510, 0.5);
        this.scene.add(ambientLight);

        window.addEventListener('resize', () => this.onResize());
    }

    createForm(formName) {
        if (this.formGroup) {
            this.scene.remove(this.formGroup);
        }

        this.formGroup = new THREE.Group();
        this.currentForm = formName;

        const material = new THREE.LineBasicMaterial({
            color: 0xffd700,
            transparent: true,
            opacity: 0.8
        });

        switch (formName) {
            case 'flower':
                this.createFlowerOfLife(material);
                break;
            case 'metatron':
                this.createMetatronsCube(material);
                break;
            case 'seed':
                this.createSeedOfLife(material);
                break;
            case 'torus':
                this.createTorus(material);
                break;
        }

        this.scene.add(this.formGroup);
        this.updateStats();
    }

    createCircle(x, y, radius, segments = 64) {
        const points = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(
                x + Math.cos(angle) * radius,
                y + Math.sin(angle) * radius,
                0
            ));
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }

    createFlowerOfLife(material) {
        const radius = 1;
        const positions = [{ x: 0, y: 0 }];

        // First ring (6 circles)
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            positions.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        }

        // Second ring (12 circles)
        for (let i = 0; i < 6; i++) {
            const angle1 = (i / 6) * Math.PI * 2;
            const angle2 = ((i + 0.5) / 6) * Math.PI * 2;
            positions.push({
                x: Math.cos(angle1) * radius * 2,
                y: Math.sin(angle1) * radius * 2
            });
            positions.push({
                x: Math.cos(angle2) * radius * Math.sqrt(3),
                y: Math.sin(angle2) * radius * Math.sqrt(3)
            });
        }

        positions.forEach(pos => {
            const circle = new THREE.Line(
                this.createCircle(pos.x, pos.y, radius),
                material.clone()
            );
            this.formGroup.add(circle);
        });
    }

    createMetatronsCube(material) {
        const radius = 0.5;
        const positions = [{ x: 0, y: 0 }];

        // Inner hexagon
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            positions.push({
                x: Math.cos(angle) * 2,
                y: Math.sin(angle) * 2
            });
        }

        // Outer hexagon
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 + Math.PI / 6;
            positions.push({
                x: Math.cos(angle) * 4,
                y: Math.sin(angle) * 4
            });
        }

        // Draw circles
        positions.forEach(pos => {
            const circle = new THREE.Line(
                this.createCircle(pos.x, pos.y, radius),
                material.clone()
            );
            this.formGroup.add(circle);
        });

        // Connect all centers
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xffd700,
            transparent: true,
            opacity: 0.4
        });

        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const points = [
                    new THREE.Vector3(positions[i].x, positions[i].y, 0),
                    new THREE.Vector3(positions[j].x, positions[j].y, 0)
                ];
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(lineGeo, lineMaterial);
                this.formGroup.add(line);
            }
        }

        this.formGroup.scale.setScalar(0.6);
    }

    createSeedOfLife(material) {
        const radius = 1;
        const positions = [{ x: 0, y: 0 }];

        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            positions.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        }

        positions.forEach(pos => {
            const circle = new THREE.Line(
                this.createCircle(pos.x, pos.y, radius),
                material.clone()
            );
            this.formGroup.add(circle);
        });

        this.formGroup.scale.setScalar(1.5);
    }

    createTorus(material) {
        const torusGeo = new THREE.TorusGeometry(3, 1, 16, 100);
        const torusMat = new THREE.MeshBasicMaterial({
            color: 0xffd700,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        this.formGroup.add(torus);
    }

    updateStats() {
        const data = this.formData[this.currentForm];
        document.getElementById('formName').textContent = this.currentForm.charAt(0).toUpperCase() + this.currentForm.slice(1);
        document.getElementById('circleCount').textContent = data.circles;
        document.getElementById('symmetry').textContent = data.symmetry;
    }

    bindEvents() {
        document.getElementById('morphNext').addEventListener('click', () => {
            const forms = ['flower', 'metatron', 'seed', 'torus'];
            const currentIndex = forms.indexOf(this.currentForm);
            const nextIndex = (currentIndex + 1) % forms.length;
            this.createForm(forms[nextIndex]);
            
            document.querySelectorAll('.form-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.form === forms[nextIndex]);
            });
        });

        document.getElementById('toggleAnimate').addEventListener('click', (e) => {
            this.isAnimating = !this.isAnimating;
            e.target.textContent = this.isAnimating ? '⏸ Pause' : '▶ Resume';
        });

        document.getElementById('showPhi').addEventListener('click', (e) => {
            this.showPhi = !this.showPhi;
            e.target.style.opacity = this.showPhi ? 1 : 0.5;
        });

        document.querySelectorAll('.form-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.createForm(btn.dataset.form);
                document.querySelectorAll('.form-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
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

        if (this.isAnimating && this.formGroup) {
            this.formGroup.rotation.z += 0.002;
            this.formGroup.rotation.x = Math.sin(this.time * 0.5) * 0.2;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SacredBackground();
    new SacredGeometry();
});

