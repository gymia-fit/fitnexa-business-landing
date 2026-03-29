'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, Clock, Wrench, ShieldAlert, ArrowDown } from 'lucide-react';

const painPoints = [
  {
    icon: DollarSign,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    title: '$30,000–$80,000+ to build',
    description:
      'That\'s the average cost of a custom gym app — before a single member ever logs in. Most gyms can\'t justify that bet on a product they\'ve never tested.',
  },
  {
    icon: Users,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    title: 'Good developers are impossible to find',
    description:
      'Top mobile devs are expensive, scarce, and in demand. Agencies overpromise and underdeliver. You\'re not a tech company — you run a gym.',
  },
  {
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    title: '6–12 months to launch',
    description:
      'By the time your custom app clears design, dev, QA, and App Store review, your competitors already have one running. You\'re launching into a crowded market — late.',
  },
  {
    icon: Wrench,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    title: 'Maintenance never ends',
    description:
      'iOS and Android push updates that break your app. Security patches, bug fixes, new device support — budget another $1,000–$3,000/month just to keep the lights on.',
  },
  {
    icon: ShieldAlert,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    title: 'App Store headaches are a full-time job',
    description:
      'Apple rejections, Google Play compliance reviews, two-factor approval cycles, privacy policy updates. Someone has to manage all of it — forever.',
  },
];

export function CustomAppTrapSection(): React.JSX.Element {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
          >
            Before You Call a Developer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Building a Custom Gym App?{' '}
            <span className="text-red-400">Think Again.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Thousands of gym owners have gone down this road. Here's what they
            don't tell you.
          </motion.p>
        </div>

        {/* Cost callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 p-8 rounded-3xl bg-white/3 border border-white/10 text-center"
        >
          <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-3">
            What a custom gym app actually costs
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="relative">
              <span className="text-5xl font-black text-white/20 line-through decoration-red-500 decoration-4">
                $50,000
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-red-500 rotate-[-8deg] rounded-full" />
              </div>
            </div>
            <ArrowDown className="w-6 h-6 text-white/20 rotate-[-90deg]" />
            <div className="text-left">
              <span className="text-5xl font-black text-brand-400">$0</span>
              <p className="text-sm text-white/40 mt-1">to start with Gymia</p>
            </div>
          </div>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-6 rounded-2xl bg-white/3 border ${point.border} hover:bg-white/5 transition-all group`}
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${point.bg} border ${point.border} mb-5`}
                >
                  <Icon className={`w-5 h-5 ${point.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}

          {/* Fifth card spans two columns on lg */}
          {/* (handled naturally by grid — 5 items in 3-col grid leaves last item on its own) */}
        </div>

        {/* Transition bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-px h-12 bg-gradient-to-b from-white/0 to-brand-500/60" />
            <p className="text-2xl md:text-3xl font-black text-white">
              What if you could{' '}
              <span className="text-brand-400">skip all of that?</span>
            </p>
            <p className="text-white/50 max-w-lg text-center">
              Gymia gives your gym a fully branded mobile app — no developers, no
              delays, no maintenance nightmares.
            </p>
            <div className="w-px h-12 bg-gradient-to-b from-brand-500/60 to-white/0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
