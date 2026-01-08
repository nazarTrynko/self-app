/**
 * Book Genesis Engine — Email Capture System
 * Multi-provider email capture with validation and tracking
 * 
 * Supports: ConvertKit, Mailchimp, Beehiiv, Buttondown, Custom
 */

const EmailCapture = (function() {
    'use strict';

    // Configuration
    const config = {
        provider: 'custom', // 'convertkit', 'mailchimp', 'beehiiv', 'buttondown', 'custom'
        formId: null,
        apiKey: null,
        endpoint: null,
        successMessage: 'Thank you! Check your inbox to confirm.',
        errorMessage: 'Something went wrong. Please try again.',
        alreadySubscribedMessage: 'You\'re already subscribed!',
        invalidEmailMessage: 'Please enter a valid email address.',
        tags: [],
        source: 'book_landing'
    };

    // Provider configurations
    const providers = {
        convertkit: {
            endpoint: (formId) => `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, apiKey, tags) => JSON.stringify({
                api_key: apiKey,
                email: email,
                tags: tags
            }),
            parseResponse: (response) => {
                if (response.subscription) return { success: true };
                if (response.error) return { success: false, error: response.error };
                return { success: false, error: 'Unknown error' };
            }
        },
        mailchimp: {
            // Note: Mailchimp requires server-side proxy due to CORS
            endpoint: (listId) => `/api/mailchimp/subscribe`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, apiKey, tags) => JSON.stringify({
                email: email,
                tags: tags
            }),
            parseResponse: (response) => {
                if (response.id) return { success: true };
                if (response.status === 400) return { success: false, error: 'already_subscribed' };
                return { success: false, error: response.detail || 'Unknown error' };
            }
        },
        beehiiv: {
            endpoint: (publicationId) => `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, apiKey, tags) => JSON.stringify({
                email: email,
                reactivate_existing: true,
                send_welcome_email: true,
                utm_source: tags[0] || 'book_landing'
            }),
            parseResponse: (response) => {
                if (response.data) return { success: true };
                return { success: false, error: response.message || 'Unknown error' };
            }
        },
        buttondown: {
            endpoint: () => 'https://api.buttondown.email/v1/subscribers',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, apiKey, tags) => JSON.stringify({
                email: email,
                tags: tags
            }),
            parseResponse: (response) => {
                if (response.id) return { success: true };
                return { success: false, error: response.detail || 'Unknown error' };
            }
        },
        custom: {
            endpoint: () => config.endpoint || '/api/subscribe',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, apiKey, tags) => JSON.stringify({
                email: email,
                source: config.source,
                tags: tags
            }),
            parseResponse: (response) => {
                if (response.success) return { success: true };
                return { success: false, error: response.error || 'Unknown error' };
            }
        }
    };

    // Initialize
    function init(options = {}) {
        Object.assign(config, options);
        setupForms();
        log('Email capture initialized');
    }

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Setup forms
    function setupForms() {
        const forms = document.querySelectorAll('[data-email-capture]');
        forms.forEach(form => {
            form.addEventListener('submit', handleSubmit);
        });
    }

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const input = form.querySelector('input[type="email"], input[name="email"], .email-input');
        const submitBtn = form.querySelector('button[type="submit"], .submit-btn');
        const messageEl = form.querySelector('.form-message');
        
        if (!input) {
            log('Email input not found');
            return;
        }
        
        const email = input.value.trim();
        
        // Validate
        if (!validateEmail(email)) {
            showMessage(messageEl, config.invalidEmailMessage, 'error');
            input.focus();
            return;
        }
        
        // Show loading state
        setLoading(submitBtn, true);
        
        try {
            const result = await subscribe(email, form.dataset.tags?.split(',') || config.tags);
            
            if (result.success) {
                showMessage(messageEl, config.successMessage, 'success');
                input.value = '';
                
                // Track conversion
                if (typeof BookAnalytics !== 'undefined') {
                    BookAnalytics.trackEmailCapture(config.source);
                }
                
                // Trigger custom event
                form.dispatchEvent(new CustomEvent('email-captured', { 
                    detail: { email, source: config.source }
                }));
            } else {
                const message = result.error === 'already_subscribed' 
                    ? config.alreadySubscribedMessage 
                    : config.errorMessage;
                showMessage(messageEl, message, 'error');
            }
        } catch (error) {
            log('Subscription error:', error);
            showMessage(messageEl, config.errorMessage, 'error');
        } finally {
            setLoading(submitBtn, false);
        }
    }

    // Subscribe function
    async function subscribe(email, tags = []) {
        const provider = providers[config.provider];
        
        if (!provider) {
            throw new Error(`Unknown provider: ${config.provider}`);
        }
        
        const url = provider.endpoint(config.formId);
        const body = provider.body(email, config.apiKey, tags);
        
        // Build headers
        const headers = { ...provider.headers };
        if (config.provider === 'beehiiv' || config.provider === 'buttondown') {
            headers['Authorization'] = `Bearer ${config.apiKey}`;
        }
        
        try {
            const response = await fetch(url, {
                method: provider.method,
                headers,
                body
            });
            
            const data = await response.json();
            return provider.parseResponse(data);
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // UI helpers
    function showMessage(el, message, type) {
        if (!el) return;
        
        el.textContent = message;
        el.className = `form-message form-message-${type}`;
        el.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            el.style.display = 'none';
        }, 5000);
    }

    function setLoading(btn, loading) {
        if (!btn) return;
        
        if (loading) {
            btn.dataset.originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
        } else {
            btn.textContent = btn.dataset.originalText || 'Subscribe';
            btn.disabled = false;
        }
    }

    // Create inline form
    function createForm(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const {
            placeholder = 'Enter your email',
            buttonText = 'Subscribe',
            tags = []
        } = options;
        
        container.innerHTML = `
            <form data-email-capture data-tags="${tags.join(',')}">
                <div class="email-form-row">
                    <input 
                        type="email" 
                        class="email-input form-input" 
                        placeholder="${placeholder}"
                        required
                        aria-label="Email address"
                    >
                    <button type="submit" class="btn btn-primary">
                        ${buttonText}
                    </button>
                </div>
                <div class="form-message" style="display: none;"></div>
            </form>
        `;
        
        // Setup the new form
        const form = container.querySelector('form');
        form.addEventListener('submit', handleSubmit);
    }

    // Debug logging
    function log(...args) {
        if (config.debug) {
            console.log('[EmailCapture]', ...args);
        }
    }

    // Public API
    return {
        init,
        subscribe,
        validateEmail,
        createForm,
        setDebug: (debug) => { config.debug = debug; }
    };
})();

// Auto-initialize if forms exist
if (typeof module === 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('[data-email-capture]')) {
            EmailCapture.init();
        }
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmailCapture;
}


