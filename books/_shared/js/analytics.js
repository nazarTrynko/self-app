/**
 * Book Genesis Engine — Analytics System
 * Unified event tracking for all book landing pages
 * 
 * Tracks: page views, scroll depth, tool interactions, conversions
 * Supports: Google Analytics, custom events, local storage
 */

const BookAnalytics = (function() {
    'use strict';

    // Configuration
    const config = {
        debug: false,
        storageKey: 'book_analytics',
        scrollMilestones: [25, 50, 75, 90, 100],
        sessionTimeout: 30 * 60 * 1000, // 30 minutes
    };

    // State
    let state = {
        sessionId: null,
        startTime: null,
        scrollDepthReached: 0,
        toolInteractions: {},
        events: []
    };

    // Initialize
    function init(options = {}) {
        Object.assign(config, options);
        
        state.sessionId = generateSessionId();
        state.startTime = Date.now();
        
        // Load previous session data
        loadSession();
        
        // Set up event listeners
        setupScrollTracking();
        setupVisibilityTracking();
        setupUnloadTracking();
        
        // Track page view
        track('page_view', {
            url: window.location.href,
            referrer: document.referrer,
            title: document.title
        });
        
        log('Analytics initialized', state.sessionId);
    }

    // Generate unique session ID
    function generateSessionId() {
        return 'bs_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }

    // Load session from storage
    function loadSession() {
        try {
            const stored = localStorage.getItem(config.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                // Check if session is still valid
                if (Date.now() - data.lastActivity < config.sessionTimeout) {
                    state = { ...state, ...data, startTime: Date.now() };
                }
            }
        } catch (e) {
            log('Failed to load session', e);
        }
    }

    // Save session to storage
    function saveSession() {
        try {
            const data = {
                ...state,
                lastActivity: Date.now()
            };
            localStorage.setItem(config.storageKey, JSON.stringify(data));
        } catch (e) {
            log('Failed to save session', e);
        }
    }

    // Main tracking function
    function track(eventName, properties = {}) {
        const event = {
            event: eventName,
            timestamp: Date.now(),
            sessionId: state.sessionId,
            properties: {
                ...properties,
                url: window.location.href,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        };

        state.events.push(event);
        saveSession();

        // Send to analytics providers
        sendToGA(event);
        sendToCustomEndpoint(event);

        log('Event tracked:', eventName, properties);

        return event;
    }

    // Send to Google Analytics (if available)
    function sendToGA(event) {
        if (typeof gtag === 'function') {
            gtag('event', event.event, {
                event_category: 'Book Landing',
                event_label: JSON.stringify(event.properties),
                value: event.properties.value || 0
            });
        } else if (typeof ga === 'function') {
            ga('send', 'event', 'Book Landing', event.event, JSON.stringify(event.properties));
        }
    }

    // Send to custom endpoint (implement your own)
    function sendToCustomEndpoint(event) {
        // Override this method to send to your analytics backend
        // Example:
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(event)
        // });
    }

    // Scroll depth tracking
    function setupScrollTracking() {
        let ticking = false;
        const reached = new Set();

        function updateScrollDepth() {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const percentage = Math.round((scrolled / scrollHeight) * 100);

            state.scrollDepthReached = Math.max(state.scrollDepthReached, percentage);

            // Track milestones
            config.scrollMilestones.forEach(milestone => {
                if (percentage >= milestone && !reached.has(milestone)) {
                    reached.add(milestone);
                    track('scroll_depth', {
                        depth: milestone,
                        time_to_reach: Date.now() - state.startTime
                    });
                }
            });

            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollDepth);
                ticking = true;
            }
        }, { passive: true });
    }

    // Visibility tracking (time on page)
    function setupVisibilityTracking() {
        let visibleStart = Date.now();
        let totalVisibleTime = 0;

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                totalVisibleTime += Date.now() - visibleStart;
                track('visibility_hidden', {
                    visible_time: totalVisibleTime
                });
            } else {
                visibleStart = Date.now();
                track('visibility_visible');
            }
        });
    }

    // Track when user leaves
    function setupUnloadTracking() {
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - state.startTime;
            
            // Use sendBeacon for reliable delivery
            if (navigator.sendBeacon) {
                const data = JSON.stringify({
                    event: 'page_exit',
                    sessionId: state.sessionId,
                    timeOnPage,
                    scrollDepth: state.scrollDepthReached,
                    toolInteractions: state.toolInteractions
                });
                navigator.sendBeacon('/api/analytics', data);
            }

            track('page_exit', {
                time_on_page: timeOnPage,
                scroll_depth: state.scrollDepthReached
            });
        });
    }

    // Tool interaction tracking
    function trackToolStart(toolName) {
        if (!state.toolInteractions[toolName]) {
            state.toolInteractions[toolName] = {
                started: 0,
                completed: 0,
                totalTime: 0,
                lastStart: null
            };
        }
        
        state.toolInteractions[toolName].started++;
        state.toolInteractions[toolName].lastStart = Date.now();
        
        track('tool_start', { tool: toolName });
    }

    function trackToolComplete(toolName, result = {}) {
        const tool = state.toolInteractions[toolName];
        if (tool && tool.lastStart) {
            tool.completed++;
            tool.totalTime += Date.now() - tool.lastStart;
            tool.lastStart = null;
        }
        
        track('tool_complete', { 
            tool: toolName,
            result_type: result.type || 'unknown',
            time_to_complete: tool ? tool.totalTime : 0
        });
    }

    function trackToolInteraction(toolName, action, details = {}) {
        track('tool_interaction', {
            tool: toolName,
            action,
            ...details
        });
    }

    // Assessment tracking
    function trackAssessmentStart() {
        track('assessment_start');
    }

    function trackAssessmentQuestion(questionIndex, answer) {
        track('assessment_answer', {
            question: questionIndex,
            answer
        });
    }

    function trackAssessmentComplete(resultType) {
        track('assessment_complete', {
            result_type: resultType
        });
    }

    // Conversion tracking
    function trackEmailCapture(source) {
        track('email_capture', { source });
    }

    function trackOfferView(tier) {
        track('offer_view', { tier });
    }

    function trackOfferClick(tier) {
        track('offer_click', { tier });
    }

    function trackPurchase(tier, amount) {
        track('purchase', { 
            tier,
            value: amount 
        });
    }

    // Prism/lens interaction tracking
    function trackLensSwitch(fromLens, toLens) {
        track('lens_switch', {
            from: fromLens,
            to: toLens
        });
    }

    // Get analytics summary
    function getSummary() {
        return {
            sessionId: state.sessionId,
            duration: Date.now() - state.startTime,
            scrollDepth: state.scrollDepthReached,
            toolInteractions: state.toolInteractions,
            eventCount: state.events.length
        };
    }

    // Debug logging
    function log(...args) {
        if (config.debug) {
            console.log('[BookAnalytics]', ...args);
        }
    }

    // Public API
    return {
        init,
        track,
        trackToolStart,
        trackToolComplete,
        trackToolInteraction,
        trackAssessmentStart,
        trackAssessmentQuestion,
        trackAssessmentComplete,
        trackEmailCapture,
        trackOfferView,
        trackOfferClick,
        trackPurchase,
        trackLensSwitch,
        getSummary,
        
        // For testing/debugging
        getState: () => ({ ...state }),
        setDebug: (debug) => { config.debug = debug; }
    };
})();

// Auto-initialize if not in module context
if (typeof module === 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        BookAnalytics.init();
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BookAnalytics;
}


