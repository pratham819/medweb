'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { name: 'Home', href: '#', number: '01' },
  { name: 'Who We Are', href: '#about', number: '02' },
  { name: 'Products', href: '#work', number: '03' },
  { name: 'Capabilities', href: '#services', number: '04' },
  { name: 'Responsibilities', href: '#blog', number: '05' },
  { name: 'Contact Us', href: '#contact', number: '06' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Twitter / X', href: 'https://twitter.com' },
];

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#17252A] text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <img
                src="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Symbol.png?fit=32%2C32&ssl=1"
                alt="Synergia Sciences"
                className="w-8 h-8"
              />
              <span className="text-xs uppercase tracking-widest text-[#03A9F4]/80 font-semibold">
                Synergia Sciences
              </span>
            </div>
            
            <button
              onClick={onClose}
              data-cursor="Close"
              className="group flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Main Navigation Content */}
          <div className="w-full max-w-7xl mx-auto my-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8 flex flex-col gap-4">
              {menuLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    data-cursor="Select"
                    className="group inline-flex items-baseline gap-6 text-4xl sm:text-6xl md:text-7xl font-light tracking-tight hover:text-[#03A9F4] transition-colors duration-300"
                  >
                    <span className="text-xs sm:text-sm font-mono text-white/30 group-hover:text-[#03A9F4] transition-colors">
                      ({link.number})
                    </span>
                    <span>{link.name}</span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right Side Details */}
            <div className="md:col-span-4 flex flex-col gap-8 text-sm text-white/50 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-3">
                  Get in touch
                </h4>
                <a
                  href="mailto:info@synergiasciences.com"
                  className="text-lg text-[#03A9F4] hover:underline transition-all"
                >
                  info@synergiasciences.com
                </a>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-3">
                  Connect
                </h4>
                <ul className="space-y-2">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-3">
                  Website
                </h4>
                <a
                  href="https://synergiasciences.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#03A9F4] transition-colors"
                >
                  synergiasciences.com
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 border-t border-white/10 pt-6 gap-4">
            <p>© {new Date().getFullYear()} Synergia Sciences. All rights reserved.</p>
            <p className="font-mono">India (IST, GMT+5:30)</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
