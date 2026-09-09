'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    title: 'Advancing Quality Standards in Active Ingredient Manufacturing for Global Markets',
    category: 'Industry Insights',
    date: 'Aug 2024',
    readTime: '6 min read',
    image: '/blog/quality-standards.jpg',
  },
  {
    title: 'Sustainable Practices in Household Insecticide Production: Our Commitment to Safety',
    category: 'Sustainability',
    date: 'May 2024',
    readTime: '8 min read',
    image: '/blog/sustainability.jpg',
  },
  {
    title: 'Navigating Regulatory Compliance in Animal Health API Manufacturing',
    category: 'Regulatory',
    date: 'Jan 2024',
    readTime: '5 min read',
    image: '/blog/regulatory-pharma.jpg',
  },
];

export default function BlogSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="blog" className="w-full bg-white py-24 px-6 sm:px-10 border-t border-[#085884]/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCF3FF] border border-[#085884]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#085884]">
                KNOWLEDGE &amp; INNOVATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252A]">
              Industry Insights &amp; Scientific Publications
            </h2>
          </div>
          <a
            href="#contact"
            data-cursor="Blog"
            className="text-sm font-semibold text-[#085884] hover:text-[#03A9F4] flex items-center gap-1 transition-colors group"
          >
            <span>View all publications</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Articles List */}
        <div className="flex flex-col border-t border-[#085884]/10">
          {articles.map((article, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.a
                key={article.title}
                href="#contact"
                data-cursor="Read"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-7 sm:py-8 border-b border-[#085884]/10 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-4 transition-all duration-300 rounded-2xl hover:bg-[#DCF3FF]/35"
              >
                {/* Left Area: Slide-In Thumbnail Preview + Article Header */}
                <div className="flex items-center">
                  {/* Smooth Slide-In Image from Left on Hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      width: isHovered ? 136 : 0,
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -28,
                      marginRight: isHovered ? 20 : 0,
                      scale: isHovered ? 1 : 0.9,
                    }}
                    transition={{
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative shrink-0 h-20 sm:h-22 rounded-xl overflow-hidden shadow-md border border-[#085884]/20 hidden sm:block pointer-events-none"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#085884]/25 via-transparent to-transparent" />
                  </motion.div>

                  <div className="flex flex-col gap-1 max-w-2xl">
                    <span className="text-xs font-mono text-[#03A9F4] font-semibold tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#17252A] group-hover:text-[#085884] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Right Area: Metadata and Arrow Icon */}
                <div className="flex items-center gap-6 text-sm text-[#788090] shrink-0">
                  <span className="font-mono text-xs">{article.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-xs">{article.readTime}</span>
                  <div className="w-9 h-9 rounded-full border border-[#085884]/20 flex items-center justify-center text-[#085884] group-hover:bg-[#085884] group-hover:text-white transition-all shadow-2xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
