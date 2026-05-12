import { motion } from "framer-motion";
import { STEPS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function AdmissionsProcess() {
  return (
    <section id="admissions" className="relative bg-charcoal-deep py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Admissions</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-cream">Your Journey to <span className="text-gold">MSDS AMCH</span></h2>
          <div className="h-px w-24 bg-gold mx-auto my-6" />
          <p className="text-cream/70 max-w-2xl mx-auto">A simple, transparent path from enquiry to enrollment.</p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold/40" />
          {STEPS.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-gold text-charcoal flex items-center justify-center text-2xl font-bold shadow-lg shadow-gold/20 mb-4 border-4 border-charcoal-deep">
                {i + 1}
              </div>
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="text-cream font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#lead" className="inline-block border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-charcoal transition-all">
            Download Prospectus →
          </a>
        </div>
      </div>
    </section>
  );
}
