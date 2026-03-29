'use client';

import { motion } from 'framer-motion';

const gymLogos = [
  { name: 'FitLife Gym', initials: 'FL' },
  { name: 'PowerHouse Fitness', initials: 'PH' },
  { name: 'Elite Training Center', initials: 'ET' },
  { name: 'Iron Paradise', initials: 'IP' },
  { name: 'Apex Athletics', initials: 'AA' },
  { name: 'Zenith Fitness', initials: 'ZF' },
  { name: 'Titan Gym', initials: 'TG' },
  { name: 'Phoenix Strength', initials: 'PS' },
];

export function TrustLogosSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-black border-t border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-white/40 text-sm font-medium uppercase tracking-wider">
            Available at 50+ gyms near you
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {gymLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:border-brand-500/30 group-hover:from-brand-500/10 group-hover:to-brand-500/5 transition-all">
                <span className="text-lg font-black text-white/40 group-hover:text-brand-400 transition-colors">
                  {logo.initials}
                </span>
              </div>
              <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors text-center">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-white/30 text-sm">
            And 40+ more gyms — with new ones joining every week
          </p>
        </motion.div>
      </div>
    </section>
  );
}
