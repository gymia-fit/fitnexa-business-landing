'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, BrainCircuit, TrendingUp, Users, Salad, Bell } from 'lucide-react';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Book Classes Instantly',
    description: 'Browse today\'s schedule and reserve your spot in 2 taps. Get a reminder 30 minutes before so you never show up late.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: BrainCircuit,
    title: 'AI Workout Plans',
    description: 'Tell us your goal. Get a personalized plan that evolves week by week as you get stronger — no PT required.',
    gradient: 'from-brand-600 to-brand-500',
  },
  {
    icon: TrendingUp,
    title: 'Track Every PR',
    description: 'Log sets, reps, and weights. Watch your strength curve climb over time and know exactly when you\'re ready to push more.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: Users,
    title: 'Your Gym Community',
    description: 'See who\'s in your next class, celebrate each other\'s milestones, and build friendships that actually get you out of bed at 6am.',
    gradient: 'from-brand-600 to-brand-500',
  },
  {
    icon: Salad,
    title: 'Nutrition That Fits',
    description: 'Log meals, track macros, and stay fuelled for every session. Simple enough to actually stick with.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: Bell,
    title: 'Never Miss a Thing',
    description: 'Class reminders, coach announcements, schedule changes — everything from your gym lands in one place, instantly.',
    gradient: 'from-brand-600 to-brand-500',
  },
];

export function BenefitsSection(): React.JSX.Element {
  return (
    <section id="benefits" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            What You Get
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Everything you need to{' '}
            <span className="text-brand-400">actually show up.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Gymia removes every excuse. Book, track, eat, connect — one app, zero friction.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10K+', label: 'Active Members' },
            { value: '4.9★', label: 'App Store Rating' },
            { value: '85%', label: 'Weekly Retention' },
            { value: '2 taps', label: 'To Book a Class' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
