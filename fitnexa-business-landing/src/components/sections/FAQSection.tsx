'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Is Gymia really free?',
    a: 'Yes, completely free for gym members. No subscription, no hidden fees, no credit card required — ever.',
  },
  {
    q: 'Does my gym need to be on Gymia?',
    a: "Yes — your gym needs to be a Gymia partner to unlock features like class booking, community, and gym announcements. Tell your gym owner about Gymia Business (business.gymia.fit) to get them set up.",
  },
  {
    q: 'When is the app launching?',
    a: "We're launching on iOS and Android very soon. Join the waitlist to be the first to know and get early access.",
  },
  {
    q: "What if my gym isn't on Gymia yet?",
    a: "You can still use AI workout plans, nutrition tracking, progress photos, and streaks. Gym-specific features like class booking and community unlock once your gym joins.",
  },
  {
    q: 'Does it work for home workouts?',
    a: "Gymia is designed for gym-goers, but the AI workout and nutrition features work anywhere — gym, home, or hotel room.",
  },
  {
    q: 'How does the Nutrition AI work?',
    a: "Tell it your goals, body stats, and food preferences. It generates personalised weekly meal plans and tracks your daily intake automatically.",
  },
  {
    q: 'Is my data private?',
    a: "Your fitness and health data is private and never sold. Gymia earns through the in-app shop — your data stays yours.",
  },
  {
    q: 'What phones does it support?',
    a: 'Gymia will be available on iOS (iPhone) and Android at launch. Older devices are supported where possible.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/[0.08]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-white font-medium text-sm group-hover:text-brand-400 transition-colors">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-white/30 shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-brand-400' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-white/50 text-sm leading-relaxed pr-8">{a}</p>
      )}
    </motion.div>
  );
}

export function FAQSection(): React.JSX.Element {
  return (
    <section id="faq" className="py-28 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            Questions? We&apos;ve got answers.
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
