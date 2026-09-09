'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-r from-[#04283D] via-[#085884] via-60% to-[#C2EBFD] px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
      {/* ─── Ambient Animated Liquid Gradient Orbs ─── */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 180, 360],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-12 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#03A9F4]/40 via-[#DCF3FF]/50 to-white/40 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-16 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#085884]/40 via-[#03A9F4]/30 to-[#DCF3FF]/40 blur-3xl pointer-events-none"
      />

      {/* ─── 3D Floating Sphere Simulation (Center-Right Shifting to White) ─── */}
      <div className="absolute right-0 sm:right-6 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 sm:opacity-95 lg:opacity-100 z-0">
        <motion.div
          animate={{
            y: [-16, 16, -16],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tr from-[#085884]/50 via-[#03A9F4]/40 to-white shadow-[0_30px_90px_rgba(8,88,132,0.25)] backdrop-blur-md border border-white/80 relative flex items-center justify-center"
        >
          {/* Inner Light Glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white/40 via-transparent to-transparent blur-xs pointer-events-none" />

          {/* Satellite Sphere 1 */}
          <motion.div
            animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 left-16 sm:left-24 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#03A9F4] to-white shadow-xl border border-white/90"
          />

          {/* Satellite Sphere 2 */}
          <motion.div
            animate={{ y: [-8, 8, -8], x: [4, -4, 4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 left-24 sm:left-36 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#085884]/40 to-white shadow-lg border border-white/90"
          />
        </motion.div>
      </div>

      {/* ─── Hero Content Overlay (Bold White Typography) ─── */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-6 shadow-xs w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#03A9F4]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white uppercase">
              Global Active Ingredients Manufacturer
            </span>
          </motion.div>

          {/* Headline in Crisp Bold White */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_20px_rgba(4,40,61,0.35)]"
          >
            Building Sustainable<br />
            Partnerships<span className="text-[#03A9F4]"> .</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/95 max-w-xl font-normal leading-relaxed drop-shadow-xs"
          >
            Indian manufacturer of active ingredients for household insecticides and animal health for global markets. Delivering precision chemical synthesis, scale, and sustainable excellence.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#085884] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#DCF3FF] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-[#085884] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#clients"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/35 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/25 transition-all duration-300 cursor-pointer shadow-xs"
            >
              Global Reach
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
