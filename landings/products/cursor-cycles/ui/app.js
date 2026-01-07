/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INPUT VALIDATOR — Validation and Sanitization for User Inputs
 * ═══════════════════════════════════════════════════════════════════════════
 */

class InputValidator {
    /**
     * Sanitize HTML/XSS from input
     */
    static sanitize(input) {
        if (typeof input !== 'string') return '';
        return input
            .replace(/[<>]/g, '') // Remove angle brackets
            .replace(/javascript:/gi, '') // Remove javascript: URIs
            .replace(/on\w+\s*=/gi, '') // Remove event handlers
            .replace(/data:/gi, '') // Remove data: URIs
            .trim();
    }

    /**
     * Validate seed prompt
     */
    static validateSeedPrompt(prompt) {
        const sanitized = this.sanitize(prompt);
        const errors = [];

        if (!sanitized) {
            errors.push('Seed prompt is required');
        } else if (sanitized.length < 10) {
            errors.push('Seed prompt must be at least 10 characters');
        } else if (sanitized.length > 10000) {
            errors.push('Seed prompt must be less than 10,000 characters');
        }

        return {
            valid: errors.length === 0,
            value: sanitized,
            errors
        };
    }

    /**
     * Validate goal
     */
    static validateGoal(goal) {
        const sanitized = this.sanitize(goal);
        // Goal is optional, but if provided should be meaningful
        if (sanitized && sanitized.length < 5) {
            return {
                valid: false,
                value: sanitized,
                errors: ['Goal must be at least 5 characters if provided']
            };
        }

        return {
            valid: true,
            value: sanitized,
            errors: []
        };
    }

    /**
     * Validate benchmarks
     */
    static validateBenchmarks(benchmarkText) {
        const sanitized = this.sanitize(benchmarkText);
        const lines = sanitized
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        const errors = [];
        const validBenchmarks = [];

        for (const line of lines) {
            if (line.length < 5) {
                errors.push(`Benchmark "${line.slice(0, 20)}..." is too short`);
            } else if (line.length > 500) {
                errors.push(`Benchmark "${line.slice(0, 20)}..." is too long`);
            } else {
                validBenchmarks.push(line);
            }
        }

        return {
            valid: errors.length === 0 || validBenchmarks.length > 0,
            value: validBenchmarks,
            errors,
            warnings: errors.length > 0 ? errors : []
        };
    }

    /**
     * Validate API key format
     */
    static validateApiKey(key, provider) {
        const sanitized = this.sanitize(key);
        const errors = [];

        if (provider === 'local' || provider === 'mock') {
            return { valid: true, value: sanitized, errors: [] };
        }

        if (!sanitized) {
            errors.push('API key is required for this provider');
        } else if (provider === 'openai' && !sanitized.startsWith('sk-')) {
            errors.push('OpenAI API keys should start with "sk-"');
        } else if (provider === 'anthropic' && !sanitized.startsWith('sk-ant-')) {
            errors.push('Anthropic API keys should start with "sk-ant-"');
        }

        return {
            valid: errors.length === 0,
            value: sanitized,
            errors
        };
    }

    /**
     * Validate numeric input
     */
    static validateNumber(value, min, max, name) {
        const num = parseInt(value, 10);
        const errors = [];

        if (isNaN(num)) {
            errors.push(`${name} must be a number`);
        } else if (num < min) {
            errors.push(`${name} must be at least ${min}`);
        } else if (num > max) {
            errors.push(`${name} must be at most ${max}`);
        }

        return {
            valid: errors.length === 0,
            value: isNaN(num) ? min : Math.max(min, Math.min(max, num)),
            errors
        };
    }

    /**
     * Show validation error
     */
    static showError(element, message) {
        // Remove existing error
        this.clearError(element);

        // Add error class
        element.classList.add('input-error');

        // Create error element
        const errorEl = document.createElement('div');
        errorEl.className = 'validation-error';
        errorEl.textContent = message;
        element.parentNode.appendChild(errorEl);
    }

    /**
     * Clear validation error
     */
    static clearError(element) {
        element.classList.remove('input-error');
        const existingError = element.parentNode.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
    }

    /**
     * Clear all validation errors
     */
    static clearAllErrors() {
        document.querySelectorAll('.validation-error').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    }
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CURSOR CYCLES 2.0 — Main Application Controller
 * ═══════════════════════════════════════════════════════════════════════════
 */

class CursorCyclesApp {
    constructor() {
        // Initialize systems
        this.engine = null;
        this.metaLearning = null;
        this.chart = null;
        this.llmExecutor = null;
        this.geneBank = null;
        this.genealogyView = null;
        
        // UI state
        this.config = {
            populationSize: 8,
            maxGenerations: 50,
            goal: '',
            seedPrompt: '',
            benchmarks: [],
            checkpointInterval: 10,
            eliteCount: 2,
            mutationRate: 0.25
        };

        // Settings state
        this.settings = {
            evalMode: 'heuristic',
            apiProvider: 'openai',
            apiModel: 'gpt-4o-mini',
            apiKey: ''
        };

        this.selectedCheckpointCandidate = null;
        this.manualBreedingParent1 = null;
        this.manualBreedingParent2 = null;
        
        // Bind methods
        this.handleStartEvolution = this.handleStartEvolution.bind(this);
        this.handlePauseEvolution = this.handlePauseEvolution.bind(this);
        this.handleCheckpoint = this.handleCheckpoint.bind(this);
        
        // Initialize when DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    /**
     * Initialize the application
     */
    init() {
        this.bindElements();
        this.bindEvents();
        this.initChart();
        this.initLLMExecutor();
        this.initGeneBank();
        this.initKeyboardShortcuts();
        this.loadSettings();
        this.checkForSavedEvolution();
        this.log('info', 'System initialized. Configure and start evolution.');
    }

    /**
     * Check for saved evolution and prompt to resume
     */
    checkForSavedEvolution() {
        if (this.hasSavedEvolution()) {
            const summary = this.getSavedEvolutionSummary();
            if (summary) {
                this.log('info', `Found saved evolution: Gen ${summary.generation}/${summary.maxGenerations}`);
                
                // Add resume option to start button
                this.elements.startBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5,3 19,12 5,21"/>
                    </svg>
                    Resume Evolution
                `;
                this.elements.startBtn.title = `Last saved: ${summary.savedAt}`;
                
                // Store flag for start handler
                this._hasSavedEvolution = true;
            }
        }
    }

    /**
     * Initialize LLM Executor
     */
    initLLMExecutor() {
        this.llmExecutor = new LLMExecutor({
            enabled: false,
            provider: 'mock'
        });
    }

    /**
     * Initialize Gene Bank
     */
    initGeneBank() {
        this.geneBank = new GeneBank();
    }

    /**
     * Bind DOM elements
     */
    bindElements() {
        // Config inputs
        this.elements = {
            goalInput: document.getElementById('goalInput'),
            seedPrompt: document.getElementById('seedPrompt'),
            benchmarkCases: document.getElementById('benchmarkCases'),
            
            // Buttons
            startBtn: document.getElementById('startEvolution'),
            pauseBtn: document.getElementById('pauseEvolution'),
            
            // Status
            statusIndicator: document.getElementById('statusIndicator'),
            statusText: document.getElementById('statusText'),
            
            // Progress
            currentGen: document.getElementById('currentGen'),
            maxGen: document.getElementById('maxGen'),
            
            // Population
            populationGrid: document.getElementById('populationGrid'),
            
            // Log
            activityLog: document.getElementById('activityLog'),
            
            // Analysis
            bestFitnessBadge: document.getElementById('bestFitnessBadge'),
            evolvedPromptOutput: document.getElementById('evolvedPromptOutput'),
            dnaView: document.getElementById('dnaView'),
            
            // Dimension bars
            dimensions: {
                clarity: { value: document.getElementById('dimClarity'), bar: document.getElementById('dimClarityBar') },
                completeness: { value: document.getElementById('dimCompleteness'), bar: document.getElementById('dimCompletenessBar') },
                specificity: { value: document.getElementById('dimSpecificity'), bar: document.getElementById('dimSpecificityBar') },
                robustness: { value: document.getElementById('dimRobustness'), bar: document.getElementById('dimRobustnessBar') },
                efficiency: { value: document.getElementById('dimEfficiency'), bar: document.getElementById('dimEfficiencyBar') },
                novelty: { value: document.getElementById('dimNovelty'), bar: document.getElementById('dimNoveltyBar') }
            },
            
            // Modals
            checkpointModal: document.getElementById('checkpointModal'),
            checkpointGen: document.getElementById('checkpointGen'),
            checkpointCandidates: document.getElementById('checkpointCandidates'),
            promptModal: document.getElementById('promptModal'),
            fullPromptContent: document.getElementById('fullPromptContent'),
            
            // Settings Modal
            settingsModal: document.getElementById('settingsModal'),
            openSettingsBtn: document.getElementById('openSettings'),
            closeSettingsBtn: document.getElementById('closeSettings'),
            saveSettingsBtn: document.getElementById('saveSettings'),
            cancelSettingsBtn: document.getElementById('cancelSettings'),
            
            // Settings Fields
            evalModeHeuristic: document.getElementById('evalModeHeuristic'),
            evalModeLLM: document.getElementById('evalModeLLM'),
            apiConfigSection: document.getElementById('apiConfigSection'),
            apiProvider: document.getElementById('apiProvider'),
            apiModel: document.getElementById('apiModel'),
            apiKey: document.getElementById('apiKey'),
            apiKeyField: document.getElementById('apiKeyField'),
            toggleApiKeyVisibility: document.getElementById('toggleApiKeyVisibility'),
            apiStatus: document.getElementById('apiStatus'),
            checkpointInterval: document.getElementById('checkpointInterval'),
            eliteCount: document.getElementById('eliteCount'),
            mutationRate: document.getElementById('mutationRate'),
            mutationRateValue: document.getElementById('mutationRateValue'),
            clearAllDataBtn: document.getElementById('clearAllData'),
            exportAllSettingsBtn: document.getElementById('exportAllSettings'),
            
            // Loading elements
            evolutionProgressBar: document.getElementById('evolutionProgressBar'),
            evolutionProgressText: document.getElementById('evolutionProgressText'),
            evolutionLoadingOverlay: document.getElementById('evolutionLoadingOverlay'),
            loadingText: document.getElementById('loadingText'),
            
            // Gene Bank
            geneBankModal: document.getElementById('geneBankModal'),
            openGeneBankBtn: document.getElementById('openGeneBank'),
            closeGeneBankBtn: document.getElementById('closeGeneBank'),
            closeGeneBankBtn2: document.getElementById('closeGeneBankBtn'),
            geneBankList: document.getElementById('geneBankList'),
            geneBankSearch: document.getElementById('geneBankSearch'),
            geneBankFilter: document.getElementById('geneBankFilter'),
            geneCountStat: document.getElementById('geneCountStat'),
            favCountStat: document.getElementById('favCountStat'),
            exportGeneBankBtn: document.getElementById('exportGeneBank'),
            importGeneBankBtn: document.getElementById('importGeneBank'),
            
            // Genealogy
            genealogyModal: document.getElementById('genealogyModal'),
            genealogyCanvas: document.getElementById('genealogyCanvas'),
            viewGenealogyBtn: document.getElementById('viewGenealogy'),
            closeGenealogyBtn: document.getElementById('closeGenealogy'),
            resetGenealogyViewBtn: document.getElementById('resetGenealogyView'),
            
            // Manual Breeding
            checkpointTabs: document.querySelectorAll('.checkpoint-tab'),
            autoSelectionTab: document.getElementById('autoSelectionTab'),
            manualBreedingTab: document.getElementById('manualBreedingTab'),
            autoSelectionActions: document.getElementById('autoSelectionActions'),
            manualBreedingActions: document.getElementById('manualBreedingActions'),
            parent1Selection: document.getElementById('parent1Selection'),
            parent2Selection: document.getElementById('parent2Selection'),
            breedingPreview: document.getElementById('breedingPreview'),
            breedSelectedBtn: document.getElementById('breedSelected'),
            cancelBreedingBtn: document.getElementById('cancelBreeding'),
            
            // A/B Testing
            abTestingModal: document.getElementById('abTestingModal'),
            openAbTestingBtn: document.getElementById('openAbTesting'),
            closeAbTestingBtn: document.getElementById('closeAbTesting'),
            abPromptASelect: document.getElementById('abPromptASelect'),
            abPromptBSelect: document.getElementById('abPromptBSelect'),
            abFitnessA: document.getElementById('abFitnessA'),
            abFitnessB: document.getElementById('abFitnessB'),
            abContentA: document.getElementById('abContentA'),
            abContentB: document.getElementById('abContentB'),
            abDiffContent: document.getElementById('abDiffContent'),
            abCopyABtn: document.getElementById('abCopyA'),
            abCopyBBtn: document.getElementById('abCopyB'),
            abUseBestBtn: document.getElementById('abUseBest')
        };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Loading States
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Show loading overlay
     */
    showLoading(text = 'Loading...') {
        if (this.elements.evolutionLoadingOverlay) {
            this.elements.evolutionLoadingOverlay.classList.remove('hidden');
        }
        if (this.elements.loadingText) {
            this.elements.loadingText.textContent = text;
        }
    }

    /**
     * Hide loading overlay
     */
    hideLoading() {
        if (this.elements.evolutionLoadingOverlay) {
            this.elements.evolutionLoadingOverlay.classList.add('hidden');
        }
    }

    /**
     * Update progress bar
     */
    updateProgress(current, total) {
        const percent = Math.round((current / total) * 100);
        if (this.elements.evolutionProgressBar) {
            this.elements.evolutionProgressBar.style.width = `${percent}%`;
        }
        if (this.elements.evolutionProgressText) {
            this.elements.evolutionProgressText.textContent = `${percent}%`;
        }
    }

    /**
     * Set button loading state
     */
    setButtonLoading(button, loading) {
        if (loading) {
            button.classList.add('btn-loading');
            button.disabled = true;
        } else {
            button.classList.remove('btn-loading');
            button.disabled = false;
        }
    }

    /**
     * Render skeleton loaders in population grid
     */
    showPopulationSkeletons(count = 8) {
        if (!this.elements.populationGrid) return;
        
        this.elements.populationGrid.innerHTML = Array(count)
            .fill(0)
            .map(() => `<div class="population-card skeleton skeleton-card"></div>`)
            .join('');
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Start/Pause
        this.elements.startBtn.addEventListener('click', this.handleStartEvolution);
        this.elements.pauseBtn.addEventListener('click', this.handlePauseEvolution);
        
        // Population size buttons
        document.querySelectorAll('.config-section.half:first-child .btn-option').forEach(btn => {
            btn.addEventListener('click', (e) => this.handlePopulationSizeChange(e));
        });
        
        // Max generations buttons
        document.querySelectorAll('.config-section.half:last-child .btn-option').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleMaxGenChange(e));
        });
        
        // Copy prompt
        document.getElementById('copyPrompt')?.addEventListener('click', () => this.copyPromptToClipboard());
        
        // View full prompt
        document.getElementById('viewFullPrompt')?.addEventListener('click', () => this.showPromptModal());
        
        // Export history
        document.getElementById('exportHistory')?.addEventListener('click', () => this.exportHistory());
        
        // Export DNA
        document.getElementById('exportDNA')?.addEventListener('click', () => this.exportDNA());
        
        // Clear log
        document.getElementById('clearLog')?.addEventListener('click', () => this.clearLog());
        
        // Checkpoint modal buttons
        document.getElementById('selectWinner')?.addEventListener('click', () => this.handleSelectWinner());
        document.getElementById('continueEvolution')?.addEventListener('click', () => this.handleContinueEvolution());
        document.getElementById('stopEvolution')?.addEventListener('click', () => this.handleStopEvolution());
        
        // Prompt modal close
        document.querySelector('#promptModal .modal-close')?.addEventListener('click', () => this.hidePromptModal());
        document.querySelector('#promptModal .modal-backdrop')?.addEventListener('click', () => this.hidePromptModal());
        
        // Copy full prompt
        document.getElementById('copyFullPrompt')?.addEventListener('click', () => {
            this.copyPromptToClipboard();
            this.hidePromptModal();
        });

        // Settings modal
        this.elements.openSettingsBtn?.addEventListener('click', () => this.openSettingsModal());
        this.elements.closeSettingsBtn?.addEventListener('click', () => this.closeSettingsModal());
        this.elements.saveSettingsBtn?.addEventListener('click', () => this.saveSettings());
        this.elements.cancelSettingsBtn?.addEventListener('click', () => this.closeSettingsModal());
        document.querySelector('#settingsModal .modal-backdrop')?.addEventListener('click', () => this.closeSettingsModal());

        // Settings field changes
        this.elements.evalModeHeuristic?.addEventListener('change', () => this.handleEvalModeChange());
        this.elements.evalModeLLM?.addEventListener('change', () => this.handleEvalModeChange());
        this.elements.apiProvider?.addEventListener('change', () => this.handleProviderChange());
        this.elements.apiKey?.addEventListener('input', () => this.updateApiStatus());
        this.elements.toggleApiKeyVisibility?.addEventListener('click', () => this.toggleApiKeyVisibility());
        this.elements.mutationRate?.addEventListener('input', () => this.updateMutationRateDisplay());
        
        // Data management
        this.elements.clearAllDataBtn?.addEventListener('click', () => this.clearAllData());
        this.elements.exportAllSettingsBtn?.addEventListener('click', () => this.exportAllSettings());

        // Collapsible panels (mobile)
        this.initCollapsiblePanels();

        // Gene Bank
        this.elements.openGeneBankBtn?.addEventListener('click', () => this.openGeneBankModal());
        this.elements.closeGeneBankBtn?.addEventListener('click', () => this.closeGeneBankModal());
        this.elements.closeGeneBankBtn2?.addEventListener('click', () => this.closeGeneBankModal());
        document.querySelector('#geneBankModal .modal-backdrop')?.addEventListener('click', () => this.closeGeneBankModal());
        this.elements.geneBankSearch?.addEventListener('input', () => this.filterGeneBank());
        this.elements.geneBankFilter?.addEventListener('change', () => this.filterGeneBank());
        this.elements.exportGeneBankBtn?.addEventListener('click', () => this.exportGeneBank());
        this.elements.importGeneBankBtn?.addEventListener('click', () => this.importGeneBank());

        // Genealogy
        this.elements.viewGenealogyBtn?.addEventListener('click', () => this.openGenealogyModal());
        this.elements.closeGenealogyBtn?.addEventListener('click', () => this.closeGenealogyModal());
        document.querySelector('#genealogyModal .modal-backdrop')?.addEventListener('click', () => this.closeGenealogyModal());
        this.elements.resetGenealogyViewBtn?.addEventListener('click', () => this.genealogyView?.resetView());

        // Manual Breeding
        this.elements.checkpointTabs?.forEach(tab => {
            tab.addEventListener('click', () => this.switchCheckpointTab(tab.dataset.tab));
        });
        this.elements.breedSelectedBtn?.addEventListener('click', () => this.executeManualBreeding());
        this.elements.cancelBreedingBtn?.addEventListener('click', () => this.switchCheckpointTab('auto'));

        // A/B Testing
        this.elements.openAbTestingBtn?.addEventListener('click', () => this.openAbTestingModal());
        this.elements.closeAbTestingBtn?.addEventListener('click', () => this.closeAbTestingModal());
        document.querySelector('#abTestingModal .modal-backdrop')?.addEventListener('click', () => this.closeAbTestingModal());
        this.elements.abPromptASelect?.addEventListener('change', () => this.updateAbComparison());
        this.elements.abPromptBSelect?.addEventListener('change', () => this.updateAbComparison());
        this.elements.abCopyABtn?.addEventListener('click', () => this.copyAbPrompt('a'));
        this.elements.abCopyBBtn?.addEventListener('click', () => this.copyAbPrompt('b'));
        this.elements.abUseBestBtn?.addEventListener('click', () => this.useAbBest());
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // A/B Testing
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Open A/B testing modal
     */
    openAbTestingModal() {
        this.populateAbSelects();
        this.elements.abTestingModal?.classList.remove('hidden');
    }

    /**
     * Close A/B testing modal
     */
    closeAbTestingModal() {
        this.elements.abTestingModal?.classList.add('hidden');
    }

    /**
     * Populate A/B select dropdowns
     */
    populateAbSelects() {
        if (!this.engine?.population) {
            const emptyOption = '<option value="">No prompts available</option>';
            if (this.elements.abPromptASelect) this.elements.abPromptASelect.innerHTML = emptyOption;
            if (this.elements.abPromptBSelect) this.elements.abPromptBSelect.innerHTML = emptyOption;
            return;
        }

        const options = this.engine.population
            .sort((a, b) => (b.fitness || 0) - (a.fitness || 0))
            .map((dna, i) => `
                <option value="${dna.id}">
                    #${i + 1} - Fitness: ${dna.fitness?.toFixed(2) || '--'}
                </option>
            `).join('');

        const defaultOption = '<option value="">Select prompt...</option>';
        
        if (this.elements.abPromptASelect) {
            this.elements.abPromptASelect.innerHTML = defaultOption + options;
        }
        if (this.elements.abPromptBSelect) {
            this.elements.abPromptBSelect.innerHTML = defaultOption + options;
        }

        // Auto-select top 2
        if (this.engine.population.length >= 2) {
            if (this.elements.abPromptASelect) {
                this.elements.abPromptASelect.value = this.engine.population[0].id;
            }
            if (this.elements.abPromptBSelect) {
                this.elements.abPromptBSelect.value = this.engine.population[1].id;
            }
            this.updateAbComparison();
        }
    }

    /**
     * Update A/B comparison view
     */
    updateAbComparison() {
        const idA = this.elements.abPromptASelect?.value;
        const idB = this.elements.abPromptBSelect?.value;

        const promptA = idA ? this.engine?.population?.find(p => p.id === idA) : null;
        const promptB = idB ? this.engine?.population?.find(p => p.id === idB) : null;

        // Update content A
        if (promptA) {
            const contentA = promptA.toPrompt?.() || '';
            if (this.elements.abContentA) this.elements.abContentA.textContent = contentA;
            if (this.elements.abFitnessA) this.elements.abFitnessA.textContent = promptA.fitness?.toFixed(2) || '--';
        } else {
            if (this.elements.abContentA) this.elements.abContentA.textContent = 'Select a prompt to compare';
            if (this.elements.abFitnessA) this.elements.abFitnessA.textContent = '--';
        }

        // Update content B
        if (promptB) {
            const contentB = promptB.toPrompt?.() || '';
            if (this.elements.abContentB) this.elements.abContentB.textContent = contentB;
            if (this.elements.abFitnessB) this.elements.abFitnessB.textContent = promptB.fitness?.toFixed(2) || '--';
        } else {
            if (this.elements.abContentB) this.elements.abContentB.textContent = 'Select a prompt to compare';
            if (this.elements.abFitnessB) this.elements.abFitnessB.textContent = '--';
        }

        // Update diff view
        if (promptA && promptB) {
            this.updateDiffView(promptA.toPrompt?.() || '', promptB.toPrompt?.() || '');
        } else {
            if (this.elements.abDiffContent) {
                this.elements.abDiffContent.textContent = 'Select two prompts to see differences';
            }
        }
    }

    /**
     * Update diff view between two prompts
     */
    updateDiffView(textA, textB) {
        if (!this.elements.abDiffContent) return;

        const linesA = textA.split('\n');
        const linesB = textB.split('\n');
        const maxLines = Math.max(linesA.length, linesB.length);
        
        let html = '';
        
        for (let i = 0; i < maxLines; i++) {
            const lineA = linesA[i] || '';
            const lineB = linesB[i] || '';
            
            if (lineA === lineB) {
                if (lineA.trim()) {
                    html += `<div class="diff-line diff-same">${this.escapeHtml(lineA)}</div>`;
                }
            } else {
                if (lineA && !linesB.includes(lineA)) {
                    html += `<div class="diff-line diff-removed">- ${this.escapeHtml(lineA)}</div>`;
                }
                if (lineB && !linesA.includes(lineB)) {
                    html += `<div class="diff-line diff-added">+ ${this.escapeHtml(lineB)}</div>`;
                }
            }
        }

        this.elements.abDiffContent.innerHTML = html || '<span style="color: var(--text-muted)">Prompts are identical</span>';
    }

    /**
     * Copy A/B prompt to clipboard
     */
    copyAbPrompt(side) {
        const id = side === 'a' 
            ? this.elements.abPromptASelect?.value 
            : this.elements.abPromptBSelect?.value;
        
        if (!id) {
            this.log('error', 'No prompt selected');
            return;
        }

        const prompt = this.engine?.population?.find(p => p.id === id);
        if (!prompt) return;

        const text = prompt.toPrompt?.() || '';
        navigator.clipboard.writeText(text).then(() => {
            this.log('success', `Prompt ${side.toUpperCase()} copied to clipboard`);
        });
    }

    /**
     * Use the higher fitness prompt as seed
     */
    useAbBest() {
        const idA = this.elements.abPromptASelect?.value;
        const idB = this.elements.abPromptBSelect?.value;

        const promptA = idA ? this.engine?.population?.find(p => p.id === idA) : null;
        const promptB = idB ? this.engine?.population?.find(p => p.id === idB) : null;

        let bestPrompt = null;
        if (promptA && promptB) {
            bestPrompt = (promptA.fitness || 0) >= (promptB.fitness || 0) ? promptA : promptB;
        } else {
            bestPrompt = promptA || promptB;
        }

        if (!bestPrompt) {
            this.log('error', 'No prompt selected');
            return;
        }

        const text = bestPrompt.toPrompt?.() || '';
        if (this.elements.seedPrompt) {
            this.elements.seedPrompt.value = text;
        }

        this.closeAbTestingModal();
        this.log('success', `Using prompt with fitness ${bestPrompt.fitness?.toFixed(2)} as seed`);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Manual Breeding
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Switch checkpoint tab
     */
    switchCheckpointTab(tabName) {
        this.elements.checkpointTabs?.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        if (tabName === 'auto') {
            this.elements.autoSelectionTab?.classList.remove('hidden');
            this.elements.manualBreedingTab?.classList.add('hidden');
            this.elements.autoSelectionActions?.classList.remove('hidden');
            this.elements.manualBreedingActions?.classList.add('hidden');
        } else {
            this.elements.autoSelectionTab?.classList.add('hidden');
            this.elements.manualBreedingTab?.classList.remove('hidden');
            this.elements.autoSelectionActions?.classList.add('hidden');
            this.elements.manualBreedingActions?.classList.remove('hidden');
            
            // Reset breeding selection
            this.manualBreedingParent1 = null;
            this.manualBreedingParent2 = null;
            this.updateBreedingPreview();
        }
    }

    /**
     * Render parent selection for manual breeding
     */
    renderParentSelections(candidates) {
        const html = candidates.map(dna => `
            <div class="parent-candidate" data-id="${dna.id}">
                <span class="fitness">${dna.fitness?.toFixed(2) || '--'}</span>
                <div class="preview">${this.escapeHtml(dna.toPrompt?.()?.slice(0, 50) || '')}...</div>
            </div>
        `).join('');

        if (this.elements.parent1Selection) {
            this.elements.parent1Selection.innerHTML = html;
            this.elements.parent1Selection.querySelectorAll('.parent-candidate').forEach(el => {
                el.addEventListener('click', () => this.selectParent(1, el.dataset.id, el));
            });
        }

        if (this.elements.parent2Selection) {
            this.elements.parent2Selection.innerHTML = html;
            this.elements.parent2Selection.querySelectorAll('.parent-candidate').forEach(el => {
                el.addEventListener('click', () => this.selectParent(2, el.dataset.id, el));
            });
        }
    }

    /**
     * Select a parent for breeding
     */
    selectParent(parentNum, dnaId, element) {
        const container = parentNum === 1 ? this.elements.parent1Selection : this.elements.parent2Selection;
        
        // Clear other selections in this column
        container?.querySelectorAll('.parent-candidate').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');

        if (parentNum === 1) {
            this.manualBreedingParent1 = dnaId;
        } else {
            this.manualBreedingParent2 = dnaId;
        }

        this.updateBreedingPreview();
    }

    /**
     * Update breeding preview
     */
    updateBreedingPreview() {
        const canBreed = this.manualBreedingParent1 && this.manualBreedingParent2 
            && this.manualBreedingParent1 !== this.manualBreedingParent2;

        if (this.elements.breedSelectedBtn) {
            this.elements.breedSelectedBtn.disabled = !canBreed;
        }

        if (!this.elements.breedingPreview) return;

        if (!canBreed) {
            this.elements.breedingPreview.textContent = 'Select two different parents to see crossover preview';
            return;
        }

        // Get parent DNAs
        const parent1 = this.engine?.population?.find(p => p.id === this.manualBreedingParent1);
        const parent2 = this.engine?.population?.find(p => p.id === this.manualBreedingParent2);

        if (!parent1 || !parent2) {
            this.elements.breedingPreview.textContent = 'Parents not found in current population';
            return;
        }

        // Show simple preview of what genes will be combined
        let previewText = 'Genes from Parent 1:\n';
        let count = 0;
        for (const [name, gene] of Object.entries(parent1.genes)) {
            if (gene.active && Math.random() > 0.5) {
                previewText += `  • ${name}\n`;
                count++;
            }
        }
        previewText += `\nGenes from Parent 2:\n`;
        for (const [name, gene] of Object.entries(parent2.genes)) {
            if (gene.active && count < 4) {
                previewText += `  • ${name}\n`;
            }
        }
        previewText += '\n(Final result will include random mutation)';

        this.elements.breedingPreview.textContent = previewText;
    }

    /**
     * Execute manual breeding
     */
    executeManualBreeding() {
        if (!this.manualBreedingParent1 || !this.manualBreedingParent2) {
            this.log('error', 'Please select two parents');
            return;
        }

        const parent1 = this.engine?.population?.find(p => p.id === this.manualBreedingParent1);
        const parent2 = this.engine?.population?.find(p => p.id === this.manualBreedingParent2);

        if (!parent1 || !parent2) {
            this.log('error', 'Parents not found');
            return;
        }

        // Manually breed
        const child = GeneticOperators.crossover(parent1, parent2);
        GeneticOperators.mutate(child, this.config.mutationRate || 0.25);

        // Add child to population (replace worst performer)
        if (this.engine) {
            this.engine.population.sort((a, b) => (b.fitness || 0) - (a.fitness || 0));
            this.engine.population[this.engine.population.length - 1] = child;
            
            this.log('success', `Manually bred new prompt (fitness pending)`);
        }

        // Close modal and continue
        this.hideCheckpointModal();
        this.checkpointResolve?.(true);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Genealogy Modal
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Open genealogy modal
     */
    openGenealogyModal() {
        this.elements.genealogyModal?.classList.remove('hidden');
        
        // Initialize genealogy view if needed
        if (!this.genealogyView && this.elements.genealogyCanvas) {
            setTimeout(() => {
                this.genealogyView = new GenealogyView('genealogyCanvas');
                if (this.engine?.history) {
                    this.genealogyView.buildFromHistory(this.engine.history);
                }
            }, 100);
        } else if (this.genealogyView && this.engine?.history) {
            this.genealogyView.buildFromHistory(this.engine.history);
        }
    }

    /**
     * Close genealogy modal
     */
    closeGenealogyModal() {
        this.elements.genealogyModal?.classList.add('hidden');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Gene Bank Modal
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Open gene bank modal
     */
    openGeneBankModal() {
        this.renderGeneBankList();
        this.updateGeneBankStats();
        this.elements.geneBankModal?.classList.remove('hidden');
    }

    /**
     * Close gene bank modal
     */
    closeGeneBankModal() {
        this.elements.geneBankModal?.classList.add('hidden');
    }

    /**
     * Update gene bank statistics
     */
    updateGeneBankStats() {
        if (!this.geneBank) return;
        
        const stats = this.geneBank.getStats();
        if (this.elements.geneCountStat) {
            this.elements.geneCountStat.textContent = stats.total;
        }
        if (this.elements.favCountStat) {
            this.elements.favCountStat.textContent = stats.favorites;
        }
    }

    /**
     * Render gene bank list
     */
    renderGeneBankList() {
        if (!this.geneBank || !this.elements.geneBankList) return;

        const searchQuery = this.elements.geneBankSearch?.value || '';
        const typeFilter = this.elements.geneBankFilter?.value || 'all';

        let genes;
        if (searchQuery) {
            genes = this.geneBank.search(searchQuery);
        } else if (typeFilter !== 'all') {
            genes = this.geneBank.getByType(typeFilter);
        } else {
            genes = this.geneBank.getTop(50);
        }

        if (genes.length === 0) {
            this.elements.geneBankList.innerHTML = `
                <div class="empty-state">
                    <p>No genes ${searchQuery ? 'match your search' : 'stored yet'}.</p>
                    <p class="hint">Save high-performing genes from your evolutions to reuse later.</p>
                </div>
            `;
            return;
        }

        this.elements.geneBankList.innerHTML = genes.map(gene => `
            <div class="gene-card" data-gene-id="${gene.id}">
                <div class="gene-card-header">
                    <span class="gene-type-badge">${gene.type}</span>
                    <span class="gene-fitness">${gene.fitness?.toFixed(2) || '--'}</span>
                </div>
                <div class="gene-content">${this.escapeHtml(gene.content.slice(0, 200))}${gene.content.length > 200 ? '...' : ''}</div>
                <div class="gene-card-footer">
                    <div class="gene-tags">
                        ${(gene.tags || []).slice(0, 3).map(tag => `<span class="gene-tag">${this.escapeHtml(tag)}</span>`).join('')}
                    </div>
                    <div class="gene-actions">
                        <button class="btn-icon ${gene.favorite ? 'favorite' : ''}" onclick="app.toggleGeneFavorite('${gene.id}')" title="Favorite">
                            <svg viewBox="0 0 24 24" fill="${gene.favorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                            </svg>
                        </button>
                        <button class="btn-icon" onclick="app.injectGeneIntoCurrent('${gene.id}')" title="Use in current prompt">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                        </button>
                        <button class="btn-icon" onclick="app.deleteGene('${gene.id}')" title="Delete">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3,6 5,6 21,6"/>
                                <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /**
     * Filter gene bank
     */
    filterGeneBank() {
        this.renderGeneBankList();
    }

    /**
     * Toggle gene favorite
     */
    async toggleGeneFavorite(geneId) {
        if (!this.geneBank) return;
        await this.geneBank.toggleFavorite(geneId);
        this.renderGeneBankList();
        this.updateGeneBankStats();
    }

    /**
     * Inject gene into current seed prompt
     */
    injectGeneIntoCurrent(geneId) {
        const gene = this.geneBank?.get(geneId);
        if (!gene) return;

        // Add gene content to seed prompt
        const currentPrompt = this.elements.seedPrompt?.value || '';
        const newPrompt = currentPrompt + (currentPrompt ? '\n\n' : '') + gene.content;
        
        if (this.elements.seedPrompt) {
            this.elements.seedPrompt.value = newPrompt;
        }

        this.geneBank.recordUsage(geneId);
        this.closeGeneBankModal();
        this.log('success', `Injected ${gene.type} gene into seed prompt`);
    }

    /**
     * Delete a gene
     */
    async deleteGene(geneId) {
        if (!confirm('Delete this gene?')) return;
        await this.geneBank?.delete(geneId);
        this.renderGeneBankList();
        this.updateGeneBankStats();
    }

    /**
     * Export gene bank
     */
    exportGeneBank() {
        if (!this.geneBank) return;

        const data = this.geneBank.export();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cursor-cycles-gene-bank-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.log('success', 'Gene bank exported');
    }

    /**
     * Import gene bank
     */
    importGeneBank() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            try {
                const text = await file.text();
                const data = JSON.parse(text);
                const count = await this.geneBank?.import(data);
                this.renderGeneBankList();
                this.updateGeneBankStats();
                this.log('success', `Imported ${count} genes`);
            } catch (err) {
                this.log('error', 'Failed to import gene bank');
            }
        };
        input.click();
    }

    /**
     * Save best performer genes to bank
     */
    saveBestGenesToBank() {
        if (!this.engine?.bestOverall || !this.geneBank) return;

        this.geneBank.storeFromDNA(this.engine.bestOverall);
        this.log('success', 'Best performer genes saved to bank');
    }

    /**
     * Escape HTML for safe display
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Initialize collapsible panels for mobile
     */
    initCollapsiblePanels() {
        const panels = document.querySelectorAll('.config-panel, .evolution-panel, .analysis-panel');
        
        panels.forEach(panel => {
            const header = panel.querySelector('.panel-header');
            if (!header) return;

            header.addEventListener('click', (e) => {
                // Only collapse on mobile
                if (window.innerWidth > 768) return;
                
                // Don't collapse if clicking a button inside header
                if (e.target.closest('button')) return;
                
                panel.classList.toggle('collapsed');
            });
        });

        // Collapse config and analysis panels by default on mobile
        if (window.innerWidth <= 768) {
            document.querySelector('.analysis-panel')?.classList.add('collapsed');
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Keyboard Shortcuts
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Initialize keyboard shortcuts
     */
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Show keyboard shortcuts help on first visit
        this.showShortcutsHint();
    }

    /**
     * Handle keyboard events
     */
    handleKeyDown(e) {
        // Don't trigger shortcuts when typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            // Escape to blur inputs
            if (e.key === 'Escape') {
                e.target.blur();
            }
            return;
        }

        // Check for modifier keys
        const hasCtrl = e.ctrlKey || e.metaKey;
        const hasShift = e.shiftKey;

        switch (e.key) {
            // Space - Start/Pause evolution
            case ' ':
                e.preventDefault();
                if (this.engine?.running) {
                    this.handlePauseEvolution();
                } else if (!this.engine || this.engine.paused) {
                    this.elements.startBtn?.click();
                }
                break;

            // Escape - Close modals
            case 'Escape':
                e.preventDefault();
                this.closeAllModals();
                break;

            // C - Copy best prompt (with Ctrl/Cmd)
            case 'c':
                if (hasCtrl && !hasShift) {
                    // Let browser handle normal copy
                    break;
                }
                // Without ctrl, copy prompt
                if (!hasCtrl) {
                    e.preventDefault();
                    this.copyPromptToClipboard();
                }
                break;

            // E - Export history
            case 'e':
                if (!hasCtrl) {
                    e.preventDefault();
                    this.exportHistory();
                }
                break;

            // S - Open settings (with Ctrl/Cmd)
            case 's':
                if (hasCtrl) {
                    e.preventDefault();
                    this.openSettingsModal();
                }
                break;

            // ? - Show keyboard shortcuts help
            case '?':
                e.preventDefault();
                this.showKeyboardShortcutsModal();
                break;

            // V - View full prompt
            case 'v':
                if (!hasCtrl) {
                    e.preventDefault();
                    this.showPromptModal();
                }
                break;

            // R - Reset zoom on chart
            case 'r':
                if (!hasCtrl) {
                    e.preventDefault();
                    this.chart?.resetZoom();
                }
                break;

            // Arrow keys for navigation
            case 'ArrowLeft':
                if (this.chart && this.chart.selectedGeneration !== null) {
                    e.preventDefault();
                    const newGen = Math.max(0, this.chart.selectedGeneration - 1);
                    this.chart.selectedGeneration = newGen;
                    this.chart.draw();
                    if (this.chart.onSelect) {
                        this.chart.onSelect(newGen, this.chart.getFitnessAtGen(newGen));
                    }
                }
                break;

            case 'ArrowRight':
                if (this.chart && this.chart.selectedGeneration !== null) {
                    e.preventDefault();
                    const maxGen = this.chart.data.best.length - 1;
                    const newGen = Math.min(maxGen, this.chart.selectedGeneration + 1);
                    this.chart.selectedGeneration = newGen;
                    this.chart.draw();
                    if (this.chart.onSelect) {
                        this.chart.onSelect(newGen, this.chart.getFitnessAtGen(newGen));
                    }
                }
                break;

            // Number keys 1-3 for checkpoint selection
            case '1':
            case '2':
            case '3':
                if (!this.elements.checkpointModal?.classList.contains('hidden')) {
                    e.preventDefault();
                    const idx = parseInt(e.key) - 1;
                    const candidates = this.elements.checkpointCandidates?.querySelectorAll('.checkpoint-candidate');
                    if (candidates && candidates[idx]) {
                        candidates[idx].click();
                    }
                }
                break;

            // Enter to confirm in modals
            case 'Enter':
                if (!this.elements.checkpointModal?.classList.contains('hidden')) {
                    e.preventDefault();
                    if (this.selectedCheckpointCandidate) {
                        this.handleSelectWinner();
                    }
                }
                break;
        }
    }

    /**
     * Close all modals
     */
    closeAllModals() {
        this.elements.checkpointModal?.classList.add('hidden');
        this.elements.promptModal?.classList.add('hidden');
        this.elements.settingsModal?.classList.add('hidden');
    }

    /**
     * Show keyboard shortcuts hint
     */
    showShortcutsHint() {
        // Only show once
        if (localStorage.getItem('cursorCycles_shortcutsHintShown')) return;
        
        setTimeout(() => {
            this.log('info', 'Tip: Press ? for keyboard shortcuts');
            localStorage.setItem('cursorCycles_shortcutsHintShown', 'true');
        }, 2000);
    }

    /**
     * Show keyboard shortcuts modal
     */
    showKeyboardShortcutsModal() {
        const shortcuts = [
            { key: 'Space', action: 'Start/Pause evolution' },
            { key: 'Escape', action: 'Close modals' },
            { key: 'C', action: 'Copy best prompt' },
            { key: 'V', action: 'View full prompt' },
            { key: 'E', action: 'Export history' },
            { key: 'R', action: 'Reset chart zoom' },
            { key: 'Ctrl+S', action: 'Open settings' },
            { key: '←/→', action: 'Navigate generations' },
            { key: '1-3', action: 'Select checkpoint candidate' },
            { key: 'Enter', action: 'Confirm selection' },
            { key: '?', action: 'Show this help' }
        ];

        const html = `
            <div class="shortcuts-list">
                ${shortcuts.map(s => `
                    <div class="shortcut-item">
                        <kbd>${s.key}</kbd>
                        <span>${s.action}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Use existing prompt modal to show shortcuts
        if (this.elements.fullPromptContent) {
            this.elements.fullPromptContent.innerHTML = html;
            this.elements.promptModal?.querySelector('.modal-header h2')?.replaceWith(
                Object.assign(document.createElement('h2'), { textContent: 'Keyboard Shortcuts' })
            );
            this.elements.promptModal?.classList.remove('hidden');
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Settings Modal
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Open settings modal
     */
    openSettingsModal() {
        // Populate settings from current state
        this.populateSettingsForm();
        this.elements.settingsModal?.classList.remove('hidden');
    }

    /**
     * Close settings modal
     */
    closeSettingsModal() {
        this.elements.settingsModal?.classList.add('hidden');
    }

    /**
     * Populate settings form with current values
     */
    populateSettingsForm() {
        // Eval mode
        if (this.settings.evalMode === 'llm') {
            this.elements.evalModeLLM.checked = true;
            this.elements.apiConfigSection?.classList.remove('hidden');
        } else {
            this.elements.evalModeHeuristic.checked = true;
            this.elements.apiConfigSection?.classList.add('hidden');
        }

        // API settings
        if (this.elements.apiProvider) {
            this.elements.apiProvider.value = this.settings.apiProvider;
        }
        this.updateModelOptions();
        if (this.elements.apiModel) {
            this.elements.apiModel.value = this.settings.apiModel;
        }
        if (this.elements.apiKey) {
            this.elements.apiKey.value = this.settings.apiKey;
        }

        // Advanced settings
        if (this.elements.checkpointInterval) {
            this.elements.checkpointInterval.value = this.config.checkpointInterval;
        }
        if (this.elements.eliteCount) {
            this.elements.eliteCount.value = this.config.eliteCount;
        }
        if (this.elements.mutationRate) {
            this.elements.mutationRate.value = Math.round(this.config.mutationRate * 100);
            this.updateMutationRateDisplay();
        }

        this.updateApiStatus();
    }

    /**
     * Handle eval mode change
     */
    handleEvalModeChange() {
        const isLLM = this.elements.evalModeLLM?.checked;
        if (isLLM) {
            this.elements.apiConfigSection?.classList.remove('hidden');
        } else {
            this.elements.apiConfigSection?.classList.add('hidden');
        }
    }

    /**
     * Handle provider change
     */
    handleProviderChange() {
        this.updateModelOptions();
        this.updateApiKeyFieldVisibility();
        this.updateApiStatus();
    }

    /**
     * Update model options based on provider
     */
    updateModelOptions() {
        const provider = this.elements.apiProvider?.value || 'openai';
        const providerConfig = LLMExecutor.PROVIDERS[provider];
        
        if (this.elements.apiModel && providerConfig) {
            this.elements.apiModel.innerHTML = providerConfig.models
                .map(model => `<option value="${model}">${model}</option>`)
                .join('');
            this.elements.apiModel.value = providerConfig.defaultModel;
        }
    }

    /**
     * Update API key field visibility (hidden for local models)
     */
    updateApiKeyFieldVisibility() {
        const provider = this.elements.apiProvider?.value || 'openai';
        if (provider === 'local' || provider === 'mock') {
            this.elements.apiKeyField?.classList.add('hidden');
        } else {
            this.elements.apiKeyField?.classList.remove('hidden');
        }
    }

    /**
     * Toggle API key visibility
     */
    toggleApiKeyVisibility() {
        if (this.elements.apiKey) {
            const isPassword = this.elements.apiKey.type === 'password';
            this.elements.apiKey.type = isPassword ? 'text' : 'password';
        }
    }

    /**
     * Update API status indicator
     */
    updateApiStatus() {
        const provider = this.elements.apiProvider?.value || 'openai';
        const apiKey = this.elements.apiKey?.value || '';
        const statusEl = this.elements.apiStatus;
        
        if (!statusEl) return;

        const dot = statusEl.querySelector('.status-dot');
        const message = statusEl.querySelector('.status-message');

        if (provider === 'local') {
            statusEl.className = 'api-status';
            message.textContent = 'Local mode - no API key required';
        } else if (provider === 'mock') {
            statusEl.className = 'api-status ready';
            message.textContent = 'Mock mode - testing only';
        } else if (apiKey && apiKey.length > 10) {
            statusEl.className = 'api-status ready';
            message.textContent = `API key configured (${provider})`;
        } else {
            statusEl.className = 'api-status';
            message.textContent = 'Enter your API key to enable LLM evaluation';
        }
    }

    /**
     * Update mutation rate display
     */
    updateMutationRateDisplay() {
        const value = this.elements.mutationRate?.value || 25;
        if (this.elements.mutationRateValue) {
            this.elements.mutationRateValue.textContent = `${value}%`;
        }
    }

    /**
     * Save settings
     */
    saveSettings() {
        // Gather settings
        this.settings.evalMode = this.elements.evalModeLLM?.checked ? 'llm' : 'heuristic';
        this.settings.apiProvider = this.elements.apiProvider?.value || 'openai';
        this.settings.apiModel = this.elements.apiModel?.value || 'gpt-4o-mini';
        this.settings.apiKey = this.elements.apiKey?.value || '';

        // Advanced settings
        this.config.checkpointInterval = parseInt(this.elements.checkpointInterval?.value) || 10;
        this.config.eliteCount = parseInt(this.elements.eliteCount?.value) || 2;
        this.config.mutationRate = (parseInt(this.elements.mutationRate?.value) || 25) / 100;

        // Configure LLM executor
        this.llmExecutor.configure({
            enabled: this.settings.evalMode === 'llm',
            provider: this.settings.apiProvider,
            model: this.settings.apiModel,
            apiKey: this.settings.apiKey
        });

        // Persist to localStorage
        this.persistSettings();

        this.log('success', 'Settings saved');
        this.closeSettingsModal();
    }

    /**
     * Load settings from localStorage
     */
    loadSettings() {
        try {
            const savedSettings = localStorage.getItem('cursorCycles_settings');
            if (savedSettings) {
                const parsed = JSON.parse(savedSettings);
                this.settings = { ...this.settings, ...parsed.settings };
                this.config = { ...this.config, ...parsed.config };
                
                // Apply to LLM executor
                this.llmExecutor.configure({
                    enabled: this.settings.evalMode === 'llm',
                    provider: this.settings.apiProvider,
                    model: this.settings.apiModel,
                    apiKey: this.settings.apiKey
                });
            }
        } catch (e) {
            console.warn('Failed to load settings:', e);
        }
    }

    /**
     * Persist settings to localStorage
     */
    persistSettings() {
        try {
            const data = {
                settings: this.settings,
                config: {
                    checkpointInterval: this.config.checkpointInterval,
                    eliteCount: this.config.eliteCount,
                    mutationRate: this.config.mutationRate
                }
            };
            localStorage.setItem('cursorCycles_settings', JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    /**
     * Clear all saved data
     */
    clearAllData() {
        if (confirm('This will clear all saved settings and evolution history. Continue?')) {
            localStorage.removeItem('cursorCycles_settings');
            localStorage.removeItem('cursorCycles_evolution');
            this.settings = {
                evalMode: 'heuristic',
                apiProvider: 'openai',
                apiModel: 'gpt-4o-mini',
                apiKey: ''
            };
            this.config.checkpointInterval = 10;
            this.config.eliteCount = 2;
            this.config.mutationRate = 0.25;
            this.populateSettingsForm();
            this.log('info', 'All saved data cleared');
        }
    }

    /**
     * Export all settings
     */
    exportAllSettings() {
        const data = {
            settings: this.settings,
            config: this.config,
            exportedAt: new Date().toISOString()
        };
        // Remove API key from export for security
        data.settings = { ...data.settings, apiKey: '' };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cursor-cycles-settings-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.log('success', 'Settings exported');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // Evolution Persistence
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Save evolution state to localStorage
     */
    saveEvolutionState() {
        if (!this.engine) return;
        
        try {
            const state = {
                generation: this.engine.generation,
                population: this.engine.population.map(dna => dna.toJSON()),
                history: this.engine.history,
                bestOverall: this.engine.bestOverall?.toJSON() || null,
                config: {
                    goal: this.config.goal,
                    seedPrompt: this.config.seedPrompt,
                    benchmarks: this.config.benchmarks,
                    populationSize: this.config.populationSize,
                    maxGenerations: this.config.maxGenerations
                },
                chartData: this.chart?.getData() || null,
                savedAt: Date.now()
            };
            
            localStorage.setItem('cursorCycles_evolution', JSON.stringify(state));
        } catch (e) {
            console.warn('Failed to save evolution state:', e);
        }
    }

    /**
     * Check if there's a saved evolution state
     */
    hasSavedEvolution() {
        try {
            const saved = localStorage.getItem('cursorCycles_evolution');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Check if state is less than 24 hours old
                const age = Date.now() - (parsed.savedAt || 0);
                return age < 24 * 60 * 60 * 1000;
            }
        } catch (e) {
            return false;
        }
        return false;
    }

    /**
     * Get saved evolution summary for display
     */
    getSavedEvolutionSummary() {
        try {
            const saved = localStorage.getItem('cursorCycles_evolution');
            if (saved) {
                const parsed = JSON.parse(saved);
                return {
                    generation: parsed.generation,
                    maxGenerations: parsed.config.maxGenerations,
                    goal: parsed.config.goal?.slice(0, 50) + '...',
                    savedAt: new Date(parsed.savedAt).toLocaleString()
                };
            }
        } catch (e) {
            return null;
        }
        return null;
    }

    /**
     * Resume evolution from saved state
     */
    async resumeEvolution() {
        try {
            const saved = localStorage.getItem('cursorCycles_evolution');
            if (!saved) {
                this.log('error', 'No saved evolution found');
                return false;
            }

            const state = JSON.parse(saved);
            
            // Restore config
            this.config.goal = state.config.goal;
            this.config.seedPrompt = state.config.seedPrompt;
            this.config.benchmarks = state.config.benchmarks;
            this.config.populationSize = state.config.populationSize;
            this.config.maxGenerations = state.config.maxGenerations;

            // Restore UI inputs
            if (this.elements.goalInput) this.elements.goalInput.value = state.config.goal;
            if (this.elements.seedPrompt) this.elements.seedPrompt.value = state.config.seedPrompt;
            if (this.elements.benchmarkCases) {
                this.elements.benchmarkCases.value = state.config.benchmarks.join('\n');
            }
            if (this.elements.maxGen) this.elements.maxGen.textContent = state.config.maxGenerations;

            // Create engine
            this.engine = new EvolutionEngine({
                populationSize: this.config.populationSize,
                maxGenerations: this.config.maxGenerations,
                goal: this.config.goal,
                benchmarks: this.config.benchmarks,
                onGenerationComplete: (data) => this.onGenerationComplete(data),
                onEvolutionComplete: (data) => this.onEvolutionComplete(data),
                onCheckpoint: (data) => this.handleCheckpoint(data)
            });

            // Restore population
            this.engine.generation = state.generation;
            this.engine.population = state.population.map(json => PromptDNA.fromJSON(json));
            this.engine.history = state.history;
            if (state.bestOverall) {
                this.engine.bestOverall = PromptDNA.fromJSON(state.bestOverall);
            }

            // Restore chart data
            if (state.chartData && this.chart) {
                this.chart.setData(state.chartData);
            }

            // Update UI
            this.elements.currentGen.textContent = state.generation;
            this.renderPopulation();
            this.updateBestPerformer();
            
            this.setStatus('paused', `Resumed at Gen ${state.generation}`);
            this.log('success', `Resumed evolution at generation ${state.generation}`);
            
            this.elements.startBtn.textContent = 'Continue Evolution';
            this.elements.pauseBtn.disabled = true;
            
            return true;
        } catch (e) {
            console.error('Failed to resume evolution:', e);
            this.log('error', 'Failed to resume evolution');
            return false;
        }
    }

    /**
     * Clear saved evolution state
     */
    clearSavedEvolution() {
        localStorage.removeItem('cursorCycles_evolution');
    }

    /**
     * Auto-save on each generation
     */
    enableAutoSave() {
        this._autoSaveEnabled = true;
    }

    /**
     * Initialize the fitness chart
     */
    initChart() {
        this.chart = new FitnessChart('fitnessChart');
    }

    /**
     * Handle start evolution button
     */
    async handleStartEvolution() {
        // Check if resuming saved evolution
        if (this._hasSavedEvolution && !this.engine) {
            const shouldResume = confirm('Resume saved evolution? Click Cancel to start fresh.');
            if (shouldResume) {
                const success = await this.resumeEvolution();
                if (success) {
                    // Continue the resumed evolution
                    this.engine.resume();
                    this.setStatus('active', 'Evolving...');
                    this.elements.pauseBtn.disabled = false;
                    return;
                }
            }
            // Clear saved evolution if not resuming
            this.clearSavedEvolution();
            this._hasSavedEvolution = false;
            this.elements.startBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
                Start Evolution
            `;
        }

        // Clear previous validation errors
        InputValidator.clearAllErrors();

        // Validate inputs
        const seedPromptValidation = InputValidator.validateSeedPrompt(this.elements.seedPrompt.value);
        if (!seedPromptValidation.valid) {
            InputValidator.showError(this.elements.seedPrompt, seedPromptValidation.errors[0]);
            this.log('error', seedPromptValidation.errors[0]);
            return;
        }

        const goalValidation = InputValidator.validateGoal(this.elements.goalInput.value);
        if (!goalValidation.valid) {
            InputValidator.showError(this.elements.goalInput, goalValidation.errors[0]);
            this.log('error', goalValidation.errors[0]);
            return;
        }
        
        const benchmarkValidation = InputValidator.validateBenchmarks(this.elements.benchmarkCases.value);
        if (benchmarkValidation.warnings.length > 0) {
            this.log('warning', `Skipped ${benchmarkValidation.warnings.length} invalid benchmarks`);
        }

        const seedPrompt = seedPromptValidation.value;
        const goal = goalValidation.value;
        const benchmarks = benchmarkValidation.value;
        
        // Update config
        this.config.seedPrompt = seedPrompt;
        this.config.goal = goal;
        this.config.benchmarks = benchmarks;
        
        // Create evolution engine
        this.engine = new EvolutionEngine({
            populationSize: this.config.populationSize,
            maxGenerations: this.config.maxGenerations,
            checkpointInterval: this.config.checkpointInterval,
            eliteCount: this.config.eliteCount,
            mutationRate: this.config.mutationRate
        });
        
        // Create meta-learning system
        this.metaLearning = new MetaLearningSystem(this.engine);
        
        // Set up callbacks
        this.engine.on('generation', (data) => this.onGeneration(data));
        this.engine.on('checkpoint', (data) => this.handleCheckpoint(data));
        this.engine.on('complete', (data) => this.onComplete(data));
        this.engine.on('log', (entry) => this.log(entry.type, entry.message));
        this.engine.on('bestUpdate', (dna) => this.onBestUpdate(dna));
        
        // Initialize
        this.engine.initialize(seedPrompt, goal, benchmarks);
        
        // Update UI
        this.setStatus('active', 'Evolving...');
        this.elements.startBtn.disabled = true;
        this.elements.pauseBtn.disabled = false;
        this.elements.maxGen.textContent = this.config.maxGenerations;
        
        // Show loading and progress
        this.showLoading('Initializing population...');
        this.showPopulationSkeletons(this.config.populationSize);
        this.updateProgress(0, this.config.maxGenerations);
        
        // Clear chart
        this.chart.clear();
        
        // Start evolution
        try {
            await this.engine.start();
        } catch (error) {
            this.log('error', `Evolution failed: ${error.message}`);
            this.setStatus('error', 'Error');
        }
    }

    /**
     * Handle pause/resume button
     */
    handlePauseEvolution() {
        if (!this.engine) return;
        
        if (this.engine.paused) {
            this.engine.resume();
            this.elements.pauseBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                </svg>
                Pause
            `;
            this.setStatus('active', 'Evolving...');
        } else {
            this.engine.pause();
            this.elements.pauseBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
                Resume
            `;
            this.setStatus('paused', 'Paused');
        }
    }

    /**
     * Handle generation callback
     */
    onGeneration(data) {
        const { generation, best, stats } = data;
        
        // Hide loading overlay on first generation
        if (generation === 1) {
            this.hideLoading();
        }
        
        // Update progress
        this.elements.currentGen.textContent = generation;
        this.updateProgress(generation, this.config.maxGenerations);
        
        // Update chart
        this.chart.addPoint(stats.best, stats.avg, stats.worst);
        
        // Update population grid
        this.renderPopulation();
        
        // Update best performer display
        if (best) {
            this.updateBestDisplay(best);
        }
        
        // Auto meta-learning every 5 generations
        if (generation > 0 && generation % 5 === 0 && this.metaLearning) {
            const adaptation = this.metaLearning.autoAdapt();
            if (adaptation.applied) {
                this.log('mutation', `Meta-learning applied: ${adaptation.suggestions.map(s => s.type).join(', ')}`);
            }
        }

        // Auto-save every 5 generations
        if (generation > 0 && generation % 5 === 0) {
            this.saveEvolutionState();
        }
    }

    /**
     * Handle generation complete callback (alias for onGeneration)
     */
    onGenerationComplete(data) {
        this.onGeneration(data);
    }

    /**
     * Handle checkpoint callback
     */
    async handleCheckpoint(data) {
        return new Promise((resolve) => {
            // Show checkpoint modal
            this.elements.checkpointGen.textContent = data.generation;
            this.renderCheckpointCandidates(data.topCandidates);
            this.renderParentSelections(data.topCandidates);
            this.switchCheckpointTab('auto'); // Start with auto tab
            this.elements.checkpointModal.classList.remove('hidden');
            
            // Store resolve for button handlers
            this.checkpointResolve = resolve;
            this.checkpointData = data;
            
            // Pause evolution while waiting
            this.engine.pause();
            this.setStatus('paused', 'Checkpoint');
        });
    }

    /**
     * Handle select winner at checkpoint
     */
    handleSelectWinner() {
        if (this.selectedCheckpointCandidate && this.engine) {
            this.engine.selectWinner(this.selectedCheckpointCandidate);
        }
        this.hideCheckpointModal();
        this.checkpointResolve?.(false); // Stop evolution
    }

    /**
     * Handle continue evolution at checkpoint
     */
    handleContinueEvolution() {
        this.hideCheckpointModal();
        this.engine.resume();
        this.setStatus('active', 'Evolving...');
        this.checkpointResolve?.(true);
    }

    /**
     * Handle stop evolution at checkpoint
     */
    handleStopEvolution() {
        this.hideCheckpointModal();
        this.checkpointResolve?.(false);
    }

    /**
     * Hide checkpoint modal
     */
    hideCheckpointModal() {
        this.elements.checkpointModal.classList.add('hidden');
        this.selectedCheckpointCandidate = null;
    }

    /**
     * Render checkpoint candidates
     */
    renderCheckpointCandidates(candidates) {
        this.elements.checkpointCandidates.innerHTML = candidates.map((c, i) => `
            <div class="checkpoint-candidate ${i === 0 ? 'selected' : ''}" data-id="${c.id}">
                <div class="candidate-header">
                    <span class="candidate-rank">#${i + 1}</span>
                    <span class="candidate-fitness">${c.fitness?.toFixed(2)}</span>
                </div>
                <div class="candidate-preview">${this.truncate(c.prompt, 150)}</div>
            </div>
        `).join('');
        
        // Bind click events
        this.elements.checkpointCandidates.querySelectorAll('.checkpoint-candidate').forEach(el => {
            el.addEventListener('click', () => {
                this.elements.checkpointCandidates.querySelectorAll('.checkpoint-candidate').forEach(c => c.classList.remove('selected'));
                el.classList.add('selected');
                this.selectedCheckpointCandidate = el.dataset.id;
            });
        });
        
        // Select first by default
        this.selectedCheckpointCandidate = candidates[0]?.id;
    }

    /**
     * Handle evolution complete
     */
    onComplete(results) {
        this.setStatus('', 'Complete');
        this.elements.startBtn.disabled = false;
        this.elements.pauseBtn.disabled = true;
        
        if (results.bestPrompt) {
            this.updateBestDisplay(results.bestPrompt);
        }
        
        this.log('success', `Evolution complete! Best fitness: ${results.bestFitness?.toFixed(2)}`);
    }

    /**
     * Handle best update callback
     */
    onBestUpdate(dna) {
        this.updateBestDisplay(dna);
    }

    /**
     * Update best performer display
     */
    updateBestDisplay(dna) {
        // Fitness badge
        this.elements.bestFitnessBadge.textContent = dna.fitness?.toFixed(1) || '--';
        
        // Evolved prompt
        const prompt = dna.toPrompt();
        this.elements.evolvedPromptOutput.innerHTML = `<pre><code>${this.escapeHtml(prompt)}</code></pre>`;
        
        // Dimension bars
        if (dna.dimensions) {
            for (const [dim, els] of Object.entries(this.elements.dimensions)) {
                const value = dna.dimensions[dim];
                if (value !== undefined) {
                    els.value.textContent = value.toFixed(1);
                    els.bar.style.width = `${value * 10}%`;
                }
            }
        }
        
        // DNA view
        this.updateDNAView(dna);
    }

    /**
     * Update DNA gene visualization
     */
    updateDNAView(dna) {
        const geneElements = this.elements.dnaView.querySelectorAll('.dna-gene');
        geneElements.forEach(el => {
            const geneName = el.querySelector('.gene-name').textContent;
            const status = el.querySelector('.gene-status');
            
            const gene = dna.genes[geneName];
            if (gene) {
                status.classList.remove('inactive', 'active', 'mutated', 'inherited');
                
                if (!gene.active || !gene.content) {
                    status.classList.add('inactive');
                } else if (dna.mutations.some(m => m.gene === geneName)) {
                    status.classList.add('mutated');
                } else if (dna.parentIds.length > 0) {
                    status.classList.add('inherited');
                } else {
                    status.classList.add('active');
                }
            }
        });
    }

    /**
     * Render population grid
     */
    renderPopulation() {
        if (!this.engine || !this.engine.population.length) {
            this.elements.populationGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <p>Awaiting evolution start</p>
                </div>
            `;
            return;
        }
        
        const sorted = [...this.engine.population].sort((a, b) => (b.fitness || 0) - (a.fitness || 0));
        const eliteCount = this.engine.options.eliteCount;
        
        this.elements.populationGrid.innerHTML = sorted.map((dna, i) => {
            const isElite = i < eliteCount;
            const fitness = dna.fitness || 0;
            const origin = dna.mutations[0]?.type || 'unknown';
            
            return `
                <div class="population-card ${isElite ? 'elite' : ''}" data-id="${dna.id}">
                    <div class="card-header">
                        <span class="card-rank">#${i + 1}</span>
                        <span class="card-fitness">${fitness.toFixed(2)}</span>
                    </div>
                    <div class="card-bar">
                        <div class="card-bar-fill" style="width: ${fitness * 10}%"></div>
                    </div>
                    <div class="card-meta">${origin}</div>
                </div>
            `;
        }).join('');
        
        // Bind click to show details
        this.elements.populationGrid.querySelectorAll('.population-card').forEach(el => {
            el.addEventListener('click', () => {
                const dna = this.engine.population.find(d => d.id === el.dataset.id);
                if (dna) {
                    this.showPromptModal(dna);
                }
            });
        });
    }

    /**
     * Handle population size change
     */
    handlePopulationSizeChange(e) {
        const btn = e.target;
        const value = parseInt(btn.dataset.value);
        
        btn.parentElement.querySelectorAll('.btn-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        this.config.populationSize = value;
    }

    /**
     * Handle max generations change
     */
    handleMaxGenChange(e) {
        const btn = e.target;
        const value = parseInt(btn.dataset.value);
        
        btn.parentElement.querySelectorAll('.btn-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        this.config.maxGenerations = value;
        this.elements.maxGen.textContent = value;
    }

    /**
     * Set status indicator
     */
    setStatus(state, text) {
        this.elements.statusIndicator.className = 'status-indicator';
        if (state) {
            this.elements.statusIndicator.classList.add(state);
        }
        this.elements.statusText.textContent = text;
    }

    /**
     * Log message
     */
    log(type, message) {
        const time = new Date().toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.innerHTML = `
            <span class="log-time">${time}</span>
            <span class="log-message">${message}</span>
        `;
        
        this.elements.activityLog.appendChild(entry);
        this.elements.activityLog.scrollTop = this.elements.activityLog.scrollHeight;
        
        // Keep log size manageable
        while (this.elements.activityLog.children.length > 100) {
            this.elements.activityLog.removeChild(this.elements.activityLog.firstChild);
        }
    }

    /**
     * Clear activity log
     */
    clearLog() {
        this.elements.activityLog.innerHTML = '';
        this.log('info', 'Log cleared');
    }

    /**
     * Copy best prompt to clipboard
     */
    async copyPromptToClipboard() {
        if (!this.engine?.bestEver) {
            this.log('warning', 'No prompt to copy');
            return;
        }
        
        const prompt = this.engine.bestEver.toPrompt();
        
        try {
            await navigator.clipboard.writeText(prompt);
            this.log('success', 'Prompt copied to clipboard');
        } catch (err) {
            this.log('error', 'Failed to copy to clipboard');
        }
    }

    /**
     * Show prompt modal
     */
    showPromptModal(dna = null) {
        const target = dna || this.engine?.bestEver;
        if (!target) return;
        
        this.elements.fullPromptContent.textContent = target.toPrompt();
        this.elements.promptModal.classList.remove('hidden');
    }

    /**
     * Hide prompt modal
     */
    hidePromptModal() {
        this.elements.promptModal.classList.add('hidden');
    }

    /**
     * Export evolution history
     */
    exportHistory() {
        if (!this.engine) {
            this.log('warning', 'No evolution data to export');
            return;
        }
        
        const data = this.engine.exportHistory();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `evolution-history-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.log('success', 'History exported');
    }

    /**
     * Export DNA of best performer
     */
    exportDNA() {
        if (!this.engine?.bestEver) {
            this.log('warning', 'No DNA to export');
            return;
        }
        
        const dna = this.engine.bestEver.toJSON();
        const blob = new Blob([JSON.stringify(dna, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `prompt-dna-${dna.id}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.log('success', 'DNA exported');
    }

    /**
     * Utility: Escape HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Utility: Truncate text
     */
    truncate(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength - 3) + '...';
    }
}

// Initialize app
const app = new CursorCyclesApp();

// Export for debugging
window.CursorCyclesApp = CursorCyclesApp;
window.app = app;

