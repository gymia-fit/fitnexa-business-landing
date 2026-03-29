'use client';

import { motion } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';

/* ─── Mock phone frame ──────────────────────────────────────────────────── */

function PhoneFrame({
  children,
  label,
  sublabel,
  variant,
}: {
  children: React.ReactNode;
  label: string;
  sublabel: string;
  variant: 'bad' | 'good';
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Phone */}
      <div
        className={`relative w-[260px] h-[530px] rounded-[40px] overflow-hidden shadow-2xl ${
          variant === 'bad'
            ? 'border-2 border-white/10 bg-zinc-900'
            : 'border-2 border-brand-500/40 bg-zinc-950 ring-4 ring-brand-500/10'
        }`}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-10 flex items-end justify-between px-5 pb-1 z-10">
          <span
            className={`text-[10px] font-semibold ${variant === 'bad' ? 'text-white/30' : 'text-white/60'}`}
          >
            9:41
          </span>
          <div className="flex items-center gap-1">
            <div
              className={`w-3 h-2 rounded-[1px] ${variant === 'bad' ? 'bg-white/20' : 'bg-white/50'}`}
            />
            <div
              className={`w-0.5 h-2 rounded-[1px] ${variant === 'bad' ? 'bg-white/10' : 'bg-white/30'}`}
            />
          </div>
        </div>
        {/* Screen content */}
        <div className="absolute inset-0 pt-10">{children}</div>
      </div>

      {/* Label */}
      <div className="text-center">
        <p className={`text-base font-bold ${variant === 'bad' ? 'text-white/40' : 'text-white'}`}>
          {label}
        </p>
        <p className={`text-sm mt-1 ${variant === 'bad' ? 'text-white/25' : 'text-brand-400'}`}>
          {sublabel}
        </p>
      </div>
    </div>
  );
}

/* ─── Bad app screen content ────────────────────────────────────────────── */

function BadAppScreen() {
  return (
    <div className="h-full bg-[#1a1a2e] flex flex-col overflow-hidden">
      {/* Clashing header */}
      <div className="bg-[#e94560] px-4 py-3 flex items-center justify-between">
        <span className="text-[11px] font-bold text-white uppercase tracking-widest">
          GYM FITNESS APP
        </span>
        <div className="w-6 h-6 bg-[#0f3460] rounded" />
      </div>

      {/* Cluttered body */}
      <div className="flex-1 px-3 py-2 space-y-2 overflow-hidden">
        {/* Welcome banner */}
        <div className="bg-[#16213e] border-2 border-[#e94560] rounded p-2">
          <p className="text-[9px] text-[#e94560] font-bold uppercase">WELCOME USER_123!</p>
          <p className="text-[8px] text-gray-400 mt-0.5">Last login: 3 days ago</p>
        </div>

        {/* Mismatched stats row */}
        <div className="grid grid-cols-3 gap-1">
          {['STEPS', 'CAL', 'KG'].map((label, i) => (
            <div
              key={label}
              className={`rounded p-1.5 text-center ${
                i === 0
                  ? 'bg-[#e94560]/20'
                  : i === 1
                    ? 'bg-green-900/40'
                    : 'bg-purple-900/40'
              }`}
            >
              <p className="text-[14px] font-black text-white">{['4.2k', '320', '82'][i]}</p>
              <p className="text-[7px] text-gray-500 uppercase">{label}</p>
            </div>
          ))}
        </div>

        {/* Random buttons */}
        <div className="space-y-1">
          {['📋 MY WORKOUTS', '🏋️ GYM CLASSES', '💳 MEMBERSHIP', '📞 CONTACT US'].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between bg-[#0d0d0d] border border-gray-700 rounded px-2 py-1.5"
            >
              <span className="text-[9px] text-gray-400">{item}</span>
              <span className="text-[8px] text-gray-600">&gt;</span>
            </div>
          ))}
        </div>

        {/* Ugly promo banner */}
        <div className="bg-yellow-500 rounded p-2 text-center">
          <p className="text-[9px] font-black text-black uppercase">🔥 SUMMER SALE 50% OFF 🔥</p>
          <p className="text-[7px] text-black/70">Click here! Limited time!!!</p>
        </div>

        {/* Stock photo placeholder */}
        <div className="bg-gray-800 rounded h-14 flex items-center justify-center border border-dashed border-gray-600">
          <p className="text-[8px] text-gray-600 text-center">[ generic stock photo ]</p>
        </div>
      </div>

      {/* Bottom nav — mismatched colors */}
      <div className="bg-[#0f3460] border-t-2 border-[#e94560] px-2 py-2 flex justify-around">
        {['🏠', '📊', '🏋️', '👤'].map((icon, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-sm">{icon}</span>
            <span className="text-[6px] text-gray-500 uppercase mt-0.5">
              {['Home', 'Stats', 'Train', 'Me'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Good app screen content ───────────────────────────────────────────── */

function GoodAppScreen() {
  return (
    <div className="h-full bg-zinc-950 flex flex-col overflow-hidden">
      {/* Clean header */}
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-brand-400 font-semibold tracking-widest uppercase">
            Good Morning
          </p>
          <p className="text-[14px] font-black text-white leading-tight">Alex Rivera</p>
        </div>
        {/* Gym logo mark */}
        <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
          <span className="text-white font-black text-[11px]">PE</span>
        </div>
      </div>

      {/* Hero card */}
      <div className="mx-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 p-4 mb-3 shadow-lg shadow-brand-500/20">
        <p className="text-[9px] text-white/70 uppercase tracking-widest font-semibold mb-1">
          Today's Streak
        </p>
        <p className="text-3xl font-black text-white leading-none">14 days</p>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${i < 5 ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-4 mb-3">
        <p className="text-[9px] text-white/40 uppercase tracking-widest font-semibold mb-2">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Book Class', color: 'bg-white/5 border-white/10' },
            { label: 'Check In', color: 'bg-brand-500/10 border-brand-500/20' },
          ].map(({ label, color }) => (
            <div key={label} className={`rounded-xl border ${color} p-3 text-center`}>
              <p className="text-[10px] font-semibold text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming class */}
      <div className="mx-4 rounded-xl bg-white/5 border border-white/10 p-3 mb-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-white">HIIT Circuit</p>
            <p className="text-[8px] text-white/40 mt-0.5">Today · 6:30 PM · Coach Maria</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
            <Check className="w-3 h-3 text-brand-400" />
          </div>
        </div>
      </div>

      {/* Bottom nav — clean */}
      <div className="px-4 py-3 flex justify-around border-t border-white/5 mt-3">
        {['Home', 'Classes', 'Progress', 'Profile'].map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-0.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-400' : 'bg-transparent'}`}
            />
            <span
              className={`text-[8px] font-semibold ${i === 0 ? 'text-brand-400' : 'text-white/30'}`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Comparison list items ──────────────────────────────────────────────── */

const comparisons = [
  { label: 'Setup time', bad: '6–12 months', good: 'Days, not months' },
  { label: 'Cost to launch', bad: '$30K–$80K+', good: '$0 to start' },
  { label: 'Branding', bad: 'Generic template', good: 'Your logo, your colors' },
  { label: 'Maintenance', bad: '$1K–$3K/month', good: 'Included — we handle it' },
  { label: 'App Store', bad: 'You manage everything', good: 'We manage it for you' },
];

/* ─── Main section ───────────────────────────────────────────────────────── */

export function AppComparisonSection(): React.JSX.Element {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-500/8 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            See the Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Generic App vs.{' '}
            <span className="text-brand-400">Your Gymia App</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Most gym apps look like they were built in 2015. Yours doesn't have to.
          </motion.p>
        </div>

        {/* Phone comparison */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mb-20">
          {/* Bad phone */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PhoneFrame
              label="What most gyms end up with"
              sublabel="The $50K app that looks like everyone else's"
              variant="bad"
            >
              <BadAppScreen />
            </PhoneFrame>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/10 border border-brand-500/20">
              <Sparkles className="w-5 h-5 text-brand-400" />
            </div>
            <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
          </motion.div>

          {/* Good phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <PhoneFrame
              label="Your brand. Your app."
              sublabel="Built in days, not months."
              variant="good"
            >
              <GoodAppScreen />
            </PhoneFrame>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="py-4 px-5 text-xs font-semibold text-white/40 uppercase tracking-widest" />
            <div className="py-4 px-5 text-center border-l border-white/10">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                Custom / Generic App
              </span>
            </div>
            <div className="py-4 px-5 text-center border-l border-brand-500/30 bg-brand-500/5">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                Gymia
              </span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? 'bg-white/2' : ''
              }`}
            >
              <div className="py-4 px-5 text-sm font-semibold text-white/60">{row.label}</div>
              <div className="py-4 px-5 text-center border-l border-white/10 flex items-center justify-center gap-1.5">
                <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="text-xs text-white/40">{row.bad}</span>
              </div>
              <div className="py-4 px-5 text-center border-l border-brand-500/20 bg-brand-500/3 flex items-center justify-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span className="text-xs text-white/70 font-medium">{row.good}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Zero development required. Zero App Store headaches. Just your gym, branded beautifully.
        </motion.p>
      </div>
    </section>
  );
}
