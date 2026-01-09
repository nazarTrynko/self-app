// ===========================
// IDEATION ENGINE v3.0
// Interactive JavaScript
// ===========================

// ===========================
// UTILITY FUNCTIONS
// ===========================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('LocalStorage error:', e);
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('LocalStorage error:', e);
        return null;
    }
}

// ===========================
// PROGRESS BAR
// ===========================

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
    }
}

// ===========================
// NAVIGATION
// ===========================

function updateNavigation() {
    const nav = document.getElementById('main-nav');
    const hero = document.getElementById('hero');
    
    if (!nav || !hero) return;
    
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > heroBottom - 100) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
}

// ===========================
// SMOOTH SCROLL
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// FILTERS VALIDATION
// ===========================

const filterValidators = {
    pain: (text) => {
        if (!text || text.length < 20) return null;
        // Check for specificity (mentions specific groups, complaints)
        const hasSpecificGroup = /\b(freelance|designer|developer|founder|marketer|writer|creator|manager)\w*/i.test(text);
        const hasComplaint = /\b(annoying|frustrated|hate|difficult|hard|painful|slow|confusing|complicated)\w*/i.test(text);
        return hasSpecificGroup && hasComplaint;
    },
    
    distribution: (text) => {
        if (!text || text.length < 10) return null;
        // Check for specific channels (not vague)
        const hasSpecificChannel = /\b(r\/|reddit|twitter|linkedin|facebook group|slack|discord|forum|community)\w*/i.test(text);
        const notVague = !/\b(social media|online|internet|web)\b/i.test(text) || hasSpecificChannel;
        return hasSpecificChannel && notVague;
    },
    
    emotion: (before, after) => {
        if (!before || !after) return null;
        if (before.length < 3 || after.length < 3) return null;
        // Check that they're different emotions
        return before.trim().toLowerCase() !== after.trim().toLowerCase();
    },
    
    scope: (days) => {
        if (!days || isNaN(days)) return null;
        return parseFloat(days) <= 5;
    },
    
    moat: (text) => {
        if (!text || text.length < 20) return null;
        // Check for moat indicators
        const hasMoat = /\b(data|network|brand|positioning|niche|specific|unique|proprietary|accumulates|grows)\w*/i.test(text);
        return hasMoat;
    }
};

function updateFilterStatus(filterId, status) {
    const statusEl = document.getElementById(`${filterId}-status`);
    if (!statusEl) return;
    
    if (status === true) {
        statusEl.textContent = '✓';
        statusEl.classList.remove('kill');
        statusEl.classList.add('pass');
    } else if (status === false) {
        statusEl.textContent = '✗';
        statusEl.classList.remove('pass');
        statusEl.classList.add('kill');
    } else {
        statusEl.textContent = '—';
        statusEl.classList.remove('pass', 'kill');
    }
}

function updateFilterSummary() {
    const filters = ['pain', 'distribution', 'emotion', 'scope', 'moat'];
    const results = {};
    
    // Pain
    const painText = document.getElementById('pain-input')?.value || '';
    results.pain = filterValidators.pain(painText);
    updateFilterStatus('pain', results.pain);
    
    // Distribution
    const distText = document.getElementById('distribution-input')?.value || '';
    results.distribution = filterValidators.distribution(distText);
    updateFilterStatus('distribution', results.distribution);
    
    // Emotion
    const emotionBefore = document.getElementById('emotion-before')?.value || '';
    const emotionAfter = document.getElementById('emotion-after')?.value || '';
    results.emotion = filterValidators.emotion(emotionBefore, emotionAfter);
    updateFilterStatus('emotion', results.emotion);
    
    // Scope
    const scopeDays = document.getElementById('scope-input')?.value || '';
    results.scope = filterValidators.scope(scopeDays);
    updateFilterStatus('scope', results.scope);
    
    // Moat
    const moatText = document.getElementById('moat-input')?.value || '';
    results.moat = filterValidators.moat(moatText);
    updateFilterStatus('moat', results.moat);
    
    // Calculate passed count
    const passedCount = filters.filter(f => results[f] === true).length;
    const evaluated = filters.filter(f => results[f] !== null).length;
    
    // Update summary
    const countEl = document.getElementById('passed-count');
    const verdictEl = document.getElementById('summary-verdict');
    
    if (countEl) countEl.textContent = passedCount;
    
    if (verdictEl) {
        if (evaluated === 0) {
            verdictEl.textContent = 'Fill in the fields above to test your idea';
        } else if (passedCount === 5) {
            verdictEl.textContent = '✓ All filters passed! Proceed to Quick Tests';
            verdictEl.style.color = '#00CC66';
        } else if (evaluated === 5) {
            const failedFilters = filters.filter(f => results[f] === false);
            verdictEl.textContent = `✗ Failed: ${failedFilters.join(', ').toUpperCase()}. Fix or KILL this idea.`;
            verdictEl.style.color = '#FF3366';
        } else {
            verdictEl.textContent = `${evaluated} of 5 filters evaluated. Complete all fields.`;
            verdictEl.style.color = '#FFFFFF';
        }
    }
    
    // Save to localStorage
    saveToLocalStorage('ideation-filters', {
        pain: painText,
        distribution: distText,
        emotionBefore,
        emotionAfter,
        scope: scopeDays,
        moat: moatText,
        results
    });
}

// ===========================
// QUICK TESTS
// ===========================

function evaluateLevelsTest() {
    const check1 = document.getElementById('levels-1')?.checked || false;
    const check2 = document.getElementById('levels-2')?.checked || false;
    const check3 = document.getElementById('levels-3')?.checked || false;
    
    const resultEl = document.getElementById('levels-result');
    if (!resultEl) return;
    
    const checked = [check1, check2, check3].filter(Boolean).length;
    
    if (checked === 0) {
        resultEl.textContent = 'Check all boxes to evaluate';
        resultEl.classList.remove('pass', 'fail');
    } else if (checked === 3) {
        resultEl.textContent = '✓ PASS — Ship this weekend!';
        resultEl.classList.remove('fail');
        resultEl.classList.add('pass');
    } else {
        resultEl.textContent = `✗ FAIL — Only ${checked}/3. KILL or SIMPLIFY.`;
        resultEl.classList.remove('pass');
        resultEl.classList.add('fail');
    }
}

function evaluateGrahamTest() {
    const schlepText = document.getElementById('graham-1-input')?.value || '';
    const notTarpit = document.getElementById('graham-2')?.checked || false;
    const embarrassing = document.getElementById('graham-3')?.checked || false;
    
    const resultEl = document.getElementById('graham-result');
    if (!resultEl) return;
    
    const hasSchlep = schlepText.length > 10;
    
    if (!hasSchlep && !notTarpit && !embarrassing) {
        resultEl.textContent = 'Complete to evaluate';
        resultEl.classList.remove('pass', 'fail', 'warning');
    } else if (!hasSchlep) {
        resultEl.textContent = '✗ FAIL — No schlep = too obvious. KILL.';
        resultEl.classList.remove('pass', 'warning');
        resultEl.classList.add('fail');
    } else if (!notTarpit) {
        resultEl.textContent = '✗ FAIL — Tarpit idea. KILL immediately.';
        resultEl.classList.remove('pass', 'warning');
        resultEl.classList.add('fail');
    } else if (!embarrassing && hasSchlep) {
        resultEl.textContent = '⚠️ WARNING — Too sexy. Might be too obvious.';
        resultEl.classList.remove('pass', 'fail');
        resultEl.classList.add('warning');
    } else {
        resultEl.textContent = '✓ PASS — Good schlep, not obvious!';
        resultEl.classList.remove('fail', 'warning');
        resultEl.classList.add('pass');
    }
}

function evaluateDunfordTest() {
    const who = document.getElementById('dunford-who')?.value || '';
    const product = document.getElementById('dunford-product')?.value || '';
    const category = document.getElementById('dunford-category')?.value || '';
    const benefit = document.getElementById('dunford-benefit')?.value || '';
    const alternative = document.getElementById('dunford-alternative')?.value || '';
    
    const resultEl = document.getElementById('dunford-result');
    if (!resultEl) return;
    
    const filled = [who, product, category, benefit, alternative].filter(x => x.length > 2).length;
    
    if (filled === 0) {
        resultEl.textContent = 'Fill all fields to evaluate';
        resultEl.classList.remove('pass', 'fail');
    } else if (filled === 5) {
        resultEl.textContent = '✓ PASS — Positioning is clear!';
        resultEl.classList.remove('fail');
        resultEl.classList.add('pass');
    } else {
        resultEl.textContent = `✗ NOT READY — ${filled}/5 fields filled. Complete positioning.`;
        resultEl.classList.remove('pass');
        resultEl.classList.add('fail');
    }
}

function evaluateNavalTest() {
    const leverage = document.getElementById('naval-1-select')?.value || '';
    const sleeping = document.getElementById('naval-2')?.checked || false;
    const scale = document.getElementById('naval-3')?.checked || false;
    
    const resultEl = document.getElementById('naval-result');
    if (!resultEl) return;
    
    const goodLeverage = leverage === 'code' || leverage === 'media';
    
    if (!leverage && !sleeping && !scale) {
        resultEl.textContent = 'Complete to evaluate';
        resultEl.classList.remove('pass', 'fail', 'warning');
    } else if (!goodLeverage) {
        resultEl.textContent = '✗ RECONSIDER — Labor/Capital leverage is hard to scale.';
        resultEl.classList.remove('pass', 'warning');
        resultEl.classList.add('fail');
    } else if (!sleeping) {
        resultEl.textContent = '⚠️ WARNING — Doesn\'t make money while sleeping.';
        resultEl.classList.remove('pass', 'fail');
        resultEl.classList.add('warning');
    } else if (!scale) {
        resultEl.textContent = '⚠️ WARNING — Doesn\'t get easier with scale.';
        resultEl.classList.remove('pass', 'fail');
        resultEl.classList.add('warning');
    } else {
        resultEl.textContent = '✓ PASS — Great leverage model!';
        resultEl.classList.remove('fail', 'warning');
        resultEl.classList.add('pass');
    }
}

function evaluateZhuoTest() {
    const before = document.getElementById('zhuo-before')?.value || '';
    const after = document.getElementById('zhuo-after')?.value || '';
    const delight = document.getElementById('zhuo-delight')?.value || '';
    const shareable = document.getElementById('zhuo-shareable')?.value || '';
    
    const resultEl = document.getElementById('zhuo-result');
    if (!resultEl) return;
    
    const hasEmotion = before.length > 3 && after.length > 3;
    const hasDelight = delight.length > 10;
    const hasShareable = shareable.length > 10;
    
    if (!before && !after && !delight && !shareable) {
        resultEl.textContent = 'Complete to evaluate';
        resultEl.classList.remove('pass', 'fail', 'warning');
    } else if (!hasEmotion) {
        resultEl.textContent = '✗ FAIL — Weak emotion. ADD EMOTIONAL ANGLE.';
        resultEl.classList.remove('pass', 'warning');
        resultEl.classList.add('fail');
    } else if (!hasDelight || !hasShareable) {
        resultEl.textContent = '⚠️ WARNING — Missing delight or shareability.';
        resultEl.classList.remove('pass', 'fail');
        resultEl.classList.add('warning');
    } else {
        resultEl.textContent = '✓ PASS — Strong emotional transformation!';
        resultEl.classList.remove('fail', 'warning');
        resultEl.classList.add('pass');
    }
}

// ===========================
// CHECKLIST
// ===========================

function updateChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((checked / total) * 100);
    
    // Update progress bar
    const progressFill = document.getElementById('checklist-progress-fill');
    const countEl = document.getElementById('checklist-count');
    const percentageEl = document.getElementById('checklist-percentage');
    
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (countEl) countEl.textContent = checked;
    if (percentageEl) percentageEl.textContent = `${percentage}%`;
    
    // Update verdict
    const verdictEl = document.getElementById('checklist-verdict');
    if (verdictEl) {
        if (percentage === 0) {
            verdictEl.innerHTML = '<p class="verdict-text">Check all boxes to reach 90% confidence</p>';
            verdictEl.classList.remove('success');
        } else if (percentage === 100) {
            verdictEl.innerHTML = '<p class="verdict-text">✓ 90% CONFIDENCE ACHIEVED — SHIP IT!</p>';
            verdictEl.classList.add('success');
        } else {
            verdictEl.innerHTML = `<p class="verdict-text">${percentage}% confidence — ${total - checked} criteria remaining</p>`;
            verdictEl.classList.remove('success');
        }
    }
    
    // Save to localStorage
    const checklistState = {};
    checkboxes.forEach((cb, index) => {
        checklistState[`check-${index + 1}`] = cb.checked;
    });
    saveToLocalStorage('ideation-checklist', checklistState);
}

function resetChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    checkboxes.forEach(cb => cb.checked = false);
    updateChecklist();
    localStorage.removeItem('ideation-checklist');
}

// ===========================
// LOAD SAVED STATE
// ===========================

function loadSavedState() {
    // Load filters
    const filterData = loadFromLocalStorage('ideation-filters');
    if (filterData) {
        if (filterData.pain) document.getElementById('pain-input').value = filterData.pain;
        if (filterData.distribution) document.getElementById('distribution-input').value = filterData.distribution;
        if (filterData.emotionBefore) document.getElementById('emotion-before').value = filterData.emotionBefore;
        if (filterData.emotionAfter) document.getElementById('emotion-after').value = filterData.emotionAfter;
        if (filterData.scope) document.getElementById('scope-input').value = filterData.scope;
        if (filterData.moat) document.getElementById('moat-input').value = filterData.moat;
        updateFilterSummary();
    }
    
    // Load checklist
    const checklistData = loadFromLocalStorage('ideation-checklist');
    if (checklistData) {
        Object.keys(checklistData).forEach(key => {
            const checkbox = document.getElementById(key);
            if (checkbox) checkbox.checked = checklistData[key];
        });
        updateChecklist();
    }
}

// ===========================
// EVENT LISTENERS
// ===========================

function initEventListeners() {
    // Scroll events
    window.addEventListener('scroll', () => {
        updateProgressBar();
        updateNavigation();
    });
    
    // Filter inputs
    const filterInputs = [
        'pain-input',
        'distribution-input',
        'emotion-before',
        'emotion-after',
        'scope-input',
        'moat-input'
    ];
    
    filterInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', debounce(updateFilterSummary, 300));
        }
    });
    
    // Levels Test
    ['levels-1', 'levels-2', 'levels-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', evaluateLevelsTest);
    });
    
    // Graham Test
    const grahamInput = document.getElementById('graham-1-input');
    if (grahamInput) grahamInput.addEventListener('input', debounce(evaluateGrahamTest, 300));
    
    ['graham-2', 'graham-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', evaluateGrahamTest);
    });
    
    // Dunford Test
    ['dunford-who', 'dunford-product', 'dunford-category', 'dunford-benefit', 'dunford-alternative'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', debounce(evaluateDunfordTest, 300));
    });
    
    // Naval Test
    const navalSelect = document.getElementById('naval-1-select');
    if (navalSelect) navalSelect.addEventListener('change', evaluateNavalTest);
    
    ['naval-2', 'naval-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', evaluateNavalTest);
    });
    
    // Zhuo Test
    ['zhuo-before', 'zhuo-after', 'zhuo-delight', 'zhuo-shareable'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', debounce(evaluateZhuoTest, 300));
    });
    
    // Checklist
    document.querySelectorAll('.checklist-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', updateChecklist);
    });
    
    // Reset button
    const resetButton = document.getElementById('reset-checklist');
    if (resetButton) {
        resetButton.addEventListener('click', resetChecklist);
    }
}

// ===========================
// INITIALIZE
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initEventListeners();
    loadSavedState();
    updateProgressBar();
    updateNavigation();
});

