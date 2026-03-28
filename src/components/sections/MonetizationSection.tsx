'use client';

import { motion } from 'framer-motion';
import { CreditCard, ShoppingBag, Truck, Heart, Building2, Palette, ArrowRight, DollarSign, Gem } from 'lucide-react';
import Link from 'next/link';

const monetizationFeatures = [
  {
    icon: CreditCard,
    title: 'Stripe Payments',
    description: 'Secure payment processing powered by Stripe for memberships, subscriptions, and one-time purchases.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accent: 'text-blue-400',
  },
  {
    icon: Building2,
    title: 'Gym Payments',
    description: 'Gyms can process membership payments, join fees, and premium program fees through the platform.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
  },
  {
    icon: ShoppingBag,
    title: 'In-App Shop',
    description: 'Sell supplements, apparel, accessories, and digital programs directly within the app.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
  },
  {
    icon: Truck,
    title: 'Shop Delivery',
    description: 'Integrated delivery system for physical products. Manage inventory, shipping, and fulfillment.',
    gradient: 'from-orange-500/20 to-red-500/20',
    accent: 'text-orange-400',
  },
  {
    icon: Palette,
    title: 'Branded Products',
    description: 'Gyms can create and sell custom-branded merchandise through their white-label store.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'text-cyan-400',
  },
  {
    icon: Heart,
    title: 'Optional Donations',
    description: 'Free users can support the platform with optional donations. Recognition badges for supporters.',
    gradient: 'from-rose-500/20 to-pink-500/20',
    accent: 'text-rose-400',
  },
];

export function MonetizationSection(): React.JSX.Element {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            Revenue & Commerce
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Multiple Ways to <span className="text-emerald-400">Monetize</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Gymia supports flexible monetization models for both the platform and partner gyms. 
            From payments to products, we've got you covered.
          </motion.p>
        </div>

        {/* Monetization Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {monetizationFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${feature.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Revenue Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: DollarSign,
              title: 'White-Label Software',
              description: 'Gyms pay for their branded app and admin panel. Monthly or annual subscription model.',
              gradient: 'from-emerald-500 to-teal-500',
            },
            {
              icon: ShoppingBag,
              title: 'In-App Commerce',
              description: 'Revenue share on product sales. Gyms keep margins on their branded merchandise.',
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              icon: Gem,
              title: 'Membership Payments',
              description: 'Platform fee on membership transactions. Stripe integration handles everything.',
              gradient: 'from-blue-500 to-indigo-500',
            },
          ].map((model, i) => {
            const Icon = model.icon;
            return (
              <div key={model.title} className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
                <p className="text-white/50 text-sm">{model.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-white/10">
            <Heart className="w-5 h-5 text-emerald-400" />
            <span className="text-white/80">Free users can also support us with optional donations</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="https://app.gymia.fit/register"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-bold text-lg rounded-full hover:bg-emerald-400 transition-all hover:scale-105"
            >
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://app.gymia.fit/gym-signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Partner with Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
