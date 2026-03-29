'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Flame, TrendingUp, CalendarCheck } from 'lucide-react';

const testimonials = [
  {
    quote: "I used to forget my gym existed for weeks at a time. Now I check Gymia every morning to book my class. Haven't missed a week in four months.",
    author: "Jake M.",
    role: "PowerHouse Fitness · Member",
    rating: 5,
    metric: { value: '4 months', label: 'Unbroken Streak', icon: Flame },
  },
  {
    quote: "The AI workout plans actually adapt. I went from barely squatting bodyweight to 90kg in six months. No trainer, just me and the app.",
    author: "Sofia K.",
    role: "Elite Training Center · Member",
    rating: 5,
    metric: { value: '90kg', label: 'Squat PR', icon: TrendingUp },
  },
  {
    quote: "My gym used to send class slots through a WhatsApp group. This is a completely different world. I booked my first class in under 30 seconds.",
    author: "Marcus T.",
    role: "FitLife Gym · Member",
    rating: 5,
    metric: { value: '30 sec', label: 'To Book a Class', icon: CalendarCheck },
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
            Member Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Real members.{' '}
            <span className="text-brand-400">Real results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            10,000+ people already training harder because their gym is finally on their phone.
          </motion.p>
        </div>

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

                {/* Metric */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center shrink-0">
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

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonial.author.split(' ').map((n) => n[0]).join('')}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm mb-4">Members training at these gyms and more</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['FitLife Gym', 'PowerHouse Fitness', 'Elite Training', 'Iron Paradise', 'Apex Athletics'].map((gym) => (
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
