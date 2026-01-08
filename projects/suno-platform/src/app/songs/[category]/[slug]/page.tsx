'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  Copy, 
  ExternalLink, 
  Music2, 
  Target, 
  TrendingUp, 
  Sparkles,
  Check
} from 'lucide-react';
import { useState } from 'react';
import { getSongBySlug, getSongsByCategory } from '@/data/songs';
import { categories } from '@/data/categories';
import { SongCard } from '@/components/SongCard';

export default function SongDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categoryId = params.category as string;
  
  const song = getSongBySlug(slug);
  const category = categories.find((c) => c.id === categoryId);
  const relatedSongs = getSongsByCategory(categoryId).filter((s) => s.slug !== slug).slice(0, 3);
  
  const [copied, setCopied] = useState(false);

  const copyLyrics = () => {
    if (song) {
      navigator.clipboard.writeText(song.lyricOutline);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!song || !category) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Song Not Found</h1>
          <Link href="/songs" className="button-primary">
            Browse All Songs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-foreground/60 mb-8 flex-wrap"
        >
          <Link href="/songs" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            All Songs
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/songs/${category.id}`} className="hover:text-foreground transition-colors">
            {category.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground truncate max-w-[200px]">{song.title}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="tag">{song.genre}</span>
                <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                  song.searchVolume === 'high' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : song.searchVolume === 'medium'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  {song.searchVolume} volume
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {song.title}
              </h1>
              
              <p className="text-lg text-foreground/60">
                {song.description}
              </p>
            </motion.div>

            {/* Target Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-glass p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Target Keywords</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {song.targetKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Lyric Outline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glass p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Music2 className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">Lyric Outline</h2>
                </div>
                <button
                  onClick={copyLyrics}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm bg-card hover:bg-card-hover rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-foreground/80 bg-card/50 rounded-xl p-4 text-sm leading-relaxed overflow-x-auto">
                {song.lyricOutline}
              </pre>
            </motion.div>

            {/* Create button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <a
                href="https://suno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Create on Suno
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://udio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary flex items-center gap-2"
              >
                Create on Udio
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Style Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glass p-6"
            >
              <h3 className="font-semibold mb-4">Suno Style Tags</h3>
              <div className="flex flex-wrap gap-2">
                {song.styleTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-card rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-foreground/40 mt-4">
                Copy these tags when creating your song on Suno for best results.
              </p>
            </motion.div>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href={`/songs/${category.id}`}>
                <div className="card-glass p-6 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-foreground/60">View all songs</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Ad placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-glass p-6 text-center text-foreground/40 text-sm"
            >
              <div className="py-8 border-2 border-dashed border-border rounded-xl">
                Ad Space
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Songs */}
        {relatedSongs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h2 className="text-2xl font-bold mb-6">More in {category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSongs.map((relatedSong, index) => (
                <SongCard key={relatedSong.id} song={relatedSong} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

