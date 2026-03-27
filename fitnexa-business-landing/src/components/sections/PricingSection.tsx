'use client';

import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect to get started',
    period: 'first 2 months',
    features: [
      { text: 'Up to 100 members', included: true },
      { text: 'AI Theme Generator', included: true },
      { text: 'Mobile App (Basic)', included: true },
      { text: 'Admin Dashboard', included: true },
      { text: 'Email Support', included: true },
      { text: 'Analytics', included: false },
      { text: 'Multi-location', included: false },
      { text: 'API Access', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For growing gyms',
    period: '/month after trial',
    features: [
      { text: 'Up to 500 members', included: true },
      { text: 'AI Theme Generator', included: true },
      { text: 'Branded Mobile App', included: true },
      { text: 'Full Admin Dashboard', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Up to 3 locations', included: true },
      { text: 'API Access', included: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large operations',
    period: 'contact us',
    features: [
      { text: 'Unlimited members', included: true },
      { text: 'AI Theme Generator', included: true },
      { text: 'White-label App', included: true },
      { text: 'Custom Dashboard', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Full Analytics Suite', included: true },
      { text: 'Unlimited locations', included: true },
      { text: 'Full API Access', included: true },
    ],
    cta: 'Contact Sales',
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
            2 Months Free Trial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Simple Pricing. <br />
            <span className="text-white/60">Cancel Anytime.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            No long-term contracts. No hidden fees. If Gymia doesn't work for you, simply unsubscribe. Your data will be sent to you.
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
                  ? 'bg-white/10 border-brand-500/50'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-white/50">/mo</span>
                  )}
                </div>
                <p className="text-white/50 text-sm">{plan.description}</p>
                {plan.period && (
                  <p className="text-brand-400 text-xs mt-1">{plan.period}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-brand-400 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-white/20 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? 'text-white' : 'text-white/30'
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.gymia.fit/onboarding"
                className={`block w-full py-4 text-center font-bold rounded-full transition-all ${
                  plan.popular
                    ? 'bg-brand-500 text-white hover:bg-brand-400'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
