'use client';

import { motion } from 'framer-motion';
import { Gift, Brain, Users, LayoutGrid, Flame, Building2 } from 'lucide-react';

const BENEFITS = [
  {
    icon: Gift,
    title: 'Free forever',
    desc: 'No subscription, no credit card, no catch. Gymia is completely free for all gym members.',
  },
  {
    icon: Brain,
    title: 'AI-powered',
    desc: 'Workouts and nutrition plans personalised to your body, goals, and schedule — not a generic template.',
  },
  {
    icon: Users,
    title: 'Community-first',
    desc: 'Connect, compete, and train alongside the other members at your gym. Not strangers on the internet.',
  },
  {
    icon: LayoutGrid,
    title: 'All-in-one',
    desc: 'Workouts, nutrition, class booking, and your membership card — one app, zero switching.',
  },
  {
    icon: Flame,
    title: 'Stay consistent',
    desc: 'Streaks, challenges, and smart reminders built to keep you showing up, even on the hard days.',
  },
  {
    icon: Building2,
    title: 'Works with your gym',
    desc: 'Fully integrated with your gym\'s timetable, classes, and announcements. Always in sync.',
  },
];

export function BenefitsSection(): React.JSX.Element {
  return (
    <section className="py-28 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Why Gymia
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Built for people who go to the gym
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Not a generic fitness app. Built specifically for gym-goers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-brand-500/20 hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
