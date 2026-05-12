import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/data";
import logo from "@/assets/msds-logo.webp";

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
        scrolled ? "bg-charcoal-deep/90 backdrop-blur-md border-b border-gold/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MSDS AMCH logo" className="h-12 w-12 object-contain" />
          <span className="text-gold font-bold text-xl tracking-wide">MSDS AMCH</span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/90 hover:text-gold text-sm font-medium tracking-wide transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#lead" className="bg-gold text-charcoal font-semibold px-5 py-2.5 rounded-full hover:bg-gold-dark transition-all hover:scale-105 shadow-lg shadow-gold/20">
            Apply Now →
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold p-2" aria-label="Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-charcoal-deep/95 backdrop-blur-md border-t border-gold/20 overflow-hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-cream/90 hover:text-gold font-medium">{l.label}</a>
              ))}
              <a href="#lead" onClick={() => setOpen(false)} className="bg-gold text-charcoal font-semibold px-5 py-3 rounded-full text-center">Apply Now →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
