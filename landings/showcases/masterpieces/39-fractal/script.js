/**
 * THE FRACTAL - Infinite Depth Explorer
 * Raymarched 3D Mandelbulb fractal using Three.js and custom shaders
 */

class FractalExplorer {
    constructor() {
        this.canvas = document.getElementById('fractal-canvas');
        this.zoom = 1.0;
        this.targetZoom = 1.0;
        this.power = 8;
        this.iterations = 64;
        this.colorShift = 0.5;
        this.autoRotate = true;
        this.time = 0;
        this.rotationX = 0;
        this.rotationY = 0;
        this.isDragging = false;
        this.lastMouse = { x: 0, y: 0 };

        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        
        // Orthographic camera for fullscreen quad
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas,
            antialias: false,
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        // Create fullscreen quad with fractal shader
        this.createFractalMesh();

        window.addEventListener('resize', () => this.onResize());
    }

    createFractalMesh() {
        const geometry = new THREE.PlaneGeometry(2, 2);
        
        // Mandelbulb raymarching shader
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            precision highp float;
            
            uniform vec2 resolution;
            uniform float time;
            uniform float power;
            uniform float zoom;
            uniform float iterations;
            uniform float colorShift;
            uniform float rotationX;
            uniform float rotationY;
            
            varying vec2 vUv;
            
            const int MAX_STEPS = 100;
            const float MAX_DIST = 100.0;
            const float EPSILON = 0.001;
            
            // Rotation matrices
            mat3 rotateX(float angle) {
                float c = cos(angle);
                float s = sin(angle);
                return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
            }
            
            mat3 rotateY(float angle) {
                float c = cos(angle);
                float s = sin(angle);
                return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
            }
            
            // Mandelbulb distance estimator
            float mandelbulbDE(vec3 pos) {
                vec3 z = pos;
                float dr = 1.0;
                float r = 0.0;
                float n = power;
                
                for (int i = 0; i < 15; i++) {
                    r = length(z);
                    if (r > 2.0) break;
                    
                    // Convert to spherical coordinates
                    float theta = acos(z.z / r);
                    float phi = atan(z.y, z.x);
                    dr = pow(r, n - 1.0) * n * dr + 1.0;
                    
                    // Scale and rotate
                    float zr = pow(r, n);
                    theta = theta * n;
                    phi = phi * n;
                    
                    // Convert back to Cartesian
                    z = zr * vec3(
                        sin(theta) * cos(phi),
                        sin(phi) * sin(theta),
                        cos(theta)
                    );
                    z += pos;
                }
                
                return 0.5 * log(r) * r / dr;
            }
            
            // Raymarching
            float raymarch(vec3 ro, vec3 rd) {
                float t = 0.0;
                
                for (int i = 0; i < MAX_STEPS; i++) {
                    vec3 p = ro + rd * t;
                    float d = mandelbulbDE(p);
                    
                    if (d < EPSILON) return t;
                    if (t > MAX_DIST) break;
                    
                    t += d * 0.5;
                }
                
                return -1.0;
            }
            
            // Normal calculation
            vec3 calcNormal(vec3 p) {
                vec2 e = vec2(EPSILON, 0.0);
                return normalize(vec3(
                    mandelbulbDE(p + e.xyy) - mandelbulbDE(p - e.xyy),
                    mandelbulbDE(p + e.yxy) - mandelbulbDE(p - e.yxy),
                    mandelbulbDE(p + e.yyx) - mandelbulbDE(p - e.yyx)
                ));
            }
            
            // Color palette
            vec3 palette(float t) {
                vec3 a = vec3(0.5, 0.5, 0.5);
                vec3 b = vec3(0.5, 0.5, 0.5);
                vec3 c = vec3(1.0, 1.0, 1.0);
                vec3 d = vec3(colorShift, colorShift + 0.33, colorShift + 0.67);
                return a + b * cos(6.28318 * (c * t + d));
            }
            
            void main() {
                vec2 uv = (gl_FragCoord.xy - 0.5 * resolution) / resolution.y;
                
                // Camera setup
                float camDist = 3.0 / zoom;
                vec3 ro = vec3(0.0, 0.0, camDist);
                vec3 rd = normalize(vec3(uv, -1.5));
                
                // Apply rotation
                mat3 rotMat = rotateY(rotationY) * rotateX(rotationX);
                ro = rotMat * ro;
                rd = rotMat * rd;
                
                // Raymarch
                float t = raymarch(ro, rd);
                
                vec3 col = vec3(0.02, 0.0, 0.04); // Background
                
                if (t > 0.0) {
                    vec3 p = ro + rd * t;
                    vec3 n = calcNormal(p);
                    
                    // Lighting
                    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
                    float diff = max(dot(n, lightDir), 0.0);
                    float spec = pow(max(dot(reflect(-lightDir, n), -rd), 0.0), 32.0);
                    float ao = 1.0 - float(t) / MAX_DIST;
                    
                    // Color based on position and normal
                    float colorVal = length(p) * 0.3 + dot(n, vec3(0.5, 0.8, 0.3)) * 0.5;
                    col = palette(colorVal + time * 0.05);
                    
                    // Apply lighting
                    col = col * (0.3 + 0.7 * diff) + vec3(1.0) * spec * 0.3;
                    col *= ao;
                    
                    // Glow at edges
                    float fresnel = pow(1.0 - abs(dot(n, rd)), 3.0);
                    col += palette(colorVal + 0.5) * fresnel * 0.5;
                }
                
                // Vignette
                float vignette = 1.0 - length(uv) * 0.5;
                col *= vignette;
                
                // Gamma correction
                col = pow(col, vec3(0.8));
                
                gl_FragColor = vec4(col, 1.0);
            }
        `;

        this.fractalMaterial = new THREE.ShaderMaterial({
            uniforms: {
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                time: { value: 0 },
                power: { value: this.power },
                zoom: { value: this.zoom },
                iterations: { value: this.iterations },
                colorShift: { value: this.colorShift },
                rotationX: { value: this.rotationX },
                rotationY: { value: this.rotationY }
            },
            vertexShader,
            fragmentShader
        });

        const mesh = new THREE.Mesh(geometry, this.fractalMaterial);
        this.scene.add(mesh);
    }

    bindEvents() {
        // Zoom controls
        document.getElementById('zoomIn').addEventListener('click', () => {
            this.targetZoom *= 1.5;
            this.updateStats();
        });

        document.getElementById('zoomOut').addEventListener('click', () => {
            this.targetZoom /= 1.5;
            this.updateStats();
        });

        document.getElementById('toggleRotate').addEventListener('click', (e) => {
            this.autoRotate = !this.autoRotate;
            e.target.style.opacity = this.autoRotate ? 1 : 0.5;
        });

        document.getElementById('resetView').addEventListener('click', () => {
            this.targetZoom = 1.0;
            this.rotationX = 0;
            this.rotationY = 0;
            this.updateStats();
        });

        // Parameter sliders
        document.getElementById('powerSlider').addEventListener('input', (e) => {
            this.power = parseFloat(e.target.value);
            this.fractalMaterial.uniforms.power.value = this.power;
            document.getElementById('powerValue').textContent = this.power.toFixed(1);
        });

        document.getElementById('iterSlider').addEventListener('input', (e) => {
            this.iterations = parseInt(e.target.value);
            this.fractalMaterial.uniforms.iterations.value = this.iterations;
            document.getElementById('iterValue').textContent = this.iterations;
        });

        document.getElementById('colorSlider').addEventListener('input', (e) => {
            this.colorShift = parseInt(e.target.value) / 100;
            this.fractalMaterial.uniforms.colorShift.value = this.colorShift;
        });

        // Mouse/touch interaction
        this.canvas.addEventListener('mousedown', (e) => this.onPointerDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onPointerMove(e));
        this.canvas.addEventListener('mouseup', () => this.onPointerUp());
        this.canvas.addEventListener('mouseleave', () => this.onPointerUp());

        this.canvas.addEventListener('touchstart', (e) => this.onPointerDown(e.touches[0]));
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.onPointerMove(e.touches[0]);
        });
        this.canvas.addEventListener('touchend', () => this.onPointerUp());

        // Scroll to zoom
        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                this.targetZoom *= 1.1;
            } else {
                this.targetZoom /= 1.1;
            }
            this.targetZoom = Math.max(0.1, Math.min(100, this.targetZoom));
            this.updateStats();
        });
    }

    onPointerDown(e) {
        this.isDragging = true;
        this.lastMouse.x = e.clientX;
        this.lastMouse.y = e.clientY;
    }

    onPointerMove(e) {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.lastMouse.x;
        const deltaY = e.clientY - this.lastMouse.y;

        this.rotationY += deltaX * 0.005;
        this.rotationX += deltaY * 0.005;

        this.lastMouse.x = e.clientX;
        this.lastMouse.y = e.clientY;
    }

    onPointerUp() {
        this.isDragging = false;
    }

    updateStats() {
        document.getElementById('zoomLevel').textContent = this.targetZoom.toFixed(1) + '×';
    }

    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.fractalMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.time += 0.016;
        
        // Smooth zoom
        this.zoom += (this.targetZoom - this.zoom) * 0.05;
        
        // Auto rotation
        if (this.autoRotate && !this.isDragging) {
            this.rotationY += 0.003;
        }

        // Update uniforms
        this.fractalMaterial.uniforms.time.value = this.time;
        this.fractalMaterial.uniforms.zoom.value = this.zoom;
        this.fractalMaterial.uniforms.rotationX.value = this.rotationX;
        this.fractalMaterial.uniforms.rotationY.value = this.rotationY;

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new FractalExplorer();
});

