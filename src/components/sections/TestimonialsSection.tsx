'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, DollarSign } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Gymia transformed our gym operations. We've seen a 40% increase in member retention and 3x more leads since implementing the platform.",
    author: "Sarah Johnson",
    role: "Owner, FitLife Gym",
    rating: 5,
    metric: { value: '40%', label: 'Retention Increase', icon: TrendingUp },
    image: '/images/testimonials/sarah-johnson.jpg',
  },
  {
    quote: "The analytics dashboard alone is worth the investment. We converted 150 free users to paid members in the first 3 months.",
    author: "Michael Chen",
    role: "Manager, PowerHouse Fitness",
    rating: 5,
    metric: { value: '150+', label: 'New Members', icon: Users },
    image: '/images/testimonials/michael-chen.jpg',
  },
  {
    quote: "Our members love the mobile app. Class bookings increased 65% and we've added $12K/month in-app product sales.",
    author: "Emily Rodriguez",
    role: "Director, Elite Training Center",
    rating: 5,
    metric: { value: '$12K', label: 'Monthly Revenue', icon: DollarSign },
    image: '/images/testimonials/emily-rodriguez.jpg',
  },
];

export function TestimonialsSection(): React.JSX.Element {
  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden">
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Loved by <span className="text-brand-400">50+ Gym Owners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Join the growing community of gym owners who are already growing with Gymia.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => {
            const MetricIcon = testimonial.metric.icon;
            return (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <Quote className="w-8 h-8 text-brand-400 mb-6" />
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Metric Highlight */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
                    <MetricIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">{testimonial.metric.value}</p>
                    <p className="text-xs text-white/50">{testimonial.metric.label}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-brand-400 fill-brand-400" />
                  ))}
                </div>

                {/* Author with Image */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm mb-4">And 50+ more gym owners trust Gymia</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['FitLife Gym', 'PowerHouse Fitness', 'Elite Training', 'Iron Paradise', 'Apex Athletics'].map((gym, i) => (
              <span
                key={gym}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm"
              >
                {gym}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
