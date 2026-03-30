'use client';

import { motion } from 'framer-motion';
import { Search, UserPlus, CalendarCheck, TrendingUp, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Find Your Gym',
    desc: 'Search for your gym and join their Gymia community with one tap',
  },
  {
    icon: UserPlus,
    step: '02',
    title: 'Set Your Goals',
    desc: 'Tell the AI your fitness goals, schedule, and preferences',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: 'Book & Train',
    desc: 'Browse the class timetable and reserve your spot in seconds',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Watch Yourself Grow',
    desc: 'Track every workout, PR, and progress photo as you transform',
  },
];

export function HowItWorksSection(): React.JSX.Element {
  return (
    <section id="how-it-works" className="py-28 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Up and running in 30 seconds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            No tutorials. No setup. Just download and go.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-brand-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 text-white text-[10px] font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-3 w-4 h-4 text-white/20 translate-x-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
