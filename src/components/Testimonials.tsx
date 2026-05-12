import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal">What Our Students & Alumni Say</h2>
        <div className="h-px w-24 bg-gold mx-auto my-6" />

        <div className="relative mt-10 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-xl shadow-gold/10 p-8 md:p-12 text-left border-l-4 border-gold">
              <div className="absolute -top-6 left-8 text-7xl text-gold font-serif leading-none">"</div>
              <p className="text-charcoal/85 text-lg md:text-xl leading-relaxed italic mt-2">{t.quote}</p>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="font-bold text-charcoal">{t.name}</div>
                  <div className="text-sm text-charcoal/60">{t.role}</div>
                </div>
                <div className="text-gold text-lg">⭐⭐⭐⭐⭐</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-charcoal/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
