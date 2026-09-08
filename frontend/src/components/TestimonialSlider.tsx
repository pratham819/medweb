'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Synergia Sciences has consistently delivered high-purity active ingredients that meet our stringent quality standards. Their manufacturing excellence and reliability make them an invaluable supply chain partner.",
    name: 'Dr. Rajesh Kumar',
    role: 'Head of Procurement, Global Agrochemicals Corp.',
    initials: 'RK',
  },
  {
    id: 2,
    quote:
      'Working with Synergia Sciences transformed our product development timeline. Their deep understanding of regulatory requirements and commitment to GMP compliance gave us complete confidence in their deliverables.',
    name: 'Sarah Mitchell',
    role: 'VP Operations, European Animal Health Ltd.',
    initials: 'SM',
  },
  {
    id: 3,
    quote:
      'The team at Synergia Sciences brings pharmaceutical-grade precision to the household insecticide space. Their technical expertise and responsive service set them apart in the industry.',
    name: 'Hiroshi Tanaka',
    role: 'Director of R&D, Asia Pacific Chemicals',
    initials: 'HT',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10 border-t border-[#085884]/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCF3FF] border border-[#085884]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#085884]">
                CLIENT ENDORSEMENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252A]">
              Trusted by Global Chemical &amp; Pharma Leaders
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              data-cursor="Prev"
              className="w-11 h-11 rounded-full border border-[#085884]/20 flex items-center justify-center text-[#17252A] hover:bg-[#085884] hover:text-white hover:border-[#085884] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              data-cursor="Next"
              className="w-11 h-11 rounded-full border border-[#085884]/20 flex items-center justify-center text-[#17252A] hover:bg-[#085884] hover:text-white hover:border-[#085884] transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Quote Card */}
        <div className="min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col gap-8"
            >
              <p className="text-2xl sm:text-4xl font-light text-[#17252A] leading-snug tracking-tight max-w-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#085884]/10 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#085884] text-white font-medium flex items-center justify-center text-sm">
                  {current.initials}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#17252A]">
                    {current.name}
                  </h4>
                  <p className="text-xs text-[#788090] font-light">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
