'use client';

import { motion } from 'framer-motion';
import { Music2, Target, TrendingUp, Sparkles, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'SEO-Optimized',
    description: 'Every song idea targets high-volume keywords to maximize discoverability on search engines.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Keywords are researched based on real search data and trending topics.',
  },
  {
    icon: Music2,
    title: 'Platform Ready',
    description: 'Optimized for Suno, Udio, and other AI music generation platforms.',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    description: 'Each idea includes genre, mood, style tags, and lyric outlines.',
  },
  {
    icon: Users,
    title: 'Audience Focused',
    description: 'Categories cover diverse audiences from tech enthusiasts to music producers.',
  },
  {
    icon: Zap,
    title: 'Instant Generator',
    description: 'Create custom song ideas for any keyword or niche in seconds.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SEO Songs</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            The intersection of search engine optimization and AI music generation.
            Create songs that people are actually searching for.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">The Mission</h2>
          <p className="text-foreground/70 leading-relaxed">
            AI music generation is revolutionizing how we create music. But with millions of AI-generated
            songs being created daily, discoverability becomes the key challenge. SEO Songs bridges this
            gap by providing song ideas that are strategically designed to rank on both AI music platforms
            and search engines like Google.
          </p>
          <p className="text-foreground/70 leading-relaxed mt-4">
            We research trending keywords, analyze search volume, and create song concepts that target
            what people are actually searching for. Whether you're a content creator, musician, or
            marketer, our song ideas help your AI-generated music get discovered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="card-glass p-6"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Browse or Generate</h3>
                <p className="text-foreground/60 text-sm">
                  Explore our 100 pre-made song ideas or use the generator for custom concepts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Copy the Details</h3>
                <p className="text-foreground/60 text-sm">
                  Grab the title, keywords, style tags, and lyric outline with one click.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Create on Suno/Udio</h3>
                <p className="text-foreground/60 text-sm">
                  Use the style tags and outline as prompts in your favorite AI music generator.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Get Discovered</h3>
                <p className="text-foreground/60 text-sm">
                  Your SEO-optimized title and keywords help your song rank and get found.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-6"
        >
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold gradient-text">100</div>
            <div className="text-sm text-foreground/60">Song Ideas</div>
          </div>
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-foreground/60">Keywords</div>
          </div>
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold gradient-text">10</div>
            <div className="text-sm text-foreground/60">Categories</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

