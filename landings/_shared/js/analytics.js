/**
 * Analytics Scaffold
 * Shared across all PH landing pages
 */

const Analytics = {
  // Configuration
  config: {
    debug: true,
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackClicks: true
  },

  // Initialize analytics
  init(options = {}) {
    this.config = { ...this.config, ...options };
    
    if (this.config.trackScrollDepth) {
      this.initScrollTracking();
    }
    
    if (this.config.trackTimeOnPage) {
      this.initTimeTracking();
    }
    
    if (this.config.trackClicks) {
      this.initClickTracking();
    }

    this.log('Analytics initialized');
  },

  // Track custom events
  track(eventName, properties = {}) {
    const event = {
      event: eventName,
      properties: {
        ...properties,
        page: window.location.pathname,
        timestamp: Date.now(),
        url: window.location.href
      }
    };

    this.log('Event tracked:', event);

    // Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }

    // Send to custom endpoint (if configured)
    if (this.config.endpoint) {
      this.sendToEndpoint(event);
    }

    // Store locally for debugging
    this.storeEvent(event);
  },

  // Track page view
  pageView(pageName) {
    this.track('page_view', { page_name: pageName });
  },

  // Track CTA clicks
  trackCTA(ctaName, ctaLocation) {
    this.track('cta_click', { 
      cta_name: ctaName,
      cta_location: ctaLocation 
    });
  },

  // Scroll depth tracking
  initScrollTracking() {
    const depths = [25, 50, 75, 100];
    const tracked = new Set();

    const checkScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      depths.forEach(depth => {
        if (scrollPercent >= depth && !tracked.has(depth)) {
          tracked.add(depth);
          this.track('scroll_depth', { depth: `${depth}%` });
        }
      });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkScrollDepth();
          ticking = false;
        });
        ticking = true;
      }
    });
  },

  // Time on page tracking
  initTimeTracking() {
    const intervals = [10, 30, 60, 120, 300]; // seconds
    let startTime = Date.now();

    intervals.forEach(seconds => {
      setTimeout(() => {
        this.track('time_on_page', { seconds });
      }, seconds * 1000);
    });

    // Track on page unload
    window.addEventListener('beforeunload', () => {
      const totalTime = Math.round((Date.now() - startTime) / 1000);
      this.track('page_exit', { total_seconds: totalTime });
    });
  },

  // Click tracking on marked elements
  initClickTracking() {
    document.addEventListener('click', (e) => {
      const tracked = e.target.closest('[data-track]');
      if (tracked) {
        const eventName = tracked.dataset.track;
        const properties = tracked.dataset.trackProps 
          ? JSON.parse(tracked.dataset.trackProps) 
          : {};
        this.track(eventName, properties);
      }
    });
  },

  // Store events locally
  storeEvent(event) {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push(event);
      // Keep only last 100 events
      if (events.length > 100) {
        events.shift();
      }
      localStorage.setItem('analytics_events', JSON.stringify(events));
    } catch (e) {
      // localStorage might be full or disabled
    }
  },

  // Send to custom endpoint
  async sendToEndpoint(event) {
    try {
      await fetch(this.config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
        keepalive: true
      });
    } catch (e) {
      this.log('Failed to send event:', e);
    }
  },

  // Debug logging
  log(...args) {
    if (this.config.debug) {
      console.log('[Analytics]', ...args);
    }
  },

  // Get stored events (for debugging)
  getStoredEvents() {
    return JSON.parse(localStorage.getItem('analytics_events') || '[]');
  },

  // Clear stored events
  clearStoredEvents() {
    localStorage.removeItem('analytics_events');
  }
};

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  Analytics.init();
  Analytics.pageView(document.title);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Analytics;
}

