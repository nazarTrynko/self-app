/**
 * Export Engine
 * Handles image export using html2canvas
 */

// Load html2canvas from CDN if not available
if (typeof html2canvas === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    document.head.appendChild(script);
}

class ExportEngine {
    constructor() {
        this.isExporting = false;
    }

    async export(type, format, dimensions, templateEngine) {
        if (this.isExporting) {
            console.warn('Export already in progress');
            return;
        }

        this.isExporting = true;
        const loadingText = document.getElementById('loadingText');
        
        try {
            const [width, height] = dimensions.split('x').map(Number);
            
            if (type === 'single') {
                await this.exportSingleSlide(templateEngine, format, width, height, loadingText);
            } else {
                await this.exportAllSlides(templateEngine, format, width, height, loadingText);
            }
        } catch (error) {
            console.error('Export error:', error);
            throw error;
        } finally {
            this.isExporting = false;
        }
    }

    async exportSingleSlide(templateEngine, format, width, height, loadingText) {
        if (loadingText) loadingText.textContent = 'Exporting slide...';

        const slide = templateEngine.container.querySelector('.carousel-slide.active');
        if (!slide) {
            throw new Error('No active slide found');
        }

        const canvas = await this.renderSlideToCanvas(slide, width, height);
        this.downloadCanvas(canvas, `carousel-slide-${templateEngine.currentSlideIndex + 1}.${format}`, format);
    }

    async exportAllSlides(templateEngine, format, width, height, loadingText) {
        const totalSlides = templateEngine.getTotalSlides();
        const images = [];

        for (let i = 0; i < totalSlides; i++) {
            if (loadingText) {
                loadingText.textContent = `Exporting slide ${i + 1} of ${totalSlides}...`;
            }

            // Show the slide
            templateEngine.showSlide(i);
            
            // Wait for transition
            await new Promise(resolve => setTimeout(resolve, 500));

            const slide = templateEngine.container.querySelector('.carousel-slide.active');
            if (slide) {
                const canvas = await this.renderSlideToCanvas(slide, width, height);
                const blob = await this.canvasToBlob(canvas, format);
                images.push({
                    blob,
                    filename: `slide-${i + 1}.${format}`
                });
            }
        }

        // Create ZIP if multiple images
        if (images.length > 1) {
            if (loadingText) loadingText.textContent = 'Creating ZIP archive...';
            await this.createZip(images);
        } else if (images.length === 1) {
            this.downloadBlob(images[0].blob, images[0].filename);
        }

        // Reset to first slide
        templateEngine.showSlide(0);
    }

    async renderSlideToCanvas(slide, width, height) {
        // Create a temporary container with exact dimensions
        const tempContainer = document.createElement('div');
        tempContainer.style.width = `${width}px`;
        tempContainer.style.height = `${height}px`;
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.background = slide.style.background || '#08080c';
        tempContainer.style.overflow = 'hidden';

        // Clone slide content
        const slideClone = slide.cloneNode(true);
        slideClone.style.position = 'relative';
        slideClone.style.width = '100%';
        slideClone.style.height = '100%';
        slideClone.style.opacity = '1';
        slideClone.classList.add('active');

        // Scale elements proportionally
        const scaleX = width / slide.offsetWidth;
        const scaleY = height / slide.offsetHeight;
        const scale = Math.min(scaleX, scaleY);

        const elements = slideClone.querySelectorAll('.slide-element');
        elements.forEach(el => {
            if (el.style.left && el.style.left.includes('%')) {
                // Keep percentage-based positioning
            } else if (el.style.left) {
                const left = parseFloat(el.style.left);
                el.style.left = `${left * scale}px`;
            }
            if (el.style.top && el.style.top.includes('%')) {
                // Keep percentage-based positioning
            } else if (el.style.top) {
                const top = parseFloat(el.style.top);
                el.style.top = `${top * scale}px`;
            }
            if (el.style.fontSize) {
                const fontSize = parseFloat(el.style.fontSize);
                el.style.fontSize = `${fontSize * scale}px`;
            }
        });

        tempContainer.appendChild(slideClone);
        document.body.appendChild(tempContainer);

        try {
            // Wait for html2canvas to be available
            if (typeof html2canvas === 'undefined') {
                await new Promise((resolve) => {
                    const checkInterval = setInterval(() => {
                        if (typeof html2canvas !== 'undefined') {
                            clearInterval(checkInterval);
                            resolve();
                        }
                    }, 100);
                });
            }

            const canvas = await html2canvas(tempContainer, {
                width: width,
                height: height,
                scale: 1,
                useCORS: true,
                backgroundColor: null
            });

            return canvas;
        } finally {
            document.body.removeChild(tempContainer);
        }
    }

    async canvasToBlob(canvas, format) {
        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, `image/${format}`, 0.95);
        });
    }

    downloadCanvas(canvas, filename, format) {
        canvas.toBlob((blob) => {
            this.downloadBlob(blob, filename);
        }, `image/${format}`, 0.95);
    }

    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async createZip(images) {
        // Use JSZip if available, otherwise download individually
        if (typeof JSZip !== 'undefined') {
            const zip = new JSZip();
            images.forEach(({ blob, filename }) => {
                zip.file(filename, blob);
            });

            const zipBlob = await zip.generateAsync({ type: 'blob' });
            this.downloadBlob(zipBlob, 'carousel-export.zip');
        } else {
            // Fallback: download images individually
            images.forEach(({ blob, filename }) => {
                setTimeout(() => {
                    this.downloadBlob(blob, filename);
                }, 100);
            });
        }
    }
}

// Initialize export engine
window.ExportEngine = new ExportEngine();

