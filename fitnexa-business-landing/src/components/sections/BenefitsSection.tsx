'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Heart, DollarSign, ArrowRight, Building2, Sparkles } from 'lucide-react';
import Link from 'next/link';

const businessBenefits = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'See exactly where demand is growing in your area. Gymia shows you interested users before they even become members.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: Users,
    title: 'Member Activation',
    description: 'Turn free users into active gym members. Digital engagement creates more touchpoints for conversion.',
    gradient: 'from-brand-600 to-brand-500',
  },
  {
    icon: TrendingUp,
    title: 'Higher Conversion',
    description: 'Users who engage with the virtual gym are warmer leads. Show them the value of your physical location.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: Heart,
    title: 'Better Retention',
    description: 'Digital touchpoints keep members engaged between visits. Build a stronger community that keeps coming back.',
    gradient: 'from-brand-600 to-brand-500',
  },
  {
    icon: DollarSign,
    title: 'New Revenue Streams',
    description: 'Sell products, supplements, and apparel through the app. Offer premium programs and memberships.',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    icon: Building2,
    title: 'White-Label Platform',
    description: 'Get a custom-branded app without the custom development cost. Your members get an experience that\'s uniquely yours.',
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
            For Gyms
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Grow Your Gym with <span className="text-brand-400">Real Demand</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Gymia isn't just another gym software. It's a growth engine that captures demand, 
            converts leads, and keeps members engaged — all through a branded digital experience.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {businessBenefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
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

        {/* Stats / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '50+', label: 'Partner Gyms' },
            { value: '85%', label: 'Engagement Rate' },
            { value: '3x', label: 'Lead Increase' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA for Gyms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-white/80">Start Your Digital Transformation</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to capture demand and grow your gym?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.gymia.fit/gym-signup"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full hover:bg-brand-400 transition-all hover:scale-105"
            >
              Bring Gymia to Your Gym
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
