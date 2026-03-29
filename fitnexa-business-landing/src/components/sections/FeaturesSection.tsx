'use client';

import { motion } from 'framer-motion';
import {
  CalendarCheck, Dumbbell, LineChart, Camera, Trophy,
  Utensils, Bell, Megaphone, CreditCard, Flame,
} from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: 'Class Booking',
    description: 'Browse the full schedule, filter by coach or time, and book your spot in seconds.',
  },
  {
    icon: Dumbbell,
    title: 'AI Personal Trainer',
    description: 'Personalized programs that update every week based on your progress and goals.',
  },
  {
    icon: LineChart,
    title: 'Strength Tracker',
    description: 'Log every set. See your strength curve climb. Know your all-time PRs at a glance.',
  },
  {
    icon: Camera,
    title: 'Progress Photos',
    description: 'Capture your transformation over time. Side-by-side comparisons that keep you going.',
  },
  {
    icon: Trophy,
    title: 'Leaderboards',
    description: 'Friendly competition with your gym community. Who\'s leading the streak board this week?',
  },
  {
    icon: Utensils,
    title: 'Nutrition Tracker',
    description: 'Log meals, track macros, and hit your calorie target every single day.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Get notified 30 minutes before your class. Snooze. Dismiss. Never miss.',
  },
  {
    icon: Megaphone,
    title: 'Gym Announcements',
    description: 'New coaches, schedule changes, events — everything from your gym in real time.',
  },
  {
    icon: CreditCard,
    title: 'Membership Hub',
    description: 'Check your plan, upcoming renewals, or request a freeze — all without calling anyone.',
  },
  {
    icon: Flame,
    title: 'Streak System',
    description: 'Build a habit. Don\'t break the chain. Your longest streak is your most motivating metric.',
  },
];

export function FeaturesSection(): React.JSX.Element {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Built for members who{' '}
            <span className="text-brand-400">mean it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Not a generic fitness app. An app that knows your gym, your coach, and your schedule.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-brand-500/30 hover:bg-white/8 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                  <Icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
