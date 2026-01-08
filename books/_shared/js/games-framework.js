/**
 * SYNTHESIS UNIVERSE - Games Framework
 * Base JavaScript for mini-games that create engagement and practice
 * 
 * Game Types:
 * - Speed: Time-pressure challenges (e.g., Reframe Racer)
 * - Practice: Skill-building with streaks (e.g., Daily Ritual)
 * - Challenge: Social/competitive (e.g., Perspective Duel)
 */

// ============================================
// BASE GAME CLASS
// ============================================

class SynthesisGame {
    constructor(config) {
        this.id = config.id;
        this.name = config.name;
        this.type = config.type; // 'speed' | 'practice' | 'challenge'
        this.duration = config.duration || 60; // seconds
        this.container = document.getElementById(config.containerId || this.id);
        
        // State
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.timeLeft = this.duration;
        this.isPlaying = false;
        this.isPaused = false;
        
        // Callbacks
        this.onStart = config.onStart || (() => {});
        this.onEnd = config.onEnd || (() => {});
        this.onScore = config.onScore || (() => {});
        this.onCorrect = config.onCorrect || (() => {});
        this.onIncorrect = config.onIncorrect || (() => {});
        
        // Timer
        this.timer = null;
        
        this.init();
    }

    init() {
        // Override in subclass
    }

    start() {
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.timeLeft = this.duration;
        this.isPlaying = true;
        this.isPaused = false;

        this.track('game_start', { game: this.id, type: this.type });
        this.onStart();
        this.startTimer();
        this.updateDisplay();
    }

    pause() {
        if (!this.isPlaying) return;
        this.isPaused = true;
        this.stopTimer();
    }

    resume() {
        if (!this.isPlaying || !this.isPaused) return;
        this.isPaused = false;
        this.startTimer();
    }

    end() {
        this.isPlaying = false;
        this.stopTimer();
        
        this.track('game_complete', {
            game: this.id,
            score: this.score,
            max_streak: this.maxStreak,
            duration: this.duration - this.timeLeft
        });

        this.onEnd({
            score: this.score,
            streak: this.maxStreak,
            timeUsed: this.duration - this.timeLeft
        });

        this.showResults();
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (!this.isPaused) {
                this.tick();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    tick() {
        this.timeLeft--;
        this.updateDisplay();
        
        if (this.timeLeft <= 0) {
            this.end();
        }
    }

    addScore(points) {
        this.score += points;
        this.onScore(this.score);
        this.updateDisplay();
    }

    correct() {
        this.streak++;
        this.maxStreak = Math.max(this.maxStreak, this.streak);
        
        const points = this.calculatePoints();
        this.addScore(points);
        
        this.showFeedback('correct');
        this.onCorrect({ streak: this.streak, points });
    }

    incorrect() {
        this.streak = 0;
        this.showFeedback('incorrect');
        this.onIncorrect();
    }

    calculatePoints() {
        const base = 100;
        const timeBonus = Math.floor(this.timeLeft * 2);
        const streakMultiplier = Math.min(3, 1 + (this.streak * 0.1));
        return Math.floor((base + timeBonus) * streakMultiplier);
    }

    updateDisplay() {
        // Score
        const scoreEl = document.getElementById(`${this.id}-score`);
        if (scoreEl) scoreEl.textContent = this.score;

        // Timer
        const timerEl = document.getElementById(`${this.id}-timer`);
        if (timerEl) timerEl.textContent = this.timeLeft;

        // Streak
        const streakEl = document.getElementById(`${this.id}-streak`);
        if (streakEl) streakEl.textContent = this.streak;
    }

    showFeedback(type) {
        const feedbackEl = document.getElementById(`${this.id}-feedback`);
        if (!feedbackEl) return;

        feedbackEl.className = `game-feedback ${type}`;
        feedbackEl.textContent = type === 'correct' ? '✓' : '✗';
        
        setTimeout(() => {
            feedbackEl.className = 'game-feedback';
            feedbackEl.textContent = '';
        }, 500);
    }

    showResults() {
        // Override in subclass
    }

    track(event, data = {}) {
        console.log('[Game Analytics]', event, data);
        
        if (typeof window.ToolAnalytics !== 'undefined') {
            window.ToolAnalytics.track(event, data);
        }
    }

    /**
     * Generate shareable result text
     */
    getShareText() {
        return `🎮 ${this.name}\n` +
               `Score: ${this.score}\n` +
               `Max Streak: ${this.maxStreak}x\n` +
               `Can you beat my score?`;
    }

    /**
     * Share result
     */
    share() {
        const text = this.getShareText();
        
        if (navigator.share) {
            navigator.share({
                title: this.name,
                text: text,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(text + '\n' + window.location.href);
            if (typeof ToolUtils !== 'undefined') {
                ToolUtils.showToast('Copied to clipboard!');
            }
        }

        this.track('game_share', { game: this.id, score: this.score });
    }
}

// ============================================
// SPEED GAME (Time-pressure challenges)
// ============================================

class SpeedGame extends SynthesisGame {
    constructor(config) {
        super({ ...config, type: 'speed' });
        this.scenarios = config.scenarios || [];
        this.currentIndex = 0;
        this.answerTime = config.answerTime || 10; // seconds per answer
        this.answerTimer = null;
    }

    start() {
        this.currentIndex = 0;
        this.shuffleScenarios();
        super.start();
        this.showScenario();
    }

    shuffleScenarios() {
        // Fisher-Yates shuffle
        for (let i = this.scenarios.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.scenarios[i], this.scenarios[j]] = [this.scenarios[j], this.scenarios[i]];
        }
    }

    showScenario() {
        if (this.currentIndex >= this.scenarios.length) {
            this.end();
            return;
        }

        const scenario = this.scenarios[this.currentIndex];
        this.renderScenario(scenario);
        this.startAnswerTimer();
    }

    renderScenario(scenario) {
        const contentEl = document.getElementById(`${this.id}-content`);
        if (!contentEl) return;

        // Override in subclass for custom rendering
        contentEl.innerHTML = `
            <div class="scenario-text">${scenario.text}</div>
            <div class="scenario-options">
                ${scenario.options.map((opt, i) => `
                    <button class="scenario-option" data-index="${i}">${opt.text}</button>
                `).join('')}
            </div>
        `;

        // Attach event listeners
        contentEl.querySelectorAll('.scenario-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.handleAnswer(index);
            });
        });
    }

    startAnswerTimer() {
        // Optional: per-answer time limit
        if (this.answerTime && this.answerTime > 0) {
            this.answerTimer = setTimeout(() => {
                this.incorrect();
                this.nextScenario();
            }, this.answerTime * 1000);
        }
    }

    clearAnswerTimer() {
        if (this.answerTimer) {
            clearTimeout(this.answerTimer);
            this.answerTimer = null;
        }
    }

    handleAnswer(optionIndex) {
        this.clearAnswerTimer();
        
        const scenario = this.scenarios[this.currentIndex];
        const isCorrect = this.checkAnswer(scenario, optionIndex);

        if (isCorrect) {
            this.correct();
        } else {
            this.incorrect();
        }

        this.nextScenario();
    }

    checkAnswer(scenario, optionIndex) {
        // Override in subclass for custom validation
        return scenario.options[optionIndex]?.correct === true;
    }

    nextScenario() {
        this.currentIndex++;
        
        if (this.isPlaying) {
            setTimeout(() => this.showScenario(), 300);
        }
    }

    end() {
        this.clearAnswerTimer();
        super.end();
    }
}

// ============================================
// PRACTICE GAME (Streak-based daily practice)
// ============================================

class PracticeGame extends SynthesisGame {
    constructor(config) {
        super({ ...config, type: 'practice' });
        this.steps = config.steps || [];
        this.currentStep = 0;
        this.streakKey = `${this.id}_streak`;
        this.lastPlayKey = `${this.id}_lastPlay`;
    }

    init() {
        super.init();
        this.loadStreak();
    }

    loadStreak() {
        const lastPlay = localStorage.getItem(this.lastPlayKey);
        const savedStreak = parseInt(localStorage.getItem(this.streakKey) || '0');
        
        if (lastPlay) {
            const lastDate = new Date(lastPlay).toDateString();
            const today = new Date().toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();

            if (lastDate === today) {
                // Already played today
                this.dailyStreak = savedStreak;
                this.alreadyPlayedToday = true;
            } else if (lastDate === yesterday) {
                // Continuing streak
                this.dailyStreak = savedStreak;
                this.alreadyPlayedToday = false;
            } else {
                // Streak broken
                this.dailyStreak = 0;
                this.alreadyPlayedToday = false;
            }
        } else {
            this.dailyStreak = 0;
            this.alreadyPlayedToday = false;
        }
    }

    saveStreak() {
        localStorage.setItem(this.streakKey, this.dailyStreak.toString());
        localStorage.setItem(this.lastPlayKey, new Date().toISOString());
    }

    start() {
        this.currentStep = 0;
        super.start();
        this.showStep();
    }

    showStep() {
        if (this.currentStep >= this.steps.length) {
            this.complete();
            return;
        }

        const step = this.steps[this.currentStep];
        this.renderStep(step);
    }

    renderStep(step) {
        const contentEl = document.getElementById(`${this.id}-content`);
        if (!contentEl) return;

        contentEl.innerHTML = `
            <div class="practice-step">
                <div class="step-number">${this.currentStep + 1}/${this.steps.length}</div>
                <h3 class="step-title">${step.title}</h3>
                <p class="step-instruction">${step.instruction}</p>
                ${step.duration ? `<div class="step-timer">${step.duration} seconds</div>` : ''}
                <button class="step-complete-btn" id="${this.id}-step-btn">
                    ${step.buttonText || 'Done'}
                </button>
            </div>
        `;

        document.getElementById(`${this.id}-step-btn`).addEventListener('click', () => {
            this.completeStep();
        });

        // Auto-advance if duration specified
        if (step.duration) {
            setTimeout(() => {
                // Highlight button when time is up
                const btn = document.getElementById(`${this.id}-step-btn`);
                if (btn) btn.classList.add('ready');
            }, step.duration * 1000);
        }
    }

    completeStep() {
        this.currentStep++;
        this.addScore(100);
        this.showStep();
    }

    complete() {
        if (!this.alreadyPlayedToday) {
            this.dailyStreak++;
            this.saveStreak();
        }

        this.end();
    }

    showResults() {
        const contentEl = document.getElementById(`${this.id}-content`);
        if (!contentEl) return;

        contentEl.innerHTML = `
            <div class="practice-complete">
                <div class="complete-icon">✓</div>
                <h3>Practice Complete!</h3>
                <div class="streak-display">
                    <span class="streak-fire">🔥</span>
                    <span class="streak-count">${this.dailyStreak}</span>
                    <span class="streak-label">day streak</span>
                </div>
                ${this.alreadyPlayedToday ? 
                    '<p class="already-played">You already practiced today! Come back tomorrow.</p>' : 
                    '<p class="keep-going">Come back tomorrow to keep your streak!</p>'
                }
                <button class="share-btn" onclick="window.${this.id}Game.share()">Share</button>
            </div>
        `;
    }

    getShareText() {
        return `🔥 ${this.dailyStreak}-Day Streak!\n` +
               `I just completed my daily ${this.name} practice.\n` +
               `Join me:`;
    }
}

// ============================================
// REFRAME SCENARIOS (Example Content)
// ============================================

const ReframeScenarios = {
    basic: [
        {
            text: "A friend cancels plans at the last minute.",
            options: [
                { text: "They don't value my time", correct: false },
                { text: "Something came up - life happens", correct: true },
                { text: "They're avoiding me", correct: false }
            ]
        },
        {
            text: "You make a mistake at work.",
            options: [
                { text: "I'm learning and growing", correct: true },
                { text: "I'm not good enough", correct: false },
                { text: "Everyone will judge me", correct: false }
            ]
        },
        {
            text: "Someone criticizes your idea.",
            options: [
                { text: "My idea is worthless", correct: false },
                { text: "They're trying to help me improve", correct: true },
                { text: "They're jealous", correct: false }
            ]
        },
        {
            text: "You didn't get the job you applied for.",
            options: [
                { text: "I'll never succeed", correct: false },
                { text: "It wasn't the right fit - better is coming", correct: true },
                { text: "I'm unqualified for anything", correct: false }
            ]
        },
        {
            text: "A project takes longer than expected.",
            options: [
                { text: "I'm slow and inefficient", correct: false },
                { text: "I underestimated complexity - I'll plan better next time", correct: true },
                { text: "I should give up on big projects", correct: false }
            ]
        }
    ],

    advanced: [
        {
            text: "You've been trying to change a habit for months with no success.",
            options: [
                { text: "I lack willpower", correct: false },
                { text: "Each attempt teaches me what doesn't work", correct: true },
                { text: "I'm destined to stay the same", correct: false }
            ]
        },
        {
            text: "Someone you admire doesn't respond to your message.",
            options: [
                { text: "They're busy - successful people have full inboxes", correct: true },
                { text: "I'm not worth their time", correct: false },
                { text: "I should never reach out to anyone again", correct: false }
            ]
        }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

const GameUtils = {
    /**
     * Shuffle array in place
     */
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    /**
     * Get random item from array
     */
    randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Format time (seconds) as MM:SS
     */
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    /**
     * Generate unique ID
     */
    generateId() {
        return 'game_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Check if today
     */
    isToday(dateString) {
        return new Date(dateString).toDateString() === new Date().toDateString();
    },

    /**
     * Check if yesterday
     */
    isYesterday(dateString) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        return new Date(dateString).toDateString() === yesterday;
    }
};

// ============================================
// EXPORT
// ============================================

window.SynthesisGame = SynthesisGame;
window.SpeedGame = SpeedGame;
window.PracticeGame = PracticeGame;
window.ReframeScenarios = ReframeScenarios;
window.GameUtils = GameUtils;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SynthesisGame,
        SpeedGame,
        PracticeGame,
        ReframeScenarios,
        GameUtils
    };
}


