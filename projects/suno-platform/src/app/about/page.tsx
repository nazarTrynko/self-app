'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music2, Target, TrendingUp, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'SEO-First Approach',
    description: 'Every song idea is crafted with target keywords embedded naturally in the lyrics, title, and description.'
  },
  {
    icon: TrendingUp,
    title: 'Search Volume Research',
    description: 'Ideas are categorized by search volume so you can prioritize high-traffic keywords.'
  },
  {
    icon: Zap,
    title: 'AI-Ready Formats',
    description: 'Each song includes genre tags, style suggestions, and lyric outlines optimized for Suno and Udio.'
  },
  {
    icon: Music2,
    title: '100+ Song Ideas',
    description: 'Access a comprehensive library of song ideas across 10 different categories and niches.'
  },
  {
    icon: Users,
    title: 'Built for Creators',
    description: 'Whether you\'re a musician, content creator, or marketer, find ideas that fit your goals.'
  },
  {
    icon: Shield,
    title: 'Ethical SEO',
    description: 'We focus on providing genuine value through music, not keyword stuffing or spam.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SEO Song Ideas</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            We're on a mission to help AI music creators get discovered through strategic, 
            SEO-optimized song concepts.
          </p>
        </motion.div>

        {/* The Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">The Concept</h2>
          <div className="space-y-4 text-foreground/70">
            <p>
              In the age of AI music generation, platforms like Suno and Udio have made it possible 
              for anyone to create professional-sounding music. But with millions of tracks being 
              generated, <strong className="text-foreground">discovery becomes the real challenge</strong>.
            </p>
            <p>
              We noticed something interesting: song lyrics and titles on these platforms are 
              indexed by search engines. This means if you strategically include keywords that 
              people are searching for, <strong className="text-foreground">your songs can rank on Google</strong>.
            </p>
            <p>
              That's where SEO Song Ideas comes in. We've created 100 song concepts, each designed 
              around high-search-volume keywords, complete with genre suggestions, style tags, and 
              lyric outlines that naturally incorporate these keywords.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/60">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">How to Use</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span>
              <div>
                <strong>Browse or Generate</strong>
                <p className="text-foreground/60 text-sm mt-1">
                  Explore our 100 pre-made song ideas or use the generator for custom concepts.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span>
              <div>
                <strong>Copy the Details</strong>
                <p className="text-foreground/60 text-sm mt-1">
                  Copy the title, style tags, and lyric outline to use in your AI music generator.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</span>
              <div>
                <strong>Create on Suno/Udio</strong>
                <p className="text-foreground/60 text-sm mt-1">
                  Use the provided information to generate your track on your preferred platform.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</span>
              <div>
                <strong>Publish & Get Discovered</strong>
                <p className="text-foreground/60 text-sm mt-1">
                  Your SEO-optimized song is now ready to be indexed and discovered by search engines.
                </p>
              </div>
            </li>
          </ol>
        </motion.div>

        {/* Affiliate Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass p-8 mb-12 border-amber-500/20"
        >
          <h2 className="text-xl font-bold mb-4">Affiliate Disclosure</h2>
          <p className="text-foreground/60 text-sm">
            Some links on this site may be affiliate links. This means we may earn a small commission 
            if you sign up for a service through our links, at no extra cost to you. This helps us 
            keep the site running and continue providing free song ideas. We only recommend products 
            and services we genuinely believe in.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Get Discovered?</h2>
          <p className="text-foreground/60 mb-6">
            Start creating SEO-optimized songs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/songs" className="button-primary">
              Browse Song Ideas
            </Link>
            <Link href="/generator" className="button-secondary">
              Try the Generator
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

