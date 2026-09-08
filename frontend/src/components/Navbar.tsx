'use client';

interface NavbarProps {
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md transition-colors duration-300 border-b border-[#085884]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Synergia Sciences Logo */}
        <a
          href="#"
          data-cursor="Home"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Logo-small.png?fit=1029%2C119&ssl=1"
            alt="Synergia Sciences"
            className="h-7 sm:h-8 w-auto"
          />
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMenu}
            data-cursor="Open"
            className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#17252A] hover:text-[#085884] transition-colors py-2 px-3 cursor-pointer font-[var(--font-open-sans)]"
          >
            <span>Menu</span>
            <div className="flex flex-col gap-1 w-5">
              <span className="h-[1.5px] w-full bg-[#17252A] group-hover:bg-[#085884] group-hover:w-3 transition-all duration-300 ml-auto"></span>
              <span className="h-[1.5px] w-full bg-[#17252A] group-hover:bg-[#085884]"></span>
            </div>
          </button>

          <a
            href="#contact"
            data-cursor="Contact"
            className="hidden sm:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full border border-[#085884]/30 text-[#085884] hover:bg-[#085884] hover:text-white hover:border-[#085884] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
