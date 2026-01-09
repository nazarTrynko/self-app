/**
 * Life Audit Workbook
 * Reflection page
 */

const lifeDomains = [
    { id: 'career', name: 'Career', score: 5 },
    { id: 'health', name: 'Health', score: 5 },
    { id: 'relationships', name: 'Relationships', score: 5 },
    { id: 'finances', name: 'Finances', score: 5 },
    { id: 'personal-growth', name: 'Personal Growth', score: 5 },
    { id: 'fun-recreation', name: 'Fun & Recreation', score: 5 },
    { id: 'contribution', name: 'Contribution', score: 5 },
    { id: 'environment', name: 'Environment', score: 5 }
]

let domainScores = {}

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage()
    renderDomains()
    drawRadarChart()
})

/**
 * Render domains grid
 */
function renderDomains() {
    const grid = document.getElementById('domains-grid')
    grid.innerHTML = ''
    
    lifeDomains.forEach((domain) => {
        const score = domainScores[domain.id] || domain.score
        domainScores[domain.id] = score
        
        const item = document.createElement('div')
        item.className = 'domain-item'
        item.innerHTML = `
            <label>${domain.name}</label>
            <input type="range" min="1" max="10" value="${score}"
                   oninput="updateDomainScore('${domain.id}', this.value)"
                   data-domain="${domain.id}">
            <div class="domain-score">${score}</div>
        `
        grid.appendChild(item)
    })
}

/**
 * Update domain score
 */
function updateDomainScore(domainId, score) {
    domainScores[domainId] = parseInt(score)
    const scoreDisplay = document.querySelector(`[data-domain="${domainId}"]`).nextElementSibling
    scoreDisplay.textContent = score
    saveToStorage()
    drawRadarChart()
}

/**
 * Draw radar chart
 */
function drawRadarChart() {
    const canvas = document.getElementById('radar-chart')
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
        ctx.strokeStyle = 'rgba(139, 105, 20, 0.2)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2)
        ctx.stroke()
    }
    
    // Draw axes
    const numDomains = lifeDomains.length
    ctx.strokeStyle = 'rgba(139, 105, 20, 0.3)'
    ctx.lineWidth = 1
    
    for (let i = 0; i < numDomains; i++) {
        const angle = (Math.PI * 2 * i) / numDomains - Math.PI / 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
        
        // Domain labels
        const labelX = centerX + Math.cos(angle) * (radius + 20)
        const labelY = centerY + Math.sin(angle) * (radius + 20)
        ctx.fillStyle = '#3d2914'
        ctx.font = '12px Playfair Display'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(lifeDomains[i].name, labelX, labelY)
    }
    
    // Draw data polygon
    ctx.fillStyle = 'rgba(244, 164, 96, 0.3)'
    ctx.strokeStyle = '#f4a460'
    ctx.lineWidth = 2
    ctx.beginPath()
    
    lifeDomains.forEach((domain, i) => {
        const score = domainScores[domain.id] || 5
        const normalizedScore = (score / 10) * radius
        const angle = (Math.PI * 2 * i) / numDomains - Math.PI / 2
        const x = centerX + Math.cos(angle) * normalizedScore
        const y = centerY + Math.sin(angle) * normalizedScore
        
        if (i === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
    })
    
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    
    // Draw data points
    lifeDomains.forEach((domain, i) => {
        const score = domainScores[domain.id] || 5
        const normalizedScore = (score / 10) * radius
        const angle = (Math.PI * 2 * i) / numDomains - Math.PI / 2
        const x = centerX + Math.cos(angle) * normalizedScore
        const y = centerY + Math.sin(angle) * normalizedScore
        
        ctx.fillStyle = '#f4a460'
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
    })
}

/**
 * Export audit
 */
function exportAudit() {
    let output = 'LIFE AUDIT RESULTS\n'
    output += '='.repeat(50) + '\n\n'
    
    output += 'DOMAIN SCORES:\n'
    lifeDomains.forEach(domain => {
        const score = domainScores[domain.id] || 5
        output += `${domain.name}: ${score}/10\n`
    })
    
    output += '\nAVERAGE SCORE: '
    const avgScore = Object.values(domainScores).reduce((sum, s) => sum + s, 0) / lifeDomains.length
    output += avgScore.toFixed(1) + '/10\n'
    
    output += '\nAREAS NEEDING ATTENTION:\n'
    lifeDomains.forEach(domain => {
        const score = domainScores[domain.id] || 5
        if (score < 6) {
            output += `- ${domain.name} (${score}/10)\n`
        }
    })
    
    output += '\nAREAS THRIVING:\n'
    lifeDomains.forEach(domain => {
        const score = domainScores[domain.id] || 5
        if (score >= 8) {
            output += `- ${domain.name} (${score}/10)\n`
        }
    })
    
    copyToClipboard(output)
    showToast('Life audit exported to clipboard')
}

/**
 * Reset audit
 */
function resetAudit() {
    if (confirm('Reset all scores to 5?')) {
        lifeDomains.forEach(domain => {
            domainScores[domain.id] = 5
        })
        renderDomains()
        drawRadarChart()
        saveToStorage()
    }
}

/**
 * Save to localStorage
 */
function saveToStorage() {
    localStorage.setItem('lifeAudit', JSON.stringify(domainScores))
}

/**
 * Load from localStorage
 */
function loadFromStorage() {
    const saved = localStorage.getItem('lifeAudit')
    if (saved) {
        try {
            domainScores = JSON.parse(saved)
        } catch (e) {
            console.error('Failed to load saved data:', e)
        }
    }
}


