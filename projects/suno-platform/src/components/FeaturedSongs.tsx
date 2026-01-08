'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, ExternalLink, TrendingUp } from 'lucide-react';
import { getRandomSongs } from '@/data/songs';

const featuredSongs = getRandomSongs(6);

export function FeaturedSongs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredSongs.map((song, index) => (
        <motion.div
          key={song.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Link href={`/songs/${song.category}/${song.slug}`}>
            <div className="card-glass p-6 h-full glow-effect transition-all duration-300 hover:border-primary/30">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="tag">{song.genre}</span>
                  {song.searchVolume === 'high' && (
                    <span className="flex items-center gap-1 text-xs text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      High Volume
                    </span>
                  )}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {song.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                {song.description}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mb-4">
                {song.targetKeywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-2 py-1 rounded bg-card text-foreground/60"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-foreground/40 capitalize">
                  {song.category.replace(/-/g, ' ')}
                </span>
                <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

