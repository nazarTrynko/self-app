'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Wand2, Lightbulb, Rocket } from 'lucide-react';

const features = [
  { icon: Wand2, text: 'AI-powered generation' },
  { icon: Lightbulb, text: 'Unique SEO-focused ideas' },
  { icon: Rocket, text: 'Instant results' },
];

export function GeneratorCTA() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-cyan/20 to-accent-pink/20" />
        <div className="absolute inset-0 bg-card/80 backdrop-blur-xl" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl border border-primary/30" />
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Something <span className="gradient-text">Custom?</span>
          </h2>
          
          <p className="text-foreground/60 max-w-xl mx-auto mb-8">
            Use our interactive generator to create unique SEO song ideas tailored to your 
            specific niche, genre, or target keywords.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-foreground/70"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                {feature.text}
              </motion.div>
            ))}
          </div>
          
          <Link href="/generator">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4"
            >
              Launch Generator
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

