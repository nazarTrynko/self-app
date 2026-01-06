// ProofPilot Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Initialize waitlist forms
  initWaitlistForms();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize proof card animation
  initProofCardAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're in! We'll notify you when ProofPilot launches.",
      onSuccess: (email) => {
        // Track conversion
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { 
            product: 'proofpilot',
            email_domain: email.split('@')[1]
          });
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
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.problem-card, .step, .testimonial, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initProofCardAnimation() {
  const proofCard = document.querySelector('.proof-card');
  if (!proofCard) return;
  
  // Add subtle float animation
  proofCard.classList.add('animate-float');
  
  // Interactive hover effect
  proofCard.addEventListener('mouseenter', () => {
    proofCard.style.transform = 'translateY(-10px) scale(1.02)';
    proofCard.style.transition = 'transform 0.3s ease';
  });
  
  proofCard.addEventListener('mouseleave', () => {
    proofCard.style.transform = '';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

