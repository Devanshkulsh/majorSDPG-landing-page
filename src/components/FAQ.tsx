import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-charcoal-deep py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Help Center</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-cream">Frequently Asked Questions</h2>
          <div className="h-px w-24 bg-gold mx-auto my-6" />
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`bg-charcoal/60 rounded-xl border transition-all ${isOpen ? "border-gold/60 border-l-4" : "border-gold/15"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                  <span className="font-semibold text-cream">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-gold text-2xl flex-shrink-0">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-cream/70 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
