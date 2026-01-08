'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Twitter, 
  Link2,
  Wand2 
} from 'lucide-react';
import { TransformationResult } from '@/lib/analysis/types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: TransformationResult;
}

export default function ShareModal({ isOpen, onClose, result }: ShareModalProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownload = () => {
    // Create a text file with the transformation
    const content = `# Prompt Transformation by PromptCraft

## Original Prompt
${result.originalPrompt}

## Transformed Prompt
${result.transformedPrompt}

## Score: ${result.analysis.score}/100

---
Transformed with The Alchemist at promptcraft.app
`;
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'prompt-transformation.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleTwitterShare = () => {
    const text = `Just transformed my AI prompt with @PromptCraftApp's Alchemist! 

Before: "${result.originalPrompt.slice(0, 50)}..."

Score improved to ${result.analysis.score}/100 ✨

Try it: promptcraft.app`;
    
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl glass-card p-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-obsidian-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <h2 className="font-display text-2xl font-bold mb-6">
            Share Your Transformation
          </h2>

          {/* Preview Card */}
          <div
            ref={cardRef}
            className="p-6 rounded-xl bg-gradient-to-br from-obsidian-900 to-obsidian-800 border border-obsidian-700 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <div>
                <span className="font-display font-bold">PromptCraft</span>
                <span className="text-obsidian-400 text-sm ml-2">The Alchemist</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-obsidian-500 mb-1">Before</p>
                <p className="text-sm text-obsidian-300 line-clamp-3">
                  {result.originalPrompt}
                </p>
              </div>
              <div>
                <p className="text-xs text-gold-400 mb-1">After</p>
                <p className="text-sm text-obsidian-200 line-clamp-3">
                  {result.transformedPrompt.slice(0, 150)}...
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-obsidian-700">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">{result.analysis.score}</p>
                  <p className="text-xs text-obsidian-500">Score</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-arcane-400">
                    {result.analysis.improvements.length}
                  </p>
                  <p className="text-xs text-obsidian-500">Improvements</p>
                </div>
              </div>
              <p className="text-xs text-obsidian-600">promptcraft.app</p>
            </div>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => handleCopy(result.transformedPrompt, 'prompt')}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-obsidian-800/50 hover:bg-obsidian-700/50 border border-obsidian-700 transition-colors"
            >
              {copied === 'prompt' ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5 text-obsidian-400" />
              )}
              <span className="text-xs text-obsidian-300">
                {copied === 'prompt' ? 'Copied!' : 'Copy Prompt'}
              </span>
            </button>

            <button
              onClick={handleDownload}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-obsidian-800/50 hover:bg-obsidian-700/50 border border-obsidian-700 transition-colors"
            >
              <Download className="w-5 h-5 text-obsidian-400" />
              <span className="text-xs text-obsidian-300">Download</span>
            </button>

            <button
              onClick={handleTwitterShare}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-obsidian-800/50 hover:bg-obsidian-700/50 border border-obsidian-700 transition-colors"
            >
              <Twitter className="w-5 h-5 text-obsidian-400" />
              <span className="text-xs text-obsidian-300">Tweet</span>
            </button>

            <button
              onClick={() => handleCopy(window.location.href, 'link')}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-obsidian-800/50 hover:bg-obsidian-700/50 border border-obsidian-700 transition-colors"
            >
              {copied === 'link' ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Link2 className="w-5 h-5 text-obsidian-400" />
              )}
              <span className="text-xs text-obsidian-300">
                {copied === 'link' ? 'Copied!' : 'Copy Link'}
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
