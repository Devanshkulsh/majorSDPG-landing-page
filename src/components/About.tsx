import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaHospital, FaBookOpen, FaLeaf, FaUserDoctor } from "react-icons/fa6";
import SectionLabel from "./SectionLabel";

const POINTS = [
  { icon: FiCheckCircle, title: "CCIM & State Govt. Recognized" },
  { icon: FaUserDoctor, title: "Experienced Vaidyas & Professors" },
  { icon: FaHospital, title: "Full Teaching Hospital Attached" },
  { icon: FaLeaf, title: "Holistic Residential Campus" },
];

// ← Replace this with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "y5xktd1yaQc";

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section
      id="about"
      className="relative bg-cream py-20 md:py-28 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/6 rounded-full blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #B8860B 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* ── LEFT: YouTube Video ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          {/* Outer frame with gold glow */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(184,134,11,0.2)] border border-gold/25 group">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* 16:9 iframe wrapper */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {playVideo ? (
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                  title="MSDS AMCH Campus & College Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 w-full h-full group/thumb"
                  aria-label="Play campus tour video"
                >
                  <img
                    src="/thumnail.webp"
                    alt="Campus tour video thumbnail"
                    className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-black/35 transition-colors duration-200" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative w-20 h-20 rounded-full border-2 border-gold/90 bg-black/25 text-white flex items-center justify-center shadow-[0_0_0_4px_rgba(184,134,11,0.28),0_0_20px_rgba(184,134,11,0.85),0_0_40px_rgba(184,134,11,0.65)] animate-pulse group-hover/thumb:scale-105 group-hover/thumb:shadow-[0_0_0_6px_rgba(184,134,11,0.4),0_0_26px_rgba(184,134,11,0.95),0_0_52px_rgba(184,134,11,0.8)] transition-all duration-300">
                      <span className="absolute inset-0 rounded-full border border-gold/70 animate-ping opacity-40" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 ml-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>

            {/* Bottom caption bar */}
            <div className="bg-charcoal-deep px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="text-cream/70 text-xs font-medium tracking-wide">
                Campus & College Tour — Major S.D. Singh PG AMCH
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center gap-3 bg-white border border-gold/20 rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(184,134,11,0.08)] w-fit"
          >
            <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <FaBookOpen size={14} className="text-gold-dark" />
            </div>
            <div>
              <p className="text-charcoal font-bold text-sm">20+ Years of Excellence</p>
              <p className="text-charcoal/50 text-[11px]">Nurturing Ayurvedic physicians since decades</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Text Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <SectionLabel className="justify-center lg:justify-start">About Us</SectionLabel>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-[2.75rem] font-bold text-charcoal leading-tight">
            A Legacy of{" "}
            <span className="relative inline-block">
              <span className="text-gold-dark">Ayurvedic Excellence</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
            </span>{" "}
            Since Decades
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 my-6 justify-center lg:justify-start">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>

          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed mb-4">
            Major SD Singh PG Ayurvedic Medical College & Hospital is a premier institution
            dedicated to the timeless science of Ayurveda. Affiliated with the state university and
            approved by NCISM, we have nurtured thousands of physicians and surgeons over four
            decades.
          </p>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed mb-8">
            Our mission is to seamlessly blend the wisdom of classical Ayurvedic Samhitas with the
            rigor of modern medical sciences — producing healers who are rooted in tradition and
            ready for the future.
          </p>

          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto lg:mx-0 mb-8">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3 bg-white border border-gold/15 rounded-xl px-4 py-3 hover:border-gold/35 hover:shadow-[0_4px_16px_rgba(184,134,11,0.1)] transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon size={13} className="text-gold-dark" />
                  </div>
                  <span className="text-charcoal font-medium text-xs sm:text-sm leading-snug">
                    {p.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2 bg-gold-dark hover:bg-gold text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-[0_4px_20px_rgba(184,134,11,0.4)]"
          >
            Explore Admissions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

