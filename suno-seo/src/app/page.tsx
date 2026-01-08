'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, Zap, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { categories } from '@/data/categories';
import { allSongs, Song } from '@/data/songs';

const stats = [
  { value: '100', label: 'Song Ideas' },
  { value: '500+', label: 'Keywords' },
  { value: '10', label: 'Categories' },
];

// Get consistent featured songs (first 6 high-volume ones)
const getFeaturedSongs = () => allSongs.filter(s => s.searchVolume === 'high').slice(0, 6);

export default function Home() {
  const [featuredSongs, setFeaturedSongs] = useState<Song[]>(getFeaturedSongs());

  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            100 SEO-Optimized Song Ideas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Make Your <span className="gradient-text">AI Music</span>
            <br />Rank & Get Discovered
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
          >
            Strategic song ideas with built-in SEO keywords for Suno, Udio, and AI music platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/songs" className="button-primary flex items-center gap-2">
              <Music className="w-5 h-5" /> Browse Songs
            </Link>
            <Link href="/generator" className="button-secondary flex items-center gap-2">
              <Zap className="w-5 h-5" /> Try Generator
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Songs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured <span className="gradient-text">Song Ideas</span></h2>
          <p className="text-foreground/60 text-center mb-12">Handpicked SEO-optimized concepts</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSongs.map((song, i) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/songs/${song.category}/${song.slug}`}>
                  <div className="card-glass p-6 h-full hover:border-primary/30 transition-all group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag">{song.genre}</span>
                      {song.searchVolume === 'high' && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400">
                          <TrendingUp className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">{song.title}</h3>
                    <p className="text-sm text-foreground/60 line-clamp-2 mb-4">{song.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {song.targetKeywords.slice(0, 3).map(kw => (
                        <span key={kw} className="text-xs px-2 py-0.5 bg-card rounded text-foreground/50">{kw}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/songs/${cat.id}`}>
                  <div className="card-glass p-5 text-center hover:border-primary/30 transition-all group">
                    <span className="text-3xl mb-2 block">{cat.icon}</span>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{cat.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card-glass p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-cyan/10" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Need Something Custom?</h2>
              <p className="text-foreground/60 mb-6">Generate unique SEO song ideas for your specific niche.</p>
              <Link href="/generator" className="button-primary inline-flex items-center gap-2">
                Launch Generator <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

