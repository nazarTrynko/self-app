/**
 * AI-Assisted Suggestions Engine
 * Provides intelligent recommendations for carousel design
 */

class AISuggestions {
    generate(template) {
        if (!template) {
            return '<p>No template loaded. Please select a template first.</p>';
        }

        const suggestions = [];
        
        // Analyze template
        const slideCount = template.slides.length;
        const hasGradients = template.slides.some(s => s.background?.type === 'gradient');
        const hasText = template.slides.some(s => s.elements?.some(e => e.type === 'text'));
        const hasShapes = template.slides.some(s => s.elements?.some(e => e.type === 'shape'));

        // Generate suggestions
        suggestions.push(this.generateSlideCountSuggestion(slideCount));
        suggestions.push(this.generateColorSuggestion(hasGradients));
        suggestions.push(this.generateLayoutSuggestion(template));
        suggestions.push(this.generateContentSuggestion(hasText, hasShapes));
        suggestions.push(this.generateAnimationSuggestion(template));

        return this.formatSuggestions(suggestions);
    }

    generateSlideCountSuggestion(count) {
        if (count < 3) {
            return {
                type: 'info',
                title: 'Slide Count',
                message: 'Consider adding more slides (3-7 optimal) for better engagement. Short carousels (1-2 slides) may feel incomplete.',
                action: 'Add 2-3 more slides to tell a complete story'
            };
        } else if (count > 10) {
            return {
                type: 'warning',
                title: 'Slide Count',
                message: 'Your carousel has many slides. Consider splitting into multiple carousels or reducing to 7-8 slides for better completion rates.',
                action: 'Review and consolidate related slides'
            };
        }
        return null;
    }

    generateColorSuggestion(hasGradients) {
        if (!hasGradients) {
            return {
                type: 'enhancement',
                title: 'Color Depth',
                message: 'Gradients add visual interest and depth. Consider using gradient backgrounds instead of solid colors.',
                action: 'Try gradient backgrounds: linear-gradient(135deg, #8b5cf6, #06b6d4)'
            };
        }
        return null;
    }

    generateLayoutSuggestion(template) {
        const layouts = template.slides.map(s => s.layout);
        const uniqueLayouts = [...new Set(layouts)];

        if (uniqueLayouts.length === 1 && layouts[0] === 'centered') {
            return {
                type: 'enhancement',
                title: 'Layout Variety',
                message: 'All slides use the same centered layout. Mixing layouts creates visual interest and guides the eye.',
                action: 'Try split layouts, asymmetric positioning, or layered compositions'
            };
        }
        return null;
    }

    generateContentSuggestion(hasText, hasShapes) {
        if (!hasText) {
            return {
                type: 'important',
                title: 'Text Content',
                message: 'Your carousel lacks text elements. Text helps convey your message clearly.',
                action: 'Add headings, quotes, or key messages to each slide'
            };
        }

        if (!hasShapes) {
            return {
                type: 'enhancement',
                title: 'Visual Elements',
                message: 'Shapes and geometric elements add visual interest and can guide attention.',
                action: 'Add circles, triangles, or abstract shapes as design elements'
            };
        }
        return null;
    }

    generateAnimationSuggestion(template) {
        const hasAnimations = template.animations && template.animations.length > 0;
        
        if (!hasAnimations) {
            return {
                type: 'enhancement',
                title: 'Transitions',
                message: 'Smooth transitions between slides improve user experience. Consider fade or slide animations.',
                action: 'Enable fade transitions for elegant slide changes'
            };
        }
        return null;
    }

    formatSuggestions(suggestions) {
        const validSuggestions = suggestions.filter(s => s !== null);

        if (validSuggestions.length === 0) {
            return `
                <div class="suggestion-card success">
                    <h3>✨ Great Work!</h3>
                    <p>Your carousel looks well-balanced. No major improvements needed.</p>
                </div>
            `;
        }

        return validSuggestions.map(s => `
            <div class="suggestion-card ${s.type}">
                <div class="suggestion-header">
                    <h3>${s.title}</h3>
                    <span class="suggestion-badge">${s.type}</span>
                </div>
                <p class="suggestion-message">${s.message}</p>
                <div class="suggestion-action">
                    <strong>💡 Suggestion:</strong> ${s.action}
                </div>
            </div>
        `).join('');
    }

    suggestTemplate(content) {
        // Analyze content and suggest best template
        const contentLower = content.toLowerCase();
        
        if (contentLower.includes('quote') || contentLower.includes('inspiration')) {
            return 'minimalist-quote-flow';
        }
        if (contentLower.includes('before') || contentLower.includes('after') || contentLower.includes('journey')) {
            return 'before-after-journey';
        }
        if (contentLower.includes('step') || contentLower.includes('process')) {
            return 'numbered-steps';
        }
        if (contentLower.includes('code') || contentLower.includes('programming')) {
            return 'code-poetry';
        }
        if (contentLower.includes('emotion') || contentLower.includes('feeling')) {
            return 'emotion-arc';
        }
        
        return 'minimalist-quote-flow'; // Default
    }

    suggestColorPalette(mood) {
        const palettes = {
            calm: ['#08080c', '#1a1a2e', '#2a2a3e'],
            energetic: ['#8b5cf6', '#06b6d4', '#f472b6'],
            professional: ['#0a0a0f', '#1a1a2e', '#2a2a3e'],
            warm: ['#1a0a1a', '#2a1a2a', '#3a2a3a'],
            cool: ['#0a1a1a', '#1a2a2a', '#2a3a3a']
        };

        return palettes[mood] || palettes.calm;
    }
}

// Initialize AI suggestions
window.AISuggestions = new AISuggestions();

// Add suggestion card styles
if (!document.getElementById('suggestion-styles')) {
    const style = document.createElement('style');
    style.id = 'suggestion-styles';
    style.textContent = `
        .suggestion-card {
            padding: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            margin-bottom: 16px;
        }
        
        .suggestion-card.important {
            border-left: 4px solid var(--accent-pink);
        }
        
        .suggestion-card.enhancement {
            border-left: 4px solid var(--accent-cyan);
        }
        
        .suggestion-card.info {
            border-left: 4px solid var(--accent-purple);
        }
        
        .suggestion-card.warning {
            border-left: 4px solid var(--accent-orange);
        }
        
        .suggestion-card.success {
            border-left: 4px solid #22c55e;
        }
        
        .suggestion-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        
        .suggestion-header h3 {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        
        .suggestion-badge {
            font-size: 0.75rem;
            padding: 4px 8px;
            background: var(--bg-tertiary);
            border-radius: 4px;
            color: var(--text-muted);
            text-transform: uppercase;
        }
        
        .suggestion-message {
            font-size: 0.875rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 12px;
        }
        
        .suggestion-action {
            font-size: 0.8125rem;
            color: var(--text-muted);
            padding: 12px;
            background: var(--bg-tertiary);
            border-radius: 8px;
            border-left: 3px solid var(--accent-purple);
        }
    `;
    document.head.appendChild(style);
}

