/**
 * SYNTHESIS UNIVERSE - Tools Framework
 * Base JavaScript for interactive transformation tools
 * 
 * Tool Types:
 * - Mapper: Visualize state (inputs → visual map)
 * - Analyzer: Analyze text (input → scores + insights)
 * - Generator: Create output (selections → personalized script)
 */

// ============================================
// CORE TOOL CLASS
// ============================================

class SynthesisTool {
    constructor(config) {
        this.id = config.id;
        this.type = config.type; // 'mapper' | 'analyzer' | 'generator'
        this.name = config.name;
        this.form = document.getElementById(`${this.id}Form`);
        this.results = document.getElementById(`${this.id}Results`);
        this.onSubmit = config.onSubmit || this.defaultSubmit.bind(this);
        this.onGenerate = config.onGenerate || (() => ({}));
        
        this.init();
    }

    init() {
        if (!this.form) {
            console.warn(`Tool form not found: ${this.id}Form`);
            return;
        }

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        // Collect inputs
        const inputs = this.collectInputs();
        
        // Validate
        if (!this.validate(inputs)) {
            return;
        }

        // Track start
        this.track('tool_start', { tool: this.id, type: this.type });

        // Process
        const result = this.onGenerate(inputs);

        // Display
        this.displayResults(result);

        // Track completion
        this.track('tool_complete', { tool: this.id, type: this.type });

        // Show results
        this.showResults();
    }

    collectInputs() {
        const inputs = {};
        const formData = new FormData(this.form);
        
        // Get all form fields
        this.form.querySelectorAll('input, textarea, select').forEach(field => {
            if (field.id) {
                inputs[field.id] = field.value.trim();
            }
        });

        return inputs;
    }

    validate(inputs) {
        const values = Object.values(inputs);
        const hasEmpty = values.some(v => !v);
        
        if (hasEmpty) {
            this.showError('Please fill in all fields');
            return false;
        }

        return true;
    }

    displayResults(result) {
        // Override in subclass or config
        console.log('Results:', result);
    }

    showResults() {
        if (this.results) {
            this.results.classList.remove('hidden');
            this.results.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    hideResults() {
        if (this.results) {
            this.results.classList.add('hidden');
        }
    }

    showError(message) {
        // Simple alert for now - could be enhanced with toast
        alert(message);
    }

    track(event, data = {}) {
        // Analytics tracking - override with your provider
        console.log('Track:', event, data);
        
        if (typeof window.track === 'function') {
            window.track(event, data);
        }
        
        // Google Analytics 4
        if (typeof gtag === 'function') {
            gtag('event', event, data);
        }
        
        // Plausible
        if (typeof plausible === 'function') {
            plausible(event, { props: data });
        }
    }

    defaultSubmit() {
        console.log('Default submit - override onSubmit or onGenerate');
    }
}

// ============================================
// MAPPER TOOL
// ============================================

class MapperTool extends SynthesisTool {
    constructor(config) {
        super({ ...config, type: 'mapper' });
        this.nodes = config.nodes || ['before', 'now', 'after'];
        this.insightGenerator = config.insightGenerator || this.defaultInsights;
    }

    displayResults(result) {
        // Display map nodes
        this.nodes.forEach((node, index) => {
            const display = document.querySelector(`#${this.id}_display${index + 1} .node-content`);
            if (display && result.nodes && result.nodes[index]) {
                display.textContent = this.truncate(result.nodes[index], 60);
            }
        });

        // Display insights
        if (result.insights) {
            const container = document.getElementById(`${this.id}Insights`);
            if (container) {
                container.innerHTML = this.renderInsights(result.insights);
            }
        }
    }

    renderInsights(insights) {
        return Object.entries(insights).map(([key, value]) => `
            <div class="insight-card ${key}">
                <h5>${this.formatLabel(key)}</h5>
                <p>${value}</p>
            </div>
        `).join('');
    }

    defaultInsights(inputs) {
        return {
            losses: "What you're releasing served you well. It doesn't have to serve you now.",
            gains: "In uncertainty, you're developing new capabilities.",
            constraints: "What holds you back may be protecting something important.",
            signals: "Your future self is already calling. Listen.",
            next: "Take one small action toward who you're becoming."
        };
    }

    truncate(str, len) {
        return str.length <= len ? str : str.substring(0, len) + '...';
    }

    formatLabel(key) {
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    }
}

// ============================================
// ANALYZER TOOL
// ============================================

class AnalyzerTool extends SynthesisTool {
    constructor(config) {
        super({ ...config, type: 'analyzer' });
        this.patterns = config.patterns || {};
        this.highlightClasses = config.highlightClasses || {};
        this.scoreCalculator = config.scoreCalculator || this.defaultScores;
        this.recommendationGenerator = config.recommendationGenerator || this.defaultRecommendations;
    }

    displayResults(result) {
        // Display highlighted text
        const display = document.getElementById(`${this.id}Display`);
        if (display && result.highlightedText) {
            display.innerHTML = result.highlightedText;
        }

        // Display scores
        const scoresContainer = document.getElementById(`${this.id}Scores`);
        if (scoresContainer && result.scores) {
            scoresContainer.innerHTML = this.renderScores(result.scores);
        }

        // Display recommendations
        const recList = document.getElementById(`${this.id}RecommendationsList`);
        if (recList && result.recommendations) {
            recList.innerHTML = result.recommendations.map(r => `<li>${r}</li>`).join('');
        }
    }

    highlightText(text, matches) {
        let highlighted = text;
        
        for (const [category, words] of Object.entries(matches)) {
            const className = this.highlightClasses[category] || `highlight-${category}`;
            for (const word of words) {
                const regex = new RegExp(`(${this.escapeRegex(word)})`, 'gi');
                highlighted = highlighted.replace(regex, `<span class="${className}">$1</span>`);
            }
        }

        return highlighted;
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    renderScores(scores) {
        return Object.entries(scores).map(([key, score]) => {
            const isNumeric = typeof score.value === 'number';
            const scoreClass = this.getScoreClass(score.value, isNumeric);
            const displayValue = isNumeric ? `${score.value}/10` : score.value;

            return `
                <div class="score-card">
                    <h5>${score.label}</h5>
                    ${score.hint ? `<p class="score-hint">${score.hint}</p>` : ''}
                    <div class="score-value ${scoreClass}">${displayValue}</div>
                </div>
            `;
        }).join('');
    }

    getScoreClass(value, isNumeric) {
        if (isNumeric) {
            return value >= 7 ? 'high' : value >= 4 ? 'medium' : 'low';
        }
        // For text values like 'Redemption', 'Contamination'
        const positives = ['redemption', 'high', 'strong', 'good'];
        const negatives = ['contamination', 'low', 'weak', 'poor'];
        
        const lower = String(value).toLowerCase();
        if (positives.some(p => lower.includes(p))) return 'high';
        if (negatives.some(n => lower.includes(n))) return 'low';
        return 'medium';
    }

    defaultScores(inputs) {
        return {
            score1: { value: 5, label: 'Score 1', hint: 'Description' }
        };
    }

    defaultRecommendations(analysis) {
        return ['Consider this approach...', 'Try this technique...'];
    }
}

// ============================================
// GENERATOR TOOL
// ============================================

class GeneratorTool extends SynthesisTool {
    constructor(config) {
        super({ ...config, type: 'generator' });
        this.outputTemplate = config.outputTemplate || this.defaultTemplate;
    }

    displayResults(result) {
        const container = document.getElementById(`${this.id}Output`);
        if (!container) return;

        container.innerHTML = this.outputTemplate(result);
    }

    defaultTemplate(result) {
        return `
            <div class="output-card">
                <h5>Generated Output</h5>
                <p>${JSON.stringify(result, null, 2)}</p>
            </div>
        `;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

const ToolUtils = {
    /**
     * Copy text to clipboard with feedback
     */
    copyToClipboard(text, successMessage = 'Copied to clipboard!') {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast(successMessage);
        }).catch(err => {
            console.error('Copy failed:', err);
            this.showToast('Failed to copy', 'error');
        });
    },

    /**
     * Show toast notification
     */
    showToast(message, type = 'success') {
        let toast = document.getElementById('tool-toast');
        
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'tool-toast';
            toast.style.cssText = `
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                padding: 1rem 2rem;
                font-size: 0.9rem;
                font-weight: 500;
                z-index: 1000;
                opacity: 0;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.background = type === 'error' ? '#e11d48' : '#d4a574';
        toast.style.color = type === 'error' ? '#fff' : '#0a0908';
        
        // Show
        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
            toast.style.opacity = '1';
        });

        // Hide after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.opacity = '0';
        }, 3000);
    },

    /**
     * Save data to localStorage
     */
    saveLocal(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('LocalStorage save failed:', e);
            return false;
        }
    },

    /**
     * Load data from localStorage
     */
    loadLocal(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('LocalStorage load failed:', e);
            return null;
        }
    },

    /**
     * Export results as text file
     */
    exportAsText(filename, content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    },

    /**
     * Export results as JSON
     */
    exportAsJSON(filename, data) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Format date for display
     */
    formatDate(date = new Date()) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

// ============================================
// PATTERN MATCHING UTILITIES
// ============================================

const PatternMatcher = {
    /**
     * Find pattern matches in text
     */
    findMatches(text, patterns) {
        const lower = text.toLowerCase();
        const matches = {};

        for (const [category, words] of Object.entries(patterns)) {
            matches[category] = [];
            for (const word of words) {
                if (lower.includes(word.toLowerCase())) {
                    matches[category].push(word);
                }
            }
        }

        return matches;
    },

    /**
     * Count pattern occurrences
     */
    countPatterns(text, patterns) {
        const matches = this.findMatches(text, patterns);
        const counts = {};

        for (const [category, words] of Object.entries(matches)) {
            counts[category] = words.length;
        }

        return counts;
    },

    /**
     * Calculate score based on pattern counts
     */
    calculateScore(count, { base = 3, multiplier = 2, max = 10 } = {}) {
        return Math.min(max, count * multiplier + base);
    }
};

// ============================================
// ANALYTICS HELPER
// ============================================

const ToolAnalytics = {
    /**
     * Track event with multiple providers
     */
    track(event, data = {}) {
        console.log('[Analytics]', event, data);

        // Google Analytics 4
        if (typeof gtag === 'function') {
            gtag('event', event, data);
        }

        // Plausible
        if (typeof plausible === 'function') {
            plausible(event, { props: data });
        }

        // PostHog
        if (typeof posthog === 'object' && posthog.capture) {
            posthog.capture(event, data);
        }

        // Custom global tracker
        if (typeof window.track === 'function') {
            window.track(event, data);
        }
    },

    /**
     * Track tool funnel
     */
    trackToolFunnel(toolId, step) {
        const steps = ['view', 'start', 'complete', 'share', 'convert'];
        const stepIndex = steps.indexOf(step);
        
        this.track(`tool_${step}`, {
            tool: toolId,
            step_index: stepIndex
        });
    }
};

// ============================================
// EXPORT
// ============================================

// Make available globally
window.SynthesisTool = SynthesisTool;
window.MapperTool = MapperTool;
window.AnalyzerTool = AnalyzerTool;
window.GeneratorTool = GeneratorTool;
window.ToolUtils = ToolUtils;
window.PatternMatcher = PatternMatcher;
window.ToolAnalytics = ToolAnalytics;

// ES Module export (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SynthesisTool,
        MapperTool,
        AnalyzerTool,
        GeneratorTool,
        ToolUtils,
        PatternMatcher,
        ToolAnalytics
    };
}


