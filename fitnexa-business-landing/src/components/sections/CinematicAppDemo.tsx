'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Bell, Lock, QrCode, Dumbbell, User } from 'lucide-react';

export function CinematicAppDemo(): React.JSX.Element {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { time: 0, step: 0 },
      { time: 3000, step: 1 },
      { time: 5000, step: 2 },
      { time: 6500, step: 3 },
      { time: 10000, step: 0 }
    ];

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      sequence.forEach(({ time, step }) => {
        const timeout = setTimeout(() => setStep(step), time);
        timeouts.push(timeout);
      });
    };

    runSequence();
    const loop = setInterval(() => {
      runSequence();
    }, 12000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-slate-900 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl group">
      {/* Background Parallax Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        animate={{
          scale: [1, 1.1, 1.15, 1],
          filter: ["brightness(0.4) blur(4px)", "brightness(0.3) blur(6px)", "brightness(0.2) blur(8px)", "brightness(0.4) blur(4px)"]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/40" />
      </motion.div>

      {/* Phone Container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="relative w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/20"
          initial={{ y: 50, rotateX: 10 }}
          animate={{
            y: [50, 0, 0, 50],
            rotateX: [10, 0, 0, 10],
            scale: [0.9, 1, 1, 0.9]
          }}
          transition={{ duration: 12, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
        >
          {/* Status Bar */}
          <div className="h-8 w-full bg-black/50 backdrop-blur-md absolute top-0 z-50 flex items-center justify-between px-6 text-white text-[10px] font-bold">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3 h-3" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="lockscreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-slate-900/40 backdrop-blur-sm flex flex-col items-center pt-20 text-white"
              >
                <div className="text-6xl font-thin tracking-tighter mb-2">09:41</div>
                <div className="text-sm font-medium opacity-80">Wednesday, October 24</div>

                <div className="mt-8 flex flex-col items-center gap-4 w-full px-4">
                  <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/10">
                    <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Gymia Gym</div>
                      <div className="text-[10px] opacity-80">Welcome back, Champion.</div>
                    </div>
                    <div className="ml-auto text-[10px] opacity-50">Now</div>
                  </div>
                </div>

                <motion.div
                  className="mt-auto mb-8 flex flex-col items-center gap-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Lock className="w-4 h-4" />
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Swipe to Open</div>
                </motion.div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="notification"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full h-full bg-slate-900/40 backdrop-blur-sm flex flex-col items-center pt-20 text-white"
              >
                <div className="text-6xl font-thin tracking-tighter mb-2">09:41</div>
                <div className="text-sm font-medium opacity-80">Wednesday, October 24</div>

                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-8 w-full px-4"
                >
                  <div className="w-full bg-white/20 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 border border-brand-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                      <QrCode className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Nearby: Iron Temple</div>
                      <div className="text-[10px] opacity-80">Tap to check in instantly.</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="splash"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full bg-brand-500 flex flex-col items-center justify-center text-white"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Dumbbell className="w-16 h-16" />
                </motion.div>
                <div className="mt-4 font-black text-2xl tracking-tighter">IRON TEMPLE</div>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full h-full bg-slate-50 text-slate-900 flex flex-col"
              >
                <div className="pt-12 pb-4 px-6 flex justify-between items-center bg-white border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold">Hi, Alex</div>
                  </div>
                  <Bell className="w-5 h-5 text-slate-400" />
                </div>

                <div className="p-6 flex-1 flex flex-col gap-6">
                  <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-900 opacity-20" />

                    <div className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-4">Member Access</div>

                    <div className="bg-white p-3 rounded-2xl mb-4 shadow-lg">
                      <QrCode className="w-24 h-24 text-slate-900" />
                    </div>

                    <div className="text-[10px] opacity-60">Scan at the turnstile</div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"
                      animate={{ scaleX: [0, 1] }}
                      transition={{ duration: 2 }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="text-2xl font-black mb-1">12</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Workouts</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="text-2xl font-black mb-1">Elite</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Status</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-[60]" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center z-20">
        <p className="text-xs font-black uppercase tracking-widest text-white/50">Simulated App Experience</p>
      </div>
    </div>
  );
}
