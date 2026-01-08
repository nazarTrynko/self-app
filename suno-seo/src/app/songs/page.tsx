'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { allSongs, searchSongs } from '@/data/songs';
import { categories } from '@/data/categories';

export default function SongsPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSongs = query
    ? searchSongs(query)
    : selectedCategory
    ? allSongs.filter(s => s.category === selectedCategory)
    : allSongs;

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All <span className="gradient-text">Song Ideas</span></h1>
          <p className="text-foreground/60">100 SEO-optimized song concepts for AI music generators</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search songs, keywords, genres..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                !selectedCategory ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary/50'
              }`}
            >
              All
            </button>
            {categories.slice(0, 5).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary/50'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSongs.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              <Link href={`/songs/${song.category}/${song.slug}`}>
                <div className="card-glass p-6 h-full hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag">{song.genre}</span>
                    {song.searchVolume === 'high' && (
                      <span className="flex items-center gap-1 text-xs text-emerald-400">
                        <TrendingUp className="w-3 h-3" /> High Vol
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{song.title}</h3>
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

        {filteredSongs.length === 0 && (
          <div className="text-center py-16 text-foreground/60">
            No songs found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}

