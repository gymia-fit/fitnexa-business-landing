'use client';

import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Member',
    price: 'Free',
    description: 'For members of any Gymia gym',
    period: 'forever',
    features: [
      { text: 'Class booking & schedule', included: true },
      { text: 'Workout logger', included: true },
      { text: 'Streak tracker', included: true },
      { text: 'Gym announcements & chat', included: true },
      { text: 'Progress photos', included: true },
      { text: 'AI workout plans', included: false },
      { text: 'Nutrition tracker', included: false },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Get Started Free',
    ctaHref: 'https://app.gymia.fit/register',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$9.99',
    description: 'For members who want more',
    period: '/month',
    features: [
      { text: 'Everything in Member', included: true },
      { text: 'AI personal trainer', included: true },
      { text: 'Nutrition tracker & macros', included: true },
      { text: 'Advanced progress analytics', included: true },
      { text: 'Unlimited progress photos', included: true },
      { text: 'Priority class booking', included: true },
      { text: 'Leaderboard badges', included: true },
      { text: 'Cancel anytime', included: true },
    ],
    cta: 'Start 14-Day Free Trial',
    ctaHref: 'https://app.gymia.fit/register?plan=premium',
    popular: true,
  },
  {
    name: 'Solo',
    price: '$4.99',
    description: "For those whose gym isn't on Gymia yet",
    period: '/month',
    features: [
      { text: 'Workout logger', included: true },
      { text: 'AI workout plans', included: true },
      { text: 'Streak tracker', included: true },
      { text: 'Progress photos', included: true },
      { text: 'Nutrition tracker', included: true },
      { text: 'Class booking', included: false },
      { text: 'Gym community', included: false },
      { text: 'Coach messaging', included: false },
    ],
    cta: 'Start Free Trial',
    ctaHref: 'https://app.gymia.fit/register?plan=solo',
    popular: false,
  },
];

export function PricingSection(): React.JSX.Element {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-600/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            Free for gym members
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Start free.{' '}
            <span className="text-white/60">Upgrade when you're ready.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            If your gym is on Gymia, you get the full Member plan for free — forever. No catch.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border ${
                plan.popular
                  ? 'bg-white/10 border-brand-500/50 shadow-xl shadow-brand-500/10'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Free' && (
                    <span className="text-white/50">{plan.period}</span>
                  )}
                </div>
                <p className="text-white/50 text-sm">{plan.description}</p>
                {plan.price === 'Free' && (
                  <p className="text-brand-400 text-xs mt-1 font-semibold uppercase tracking-wider">Free {plan.period}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-brand-400 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-white/20 shrink-0" />
                    )}
                    <span className={feature.included ? 'text-white' : 'text-white/30'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block w-full py-4 text-center font-bold rounded-full transition-all ${
                  plan.popular
                    ? 'bg-brand-500 text-white hover:bg-brand-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-10"
        >
          All paid plans include a 14-day free trial. Cancel anytime — no questions asked.
        </motion.p>
      </div>
    </section>
  );
}
