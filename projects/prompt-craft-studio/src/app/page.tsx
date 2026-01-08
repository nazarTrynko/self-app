'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Wand2, 
  Sparkles, 
  Compass, 
  Dna, 
  Store,
  ArrowRight,
  Sparkle
} from 'lucide-react'

const pillars = [
  {
    id: 'studio',
    name: 'Studio',
    description: 'Visual prompt designer. Build prompts like a designer builds interfaces.',
    icon: Wand2,
    color: 'studio',
    href: '/studio',
  },
  {
    id: 'alchemist',
    name: 'Alchemist',
    description: 'Transform weak prompts into strong ones. Learn why prompts work.',
    icon: Sparkles,
    color: 'alchemist',
    href: '/alchemist',
  },
  {
    id: 'journeys',
    name: 'Journeys',
    description: 'Guided experiences that transform. Step-by-step prompt adventures.',
    icon: Compass,
    color: 'journeys',
    href: '/journeys',
  },
  {
    id: 'dna',
    name: 'DNA',
    description: 'The science of prompts. Patterns, components, and proven structures.',
    icon: Dna,
    color: 'dna',
    href: '/dna',
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Monetize your craft. Sell prompts, journeys, and components.',
    icon: Store,
    color: 'marketplace',
    href: '/marketplace',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-workshop-bg">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-workshop-bg via-workshop-surface to-workshop-bg opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkle className="w-6 h-6 text-studio-primary" />
              <span className="text-sm font-semibold text-studio-primary uppercase tracking-wider">
                The Workshop
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-balance">
              Prompt Craft
              <span className="block text-studio-primary">Studio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 text-balance">
              Design, transform, teach, and monetize your prompt craft. 
              The unified platform for prompt crafters.
            </p>
            
            <p className="text-lg text-gray-500 mb-12">
              What do you want to craft today?
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link href={pillar.href}>
                    <div className={`pillar-card group ${
                      pillar.color === 'studio' ? 'border-studio-primary/20 hover:border-studio-primary/50' :
                      pillar.color === 'alchemist' ? 'border-alchemist-primary/20 hover:border-alchemist-primary/50' :
                      pillar.color === 'journeys' ? 'border-journeys-primary/20 hover:border-journeys-primary/50' :
                      pillar.color === 'dna' ? 'border-dna-primary/20 hover:border-dna-primary/50' :
                      'border-marketplace-primary/20 hover:border-marketplace-primary/50'
                    }`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${
                          pillar.color === 'studio' ? 'bg-studio-bg' :
                          pillar.color === 'alchemist' ? 'bg-alchemist-bg' :
                          pillar.color === 'journeys' ? 'bg-journeys-bg' :
                          pillar.color === 'dna' ? 'bg-dna-bg' :
                          'bg-marketplace-bg'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            pillar.color === 'studio' ? 'text-studio-primary' :
                            pillar.color === 'alchemist' ? 'text-alchemist-primary' :
                            pillar.color === 'journeys' ? 'text-journeys-primary' :
                            pillar.color === 'dna' ? 'text-dna-primary' :
                            'text-marketplace-primary'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-studio-primary transition-colors">
                            {pillar.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        <span>Enter {pillar.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-4">New to prompt crafting?</p>
            <Link href="/dna" className="btn-secondary inline-flex items-center gap-2">
              Learn the Science
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

