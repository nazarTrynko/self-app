/**
 * Base Canvas Background Class
 * Foundation for all generative background effects
 */

class BaseCanvasBackground {
    constructor(canvas, options = {}) {
        this.canvas = typeof canvas === 'string' 
            ? document.querySelector(canvas) 
            : canvas;
        
        if (!this.canvas) {
            throw new Error('Canvas element not found');
        }

        this.ctx = this.canvas.getContext('2d');
        
        // Configuration
        this.options = {
            autoStart: true,
            fps: 60,
            responsive: true,
            fadeOnSlideChange: true,
            ...options
        };

        // State
        this.isRunning = false;
        this.animationFrame = null;
        this.lastTime = 0;
        this.deltaTime = 0;
        this.time = 0;
        this.currentSlide = 0;
        this.totalSlides = 1;

        // Performance
        this.frameInterval = 1000 / this.options.fps;

        // Initialize
        this._init();
    }

    /**
     * Initialize canvas
     */
    _init() {
        this._resize();
        
        if (this.options.responsive) {
            window.addEventListener('resize', () => this._resize());
        }

        // Custom initialization
        this.init();

        if (this.options.autoStart) {
            this.start();
        }
    }

    /**
     * Resize canvas to fit container
     */
    _resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.width = rect.width;
        this.height = rect.height;
        
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        
        this.ctx.scale(dpr, dpr);

        // Custom resize handling
        this.onResize(this.width, this.height);
    }

    /**
     * Main animation loop
     */
    _loop(currentTime) {
        if (!this.isRunning) return;

        this.animationFrame = requestAnimationFrame((t) => this._loop(t));

        // Calculate delta time
        this.deltaTime = currentTime - this.lastTime;

        // Frame rate limiting
        if (this.deltaTime < this.frameInterval) return;

        this.lastTime = currentTime - (this.deltaTime % this.frameInterval);
        this.time += this.deltaTime / 1000;

        // Clear canvas
        this.clear();

        // Update and draw
        this.update(this.deltaTime / 1000, this.time);
        this.draw(this.ctx);
    }

    /**
     * Clear canvas
     */
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /**
     * Start animation
     */
    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.lastTime = performance.now();
        this._loop(this.lastTime);
    }

    /**
     * Stop animation
     */
    stop() {
        this.isRunning = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    /**
     * Called when slide changes
     */
    onSlideChange(slideIndex, totalSlides) {
        this.currentSlide = slideIndex;
        this.totalSlides = totalSlides;
        
        // Override in subclass for custom behavior
        this.handleSlideChange(slideIndex, totalSlides);
    }

    /**
     * Destroy instance
     */
    destroy() {
        this.stop();
        window.removeEventListener('resize', () => this._resize());
    }

    // === Override these in subclasses ===

    /**
     * Custom initialization
     */
    init() {
        // Override in subclass
    }

    /**
     * Handle resize
     */
    onResize(width, height) {
        // Override in subclass
    }

    /**
     * Update state
     */
    update(deltaTime, totalTime) {
        // Override in subclass
    }

    /**
     * Draw to canvas
     */
    draw(ctx) {
        // Override in subclass
    }

    /**
     * Handle slide change
     */
    handleSlideChange(slideIndex, totalSlides) {
        // Override in subclass
    }
}

// === Utility Functions ===

/**
 * Linear interpolation
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Map value from one range to another
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Random float between min and max
 */
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Random integer between min and max (inclusive)
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Easing functions
 */
const Easing = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
    easeOutSine: t => Math.sin(t * Math.PI / 2),
    easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2
};

/**
 * Simple 2D vector class
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    sub(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    mult(s) {
        return new Vector2(this.x * s, this.y * s);
    }

    div(s) {
        return new Vector2(this.x / s, this.y / s);
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const m = this.mag();
        if (m > 0) {
            return this.div(m);
        }
        return new Vector2();
    }

    limit(max) {
        if (this.mag() > max) {
            return this.normalize().mult(max);
        }
        return this;
    }

    dist(v) {
        return this.sub(v).mag();
    }

    static random() {
        return new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
    }
}

/**
 * Particle class for particle systems
 */
class Particle {
    constructor(x, y, options = {}) {
        this.position = new Vector2(x, y);
        this.velocity = options.velocity || new Vector2();
        this.acceleration = options.acceleration || new Vector2();
        this.size = options.size || 5;
        this.color = options.color || 'rgba(232, 114, 92, 0.5)';
        this.life = options.life || 1;
        this.maxLife = this.life;
        this.decay = options.decay || 0.01;
        this.mass = options.mass || 1;
    }

    applyForce(force) {
        const f = force.div(this.mass);
        this.acceleration = this.acceleration.add(f);
    }

    update(deltaTime) {
        this.velocity = this.velocity.add(this.acceleration);
        this.position = this.position.add(this.velocity.mult(deltaTime * 60));
        this.acceleration = new Vector2();
        this.life -= this.decay * deltaTime;
    }

    isDead() {
        return this.life <= 0;
    }

    draw(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fill();
    }
}

/**
 * Simplex Noise for organic movement
 * Simplified implementation
 */
class SimplexNoise {
    constructor(seed = Math.random()) {
        this.p = new Uint8Array(256);
        this.perm = new Uint8Array(512);
        
        for (let i = 0; i < 256; i++) {
            this.p[i] = i;
        }
        
        // Shuffle using seed
        let n = seed * 256;
        for (let i = 255; i > 0; i--) {
            n = (n * 16807) % 2147483647;
            const j = n % (i + 1);
            [this.p[i], this.p[j]] = [this.p[j], this.p[i]];
        }
        
        for (let i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
        }
    }

    noise2D(x, y) {
        const F2 = 0.5 * (Math.sqrt(3) - 1);
        const G2 = (3 - Math.sqrt(3)) / 6;
        
        const s = (x + y) * F2;
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
        
        const t = (i + j) * G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = x - X0;
        const y0 = y - Y0;
        
        let i1, j1;
        if (x0 > y0) {
            i1 = 1; j1 = 0;
        } else {
            i1 = 0; j1 = 1;
        }
        
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;
        
        const ii = i & 255;
        const jj = j & 255;
        
        let n0 = 0, n1 = 0, n2 = 0;
        
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            t0 *= t0;
            n0 = t0 * t0 * this._grad(this.perm[ii + this.perm[jj]], x0, y0);
        }
        
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            t1 *= t1;
            n1 = t1 * t1 * this._grad(this.perm[ii + i1 + this.perm[jj + j1]], x1, y1);
        }
        
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            t2 *= t2;
            n2 = t2 * t2 * this._grad(this.perm[ii + 1 + this.perm[jj + 1]], x2, y2);
        }
        
        return 70 * (n0 + n1 + n2);
    }

    _grad(hash, x, y) {
        const h = hash & 7;
        const u = h < 4 ? x : y;
        const v = h < 4 ? y : x;
        return ((h & 1) ? -u : u) + ((h & 2) ? -2 * v : 2 * v);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        BaseCanvasBackground, 
        Vector2, 
        Particle, 
        SimplexNoise,
        Easing,
        lerp, 
        mapRange, 
        clamp, 
        randomRange, 
        randomInt 
    };
}

