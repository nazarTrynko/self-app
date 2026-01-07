/**
 * Waitlist Form Handler
 * Shared across all PH landing pages
 */

class WaitlistForm {
  constructor(formSelector, options = {}) {
    this.form = document.querySelector(formSelector);
    if (!this.form) return;

    this.options = {
      successMessage: 'You\'re on the list! We\'ll be in touch soon.',
      errorMessage: 'Something went wrong. Please try again.',
      onSuccess: null,
      onError: null,
      ...options
    };

    this.init();
  }

  init() {
    this.emailInput = this.form.querySelector('input[type="email"]');
    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.messageEl = this.form.querySelector('.form-message') || this.createMessageEl();

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.emailInput?.addEventListener('input', () => this.clearError());
  }

  createMessageEl() {
    const el = document.createElement('div');
    el.className = 'form-message';
    this.form.appendChild(el);
    return el;
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const email = this.emailInput?.value.trim();

    // Validate
    if (!email) {
      this.showError('Please enter your email');
      return;
    }

    if (!this.validateEmail(email)) {
      this.showError('Please enter a valid email');
      return;
    }

    // Show loading state
    this.setLoading(true);

    try {
      // Simulate API call (replace with actual endpoint)
      await this.simulateSubmit(email);
      
      this.showSuccess(this.options.successMessage);
      this.form.reset();
      
      if (this.options.onSuccess) {
        this.options.onSuccess(email);
      }

      // Track conversion
      this.trackConversion(email);

    } catch (error) {
      this.showError(this.options.errorMessage);
      
      if (this.options.onError) {
        this.options.onError(error);
      }
    } finally {
      this.setLoading(false);
    }
  }

  simulateSubmit(email) {
    // Replace this with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Waitlist signup:', email);
        // Store in localStorage for demo purposes
        const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
        waitlist.push({ email, timestamp: Date.now() });
        localStorage.setItem('waitlist', JSON.stringify(waitlist));
        resolve();
      }, 800);
    });
  }

  setLoading(isLoading) {
    if (this.submitBtn) {
      this.submitBtn.disabled = isLoading;
      this.submitBtn.classList.toggle('loading', isLoading);
      
      if (isLoading) {
        this.submitBtn.dataset.originalText = this.submitBtn.textContent;
        this.submitBtn.textContent = 'Joining...';
      } else {
        this.submitBtn.textContent = this.submitBtn.dataset.originalText || 'Join Waitlist';
      }
    }
  }

  showSuccess(message) {
    this.messageEl.textContent = message;
    this.messageEl.className = 'form-message success';
    this.messageEl.style.display = 'block';
  }

  showError(message) {
    this.messageEl.textContent = message;
    this.messageEl.className = 'form-message error';
    this.messageEl.style.display = 'block';
    this.emailInput?.classList.add('input-error');
  }

  clearError() {
    this.messageEl.style.display = 'none';
    this.emailInput?.classList.remove('input-error');
  }

  trackConversion(email) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'waitlist_signup', {
        'event_category': 'engagement',
        'event_label': window.location.pathname
      });
    }

    // Custom event for other analytics
    window.dispatchEvent(new CustomEvent('waitlist:signup', { 
      detail: { email } 
    }));
  }
}

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Find all waitlist forms and initialize
  document.querySelectorAll('[data-waitlist-form]').forEach(form => {
    new WaitlistForm(`#${form.id || 'waitlist-form'}`);
  });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WaitlistForm;
}

