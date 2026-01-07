/**
 * Export Engine for Evolved Carousels
 * Enables exporting slides as images (PNG/JPG) or batch ZIP
 */

class ExportEngine {
    constructor(carousel, options = {}) {
        this.carousel = carousel;
        this.options = {
            format: 'png', // 'png' or 'jpeg'
            quality: 0.95, // For JPEG
            scale: 2, // Resolution multiplier
            includeBackground: true,
            ...options
        };
    }

    /**
     * Export current slide as image
     */
    async exportCurrentSlide() {
        const slide = this.carousel.slides[this.carousel.currentSlide];
        return this._captureSlide(slide, this.carousel.currentSlide);
    }

    /**
     * Export specific slide by index
     */
    async exportSlide(index) {
        const slide = this.carousel.slides[index];
        if (!slide) {
            throw new Error(`Slide ${index} not found`);
        }
        return this._captureSlide(slide, index);
    }

    /**
     * Export all slides as array of images
     */
    async exportAllSlides() {
        const images = [];
        for (let i = 0; i < this.carousel.totalSlides; i++) {
            const image = await this.exportSlide(i);
            images.push(image);
        }
        return images;
    }

    /**
     * Export all slides as ZIP file
     */
    async exportAsZip() {
        // This requires JSZip library
        if (typeof JSZip === 'undefined') {
            console.warn('JSZip not loaded. Loading dynamically...');
            await this._loadJSZip();
        }

        const zip = new JSZip();
        const folder = zip.folder('carousel-slides');

        for (let i = 0; i < this.carousel.totalSlides; i++) {
            const dataUrl = await this.exportSlide(i);
            const base64 = dataUrl.split(',')[1];
            const ext = this.options.format === 'jpeg' ? 'jpg' : 'png';
            folder.file(`slide-${String(i + 1).padStart(2, '0')}.${ext}`, base64, { base64: true });
        }

        const blob = await zip.generateAsync({ type: 'blob' });
        this._downloadBlob(blob, 'carousel-slides.zip');
        return blob;
    }

    /**
     * Capture a slide as image data URL
     */
    async _captureSlide(slideElement, index) {
        const { scale, format, quality, includeBackground } = this.options;

        // Get slide dimensions
        const rect = slideElement.getBoundingClientRect();
        const width = rect.width * scale;
        const height = rect.height * scale;

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Scale context
        ctx.scale(scale, scale);

        // Draw background
        if (includeBackground) {
            // Get background from CSS
            const styles = getComputedStyle(slideElement);
            const bgColor = styles.backgroundColor || '#F5F0E8';
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, rect.width, rect.height);

            // If there's a canvas background, draw it
            const bgCanvas = slideElement.closest('.carousel-container')?.querySelector('.carousel-canvas');
            if (bgCanvas) {
                ctx.drawImage(bgCanvas, 0, 0, rect.width, rect.height);
            }
        }

        // Use html2canvas if available for complex content
        if (typeof html2canvas !== 'undefined') {
            const capturedCanvas = await html2canvas(slideElement, {
                scale: scale,
                backgroundColor: null,
                logging: false,
                useCORS: true
            });
            return capturedCanvas.toDataURL(`image/${format}`, quality);
        }

        // Fallback: simple rendering
        // This won't capture all CSS styles perfectly
        console.warn('html2canvas not loaded. Using simplified capture.');
        
        // Draw slide content (basic)
        const content = slideElement.querySelector('.slide-content');
        if (content) {
            ctx.fillStyle = getComputedStyle(content).color || '#2D2A26';
            ctx.font = '24px Outfit';
            ctx.textAlign = 'center';
            
            const title = content.querySelector('h1, h2, .slide-title');
            if (title) {
                ctx.fillText(title.textContent, rect.width / 2, rect.height / 2);
            }
        }

        return canvas.toDataURL(`image/${format}`, quality);
    }

    /**
     * Download image to user's device
     */
    downloadImage(dataUrl, filename) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename || `slide.${this.options.format === 'jpeg' ? 'jpg' : 'png'}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * Download current slide
     */
    async downloadCurrentSlide() {
        const dataUrl = await this.exportCurrentSlide();
        const ext = this.options.format === 'jpeg' ? 'jpg' : 'png';
        this.downloadImage(dataUrl, `slide-${this.carousel.currentSlide + 1}.${ext}`);
    }

    /**
     * Download blob
     */
    _downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * Load JSZip dynamically
     */
    async _loadJSZip() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    /**
     * Load html2canvas dynamically
     */
    async loadHtml2Canvas() {
        if (typeof html2canvas !== 'undefined') return;
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ExportEngine };
}

