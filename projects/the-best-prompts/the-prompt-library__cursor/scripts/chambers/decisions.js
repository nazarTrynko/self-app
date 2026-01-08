/**
 * Decision Matrix Tool
 * Chamber 1: The Forge
 */

let options = [];
let criteria = [];
let scores = {}; // { optionIndex: { criterionIndex: score } }

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initEventListeners();
    updateMatrix();
});

/**
 * Initialize event listeners
 */
function initEventListeners() {
    // Option inputs
    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('option-input')) {
            const index = parseInt(e.target.dataset.index);
            options[index] = e.target.value;
            saveToStorage();
            updateMatrix();
        }
        
        if (e.target.classList.contains('criterion-input')) {
            const index = parseInt(e.target.dataset.index);
            criteria[index] = {
                name: e.target.value,
                weight: criteria[index]?.weight || 5
            };
            saveToStorage();
            updateMatrix();
        }
        
        if (e.target.classList.contains('weight-slider')) {
            const index = parseInt(e.target.dataset.index);
            const weight = parseInt(e.target.value);
            if (criteria[index]) {
                criteria[index].weight = weight;
                e.target.nextElementSibling.textContent = weight;
                saveToStorage();
                updateMatrix();
            }
        }
    });
}

/**
 * Add option
 */
function addOption() {
    const index = options.length;
    options.push('');
    
    const optionsList = document.getElementById('options-list');
    const item = document.createElement('div');
    item.className = 'input-item';
    item.innerHTML = `
        <input type="text" class="option-input" placeholder="Option ${index + 1}" data-index="${index}">
        <button class="remove-btn" onclick="removeOption(${index})">×</button>
    `;
    optionsList.appendChild(item);
    
    // Focus new input
    const input = item.querySelector('.option-input');
    input.focus();
    
    saveToStorage();
    updateMatrix();
}

/**
 * Remove option
 */
function removeOption(index) {
    options.splice(index, 1);
    delete scores[index];
    
    // Rebuild options list
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    options.forEach((option, i) => {
        const item = document.createElement('div');
        item.className = 'input-item';
        item.innerHTML = `
            <input type="text" class="option-input" placeholder="Option ${i + 1}" data-index="${i}" value="${option}">
            <button class="remove-btn" onclick="removeOption(${i})">×</button>
        `;
        optionsList.appendChild(item);
    });
    
    // Add empty option if none exist
    if (options.length === 0) {
        addOption();
    }
    
    saveToStorage();
    updateMatrix();
}

/**
 * Add criterion
 */
function addCriterion() {
    const index = criteria.length;
    criteria.push({ name: '', weight: 5 });
    
    const criteriaList = document.getElementById('criteria-list');
    const item = document.createElement('div');
    item.className = 'input-item';
    item.innerHTML = `
        <input type="text" class="criterion-input" placeholder="Criterion ${index + 1}" data-index="${index}">
        <div class="weight-control">
            <label>Weight:</label>
            <input type="range" class="weight-slider" min="1" max="10" value="5" data-index="${index}">
            <span class="weight-value">5</span>
        </div>
        <button class="remove-btn" onclick="removeCriterion(${index})">×</button>
    `;
    criteriaList.appendChild(item);
    
    // Focus new input
    const input = item.querySelector('.criterion-input');
    input.focus();
    
    saveToStorage();
    updateMatrix();
}

/**
 * Remove criterion
 */
function removeCriterion(index) {
    criteria.splice(index, 1);
    
    // Remove scores for this criterion
    Object.keys(scores).forEach(optIdx => {
        if (scores[optIdx][index] !== undefined) {
            delete scores[optIdx][index];
        }
    });
    
    // Rebuild criteria list
    const criteriaList = document.getElementById('criteria-list');
    criteriaList.innerHTML = '';
    criteria.forEach((criterion, i) => {
        const item = document.createElement('div');
        item.className = 'input-item';
        item.innerHTML = `
            <input type="text" class="criterion-input" placeholder="Criterion ${i + 1}" data-index="${i}" value="${criterion.name}">
            <div class="weight-control">
                <label>Weight:</label>
                <input type="range" class="weight-slider" min="1" max="10" value="${criterion.weight}" data-index="${i}">
                <span class="weight-value">${criterion.weight}</span>
            </div>
            <button class="remove-btn" onclick="removeCriterion(${i})">×</button>
        `;
        criteriaList.appendChild(item);
    });
    
    // Add empty criterion if none exist
    if (criteria.length === 0) {
        addCriterion();
    }
    
    saveToStorage();
    updateMatrix();
}

/**
 * Update scoring grid
 */
function updateMatrix() {
    const grid = document.getElementById('scoring-grid');
    const results = document.getElementById('results');
    
    // Clear existing
    grid.innerHTML = '';
    
    // Check if we have options and criteria
    const validOptions = options.filter(opt => opt.trim() !== '');
    const validCriteria = criteria.filter(crit => crit.name.trim() !== '');
    
    if (validOptions.length === 0 || validCriteria.length === 0) {
        grid.innerHTML = '<p class="empty-state">Add options and criteria to begin</p>';
        results.style.display = 'none';
        return;
    }
    
    // Create scoring grid
    const table = document.createElement('table');
    table.className = 'scoring-table';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    
    // Header row
    const headerRow = document.createElement('tr');
    const emptyHeader = document.createElement('th');
    emptyHeader.style.padding = 'var(--space-sm)';
    emptyHeader.style.border = '1px solid var(--forge-accent)';
    headerRow.appendChild(emptyHeader);
    
    validCriteria.forEach((criterion, critIdx) => {
        const th = document.createElement('th');
        th.style.padding = 'var(--space-sm)';
        th.style.border = '1px solid var(--forge-accent)';
        th.style.textAlign = 'center';
        th.style.fontSize = '0.875rem';
        th.innerHTML = `
            <div>${criterion.name}</div>
            <div style="color: var(--forge-orange); font-size: 0.75rem; margin-top: 4px;">Weight: ${criterion.weight}</div>
        `;
        headerRow.appendChild(th);
    });
    
    const totalHeader = document.createElement('th');
    totalHeader.style.padding = 'var(--space-sm)';
    totalHeader.style.border = '1px solid var(--forge-orange)';
    totalHeader.style.textAlign = 'center';
    totalHeader.style.fontWeight = '600';
    totalHeader.textContent = 'Total';
    headerRow.appendChild(totalHeader);
    
    table.appendChild(headerRow);
    
    // Data rows
    validOptions.forEach((option, optIdx) => {
        if (!scores[optIdx]) {
            scores[optIdx] = {};
        }
        
        const row = document.createElement('tr');
        
        // Option name
        const optionCell = document.createElement('td');
        optionCell.style.padding = 'var(--space-sm)';
        optionCell.style.border = '1px solid var(--forge-accent)';
        optionCell.style.fontWeight = '500';
        optionCell.textContent = option;
        row.appendChild(optionCell);
        
        let totalScore = 0;
        
        // Score inputs for each criterion
        validCriteria.forEach((criterion, critIdx) => {
            const scoreCell = document.createElement('td');
            scoreCell.style.padding = 'var(--space-sm)';
            scoreCell.style.border = '1px solid var(--forge-accent)';
            scoreCell.style.textAlign = 'center';
            
            const scoreInput = document.createElement('input');
            scoreInput.type = 'number';
            scoreInput.min = '1';
            scoreInput.max = '10';
            scoreInput.value = scores[optIdx][critIdx] || '';
            scoreInput.style.width = '60px';
            scoreInput.style.padding = '4px';
            scoreInput.style.textAlign = 'center';
            scoreInput.style.background = 'var(--forge-surface)';
            scoreInput.style.border = '1px solid var(--forge-accent)';
            scoreInput.style.borderRadius = '4px';
            scoreInput.style.color = 'var(--forge-text)';
            scoreInput.dataset.optionIndex = optIdx;
            scoreInput.dataset.criterionIndex = critIdx;
            
            scoreInput.addEventListener('input', (e) => {
                const optIdx = parseInt(e.target.dataset.optionIndex);
                const critIdx = parseInt(e.target.dataset.criterionIndex);
                const score = parseInt(e.target.value) || 0;
                
                if (!scores[optIdx]) {
                    scores[optIdx] = {};
                }
                scores[optIdx][critIdx] = score;
                
                saveToStorage();
                updateMatrix();
            });
            
            scoreCell.appendChild(scoreInput);
            row.appendChild(scoreCell);
            
            // Calculate weighted score
            if (scores[optIdx][critIdx]) {
                totalScore += scores[optIdx][critIdx] * criterion.weight;
            }
        });
        
        // Total score
        const totalCell = document.createElement('td');
        totalCell.style.padding = 'var(--space-sm)';
        totalCell.style.border = '1px solid var(--forge-orange)';
        totalCell.style.textAlign = 'center';
        totalCell.style.fontWeight = '600';
        totalCell.style.color = 'var(--forge-orange)';
        totalCell.textContent = totalScore || '-';
        row.appendChild(totalCell);
        
        table.appendChild(row);
    });
    
    grid.appendChild(table);
    
    // Calculate and display ranked results
    calculateResults();
}

/**
 * Calculate ranked results
 */
function calculateResults() {
    const results = document.getElementById('results');
    const rankedList = document.getElementById('ranked-options');
    
    const validOptions = options.filter(opt => opt.trim() !== '');
    const validCriteria = criteria.filter(crit => crit.name.trim() !== '');
    
    if (validOptions.length === 0 || validCriteria.length === 0) {
        results.style.display = 'none';
        return;
    }
    
    // Calculate totals for each option
    const optionTotals = validOptions.map((option, optIdx) => {
        let total = 0;
        validCriteria.forEach((criterion, critIdx) => {
            if (scores[optIdx] && scores[optIdx][critIdx]) {
                total += scores[optIdx][critIdx] * criterion.weight;
            }
        });
        return { option, total, index: optIdx };
    });
    
    // Check if we have any scores
    const hasScores = optionTotals.some(item => item.total > 0);
    if (!hasScores) {
        results.style.display = 'none';
        return;
    }
    
    // Sort by total (descending)
    optionTotals.sort((a, b) => b.total - a.total);
    
    // Display ranked list
    rankedList.innerHTML = '';
    optionTotals.forEach((item, rank) => {
        const rankedItem = document.createElement('div');
        rankedItem.className = 'ranked-item';
        rankedItem.innerHTML = `
            <div class="rank-number">#${rank + 1}</div>
            <div class="rank-content">
                <div style="font-weight: 500; margin-bottom: 4px;">${item.option}</div>
                <div style="font-size: 0.875rem; color: var(--forge-text-muted);">Weighted Score</div>
            </div>
            <div class="rank-score">${item.total}</div>
        `;
        rankedList.appendChild(rankedItem);
    });
    
    results.style.display = 'block';
}

/**
 * Export matrix
 */
function exportMatrix() {
    const validOptions = options.filter(opt => opt.trim() !== '');
    const validCriteria = criteria.filter(crit => crit.name.trim() !== '');
    
    let output = 'DECISION MATRIX\n';
    output += '='.repeat(50) + '\n\n';
    
    output += 'OPTIONS:\n';
    validOptions.forEach((opt, idx) => {
        output += `${idx + 1}. ${opt}\n`;
    });
    
    output += '\nCRITERIA (with weights):\n';
    validCriteria.forEach((crit, idx) => {
        output += `${idx + 1}. ${crit.name} (Weight: ${crit.weight})\n`;
    });
    
    output += '\nSCORES:\n';
    output += 'Option'.padEnd(30);
    validCriteria.forEach(crit => {
        output += crit.name.substring(0, 15).padEnd(15);
    });
    output += 'Total\n';
    output += '-'.repeat(80) + '\n';
    
    const optionTotals = validOptions.map((option, optIdx) => {
        let total = 0;
        let scoreRow = option.substring(0, 28).padEnd(30);
        
        validCriteria.forEach((criterion, critIdx) => {
            const score = scores[optIdx] && scores[optIdx][critIdx] ? scores[optIdx][critIdx] : '-';
            scoreRow += String(score).padEnd(15);
            if (scores[optIdx] && scores[optIdx][critIdx]) {
                total += scores[optIdx][critIdx] * criterion.weight;
            }
        });
        
        scoreRow += total + '\n';
        return { option, total, row: scoreRow, index: optIdx };
    });
    
    optionTotals.forEach(item => {
        output += item.row;
    });
    
    output += '\nRANKED RESULTS:\n';
    optionTotals.sort((a, b) => b.total - a.total);
    optionTotals.forEach((item, rank) => {
        output += `${rank + 1}. ${item.option} - Score: ${item.total}\n`;
    });
    
    copyToClipboard(output);
    showToast('Matrix exported to clipboard');
}

/**
 * Copy results
 */
function copyResults() {
    const rankedList = document.getElementById('ranked-options');
    const items = rankedList.querySelectorAll('.ranked-item');
    
    let output = 'DECISION MATRIX RESULTS\n';
    output += '='.repeat(50) + '\n\n';
    
    items.forEach((item, idx) => {
        const rank = item.querySelector('.rank-number').textContent;
        const option = item.querySelector('.rank-content').textContent.split('\n')[0].trim();
        const score = item.querySelector('.rank-score').textContent;
        output += `${rank} ${option} - Score: ${score}\n`;
    });
    
    copyToClipboard(output);
    showToast('Results copied to clipboard');
}

/**
 * Save to localStorage
 */
function saveToStorage() {
    const data = {
        options,
        criteria,
        scores
    };
    localStorage.setItem('decisionMatrix', JSON.stringify(data));
}

/**
 * Load from localStorage
 */
function loadFromStorage() {
    const saved = localStorage.getItem('decisionMatrix');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            options = data.options || [];
            criteria = data.criteria || [];
            scores = data.scores || {};
            
            // Rebuild UI
            rebuildOptionsList();
            rebuildCriteriaList();
        } catch (e) {
            console.error('Failed to load saved data:', e);
        }
    } else {
        // Initialize with defaults
        options = ['', ''];
        criteria = [{ name: '', weight: 5 }, { name: '', weight: 5 }];
        rebuildOptionsList();
        rebuildCriteriaList();
    }
}

/**
 * Rebuild options list
 */
function rebuildOptionsList() {
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    options.forEach((option, i) => {
        const item = document.createElement('div');
        item.className = 'input-item';
        item.innerHTML = `
            <input type="text" class="option-input" placeholder="Option ${i + 1}" data-index="${i}" value="${option}">
            <button class="remove-btn" onclick="removeOption(${i})">×</button>
        `;
        optionsList.appendChild(item);
    });
}

/**
 * Rebuild criteria list
 */
function rebuildCriteriaList() {
    const criteriaList = document.getElementById('criteria-list');
    criteriaList.innerHTML = '';
    criteria.forEach((criterion, i) => {
        const item = document.createElement('div');
        item.className = 'input-item';
        item.innerHTML = `
            <input type="text" class="criterion-input" placeholder="Criterion ${i + 1}" data-index="${i}" value="${criterion.name}">
            <div class="weight-control">
                <label>Weight:</label>
                <input type="range" class="weight-slider" min="1" max="10" value="${criterion.weight}" data-index="${i}">
                <span class="weight-value">${criterion.weight}</span>
            </div>
            <button class="remove-btn" onclick="removeCriterion(${i})">×</button>
        `;
        criteriaList.appendChild(item);
    });
}

