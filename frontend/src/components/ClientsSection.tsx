'use client';

import { motion } from 'framer-motion';
import GlobalGlobeCanvas from './GlobalGlobeCanvas';

const reachPartners = [
  {
    id: '01',
    title: 'Top 3 global',
    subtitle: 'crop protection company',
  },
  {
    id: '02',
    title: 'Fortune 500',
    subtitle: 'chemical manufacturer',
  },
  {
    id: '03',
    title: 'Leading global',
    subtitle: 'agri-science company',
  },
  {
    id: '04',
    title: 'Major global',
    subtitle: 'consumer health brand',
  },
  {
    id: '05',
    title: 'Top 10 global',
    subtitle: 'household products company',
  },
  {
    id: '06',
    title: 'Leading multinational',
    subtitle: 'personal care manufacturer',
  },
  {
    id: '07',
    title: 'Top 5 global',
    subtitle: 'specialty chemicals group',
  },
  {
    id: '08',
    title: 'Global leader in',
    subtitle: 'animal health products',
  },
];

const globalStats = [
  { value: '40+', label: 'Export Markets', desc: 'Across 5 continents' },
  { value: '8+', label: 'MNC Categories', desc: 'Global leadership' },
  { value: '100%', label: 'Regulatory Compliance', desc: 'International GMP' },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="w-full bg-gradient-to-b from-white via-[#F6FBFE] to-white py-24 sm:py-32 px-6 sm:px-10 border-t border-[#085884]/10 relative overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse, rgba(8, 88, 132, 0.18), rgba(3, 169, 244, 0.12), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#085884]/15 gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCF3FF] border border-[#085884]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#085884]">
                GLOBAL MARKET PRESENCE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#17252A]">
              Worldwide Customer Footprint &amp; Export Reach
            </h2>
          </div>
          <span className="text-xs text-[#788090] font-mono font-medium shrink-0">
            Exporting across 40+ countries
          </span>
        </div>

        {/* ─── 3D Globe + Global Narrative Panoramic Split ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative & Metrics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#085884] mb-2 block">
                International Footprint
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17252A] tracking-tight leading-[1.12]">
                We serve top MNC&apos;s in global markets
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                Synergia Sciences manufactures and exports high-purity active ingredients and advanced formulated chemical intermediates to multinational corporations spanning North America, Europe, Latin America, Asia-Pacific, and the Middle East.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              {globalStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/90 border border-[#085884]/15 p-3.5 sm:p-4 text-center shadow-xs backdrop-blur-sm"
                >
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#085884] block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#17252A] block mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#788090] block mt-0.5">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Rotating Globe (7 cols) */}
          <div className="lg:col-span-7 h-[420px] sm:h-[520px] lg:h-[560px] w-full rounded-3xl bg-gradient-to-br from-white/95 via-[#F2FAFE]/90 to-[#E6F4FC]/80 border border-[#085884]/20 shadow-xl backdrop-blur-xl relative overflow-hidden flex items-center justify-center">
            {/* Ambient inner sphere glow */}
            <div
              className="absolute w-[360px] h-[360px] rounded-full blur-[80px] opacity-35 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(3, 169, 244, 0.35), rgba(8, 88, 132, 0.20), transparent 70%)',
              }}
            />

            {/* 3D WebGL Canvas */}
            <GlobalGlobeCanvas />
          </div>
        </div>

        {/* ─── 8 Partner Credential Cards Grid ─── */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#085884]">
              Client & Partner Categories
            </h4>
            <span className="text-[11px] font-mono text-[#788090]">
              8 Strategic Industry Segments
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {reachPartners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative rounded-2xl bg-white/90 backdrop-blur-md border border-[#085884]/15 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#085884]/45 hover:bg-white transition-all duration-300 group cursor-default min-h-[110px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#DCF3FF] text-[#085884] border border-[#085884]/15">
                    #{partner.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#085884]/20 group-hover:bg-[#03A9F4] transition-colors duration-300" />
                </div>

                <div>
                  <h5 className="text-base sm:text-lg font-bold text-[#17252A] group-hover:text-[#085884] transition-colors duration-200 tracking-tight leading-snug">
                    {partner.title}
                  </h5>
                  <p className="mt-1 text-xs text-[#475569] font-medium leading-relaxed">
                    {partner.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
