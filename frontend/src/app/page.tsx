'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import NavigationOverlay from '@/components/NavigationOverlay';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import ClientsSection from '@/components/ClientsSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-[#17252A] font-sans selection:bg-[#085884] selection:text-white">
      {/* Fullscreen Navigation Modal */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Sticky Header Navbar */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Main Page Content */}
      <main>
        <Hero />
        <IntroSection />
        <ProjectsGrid />
        <ClientsSection />
        <TestimonialSlider />
        <BlogSection />
      </main>

      {/* Dark Footer Contact Section */}
      <Footer />
    </div>
  );
}
