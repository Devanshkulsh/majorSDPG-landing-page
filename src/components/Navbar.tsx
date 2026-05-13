import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-deep/90 backdrop-blur-md border-b border-gold/30 py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo and Title Alignment */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink">
          <img
            src="/logo.webp"
            alt="MSDS AMCH logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain shrink-0"
          />
          <span className="text-gold font-bold text-base sm:text-lg lg:text-xl tracking-wide leading-tight max-w-50 sm:max-w-none">
            Major S. D. Singh <span className="block sm:inline">Ayurvedic Medical College</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/90 hover:text-gold text-sm font-medium tracking-wide transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lead"
            className="bg-gold text-charcoal font-semibold px-6 py-2.5 rounded-full hover:bg-gold-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20 whitespace-nowrap"
          >
            Apply Now →
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-charcoal-deep/98 backdrop-blur-lg border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/90 hover:text-gold font-medium py-3 text-lg border-b border-white/5 last:border-none"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="#lead"
                  onClick={() => setOpen(false)}
                  className="bg-gold text-charcoal font-bold px-5 py-4 rounded-xl text-center block w-full shadow-lg active:scale-[0.98] transition-transform"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
