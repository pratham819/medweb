'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-6 pb-16 px-4 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Scaled-up Ambient Fluid Animated Graphic Container */}
        <div className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-lg border border-[#085884]/15 bg-gradient-to-br from-[#DCF3FF] via-[#E2F4FE] to-[#F8FCFF] flex items-center p-6 sm:p-12 lg:p-16">
          
          {/* ─── Animated Liquid Gradient Orbs (Background) ─── */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              rotate: [0, 180, 360],
              x: [0, 45, 0],
              y: [0, -35, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#085884]/25 via-[#03A9F4]/25 to-[#00A896]/20 blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-10 -left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-[#03A9F4]/20 via-[#DCF3FF]/40 to-[#085884]/20 blur-3xl pointer-events-none"
          />

          {/* ─── 3D Floating Sphere Simulation (Right Floating Layer) ─── */}
          <div className="absolute right-4 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-60 sm:opacity-85 lg:opacity-100 z-0">
            <motion.div
              animate={{
                y: [-14, 14, -14],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-[#085884]/50 via-[#03A9F4]/35 to-white shadow-[0_25px_60px_rgba(8,88,132,0.20)] backdrop-blur-md border border-white/70 relative flex items-center justify-center"
            >
              {/* Satellite Sphere 1 */}
              <motion.div
                animate={{ y: [8, -8, 8], x: [-4, 4, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 left-10 sm:left-16 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#03A9F4] to-white shadow-lg border border-white/80"
              />

              {/* Satellite Sphere 2 */}
              <motion.div
                animate={{ y: [-6, 6, -6], x: [3, -3, 3] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-18 left-16 sm:left-24 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#085884]/40 to-white shadow-md border border-white/90"
              />
            </motion.div>
          </div>

          {/* ─── Content Layer (Placed Directly on the Fluid Animation) ─── */}
          <div className="relative z-10 max-w-2xl lg:max-w-3xl flex flex-col justify-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#085884]/15 mb-6 shadow-xs w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#085884]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#085884] uppercase">
                Active Ingredients Manufacturer
              </span>
            </motion.div>

            {/* Headline Text */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#17252A] leading-[1.08]"
            >
              Building Sustainable<br />
              Partnerships<span className="text-[#03A9F4]"> .</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#475569] max-w-xl font-normal leading-relaxed"
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#085884] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-[#064263] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Molecules</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#clients"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/90 backdrop-blur-md border border-[#085884]/25 text-[#085884] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:border-[#085884]/40 shadow-xs transition-all duration-300 cursor-pointer"
              >
                Global Reach
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
