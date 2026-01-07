// ShipCheck Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  initWaitlistForms();
  initScrollAnimations();
  initChecklistAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "Checklist on the way! Check your inbox.",
      onSuccess: (email) => {
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { product: 'shipcheck' });
        }
      }
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.feature, .stat, .mistake, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initChecklistAnimation() {
  const checkItems = document.querySelectorAll('.check-item');
  
  checkItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.3s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 600 + (index * 100));
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

