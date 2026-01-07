/**
 * Evolved Carousel Engine
 * State machine-based carousel with transition orchestration
 */

// Slide states
const SlideState = {
    IDLE: 'idle',
    ENTERING: 'entering',
    ACTIVE: 'active',
    EXITING: 'exiting'
};

// Transition types
const TransitionType = {
    FADE: 'fade',
    SLIDE: 'slide',
    MORPH: 'morph',
    DISSOLVE: 'dissolve'
};

/**
 * Carousel State Machine
 */
class CarouselStateMachine {
    constructor() {
        this.currentState = SlideState.IDLE;
        this.listeners = new Map();
        this.transitionPromise = null;
    }

    /**
     * Transition to a new state
     */
    async transition(newState) {
        const oldState = this.currentState;
        this.currentState = newState;
        this.emit('stateChange', { from: oldState, to: newState });
        return newState;
    }

    /**
     * Add event listener
     */
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
        return () => this.off(event, callback);
    }

    /**
     * Remove event listener
     */
    off(event, callback) {
        const callbacks = this.listeners.get(event);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index > -1) callbacks.splice(index, 1);
        }
    }

    /**
     * Emit event
     */
    emit(event, data) {
        const callbacks = this.listeners.get(event);
        if (callbacks) {
            callbacks.forEach(cb => cb(data));
        }
    }
}

/**
 * Main Carousel Engine
 */
class CarouselEngine {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' 
            ? document.querySelector(container) 
            : container;
        
        if (!this.container) {
            throw new Error('Carousel container not found');
        }

        // Configuration
        this.options = {
            autoPlay: false,
            autoPlayInterval: 5000,
            loop: true,
            transition: TransitionType.FADE,
            transitionDuration: 600,
            staggerDelay: 100,
            keyboard: true,
            touch: true,
            haptic: true,
            ...options
        };

        // State
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.slides = [];
        this.isTransitioning = false;
        this.autoPlayTimer = null;
        this.touchStartX = 0;
        this.touchStartY = 0;

        // State machine
        this.stateMachine = new CarouselStateMachine();

        // Canvas background reference
        this.canvasBackground = null;

        // Initialize
        this._init();
    }

    /**
     * Initialize carousel
     */
    _init() {
        this._parseSlides();
        this._createNavigation();
        this._bindEvents();
        this._showSlide(0, false);

        if (this.options.autoPlay) {
            this._startAutoPlay();
        }

        // Emit ready event
        this.stateMachine.emit('ready', { totalSlides: this.totalSlides });
    }

    /**
     * Parse slides from container
     */
    _parseSlides() {
        this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
        this.totalSlides = this.slides.length;

        // Add data attributes
        this.slides.forEach((slide, index) => {
            slide.dataset.index = index;
            slide.classList.add('slide-idle');
        });
    }

    /**
     * Create navigation elements
     */
    _createNavigation() {
        // Navigation container
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';

        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-nav-btn carousel-prev';
        prevBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
        </svg>`;
        prevBtn.addEventListener('click', () => this.prev());

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-nav-btn carousel-next';
        nextBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
        </svg>`;
        nextBtn.addEventListener('click', () => this.next());

        nav.appendChild(prevBtn);
        nav.appendChild(nextBtn);

        // Dots container
        const dots = document.createElement('div');
        dots.className = 'carousel-dots';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.dataset.index = i;
            dot.addEventListener('click', () => this.goTo(i));
            dots.appendChild(dot);
        }

        // Progress indicator
        const progress = document.createElement('div');
        progress.className = 'carousel-progress';
        progress.innerHTML = `
            <span class="carousel-current">1</span>
            <span class="carousel-separator">/</span>
            <span class="carousel-total">${this.totalSlides}</span>
        `;

        this.container.appendChild(nav);
        this.container.appendChild(dots);
        this.container.appendChild(progress);

        // Store references
        this.navButtons = { prev: prevBtn, next: nextBtn };
        this.dotsContainer = dots;
        this.progressContainer = progress;
    }

    /**
     * Bind event listeners
     */
    _bindEvents() {
        // Keyboard navigation
        if (this.options.keyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });
        }

        // Touch/swipe support
        if (this.options.touch) {
            this.container.addEventListener('touchstart', (e) => {
                this.touchStartX = e.touches[0].clientX;
                this.touchStartY = e.touches[0].clientY;
            }, { passive: true });

            this.container.addEventListener('touchend', (e) => {
                const deltaX = e.changedTouches[0].clientX - this.touchStartX;
                const deltaY = e.changedTouches[0].clientY - this.touchStartY;

                // Only trigger if horizontal swipe is dominant
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        this.prev();
                    } else {
                        this.next();
                    }
                }
            }, { passive: true });
        }

        // Visibility change - pause autoplay when hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this._stopAutoPlay();
            } else if (this.options.autoPlay) {
                this._startAutoPlay();
            }
        });
    }

    /**
     * Show slide with transition
     */
    async _showSlide(index, animate = true) {
        if (this.isTransitioning) return;
        if (index < 0 || index >= this.totalSlides) return;

        const oldIndex = this.currentSlide;
        const oldSlide = this.slides[oldIndex];
        const newSlide = this.slides[index];
        const direction = index > oldIndex ? 1 : -1;

        this.isTransitioning = true;

        // State machine transitions
        await this.stateMachine.transition(SlideState.EXITING);
        
        // Emit slide change event
        this.stateMachine.emit('slideChange', {
            from: oldIndex,
            to: index,
            direction
        });

        if (animate) {
            // Exit current slide
            oldSlide.classList.remove('slide-active');
            oldSlide.classList.add('slide-exiting');

            // Enter new slide
            newSlide.classList.add('slide-entering');

            // Trigger haptic feedback
            this._haptic();

            // Wait for exit transition
            await this._wait(this.options.transitionDuration / 2);

            await this.stateMachine.transition(SlideState.ENTERING);

            oldSlide.classList.remove('slide-exiting');
            oldSlide.classList.add('slide-idle');

            // Stagger element animations
            this._animateSlideElements(newSlide);

            // Wait for enter transition
            await this._wait(this.options.transitionDuration / 2);

            newSlide.classList.remove('slide-entering');
            newSlide.classList.add('slide-active');
        } else {
            // No animation - instant show
            this.slides.forEach(s => {
                s.classList.remove('slide-active', 'slide-entering', 'slide-exiting');
                s.classList.add('slide-idle');
            });
            newSlide.classList.remove('slide-idle');
            newSlide.classList.add('slide-active');
        }

        this.currentSlide = index;
        await this.stateMachine.transition(SlideState.ACTIVE);

        this._updateNavigation();
        this._updateDots();
        this._updateProgress();

        // Notify canvas background of slide change
        if (this.canvasBackground) {
            this.canvasBackground.onSlideChange(index, this.totalSlides);
        }

        this.isTransitioning = false;

        // Emit slide shown event
        this.stateMachine.emit('slideShown', { index });
    }

    /**
     * Animate slide elements with stagger
     */
    _animateSlideElements(slide) {
        const elements = slide.querySelectorAll('[data-animate]');
        elements.forEach((el, i) => {
            el.style.animationDelay = `${i * this.options.staggerDelay}ms`;
            el.classList.add('animate-in');
            
            // Remove animation class after completion
            el.addEventListener('animationend', () => {
                el.classList.remove('animate-in');
                el.style.animationDelay = '';
            }, { once: true });
        });
    }

    /**
     * Update navigation button states
     */
    _updateNavigation() {
        if (!this.options.loop) {
            this.navButtons.prev.disabled = this.currentSlide === 0;
            this.navButtons.next.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }

    /**
     * Update dots indicator
     */
    _updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
    }

    /**
     * Update progress indicator
     */
    _updateProgress() {
        const current = this.progressContainer.querySelector('.carousel-current');
        if (current) {
            current.textContent = this.currentSlide + 1;
        }
    }

    /**
     * Trigger haptic feedback
     */
    _haptic(intensity = 'light') {
        if (!this.options.haptic) return;
        
        if ('vibrate' in navigator) {
            const durations = { light: 10, medium: 25, heavy: 50 };
            navigator.vibrate(durations[intensity] || 10);
        }
    }

    /**
     * Wait helper
     */
    _wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Start auto play
     */
    _startAutoPlay() {
        this._stopAutoPlay();
        this.autoPlayTimer = setInterval(() => {
            this.next();
        }, this.options.autoPlayInterval);
    }

    /**
     * Stop auto play
     */
    _stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }

    // Public API

    /**
     * Go to next slide
     */
    next() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.totalSlides) {
            nextIndex = this.options.loop ? 0 : this.totalSlides - 1;
        }
        this._showSlide(nextIndex);
    }

    /**
     * Go to previous slide
     */
    prev() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.options.loop ? this.totalSlides - 1 : 0;
        }
        this._showSlide(prevIndex);
    }

    /**
     * Go to specific slide
     */
    goTo(index) {
        this._showSlide(index);
    }

    /**
     * Set canvas background
     */
    setCanvasBackground(canvasInstance) {
        this.canvasBackground = canvasInstance;
    }

    /**
     * Subscribe to events
     */
    on(event, callback) {
        return this.stateMachine.on(event, callback);
    }

    /**
     * Get current slide index
     */
    getCurrentSlide() {
        return this.currentSlide;
    }

    /**
     * Get total slides
     */
    getTotalSlides() {
        return this.totalSlides;
    }

    /**
     * Destroy carousel
     */
    destroy() {
        this._stopAutoPlay();
        // Remove added elements
        this.container.querySelector('.carousel-nav')?.remove();
        this.container.querySelector('.carousel-dots')?.remove();
        this.container.querySelector('.carousel-progress')?.remove();
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CarouselEngine, CarouselStateMachine, SlideState, TransitionType };
}

