'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, Check, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function HeroSection(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // TODO: Integrate with your email capture service (e.g., ConvertKit, Mailchimp)
    // For now, simulate success and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = 'https://app.gymia.fit/gym-signup';
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8"
          >
            <Building2 className="w-4 h-4" />
            For Gym Owners & Fitness Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Grow Your Gym with{' '}
            <span className="text-brand-400">
              Real Demand
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/50 mb-10 max-w-2xl mx-auto"
          >
            Stop spending $50K on custom apps that take months to build.
            Gymia gives your gym a fully branded mobile app — live in days, not months.
          </motion.p>

          {/* Email Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto mb-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full hover:bg-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 whitespace-nowrap"
              >
                {isSubmitting ? (
                  'Starting...'
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-sm text-white/40 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-400" />
                2 months free
              </span>
            </p>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all text-sm"
            >
              Or watch a 2-min demo →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              Setup in days
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              50+ gyms trust Gymia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
