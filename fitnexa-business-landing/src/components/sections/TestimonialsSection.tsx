'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Jake M.',
    role: '5x/week gym-goer',
    text: "Finally an app that actually connects my whole gym life. I've booked 47 classes this month without ever making a phone call.",
    stars: 5,
  },
  {
    name: 'Sofia K.',
    role: 'Powerlifter',
    text: "The AI workout planner adjusted my whole program when I told it I hurt my shoulder. Actually intelligent — not just a template.",
    stars: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Lost 11kg in 4 months',
    text: "I've tried every fitness app out there. Gymia is the only one where I don't feel like I need a second app to fill in the gaps.",
    stars: 5,
  },
];

export function TestimonialsSection(): React.JSX.Element {
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
            Real members
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            From people who actually go to the gym
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <Quote className="w-8 h-8 text-brand-500/40" />
              <p className="text-white/70 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 font-black text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
