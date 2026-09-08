'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

/* ─── Synergia Sciences Brand Theme ─── */
const THEME = {
  primary: '#085884',     // Synergia Deep Blue
  secondary: '#03A9F4',   // Sky Blue accent
  accent: '#00A896',      // Teal
  bg: '#FFFFFF',
  bgSubtle: '#DCF3FF',    // Ice Blue
  textPrimary: '#17252A',
  textSecondary: '#475569',
  cardBg: 'rgba(255, 255, 255, 0.90)',
  cardBorder: 'rgba(8, 88, 132, 0.22)',
};

/* ─── Active Molecules Data (Synergia Sciences) ─── */
const molecules = [
  {
    id: '01',
    title: 'Meperfluthrin',
    casNumber: 'CAS No. 915288 – 13 – 0',
    category: 'High-Efficacy Active',
    image: '/molecules/meperfluthrin_clean.png',
    gradient:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.94), rgba(220, 243, 255, 0.85))',
    accent: '#085884',
  },
  {
    id: '02',
    title: 'Profluthrin',
    casNumber: 'CAS No. 223419 – 20 – 3',
    category: 'Volatile Pyrethroid',
    image: '/molecules/profluthrin_clean.png',
    gradient:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(238, 247, 255, 0.94), rgba(224, 242, 254, 0.85))',
    accent: '#03A9F4',
  },
  {
    id: '03',
    title: 'Imiprothrin',
    casNumber: 'CAS No. 72963 – 72 – 5',
    category: 'Knockdown Pyrethroid',
    image: '/molecules/imiprothrin_clean.png',
    gradient:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.94), rgba(220, 243, 255, 0.85))',
    accent: '#00A896',
  },
  {
    id: '04',
    title: 'Icaridin',
    casNumber: 'CAS No. 119515 – 38 – 7',
    category: 'Broad-Spectrum Repellent',
    image: '/molecules/icaridin_clean.png',
    gradient:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(240, 253, 250, 0.94), rgba(224, 242, 254, 0.85))',
    accent: '#085884',
  },
  {
    id: '05',
    title: 'Transfluthrin',
    casNumber: 'CAS No. 118712 – 89 – 3',
    category: 'Vaporizing Pyrethroid',
    image: '/molecules/transfluthrin_clean.png',
    gradient:
      'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(238, 247, 255, 0.94), rgba(224, 242, 254, 0.85))',
    accent: '#03A9F4',
  },
];

/* ─── Orbital Card ─── */
interface PoleCardProps {
  molecule: (typeof molecules)[number];
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
  radius: number;
  cardWidth: number;
  cardHeight: number;
}

function PoleCard({
  molecule,
  index,
  total,
  scrollProgress,
  radius,
  cardWidth,
  cardHeight,
}: PoleCardProps) {
  const STAGGER = 0.15;
  const CARD_DURATION = 0.42;
  const Y_TRAVEL = 360;

  const cardStart = index * STAGGER;
  const cardEnd = Math.min(cardStart + CARD_DURATION, 1);

  const progress = useTransform(scrollProgress, [cardStart, cardEnd], [0, 1], {
    clamp: true,
  });

  const getAngle = (p: number) => Math.PI + p * 2 * Math.PI;

  const x = useTransform(progress, (p: number) => {
    return Math.sin(getAngle(p)) * radius;
  });

  const y = useTransform(progress, (p: number) => {
    return Y_TRAVEL / 2 - p * Y_TRAVEL;
  });

  const scale = useTransform(progress, (p: number) => {
    const centerProximity = 1 - Math.abs(p - 0.5) * 2;
    return 0.35 + 0.65 * Math.pow(Math.max(0, centerProximity), 0.7);
  });

  const opacity = useTransform(progress, (p: number) => {
    if (p <= 0.001 || p >= 0.999) return 0;
    const centerProximity = 1 - Math.abs(p - 0.5) * 2;
    const base = 0.15 + 0.85 * Math.pow(Math.max(0, centerProximity), 0.6);
    const fadeIn = p < 0.06 ? p / 0.06 : 1;
    const fadeOut = p > 0.94 ? (1 - p) / 0.06 : 1;
    return Math.max(0, base * fadeIn * fadeOut);
  });

  const zIndex = useTransform(progress, (p: number) => {
    return Math.round(Math.cos(getAngle(p)) * 100) + 100;
  });

  const rotateY = useTransform(progress, (p: number) => {
    return Math.sin(getAngle(p)) * -18;
  });

  const boxShadow = useTransform(progress, (p: number) => {
    const df = (Math.cos(getAngle(p)) + 1) / 2;
    const centerProximity = 1 - Math.abs(p - 0.5) * 2;
    const intensity = Math.max(0, df * centerProximity);
    const blur = 16 + intensity * 38;
    const spread = intensity * 10;
    const yOff = 8 + intensity * 20;
    const alpha = 0.08 + intensity * 0.16;
    return `0 ${yOff}px ${blur}px ${spread}px rgba(8, 88, 132, ${alpha * 0.7}), 0 ${yOff / 2}px ${blur / 2}px rgba(15, 23, 42, ${alpha * 0.35})`;
  });

  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: -(cardWidth / 2),
        marginTop: -(cardHeight / 2),
        width: cardWidth,
        height: cardHeight,
        x,
        y,
        scale,
        opacity,
        zIndex,
        rotateY,
      }}
    >
      <motion.div
        className="w-full h-full rounded-2xl overflow-hidden border border-[#085884]/25 pointer-events-auto cursor-pointer group relative bg-white/95 backdrop-blur-xl transition-all duration-300 hover:border-[#085884]/60 hover:shadow-2xl"
        style={{
          background: molecule.gradient,
          boxShadow,
        }}
      >
        {/* Inner glass card */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-xl border border-[#085884]/15 bg-white/90 backdrop-blur-md flex flex-col p-2.5 sm:p-3.5 group-hover:border-[#085884]/35 transition-colors duration-300 shadow-sm">
          {/* Top header row */}
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#DCF3FF] border border-[#085884]/20"
              style={{ color: molecule.accent }}
            >
              #{molecule.id}
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold text-[#085884]/80 tracking-wide uppercase">
              {molecule.category}
            </span>
          </div>

          {/* Molecule Structure Display Box */}
          <div className="flex-1 w-full bg-gradient-to-b from-[#EDF8FD] via-[#F3FAFE] to-[#E5F4FC] rounded-lg border border-[#085884]/15 overflow-hidden flex items-center justify-center p-2 relative shadow-inner group-hover:from-[#E4F4FD] group-hover:to-[#D8EFFB] transition-colors duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={molecule.image}
              alt={molecule.title}
              className="w-full h-full object-contain max-h-[85px] sm:max-h-[105px] drop-shadow-[0_2px_8px_rgba(8,88,132,0.12)] transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Bottom details: Name + CAS */}
          <div className="mt-2 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm sm:text-base font-bold text-[#085884] tracking-tight leading-tight group-hover:text-[#03A9F4] transition-colors duration-200">
              {molecule.title}
            </h3>
            <div className="mt-1 px-3 py-0.5 rounded-full bg-[#DCF3FF] border border-[#085884]/20 shadow-xs">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#085884] tracking-wider">
                {molecule.casNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Hover subtle glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 24px rgba(8, 88, 132, 0.18), 0 0 45px rgba(3, 169, 244, 0.25)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

import NativeDnaCanvas from './NativeDnaCanvas';

/* ─── Main Section ─── */
export default function ProjectsGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [radius, setRadius] = useState(420);
  const [cardWidth, setCardWidth] = useState(330);
  const [cardHeight, setCardHeight] = useState(230);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(180);
        setCardWidth(230);
        setCardHeight(180);
      } else if (w < 768) {
        setRadius(260);
        setCardWidth(270);
        setCardHeight(200);
      } else if (w < 1024) {
        setRadius(340);
        setCardWidth(300);
        setCardHeight(215);
      } else {
        setRadius(420);
        setCardWidth(330);
        setCardHeight(235);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full"
      style={{
        height: '400vh',
        background: `radial-gradient(ellipse at 50% 50%, rgba(8, 88, 132, 0.06), rgba(220, 243, 255, 0.4), #FFFFFF 85%)`,
      }}
    >
      {/* Sticky viewport — pins the 3D scene to the screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* ── Section Header ── */}
        <div className="absolute top-6 sm:top-8 left-0 right-0 px-6 sm:px-10 z-[300]">
          <div
            className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between pb-4 gap-2"
            style={{ borderBottom: `1px solid rgba(8, 88, 132, 0.15)` }}
          >
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCF3FF] border border-[#085884]/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#085884]">
                  ACTIVE INGREDIENTS PORTFOLIO
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#17252A]">
                Key Molecular Chemistry (05 Active Molecules)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#085884]/80 font-semibold shrink-0">
              Orbital Molecular View
            </span>
          </div>
        </div>

        {/* ── 3D Scene ── */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle light ambient radial glow behind DNA */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[75%] rounded-full blur-[90px] opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, rgba(8, 88, 132, 0.20), rgba(3, 169, 244, 0.12), transparent 70%)`,
            }}
          />

          {/* ── Native 3D Double Helix Model Centerpiece ── */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[2%] bottom-[4%] z-[50] flex items-center justify-center pointer-events-none"
            style={{
              width: 'clamp(280px, 36vw, 540px)',
              height: 'clamp(440px, 75vh, 800px)',
            }}
          >
            <NativeDnaCanvas scrollProgress={scrollYProgress} />
          </div>

          {/* Ground soft shadow ellipse */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[8%] w-[220px] sm:w-[320px] h-[18px] sm:h-[24px] rounded-[50%] blur-xl pointer-events-none"
            style={{ background: `rgba(8, 88, 132, 0.10)` }}
          />

          {/* Orbiting molecule cards */}
          {molecules.map((molecule, i) => (
            <PoleCard
              key={molecule.id}
              molecule={molecule}
              index={i}
              total={molecules.length}
              scrollProgress={scrollYProgress}
              radius={radius}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
            />
          ))}
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[300] pointer-events-none">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-semibold text-[#788090]"
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-[1.5px] h-4 sm:h-5 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${THEME.primary}, transparent)` }}
          />
        </div>
      </div>
    </section>
  );
}
