'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { CinematicAppDemo } from './CinematicAppDemo';

export function BrandShowcaseSection(): React.JSX.Element {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                White-Label Branding
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Your Brand. <br />
                <span className="text-brand-400">Everywhere.</span>
              </h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed max-w-xl">
                From the sign on your door to the icon on their home screen. Gymia runs in the background, making your gym look like a tech powerhouse.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Custom App Icon & Name',
                  'Matching Color Themes',
                  'Branded Member Portal',
                  'Your Logo on Statements'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.gymia.fit/onboarding"
                className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-400 transition-colors group"
              >
                Start Building Your Brand <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-brand-500/20 rounded-[40px] blur-3xl -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <CinematicAppDemo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
