// WaitlistKit Landing Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-waitlist-form]').forEach(form => {
    if (!form.id) form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're in! We'll send you access soon.",
      onSuccess: () => Analytics?.track('waitlist_signup', { product: 'waitlistkit' })
    });
  });
});

