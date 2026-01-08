'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Copy, Check, TrendingUp, Music, Sparkles, Tags } from 'lucide-react';
import { getSongBySlug, getSongsByCategory } from '@/data/songs';
import { getCategoryById } from '@/data/categories';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function SongPage() {
  const params = useParams();
  const category = params.category as string;
  const slug = params.slug as string;
  const song = getSongBySlug(category, slug);
  const categoryData = getCategoryById(category);
  const relatedSongs = getSongsByCategory(category).filter(s => s.slug !== slug).slice(0, 3);
  const [copied, setCopied] = useState<string | null>(null);

  if (!song || !categoryData) {
    notFound();
  }

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href={`/songs/${category}`} className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to {categoryData.name}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag">{song.genre}</span>
              <span className="text-sm text-foreground/60">{song.mood}</span>
              {song.searchVolume === 'high' && (
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <TrendingUp className="w-3 h-3" /> High Search Volume
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-4">{song.title}</h1>
            <p className="text-foreground/60 text-lg">{song.description}</p>
          </div>

          {/* Target Keywords */}
          <div className="card-glass p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Tags className="w-5 h-5 text-primary" /> Target Keywords
              </h2>
              <button
                onClick={() => copyToClipboard(song.targetKeywords.join(', '), 'keywords')}
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-1"
              >
                {copied === 'keywords' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {song.targetKeywords.map(kw => (
                <span key={kw} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20">{kw}</span>
              ))}
            </div>
          </div>

          {/* Suno Style Tags */}
          <div className="card-glass p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Music className="w-5 h-5 text-accent-cyan" /> Suno Style Tags
              </h2>
              <button
                onClick={() => copyToClipboard(song.sunoStyleTags.join(', '), 'styles')}
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-1"
              >
                {copied === 'styles' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {song.sunoStyleTags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-accent-cyan/10 text-accent-cyan rounded-lg border border-accent-cyan/20">{tag}</span>
              ))}
            </div>
          </div>

          {/* Lyric Outline */}
          <div className="card-glass p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-pink" /> Lyric Outline
              </h2>
              <button
                onClick={() => copyToClipboard(song.lyricOutline, 'lyrics')}
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-1"
              >
                {copied === 'lyrics' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                Copy
              </button>
            </div>
            <p className="text-foreground/80 bg-card/50 p-4 rounded-lg">{song.lyricOutline}</p>
          </div>

          {/* Related Songs */}
          {relatedSongs.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">More in {categoryData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedSongs.map(related => (
                  <Link key={related.id} href={`/songs/${related.category}/${related.slug}`}>
                    <div className="card-glass p-4 hover:border-primary/30 transition-all">
                      <span className="tag text-xs mb-2">{related.genre}</span>
                      <h3 className="font-medium line-clamp-1">{related.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

