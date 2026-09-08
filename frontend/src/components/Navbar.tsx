'use client';

interface NavbarProps {
  onOpenMenu: () => void;
}

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Active Molecules', href: '#work' },
  { name: 'Global Reach', href: '#clients' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Insights', href: '#blog' },
];

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <header className="relative w-full z-50 bg-white border-b border-[#085884]/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-between">
        {/* Synergia Sciences Logo */}
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-85 transition-opacity"
        >
          <img
            src="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Logo-small.png?fit=1029%2C119&ssl=1"
            alt="Synergia Sciences"
            className="h-7 sm:h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation Links (Full Options Shown) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-[#17252A] hover:text-[#085884] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#085884] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full bg-[#085884] text-white hover:bg-[#064263] shadow-sm hover:shadow-md transition-all duration-300"
          >
            Contact Us
          </a>

          {/* Mobile 3-Line Hamburger Menu Button (Shown on mobile & tablets) */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#085884]/20 p-2.5 hover:bg-[#DCF3FF] transition-colors cursor-pointer"
          >
            <span className="h-[2px] w-full bg-[#085884] rounded-full transition-all"></span>
            <span className="h-[2px] w-4/5 bg-[#085884] rounded-full transition-all ml-auto"></span>
            <span className="h-[2px] w-full bg-[#085884] rounded-full transition-all"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
