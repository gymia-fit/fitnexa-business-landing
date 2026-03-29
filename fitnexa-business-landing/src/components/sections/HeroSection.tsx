'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Star } from 'lucide-react';
import Link from 'next/link';

export function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-600/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-10"
          >
            <div className="flex -space-x-1.5">
              {['JM', 'SK', 'MT', 'AL'].map((init) => (
                <div key={init} className="w-6 h-6 rounded-full bg-brand-500 border-2 border-black flex items-center justify-center text-[8px] font-black text-white">
                  {init}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-brand-400 fill-brand-400" />
              ))}
            </div>
            <span>10,000+ members already training</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight"
          >
            Your gym is finally{' '}
            <span className="text-brand-400">
              on your phone.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Book classes in seconds, track every workout, and stay connected
            with your gym — all in an app built specifically for your gym.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="https://app.gymia.fit/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-500 text-white font-bold text-lg rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-xl shadow-brand-500/25"
            >
              <Sparkles className="w-5 h-5" />
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all text-lg"
            >
              See how it works →
            </Link>
          </motion.div>

          {/* Trust checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
          >
            {[
              'Free forever for members',
              'No credit card required',
              '30 second setup',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-20 grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto"
          >
            {[
              { value: '10K+', label: 'Active Members' },
              { value: '500+', label: 'Classes Booked Daily' },
              { value: '4.9★', label: 'App Rating' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 py-5 text-center">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
