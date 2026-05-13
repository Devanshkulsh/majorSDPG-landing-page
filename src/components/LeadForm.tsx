import { useEffect } from "react";
import { motion } from "framer-motion";

const SOURCE_FORM_DIV_ID = "formsID7375";
const LEAD_FORM_DIV_ID = "formsID7375-lead";

const TRUST = [
  "Free Counselling - No obligation",
  "CCIM Approved Programs",
  "Seats Filling Fast for 2026-27",
  "Scholarship information available",
];

export default function LeadForm() {
  useEffect(() => {
    const syncForm = () => {
      const source = document.getElementById(SOURCE_FORM_DIV_ID);
      const target = document.getElementById(LEAD_FORM_DIV_ID);
      if (!source || !target || source === target) return;
      if (!source.children.length) return;
      target.innerHTML = source.innerHTML;
    };

    syncForm();
    const intervalId = window.setInterval(syncForm, 400);
    window.setTimeout(() => window.clearInterval(intervalId), 8000);

    const source = document.getElementById(SOURCE_FORM_DIV_ID);
    const observer = source
      ? new MutationObserver(() => {
          syncForm();
        })
      : null;

    if (source && observer) {
      observer.observe(source, { childList: true, subtree: true });
    }

    return () => {
      window.clearInterval(intervalId);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="lead"
      className="py-24"
      style={{ background: "linear-gradient(135deg, #F5B800 0%, #C99A00 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-charcoal/80 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Admissions Counsellor
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            Start Your Ayurvedic Career Today
          </h2>
          <p className="text-charcoal/80 mt-4 text-lg">
            Fill in your details and our admissions counsellor will reach out within 24 hours.
          </p>
          <ul className="mt-8 space-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-3 text-charcoal font-medium">
                <span className="w-6 h-6 rounded-full bg-charcoal text-gold flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-charcoal">
            <div>
              📞{" "}
              <a href="tel:+917300864280" className="font-semibold hover:underline">
                +91 7300864280
              </a>
            </div>
            <div>
              📧{" "}
              <a href="mailto:majorsdsinghayd@gmail.com" className="font-semibold hover:underline">
                majorsdsinghayd@gmail.com
              </a>
            </div>
            <div>
              📍{" "}
              <a
                href="https://maps.app.goo.gl/ACWHJfCqZwpAnnSe8"
                className="font-semibold hover:underline"
              >
                Major SD Singh PG Ayurvedic Medical College, Uttar Pradesh, India
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl shadow-charcoal/30 p-8 md:p-10"
        >
          <div className="mb-4 border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-bold text-charcoal">Request Free Counselling</h3>
          </div>
          <div id={LEAD_FORM_DIV_ID} className="h-125 w-full overflow-y-auto bg-white sm:h-137.5" />
        </motion.div>
      </div>
    </section>
  );
}
