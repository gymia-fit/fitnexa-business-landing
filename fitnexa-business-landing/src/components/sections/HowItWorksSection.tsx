'use client';

import { motion } from 'framer-motion';
import { Search, UserPlus, CalendarCheck, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 'step1',
    icon: Search,
    title: 'Find Your Gym',
    desc: 'Search by gym name or scan the QR code at the front desk. If your gym uses Gymia, you\'re in.',
  },
  {
    id: 'step2',
    icon: UserPlus,
    title: 'Join in 30 Seconds',
    desc: 'Create your free account with just your name and email. No credit card. No nonsense.',
  },
  {
    id: 'step3',
    icon: CalendarCheck,
    title: 'Book & Train',
    desc: 'Browse the class schedule, book your spot, and log every session. The app tracks it all.',
  },
  {
    id: 'step4',
    icon: TrendingUp,
    title: 'Watch Yourself Grow',
    desc: 'See your strength climb, your streak build, and your body change — week by week.',
  },
];

export function HowItWorksSection(): React.JSX.Element {
  return (
    <section id="how-it-works" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            Getting Started
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            <span className="text-brand-400">Up and training</span>{' '}
            <span className="text-white">in under a minute.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50"
          >
            Four steps. Zero friction. Full commitment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-600/0 via-brand-600/30 to-brand-600/0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10 h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0 relative z-10">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-center lg:text-left text-sm">{step.desc}</p>
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none select-none">
                  0{index + 1}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <ArrowRight className="w-6 h-6 text-white/20 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.a
            href="https://app.gymia.fit/register"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            Find Your Gym
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
