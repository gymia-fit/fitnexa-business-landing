'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, CreditCard, Accessibility, Server } from 'lucide-react';

const trustBadges = [
  {
    icon: CreditCard,
    title: 'Stripe Secured',
    description: 'PCI DSS compliant payments',
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Your data is protected',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20',
  },
  {
    icon: Accessibility,
    title: 'WCAG 2.1 AA',
    description: 'Fully accessible platform',
    color: 'text-orange-400',
    bg: 'from-orange-500/10 to-orange-500/5',
    border: 'border-orange-500/20',
  },
  {
    icon: Server,
    title: '99.9% Uptime',
    description: 'Always available',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
  },
];

export function TrustBadgesSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">
            Built for Security & Compliance
          </p>
          <p className="text-white/30 text-xs">
            Your data and your members' data is protected with industry-leading security
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative rounded-2xl bg-gradient-to-br ${badge.bg} border ${badge.border} p-5 hover:border-white/30 transition-all`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${badge.color}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{badge.title}</h4>
                  <p className="text-xs text-white/40">{badge.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
