'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Building2, Target, TrendingUp, Users, Heart, DollarSign, Palette, CreditCard, ShoppingBag, Truck, CheckCircle, Star, BarChart3, Rocket } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Target,
    title: 'Get More Members',
    description: 'Capture demand in your area before competitors. Turn free users into paying members.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Explode Your Growth',
    description: '3x more leads with our proven demand capture system. Watch your membership grow.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Heart,
    title: 'Stop Churn',
    description: 'Digital engagement keeps members coming back. Build loyalty that lasts.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    title: 'New Revenue',
    description: 'Sell products, supplements, and premium programs through your branded app.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

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
];

const stats = [
  { value: '3X', label: 'More Leads' },
  { value: '85%', label: 'Member Engagement' },
  { value: '50+', label: 'Partner Gyms' },
  { value: '10K+', label: 'Active Users' },
];

export function ForGymsSection(): React.JSX.Element {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header - Sales focused */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Building2 className="w-4 h-4" />
            For Gym Owners Who Want to Grow
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Turn Interest into <span className="text-blue-400">Income</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Stop guessing where your next members come from. Gymia shows you exactly 
            who's interested in your gym — and helps you convert them.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl md:text-5xl font-black text-blue-400 mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What You Get
            </h3>
            <p className="text-white/50">Everything you need to dominate your market</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Why act now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🚀 Limited Time: 2 Months FREE
            </h3>
            <p className="text-white/60">
              Lock in your spot and start capturing demand before your competitors do.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Setup in days</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.gymia.fit/gym-signup"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-blue-500 text-white font-bold text-xl rounded-full hover:bg-blue-400 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <Sparkles className="w-6 h-6" />
              Get 2 Months FREE
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>

        {/* Final trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40">
            Join 50+ gym owners who are already growing with Gymia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
