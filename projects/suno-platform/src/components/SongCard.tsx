'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, TrendingUp, Clock, Music2 } from 'lucide-react';
import { Song } from '@/data/types';

interface SongCardProps {
  song: Song;
  index?: number;
}

export function SongCard({ song, index = 0 }: SongCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/songs/${song.category}/${song.slug}`}>
        <div className="card-glass p-6 h-full glow-effect transition-all duration-300 hover:border-primary/30">
          {/* Top row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="tag">{song.genre}</span>
              {song.searchVolume === 'high' && (
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <TrendingUp className="w-3 h-3" />
                </span>
              )}
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all"
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

          {/* Keywords preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {song.targetKeywords.slice(0, 3).map((keyword) => (
              <span
                key={keyword}
                className="text-xs px-2 py-0.5 rounded bg-card text-foreground/50 border border-border"
              >
                {keyword}
              </span>
            ))}
            {song.targetKeywords.length > 3 && (
              <span className="text-xs px-2 py-0.5 text-foreground/40">
                +{song.targetKeywords.length - 3}
              </span>
            )}
          </div>

          {/* Style tags */}
          <div className="flex items-center gap-2 text-xs text-foreground/40">
            <Music2 className="w-3 h-3" />
            <span className="line-clamp-1">
              {song.styleTags.slice(0, 3).join(', ')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

