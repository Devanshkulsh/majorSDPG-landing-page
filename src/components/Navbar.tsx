import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/30 bg-charcoal-deep/90 py-1 backdrop-blur-md"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-3 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-none"
        >
          <img
            src="/logo.webp"
            alt="MSDS AMCH logo"
            className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-12 sm:w-12"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="min-w-0 line-clamp-2 text-sm font-bold leading-tight tracking-wide text-gold sm:text-lg lg:text-xl">
            Major S. D. Singh PG{" "}
            <span className="block text-[11px] font-semibold sm:inline sm:text-inherit">
              Ayurvedic Medical College
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-cream/90 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 xl:gap-3">
            <a
              href="https://wa.me/918189098662"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full border border-gold/50 px-4 py-2.5 font-semibold text-gold transition-all hover:scale-105 hover:bg-gold/10 active:scale-95 xl:px-5"
            >
              WhatsApp
            </a>
            <a
              href="#lead"
              className="whitespace-nowrap rounded-full bg-gold px-5 py-2.5 font-semibold text-charcoal shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:bg-gold-dark active:scale-95 xl:px-6"
            >
              Apply Now →
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="shrink-0 rounded-lg p-2 text-gold transition-colors hover:bg-gold/10 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/20 bg-charcoal-deep/98 backdrop-blur-lg lg:hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5 sm:max-h-[calc(100vh-5rem)] sm:px-6 sm:py-7">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-base font-medium text-cream/90 hover:text-gold last:border-none sm:text-lg"
                >
                  {l.label}
                </a>
              ))}

              <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
                <a
                  href="https://wa.me/918189098662"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl border border-gold/40 px-5 py-4 text-center font-bold text-gold transition-transform active:scale-[0.98]"
                >
                  WhatsApp
                </a>
                <a
                  href="#lead"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl bg-gold px-5 py-4 text-center font-bold text-charcoal shadow-lg transition-transform active:scale-[0.98]"
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
