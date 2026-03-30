'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';

export function CTASection(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="py-28 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Glow */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="relative inline-flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-400 fill-brand-400" />
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            Be first when we launch.
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Join thousands of gym-goers already on the waitlist. We&apos;ll notify you
            the moment Gymia hits the App Store.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-lg mb-6">
              <Check className="w-5 h-5" />
              You&apos;re on the list! We&apos;ll notify you at launch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 w-full px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-sm rounded-full hover:bg-brand-400 transition-all hover:scale-105 shadow-xl shadow-brand-500/25 whitespace-nowrap"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-white/30 text-xs mb-8">Free forever · iOS & Android · No spam</p>

          <Link
            href="https://business.gymia.fit"
            className="text-white/30 text-sm hover:text-brand-400 transition-colors"
          >
            Own a gym? → business.gymia.fit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
