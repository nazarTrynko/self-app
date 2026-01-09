/* Ideation Engine v3.0 (Books) — Guided UI */

const STORAGE_KEY = 'ideation_engine_v3_guided_v1'

function safeJsonParse(value, fallback) {
    try {
        return JSON.parse(value)
    } catch {
        return fallback
    }
}

function loadState() {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return safeJsonParse(raw, { active: 'phase-0', checks: {} })
}

function saveState(state) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function setCopyButtonState(btn, nextLabel) {
    const original = btn.dataset.originalLabel || btn.textContent
    if (!btn.dataset.originalLabel) btn.dataset.originalLabel = original
    btn.textContent = nextLabel
    window.setTimeout(() => {
        btn.textContent = original
    }, 1200)
}

async function copyText(text) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        return
    }

    // Fallback
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', 'true')
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
}

function normalizePhaseLabel(phaseId) {
    if (phaseId === 'quick-tests') return 'Quick Tests'
    const match = phaseId.match(/^phase-(\d)$/)
    if (match) return `Phase ${match[1]}`
    return phaseId
}

function getPhaseIds() {
    return ['phase-0', 'phase-1', 'phase-2', 'phase-3', 'phase-4', 'phase-5', 'quick-tests']
}

function activatePhase(phaseId, { pushHash = true } = {}) {
    const tabs = Array.from(document.querySelectorAll('.tool-tab'))
    const panels = Array.from(document.querySelectorAll('.tool-panel'))

    tabs.forEach((tab) => {
        const isActive = tab.dataset.phase === phaseId
        tab.classList.toggle('active', isActive)
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false')
        tab.setAttribute('tabindex', isActive ? '0' : '-1')
    })

    panels.forEach((panel) => {
        const isActive = panel.id === phaseId
        panel.classList.toggle('active', isActive)
        panel.toggleAttribute('hidden', !isActive)
    })

    const labelEl = document.getElementById('currentPhaseLabel')
    if (labelEl) labelEl.textContent = normalizePhaseLabel(phaseId)

    if (pushHash) {
        const nextHash = `#${phaseId}`
        if (window.location.hash !== nextHash) window.location.hash = nextHash
    }

    const state = loadState()
    state.active = phaseId
    saveState(state)
}

function updateChecklistProgress() {
    const inputs = Array.from(document.querySelectorAll('input[type="checkbox"][data-check]'))
    const total = inputs.length
    const checked = inputs.filter(i => i.checked).length

    const el = document.getElementById('checklistProgress')
    if (el) el.textContent = `${checked}/${total}`
}

function initChecklist() {
    const state = loadState()
    const inputs = Array.from(document.querySelectorAll('input[type="checkbox"][data-check]'))

    inputs.forEach((input) => {
        const key = input.getAttribute('data-check')
        input.checked = Boolean(state.checks?.[key])

        input.addEventListener('change', () => {
            const next = loadState()
            next.checks = next.checks || {}
            next.checks[key] = input.checked
            saveState(next)
            updateChecklistProgress()
        })
    })

    updateChecklistProgress()
}

function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const targetId = btn.getAttribute('data-copy-target')
            const target = document.getElementById(targetId)
            if (!target) return

            const text = target.textContent || ''
            try {
                await copyText(text)
                setCopyButtonState(btn, 'Copied')
            } catch {
                setCopyButtonState(btn, 'Failed')
            }
        })
    })
}

function initTabNavigation() {
    const phaseIds = getPhaseIds()
    const tabs = Array.from(document.querySelectorAll('.tool-tab'))

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const phaseId = tab.dataset.phase
            if (!phaseId) return
            activatePhase(phaseId)
        })

        tab.addEventListener('keydown', (e) => {
            const current = tab.dataset.phase
            const idx = phaseIds.indexOf(current)
            if (idx === -1) return

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault()
                const next = phaseIds[(idx + 1) % phaseIds.length]
                activatePhase(next)
                document.querySelector(`.tool-tab[data-phase="${next}"]`)?.focus()
            }

            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault()
                const prev = phaseIds[(idx - 1 + phaseIds.length) % phaseIds.length]
                activatePhase(prev)
                document.querySelector(`.tool-tab[data-phase="${prev}"]`)?.focus()
            }
        })
    })

    document.querySelectorAll('[data-nav]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const dir = btn.getAttribute('data-nav')
            const state = loadState()
            const current = state.active || 'phase-0'
            const idx = phaseIds.indexOf(current)
            if (idx === -1) return

            if (dir === 'next') activatePhase(phaseIds[(idx + 1) % phaseIds.length])
            if (dir === 'prev') activatePhase(phaseIds[(idx - 1 + phaseIds.length) % phaseIds.length])
        })
    })
}

function initReset() {
    const btn = document.getElementById('resetProgressBtn')
    if (!btn) return

    btn.addEventListener('click', () => {
        window.localStorage.removeItem(STORAGE_KEY)
        initChecklist()
        activatePhase('phase-0')
        setCopyButtonState(btn, 'Reset')
    })
}

function initParticleBackground() {
    // Optional: if ParticleBackground is present, start it.
    if (typeof ParticleBackground?.create !== 'function') return

    ParticleBackground.create({
        containerId: 'bg-canvas',
        particleCount: 42,
        connectionDistance: 150,
        connectionOpacity: 0.12
    })
}

function initFromHashOrState() {
    const phaseIds = getPhaseIds()
    const hash = (window.location.hash || '').replace('#', '')
    const saved = loadState()

    const initial = phaseIds.includes(hash) ? hash : (saved.active || 'phase-0')
    activatePhase(initial, { pushHash: phaseIds.includes(hash) })
}

function main() {
    // Ensure panels start hidden by default until activated
    document.querySelectorAll('.tool-panel').forEach((panel) => {
        panel.toggleAttribute('hidden', true)
    })

    initParticleBackground()
    initCopyButtons()
    initChecklist()
    initTabNavigation()
    initReset()
    initFromHashOrState()

    window.addEventListener('hashchange', () => {
        const phaseIds = getPhaseIds()
        const hash = (window.location.hash || '').replace('#', '')
        if (phaseIds.includes(hash)) activatePhase(hash, { pushHash: false })
    })
}

document.addEventListener('DOMContentLoaded', main)


