'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Check, ArrowRight, Smartphone, Monitor, Palette } from 'lucide-react';

const demoSteps = [
  { title: 'Upload Logo', description: 'Drop your gym logo' },
  { title: 'Pick Colors', description: 'Choose your brand colors' },
  { title: 'AI Generates', description: 'Theme auto-created' },
  { title: 'Go Live', description: 'Your app is ready' },
];

const colorPresets = ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#ec4899', '#f97316'];

export function AIDemoSection(): React.JSX.Element {
  const [step, setStep] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#3b82f6');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(3);
    }, 2000);
  };

  return (
    <section id="demo" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6"
          >
            See It In Action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Your Brand. <span className="text-brand-400">Instantly.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Watch how our AI transforms your logo and colors into a fully customized mobile app and admin panel.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4 justify-center lg:justify-start">
              {demoSteps.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      step >= i
                        ? 'bg-brand-500 text-white'
                        : 'bg-white/10 text-white/40'
                    }`}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className="text-xs text-white/60 mt-2 hidden sm:block">{s.title}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {step === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Upload Your Logo</h3>
                  <p className="text-white/50 mb-6">Drop your gym logo here</p>
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-white text-black font-bold rounded-full"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-white">Pick Your Brand Color</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {colorPresets.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-2xl transition-all ${
                          selectedColor === color
                            ? 'ring-4 ring-white ring-offset-2 ring-offset-black'
                            : 'hover:scale-110'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setStep(0)}
                      className="px-6 py-3 bg-white/10 text-white font-bold rounded-full"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-white text-black font-bold rounded-full"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: selectedColor }}
                    >
                      <Sparkles className="w-10 h-10 text-white animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI is Generating...</h3>
                  <p className="text-white/50 mb-6">Creating your custom theme</p>
                  <button
                    onClick={handleGenerate}
                    className="px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-400 text-white font-bold rounded-full"
                  >
                    {isGenerating ? 'Generating...' : 'Generate Now'}
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Done!</h3>
                  <p className="text-white/50 mb-6">Your app is ready</p>
                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full">
                      <Smartphone className="w-4 h-4" /> Mobile App
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full">
                      <Monitor className="w-4 h-4" /> Admin Panel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-brand-400/20 blur-3xl rounded-full" />
            <div className="relative bg-black rounded-3xl border border-white/10 p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-white">Your Brand</span>
                </div>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedColor }}
                />
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/60 text-sm">Mobile App</span>
                    <Smartphone className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="aspect-[9/16] rounded-xl overflow-hidden relative">
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-2 w-20 bg-white/30 rounded-full mb-2" />
                      <div className="h-2 w-16 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/60 text-sm">Admin Panel</span>
                    <Monitor className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="absolute inset-0 p-4 space-y-2">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                        <div className="flex-1 h-8 rounded-lg bg-white/5" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="h-16 rounded-lg bg-white/5" />
                      </div>
                      <div
                        className="h-24 rounded-xl"
                        style={{ backgroundColor: `${selectedColor}20` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
