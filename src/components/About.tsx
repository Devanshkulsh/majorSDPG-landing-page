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
    <section id="about" className="relative bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Visual/Stats Column */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="relative h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center order-2 lg:order-1"
        >
          {/* Mandala SVG - Scaled for mobile */}
          <svg className="absolute inset-0 w-full h-full opacity-20 animate-[spin_60s_linear_infinite] scale-75 sm:scale-100" viewBox="0 0 400 400">
            {[180, 150, 120, 90, 60].map(r => <circle key={r} cx="200" cy="200" r={r} stroke="#F5B800" strokeWidth="1" fill="none" />)}
            {Array.from({length: 12}).map((_, i) => {
              const a = (i * 30 * Math.PI) / 180;
              return <ellipse key={i} cx={200 + Math.cos(a) * 130} cy={200 + Math.sin(a) * 130} rx="20" ry="40" stroke="#F5B800" strokeWidth="1" fill="none" transform={`rotate(${i*30} ${200 + Math.cos(a) * 130} ${200 + Math.sin(a) * 130})`}/>;
            })}
          </svg>
          
          {/* Stats Grid */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-sm">
            {ABOUT_STATS.map((s, i) => (
              <motion.div 
                key={s.label} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gold/30 rounded-xl p-3 sm:p-5 text-center shadow-lg shadow-gold/5"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gold">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-charcoal/70 text-[10px] sm:text-xs mt-1 font-medium uppercase tracking-tighter sm:tracking-normal">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <SectionLabel className="justify-center lg:justify-start">About Us</SectionLabel>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            A Legacy of <span className="text-gold-dark">Ayurvedic Excellence</span> Since Decades
          </h2>
          <div className="h-px w-16 sm:w-20 bg-gold my-4 sm:my-6 mx-auto lg:mx-0" />
          
          <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-4">
            Major SD Singh PG Ayurvedic Medical College & Hospital is a premier institution dedicated to the timeless science of Ayurveda. Affiliated with the state university and approved by CCIM, we have nurtured thousands of physicians and surgeons over four decades.
          </p>
          <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-8">
            Our mission is to seamlessly blend the wisdom of classical Ayurvedic Samhitas with the rigor of modern medical sciences.
          </p>
          
          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
            {POINTS.map((p) => (
              <div key={p.title} className="flex items-center lg:items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green/10 text-green flex items-center justify-center font-bold text-sm">
                  {p.icon}
                </span>
                <span className="text-charcoal font-medium text-xs sm:text-sm">
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}