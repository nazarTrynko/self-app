'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  Wand2,
  Music,
  Target,
  Lightbulb,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import { categories } from '@/data/categories';
import confetti from '@/lib/confetti';

interface GeneratedSong {
  title: string;
  genre: string;
  keywords: string[];
  styleTags: string[];
  description: string;
  lyricIdea: string;
}

const genres = [
  'Hip-hop', 'Pop', 'Electronic', 'Lo-fi', 'Rock', 'R&B', 'Jazz', 
  'Country', 'Trap', 'House', 'Synthwave', 'Ambient', 'Indie', 
  'Drill', 'Phonk', 'Future Bass', 'Dubstep', 'Blues', 'Folk'
];

const moods = [
  'Energetic', 'Chill', 'Dark', 'Uplifting', 'Melancholic', 
  'Aggressive', 'Peaceful', 'Nostalgic', 'Futuristic', 'Playful'
];

const topics = [
  'AI Tools', 'Music Production', 'Tech Tutorials', 'Life Moments',
  'Viral Trends', 'Educational', 'Problem Solving', 'Comparisons',
  'Gaming', 'Coding', 'Startup Life', 'Creative Process'
];

export default function GeneratorPage() {
  const [niche, setNiche] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSong, setGeneratedSong] = useState<GeneratedSong | null>(null);
  const [copied, setCopied] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);

  const generateSong = async () => {
    setIsGenerating(true);
    
    // Simulate generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a unique song based on inputs
    const genre = selectedGenre || genres[Math.floor(Math.random() * genres.length)];
    const mood = selectedMood || moods[Math.floor(Math.random() * moods.length)];
    const topic = selectedTopic || topics[Math.floor(Math.random() * topics.length)];
    const nicheKeyword = niche || topic.toLowerCase().replace(/\s+/g, ' ');
    
    // Generate keywords
    const baseKeywords = [
      `${nicheKeyword} tutorial`,
      `${nicheKeyword} guide`,
      `how to ${nicheKeyword}`,
      `best ${nicheKeyword}`,
      `${nicheKeyword} tips`
    ];
    
    // Generate title
    const titleTemplates = [
      `${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} Anthem - The Complete Guide`,
      `How to ${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} - ${mood} ${genre} Mix`,
      `${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} Song - ${mood} Vibes`,
      `The ${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} Tutorial - In ${genre} Style`,
      `${mood} ${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} - A ${genre} Journey`
    ];
    
    const styleTags = [
      genre.toLowerCase(),
      mood.toLowerCase(),
      'seo-optimized',
      'keyword-rich',
      'catchy'
    ];
    
    const lyricTemplates = [
      `[Intro]
${mood} vibes, ${nicheKeyword} on my mind
Let me show you ${nicheKeyword}, one line at a time

[Verse 1]
Looking for ${nicheKeyword}? You found the right place
This ${nicheKeyword} guide will help you win the race
Step by step, we'll break it down today
Best ${nicheKeyword} tips are coming your way

[Chorus]
${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)}, ${nicheKeyword}, that's what we need
${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} tutorial, guaranteed
How to ${nicheKeyword}, follow along
${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} is what makes this song

[Verse 2]
From beginner to pro, we've got you covered
${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} secrets about to be discovered
Best ${nicheKeyword} practices, learn them well
This ${nicheKeyword} guide has stories to tell

[Outro]
${nicheKeyword.charAt(0).toUpperCase() + nicheKeyword.slice(1)} complete, now go and shine
Your ${nicheKeyword} journey is divine`,
    ];
    
    const song: GeneratedSong = {
      title: titleTemplates[Math.floor(Math.random() * titleTemplates.length)],
      genre,
      keywords: baseKeywords.slice(0, 4),
      styleTags,
      description: `A ${mood.toLowerCase()} ${genre.toLowerCase()} track optimized for "${nicheKeyword}" searches. Perfect for AI music generators like Suno and Udio.`,
      lyricIdea: lyricTemplates[0],
    };
    
    setGeneratedSong(song);
    setIsGenerating(false);
    setGenerationCount(prev => prev + 1);
    
    // Trigger confetti on successful generation
    confetti();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: isGenerating ? 360 : 0 }}
            transition={{ duration: 1, repeat: isGenerating ? Infinity : 0, ease: 'linear' }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan mb-6"
          >
            <Wand2 className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Song Idea <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Generate unique, SEO-optimized song ideas for AI music platforms. 
            Customize your niche, genre, and mood for tailored results.
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-6 md:p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Niche/Keyword Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Target Niche or Keyword
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., suno api, music production, coding..."
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
              />
              <p className="text-xs text-foreground/40 mt-2">
                Enter the keyword or niche you want your song to rank for
              </p>
            </div>

            {/* Genre Select */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Genre
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Random Genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Mood Select */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Mood
              </label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Random Mood</option>
                {moods.map((mood) => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
            </div>

            {/* Topic Select */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Topic Category
              </label>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(selectedTopic === topic ? '' : topic)}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                      selectedTopic === topic
                        ? 'bg-primary text-white border-primary'
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generateSong}
            disabled={isGenerating}
            className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-primary via-accent-cyan to-accent-pink text-white font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Song Idea
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Generated Result */}
        <AnimatePresence mode="wait">
          {generatedSong && (
            <motion.div
              key={generationCount}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="card-glass p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="tag mb-2">{generatedSong.genre}</span>
                  <h2 className="text-2xl font-bold">{generatedSong.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(generatedSong, null, 2))}
                    className="p-2 rounded-lg bg-card hover:bg-card-hover transition-colors"
                    title="Copy all"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <p className="text-foreground/60 mb-6">{generatedSong.description}</p>

              {/* Keywords */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold">Target Keywords</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {generatedSong.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Style Tags */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold">Suno Style Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {generatedSong.styleTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-card rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lyric Idea */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold">Lyric Outline</h3>
                  </div>
                  <button
                    onClick={() => copyToClipboard(generatedSong.lyricIdea)}
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy lyrics
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-foreground/80 bg-card/50 rounded-xl p-4 text-sm leading-relaxed max-h-80 overflow-y-auto">
                  {generatedSong.lyricIdea}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <a
                  href="https://suno.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary flex items-center gap-2"
                >
                  Create on Suno
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={generateSong}
                  className="button-secondary flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Generate Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Pro Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/60">
            <div className="card-glass p-4">
              <span className="text-2xl mb-2 block">🎯</span>
              Be specific with your niche keyword for better SEO targeting
            </div>
            <div className="card-glass p-4">
              <span className="text-2xl mb-2 block">🎵</span>
              Match genre to your content for authentic results
            </div>
            <div className="card-glass p-4">
              <span className="text-2xl mb-2 block">📈</span>
              Include keywords naturally in your actual lyrics
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

