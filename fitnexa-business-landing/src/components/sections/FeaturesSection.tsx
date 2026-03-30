'use client';

import { motion } from 'framer-motion';
import {
  Dumbbell, Brain, CalendarCheck, BarChart2, Camera,
  Trophy, Target, Bell, Users, Megaphone, CreditCard, Flame,
} from 'lucide-react';

const FEATURES = [
  { icon: Brain,         name: 'AI Workout Plans',   desc: 'Personalized training programs that adapt to your goals and progress' },
  { icon: Target,        name: 'Nutrition AI',        desc: 'Smart meal planning and calorie tracking powered by AI' },
  { icon: CalendarCheck, name: 'Class Booking',       desc: 'Book gym classes in one tap, straight from the app' },
  { icon: Dumbbell,      name: 'Workout Tracker',     desc: 'Log every set, rep, and personal record with ease' },
  { icon: Camera,        name: 'Progress Photos',     desc: 'Track your visual transformation week by week' },
  { icon: Trophy,        name: 'Leaderboards',        desc: 'Compete with members at your gym and stay motivated' },
  { icon: BarChart2,     name: 'Challenges',          desc: 'Weekly and monthly fitness challenges to keep you consistent' },
  { icon: Bell,          name: 'Smart Reminders',     desc: 'Personalised notifications so you never miss a session' },
  { icon: Users,         name: 'Gym Community',       desc: "Your gym's private social network, built into the app" },
  { icon: Megaphone,     name: 'Gym Announcements',   desc: "Stay up to date with your gym's news and updates" },
  { icon: CreditCard,    name: 'Membership Hub',      desc: 'View and manage your gym membership in-app' },
  { icon: Flame,         name: 'Streak System',       desc: 'Build daily habits with streaks that track your consistency' },
];

export function FeaturesSection(): React.JSX.Element {
  return (
    <section id="features" className="py-28 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Everything your gym life needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            One app. Your workouts, nutrition, gym classes, and community — all in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-brand-500/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1.5">{feature.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
