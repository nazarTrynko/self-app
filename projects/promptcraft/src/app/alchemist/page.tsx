'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wand2, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw,
  Zap,
  Brain,
  Target,
  FileText,
  Volume2,
  Ban,
  User,
  ChevronRight,
  TrendingUp,
  ArrowLeft,
  Share2,
  Download,
  History
} from 'lucide-react';
import Link from 'next/link';
import { transformPrompt } from '@/lib/analysis';
import { TransformationResult, TransformedSection, ImprovementCategory } from '@/lib/analysis/types';
import ShareModal from '@/components/ShareModal';
import { canTransform, recordTransformation } from '@/lib/stripe';

const CATEGORY_ICONS: Record<ImprovementCategory, React.ElementType> = {
  role_assignment: User,
  context_addition: FileText,
  format_specification: FileText,
  constraint_setting: Ban,
  audience_targeting: Target,
  tone_definition: Volume2,
  structure_enhancement: FileText,
  example_addition: Sparkles,
};

const CATEGORY_COLORS: Record<ImprovementCategory, string> = {
  role_assignment: 'text-arcane-400',
  context_addition: 'text-blue-400',
  format_specification: 'text-emerald-400',
  constraint_setting: 'text-rose-400',
  audience_targeting: 'text-amber-400',
  tone_definition: 'text-violet-400',
  structure_enhancement: 'text-cyan-400',
  example_addition: 'text-pink-400',
};

const CATEGORY_LABELS: Record<ImprovementCategory, string> = {
  role_assignment: 'Role Assignment',
  context_addition: 'Task Enhancement',
  format_specification: 'Format Specification',
  constraint_setting: 'Constraints',
  audience_targeting: 'Target Audience',
  tone_definition: 'Tone & Style',
  structure_enhancement: 'Structure',
  example_addition: 'Examples',
};

export default function AlchemistPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TransformationResult | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedSection, setSelectedSection] = useState<TransformedSection | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);
  const [remainingTransforms, setRemainingTransforms] = useState<number | undefined>(undefined);

  // Check remaining transforms on mount
  useEffect(() => {
    const { remaining } = canTransform();
    setRemainingTransforms(remaining);
  }, []);

  const handleTransform = useCallback(() => {
    if (!input.trim()) return;
    
    // Check rate limit
    const { allowed, message, remaining } = canTransform();
    if (!allowed) {
      setRateLimitError(message || 'Rate limit exceeded');
      return;
    }
    
    setRateLimitError(null);
    setIsTransforming(true);
    
    // Simulate processing time for effect
    setTimeout(() => {
      const transformResult = transformPrompt(input);
      setResult(transformResult);
      setIsTransforming(false);
      
      // Record the transformation for rate limiting
      recordTransformation();
      setRemainingTransforms(remaining ? remaining - 1 : undefined);
      
      // Save to history
      saveToHistory(transformResult);
    }, 1500);
  }, [input]);

  const handleCopy = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result.transformedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [result]);

  const handleReset = useCallback(() => {
    setInput('');
    setResult(null);
    setSelectedSection(null);
  }, []);

  const saveToHistory = (transformation: TransformationResult) => {
    try {
      const history = JSON.parse(localStorage.getItem('alchemist_history') || '[]');
      const newEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        original: transformation.originalPrompt,
        transformed: transformation.transformedPrompt,
        score: transformation.analysis.score,
      };
      history.unshift(newEntry);
      // Keep only last 20 entries
      localStorage.setItem('alchemist_history', JSON.stringify(history.slice(0, 20)));
    } catch (e) {
      console.error('Failed to save to history:', e);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <span className="font-display font-bold text-lg">PromptCraft</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/alchemist/history" 
                className="text-sm text-obsidian-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <History className="w-4 h-4" />
                History
              </Link>
              <span className="text-xs px-3 py-1 rounded-full bg-arcane-500/20 text-arcane-400 font-medium">
                Free Tier
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-800/50 border border-obsidian-700 mb-4">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-obsidian-300">The Alchemist</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Transform Your <span className="gradient-text">Prompt</span>
          </h1>
          <p className="text-obsidian-400 max-w-xl mx-auto">
            Paste any prompt and watch it transform into something more powerful. 
            Learn why each change makes a difference.
          </p>
        </motion.div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-obsidian-400">
                <div className="w-2 h-2 rounded-full bg-ember-500" />
                Your Prompt
              </div>
              {input && (
                <button
                  onClick={handleReset}
                  className="text-xs text-obsidian-500 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>
            
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste or type your prompt here...

Example: Write me a blog post about productivity"
                className="alchemist-input w-full"
                rows={10}
              />
              
              {/* Word count */}
              <div className="absolute bottom-4 right-4 text-xs text-obsidian-600">
                {input.split(/\s+/).filter(w => w).length} words
              </div>
            </div>

            {/* Rate Limit Warning */}
            {rateLimitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm"
              >
                {rateLimitError}
                <Link href="/pricing" className="ml-2 underline hover:no-underline">
                  Upgrade to Pro
                </Link>
              </motion.div>
            )}

            {/* Transform Button */}
            <button
              onClick={handleTransform}
              disabled={!input.trim() || isTransforming}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTransforming ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Transforming...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Transform Prompt
                </>
              )}
            </button>
            
            {/* Remaining transforms counter */}
            {remainingTransforms !== undefined && (
              <p className="text-xs text-obsidian-500 text-center">
                {remainingTransforms} free transforms remaining today
              </p>
            )}
          </motion.div>

          {/* Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-gold-400">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Transformed Prompt
              </div>
              {result && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className="text-xs text-obsidian-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className="alchemist-output relative min-h-[280px]">
              <AnimatePresence mode="wait">
                {isTransforming ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-arcane-500 mx-auto mb-4 flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Wand2 className="w-8 h-8 text-obsidian-950" />
                      </motion.div>
                      <p className="text-obsidian-400">Analyzing patterns...</p>
                    </div>
                  </motion.div>
                ) : result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {result.sections.map((section, idx) => (
                      <motion.div
                        key={section.type}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedSection(section)}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          selectedSection?.type === section.type
                            ? 'bg-obsidian-700/50 border border-gold-500/30'
                            : 'bg-obsidian-800/30 hover:bg-obsidian-700/30 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 ${CATEGORY_COLORS[section.type]}`}>
                            {(() => {
                              const Icon = CATEGORY_ICONS[section.type];
                              return <Icon className="w-4 h-4" />;
                            })()}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs font-medium ${CATEGORY_COLORS[section.type]}`}>
                                {CATEGORY_LABELS[section.type]}
                              </span>
                              {section.isNew && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400">
                                  NEW
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-obsidian-200 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-obsidian-600 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-center text-obsidian-600">
                      <Wand2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>Your transformed prompt will appear here</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Analysis Panel */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Score Card */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gold-400" />
                  Prompt Score
                </h3>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-obsidian-800"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 226' }}
                        animate={{ 
                          strokeDasharray: `${(result.analysis.score / 100) * 226} 226` 
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        {result.analysis.score}
                      </motion.span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-obsidian-400 mb-2">
                      {result.analysis.score >= 70 
                        ? 'Excellent! This prompt is well-structured.'
                        : result.analysis.score >= 50
                        ? 'Good foundation with room for improvement.'
                        : 'Basic prompt - the transformation adds significant value.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {result.analysis.patterns.filter(p => p.present).slice(0, 3).map(p => (
                        <span 
                          key={p.pattern.id}
                          className="text-xs px-2 py-1 rounded bg-obsidian-800 text-obsidian-300"
                        >
                          {p.pattern.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Improvements Made */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-arcane-400" />
                  Improvements Made
                </h3>
                <ul className="space-y-3">
                  {result.analysis.improvements.slice(0, 4).map((imp, idx) => (
                    <motion.li
                      key={imp.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className={`mt-0.5 ${
                        imp.impact === 'high' ? 'text-emerald-400' :
                        imp.impact === 'medium' ? 'text-amber-400' : 'text-obsidian-400'
                      }`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-obsidian-300">{CATEGORY_LABELS[imp.category]}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Explanation Panel */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  Why It Works
                </h3>
                <AnimatePresence mode="wait">
                  {selectedSection ? (
                    <motion.div
                      key={selectedSection.type}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className={`text-sm font-medium mb-2 ${CATEGORY_COLORS[selectedSection.type]}`}>
                        {CATEGORY_LABELS[selectedSection.type]}
                      </div>
                      <p className="text-sm text-obsidian-300 leading-relaxed">
                        {selectedSection.explanation}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-obsidian-500"
                    >
                      Click on any section in the transformed prompt to see why it improves results.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Actions */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={handleCopy}
              className="btn-secondary"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="btn-secondary"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={handleReset}
              className="btn-secondary"
            >
              <RotateCcw className="w-4 h-4" />
              Try Another
            </button>
          </motion.div>
        )}

        {/* Share Modal */}
        {result && (
          <ShareModal
            isOpen={showShareModal}
            onClose={() => setShowShareModal(false)}
            result={result}
          />
        )}
      </main>
    </div>
  );
}
