/**
 * SELF Navigation System
 * Unified navigation for all landing page collections
 */

(function() {
    'use strict';

    // Collection metadata
    const collections = {
        main: { name: 'SELF Landings', count: 10, accent: '#8b5cf6' },
        masters: { name: 'Masterpieces', count: 25, accent: '#c9a227' },
        revelations: { name: 'Revelations', count: 10, accent: '#14b8a6' },
        ph: { name: 'Product Ideas', count: 24, accent: '#f472b6' },
        ideas: { name: 'App Ideas', count: 33, accent: '#22c55e' },
        'carousel-generator': { name: 'Carousel Generator', count: 1, accent: '#06b6d4' }
    };

    // Detect current collection and depth from URL
    function getPathInfo() {
        const path = window.location.pathname;
        let collection = 'main';
        let depth = 0; // How many directories deep from landings root
        
        if (path.includes('/showcases/masterpieces/')) {
            collection = 'masters';
            // Check if we're in showcases/masterpieces/index.html (depth 2) or showcases/masterpieces/01-xxx/ (depth 3)
            const mastersMatch = path.match(/\/showcases\/masterpieces\/\d+-/);
            depth = mastersMatch ? 3 : 2;
        } else if (path.includes('/showcases/revelations/')) {
            collection = 'revelations';
            const revMatch = path.match(/\/showcases\/revelations\/[^\/]+\//);
            // Check if deeper than just /showcases/revelations/
            const parts = path.split('/showcases/revelations/')[1];
            depth = parts && parts.split('/').filter(Boolean).length > 0 ? 3 : 2;
        } else if (path.includes('/showcases/self-variants/')) {
            collection = 'main';
            depth = 3;
        } else if (path.includes('/product-hunt/')) {
            collection = 'ph';
            const phMatch = path.match(/\/product-hunt\/[^\/]+\//);
            depth = phMatch ? 2 : 1;
        } else if (path.includes('/blueprints/mobile-apps/')) {
            collection = 'ideas';
            // Check depth based on path structure
            const parts = path.split('/blueprints/mobile-apps/')[1];
            depth = parts && parts.split('/').filter(Boolean).length > 0 ? 3 : 2;
        } else if (path.includes('/products/carousel-generator/')) {
            collection = 'carousel-generator';
            const cgMatch = path.match(/\/products\/carousel-generator\/examples\//);
            depth = cgMatch ? 3 : 2;
        } else if (path.includes('/products/')) {
            collection = 'main';
            depth = 2;
        } else if (path.includes('/docs/')) {
            collection = 'main';
            depth = 2;
        } else if (path.includes('/meta/')) {
            collection = 'main';
            depth = 2;
        } else if (path.includes('/showcases/')) {
            collection = 'main';
            depth = 1;
        } else {
            // Root level
            depth = 0;
        }
        
        return { collection, depth };
    }

    // Get base path (relative path back to landings root)
    function getBasePath() {
        const { depth } = getPathInfo();
        if (depth === 0) return './';
        if (depth === 1) return '../';
        if (depth === 2) return '../../';
        return '../../../';
    }

    // Generate navigation HTML
    function generateNav(options = {}) {
        const { collection } = getPathInfo();
        const base = getBasePath();
        const isHub = options.isHub || false;
        
        return `
        <nav class="self-nav" id="selfNav">
            <div class="self-nav-inner">
                <a href="${base}" class="self-nav-brand">
                    <span class="self-nav-logo">S</span>
                    <span class="self-nav-title">SELF</span>
                </a>
                
                <div class="self-nav-links" id="selfNavLinks">
                    <a href="${base}" class="self-nav-link ${collection === 'main' ? 'active' : ''}" data-collection="main">
                        <span class="self-nav-link-indicator"></span>
                        <span>Landings</span>
                        <span class="self-nav-link-count">${collections.main.count}</span>
                    </a>
                    <a href="${base}showcases/masterpieces/" class="self-nav-link ${collection === 'masters' ? 'active' : ''}" data-collection="masters">
                        <span class="self-nav-link-indicator"></span>
                        <span>Masterpieces</span>
                        <span class="self-nav-link-count">${collections.masters.count}</span>
                    </a>
                    <a href="${base}showcases/revelations/" class="self-nav-link ${collection === 'revelations' ? 'active' : ''}" data-collection="revelations">
                        <span class="self-nav-link-indicator"></span>
                        <span>Revelations</span>
                        <span class="self-nav-link-count">${collections.revelations.count}</span>
                    </a>
                    <a href="${base}product-hunt/" class="self-nav-link ${collection === 'ph' ? 'active' : ''}" data-collection="ph">
                        <span class="self-nav-link-indicator"></span>
                        <span>Products</span>
                        <span class="self-nav-link-count">${collections.ph.count}</span>
                    </a>
                    <a href="${base}blueprints/mobile-apps/" class="self-nav-link ${collection === 'ideas' ? 'active' : ''}" data-collection="ideas">
                        <span class="self-nav-link-indicator"></span>
                        <span>App Ideas</span>
                        <span class="self-nav-link-count">${collections.ideas.count}</span>
                    </a>
                    <a href="${base}products/carousel-generator/" class="self-nav-link ${collection === 'carousel-generator' ? 'active' : ''}" data-collection="carousel-generator">
                        <span class="self-nav-link-indicator"></span>
                        <span>Carousel Gen</span>
                        <span class="self-nav-link-count">${collections['carousel-generator'].count}</span>
                    </a>
                </div>
                
                <button class="self-nav-toggle" id="selfNavToggle" aria-label="Toggle navigation">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </nav>
        <div class="self-page-transition" id="selfTransition"></div>
        `;
    }

    // Initialize navigation functionality
    function initNav() {
        const nav = document.getElementById('selfNav');
        const toggle = document.getElementById('selfNavToggle');
        const links = document.getElementById('selfNavLinks');
        const transition = document.getElementById('selfTransition');
        
        if (!nav) return;

        // Mobile toggle
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                links.classList.toggle('open');
                const isOpen = links.classList.contains('open');
                toggle.innerHTML = isOpen 
                    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
                    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
            });
        }

        // Hide nav on scroll down, show on scroll up
        let lastScroll = 0;
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset;
                    
                    if (currentScroll > lastScroll && currentScroll > 100) {
                        nav.classList.add('hidden');
                    } else {
                        nav.classList.remove('hidden');
                    }
                    
                    lastScroll = currentScroll;
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Page transition effect
        const navLinks = nav.querySelectorAll('.self-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.classList.contains('active')) return;
                
                e.preventDefault();
                const href = link.getAttribute('href');
                
                if (transition) {
                    transition.classList.add('active');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                } else {
                    window.location.href = href;
                }
            });
        });
    }

    // Auto-inject navigation
    function injectNav(options = {}) {
        const navHTML = generateNav(options);
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Add body padding for fixed nav
        document.body.style.paddingTop = '80px';
        
        initNav();
    }

    // Export for use in pages
    window.SELFNav = {
        collections,
        getPathInfo,
        getBasePath,
        generateNav,
        initNav,
        injectNav
    };

    // Auto-initialize if data attribute present
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.hasAttribute('data-self-nav')) {
            injectNav();
        }
    });
})();
