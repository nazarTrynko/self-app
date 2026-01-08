/**
 * Hook Formula Engine
 * Chamber 2: The Signal
 */

const hookFormulas = {
    curiosityGap: {
        name: 'Curiosity Gap',
        templates: [
            'The {unexpected} that {surprising outcome}',
            'Why {common belief} is actually {contrary truth}',
            'The {hidden thing} {audience} doesn\'t know about {topic}',
            '{Number} {things} that {surprising result}',
            'What {famous person/thing} taught me about {topic}'
        ]
    },
    patternInterrupt: {
        name: 'Pattern Interrupt',
        templates: [
            'Everything you know about {topic} is wrong',
            'Stop {common action}. Do {alternative} instead.',
            'Why {popular advice} is holding you back',
            'The {common mistake} {audience} keeps making',
            '{Contrarian statement} (and here\'s why)'
        ]
    },
    specificity: {
        name: 'Specificity',
        templates: [
            'How I {specific action} and {specific result}',
            '{Number} {specific things} that {outcome}',
            'The {exact method} that {result}',
            'In {timeframe}, I {action} and {result}',
            '{Specific number}% of {audience} {surprising stat}'
        ]
    },
    storyHook: {
        name: 'Story Hook',
        templates: [
            'I {did thing} and {unexpected result} happened',
            'The day I {action} changed everything',
            'I thought {assumption}, but then {reality}',
            'When {event}, I learned {lesson}',
            '{Person} told me {thing}, and I {reaction}'
        ]
    },
    question: {
        name: 'Question',
        templates: [
            'What if {provocative question}?',
            'Why does {surprising thing} happen?',
            'What would happen if {scenario}?',
            'Have you ever {relatable experience}?',
            'What\'s the {thing} that {outcome}?'
        ]
    },
    number: {
        name: 'Number',
        templates: [
            '{Number} {things} that {outcome}',
            '{Number} ways to {action}',
            'The {number} {things} {audience} needs to know',
            '{Number} {things} I wish I knew about {topic}',
            '{Number} {things} that {surprising result}'
        ]
    },
    contrarian: {
        name: 'Contrarian',
        templates: [
            'Why {common belief} is wrong',
            'Stop {popular advice}. Start {alternative}.',
            'The truth about {topic} nobody tells you',
            'Why {trend} is actually {contrary}',
            '{Common wisdom} is a lie. Here\'s why.'
        ]
    }
};

let generatedHooks = [];

/**
 * Generate hooks
 */
function generateHooks() {
    const topic = document.getElementById('hook-topic').value.trim();
    const audience = document.getElementById('hook-audience').value.trim();
    const platform = document.getElementById('hook-platform').value;
    
    if (!topic || !audience) {
        showToast('Please fill in topic and audience', 'error');
        return;
    }
    
    generatedHooks = [];
    
    // Generate hooks from each formula
    Object.keys(hookFormulas).forEach(formulaKey => {
        const formula = hookFormulas[formulaKey];
        formula.templates.forEach(template => {
            const hook = fillTemplate(template, topic, audience, platform);
            if (hook) {
                generatedHooks.push({
                    text: hook,
                    formula: formula.name,
                    score: calculateViralScore(hook, platform)
                });
            }
        });
    });
    
    // Sort by score
    generatedHooks.sort((a, b) => b.score - a.score);
    
    // Display results
    displayHooks();
    updateViralMeter();
    
    // Show results section
    document.getElementById('hook-results').style.display = 'block';
}

/**
 * Fill template with values
 */
function fillTemplate(template, topic, audience, platform) {
    let hook = template;
    
    // Replace placeholders
    hook = hook.replace(/{topic}/g, topic);
    hook = hook.replace(/{audience}/g, audience);
    
    // Generate variations
    hook = hook.replace(/{unexpected}/g, getUnexpected(topic));
    hook = hook.replace(/{surprising outcome}/g, getSurprisingOutcome(topic));
    hook = hook.replace(/{common belief}/g, getCommonBelief(topic));
    hook = hook.replace(/{contrary truth}/g, getContraryTruth(topic));
    hook = hook.replace(/{hidden thing}/g, getHiddenThing(topic));
    hook = hook.replace(/{things}/g, getThings(topic));
    hook = hook.replace(/{surprising result}/g, getSurprisingResult(topic));
    hook = hook.replace(/{number}/g, getRandomNumber());
    hook = hook.replace(/{Number}/g, getRandomNumber());
    hook = hook.replace(/{specific action}/g, getSpecificAction(topic));
    hook = hook.replace(/{specific result}/g, getSpecificResult(topic));
    hook = hook.replace(/{exact method}/g, getExactMethod(topic));
    hook = hook.replace(/{timeframe}/g, getTimeframe());
    hook = hook.replace(/{specific number}/g, getSpecificNumber());
    hook = hook.replace(/{surprising stat}/g, getSurprisingStat());
    hook = hook.replace(/{did thing}/g, getDidThing(topic));
    hook = hook.replace(/{unexpected result}/g, getUnexpectedResult(topic));
    hook = hook.replace(/{action}/g, getAction(topic));
    hook = hook.replace(/{assumption}/g, getAssumption(topic));
    hook = hook.replace(/{reality}/g, getReality(topic));
    hook = hook.replace(/{event}/g, getEvent());
    hook = hook.replace(/{lesson}/g, getLesson(topic));
    hook = hook.replace(/{person}/g, getPerson());
    hook = hook.replace(/{thing}/g, getThing(topic));
    hook = hook.replace(/{reaction}/g, getReaction());
    hook = hook.replace(/{provocative question}/g, getProvocativeQuestion(topic));
    hook = hook.replace(/{surprising thing}/g, getSurprisingThing(topic));
    hook = hook.replace(/{scenario}/g, getScenario(topic));
    hook = hook.replace(/{relatable experience}/g, getRelatableExperience(topic));
    hook = hook.replace(/{outcome}/g, getOutcome(topic));
    hook = hook.replace(/{ways}/g, getWays());
    hook = hook.replace(/{popular advice}/g, getPopularAdvice(topic));
    hook = hook.replace(/{alternative}/g, getAlternative(topic));
    hook = hook.replace(/{common mistake}/g, getCommonMistake(topic));
    hook = hook.replace(/{Contrarian statement}/g, getContrarianStatement(topic));
    hook = hook.replace(/{common wisdom}/g, getCommonWisdom(topic));
    hook = hook.replace(/{trend}/g, getTrend(topic));
    hook = hook.replace(/{contrary}/g, getContrary(topic));
    
    // Clean up any remaining placeholders
    if (hook.includes('{') || hook.includes('}')) {
        return null; // Skip incomplete templates
    }
    
    return hook;
}

/**
 * Helper functions for template filling
 */
function getUnexpected(topic) {
    const options = ['secret', 'hidden truth', 'surprising fact', 'unexpected insight', 'counterintuitive idea'];
    return options[Math.floor(Math.random() * options.length)];
}

function getSurprisingOutcome(topic) {
    return `transformed my ${topic}`;
}

function getCommonBelief(topic) {
    return `what everyone thinks about ${topic}`;
}

function getContraryTruth(topic) {
    return `the opposite of what you think`;
}

function getHiddenThing(topic) {
    return `secret about ${topic}`;
}

function getThings(topic) {
    const options = ['secrets', 'mistakes', 'truths', 'insights', 'strategies'];
    return options[Math.floor(Math.random() * options.length)];
}

function getSurprisingResult(topic) {
    return `will change how you think about ${topic}`;
}

function getRandomNumber() {
    const numbers = [3, 5, 7, 10, 12, 15, 20];
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSpecificAction(topic) {
    return `mastered ${topic}`;
}

function getSpecificResult(topic) {
    return `doubled my results`;
}

function getExactMethod(topic) {
    return `proven method for ${topic}`;
}

function getTimeframe() {
    const options = ['30 days', '3 months', '6 months', '1 year'];
    return options[Math.floor(Math.random() * options.length)];
}

function getSpecificNumber() {
    return Math.floor(Math.random() * 50 + 10) + '%';
}

function getSurprisingStat() {
    return 'are doing it wrong';
}

function getDidThing(topic) {
    return `started ${topic}`;
}

function getUnexpectedResult(topic) {
    return 'everything changed';
}

function getAction(topic) {
    return `working on ${topic}`;
}

function getAssumption(topic) {
    return `${topic} was simple`;
}

function getReality(topic) {
    return 'I was completely wrong';
}

function getEvent() {
    const options = ['I failed', 'I succeeded', 'I tried something new', 'I took a risk'];
    return options[Math.floor(Math.random() * options.length)];
}

function getLesson(topic) {
    return `the real secret to ${topic}`;
}

function getPerson() {
    const options = ['My mentor', 'A friend', 'Someone', 'An expert'];
    return options[Math.floor(Math.random() * options.length)];
}

function getThing(topic) {
    return `something about ${topic}`;
}

function getReaction() {
    return 'couldn\'t believe it';
}

function getProvocativeQuestion(topic) {
    return `you could master ${topic} faster than you think`;
}

function getSurprisingThing(topic) {
    return `happens with ${topic}`;
}

function getScenario(topic) {
    return `you stopped doing ${topic} the traditional way`;
}

function getRelatableExperience(topic) {
    return `struggled with ${topic}`;
}

function getOutcome(topic) {
    return `transforms your ${topic}`;
}

function getWays() {
    return 'ways';
}

function getPopularAdvice(topic) {
    return `the usual ${topic} advice`;
}

function getAlternative(topic) {
    return `this instead`;
}

function getCommonMistake(topic) {
    return `mistake with ${topic}`;
}

function getContrarianStatement(topic) {
    return `${topic} doesn't work the way you think`;
}

function getCommonWisdom(topic) {
    return `The common wisdom about ${topic}`;
}

function getTrend(topic) {
    return `the ${topic} trend`;
}

function getContrary(topic) {
    return 'harmful';
}

/**
 * Calculate viral score
 */
function calculateViralScore(hook, platform) {
    let score = 50; // Base score
    
    // Length optimization (platform-specific)
    const length = hook.length;
    if (platform === 'twitter') {
        if (length > 0 && length <= 100) score += 20;
        else if (length > 100 && length <= 200) score += 10;
    } else if (platform === 'linkedin') {
        if (length > 50 && length <= 150) score += 20;
    } else {
        if (length > 30 && length <= 120) score += 15;
    }
    
    // Contains number
    if (/\d/.test(hook)) score += 10;
    
    // Contains question mark
    if (hook.includes('?')) score += 5;
    
    // Contains specific words
    const powerWords = ['secret', 'truth', 'mistake', 'why', 'how', 'stop', 'start', 'never', 'always'];
    powerWords.forEach(word => {
        if (hook.toLowerCase().includes(word)) score += 3;
    });
    
    // Emotional words
    const emotionalWords = ['surprising', 'shocking', 'unexpected', 'amazing', 'incredible'];
    emotionalWords.forEach(word => {
        if (hook.toLowerCase().includes(word)) score += 5;
    });
    
    // Cap at 100
    return Math.min(100, score);
}

/**
 * Display hooks
 */
function displayHooks() {
    const hooksList = document.getElementById('hooks-list');
    hooksList.innerHTML = '';
    
    generatedHooks.forEach((hook, index) => {
        const item = document.createElement('div');
        item.className = 'hook-item';
        item.innerHTML = `
            <div class="hook-text">${hook.text}</div>
            <div class="hook-meta">
                <span class="hook-formula">${hook.formula}</span>
                <span>Score: ${hook.score}%</span>
            </div>
        `;
        hooksList.appendChild(item);
    });
}

/**
 * Update viral meter
 */
function updateViralMeter() {
    if (generatedHooks.length === 0) return;
    
    const avgScore = generatedHooks.reduce((sum, h) => sum + h.score, 0) / generatedHooks.length;
    const fill = document.getElementById('viral-fill');
    const score = document.getElementById('viral-score');
    
    fill.style.width = avgScore + '%';
    score.textContent = Math.round(avgScore) + '%';
}

/**
 * Export hooks
 */
function exportHooks() {
    let output = 'GENERATED HOOKS\n';
    output += '='.repeat(50) + '\n\n';
    
    generatedHooks.forEach((hook, index) => {
        output += `${index + 1}. ${hook.text}\n`;
        output += `   Formula: ${hook.formula} | Score: ${hook.score}%\n\n`;
    });
    
    copyToClipboard(output);
    showToast('Hooks exported to clipboard');
}

/**
 * Copy best hook
 */
function copyBestHook() {
    if (generatedHooks.length === 0) return;
    
    const bestHook = generatedHooks[0].text;
    copyToClipboard(bestHook);
    showToast('Best hook copied to clipboard');
}

