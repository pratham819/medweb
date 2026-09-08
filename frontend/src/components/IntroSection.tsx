'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Building2, FlaskConical, Award, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    id: '01',
    value: '40+',
    label: 'Global Export Markets',
    desc: 'Across 5 continents worldwide',
    icon: Globe,
  },
  {
    id: '02',
    value: '100+',
    label: 'Enterprise Clients & MNCs',
    desc: 'Trusted international partnerships',
    icon: Building2,
  },
  {
    id: '03',
    value: '50,000+ MT',
    label: 'Annual Synthesis Output',
    desc: 'High-scale industrial capacity',
    icon: FlaskConical,
  },
  {
    id: '04',
    value: '25+ Years',
    label: 'Pharma Heritage',
    desc: 'Management expertise in APIs',
    icon: Award,
  },
];

const capabilities = [
  'GMP & Regulatory Compliant Manufacturing',
  'Advanced Pyrethroid Chemical Synthesis',
  'Custom Synthesis & Contract Development',
  'Global Supply Chain & Logistics Agility',
];

export default function IntroSection() {
  return (
    <section id="about" className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10 border-t border-[#085884]/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(3, 169, 244, 0.25), rgba(8, 88, 132, 0.15), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* ─── 1. Global Enterprise Impact Metrics Bar ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="relative rounded-2xl bg-gradient-to-br from-white via-[#F6FBFE] to-[#EBF6FC] border border-[#085884]/15 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#085884]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DCF3FF] border border-[#085884]/20 flex items-center justify-center text-[#085884] group-hover:bg-[#085884] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#085884]/50">
                    #{stat.id}
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#085884] font-mono block tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="text-sm font-bold text-[#17252A] mt-1 tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-[#788090] mt-0.5 font-medium">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── 2. Unified Executive Section Header & Narrative ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-6 border-t border-[#085884]/10">
          {/* Left Column: Heading & Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Tracker Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCF3FF] border border-[#085884]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#085884]">
                ABOUT SYNERGIA SCIENCES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252A] leading-[1.15]">
              Pioneering Chemical Synthesis &amp; Global Active Ingredients
            </h2>
          </motion.div>

          {/* Right Column: Company Narrative & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-8 text-[#475569] text-base sm:text-lg leading-relaxed"
          >
            <p className="font-medium text-[#17252A]">
              Synergia Sciences is a premier Indian manufacturer of active ingredients for household insecticides and animal health for global markets. Founded by a leadership team possessing decades of product development, manufacturing, and quality assurance experience in the highly regulated pharmaceutical industry.
            </p>

            <p className="text-sm sm:text-base text-[#475569]">
              We integrate high-precision molecular synthesis with large-scale manufacturing infrastructure to deliver high-efficacy active ingredients to leading multinational partners across 40+ countries.
            </p>

            {/* Quality Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F6FBFE] border border-[#085884]/12 text-xs sm:text-sm font-semibold text-[#085884]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white px-7 py-3.5 rounded-full bg-[#085884] hover:bg-[#064263] shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Active Molecules</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
