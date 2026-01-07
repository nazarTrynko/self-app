/**
 * Template Engine
 * Renders carousel templates and manages slide transitions
 */

class TemplateEngine {
    constructor(container) {
        this.container = container;
        this.currentTemplate = null;
        this.currentSlideIndex = 0;
        this.slides = [];
    }

    loadTemplate(template) {
        this.currentTemplate = template;
        this.currentSlideIndex = 0;
        this.slides = template.slides || [];
        this.render();
    }

    render() {
        if (!this.currentTemplate) return;

        this.container.innerHTML = '';
        
        this.slides.forEach((slideData, index) => {
            const slide = this.createSlide(slideData, index);
            this.container.appendChild(slide);
        });

        this.showSlide(0);
    }

    createSlide(slideData, index) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.dataset.index = index;

        // Set background
        this.applyBackground(slide, slideData.background);

        // Render elements
        if (slideData.elements) {
            slideData.elements.forEach(elementData => {
                const element = this.createElement(elementData);
                if (element) slide.appendChild(element);
            });
        }

        return slide;
    }

    applyBackground(slide, background) {
        if (!background) return;

        switch (background.type) {
            case 'gradient':
                const colors = background.colors || ['#08080c', '#1a1a2e'];
                slide.style.background = `linear-gradient(135deg, ${colors.join(', ')})`;
                break;
            case 'solid':
                slide.style.background = background.color || '#08080c';
                break;
            case 'image':
                slide.style.backgroundImage = `url(${background.url})`;
                slide.style.backgroundSize = 'cover';
                slide.style.backgroundPosition = 'center';
                break;
        }
    }

    createElement(elementData) {
        const element = document.createElement('div');
        element.className = 'slide-element';

        // Position
        if (elementData.position) {
            element.style.position = 'absolute';
            if (elementData.position.x) {
                element.style.left = elementData.position.x;
                element.style.transform = elementData.position.x.includes('%') 
                    ? 'translateX(-50%)' 
                    : 'none';
            }
            if (elementData.position.y) {
                element.style.top = elementData.position.y;
                if (elementData.position.y.includes('%')) {
                    element.style.transform = element.style.transform 
                        ? element.style.transform + ' translateY(-50%)'
                        : 'translateY(-50%)';
                }
            }
            if (elementData.position.x && elementData.position.y && 
                elementData.position.x.includes('%') && elementData.position.y.includes('%')) {
                element.style.transform = 'translate(-50%, -50%)';
            }
        }

        switch (elementData.type) {
            case 'text':
                element.className = 'slide-element slide-text';
                if (elementData.style?.fontFamily === 'Fraunces') {
                    element.classList.add('heading');
                }
                if (elementData.style?.fontFamily === 'JetBrains Mono') {
                    element.classList.add('code');
                }
                element.textContent = elementData.content;
                this.applyStyles(element, elementData.style);
                break;

            case 'shape':
                return this.createShape(elementData);

            case 'icon':
                element.className = 'slide-element slide-icon';
                element.innerHTML = elementData.content || '⭐';
                this.applyStyles(element, elementData.style);
                break;

            default:
                return null;
        }

        return element;
    }

    createShape(elementData) {
        const shape = document.createElement('div');
        shape.className = 'slide-element slide-shape';

        const size = elementData.size || 100;
        const color = elementData.color || '#8b5cf6';
        const opacity = elementData.opacity !== undefined ? elementData.opacity : 0.2;

        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.backgroundColor = color;
        shape.style.opacity = opacity;

        if (elementData.position) {
            shape.style.position = 'absolute';
            if (elementData.position.x) {
                shape.style.left = elementData.position.x;
                if (elementData.position.x.includes('%')) {
                    shape.style.transform = 'translateX(-50%)';
                }
            }
            if (elementData.position.y) {
                shape.style.top = elementData.position.y;
                if (elementData.position.y.includes('%')) {
                    shape.style.transform = shape.style.transform 
                        ? shape.style.transform + ' translateY(-50%)'
                        : 'translateY(-50%)';
                }
            }
            if (elementData.position.x && elementData.position.y && 
                elementData.position.x.includes('%') && elementData.position.y.includes('%')) {
                shape.style.transform = 'translate(-50%, -50%)';
            }
        }

        switch (elementData.shape) {
            case 'circle':
                shape.style.borderRadius = '50%';
                break;
            case 'square':
                shape.style.borderRadius = '0';
                if (elementData.rotation) {
                    shape.style.transform = (shape.style.transform || '') + ` rotate(${elementData.rotation}deg)`;
                }
                break;
            case 'triangle':
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size/2}px solid transparent`;
                shape.style.borderRight = `${size/2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid ${color}`;
                shape.style.backgroundColor = 'transparent';
                if (elementData.rotation) {
                    shape.style.transform = `rotate(${elementData.rotation}deg)`;
                }
                break;
            case 'line':
                shape.style.width = elementData.width ? `${elementData.width}px` : '2px';
                shape.style.height = elementData.height || '100%';
                shape.style.backgroundColor = color;
                break;
        }

        // Animation
        if (elementData.animation === 'pulse') {
            shape.style.animation = 'pulse 2s ease-in-out infinite';
        }

        return shape;
    }

    applyStyles(element, styles) {
        if (!styles) return;

        Object.keys(styles).forEach(prop => {
            const value = styles[prop];
            switch (prop) {
                case 'fontSize':
                    element.style.fontSize = value;
                    break;
                case 'fontWeight':
                    element.style.fontWeight = value;
                    break;
                case 'fontFamily':
                    element.style.fontFamily = value;
                    break;
                case 'color':
                    element.style.color = value;
                    break;
                case 'textAlign':
                    element.style.textAlign = value;
                    break;
                case 'lineHeight':
                    element.style.lineHeight = value;
                    break;
                case 'textShadow':
                    element.style.textShadow = value;
                    break;
                default:
                    element.style[prop] = value;
            }
        });
    }

    showSlide(index) {
        if (index < 0 || index >= this.slides.length) return;

        const slides = this.container.querySelectorAll('.carousel-slide');
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        this.currentSlideIndex = index;
        this.updateNavigation();
    }

    nextSlide() {
        if (this.currentSlideIndex < this.slides.length - 1) {
            this.showSlide(this.currentSlideIndex + 1);
        }
    }

    prevSlide() {
        if (this.currentSlideIndex > 0) {
            this.showSlide(this.currentSlideIndex - 1);
        }
    }

    updateNavigation() {
        const currentEl = document.getElementById('currentSlide');
        const totalEl = document.getElementById('totalSlides');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');

        if (currentEl) currentEl.textContent = this.currentSlideIndex + 1;
        if (totalEl) totalEl.textContent = this.slides.length;
        if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlideIndex === this.slides.length - 1;
    }

    getCurrentSlide() {
        return this.slides[this.currentSlideIndex];
    }

    getTotalSlides() {
        return this.slides.length;
    }
}

// Add pulse animation to CSS if not already present
if (!document.getElementById('carousel-animations')) {
    const style = document.createElement('style');
    style.id = 'carousel-animations';
    style.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

