'use client'

import { motion } from 'framer-motion'
import { Store, Star } from 'lucide-react'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-workshop-bg">
      <header className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Store className="w-6 h-6 text-marketplace-primary" />
          <h1 className="text-2xl font-display font-bold">Marketplace</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Creator Marketplace</h2>
          <p className="text-xl text-gray-400">
            Monetize your craft. Sell prompts, journeys, and components.
          </p>
        </div>

        <div className="text-center py-20">
          <Store className="w-24 h-24 text-marketplace-primary mx-auto mb-6 opacity-50" />
          <h3 className="text-2xl font-semibold mb-4">Coming in Phase 3</h3>
          <p className="text-gray-500">
            The marketplace will enable creators to sell their prompt templates, journeys, and components.
          </p>
        </div>
      </div>
    </div>
  )
}

