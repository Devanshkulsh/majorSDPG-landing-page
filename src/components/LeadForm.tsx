import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRUST = [
  "Free Counselling — No obligation",
  "CCIM Approved Programs",
  "Seats Filling Fast for 2025–26",
  "Scholarship information available",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="lead" className="py-24" style={{ background: "linear-gradient(135deg, #F5B800 0%, #C99A00 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="text-charcoal/80 text-xs font-semibold uppercase tracking-[0.3em] mb-3">Admissions Counsellor</div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">Start Your Ayurvedic Career Today</h2>
          <p className="text-charcoal/80 mt-4 text-lg">Fill in your details and our admissions counsellor will reach out within 24 hours.</p>
          <ul className="mt-8 space-y-3">
            {TRUST.map(t => (
              <li key={t} className="flex items-center gap-3 text-charcoal font-medium">
                <span className="w-6 h-6 rounded-full bg-charcoal text-gold flex items-center justify-center text-sm font-bold">✓</span>{t}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-charcoal">
            <div>📞 <a href="tel:+910000000000" className="font-semibold hover:underline">+91 00000 00000</a></div>
            <div>📧 <a href="mailto:info@majorsdspgamc.com" className="font-semibold hover:underline">info@majorsdspgamc.com</a></div>
            <div>📍 Major SD Singh PG Ayurvedic Medical College, Uttar Pradesh, India</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl shadow-charcoal/30 p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" exit={{ opacity: 0 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4">
                <h3 className="text-2xl font-bold text-charcoal mb-2">Request Free Counselling</h3>
                <Field label="Full Name" name="name" type="text" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Mobile Number" name="phone" type="tel" />
                  <Field label="Email Address" name="email" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Select Course</label>
                  <select required className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors bg-white">
                    <option value="">Choose a program</option>
                    <option>BAMS</option>
                    <option>MS Prasuti Tantra</option>
                    <option>MS Shalya Tantra</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <Field label="State / City" name="loc" type="text" />
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Message / Any questions</label>
                  <textarea required rows={3} className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-charcoal text-gold font-bold py-4 rounded-lg hover:bg-gold hover:text-charcoal border-2 border-charcoal transition-all text-base">
                  Get Free Counselling →
                </button>
                <p className="text-xs text-charcoal/60 text-center">🔒 Your information is 100% secure and will not be shared.</p>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
                  className="mx-auto w-20 h-20 rounded-full bg-green flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">Thank You!</h3>
                <p className="text-charcoal/70">Our counsellor will call you within 24 hours.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-charcoal mb-1.5">{label}</label>
      <input id={name} name={name} type={type} required className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors" />
    </div>
  );
}
