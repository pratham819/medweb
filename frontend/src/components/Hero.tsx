'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#063B59] via-[#085884] to-[#032B42] px-6 sm:px-12 py-20 sm:py-28">
      {/* ─── Animated Fluid Liquid Gradient Orbs (Background) ─── */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#03A9F4]/40 via-[#00A896]/30 to-[#DCF3FF]/20 blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-r from-[#085884]/60 via-[#03A9F4]/35 to-[#00A896]/30 blur-[110px] pointer-events-none"
      />

      {/* Subtle Ambient Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* ─── 3D Floating Sphere Simulation (Right Floating Visual) ─── */}
      <div className="absolute right-4 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 sm:opacity-75 lg:opacity-90 z-0">
        <motion.div
          animate={{
            y: [-16, 16, -16],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-[#085884] via-[#03A9F4] to-[#DCF3FF] shadow-[0_30px_90px_rgba(3,169,244,0.35)] backdrop-blur-md border border-white/40 relative flex items-center justify-center"
        >
          {/* Inner sphere highlight glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-white/35 to-transparent blur-xs pointer-events-none" />

          {/* Satellite Sphere 1 */}
          <motion.div
            animate={{ y: [10, -10, 10], x: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 left-8 sm:left-14 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#03A9F4] to-white shadow-xl border border-white/60"
          />

          {/* Satellite Sphere 2 */}
          <motion.div
            animate={{ y: [-8, 8, -8], x: [4, -4, 4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 left-16 sm:left-24 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#085884]/60 to-white shadow-lg border border-white/70"
          />
        </motion.div>
      </div>

      {/* ─── Main Content Container (Placed Over Animation) ─── */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Brand Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#03A9F4]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white uppercase">
              Global Active Ingredients Manufacturer
            </span>
          </motion.div>

          {/* Headline Text in Bold Crisp White */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          >
            Building Sustainable<br />
            Partnerships<span className="text-[#03A9F4]"> .</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-normal leading-relaxed drop-shadow-xs"
          >
            Indian manufacturer of active ingredients for household insecticides and animal health for global markets. Delivering precision chemical synthesis, scale, and sustainable excellence.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#085884] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#DCF3FF] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Molecules</span>
              <ArrowRight className="w-4 h-4 text-[#085884] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#clients"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              Global Reach
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
