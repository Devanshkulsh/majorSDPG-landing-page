import { motion } from "framer-motion";
import { COURSES } from "@/constants/data";
import SectionLabel from "./SectionLabel";

const APPLICATION_FORM_DIV_ID = "formsID7375";
const COURSE_IMAGES: Record<string, string> = {
  "Bachelor of Ayurvedic Medicine & Surgery (BAMS)":
    "/course/c1.webp",
  "Prasuti Tantra Avum Stri Rog (MS)":
    "/course/c2.webp",
  "Shalya Tantra (MS)":
    "/course/c3.webp",
};

const trimText = (text: string, maxLength = 110) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}...` : text;

export default function Courses() {
  const scrollToLeadForm = () => {
    const form = document.getElementById(APPLICATION_FORM_DIV_ID);
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <section id="courses" className="relative bg-charcoal-deep py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, rgba(245,184,0,0.05), transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Our Programs</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-cream">
            Choose Your Path in <span className="text-gold">Ayurvedic Medicine</span>
          </h2>
          <div className="h-px w-24 bg-gold mx-auto my-6" />
          <p className="max-w-2xl mx-auto text-cream/70">
            From foundational BAMS to advanced surgical specializations — chart your career in
            India's ancient healing science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {COURSES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl p-6 border border-gold/20 hover:border-gold/50 transition-all hover:shadow-[0_20px_60px_rgba(245,184,0,0.15)] flex flex-col"
              style={{ borderTop: "4px solid #F5B800" }}
            >
              <img
                src={COURSE_IMAGES[c.title]}
                alt={c.title}
                className="w-full h-46 object-cover rounded-xl mb-5 border border-gold/20"
                loading="lazy"
              />
              <span className="inline-block self-start text-[10px] font-bold tracking-widest text-sky bg-sky/10 px-3 py-1 rounded-full mb-3">
                {c.badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">{c.title}</h3>
              <p className="text-amber-600 text-sm font-medium mb-4">⏱ {c.duration}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{trimText(c.description)}</p>
              <ul className="space-y-2 mb-4">
                {c.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-gold mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gold/15 pt-4 mb-5">
                <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Eligibility
                </div>
                <div className="text-gray-800 text-sm">{c.eligibility}</div>
              </div>
              <button
                onClick={scrollToLeadForm}
                className={`mt-auto block text-center font-semibold px-5 py-3 rounded-lg transition-all ${c.ctaClass}`}
              >
                {c.cta} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}