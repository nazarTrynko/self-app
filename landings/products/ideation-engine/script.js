// Ideation Engine v3.0 - Interactive Application
// Implements the Ideation Engine framework with /AGI integration

class IdeationEngine {
    constructor() {
        this.currentPhase = 0;
        this.userData = {};
        this.ideas = [];
        this.filters = ['PAIN', 'DISTRIBUTION', 'EMOTION', 'SCOPE', 'MOAT'];
        
        this.loadFromStorage();
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupCanvas();
        this.updateUI();
    }
    
    setupEventListeners() {
        // Start button
        document.getElementById('start-engine')?.addEventListener('click', () => {
            this.startEngine();
        });
        
        // Phase navigation
        document.querySelectorAll('.phase-nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const phase = parseInt(item.dataset.phase);
                this.navigateToPhase(phase);
            });
        });
        
        // Next/Prev buttons
        document.querySelectorAll('.btn-next').forEach(btn => {
            btn.addEventListener('click', () => {
                const nextPhase = parseInt(btn.dataset.nextPhase);
                this.navigateToPhase(nextPhase);
            });
        });
        
        document.querySelectorAll('.btn-prev').forEach(btn => {
            btn.addEventListener('click', () => {
                const prevPhase = parseInt(btn.dataset.prevPhase);
                this.navigateToPhase(prevPhase);
            });
        });
        
        // Generate ideas button
        document.getElementById('generate-ideas')?.addEventListener('click', () => {
            this.generateIdeas();
        });
        
        // AGI mode buttons
        document.querySelectorAll('.btn-agi').forEach(btn => {
            btn.addEventListener('click', () => {
                const phase = parseInt(btn.dataset.phase);
                this.activateAGIMode(phase);
            });
        });
        
        // AGI modal close
        document.getElementById('agi-close')?.addEventListener('click', () => {
            this.closeAGIModal();
        });
        
        // Export buttons
        document.getElementById('export-json')?.addEventListener('click', () => {
            this.exportJSON();
        });
        
        document.getElementById('export-landing')?.addEventListener('click', () => {
            this.exportLandingPage();
        });
        
        document.getElementById('export-pitch')?.addEventListener('click', () => {
            this.exportPitchDeck();
        });
        
        // Auto-save on input
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('change', () => {
                this.savePhaseData();
            });
            
            input.addEventListener('input', () => {
                this.savePhaseData();
            });
        });
        
        // Character counters for tweets
        ['tweet-problem', 'tweet-solution', 'tweet-how'].forEach(id => {
            const input = document.getElementById(id);
            const counter = document.getElementById(id + '-count');
            if (input && counter) {
                input.addEventListener('input', () => {
                    counter.textContent = input.value.length;
                });
            }
        });
        
        // Category type toggle
        const categoryType = document.getElementById('category-type');
        if (categoryType) {
            categoryType.addEventListener('change', () => {
                const existingGroup = document.getElementById('existing-category-group');
                const newGroup = document.getElementById('new-category-group');
                if (categoryType.value === 'existing') {
                    existingGroup.style.display = 'block';
                    newGroup.style.display = 'none';
                } else if (categoryType.value === 'new') {
                    existingGroup.style.display = 'none';
                    newGroup.style.display = 'block';
                } else {
                    existingGroup.style.display = 'none';
                    newGroup.style.display = 'none';
                }
            });
        }
        
        // Weekend feasible toggle
        const weekendFeasible = document.getElementById('weekend-feasible');
        if (weekendFeasible) {
            weekendFeasible.addEventListener('change', () => {
                const noGroup = document.getElementById('weekend-no-group');
                if (weekendFeasible.value === 'no') {
                    noGroup.style.display = 'block';
                } else {
                    noGroup.style.display = 'none';
                }
            });
        }
    }
    
    setupCanvas() {
        const canvas = document.getElementById('idea-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let connections = [];
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        
        const initParticles = () => {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 15000);
            
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.3 + 0.1
                });
            }
        };
        
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                
                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(136, 136, 136, ${p.opacity})`;
                ctx.fill();
                
                // Check connections
                particles.slice(i + 1).forEach(other => {
                    const dx = p.x - other.x;
                    const dy = p.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(136, 136, 136, ${0.1 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animate);
        };
        
        resize();
        window.addEventListener('resize', resize);
        animate();
    }
    
    startEngine() {
        document.querySelector('.hero').style.display = 'none';
        document.getElementById('phase-nav').style.display = 'block';
        document.getElementById('phase-container').style.display = 'block';
        this.navigateToPhase(0);
    }
    
    navigateToPhase(phase) {
        this.currentPhase = phase;
        
        // Update phase nav
        document.querySelectorAll('.phase-nav-item').forEach((item, index) => {
            item.classList.remove('active');
            if (index === phase) {
                item.classList.add('active');
            } else if (index < phase) {
                item.classList.add('completed');
            }
        });
        
        // Update phase content
        document.querySelectorAll('.phase-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeContent = document.querySelector(`[data-phase="${phase}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Update progress
        const progress = ((phase + 1) / 6) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-phase-num').textContent = phase;
        
        // Load saved data
        this.loadPhaseData(phase);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.saveToStorage();
    }
    
    savePhaseData() {
        const phase = this.currentPhase;
        const phaseContent = document.querySelector(`[data-phase="${phase}"]`);
        if (!phaseContent) return;
        
        const data = {};
        phaseContent.querySelectorAll('input, textarea, select').forEach(input => {
            if (input.id) {
                data[input.id] = input.value;
            }
        });
        
        this.userData[`phase${phase}`] = data;
        this.saveToStorage();
    }
    
    loadPhaseData(phase) {
        const phaseData = this.userData[`phase${phase}`];
        if (!phaseData) return;
        
        const phaseContent = document.querySelector(`[data-phase="${phase}"]`);
        if (!phaseContent) return;
        
        Object.keys(phaseData).forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.value = phaseData[id];
                
                // Trigger change events for dependent fields
                if (input.id === 'category-type') {
                    input.dispatchEvent(new Event('change'));
                }
                if (input.id === 'weekend-feasible') {
                    input.dispatchEvent(new Event('change'));
                }
            }
        });
    }
    
    generateIdeas() {
        // Collect all user data
        const allData = {};
        for (let i = 0; i <= 5; i++) {
            const phaseData = this.userData[`phase${i}`] || {};
            Object.assign(allData, phaseData);
        }
        
        // Generate ideas based on inputs
        this.ideas = this.generateIdeasFromData(allData);
        
        // Apply filters to each idea
        this.ideas.forEach(idea => {
            idea.filterResults = this.applyFilters(idea, allData);
            idea.score = this.calculateScore(idea.filterResults);
        });
        
        // Sort by score
        this.ideas.sort((a, b) => b.score - a.score);
        
        // Display ideas
        this.displayIdeas();
        
        // Show idea generator section
        document.getElementById('idea-generator').style.display = 'block';
        document.getElementById('idea-generator').scrollIntoView({ behavior: 'smooth' });
    }
    
    generateIdeasFromData(data) {
        const ideas = [];
        
        // Extract pain points
        const pains = [
            data['recent-frustrations'],
            data['procrastinated-tasks'],
            data['wish-existed'],
            data['top-complaints'],
            data['acknowledged-problems']
        ].filter(Boolean).join(' ').split('\n').filter(p => p.trim().length > 10);
        
        // Extract skills and context
        const skills = (data['skills'] || '').toLowerCase();
        const communities = (data['communities'] || '').toLowerCase();
        const annoyances = (data['personal-annoyances'] || '').toLowerCase();
        
        // Generate ideas from pain points
        pains.forEach((pain, index) => {
            if (pain.trim().length < 20) return;
            
            const idea = {
                id: `idea-${index}`,
                title: this.extractTitleFromPain(pain),
                description: pain.trim(),
                source: 'pain-discovery',
                pain: pain.trim(),
                distribution: this.inferDistribution(communities, data),
                emotion: this.inferEmotion(data),
                scope: this.inferScope(skills, data),
                moat: this.inferMoat(skills, data)
            };
            
            ideas.push(idea);
        });
        
        // Generate ideas from personal annoyances
        if (annoyances) {
            const annoyanceList = annoyances.split('\n').filter(a => a.trim().length > 10);
            annoyanceList.forEach((annoyance, index) => {
                const idea = {
                    id: `annoyance-${index}`,
                    title: this.extractTitleFromPain(annoyance),
                    description: annoyance.trim(),
                    source: 'personal-annoyance',
                    pain: annoyance.trim(),
                    distribution: this.inferDistribution(communities, data),
                    emotion: this.inferEmotion(data),
                    scope: this.inferScope(skills, data),
                    moat: this.inferMoat(skills, data)
                };
                
                ideas.push(idea);
            });
        }
        
        // If no ideas generated, create a template
        if (ideas.length === 0) {
            ideas.push({
                id: 'template-1',
                title: 'Your Idea',
                description: 'Complete the phases to generate ideas based on your inputs.',
                source: 'template',
                pain: data['value-prop'] || 'Problem to solve',
                distribution: 'Your distribution channel',
                emotion: data['transformation'] || 'Transformation',
                scope: 'MVP scope',
                moat: 'Your defensible angle'
            });
        }
        
        return ideas;
    }
    
    extractTitleFromPain(pain) {
        // Extract a short title from pain point
        const words = pain.trim().split(' ').slice(0, 5);
        return words.join(' ') + (words.length < pain.split(' ').length ? '...' : '');
    }
    
    inferDistribution(communities, data) {
        if (data['customer-gathering']) return data['customer-gathering'];
        if (communities.includes('indie') || communities.includes('hacker')) return 'Indie Hackers community';
        if (communities.includes('reddit') || communities.includes('r/')) return 'Reddit communities';
        if (communities.includes('twitter') || communities.includes('discord')) return 'Twitter/Discord';
        return 'Distribution channel to be identified';
    }
    
    inferEmotion(data) {
        if (data['emotion-before'] && data['emotion-after']) {
            return `${data['emotion-before']} → ${data['emotion-after']}`;
        }
        if (data['transformation']) return data['transformation'];
        return 'Emotional transformation to be defined';
    }
    
    inferScope(skills, data) {
        if (data['weekend-feasible'] === 'yes') return 'Weekend MVP feasible';
        if (data['minimal-version']) return data['minimal-version'];
        if (skills.includes('react') || skills.includes('node')) return 'Web app MVP';
        if (skills.includes('design')) return 'Design-focused MVP';
        return 'MVP scope to be defined';
    }
    
    inferMoat(skills, data) {
        if (data['unfair-channel']) return data['unfair-channel'];
        if (data['unique-knowledge']) return `Domain expertise: ${data['unique-knowledge'].substring(0, 50)}...`;
        if (skills) return `Technical skills: ${skills.substring(0, 50)}...`;
        return 'Defensible angle to be identified';
    }
    
    applyFilters(idea, data) {
        const results = {};
        
        // PAIN filter
        results.PAIN = {
            pass: idea.pain && idea.pain.length > 20,
            reason: idea.pain && idea.pain.length > 20 
                ? 'Specific pain identified' 
                : 'Pain point too vague'
        };
        
        // DISTRIBUTION filter
        results.DISTRIBUTION = {
            pass: idea.distribution && !idea.distribution.includes('to be'),
            reason: idea.distribution && !idea.distribution.includes('to be')
                ? 'Distribution channel identified'
                : 'No clear distribution channel'
        };
        
        // EMOTION filter
        results.EMOTION = {
            pass: idea.emotion && !idea.emotion.includes('to be'),
            reason: idea.emotion && !idea.emotion.includes('to be')
                ? 'Emotional transformation defined'
                : 'Weak emotional angle'
        };
        
        // SCOPE filter
        results.SCOPE = {
            pass: idea.scope && (idea.scope.includes('Weekend') || idea.scope.includes('MVP')),
            reason: idea.scope && (idea.scope.includes('Weekend') || idea.scope.includes('MVP'))
                ? 'Weekend MVP possible'
                : 'Scope too large (>5 days)'
        };
        
        // MOAT filter
        results.MOAT = {
            pass: idea.moat && !idea.moat.includes('to be'),
            reason: idea.moat && !idea.moat.includes('to be')
                ? 'Defensible angle identified'
                : 'No clear moat (can be copied in 30 days)'
        };
        
        return results;
    }
    
    calculateScore(filterResults) {
        let score = 0;
        let total = 0;
        
        Object.keys(filterResults).forEach(filter => {
            total++;
            if (filterResults[filter].pass) {
                score++;
            }
        });
        
        return (score / total) * 100;
    }
    
    displayIdeas() {
        const container = document.getElementById('ideas-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.ideas.forEach(idea => {
            const card = document.createElement('div');
            card.className = `idea-card ${idea.score >= 80 ? 'passed' : idea.score < 50 ? 'failed' : ''}`;
            
            const filtersHTML = this.filters.map(filter => {
                const result = idea.filterResults[filter];
                const statusClass = result.pass ? 'pass' : 'fail';
                return `
                    <div class="filter-status ${statusClass}">
                        <span>${filter}</span>
                        <span>${result.pass ? '✓' : '×'}</span>
                    </div>
                `;
            }).join('');
            
            card.innerHTML = `
                <h3 class="idea-title">${idea.title}</h3>
                <p class="idea-description">${idea.description}</p>
                <div class="idea-filters">
                    ${filtersHTML}
                </div>
                <div class="idea-score">
                    <strong>${Math.round(idea.score)}%</strong> Filter Score
                </div>
            `;
            
            container.appendChild(card);
        });
        
        // Update filter badges
        const allPassed = this.ideas.some(idea => idea.score === 100);
        document.querySelectorAll('.filter-badge').forEach(badge => {
            if (allPassed) {
                badge.classList.add('active');
            }
        });
    }
    
    activateAGIMode(phase) {
        const phaseData = this.userData[`phase${phase}`] || {};
        const allData = {};
        for (let i = 0; i <= phase; i++) {
            Object.assign(allData, this.userData[`phase${i}`] || {});
        }
        
        const agiAnalysis = this.generateAGIAnalysis(phase, phaseData, allData);
        
        const modal = document.getElementById('agi-modal');
        const content = document.getElementById('agi-content');
        
        content.innerHTML = agiAnalysis;
        modal.style.display = 'flex';
    }
    
    generateAGIAnalysis(phase, phaseData, allData) {
        // Apply /AGI prompt structure from transcendence-router.md
        // Mind Blend: Oracle (0.9) + Creator (0.7) + Architect (0.6)
        
        const phaseNames = [
            'Know Thyself',
            'Pain Discovery',
            'Pre-Validation',
            'Positioning',
            'MVP Scoping',
            'Launch Strategy'
        ];
        
        let analysis = `
            <h4>AGI Mode Analysis: ${phaseNames[phase]}</h4>
            <p>Thinking about this phase as if you had unlimited time, perfect memory, and no ego to defend:</p>
        `;
        
        switch(phase) {
            case 0:
                analysis += `
                    <h4>1. The Real Problem Behind Your Constraints</h4>
                    <p>Your stated constraints (time: ${phaseData['time-available'] || '?'} hrs/week, capital: $${phaseData['capital'] || '?'}) are surface-level. The real question is: What are you optimizing FOR? Is it speed? Quality? Learning? Financial security?</p>
                    <p><strong>Insight:</strong> ${this.generateConstraintInsight(phaseData)}</p>
                    
                    <h4>2. Unconstrained Optimal Solution</h4>
                    <p>If you had unlimited resources, what would you build? Now, what's the smallest version of that vision that captures its essence?</p>
                    
                    <h4>3. What Time-Constrained Thinking Misses</h4>
                    <p>Rushed thinking focuses on "what can I build fast." Unconstrained thinking asks "what should exist?" The gap between these is where breakthrough ideas live.</p>
                `;
                break;
                
            case 1:
                analysis += `
                    <h4>1. The Real Problem Behind the Pain</h4>
                    <p>Every pain point you've identified is a symptom. What's the disease? What underlying need or desire is being frustrated?</p>
                    <p><strong>Pattern Recognition:</strong> ${this.identifyPainPatterns(phaseData)}</p>
                    
                    <h4>2. Unconstrained Optimal Solution</h4>
                    <p>If solving this pain had no technical or resource constraints, what would the perfect solution look like? Now, what's the 1% version that delivers 80% of that value?</p>
                    
                    <h4>3. Hidden Opportunities</h4>
                    <p>What pain points are adjacent to yours? What would solving your pain unlock in related areas?</p>
                `;
                break;
                
            case 2:
                analysis += `
                    <h4>1. The Real Validation Question</h4>
                    <p>Pre-sales validate willingness to pay, but the deeper question is: Will they actually USE it? What's the difference between "I'll pay" and "I'll use daily"?</p>
                    
                    <h4>2. Why Alternatives Are Inadequate</h4>
                    <p>${phaseData['alternative-gaps'] || 'The gap between current alternatives and your solution reveals the real opportunity.'}</p>
                    
                    <h4>3. The Switching Trigger</h4>
                    <p>People don't switch because something is better. They switch when the pain of staying exceeds the pain of switching. What's that threshold for your users?</p>
                `;
                break;
                
            case 3:
                analysis += `
                    <h4>1. The Real Positioning</h4>
                    <p>Positioning isn't about what you are. It's about what you're NOT. Every strong position requires saying no to something else.</p>
                    <p><strong>Your Position:</strong> ${phaseData['positioning-statement'] || 'To be defined'}</p>
                    
                    <h4>2. Emotional Transformation</h4>
                    <p>From ${phaseData['emotion-before'] || 'frustrated'} to ${phaseData['emotion-after'] || 'confident'}. This transformation is your product's true value, not the features.</p>
                    
                    <h4>3. Status Positioning</h4>
                    <p>${phaseData['status-boost'] === 'yes' ? 'Using this makes users look successful. This is powerful for word-of-mouth.' : 'Consider: How can using this product signal something positive about the user?'}</p>
                `;
                break;
                
            case 4:
                analysis += `
                    <h4>1. The Real MVP</h4>
                    <p>The MVP isn't the smallest version of your idea. It's the smallest version that delivers the CORE emotional transformation.</p>
                    <p><strong>Your One Thing:</strong> ${phaseData['one-thing'] || 'To be defined'}</p>
                    
                    <h4>2. Weekend Feasibility</h4>
                    <p>${phaseData['weekend-feasible'] === 'yes' ? 'Weekend MVP is possible. This is ideal for rapid validation.' : 'If not weekend-feasible, what\'s the "Wizard of Oz" version that fakes it until you make it?'}</p>
                    
                    <h4>3. Leverage Type</h4>
                    <p>${this.analyzeLeverage(phaseData)}</p>
                `;
                break;
                
            case 5:
                analysis += `
                    <h4>1. The Real Launch Strategy</h4>
                    <p>Launch isn't about announcing. It's about finding your first 100 true believers who will become your distribution channel.</p>
                    <p><strong>Your First 100:</strong> ${phaseData['first-100'] || 'To be identified'}</p>
                    
                    <h4>2. Shareability</h4>
                    <p>${phaseData['share-reason'] || 'Why would someone share this? The answer determines your growth potential.'}</p>
                    
                    <h4>3. North Star Metric</h4>
                    <p>${phaseData['north-star'] || 'Your north star metric'} is the ONE number that matters. Everything else is noise.</p>
                `;
                break;
        }
        
        analysis += `
            <h4>What to Focus On First</h4>
            <p>${this.getFocusRecommendation(phase)}</p>
            
            <h4>What to Ignore Entirely</h4>
            <p>${this.getIgnoreRecommendation(phase)}</p>
        `;
        
        return analysis;
    }
    
    generateConstraintInsight(data) {
        const time = parseInt(data['time-available']) || 0;
        const capital = parseInt(data['capital']) || 0;
        const outcome = data['target-outcome'];
        
        if (time < 10 && capital < 1000) {
            return 'You\'re in "scrappy mode" - focus on ideas that require time, not money. Leverage your skills and communities.';
        } else if (outcome === 'lifestyle') {
            return 'Lifestyle business means sustainable, not scalable. Focus on ideas that create recurring value without constant growth pressure.';
        } else {
            return 'Your constraints are actually your filter. They force you to focus on what truly matters.';
        }
    }
    
    identifyPainPatterns(data) {
        const pains = [
            data['recent-frustrations'],
            data['procrastinated-tasks'],
            data['top-complaints']
        ].filter(Boolean).join(' ').toLowerCase();
        
        if (pains.includes('time') || pains.includes('slow')) {
            return 'Time-related pain - efficiency tools or automation opportunities';
        } else if (pains.includes('confusion') || pains.includes('understand')) {
            return 'Clarity-related pain - education or simplification opportunities';
        } else if (pains.includes('manual') || pains.includes('repetitive')) {
            return 'Automation opportunity - eliminate repetitive work';
        } else {
            return 'Look for patterns in your pain points - they reveal systemic opportunities';
        }
    }
    
    analyzeLeverage(data) {
        const leverageType = data['leverage-type'];
        const passive = data['passive-income'];
        const scale = data['scale-effect'];
        
        if (leverageType === 'code' && passive === 'yes' && scale === 'easier') {
            return 'Code leverage with passive income and positive scale effects - this is the ideal combination.';
        } else if (leverageType === 'labor') {
            return 'Labor leverage requires management overhead. Consider if code or media leverage is possible instead.';
        } else {
            return 'Focus on leverage types that create value while you sleep (code, media) rather than requiring constant input (labor).';
        }
    }
    
    getFocusRecommendation(phase) {
        const recommendations = [
            'Understanding your true constraints and what you\'re optimizing for. Don\'t just list limitations - understand their implications.',
            'Finding the ONE pain point that makes you say "I would absolutely pay to solve this." Everything else is secondary.',
            'Getting 10 people to commit money before you build anything. This is the ultimate validation.',
            'Defining who will love this MOST. Be ruthlessly specific. Adjacent customers can come later.',
            'Identifying the ONE thing your MVP does. Everything else is feature creep waiting to happen.',
            'Finding your first 100 true believers. They are your distribution channel, not your marketing target.'
        ];
        return recommendations[phase] || 'Focus on completing this phase thoroughly.';
    }
    
    getIgnoreRecommendation(phase) {
        const ignore = [
            'Ignore what "everyone" needs. Focus on what YOU need and what people like you need.',
            'Ignore competitors until you have 10 paying customers. They\'re solving a different problem for different people.',
            'Ignore feature requests from non-paying users. Focus on what gets people to pay.',
            'Ignore adjacent markets. Focus on your best-fit customer until you have product-market fit.',
            'Ignore "nice to have" features. Focus on the ONE thing that delivers the core transformation.',
            'Ignore vanity metrics. Focus on your north star metric and kill threshold.'
        ];
        return ignore[phase] || 'Ignore distractions and focus on what matters.';
    }
    
    closeAGIModal() {
        document.getElementById('agi-modal').style.display = 'none';
    }
    
    exportJSON() {
        const exportData = {
            userData: this.userData,
            ideas: this.ideas,
            timestamp: new Date().toISOString(),
            version: '3.0'
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ideation-engine-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    exportLandingPage() {
        const data = this.userData;
        const bestIdea = this.ideas.length > 0 ? this.ideas[0] : null;
        
        if (!bestIdea) {
            alert('Generate ideas first!');
            return;
        }
        
        const landingPage = `
# ${bestIdea.title}

## The Problem
${bestIdea.pain || data['value-prop'] || 'Problem description'}

## The Solution
${data['tweet-solution'] || bestIdea.description}

## How It Works
${data['tweet-how'] || 'Simple explanation'}

## For [${data['best-fit-customer'] || 'Your Target Customer'}]

${data['positioning-statement'] || 'Positioning statement'}

## Transformation
From ${data['emotion-before'] || 'frustrated'} to ${data['emotion-after'] || 'confident'}

## Call to Action
${data['cta'] || 'Get Started'}

---
Generated by Ideation Engine v3.0
        `.trim();
        
        const blob = new Blob([landingPage], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `landing-page-${Date.now()}.md`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    exportPitchDeck() {
        const data = this.userData;
        const bestIdea = this.ideas.length > 0 ? this.ideas[0] : null;
        
        if (!bestIdea) {
            alert('Generate ideas first!');
            return;
        }
        
        const pitchDeck = `
# Pitch Deck Outline: ${bestIdea.title}

## Slide 1: The Problem
${bestIdea.pain || data['value-prop'] || 'Problem description'}

## Slide 2: The Solution
${data['tweet-solution'] || bestIdea.description}

## Slide 3: Market Opportunity
- Target: ${data['best-fit-customer'] || 'Target customer'}
- Distribution: ${data['customer-gathering'] || 'Distribution channel'}
- Size: [Market size to be researched]

## Slide 4: Product
- MVP: ${data['one-thing'] || 'Core value proposition'}
- Key Features: [List 3-5 key features]
- Differentiation: ${data['switching-trigger'] || 'Key differentiator'}

## Slide 5: Business Model
- Pricing: $${data['target-price'] || 'X'}/month
- Revenue Goal: ${data['revenue-goal'] || 'Revenue target'}
- Leverage: ${data['leverage-type'] || 'Leverage type'}

## Slide 6: Traction
- Pre-sales: ${data['presell-count'] || '0'}
- Waitlist: [Number]
- North Star Metric: ${data['north-star'] || 'Metric'}

## Slide 7: Go-to-Market
- Launch Strategy: ${data['launch-story'] || 'Launch narrative'}
- First 100 Users: ${data['first-100'] || 'Distribution plan'}
- Channels: ${data['unfair-channel'] || 'Distribution channels'}

## Slide 8: Team
- Skills: ${data['skills'] || 'Your skills'}
- Unfair Advantages: ${data['unique-knowledge'] || 'Your advantages'}

## Slide 9: Ask
- [What you're asking for]
- Timeline: ${data['timeline'] || 'Timeline'}

---
Generated by Ideation Engine v3.0
        `.trim();
        
        const blob = new Blob([pitchDeck], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pitch-deck-${Date.now()}.md`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    saveToStorage() {
        try {
            localStorage.setItem('ideationEngine', JSON.stringify({
                currentPhase: this.currentPhase,
                userData: this.userData,
                ideas: this.ideas
            }));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }
    
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('ideationEngine');
            if (saved) {
                const data = JSON.parse(saved);
                this.currentPhase = data.currentPhase || 0;
                this.userData = data.userData || {};
                this.ideas = data.ideas || [];
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }
    
    updateUI() {
        // Update UI based on current state
        if (this.currentPhase > 0 || Object.keys(this.userData).length > 0) {
            // User has started, show phase container
            document.querySelector('.hero').style.display = 'none';
            document.getElementById('phase-nav').style.display = 'block';
            document.getElementById('phase-container').style.display = 'block';
            this.navigateToPhase(this.currentPhase);
        }
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.ideationEngine = new IdeationEngine();
});

