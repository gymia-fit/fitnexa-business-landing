'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Smartphone } from 'lucide-react';

export function HeroSection(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

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

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-10"
          >
            <Smartphone className="w-4 h-4 text-brand-400" />
            <span>Coming soon on iOS & Android</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight"
          >
            Your gym,{' '}
            <span className="text-brand-400">in your pocket.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The free app that tracks your workouts, plans your nutrition with AI,
            and connects you with your gym community.
          </motion.p>

          {/* Waitlist form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            {submitted ? (
              <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-lg">
                <Check className="w-5 h-5" />
                You&apos;re on the list! We&apos;ll notify you at launch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 w-full px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-sm rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-xl shadow-brand-500/25 whitespace-nowrap"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
            <p className="text-xs text-white/30 flex items-center gap-1.5">
              🔒 No spam. We&apos;ll only email you when the app launches.
            </p>
          </motion.div>

          {/* Trust checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 mb-20"
          >
            {[
              'Free forever',
              '10,000+ on the waitlist',
              'iOS & Android',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto"
          >
            {[
              { value: '10K+', label: 'On the waitlist' },
              { value: '12', label: 'Features at launch' },
              { value: '100%', label: 'Free for members' },
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
