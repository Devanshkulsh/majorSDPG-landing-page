import { motion } from "framer-motion";
import { useRef } from "react";
import { FiSearch, FiFileText, FiCheckCircle, FiBookOpen } from "react-icons/fi";
import SectionLabel from "./SectionLabel";

// Replace with your actual STEPS import if needed; icons are mapped by index below
import { STEPS } from "@/constants/data";

// Map step index → React Icon component
const STEP_ICONS = [FiSearch, FiFileText, FiCheckCircle, FiBookOpen];

export default function AdmissionsProcess() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="admissions"
      className="relative bg-charcoal-deep py-24 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionLabel>Admissions</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-cream">
            Your Journey to{" "}
            <span className="text-gold uppercase tracking-tight">
              Major S. D. Singh Ayurvedic Medical College
            </span>
          </h2>
          <p className="mt-6 text-cream/70 max-w-2xl mx-auto text-lg italic">
            "A simple, transparent path from enquiry to enrollment."
          </p>
        </motion.div>

        {/* Connector line between steps (decorative, static) */}
        <div className="hidden md:block absolute top-80 left-[14%] right-[14%] h-px bg-gold/20 pointer-events-none" />

        <div className="relative grid md:grid-cols-4 gap-12 md:gap-6">
          {STEPS.map((s, i) => {
            const Icon = STEP_ICONS[i] ?? FiBookOpen;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group text-center"
              >
                {/* Hexagon Shape Container */}
                <div className="relative mx-auto w-24 h-28 mb-6 flex items-center justify-center">
                  {/* The Hexagon Background */}
                  <div
                    className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                  {/* The Inner Hexagon Border */}
                  <div
                    className="absolute inset-0.5 bg-charcoal-deep"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />

                  {/* Content inside Hexagon */}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <span className="text-gold font-black text-xl drop-shadow-md">{i + 1}</span>
                    <Icon
                      size={22}
                      className="text-gold/80 group-hover:text-gold group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-4">
                  <h3 className="text-cream font-bold text-xl mb-3 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <a
            href="#lead"
            className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-gold/50 text-gold font-bold px-10 py-4 rounded-full overflow-hidden hover:border-gold transition-all"
          >
            <span className="relative z-10 group-hover:text-charcoal-deep transition-colors duration-300">
              Download Prospectus
            </span>
            <span className="relative z-10 group-hover:translate-x-1 group-hover:text-charcoal-deep transition-all duration-300">
              →
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
