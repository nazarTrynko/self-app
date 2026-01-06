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
        ph: { name: 'Product Ideas', count: 23, accent: '#f472b6' }
    };

    // Detect current collection and depth from URL
    function getPathInfo() {
        const path = window.location.pathname;
        let collection = 'main';
        let depth = 0; // How many directories deep from landings root
        
        if (path.includes('/masters/')) {
            collection = 'masters';
            // Check if we're in masters/index.html (depth 1) or masters/11/ (depth 2)
            const mastersMatch = path.match(/\/masters\/(\d+)?/);
            depth = mastersMatch && mastersMatch[1] ? 2 : 1;
        } else if (path.includes('/revelations/')) {
            collection = 'revelations';
            const revMatch = path.match(/\/revelations\/\d+-/);
            depth = revMatch ? 2 : 1;
        } else if (path.includes('/ph/')) {
            collection = 'ph';
            const phMatch = path.match(/\/ph\/\d+-/);
            depth = phMatch ? 2 : 1;
        } else {
            // Check if we're in a numbered folder like /0/, /1/, etc.
            const numMatch = path.match(/\/(\d+)\//);
            depth = numMatch ? 1 : 0;
        }
        
        return { collection, depth };
    }

    // Get base path (relative path back to landings root)
    function getBasePath() {
        const { depth } = getPathInfo();
        if (depth === 0) return './';
        if (depth === 1) return '../';
        return '../../';
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
                    <a href="${base}masters/" class="self-nav-link ${collection === 'masters' ? 'active' : ''}" data-collection="masters">
                        <span class="self-nav-link-indicator"></span>
                        <span>Masterpieces</span>
                        <span class="self-nav-link-count">${collections.masters.count}</span>
                    </a>
                    <a href="${base}revelations/" class="self-nav-link ${collection === 'revelations' ? 'active' : ''}" data-collection="revelations">
                        <span class="self-nav-link-indicator"></span>
                        <span>Revelations</span>
                        <span class="self-nav-link-count">${collections.revelations.count}</span>
                    </a>
                    <a href="${base}ph/" class="self-nav-link ${collection === 'ph' ? 'active' : ''}" data-collection="ph">
                        <span class="self-nav-link-indicator"></span>
                        <span>Product Ideas</span>
                        <span class="self-nav-link-count">${collections.ph.count}</span>
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
