'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How does the 2-month free trial work?",
    answer: "You get full access to all features for 2 months completely free. No credit card required. After the trial, you can choose to continue with a paid plan or cancel anytime.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data is always yours. If you cancel, we'll send you all your data in a portable format. We never hold your data hostage.",
  },
  {
    question: "How long does setup take?",
    answer: "Most gyms are up and running within 2-3 days. Our team helps you with the initial setup, and the platform is designed to be intuitive and easy to use.",
  },
  {
    question: "Do I need technical skills to use Gymia?",
    answer: "Not at all. Gymia is designed for gym owners, not developers. If you can use a smartphone, you can use Gymia.",
  },
  {
    question: "Can I customize the app with my gym's branding?",
    answer: "Yes! Our Growth and Enterprise plans include full white-label customization. Your logo, your colors, your app.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans, priority support for Growth plans, and dedicated support for Enterprise plans. Our team is always here to help.",
  },
  {
    question: "How much does a custom gym app usually cost?",
    answer: "A custom gym app typically costs $30,000–$80,000+ to build — and that's before launch. Add 6–12 months of development time, App Store review cycles, and $1,000–$3,000/month in ongoing maintenance just to keep it running on the latest iOS and Android versions. Most gyms that go down this road end up with a generic-looking product that's already outdated by the time it ships. Gymia gives you a fully branded app at a fraction of that cost, live in days.",
  },
  {
    question: "Why not just hire a developer to build my app?",
    answer: "You can — but consider what you're signing up for. Good mobile developers are expensive and hard to find. Agencies routinely overpromise and underdeliver. Once the app is built, you own all the maintenance: OS updates break things, security patches need applying, App Store policies change. That's a part-time job on top of running your gym. With Gymia, our team handles 100% of the infrastructure, updates, and App Store management. You focus on your members; we handle the tech.",
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
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Frequently Asked <span className="text-brand-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-left"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-white/50 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
