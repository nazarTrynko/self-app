'use client';

import Link from 'next/link';
import { Music2, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
                <Music2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                SEO<span className="gradient-text">Songs</span>
              </span>
            </Link>
            <p className="text-foreground/60 max-w-md">
              100 SEO-optimized song ideas for AI music generators. Get discovered on Suno, Udio, and beyond.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-lg bg-card hover:bg-card-hover transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-card hover:bg-card-hover transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-card hover:bg-card-hover transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/songs" className="text-foreground/60 hover:text-foreground transition-colors">
                  All Songs
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-foreground/60 hover:text-foreground transition-colors">
                  Song Generator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/songs/ai-music-tools" className="text-foreground/60 hover:text-foreground transition-colors">
                  AI Music Tools
                </Link>
              </li>
              <li>
                <Link href="/songs/music-production" className="text-foreground/60 hover:text-foreground transition-colors">
                  Music Production
                </Link>
              </li>
              <li>
                <Link href="/songs/trending-tech" className="text-foreground/60 hover:text-foreground transition-colors">
                  Trending Tech
                </Link>
              </li>
              <li>
                <Link href="/songs/viral-meme" className="text-foreground/60 hover:text-foreground transition-colors">
                  Viral & Meme
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} SEO Song Ideas. All rights reserved.
          </p>
          <p className="text-foreground/40 text-sm">
            Made with AI, optimized for discovery
          </p>
        </div>
      </div>
    </footer>
  );
}

