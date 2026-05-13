import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal">
            Visit or Connect with Us
          </h2>
          <div className="h-px w-24 bg-gold mx-auto my-6" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-7 border border-gold/20 shadow-lg shadow-gold/5"
          >
            <h3 className="text-lg font-bold text-charcoal mb-4">📍 Contact Info</h3>
            <p className="text-charcoal/75 text-sm mb-2">
              Major SD Singh PG Ayurvedic Medical College & Hospital, Uttar Pradesh, India
            </p>
            <p className="text-sm mb-1">
              <a
                href="tel:+910000000000"
                className="text-charcoal hover:text-gold-dark font-medium"
              >
                📞 +91 00000 00000
              </a>
            </p>
            <p className="text-sm mb-3">
              <a
                href="mailto:info@majorsdspgamc.com"
                className="text-charcoal hover:text-gold-dark font-medium"
              >
                📧 info@majorsdspgamc.com
              </a>
            </p>
            <a
              href="https://wa.me/910000000000"
              className="inline-flex items-center gap-2 bg-green text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-green-light transition"
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-7 border border-gold/20 shadow-lg shadow-gold/5"
          >
            <h3 className="text-lg font-bold text-charcoal mb-4">🔗 Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-charcoal/75 hover:text-gold-dark text-sm">
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-7 border border-gold/20 shadow-lg shadow-gold/5"
          >
            <h3 className="text-lg font-bold text-charcoal mb-4">🌐 Follow Us</h3>
            <div className="flex gap-3">
              {[
                { l: "FB", c: "bg-sky text-white" },
                { l: "IG", c: "bg-maroon text-white" },
                { l: "YT", c: "bg-gold text-charcoal" },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#"
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${s.c} hover:scale-110 transition`}
                >
                  {s.l}
                </a>
              ))}
            </div>
            <p className="text-charcoal/60 text-sm mt-5">
              Stay updated with admission news, campus life, and Ayurvedic insights.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl"
        >
          <iframe
            title="MSDS AMCH Location"
            src="https://www.google.com/maps?q=Uttar+Pradesh+India&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
