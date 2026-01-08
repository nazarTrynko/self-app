'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, TrendingUp } from 'lucide-react';
import { SongCard } from '@/components/SongCard';
import { allSongs, searchSongs } from '@/data/songs';
import { categories } from '@/data/categories';

export default function SongsPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredSongs = allSongs.filter((song) => {
    const matchesQuery = query === '' || 
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.targetKeywords.some(kw => kw.toLowerCase().includes(query.toLowerCase()));
    
    const matchesCategory = !selectedCategory || song.category === selectedCategory;
    const matchesVolume = !selectedVolume || song.searchVolume === selectedVolume;
    
    return matchesQuery && matchesCategory && matchesVolume;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="gradient-text">Song Ideas</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Browse our complete collection of 100 SEO-optimized song ideas across 10 categories.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-4 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search songs or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category filter */}
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>

            {/* Volume filter */}
            <select
              value={selectedVolume || ''}
              onChange={(e) => setSelectedVolume(e.target.value || null)}
              className="px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">All Volumes</option>
              <option value="high">High Volume</option>
              <option value="medium">Medium Volume</option>
              <option value="low">Low Volume</option>
            </select>

            {/* View toggle */}
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl p-1">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  view === 'grid' ? 'bg-primary text-white' : 'hover:bg-card-hover'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg transition-colors ${
                  view === 'list' ? 'bg-primary text-white' : 'hover:bg-card-hover'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center justify-between"
        >
          <p className="text-foreground/60">
            Showing <span className="text-foreground font-medium">{filteredSongs.length}</span> songs
          </p>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          )}
        </motion.div>

        {/* Songs grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedVolume}-${query}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              view === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4'
            }
          >
            {filteredSongs.map((song, index) => (
              <SongCard key={song.id} song={song} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredSongs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-foreground/60 mb-4">No songs found matching your criteria.</p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedCategory(null);
                setSelectedVolume(null);
              }}
              className="button-secondary"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

