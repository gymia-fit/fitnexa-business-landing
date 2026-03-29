'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is Gymia really free for members?',
    answer: 'Yes — completely free if your gym is a Gymia partner. Your gym covers the cost. No hidden fees, no credit card, no expiry. The free Member plan is yours for as long as you train there.',
  },
  {
    question: 'My gym isn\'t on Gymia yet. What do I do?',
    answer: 'Tell your gym owner about us! Share our link with them or drop your gym\'s email in the chat — our team will reach out and get them set up within days. In the meantime, the Solo plan lets you use the workout logger and AI plans independently.',
  },
  {
    question: 'Can I actually book classes through the app?',
    answer: 'Yes. Browse the full class schedule, filter by time or coach, and book your spot in seconds. You\'ll get a push notification 30 minutes before class. Cancel up to 1 hour before — all from the app, no calls needed.',
  },
  {
    question: 'What does the AI workout planner actually do?',
    answer: 'You tell it your goal (fat loss, muscle gain, strength, endurance), your current fitness level, and how many days a week you can train. It builds a custom program and updates it automatically as you log workouts and progress. It\'s like a PT that\'s always available and always watching your data.',
  },
  {
    question: 'Does Gymia work for all gym types?',
    answer: 'Yes — CrossFit boxes, yoga studios, traditional gyms, HIIT facilities, boxing gyms, Pilates. If your gym has classes or a floor, Gymia works for it.',
  },
  {
    question: 'Can I use Gymia if my gym doesn\'t offer group classes?',
    answer: 'Absolutely. The AI workout planner, workout logger, progress tracker, streak system, and nutrition tracker all work fully independently of class booking. The Solo plan is perfect for this.',
  },
  {
    question: 'What happens to my data if I leave my gym?',
    answer: 'Your workout history, progress photos, PRs, and nutrition logs are yours — always. If you switch gyms, your data comes with you. If you close your account, we export everything to you in a standard format. We never hold your data hostage.',
  },
  {
    question: 'How is this different from apps like MyFitnessPal or Strava?',
    answer: 'Those are great generic apps. Gymia is different because it\'s connected to your actual gym — your real schedule, your real coaches, your real community. You can book a class, log the workout your coach just ran, message your coach, and see which of your gym friends are in tonight\'s session. No other app does that.',
  },
];

export function FAQSection(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Questions we{' '}
            <span className="text-brand-400">actually get asked.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            No fluff. Just straight answers.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-left"
              >
                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-white/50 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
