'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Building2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function CTASection(): React.JSX.Element {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-600/20 to-brand-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA for Users */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-600/20 to-brand-500/20 rounded-3xl border border-brand-500/20 p-8 md:p-12 mb-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                For Fitness Enthusiasts
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Start Getting Fit <span className="text-brand-400">FREE</span>
              </h2>
              <p className="text-white/60 text-lg">
                Join 10,000+ members already training with Gymia. No credit card needed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.gymia.fit/register"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-500 text-white font-bold text-xl rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-lg shadow-brand-500/25"
              >
                <Sparkles className="w-6 h-6" />
                Start FREE Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">30 Seconds Setup</span>
              </div>
            </div>
          </motion.div>

          {/* CTA for Gyms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-600/20 to-brand-500/20 rounded-3xl border border-brand-500/20 p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                For Gym Owners
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Grow Your Gym <span className="text-brand-400">3X Faster</span>
              </h2>
              <p className="text-white/60 text-lg">
                Get 2 months FREE when you sign up today. Capture demand and convert leads.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.gymia.fit/gym-signup"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-500 text-white font-bold text-xl rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-lg shadow-brand-500/25"
              >
                <Sparkles className="w-6 h-6" />
                Get 2 Months FREE
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Book Demo
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span className="text-sm">Setup in Days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
