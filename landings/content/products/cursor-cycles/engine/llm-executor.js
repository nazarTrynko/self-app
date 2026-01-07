/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LLM EXECUTOR — Provider Abstraction Layer for AI API Integration
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Provides a unified interface for executing prompts against different AI 
 * providers (OpenAI, Anthropic, local models). Includes caching, rate limiting,
 * and retry logic.
 */

class LLMExecutor {
    /**
     * Supported providers and their configurations
     */
    static PROVIDERS = {
        openai: {
            name: 'OpenAI',
            models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-3.5-turbo'],
            defaultModel: 'gpt-4o-mini',
            apiEndpoint: 'https://api.openai.com/v1/chat/completions',
            keyPrefix: 'sk-'
        },
        anthropic: {
            name: 'Anthropic',
            models: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022', 'claude-3-opus-20240229'],
            defaultModel: 'claude-3-5-haiku-20241022',
            apiEndpoint: 'https://api.anthropic.com/v1/messages',
            keyPrefix: 'sk-ant-'
        },
        local: {
            name: 'Local (Ollama)',
            models: ['llama3.2', 'mistral', 'codellama', 'phi3'],
            defaultModel: 'llama3.2',
            apiEndpoint: 'http://localhost:11434/api/generate',
            keyPrefix: null
        },
        mock: {
            name: 'Mock (Testing)',
            models: ['mock-fast', 'mock-quality'],
            defaultModel: 'mock-fast',
            apiEndpoint: null,
            keyPrefix: null
        }
    };

    constructor(options = {}) {
        this.provider = options.provider || 'mock';
        this.model = options.model || LLMExecutor.PROVIDERS[this.provider]?.defaultModel;
        this.apiKey = options.apiKey || null;
        
        // Rate limiting
        this.rateLimit = {
            maxRequests: options.maxRequests || 10,
            windowMs: options.windowMs || 60000, // 1 minute
            requests: [],
            queue: []
        };

        // Caching
        this.cache = new Map();
        this.cacheMaxSize = options.cacheMaxSize || 100;
        this.cacheTTL = options.cacheTTL || 3600000; // 1 hour

        // Retry configuration
        this.maxRetries = options.maxRetries || 3;
        this.retryDelay = options.retryDelay || 1000;

        // Execution mode
        this.enabled = options.enabled ?? false; // Default to disabled (heuristic mode)
        
        // Callbacks
        this.onRequest = options.onRequest || null;
        this.onResponse = options.onResponse || null;
        this.onError = options.onError || null;
    }

    /**
     * Configure the executor
     * @param {Object} config - Configuration options
     */
    configure(config) {
        if (config.provider) {
            this.provider = config.provider;
            // Reset model to provider default if not specified
            if (!config.model) {
                this.model = LLMExecutor.PROVIDERS[this.provider]?.defaultModel;
            }
        }
        if (config.model) this.model = config.model;
        if (config.apiKey !== undefined) this.apiKey = config.apiKey;
        if (config.enabled !== undefined) this.enabled = config.enabled;
        if (config.maxRequests) this.rateLimit.maxRequests = config.maxRequests;
        
        return this;
    }

    /**
     * Check if executor is properly configured and enabled
     */
    isReady() {
        if (!this.enabled) return false;
        if (this.provider === 'mock' || this.provider === 'local') return true;
        return !!this.apiKey;
    }

    /**
     * Get configuration status for UI display
     */
    getStatus() {
        const providerConfig = LLMExecutor.PROVIDERS[this.provider];
        return {
            enabled: this.enabled,
            ready: this.isReady(),
            provider: providerConfig?.name || 'Unknown',
            model: this.model,
            hasApiKey: !!this.apiKey,
            cacheSize: this.cache.size,
            queueLength: this.rateLimit.queue.length
        };
    }

    /**
     * Execute a prompt and get a response
     * @param {string} prompt - The prompt to execute
     * @param {Object} options - Execution options
     * @returns {Promise<Object>} - Response with content and metadata
     */
    async execute(prompt, options = {}) {
        // Check cache first
        const cacheKey = this.getCacheKey(prompt, options);
        const cached = this.getFromCache(cacheKey);
        if (cached) {
            return { ...cached, fromCache: true };
        }

        // Check if we should use mock mode
        if (!this.enabled || this.provider === 'mock') {
            return this.mockExecute(prompt, options);
        }

        // Check rate limit
        await this.checkRateLimit();

        // Execute with retry logic
        let lastError = null;
        for (let attempt = 0; attempt < this.maxRetries; attempt++) {
            try {
                const result = await this.executeRequest(prompt, options);
                
                // Cache successful result
                this.addToCache(cacheKey, result);
                
                return result;
            } catch (error) {
                lastError = error;
                
                if (this.onError) {
                    this.onError(error, attempt + 1);
                }

                // Don't retry on auth errors
                if (error.status === 401 || error.status === 403) {
                    throw error;
                }

                // Wait before retry
                if (attempt < this.maxRetries - 1) {
                    await this.sleep(this.retryDelay * Math.pow(2, attempt));
                }
            }
        }

        throw lastError || new Error('Max retries exceeded');
    }

    /**
     * Execute the actual API request
     */
    async executeRequest(prompt, options = {}) {
        const startTime = Date.now();
        
        if (this.onRequest) {
            this.onRequest(prompt, options);
        }

        let response;
        switch (this.provider) {
            case 'openai':
                response = await this.executeOpenAI(prompt, options);
                break;
            case 'anthropic':
                response = await this.executeAnthropic(prompt, options);
                break;
            case 'local':
                response = await this.executeLocal(prompt, options);
                break;
            default:
                throw new Error(`Unsupported provider: ${this.provider}`);
        }

        const duration = Date.now() - startTime;
        
        const result = {
            content: response.content,
            model: this.model,
            provider: this.provider,
            duration,
            tokens: response.tokens || null,
            fromCache: false
        };

        if (this.onResponse) {
            this.onResponse(result);
        }

        return result;
    }

    /**
     * Execute OpenAI API request
     */
    async executeOpenAI(prompt, options) {
        const body = {
            model: this.model,
            messages: [
                { role: 'user', content: prompt }
            ],
            temperature: options.temperature ?? 0.7,
            max_tokens: options.maxTokens ?? 2000
        };

        const response = await fetch(LLMExecutor.PROVIDERS.openai.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.error?.message || `OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        return {
            content: data.choices[0]?.message?.content || '',
            tokens: {
                prompt: data.usage?.prompt_tokens,
                completion: data.usage?.completion_tokens,
                total: data.usage?.total_tokens
            }
        };
    }

    /**
     * Execute Anthropic API request
     */
    async executeAnthropic(prompt, options) {
        const body = {
            model: this.model,
            messages: [
                { role: 'user', content: prompt }
            ],
            max_tokens: options.maxTokens ?? 2000
        };

        const response = await fetch(LLMExecutor.PROVIDERS.anthropic.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.error?.message || `Anthropic API error: ${response.status}`);
        }

        const data = await response.json();
        return {
            content: data.content[0]?.text || '',
            tokens: {
                prompt: data.usage?.input_tokens,
                completion: data.usage?.output_tokens,
                total: (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0)
            }
        };
    }

    /**
     * Execute local Ollama request
     */
    async executeLocal(prompt, options) {
        const body = {
            model: this.model,
            prompt: prompt,
            stream: false,
            options: {
                temperature: options.temperature ?? 0.7,
                num_predict: options.maxTokens ?? 2000
            }
        };

        try {
            const response = await fetch(LLMExecutor.PROVIDERS.local.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status}`);
            }

            const data = await response.json();
            return {
                content: data.response || '',
                tokens: {
                    prompt: data.prompt_eval_count,
                    completion: data.eval_count,
                    total: (data.prompt_eval_count || 0) + (data.eval_count || 0)
                }
            };
        } catch (error) {
            if (error.message.includes('fetch')) {
                throw new Error('Local Ollama server not running. Start with: ollama serve');
            }
            throw error;
        }
    }

    /**
     * Mock execution for testing without API calls
     */
    async mockExecute(prompt, options = {}) {
        // Simulate API latency
        await this.sleep(50 + Math.random() * 100);

        const mockResponses = [
            'Here is a well-structured response to your prompt.',
            'I understand your requirements. Let me provide a comprehensive solution.',
            'Based on the given context, here is my analysis and recommendation.',
            'The solution addresses all specified requirements with proper error handling.',
            'I have implemented the requested functionality following best practices.'
        ];

        const content = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        const tokens = Math.ceil(prompt.length / 4) + Math.ceil(content.length / 4);

        return {
            content,
            model: 'mock',
            provider: 'mock',
            duration: 50 + Math.floor(Math.random() * 100),
            tokens: { prompt: Math.ceil(prompt.length / 4), completion: Math.ceil(content.length / 4), total: tokens },
            fromCache: false
        };
    }

    /**
     * Batch execute multiple prompts
     * @param {string[]} prompts - Array of prompts
     * @param {Object} options - Execution options
     * @returns {Promise<Object[]>} - Array of responses
     */
    async executeBatch(prompts, options = {}) {
        const concurrency = options.concurrency || 3;
        const results = [];
        
        // Process in batches
        for (let i = 0; i < prompts.length; i += concurrency) {
            const batch = prompts.slice(i, i + concurrency);
            const batchResults = await Promise.all(
                batch.map(prompt => this.execute(prompt, options).catch(error => ({
                    error: error.message,
                    content: null
                })))
            );
            results.push(...batchResults);
        }

        return results;
    }

    /**
     * Evaluate prompt quality using LLM
     * @param {string} prompt - The prompt to evaluate
     * @param {string} goal - The intended goal
     * @returns {Promise<Object>} - Quality evaluation
     */
    async evaluatePromptQuality(prompt, goal) {
        const evaluationPrompt = `You are a prompt quality evaluator. Analyze the following prompt and rate it on these dimensions (1-10 scale):

GOAL: ${goal}

PROMPT TO EVALUATE:
${prompt}

Rate each dimension and provide a brief explanation:
1. Clarity (1-10): How clear and understandable is the prompt?
2. Completeness (1-10): Does it cover all necessary aspects?
3. Specificity (1-10): How specific and actionable is it?
4. Robustness (1-10): Will it handle varied inputs well?
5. Efficiency (1-10): Is it concise without losing meaning?
6. Goal Alignment (1-10): How well does it address the stated goal?

Respond in JSON format:
{
  "clarity": { "score": N, "reason": "..." },
  "completeness": { "score": N, "reason": "..." },
  "specificity": { "score": N, "reason": "..." },
  "robustness": { "score": N, "reason": "..." },
  "efficiency": { "score": N, "reason": "..." },
  "goalAlignment": { "score": N, "reason": "..." },
  "overallScore": N,
  "suggestions": ["...", "..."]
}`;

        const response = await this.execute(evaluationPrompt, { temperature: 0.3 });
        
        try {
            // Try to extract JSON from response
            const jsonMatch = response.content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
        } catch (e) {
            // Return null if parsing fails
        }

        return null;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // Cache Management
    // ═══════════════════════════════════════════════════════════════════════

    /**
     * Generate cache key for a prompt
     */
    getCacheKey(prompt, options = {}) {
        const keyData = `${this.provider}:${this.model}:${prompt}:${JSON.stringify(options)}`;
        return this.hashString(keyData);
    }

    /**
     * Simple string hash function
     */
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    }

    /**
     * Get item from cache if valid
     */
    getFromCache(key) {
        const cached = this.cache.get(key);
        if (!cached) return null;

        // Check TTL
        if (Date.now() - cached.timestamp > this.cacheTTL) {
            this.cache.delete(key);
            return null;
        }

        return cached.data;
    }

    /**
     * Add item to cache
     */
    addToCache(key, data) {
        // Enforce max size
        if (this.cache.size >= this.cacheMaxSize) {
            // Remove oldest entry
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }

        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    }

    /**
     * Clear the cache
     */
    clearCache() {
        this.cache.clear();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // Rate Limiting
    // ═══════════════════════════════════════════════════════════════════════

    /**
     * Check rate limit and wait if necessary
     */
    async checkRateLimit() {
        const now = Date.now();
        
        // Remove old requests outside window
        this.rateLimit.requests = this.rateLimit.requests.filter(
            time => now - time < this.rateLimit.windowMs
        );

        // Check if we're over the limit
        if (this.rateLimit.requests.length >= this.rateLimit.maxRequests) {
            // Calculate wait time
            const oldestRequest = this.rateLimit.requests[0];
            const waitTime = this.rateLimit.windowMs - (now - oldestRequest);
            
            if (waitTime > 0) {
                await this.sleep(waitTime);
                return this.checkRateLimit(); // Re-check after waiting
            }
        }

        // Record this request
        this.rateLimit.requests.push(now);
    }

    /**
     * Sleep helper
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export
window.LLMExecutor = LLMExecutor;

