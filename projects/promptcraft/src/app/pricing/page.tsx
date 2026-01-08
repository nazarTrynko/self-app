"use client";

import { motion } from "framer-motion";
import {
  Wand2,
  Check,
  Sparkles,
  Zap,
  Brain,
  History,
  Share2,
  BookOpen,
  Users,
  Crown,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const FREE_FEATURES = [
  { icon: Zap, text: "5 transformations per day" },
  { icon: Brain, text: "Basic heuristic analysis" },
  { icon: Check, text: "Pattern detection" },
  { icon: Share2, text: "Copy & share results" },
];

const PRO_FEATURES = [
  { icon: Zap, text: "Unlimited transformations", highlight: true },
  { icon: Brain, text: "AI-powered analysis (Claude)", highlight: true },
  { icon: History, text: "Full transformation history" },
  { icon: Share2, text: "Export & share results" },
  { icon: Crown, text: "Priority access to new features" },
  { icon: BookOpen, text: "Prompt DNA courses (coming soon)" },
  { icon: Users, text: "Community access (coming soon)" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <span className="font-display font-bold text-lg">
                PromptCraft
              </span>
            </Link>
            <Link href="/" className="btn-secondary text-sm py-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-800/50 border border-obsidian-700 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-obsidian-300">Simple Pricing</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Path</span>
          </h1>
          <p className="text-obsidian-400 max-w-xl mx-auto text-lg">
            Start free. Upgrade when you need more power.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <h2 className="font-display font-bold text-2xl mb-2">Free</h2>
            <p className="text-obsidian-400 mb-6">
              Perfect for getting started
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-obsidian-400 ml-2">forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              {FREE_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-obsidian-800 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-obsidian-400" />
                  </div>
                  <span className="text-obsidian-300">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/alchemist"
              className="btn-secondary w-full justify-center"
            >
              Start Free
            </Link>
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 border-gold-500/30 relative overflow-hidden"
          >
            {/* Popular badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold flex items-center gap-1">
              <Crown className="w-3 h-3" />
              POPULAR
            </div>

            <h2 className="font-display font-bold text-2xl mb-2">Pro</h2>
            <p className="text-obsidian-400 mb-6">
              For serious prompt crafters
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$9</span>
              <span className="text-obsidian-400 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {PRO_FEATURES.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      feature.highlight ? "bg-gold-500/20" : "bg-obsidian-800"
                    }`}
                  >
                    <feature.icon
                      className={`w-4 h-4 ${
                        feature.highlight
                          ? "text-gold-400"
                          : "text-obsidian-400"
                      }`}
                    />
                  </div>
                  <span
                    className={
                      feature.highlight ? "text-white" : "text-obsidian-300"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="btn-primary w-full justify-center"
              onClick={() => {
                // In production, this would redirect to Stripe checkout
                alert(
                  "Stripe integration coming soon! Join the waitlist for early access."
                );
              }}
            >
              <Sparkles className="w-5 h-5" />
              Upgrade to Pro
            </button>

            <p className="text-xs text-obsidian-500 text-center mt-4">
              Cancel anytime. 7-day money-back guarantee.
            </p>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What counts as a transformation?",
                a: 'Each time you click "Transform Prompt" counts as one transformation. Viewing history or copying results is unlimited.',
              },
              {
                q: "What's the difference between heuristic and AI analysis?",
                a: "Heuristic analysis uses rule-based pattern matching (fast, free). AI analysis uses Claude to provide deeper, more nuanced improvements.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes! Cancel anytime from your account settings. You'll keep Pro access until the end of your billing period.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards through Stripe. Apple Pay and Google Pay coming soon.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-obsidian-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
