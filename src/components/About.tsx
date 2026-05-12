import { motion } from "framer-motion";
import { ABOUT_STATS } from "@/constants/data";
import CountUp from "./CountUp";
import SectionLabel from "./SectionLabel";

const POINTS = [
  { icon: "✓", title: "CCIM & State Govt. Recognized" },
  { icon: "📖", title: "Experienced Vaidyas & Professors" },
  { icon: "🏥", title: "Full Teaching Hospital Attached" },
  { icon: "🌿", title: "Holistic Residential Campus" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-[460px] flex items-center justify-center">
          {/* Mandala SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-20 animate-[spin_60s_linear_infinite]" viewBox="0 0 400 400">
            {[180, 150, 120, 90, 60].map(r => <circle key={r} cx="200" cy="200" r={r} stroke="#F5B800" strokeWidth="1" fill="none" />)}
            {Array.from({length: 12}).map((_, i) => {
              const a = (i * 30 * Math.PI) / 180;
              return <ellipse key={i} cx={200 + Math.cos(a) * 130} cy={200 + Math.sin(a) * 130} rx="20" ry="40" stroke="#F5B800" strokeWidth="1" fill="none" transform={`rotate(${i*30} ${200 + Math.cos(a) * 130} ${200 + Math.sin(a) * 130})`}/>;
            })}
          </svg>
          <div className="relative grid grid-cols-2 gap-4 w-full max-w-sm">
            {ABOUT_STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gold/30 rounded-xl p-5 text-center shadow-lg shadow-gold/5">
                <div className="text-3xl font-bold text-gold"><CountUp end={s.value} suffix={s.suffix} /></div>
                <div className="text-charcoal/70 text-xs mt-1 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionLabel className="!justify-start">About Us</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            A Legacy of <span className="text-gold-dark">Ayurvedic Excellence</span> Since Decades
          </h2>
          <div className="h-px w-20 bg-gold my-6" />
          <p className="text-charcoal/75 leading-relaxed mb-4">
            Major SD Singh PG Ayurvedic Medical College & Hospital is a premier institution dedicated to the timeless science of Ayurveda. Affiliated with the state university and approved by CCIM, we have nurtured thousands of physicians and surgeons over four decades.
          </p>
          <p className="text-charcoal/75 leading-relaxed mb-8">
            Our mission is to seamlessly blend the wisdom of classical Ayurvedic Samhitas with the rigor of modern medical sciences — producing healers who honor tradition while embracing contemporary clinical excellence.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {POINTS.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-green/10 text-green flex items-center justify-center font-bold">{p.icon}</span>
                <span className="text-charcoal font-medium pt-1.5 text-sm">{p.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
