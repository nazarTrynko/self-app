'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Copy, Check, Zap } from 'lucide-react';
import { categories } from '@/data/categories';
import { getRandomSongs } from '@/data/songs';

const moods = ['Energetic', 'Chill', 'Dark', 'Uplifting', 'Nostalgic', 'Intense', 'Playful', 'Emotional'];
const searchVolumes = ['High Volume', 'Medium Volume', 'Niche/Low'];

export default function GeneratorPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [customKeyword, setCustomKeyword] = useState('');
  const [generated, setGenerated] = useState<{
    title: string;
    genre: string;
    keywords: string[];
    styleTags: string[];
    outline: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const generateIdea = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomSongs = getRandomSongs(5);
      const baseSong = randomSongs[Math.floor(Math.random() * randomSongs.length)];
      
      const customTitle = customKeyword 
        ? `${customKeyword.charAt(0).toUpperCase() + customKeyword.slice(1)} ${['Anthem', 'Song', 'Vibes', 'Track', 'Beat'][Math.floor(Math.random() * 5)]}`
        : baseSong.title;
      
      const customKeywords = customKeyword 
        ? [customKeyword, `${customKeyword} music`, `${customKeyword} song`, ...baseSong.targetKeywords.slice(0, 2)]
        : baseSong.targetKeywords;

      setGenerated({
        title: customTitle,
        genre: baseSong.genre,
        keywords: customKeywords,
        styleTags: baseSong.sunoStyleTags,
        outline: baseSong.lyricOutline,
      });
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = () => {
    if (!generated) return;
    const text = `Title: ${generated.title}
Genre: ${generated.genre}
Keywords: ${generated.keywords.join(', ')}
Style Tags: ${generated.styleTags.join(', ')}
Outline: ${generated.outline}`;
    copyToClipboard(text, 'all');
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mx-auto mb-6"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">SEO Song <span className="gradient-text">Generator</span></h1>
          <p className="text-foreground/60">Generate custom SEO-optimized song ideas for any topic</p>
        </div>

        {/* Generator Form */}
        <div className="card-glass p-8 mb-8">
          {/* Custom Keyword */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Target Keyword (optional)</label>
            <input
              type="text"
              placeholder="e.g., suno api, ai music, lofi beats..."
              value={customKeyword}
              onChange={e => setCustomKeyword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none transition-colors"
            />
          </div>

          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Category (optional)</label>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? '' : cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.id 
                      ? 'bg-primary text-white' 
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mood Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Mood (optional)</label>
            <div className="flex flex-wrap gap-2">
              {moods.map(mood => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(selectedMood === mood ? '' : mood)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedMood === mood 
                      ? 'bg-accent-cyan text-white' 
                      : 'bg-card border border-border hover:border-accent-cyan/50'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateIdea}
            disabled={isGenerating}
            className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" /> Generate Song Idea
              </>
            )}
          </button>
        </div>

        {/* Generated Result */}
        <AnimatePresence mode="wait">
          {generated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="card-glass p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold gradient-text">Your Song Idea</h2>
                <button
                  onClick={copyAll}
                  className="button-secondary text-sm py-2 flex items-center gap-2"
                >
                  {copied === 'all' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  Copy All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-foreground/60 mb-1">Title</div>
                  <div className="text-2xl font-semibold">{generated.title}</div>
                </div>

                <div>
                  <div className="text-sm text-foreground/60 mb-1">Genre</div>
                  <span className="tag">{generated.genre}</span>
                </div>

                <div>
                  <div className="text-sm text-foreground/60 mb-2">Target Keywords</div>
                  <div className="flex flex-wrap gap-2">
                    {generated.keywords.map(kw => (
                      <span key={kw} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20">{kw}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-foreground/60 mb-2">Suno Style Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {generated.styleTags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-accent-cyan/10 text-accent-cyan rounded-lg border border-accent-cyan/20">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-foreground/60 mb-2">Lyric Outline</div>
                  <p className="bg-card/50 p-4 rounded-lg">{generated.outline}</p>
                </div>
              </div>

              <button
                onClick={generateIdea}
                className="w-full mt-6 button-secondary flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Generate Another
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

