'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function CTASection(): React.JSX.Element {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-brand-600/20 to-brand-500/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Free for gym members
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Ready to actually{' '}
            <span className="text-brand-400">show up?</span>
          </h2>

          <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
            Join 10,000+ members who stopped making excuses.
            Your gym is waiting on your phone — go get it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="https://app.gymia.fit/register"
              className="group inline-flex items-center gap-2 px-12 py-5 bg-brand-500 text-white font-bold text-xl rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-2xl shadow-brand-500/30"
            >
              <Sparkles className="w-6 h-6" />
              Get Started Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            {[
              'Free forever for members',
              'No credit card',
              '30 seconds to set up',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-white/30 text-sm mb-4">Is your gym not on Gymia yet?</p>
            <Link
              href="https://gymia.fit/gym-signup"
              className="text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors underline underline-offset-4"
            >
              Tell your gym owner about us →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
