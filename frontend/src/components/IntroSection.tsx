'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="about" className="w-full bg-white py-24 px-6 sm:px-10 border-t border-[#085884]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6"
        >
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#17252A] leading-tight">
            Company Overview
          </h2>
        </motion.div>

        {/* Right Column Body Text & CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-6 flex flex-col gap-8 text-[#475569] text-lg sm:text-xl font-light leading-relaxed"
        >
          <p>
            Synergia Sciences is an Indian manufacturer of active ingredients for household insecticides and animal health for global markets. Started by a management team possessing extensive product development, manufacturing and quality assurance experience in highly regulated pharmaceutical industry.
          </p>
          <p className="text-base text-[#788090]">
            We combine world-class manufacturing capabilities with deep scientific expertise to deliver innovative, high-quality active ingredients to our partners worldwide.
          </p>

          <div>
            <a
              href="#work"
              data-cursor="Products"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#085884] px-6 py-3 rounded-full border border-[#085884]/30 hover:bg-[#085884] hover:text-white hover:border-[#085884] transition-all duration-300 group"
            >
              <span>Explore our products</span>
              <ArrowDownRight className="w-4 h-4 text-[#085884]/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
