'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'info@synergiasciences.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="w-full bg-[#17252A] text-white pt-24 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Brand Badge */}
        <div className="flex items-center gap-3">
          <img
            src="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Symbol.png?fit=32%2C32&ssl=1"
            alt="Synergia Sciences"
            className="w-8 h-8"
          />
          <span className="text-xs uppercase tracking-widest text-[#03A9F4]/70 font-semibold">
            Building Sustainable Partnerships
          </span>
        </div>

        {/* Big CTA */}
        <div className="flex flex-col gap-8 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-tight">
            Let&apos;s build something together. <span className="text-white/40">Get in touch.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`mailto:${email}`}
              data-cursor="Email"
              className="text-2xl sm:text-4xl font-mono text-[#03A9F4] hover:underline transition-all"
            >
              {email}
            </a>

            <button
              onClick={handleCopyEmail}
              data-cursor="Copy"
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#03A9F4]" />
                  <span className="text-[#03A9F4]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/50" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Navigation & Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 text-sm text-white/50">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://synergiasciences.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>Website</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">
              Location
            </h4>
            <p className="text-white/70">India</p>
            <p className="text-xs text-white/30 mt-1 font-mono">IST (GMT+5:30)</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">
              Local Time
            </h4>
            <p className="text-xl font-mono text-white">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/25 border-t border-white/8 pt-6 gap-4">
          <p>© {new Date().getFullYear()} Synergia Sciences. All rights reserved.</p>
          <a href="#" className="hover:text-white/50 transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
