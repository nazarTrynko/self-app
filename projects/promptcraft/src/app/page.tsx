'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Wand2, 
  ArrowRight, 
  Zap, 
  Brain, 
  Eye,
  BookOpen,
  Users,
  Check,
  Star,
  ChevronDown
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In production, this would send to your email service
      console.log('Waitlist signup:', email);
    }
  };

  const triggerDemo = () => {
    setIsTransforming(true);
    setTimeout(() => setIsTransforming(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-800/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <span className="font-display font-bold text-lg">PromptCraft</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-obsidian-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-obsidian-400 hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="text-sm text-obsidian-400 hover:text-white transition-colors">Pricing</a>
            </div>
            <a href="#waitlist" className="btn-primary text-sm py-2">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arcane-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-800/50 border border-obsidian-700 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-obsidian-300">Introducing The Alchemist</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your Prompts
              <br />
              <span className="gradient-text">From Basic to Brilliant</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-obsidian-400 max-w-2xl mx-auto mb-10"
            >
              The Alchemist analyzes your AI prompts and shows you exactly 
              <span className="text-white"> why </span> 
              each improvement makes them more powerful. Learn the craft while you create.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a href="#waitlist" className="btn-primary text-lg px-8 py-4">
                <Wand2 className="w-5 h-5" />
                Get Early Access
              </a>
              <a href="#demo" className="btn-secondary text-lg px-8 py-4">
                <Eye className="w-5 h-5" />
                See It In Action
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-6 text-sm text-obsidian-500"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-arcane-500 to-gold-500 border-2 border-obsidian-950"
                    />
                  ))}
                </div>
                <span>500+ on waitlist</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
                <span className="ml-1">Highly anticipated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-obsidian-600" />
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Watch the <span className="gradient-text">Transformation</span>
              </h2>
              <p className="text-obsidian-400 max-w-xl mx-auto">
                Paste any prompt and watch The Alchemist reveal the hidden improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-obsidian-400">
                  <div className="w-2 h-2 rounded-full bg-ember-500" />
                  Before
                </div>
                <div className="alchemist-input cursor-pointer" onClick={triggerDemo}>
                  <p className="text-obsidian-400">
                    Write me a blog post about productivity
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gold-400">
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  After Transformation
                </div>
                <motion.div 
                  className="alchemist-output relative overflow-hidden"
                  animate={isTransforming ? { scale: [1, 1.02, 1] } : {}}
                >
                  {isTransforming && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1, repeat: 1 }}
                    />
                  )}
                  <p className="text-obsidian-200">
                    You are a productivity expert who has helped thousands of professionals optimize their workflows. Write a 1,500-word blog post for ambitious professionals in their 30s who struggle with focus in the remote work era.
                    <br /><br />
                    <span className="text-gold-400">Structure:</span> Hook with a relatable scenario → 3 actionable frameworks → Real examples → Clear takeaways
                    <br /><br />
                    <span className="text-gold-400">Tone:</span> Conversational but authoritative, no fluff, respect the reader&apos;s time
                    <br /><br />
                    <span className="text-gold-400">Avoid:</span> Generic advice like &quot;make a to-do list&quot; — focus on counterintuitive insights backed by research
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Explanation */}
            <motion.div 
              className="mt-8 p-6 rounded-xl bg-obsidian-800/30 border border-obsidian-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-arcane-400" />
                Why This Works Better
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {[
                  { label: 'Role Assignment', desc: 'AI performs better with expertise context' },
                  { label: 'Specific Audience', desc: 'Targeted content outperforms generic' },
                  { label: 'Clear Structure', desc: 'Reduces ambiguity, improves output quality' },
                  { label: 'Constraints', desc: 'Boundaries focus the AI, eliminate fluff' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-obsidian-900/50">
                    <span className="text-gold-400 font-medium block mb-1">{item.label}</span>
                    <span className="text-obsidian-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center mt-8">
              <button onClick={triggerDemo} className="btn-primary">
                <Zap className="w-5 h-5" />
                Try the Transformation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              More Than a Tool. <span className="gradient-text">A Teacher.</span>
            </h2>
            <p className="text-obsidian-400 max-w-2xl mx-auto text-lg">
              Every transformation is a lesson. Learn why prompts work, not just what to write.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wand2,
                title: 'Instant Analysis',
                description: 'Paste any prompt and get immediate insights on structure, specificity, and context.',
                color: 'text-gold-400',
              },
              {
                icon: Brain,
                title: 'Learn the Why',
                description: 'Every improvement comes with an explanation. Understand the craft, not just the result.',
                color: 'text-arcane-400',
              },
              {
                icon: Zap,
                title: 'Pattern Recognition',
                description: 'Discover the 7 prompt patterns that work across any AI model or use case.',
                color: 'text-ember-400',
              },
              {
                icon: BookOpen,
                title: 'Prompt DNA',
                description: 'Coming soon: Deep-dive courses on the science of prompt engineering.',
                color: 'text-gold-400',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Coming soon: Share your best prompts, learn from masters, grow together.',
                color: 'text-arcane-400',
              },
              {
                icon: Sparkles,
                title: 'Marketplace',
                description: 'Coming soon: Sell your prompt expertise. Buy proven prompt systems.',
                color: 'text-ember-400',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="feature-card"
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-obsidian-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-obsidian-900/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Three Steps to <span className="gradient-text">Mastery</span>
            </h2>
            <p className="text-obsidian-400 max-w-2xl mx-auto text-lg">
              Transform your prompts and your understanding in seconds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Paste Your Prompt',
                description: 'Drop in any prompt you use with ChatGPT, Claude, or any AI assistant.',
              },
              {
                step: '02',
                title: 'Watch It Transform',
                description: 'The Alchemist analyzes structure, adds context, and optimizes for better results.',
              },
              {
                step: '03',
                title: 'Learn & Apply',
                description: 'Understand why each change matters. Apply the patterns to every future prompt.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="font-display text-7xl font-bold text-obsidian-800/50 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-obsidian-400">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-obsidian-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-obsidian-400 max-w-2xl mx-auto text-lg">
              Start free. Upgrade when you&apos;re ready for more power.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="font-display font-bold text-2xl mb-2">Free</h3>
              <p className="text-obsidian-400 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                {[
                  '5 transformations per day',
                  'Basic analysis engine',
                  'Copy transformed prompts',
                  'Pattern explanations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-obsidian-300">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full">Coming Soon</button>
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-gold-500/30 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold">
                POPULAR
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Pro</h3>
              <p className="text-obsidian-400 mb-6">For serious prompt crafters</p>
              <div className="text-4xl font-bold mb-6">
                $9<span className="text-lg font-normal text-obsidian-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited transformations',
                  'AI-powered analysis (Claude)',
                  'Transformation history',
                  'Export & share results',
                  'Priority access to new features',
                  'Prompt DNA courses (coming soon)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-obsidian-300">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="btn-primary w-full justify-center">
                Join Waitlist
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-arcane-500/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center mx-auto mb-6">
              <Wand2 className="w-8 h-8 text-obsidian-950" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Be First to <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-obsidian-400 mb-8 text-lg">
              Join the waitlist for early access. We&apos;re launching soon with limited spots.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/30"
              >
                <Check className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">You&apos;re on the list!</h3>
                <p className="text-obsidian-400">
                  We&apos;ll notify you as soon as The Alchemist is ready for you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="input-field flex-1"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <Sparkles className="w-5 h-5" />
                  Join Waitlist
                </button>
              </form>
            )}

            <p className="text-xs text-obsidian-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-obsidian-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-arcane-500 flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-obsidian-950" />
              </div>
              <span className="font-display font-bold text-lg">PromptCraft</span>
            </div>
            <p className="text-sm text-obsidian-500">
              © 2026 PromptCraft. Master the art of AI conversation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
