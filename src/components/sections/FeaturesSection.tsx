'use client';

import { motion } from 'framer-motion';
import { Palette, CreditCard, BarChart3, Rocket, Target, Users, TrendingUp, Heart, DollarSign, Building2 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Branded App',
    description: 'Your logo, your colors, your app. Impress members with a premium experience.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Stripe-powered billing. Recurring payments that just work.',
  },
  {
    icon: BarChart3,
    title: 'Real Analytics',
    description: 'Know your numbers. See where demand is and track conversions.',
  },
  {
    icon: Rocket,
    title: 'Launch Fast',
    description: 'Set up in days, not months. No developers needed.',
  },
  {
    icon: Target,
    title: 'Lead Capture',
    description: 'Capture demand in your area before competitors. Turn free users into paying members.',
  },
  {
    icon: Users,
    title: 'Member Management',
    description: 'Digital engagement keeps members coming back. Build loyalty that lasts.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Engine',
    description: '3x more leads with our proven demand capture system. Watch your membership grow.',
  },
  {
    icon: Heart,
    title: 'Community Building',
    description: 'Build a stronger community that keeps coming back. Digital touchpoints keep members engaged.',
  },
  {
    icon: DollarSign,
    title: 'New Revenue',
    description: 'Sell products, supplements, and premium programs through your branded app.',
  },
  {
    icon: Building2,
    title: 'White-Label',
    description: 'Get a custom-branded app without the custom development cost.',
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
            What You Get
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Everything You Need to <span className="text-brand-400">Dominate Your Market</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            From branded apps to real analytics, we've got you covered. Everything you need to grow your gym.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
