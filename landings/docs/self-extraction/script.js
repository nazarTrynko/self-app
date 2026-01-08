/**
 * Self-Extraction Prompt Suite
 * Interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initCopyButtons();
    initScrollAnimations();
});

/**
 * Copy to clipboard functionality
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn[data-target]');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const textToCopy = targetElement.textContent;
                copyToClipboard(textToCopy, button);
            }
        });
    });
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success state on button
        const originalHTML = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `<span class="copy-icon">✓</span><span class="copy-text">Copied!</span>`;
        
        // Show toast
        showToast();
        
        // Reset button after delay
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        fallbackCopy(text);
    });
}

/**
 * Global copy function for inline buttons
 */
window.copyText = function(button, text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `<span class="copy-icon">✓</span>`;
        
        showToast();
        
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        fallbackCopy(text);
    });
};

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
}

/**
 * Show toast notification
 */
function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.prompt-card, .tip-card, .principle-card, .output-item, .sequence-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for grouped items
                const delay = index * 50;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

