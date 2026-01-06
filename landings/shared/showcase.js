/**
 * SELF Living Showcase
 * Interactive mind simulation, animations, and user behavior detection
 */

class SELFShowcase {
  constructor() {
    this.neuralBg = null;
    this.currentMind = 'oracle';
    this.mindWeights = {
      architect: 0.3,
      oracle: 0.5,
      critic: 0.3,
      creator: 0.3,
      guardian: 0.2
    };
    this.confidence = 0.5;
    this.blendMode = 'Multi-Perspective';
    this.behaviorDescription = 'Awaiting your prompt...';
    
    // User behavior tracking
    this.scrollSpeed = 0;
    this.lastScrollY = 0;
    this.lastScrollTime = Date.now();
    this.hoverTarget = null;
    this.readingTime = 0;
    
    // Typing animation
    this.taglines = [
      "I sense your presence.",
      "I'm learning your patterns.",
      "I'm ready to think with you.",
      "Every interaction teaches me.",
      "Your questions shape my reasoning."
    ];
    this.currentTaglineIndex = 0;
    this.isTyping = false;
    
    // Cognitive loop state
    this.cognitiveSteps = ['sense', 'remember', 'predict', 'reason', 'act', 'reflect'];
    this.currentCognitiveStep = 0;
    
    // Signal weights for mind activation
    this.signalWeights = {
      code: { architect: 0.8, oracle: 0.2, critic: 0.4, creator: 0.2, guardian: 0.3 },
      question: { architect: 0.3, oracle: 0.8, critic: 0.3, creator: 0.4, guardian: 0.2 },
      review: { architect: 0.3, oracle: 0.3, critic: 0.9, creator: 0.1, guardian: 0.4 },
      creative: { architect: 0.2, oracle: 0.4, critic: 0.2, creator: 0.9, guardian: 0.1 },
      destructive: { architect: 0.3, oracle: 0.2, critic: 0.6, creator: 0.1, guardian: 0.95 },
      uncertain: { architect: 0.3, oracle: 0.7, critic: 0.4, creator: 0.5, guardian: 0.3 }
    };
    
    // Keywords for signal detection
    this.keywords = {
      code: ['build', 'implement', 'create', 'code', 'function', 'api', 'database', 'deploy'],
      question: ['should', 'what', 'how', 'why', 'which', 'decide', 'choose', 'best'],
      review: ['review', 'check', 'validate', 'test', 'verify', 'audit', 'examine'],
      creative: ['brainstorm', 'ideas', 'innovate', 'imagine', 'explore', 'possibilities', 'alternative'],
      destructive: ['delete', 'drop', 'remove', 'destroy', 'production', 'migrate', 'truncate'],
      uncertain: ['unsure', 'uncertain', 'confused', 'torn', 'maybe', 'tradeoff', 'risk']
    };
    
    this.init();
  }
  
  init() {
    // Initialize neural background
    const canvas = document.getElementById('neuralCanvas');
    if (canvas && window.NeuralConsciousness) {
      this.neuralBg = new window.NeuralConsciousness(canvas);
    }
    
    // Start typing animation
    this.startTypingAnimation();
    
    // Start cognitive loop animation
    this.startCognitiveLoop();
    
    // Bind events
    this.bindEvents();
    
    // Initialize intersection observer for scroll animations
    this.initScrollObserver();
    
    // Show mind indicator after delay
    setTimeout(() => {
      const indicator = document.querySelector('.mind-indicator');
      if (indicator) indicator.classList.add('visible');
    }, 2000);
    
    // Start behavior detection
    this.startBehaviorDetection();
  }
  
  bindEvents() {
    // Prompt input handling
    const promptInput = document.getElementById('promptInput');
    if (promptInput) {
      promptInput.addEventListener('input', (e) => this.analyzePrompt(e.target.value));
      promptInput.addEventListener('focus', () => this.setActiveMind('oracle', 0.6));
    }
    
    // Example prompt clicks
    document.querySelectorAll('.example-prompt').forEach(btn => {
      btn.addEventListener('click', () => {
        const prompt = btn.textContent;
        if (promptInput) {
          promptInput.value = prompt;
          this.analyzePrompt(prompt);
        }
      });
    });
    
    // Track scroll for behavior detection
    window.addEventListener('scroll', () => this.onScroll());
    
    // Track mouse for hover detection
    document.addEventListener('mouseover', (e) => this.onHover(e));
  }
  
  // ============================================
  // Typing Animation
  // ============================================
  
  startTypingAnimation() {
    const taglineEl = document.getElementById('typingTagline');
    if (!taglineEl) return;
    
    this.typeTagline(taglineEl, this.taglines[0]);
  }
  
  typeTagline(element, text) {
    if (this.isTyping) return;
    this.isTyping = true;
    
    const textSpan = element.querySelector('.text') || element;
    textSpan.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        textSpan.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        
        // Wait, then erase and type next
        setTimeout(() => {
          this.eraseTagline(element, () => {
            this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
            this.typeTagline(element, this.taglines[this.currentTaglineIndex]);
          });
        }, 3000);
      }
    }, 60);
  }
  
  eraseTagline(element, callback) {
    const textSpan = element.querySelector('.text') || element;
    let text = textSpan.textContent;
    
    const eraseInterval = setInterval(() => {
      if (text.length > 0) {
        text = text.slice(0, -1);
        textSpan.textContent = text;
      } else {
        clearInterval(eraseInterval);
        this.isTyping = false;
        callback();
      }
    }, 30);
  }
  
  // ============================================
  // Cognitive Loop Animation
  // ============================================
  
  startCognitiveLoop() {
    setInterval(() => {
      this.advanceCognitiveStep();
    }, 2000);
  }
  
  advanceCognitiveStep() {
    // Remove active from all steps
    document.querySelectorAll('.cognitive-step').forEach(step => {
      step.classList.remove('active');
    });
    
    // Activate current step
    const currentStepEl = document.querySelector(`.cognitive-step[data-step="${this.cognitiveSteps[this.currentCognitiveStep]}"]`);
    if (currentStepEl) {
      currentStepEl.classList.add('active');
    }
    
    // Advance to next step
    this.currentCognitiveStep = (this.currentCognitiveStep + 1) % this.cognitiveSteps.length;
  }
  
  // ============================================
  // Mind Analysis & Blending
  // ============================================
  
  analyzePrompt(text) {
    if (!text || text.length < 3) {
      this.resetMindWeights();
      return;
    }
    
    const lowerText = text.toLowerCase();
    
    // Detect signals
    const detectedSignals = {};
    
    Object.entries(this.keywords).forEach(([signal, words]) => {
      const matchCount = words.filter(word => lowerText.includes(word)).length;
      if (matchCount > 0) {
        detectedSignals[signal] = Math.min(1, matchCount * 0.4);
      }
    });
    
    // Calculate mind weights
    const newWeights = { architect: 0.2, oracle: 0.2, critic: 0.2, creator: 0.2, guardian: 0.2 };
    
    Object.entries(detectedSignals).forEach(([signal, strength]) => {
      const signalWeights = this.signalWeights[signal];
      Object.entries(signalWeights).forEach(([mind, weight]) => {
        newWeights[mind] += weight * strength;
      });
    });
    
    // Normalize weights to max 1.0
    const maxWeight = Math.max(...Object.values(newWeights));
    if (maxWeight > 1) {
      Object.keys(newWeights).forEach(mind => {
        newWeights[mind] /= maxWeight;
      });
    }
    
    // Update weights with smoothing
    Object.keys(this.mindWeights).forEach(mind => {
      this.mindWeights[mind] = this.mindWeights[mind] * 0.3 + newWeights[mind] * 0.7;
    });
    
    // Determine primary mind and blend mode
    this.updateBlendState();
    
    // Update UI
    this.updateMindVisualization();
  }
  
  resetMindWeights() {
    this.mindWeights = {
      architect: 0.3,
      oracle: 0.5,
      critic: 0.3,
      creator: 0.3,
      guardian: 0.2
    };
    this.blendMode = 'Awaiting Input';
    this.confidence = 0.5;
    this.behaviorDescription = 'Awaiting your prompt...';
    this.updateMindVisualization();
  }
  
  updateBlendState() {
    // Find primary and secondary minds
    const sorted = Object.entries(this.mindWeights)
      .sort((a, b) => b[1] - a[1]);
    
    const primary = sorted[0];
    const secondary = sorted[1];
    
    this.currentMind = primary[0];
    
    // Determine blend mode
    if (primary[1] >= 0.7 && secondary[1] < 0.4) {
      this.blendMode = `${this.capitalize(primary[0])}-Dominant`;
    } else if (primary[1] >= 0.5 && secondary[1] >= 0.4) {
      this.blendMode = `${this.capitalize(primary[0])} + ${this.capitalize(secondary[0])}`;
    } else if (sorted.filter(s => s[1] >= 0.4).length >= 3) {
      this.blendMode = 'Multi-Perspective';
    } else {
      this.blendMode = 'Balanced Blend';
    }
    
    // Calculate confidence
    this.confidence = Math.min(0.95, 0.4 + primary[1] * 0.4 + (primary[1] - secondary[1]) * 0.2);
    
    // Determine behavior
    if (this.confidence > 0.9) {
      this.behaviorDescription = 'Acting immediately...';
    } else if (this.confidence > 0.7) {
      this.behaviorDescription = 'Acting with narration...';
    } else if (this.confidence > 0.5) {
      this.behaviorDescription = "I'll propose options for your review.";
    } else {
      this.behaviorDescription = 'Let me ask some clarifying questions first.';
    }
    
    // Update neural background
    if (this.neuralBg) {
      this.neuralBg.setActiveMind(this.currentMind, primary[1]);
    }
    
    // Update mind indicator
    this.updateMindIndicator();
  }
  
  updateMindVisualization() {
    // Update mind bars
    Object.entries(this.mindWeights).forEach(([mind, weight]) => {
      const bar = document.querySelector(`.mind-bar[data-mind="${mind}"]`);
      if (bar) {
        const fill = bar.querySelector('.mind-bar-fill');
        const value = bar.querySelector('.mind-bar-value');
        
        if (fill) fill.style.width = `${weight * 100}%`;
        if (value) value.textContent = weight.toFixed(2);
        
        // Highlight active minds
        bar.classList.toggle('active', weight >= 0.5);
      }
    });
    
    // Update blend result
    const blendModeEl = document.getElementById('blendMode');
    const confidenceValueEl = document.getElementById('confidenceValue');
    const confidenceFillEl = document.getElementById('confidenceFill');
    const behaviorEl = document.getElementById('behaviorPreview');
    
    if (blendModeEl) blendModeEl.textContent = this.blendMode;
    if (confidenceValueEl) confidenceValueEl.textContent = this.confidence.toFixed(2);
    if (confidenceFillEl) confidenceFillEl.style.width = `${this.confidence * 100}%`;
    if (behaviorEl) behaviorEl.textContent = `"${this.behaviorDescription}"`;
  }
  
  updateMindIndicator() {
    const indicator = document.querySelector('.mind-indicator');
    if (!indicator) return;
    
    indicator.setAttribute('data-mind', this.currentMind);
    
    const label = indicator.querySelector('.mind-indicator-label');
    if (label) {
      label.textContent = `${this.capitalize(this.currentMind)} Active`;
    }
  }
  
  setActiveMind(mind, intensity = 0.7) {
    this.currentMind = mind;
    if (this.neuralBg) {
      this.neuralBg.setActiveMind(mind, intensity);
    }
    this.updateMindIndicator();
  }
  
  // ============================================
  // User Behavior Detection
  // ============================================
  
  startBehaviorDetection() {
    // Periodically check user behavior and adjust mind
    setInterval(() => {
      this.analyzeBehavior();
    }, 1000);
  }
  
  onScroll() {
    const now = Date.now();
    const scrollY = window.scrollY;
    const timeDelta = now - this.lastScrollTime;
    
    if (timeDelta > 0) {
      this.scrollSpeed = Math.abs(scrollY - this.lastScrollY) / timeDelta * 1000;
    }
    
    this.lastScrollY = scrollY;
    this.lastScrollTime = now;
  }
  
  onHover(e) {
    // Check what the user is hovering over
    const target = e.target;
    
    if (target.closest('code') || target.closest('.terminal-line')) {
      this.hoverTarget = 'code';
    } else if (target.closest('.scenario')) {
      this.hoverTarget = 'scenario';
    } else if (target.closest('.command-line')) {
      this.hoverTarget = 'command';
    } else {
      this.hoverTarget = null;
    }
  }
  
  analyzeBehavior() {
    // Detect reading behavior
    if (this.scrollSpeed < 50) {
      this.readingTime++;
    } else {
      this.readingTime = 0;
    }
    
    // Adjust mind based on behavior (only when not actively typing)
    const promptInput = document.getElementById('promptInput');
    if (promptInput && document.activeElement === promptInput) return;
    
    let detectedMind = 'oracle';
    let intensity = 0.5;
    
    // Fast scrolling → Guardian (ensuring they don't miss anything)
    if (this.scrollSpeed > 200) {
      detectedMind = 'guardian';
      intensity = 0.6;
    }
    // Hovering on code → Architect
    else if (this.hoverTarget === 'code') {
      detectedMind = 'architect';
      intensity = 0.7;
    }
    // Reading slowly → Oracle (contemplative)
    else if (this.readingTime > 3) {
      detectedMind = 'oracle';
      intensity = 0.65;
    }
    // Default
    else {
      detectedMind = 'oracle';
      intensity = 0.5;
    }
    
    // Smooth transition
    if (detectedMind !== this.currentMind) {
      this.setActiveMind(detectedMind, intensity);
    }
  }
  
  // ============================================
  // Scroll Observer for Animations
  // ============================================
  
  initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    });
    
    // Observe scenarios
    document.querySelectorAll('.scenario').forEach(el => {
      observer.observe(el);
    });
    
    // Observe other animated elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }
  
  // ============================================
  // Utilities
  // ============================================
  
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.selfShowcase = new SELFShowcase();
});

