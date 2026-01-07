// HYPERDIMENSIONAL NAVIGATOR - Advanced 4D Visualization with Three.js
// Emergent Intelligence Category - Showcase 35
// True 3D rendering of 4D objects projected into perceivable space

// 4D Vector class
class Vec4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x; this.y = y; this.z = z; this.w = w;
    }

    rotateXW(angle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        return new Vec4(this.x * c - this.w * s, this.y, this.z, this.x * s + this.w * c);
    }

    rotateYW(angle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        return new Vec4(this.x, this.y * c - this.w * s, this.z, this.y * s + this.w * c);
    }

    rotateZW(angle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        return new Vec4(this.x, this.y, this.z * c - this.w * s, this.z * s + this.w * c);
    }

    rotateXY(angle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        return new Vec4(this.x * c - this.y * s, this.x * s + this.y * c, this.z, this.w);
    }

    projectTo3D(distance = 2) {
        const scale = distance / (distance - this.w);
        return { x: this.x * scale, y: this.y * scale, z: this.z * scale, scale, w: this.w };
    }
}

// Three.js 4D Tesseract Renderer
class Tesseract3D {
    constructor() {
        this.container = document.getElementById('three-container');
        if (!this.container || typeof THREE === 'undefined') {
            console.warn('Three.js container not found or THREE not loaded');
            return;
        }
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.vertices4D = [];
        this.edges = [];
        this.edgeObjects = [];
        this.vertexObjects = [];
        this.particleSystem = null;
        
        this.rotationXW = 0;
        this.rotationYW = 0;
        this.rotationZW = 0;
        this.time = 0;
        this.autoRotate = false;
        this.mouse = { x: 0, y: 0 };
        
        this.init();
        this.createTesseract();
        this.createParticleField();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x0a0510, 1);
        this.container.appendChild(this.renderer.domElement);
        
        this.camera.position.z = 8;
        
        // Add subtle fog
        this.scene.fog = new THREE.FogExp2(0x0a0510, 0.05);
        
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
    }

    createTesseract() {
        // Generate 16 vertices of a tesseract in 4D
        this.vertices4D = [];
        for (let x of [-1, 1]) {
            for (let y of [-1, 1]) {
                for (let z of [-1, 1]) {
                    for (let w of [-1, 1]) {
                        this.vertices4D.push(new Vec4(x, y, z, w));
                    }
                }
            }
        }
        
        // Generate 32 edges (vertices differing in exactly one coordinate)
        this.edges = [];
        for (let i = 0; i < 16; i++) {
            for (let j = i + 1; j < 16; j++) {
                const v1 = this.vertices4D[i];
                const v2 = this.vertices4D[j];
                let diff = 0;
                if (v1.x !== v2.x) diff++;
                if (v1.y !== v2.y) diff++;
                if (v1.z !== v2.z) diff++;
                if (v1.w !== v2.w) diff++;
                if (diff === 1) {
                    this.edges.push([i, j]);
                }
            }
        }
        
        // Create Three.js objects for edges
        const edgeMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.edges.forEach(([i, j]) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(6);
            const colors = new Float32Array(6);
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            
            const line = new THREE.Line(geometry, edgeMaterial);
            this.edgeObjects.push(line);
            this.scene.add(line);
        });
        
        // Create vertex spheres
        const sphereGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        
        this.vertices4D.forEach((v, i) => {
            const material = new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending
            });
            
            const sphere = new THREE.Mesh(sphereGeometry, material);
            this.vertexObjects.push(sphere);
            this.scene.add(sphere);
            
            // Add glow
            const glowGeometry = new THREE.SphereGeometry(0.2, 8, 8);
            const glowMaterial = new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            sphere.add(glow);
        });
    }

    createParticleField() {
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            // Random positions in a large sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 10 + Math.random() * 20;
            
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            
            // Purple to cyan colors
            const color = new THREE.Color().setHSL(0.75 + Math.random() * 0.15, 0.8, 0.6);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
    }

    updateTesseract() {
        // Apply 4D rotations and project to 3D
        const projected = this.vertices4D.map(v => {
            let rotated = v
                .rotateXW(this.rotationXW)
                .rotateYW(this.rotationYW)
                .rotateZW(this.rotationZW)
                .rotateXY(this.time * 0.2);
            
            return rotated.projectTo3D(3);
        });
        
        // Update edge positions and colors
        this.edges.forEach(([i, j], edgeIndex) => {
            const p1 = projected[i];
            const p2 = projected[j];
            
            const line = this.edgeObjects[edgeIndex];
            const positions = line.geometry.attributes.position.array;
            const colors = line.geometry.attributes.color.array;
            
            positions[0] = p1.x;
            positions[1] = p1.y;
            positions[2] = p1.z;
            positions[3] = p2.x;
            positions[4] = p2.y;
            positions[5] = p2.z;
            
            // Color based on W coordinate (4th dimension)
            const avgW = (p1.w + p2.w) / 2;
            const hue = 0.75 + avgW * 0.1; // Purple to fuchsia
            const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
            
            colors[0] = color.r;
            colors[1] = color.g;
            colors[2] = color.b;
            colors[3] = color.r;
            colors[4] = color.g;
            colors[5] = color.b;
            
            line.geometry.attributes.position.needsUpdate = true;
            line.geometry.attributes.color.needsUpdate = true;
        });
        
        // Update vertex positions and colors
        projected.forEach((p, i) => {
            const sphere = this.vertexObjects[i];
            sphere.position.set(p.x, p.y, p.z);
            
            // Size based on W coordinate (closer in 4D = larger)
            const scale = 0.5 + p.scale * 0.5;
            sphere.scale.setScalar(scale);
            
            // Color based on W
            const hue = 0.75 + p.w * 0.1;
            const color = new THREE.Color().setHSL(hue, 0.8, 0.7);
            sphere.material.color = color;
            
            // Glow color
            if (sphere.children[0]) {
                sphere.children[0].material.color = color;
            }
        });
    }

    setRotation(axis, value) {
        const radians = value * Math.PI / 180;
        if (axis === 'xw') this.rotationXW = radians;
        if (axis === 'yw') this.rotationYW = radians;
        if (axis === 'zw') this.rotationZW = radians;
    }

    toggleAutoRotate() {
        this.autoRotate = !this.autoRotate;
        return this.autoRotate;
    }

    resetView() {
        this.rotationXW = 0;
        this.rotationYW = 0;
        this.rotationZW = 0;
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

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.time += 0.016;
        
        if (this.autoRotate) {
            this.rotationXW = this.time * 0.5;
            this.rotationYW = this.time * 0.3;
            
            // Update sliders
            const xwSlider = document.getElementById('xw-rotation');
            const ywSlider = document.getElementById('yw-rotation');
            if (xwSlider) xwSlider.value = (this.rotationXW * 180 / Math.PI) % 360 - 180;
            if (ywSlider) ywSlider.value = (this.rotationYW * 180 / Math.PI) % 360 - 180;
        }
        
        // Mouse influence on camera
        this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.02;
        this.camera.position.y += (this.mouse.y * 2 - this.camera.position.y) * 0.02;
        this.camera.lookAt(0, 0, 0);
        
        // Rotate particle field
        if (this.particleSystem) {
            this.particleSystem.rotation.y += 0.001;
            this.particleSystem.rotation.x = Math.sin(this.time * 0.2) * 0.1;
        }
        
        this.updateTesseract();
        this.renderer.render(this.scene, this.camera);
    }
}

// 2D Canvas for mini tesseract in hero
class HyperBackground {
    constructor() {
        this.canvas = document.getElementById('hyper-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.points = [];
        
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
        this.points = [];
        for (let i = 0; i < 30; i++) {
            this.points.push(new Vec4(
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
            ));
        }
    }

    update() {
        this.time += 0.005;
    }

    draw() {
        // Just clear - Three.js handles main rendering
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Mini Tesseract for hero icon
class MiniTesseract {
    constructor() {
        this.canvas = document.getElementById('mini-tesseract');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.vertices = [];
        this.edges = [];
        this.time = 0;
        
        this.resize();
        this.generateTesseract();
        this.animate();
    }

    resize() {
        this.canvas.width = 100;
        this.canvas.height = 100;
    }

    generateTesseract() {
        this.vertices = [];
        for (let x of [-1, 1]) {
            for (let y of [-1, 1]) {
                for (let z of [-1, 1]) {
                    for (let w of [-1, 1]) {
                        this.vertices.push(new Vec4(x, y, z, w));
                    }
                }
            }
        }
        
        this.edges = [];
        for (let i = 0; i < 16; i++) {
            for (let j = i + 1; j < 16; j++) {
                const v1 = this.vertices[i];
                const v2 = this.vertices[j];
                let diff = 0;
                if (v1.x !== v2.x) diff++;
                if (v1.y !== v2.y) diff++;
                if (v1.z !== v2.z) diff++;
                if (v1.w !== v2.w) diff++;
                if (diff === 1) {
                    this.edges.push([i, j]);
                }
            }
        }
    }

    draw() {
        this.time += 0.02;
        
        this.ctx.fillStyle = 'rgba(10, 5, 16, 0.3)';
        this.ctx.fillRect(0, 0, 100, 100);
        
        const centerX = 50;
        const centerY = 50;
        const scale = 18;
        
        // Project vertices
        const projected = this.vertices.map(v => {
            let rotated = v
                .rotateXW(this.time * 0.5)
                .rotateYW(this.time * 0.3)
                .rotateXY(this.time * 0.2);
            
            const proj3d = rotated.projectTo3D(3);
            const perspective = 3 / (3 - proj3d.z * 0.3);
            
            return {
                x: centerX + proj3d.x * scale * perspective,
                y: centerY + proj3d.y * scale * perspective,
                w: rotated.w
            };
        });
        
        // Draw edges
        this.edges.forEach(([i, j]) => {
            const p1 = projected[i];
            const p2 = projected[j];
            const avgW = (p1.w + p2.w) / 2;
            const hue = 280 + avgW * 30;
            
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.6)`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });
        
        // Draw vertices
        projected.forEach(p => {
            const hue = 280 + p.w * 30;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${hue}, 80%, 70%, 0.8)`;
            this.ctx.fill();
        });
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Interactive Tesseract Viewer (2D canvas for comparison)
class TesseractViewer2D {
    constructor() {
        this.canvas = document.getElementById('tesseract-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.vertices = [];
        this.edges = [];
        
        this.rotationXW = 0;
        this.rotationYW = 0;
        this.rotationZW = 0;
        this.autoRotate = false;
        this.time = 0;
        
        this.resize();
        this.generateTesseract();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.width * 10 / 16;
    }

    generateTesseract() {
        this.vertices = [];
        for (let x of [-1, 1]) {
            for (let y of [-1, 1]) {
                for (let z of [-1, 1]) {
                    for (let w of [-1, 1]) {
                        this.vertices.push(new Vec4(x, y, z, w));
                    }
                }
            }
        }
        
        this.edges = [];
        for (let i = 0; i < 16; i++) {
            for (let j = i + 1; j < 16; j++) {
                const v1 = this.vertices[i];
                const v2 = this.vertices[j];
                let diff = 0;
                if (v1.x !== v2.x) diff++;
                if (v1.y !== v2.y) diff++;
                if (v1.z !== v2.z) diff++;
                if (v1.w !== v2.w) diff++;
                if (diff === 1) {
                    this.edges.push([i, j]);
                }
            }
        }
    }

    setRotation(axis, value) {
        const radians = value * Math.PI / 180;
        if (axis === 'xw') this.rotationXW = radians;
        if (axis === 'yw') this.rotationYW = radians;
        if (axis === 'zw') this.rotationZW = radians;
    }

    toggleAutoRotate() {
        this.autoRotate = !this.autoRotate;
        return this.autoRotate;
    }

    resetView() {
        this.rotationXW = 0;
        this.rotationYW = 0;
        this.rotationZW = 0;
        document.getElementById('xw-rotation').value = 0;
        document.getElementById('yw-rotation').value = 0;
        document.getElementById('zw-rotation').value = 0;
    }

    draw() {
        this.time += 0.016;
        
        if (this.autoRotate) {
            this.rotationXW = this.time * 0.5;
            this.rotationYW = this.time * 0.3;
        }

        this.ctx.fillStyle = 'rgba(21, 10, 32, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const scale = Math.min(this.canvas.width, this.canvas.height) * 0.2;

        // Project all vertices
        const projected = this.vertices.map(v => {
            let rotated = v
                .rotateXW(this.rotationXW)
                .rotateYW(this.rotationYW)
                .rotateZW(this.rotationZW)
                .rotateXY(this.time * 0.2);
            
            const proj3d = rotated.projectTo3D(3);
            const perspective = 3 / (3 - proj3d.z * 0.5);
            
            return {
                x: centerX + proj3d.x * scale * perspective,
                y: centerY + proj3d.y * scale * perspective,
                depth: proj3d.z,
                w: rotated.w,
                scale: proj3d.scale * perspective
            };
        });

        // Draw edges
        this.edges.forEach(([i, j]) => {
            const p1 = projected[i];
            const p2 = projected[j];
            const avgDepth = (p1.depth + p2.depth) / 2;
            const avgW = (p1.w + p2.w) / 2;
            const alpha = 0.3 + avgDepth * 0.1;
            const hue = 280 + avgW * 30;
            
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
            this.ctx.lineWidth = 1 + (avgDepth + 1) * 0.5;
            this.ctx.stroke();
        });

        // Draw vertices
        projected.forEach(p => {
            const size = 2 + p.scale * 2;
            const alpha = 0.5 + p.depth * 0.2;
            const hue = 280 + p.w * 30;
            
            // Glow
            const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
            glow.addColorStop(0, `hsla(${hue}, 80%, 60%, ${alpha * 0.5})`);
            glow.addColorStop(1, 'transparent');
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
            this.ctx.fillStyle = glow;
            this.ctx.fill();
            
            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${alpha})`;
            this.ctx.fill();
        });
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Main App
class HyperdimensionalApp {
    constructor() {
        this.tesseract3D = new Tesseract3D();
        this.bg = new HyperBackground();
        this.miniTesseract = new MiniTesseract();
        this.viewer2D = new TesseractViewer2D();
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('xw-rotation')?.addEventListener('input', (e) => {
            if (this.tesseract3D) this.tesseract3D.setRotation('xw', e.target.value);
            if (this.viewer2D) this.viewer2D.setRotation('xw', e.target.value);
        });
        document.getElementById('yw-rotation')?.addEventListener('input', (e) => {
            if (this.tesseract3D) this.tesseract3D.setRotation('yw', e.target.value);
            if (this.viewer2D) this.viewer2D.setRotation('yw', e.target.value);
        });
        document.getElementById('zw-rotation')?.addEventListener('input', (e) => {
            if (this.tesseract3D) this.tesseract3D.setRotation('zw', e.target.value);
            if (this.viewer2D) this.viewer2D.setRotation('zw', e.target.value);
        });
        
        document.getElementById('auto-rotate')?.addEventListener('click', (e) => {
            let active = false;
            if (this.tesseract3D) active = this.tesseract3D.toggleAutoRotate();
            if (this.viewer2D) this.viewer2D.autoRotate = active;
            e.target.textContent = active ? '⏸ Stop Rotation' : '▶ Auto Rotate';
        });
        
        document.getElementById('reset-view')?.addEventListener('click', () => {
            if (this.tesseract3D) this.tesseract3D.resetView();
            if (this.viewer2D) this.viewer2D.resetView();
            document.getElementById('xw-rotation').value = 0;
            document.getElementById('yw-rotation').value = 0;
            document.getElementById('zw-rotation').value = 0;
        });

        document.querySelectorAll('.object-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.object-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HyperdimensionalApp();
});
