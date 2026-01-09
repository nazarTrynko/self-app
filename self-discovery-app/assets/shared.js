/**
 * Shared Utilities
 * The Prompt Library Portal
 */

/**
 * Copy text to clipboard
 */
function copyToClipboard(text, button) {
    if (!navigator.clipboard) {
        // Fallback for older browsers
        return fallbackCopy(text, button)
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showCopySuccess(button)
        showToast('Copied to clipboard')
    }).catch(err => {
        console.error('Failed to copy:', err)
        fallbackCopy(text, button)
    })
}

/**
 * Fallback copy method
 */
function fallbackCopy(text, button) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    textArea.style.top = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
        document.execCommand('copy')
        showCopySuccess(button)
        showToast('Copied to clipboard')
    } catch (err) {
        console.error('Fallback copy failed:', err)
        showToast('Failed to copy', 'error')
    }
    
    document.body.removeChild(textArea)
}

/**
 * Show copy success state on button
 */
function showCopySuccess(button) {
    if (!button) return
    
    const originalHTML = button.innerHTML
    const originalClasses = button.className
    
    button.classList.add('copied')
    button.innerHTML = `<span class="copy-icon">✓</span><span class="copy-text">Copied!</span>`
    
    setTimeout(() => {
        button.className = originalClasses
        button.innerHTML = originalHTML
    }, 2000)
}

/**
 * Show toast notification
 */
function showToast(message = 'Copied to clipboard', type = 'success') {
    let toast = document.getElementById('toast')
    
    if (!toast) {
        toast = document.createElement('div')
        toast.id = 'toast'
        toast.className = 'toast'
        document.body.appendChild(toast)
    }
    
    const icon = type === 'success' ? '✓' : '✕'
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${message}</span>`
    toast.classList.add('show')
    
    setTimeout(() => {
        toast.classList.remove('show')
    }, 2500)
}

/**
 * Initialize copy buttons
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn[data-target]')
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target')
            const targetElement = document.getElementById(targetId)
            
            if (targetElement) {
                const textToCopy = targetElement.textContent.trim()
                copyToClipboard(textToCopy, button)
            }
        })
    })
}

/**
 * Initialize on DOM ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initCopyButtons()
    })
} else {
    initCopyButtons()
}


