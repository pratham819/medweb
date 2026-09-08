'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: 'Advancing Quality Standards in Active Ingredient Manufacturing for Global Markets',
    category: 'Industry Insights',
    date: 'Aug 2024',
    readTime: '6 min read',
  },
  {
    title: 'Sustainable Practices in Household Insecticide Production: Our Commitment to Safety',
    category: 'Sustainability',
    date: 'May 2024',
    readTime: '8 min read',
  },
  {
    title: 'Navigating Regulatory Compliance in Animal Health API Manufacturing',
    category: 'Regulatory',
    date: 'Jan 2024',
    readTime: '5 min read',
  },
];

export default function BlogSection() {
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
          {articles.map((article, idx) => (
            <motion.a
              key={article.title}
              href="#contact"
              data-cursor="Read"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group py-8 border-b border-[#085884]/10 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:px-4 transition-all duration-300 rounded-xl hover:bg-[#DCF3FF]/30"
            >
              <div className="flex flex-col gap-1 max-w-2xl">
                <span className="text-xs font-mono text-[#03A9F4] font-semibold">
                  {article.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#17252A] group-hover:text-[#085884] transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 text-sm text-[#788090]">
                <span>{article.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{article.readTime}</span>
                <div className="w-8 h-8 rounded-full border border-[#085884]/15 flex items-center justify-center group-hover:bg-[#085884] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
