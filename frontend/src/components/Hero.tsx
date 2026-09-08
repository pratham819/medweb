'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scale expands from 0.85 to 1.1 as we scroll down
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white pt-12 pb-20 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Title Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#17252A] leading-[1.1]">
            Building Sustainable Partnerships<span className="text-[#03A9F4]"> .</span>
          </h1>
        </motion.div>

        {/* Ambient Fluid Animated Graphic Container */}
        <motion.div
          style={{ scale, opacity }}
          data-cursor="Explore"
          className="relative w-full h-[400px] sm:h-[520px] rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#DCF3FF] via-[#E0F2FE] to-white flex items-center justify-center origin-center"
        >
          {/* Animated Liquid Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              rotate: [0, 180, 360],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#085884]/40 via-[#03A9F4]/30 to-[#00A896]/40 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#03A9F4]/30 via-[#DCF3FF]/40 to-[#085884]/30 blur-3xl"
          />

          {/* 3D Molecular Sphere graphic simulation */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#085884]/60 via-[#03A9F4]/40 to-white shadow-[0_20px_50px_rgba(8,88,132,0.25)] backdrop-blur-sm border border-white/60 relative flex items-center justify-center"
            >
              {/* Satellite Spheres */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-12 left-10 w-12 h-12 rounded-full bg-gradient-to-tr from-[#03A9F4] to-white shadow-lg border border-white/70"
              />
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-20 left-14 w-6 h-6 rounded-full bg-gradient-to-tr from-[#085884]/40 to-white shadow-md border border-white/80"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
