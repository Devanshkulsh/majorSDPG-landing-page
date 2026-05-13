import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-charcoal-deep py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Help Center</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-cream leading-tight">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="text-gold">Questions</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-gold/0 via-gold to-gold/0" />
            </span>
          </h2>
          <p className="mt-5 text-cream/50 text-base max-w-md mx-auto">
            Everything you need to know about admissions, curriculum, and life at MSDS AMCH.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div
                  className={`
                    relative rounded-xl overflow-hidden transition-all duration-300
                    ${
                      isOpen
                        ? "bg-linear-to-br from-charcoal/80 to-charcoal/40 shadow-[0_0_0_1px_rgba(212,160,0,0.5),0_8px_32px_rgba(0,0,0,0.3)]"
                        : "bg-charcoal/30 shadow-[0_0_0_1px_rgba(212,160,0,0.1)] hover:shadow-[0_0_0_1px_rgba(212,160,0,0.25)] hover:bg-charcoal/50"
                    }
                  `}
                >
                  {/* Left accent bar */}
                  <motion.div
                    animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 bottom-0 w-0.75 bg-linear-to-b from-gold via-gold-dark to-gold origin-top"
                  />

                  {/* Question button */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    {/* Index + Question */}
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-xs font-black mt-0.75 shrink-0 tabular-nums transition-colors duration-200 ${isOpen ? "text-gold" : "text-gold/30 group-hover:text-gold/60"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? "text-cream" : "text-cream/80 group-hover:text-cream"}`}
                      >
                        {f.q}
                      </span>
                    </div>

                    {/* Toggle icon */}
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-gold text-charcoal-deep" : "bg-gold/10 text-gold group-hover:bg-gold/20"}`}
                    >
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-14">
                          <div className="h-px bg-gold/15 mb-4" />
                          <p className="text-cream/65 leading-relaxed text-sm">{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-charcoal/40 border border-gold/15 rounded-2xl px-10 py-7">
            <p className="text-cream/60 text-sm">Still have questions?</p>
            <a
              href="#lead"
              className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal-deep font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-[0_4px_20px_rgba(212,160,0,0.4)]"
            >
              Talk to an Advisor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
