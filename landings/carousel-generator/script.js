/**
 * Main Carousel Generator Script
 * Orchestrates all components
 */

let templateEngine;
let currentTemplate = null;

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // Initialize template engine
    const previewContainer = document.getElementById('carouselPreview');
    templateEngine = new TemplateEngine(previewContainer);

    // Load templates
    loadTemplates();

    // Setup event listeners
    setupEventListeners();

    // Load first template by default
    if (CAROUSEL_TEMPLATES.length > 0) {
        loadTemplate(CAROUSEL_TEMPLATES[0]);
    }
}

function loadTemplates() {
    const templateList = document.getElementById('templateList');
    templateList.innerHTML = '';

    // Add Programmers Day example if available
    if (typeof PROGRAMMERS_DAY_CAROUSEL !== 'undefined') {
        const exampleCard = document.createElement('div');
        exampleCard.className = 'template-card';
        exampleCard.dataset.templateId = PROGRAMMERS_DAY_CAROUSEL.id;
        exampleCard.innerHTML = `
            <h3>${PROGRAMMERS_DAY_CAROUSEL.name}</h3>
            <p>${PROGRAMMERS_DAY_CAROUSEL.description}</p>
            <span style="font-size: 0.75rem; color: var(--accent-cyan); margin-top: 8px; display: block;">Example Carousel</span>
        `;
        exampleCard.addEventListener('click', () => loadTemplate(PROGRAMMERS_DAY_CAROUSEL));
        templateList.appendChild(exampleCard);
    }

    CAROUSEL_TEMPLATES.forEach(template => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.dataset.templateId = template.id;
        card.innerHTML = `
            <h3>${template.name}</h3>
            <p>${template.description}</p>
        `;
        card.addEventListener('click', () => loadTemplate(template));
        templateList.appendChild(card);
    });
}

function loadTemplate(template) {
    currentTemplate = template;
    templateEngine.loadTemplate(template);

    // Update active template card
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.toggle('active', card.dataset.templateId === template.id);
    });

    // Update slide navigator
    updateSlideNavigator();
}

function setupEventListeners() {
    // Navigation
    document.getElementById('prevSlide')?.addEventListener('click', () => {
        templateEngine.prevSlide();
        updateSlideNavigator();
    });

    document.getElementById('nextSlide')?.addEventListener('click', () => {
        templateEngine.nextSlide();
        updateSlideNavigator();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            templateEngine.prevSlide();
            updateSlideNavigator();
        } else if (e.key === 'ArrowRight') {
            templateEngine.nextSlide();
            updateSlideNavigator();
        }
    });

    // Export
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        showExportModal();
    });

    document.getElementById('confirmExport')?.addEventListener('click', () => {
        handleExport();
    });

    // AI Suggestions
    document.getElementById('aiSuggestBtn')?.addEventListener('click', () => {
        showAiModal();
    });

    // Modal close
    document.getElementById('closeAiModal')?.addEventListener('click', () => {
        hideModal('aiModal');
    });

    document.getElementById('closeExportModal')?.addEventListener('click', () => {
        hideModal('exportModal');
    });

    // Sidebar toggles
    document.getElementById('toggleTemplates')?.addEventListener('click', () => {
        document.getElementById('templatesSidebar')?.classList.toggle('open');
    });

    document.getElementById('toggleEditor')?.addEventListener('click', () => {
        document.getElementById('editorSidebar')?.classList.toggle('open');
    });

    // Slide management
    document.getElementById('addSlideBtn')?.addEventListener('click', () => {
        addNewSlide();
    });

    document.getElementById('duplicateSlideBtn')?.addEventListener('click', () => {
        duplicateCurrentSlide();
    });

    document.getElementById('deleteSlideBtn')?.addEventListener('click', () => {
        deleteCurrentSlide();
    });

    // Custom builder
    document.getElementById('customBuilderBtn')?.addEventListener('click', () => {
        openCustomBuilder();
    });
}

function updateSlideNavigator() {
    const navigator = document.getElementById('slideNavigator');
    const slideSelector = document.getElementById('slideSelector');
    
    if (!navigator || !slideSelector) return;

    const totalSlides = templateEngine.getTotalSlides();
    const currentIndex = templateEngine.currentSlideIndex;

    // Clear existing
    navigator.innerHTML = '';
    slideSelector.innerHTML = '';

    // Create thumbnails
    for (let i = 0; i < totalSlides; i++) {
        const thumb = document.createElement('div');
        thumb.className = `slide-thumbnail ${i === currentIndex ? 'active' : ''}`;
        thumb.dataset.slideIndex = i;
        thumb.innerHTML = `<span>${i + 1}</span>`;
        thumb.addEventListener('click', () => {
            templateEngine.showSlide(i);
            updateSlideNavigator();
        });
        
        navigator.appendChild(thumb.cloneNode(true));
        slideSelector.appendChild(thumb);
    }
}

function addNewSlide() {
    if (!currentTemplate) return;

    const newSlide = {
        layout: 'centered',
        background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
        elements: [
            { 
                type: 'text', 
                content: 'New Slide', 
                style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, 
                position: { x: '50%', y: '50%' } 
            }
        ]
    };

    currentTemplate.slides.push(newSlide);
    templateEngine.loadTemplate(currentTemplate);
    templateEngine.showSlide(currentTemplate.slides.length - 1);
    updateSlideNavigator();
}

function duplicateCurrentSlide() {
    if (!currentTemplate) return;

    const currentSlide = templateEngine.getCurrentSlide();
    const duplicatedSlide = JSON.parse(JSON.stringify(currentSlide));
    
    currentTemplate.slides.splice(templateEngine.currentSlideIndex + 1, 0, duplicatedSlide);
    templateEngine.loadTemplate(currentTemplate);
    templateEngine.showSlide(templateEngine.currentSlideIndex + 1);
    updateSlideNavigator();
}

function deleteCurrentSlide() {
    if (!currentTemplate || currentTemplate.slides.length <= 1) {
        alert('Cannot delete the last slide');
        return;
    }

    if (confirm('Delete this slide?')) {
        currentTemplate.slides.splice(templateEngine.currentSlideIndex, 1);
        const newIndex = Math.min(templateEngine.currentSlideIndex, currentTemplate.slides.length - 1);
        templateEngine.loadTemplate(currentTemplate);
        templateEngine.showSlide(newIndex);
        updateSlideNavigator();
    }
}

function showExportModal() {
    showModal('exportModal');
}

function showAiModal() {
    if (window.AISuggestions) {
        const suggestions = window.AISuggestions.generate(currentTemplate);
        const modalBody = document.getElementById('aiSuggestions');
        if (modalBody) {
            modalBody.innerHTML = suggestions;
        }
    }
    showModal('aiModal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

function openCustomBuilder() {
    // Create a blank template for custom building
    const blankTemplate = {
        id: 'custom',
        name: 'Custom Carousel',
        description: 'Build your own carousel from scratch',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { 
                        type: 'text', 
                        content: 'Start Building', 
                        style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, 
                        position: { x: '50%', y: '50%' } 
                    }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    };

    loadTemplate(blankTemplate);
    
    // Show editor sidebar
    document.getElementById('editorSidebar')?.classList.add('open');
    
    // Update editor with current slide
    updateEditor();
}

function updateEditor() {
    const currentSlide = templateEngine.getCurrentSlide();
    if (!currentSlide) return;

    const elementList = document.getElementById('elementList');
    const styleControls = document.getElementById('styleControls');
    
    if (!elementList || !styleControls) return;

    // List elements
    elementList.innerHTML = '';
    if (currentSlide.elements) {
        currentSlide.elements.forEach((element, index) => {
            const item = document.createElement('div');
            item.className = 'element-item';
            item.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${element.type} - ${element.content || element.shape || 'Element'}</span>
                    <button class="btn-icon" style="width: 24px; height: 24px; font-size: 0.75rem;" onclick="deleteElement(${index})">×</button>
                </div>
            `;
            item.addEventListener('click', () => editElement(index));
            elementList.appendChild(item);
        });
    }

    // Add element button
    const addBtn = document.createElement('button');
    addBtn.className = 'btn-secondary';
    addBtn.textContent = '+ Add Element';
    addBtn.style.width = '100%';
    addBtn.style.marginTop = '12px';
    addBtn.addEventListener('click', () => showAddElementDialog());
    elementList.appendChild(addBtn);

    // Style controls
    styleControls.innerHTML = `
        <div class="style-group">
            <label>Background Type</label>
            <select id="bgType" onchange="updateBackground()">
                <option value="gradient" ${currentSlide.background?.type === 'gradient' ? 'selected' : ''}>Gradient</option>
                <option value="solid" ${currentSlide.background?.type === 'solid' ? 'selected' : ''}>Solid</option>
            </select>
        </div>
        <div class="style-group">
            <label>Background Color 1</label>
            <input type="color" id="bgColor1" value="${currentSlide.background?.colors?.[0] || '#08080c'}" onchange="updateBackground()">
        </div>
        <div class="style-group">
            <label>Background Color 2</label>
            <input type="color" id="bgColor2" value="${currentSlide.background?.colors?.[1] || '#1a1a2e'}" onchange="updateBackground()">
        </div>
    `;
}

function showAddElementDialog() {
    const type = prompt('Element type (text/shape/icon):');
    if (!type) return;

    const currentSlide = templateEngine.getCurrentSlide();
    if (!currentSlide) return;

    let newElement;
    switch (type.toLowerCase()) {
        case 'text':
            const text = prompt('Text content:');
            if (!text) return;
            newElement = {
                type: 'text',
                content: text,
                style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' },
                position: { x: '50%', y: '50%' }
            };
            break;
        case 'shape':
            const shapeType = prompt('Shape type (circle/square/triangle):');
            if (!shapeType) return;
            newElement = {
                type: 'shape',
                shape: shapeType.toLowerCase(),
                size: 100,
                color: '#8b5cf6',
                opacity: 0.2,
                position: { x: '50%', y: '50%' }
            };
            break;
        default:
            alert('Invalid element type');
            return;
    }

    currentSlide.elements = currentSlide.elements || [];
    currentSlide.elements.push(newElement);
    templateEngine.render();
    updateEditor();
}

function editElement(index) {
    const currentSlide = templateEngine.getCurrentSlide();
    if (!currentSlide || !currentSlide.elements[index]) return;

    const element = currentSlide.elements[index];
    if (element.type === 'text') {
        const newText = prompt('Edit text:', element.content);
        if (newText !== null) {
            element.content = newText;
            templateEngine.render();
            updateEditor();
        }
    }
}

function deleteElement(index) {
    const currentSlide = templateEngine.getCurrentSlide();
    if (!currentSlide || !currentSlide.elements[index]) return;

    if (confirm('Delete this element?')) {
        currentSlide.elements.splice(index, 1);
        templateEngine.render();
        updateEditor();
    }
}

function updateBackground() {
    const currentSlide = templateEngine.getCurrentSlide();
    if (!currentSlide) return;

    const bgType = document.getElementById('bgType')?.value || 'gradient';
    const color1 = document.getElementById('bgColor1')?.value || '#08080c';
    const color2 = document.getElementById('bgColor2')?.value || '#1a1a2e';

    currentSlide.background = {
        type: bgType,
        colors: bgType === 'gradient' ? [color1, color2] : [color1],
        color: bgType === 'solid' ? color1 : undefined
    };

    templateEngine.render();
}

function handleExport() {
    const exportType = document.querySelector('input[name="exportType"]:checked')?.value || 'single';
    const format = document.getElementById('exportFormat')?.value || 'png';
    const dimensions = document.getElementById('exportDimensions')?.value || '1080x1080';

    hideModal('exportModal');
    
    if (window.ExportEngine) {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
        }

        window.ExportEngine.export(exportType, format, dimensions, templateEngine)
            .then(() => {
                if (loadingOverlay) {
                    loadingOverlay.classList.remove('active');
                }
            })
            .catch(error => {
                console.error('Export error:', error);
                if (loadingOverlay) {
                    loadingOverlay.classList.remove('active');
                }
                alert('Export failed. Please try again.');
            });
    }
}

