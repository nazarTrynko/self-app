/**
 * Book Genesis Engine — Assessment Engine
 * Reusable assessment system for book landing pages
 * 
 * Supports: Multi-question assessments, result typing, CTA integration
 */

const AssessmentEngine = (function() {
    'use strict';

    // Default configuration
    const defaultConfig = {
        containerId: 'assessment',
        questions: [],
        resultTypes: {},
        scoringMethod: 'simple', // 'simple', 'weighted', 'custom'
        showProgress: true,
        animateTransitions: true,
        onStart: () => {},
        onAnswer: () => {},
        onComplete: () => {}
    };

    // Create assessment instance
    function create(config) {
        const settings = { ...defaultConfig, ...config };
        const container = document.getElementById(settings.containerId);
        
        if (!container) {
            console.error(`Assessment container not found: ${settings.containerId}`);
            return null;
        }

        // State
        let currentQuestion = 0;
        let answers = [];
        let isComplete = false;

        // Render assessment
        function render() {
            container.innerHTML = `
                <div class="assessment" data-state="intro">
                    ${renderIntro()}
                    ${renderQuestions()}
                    ${renderResults()}
                </div>
            `;
            bindEvents();
        }

        function renderIntro() {
            return `
                <div class="assessment-intro">
                    <span class="section-label">Quick Assessment</span>
                    <h3 class="assessment-title">Discover Your Type</h3>
                    <p class="assessment-desc">
                        Answer ${settings.questions.length} questions to reveal your transformation path.
                    </p>
                    <button class="assessment-start-btn btn btn-primary">
                        Begin Assessment
                    </button>
                </div>
            `;
        }

        function renderQuestions() {
            return `
                <div class="assessment-questions" style="display: none;">
                    ${settings.showProgress ? renderProgress() : ''}
                    <div class="questions-container">
                        ${settings.questions.map((q, i) => renderQuestion(q, i)).join('')}
                    </div>
                </div>
            `;
        }

        function renderProgress() {
            return `
                <div class="assessment-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                    <span class="progress-text">Question 1 of ${settings.questions.length}</span>
                </div>
            `;
        }

        function renderQuestion(question, index) {
            return `
                <div class="assessment-question ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <p class="question-text">${question.text}</p>
                    <div class="question-options">
                        ${question.options.map((opt, i) => `
                            <button class="question-option" data-value="${opt.value}" data-index="${i}">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function renderResults() {
            return `
                <div class="assessment-result" style="display: none;">
                    <span class="result-label">Your Type</span>
                    <h3 class="result-title"></h3>
                    <p class="result-description"></p>
                    <div class="result-insights"></div>
                    <button class="result-cta btn btn-primary">
                        Explore Your Path
                    </button>
                </div>
            `;
        }

        // Event binding
        function bindEvents() {
            // Start button
            container.querySelector('.assessment-start-btn')?.addEventListener('click', start);
            
            // Option buttons
            container.querySelectorAll('.question-option').forEach(btn => {
                btn.addEventListener('click', handleAnswer);
            });
            
            // Result CTA
            container.querySelector('.result-cta')?.addEventListener('click', () => {
                const result = calculateResult();
                settings.onComplete(result, answers);
                
                // Scroll to offer section if exists
                const offerSection = document.getElementById('offer') || 
                                    document.querySelector('.offer-section');
                if (offerSection) {
                    offerSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Start assessment
        function start() {
            currentQuestion = 0;
            answers = [];
            isComplete = false;
            
            container.querySelector('.assessment').dataset.state = 'questions';
            container.querySelector('.assessment-intro').style.display = 'none';
            container.querySelector('.assessment-questions').style.display = 'block';
            container.querySelector('.assessment-result').style.display = 'none';
            
            updateProgress();
            
            // Track
            if (typeof BookAnalytics !== 'undefined') {
                BookAnalytics.trackAssessmentStart();
            }
            
            settings.onStart();
        }

        // Handle answer selection
        function handleAnswer(e) {
            const value = e.target.dataset.value;
            const questionIndex = currentQuestion;
            
            // Store answer
            answers.push({
                question: questionIndex,
                value: value,
                questionText: settings.questions[questionIndex].text
            });
            
            // Visual feedback
            e.target.classList.add('selected');
            
            // Track
            if (typeof BookAnalytics !== 'undefined') {
                BookAnalytics.trackAssessmentQuestion(questionIndex, value);
            }
            
            settings.onAnswer(questionIndex, value);
            
            // Proceed to next question or show result
            setTimeout(() => {
                if (currentQuestion < settings.questions.length - 1) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                    updateProgress();
                } else {
                    showResult();
                }
            }, settings.animateTransitions ? 300 : 0);
        }

        // Show specific question
        function showQuestion(index) {
            const questions = container.querySelectorAll('.assessment-question');
            questions.forEach((q, i) => {
                if (settings.animateTransitions) {
                    if (i === index) {
                        q.classList.add('active');
                        q.style.animation = 'fadeInUp 0.3s ease forwards';
                    } else {
                        q.classList.remove('active');
                    }
                } else {
                    q.classList.toggle('active', i === index);
                }
            });
        }

        // Update progress indicator
        function updateProgress() {
            if (!settings.showProgress) return;
            
            const progress = ((currentQuestion + 1) / settings.questions.length) * 100;
            const progressFill = container.querySelector('.progress-fill');
            const progressText = container.querySelector('.progress-text');
            
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            if (progressText) {
                progressText.textContent = `Question ${currentQuestion + 1} of ${settings.questions.length}`;
            }
        }

        // Calculate result based on answers
        function calculateResult() {
            switch (settings.scoringMethod) {
                case 'weighted':
                    return calculateWeightedResult();
                case 'custom':
                    return settings.customScoring ? settings.customScoring(answers) : null;
                default:
                    return calculateSimpleResult();
            }
        }

        // Simple majority scoring
        function calculateSimpleResult() {
            const counts = {};
            answers.forEach(a => {
                counts[a.value] = (counts[a.value] || 0) + 1;
            });
            
            const topValue = Object.keys(counts).reduce((a, b) => 
                counts[a] > counts[b] ? a : b
            );
            
            return settings.resultTypes[topValue] || settings.resultTypes.default || {
                type: topValue,
                title: 'Your Result',
                description: 'Based on your answers, you show a unique pattern.'
            };
        }

        // Weighted scoring (sum of weights per type)
        function calculateWeightedResult() {
            const scores = {};
            
            answers.forEach((answer, i) => {
                const question = settings.questions[i];
                const option = question.options.find(o => o.value === answer.value);
                
                if (option && option.weights) {
                    Object.entries(option.weights).forEach(([type, weight]) => {
                        scores[type] = (scores[type] || 0) + weight;
                    });
                }
            });
            
            const topType = Object.keys(scores).reduce((a, b) => 
                scores[a] > scores[b] ? a : b
            );
            
            return settings.resultTypes[topType] || settings.resultTypes.default;
        }

        // Show result
        function showResult() {
            isComplete = true;
            const result = calculateResult();
            
            container.querySelector('.assessment').dataset.state = 'result';
            container.querySelector('.assessment-questions').style.display = 'none';
            
            const resultEl = container.querySelector('.assessment-result');
            resultEl.querySelector('.result-title').textContent = result.title;
            resultEl.querySelector('.result-description').textContent = result.description;
            
            // Add insights if available
            if (result.insights) {
                const insightsEl = resultEl.querySelector('.result-insights');
                insightsEl.innerHTML = result.insights.map(insight => `
                    <div class="insight-item">
                        <span class="insight-icon">${insight.icon || '→'}</span>
                        <span class="insight-text">${insight.text}</span>
                    </div>
                `).join('');
            }
            
            resultEl.style.display = 'block';
            
            if (settings.animateTransitions) {
                resultEl.style.animation = 'fadeInUp 0.5s ease forwards';
            }
            
            // Track
            if (typeof BookAnalytics !== 'undefined') {
                BookAnalytics.trackAssessmentComplete(result.type);
            }
        }

        // Public methods
        function reset() {
            currentQuestion = 0;
            answers = [];
            isComplete = false;
            render();
        }

        function getAnswers() {
            return [...answers];
        }

        function getResult() {
            if (!isComplete) return null;
            return calculateResult();
        }

        function goToQuestion(index) {
            if (index >= 0 && index < settings.questions.length) {
                currentQuestion = index;
                answers = answers.slice(0, index);
                showQuestion(index);
                updateProgress();
            }
        }

        // Initialize
        render();

        // Return public API
        return {
            start,
            reset,
            getAnswers,
            getResult,
            goToQuestion,
            isComplete: () => isComplete,
            getCurrentQuestion: () => currentQuestion
        };
    }

    // Return factory
    return { create };
})();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssessmentEngine;
}


