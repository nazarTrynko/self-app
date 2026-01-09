/**
 * SELF Bridge Navigation
 * Adds cross-section navigation to any page without modifying existing nav
 */
(function() {
  'use strict';

  const SECTIONS = [
    { id: 'discovery', name: 'Self Discovery', path: '/', icon: '✦', color: '#d4af37' },
    { id: 'explore', name: 'Explore', path: '/explore', icon: '◆', color: '#8b5cf6' },
    { id: 'books', name: 'Books', path: '/books', icon: '📚', color: '#d4a574' },
    { id: 'transcendence', name: 'Transcendence', path: '/transcendence', icon: '∞', color: '#14b8a6' }
  ];

  function getCurrentSection() {
    const path = window.location.pathname;
    if (path === '/' || path.startsWith('/self-') || path.startsWith('/reflection') || path.startsWith('/healing')) {
      return 'discovery';
    }
    if (path.startsWith('/books')) return 'books';
    if (path.startsWith('/transcendence')) return 'transcendence';
    return 'explore';
  }

  function createBridgeNav() {
    const current = getCurrentSection();
    
    const nav = document.createElement('nav');
    nav.className = 'self-bridge-nav';
    nav.setAttribute('aria-label', 'Section navigation');
    
    nav.innerHTML = `
      <div class="bridge-nav-inner">
        <button class="bridge-nav-toggle" aria-label="Toggle section navigation" aria-expanded="false">
          <span class="bridge-nav-icon">☰</span>
          <span class="bridge-nav-label">SELF</span>
        </button>
        <div class="bridge-nav-sections" role="menu">
          ${SECTIONS.map(s => `
            <a href="${s.path}" 
               class="bridge-nav-section ${s.id === current ? 'active' : ''}"
               style="--section-color: ${s.color}"
               role="menuitem">
              <span class="bridge-section-icon">${s.icon}</span>
              <span class="bridge-section-name">${s.name}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    document.body.appendChild(nav);
    
    // Toggle behavior
    const toggle = nav.querySelector('.bridge-nav-toggle');
    const sections = nav.querySelector('.bridge-nav-sections');
    
    toggle.addEventListener('click', () => {
      const isOpen = sections.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        sections.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        sections.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initialize when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBridgeNav);
  } else {
    createBridgeNav();
  }
})();

