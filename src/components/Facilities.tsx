import { motion } from "framer-motion";
import { FACILITIES } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Campus & Infrastructure</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal">World-Class Infrastructure for <span className="text-gold-dark">Future Healers</span></h2>
          <div className="h-px w-24 bg-gold mx-auto my-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 border border-gold/20 hover:shadow-[0_20px_40px_rgba(46,125,50,0.12)] transition-all"
              style={{ borderTop: "4px solid #F5B800" }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{f.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
