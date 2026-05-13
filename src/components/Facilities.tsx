import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { FACILITIES } from "@/constants/data";
import SectionLabel from "./SectionLabel";

type FacilityItem = (typeof FACILITIES)[number];

function FacilityCard({ f, i }: { f: FacilityItem; i: number }) {
  const Icon = f.icon;
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [4, -4]);
  const rotateY = useTransform(x, [-60, 60], [-4, 4]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative h-full bg-white rounded-2xl overflow-hidden cursor-default group border border-gold/15 transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(184,134,11,0.2)] flex flex-col"
      >
        {/* Image area */}
        <div className="relative h-54 overflow-hidden shrink-0">
          <img
            src={f.image}
            alt={f.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-100"
            loading="lazy"
          />
          {/* Image gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

          {/* Tag badge */}
          <div className="absolute top-2 left-3">
            <span className="inline-flex items-center bg-gold/90 backdrop-blur-sm text-charcoal-deep text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
              {f.tag}
            </span>
          </div>

          {/* Number watermark on image */}
          <div className="absolute bottom-3 right-4 text-[3rem] font-black text-white/10 leading-none select-none pointer-events-none">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* Icon sits at the bottom of image, overlapping card body */}
          <div className="absolute bottom-0 left-5 z-20">
            <div className="w-11 h-11 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
              <Icon className="text-lg text-gold-dark" />
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="relative z-10 pt-8 px-5 pb-5 flex flex-col flex-1">
          {/* Thin gold top accent */}
          <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-gold/0 via-gold/30 to-gold/0" />

          <h3 className="text-charcoal font-bold text-base leading-snug mb-2 group-hover:text-gold-dark transition-colors duration-200">
            {f.title}
          </h3>

          <p className="text-charcoal/55 text-sm leading-relaxed flex-1">
            {f.desc}
          </p>

          {/* Bottom hover indicator */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.2 }}
            className="mt-4 flex items-center gap-1.5 text-gold text-xs font-bold"
          >
            <span>Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
        </div>

        {/* Spotlight overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(212,160,0,0.06) 0%, transparent 65%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-cream py-28 overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #B8860B 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Campus & Infrastructure</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            World-Class Infrastructure for{" "}
            <span className="text-gold-dark">Future Healers</span>
          </h2>
          <p className="mt-4 text-charcoal/50 max-w-xl mx-auto text-base">
            Every corner of our campus is designed to inspire, educate, and heal.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </motion.div>

        {/* Stats strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid grid-cols-3 gap-px bg-gold/10 rounded-2xl overflow-hidden mb-14 border border-gold/20"
        >
          {[
            { value: "200+", label: "Bed Hospital" },
            { value: "10,000+", label: "Library Volumes" },
            { value: "300+", label: "Medicinal Plants" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-cream text-center py-6 px-4 hover:bg-gold/5 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-black text-gold-dark">
                {stat.value}
              </div>
              <div className="text-xs text-charcoal/45 mt-1 font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}

        {/* Cards grid — 3 cols, last row centered if fewer than 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((f, i) => (
            <FacilityCard key={f.title + i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}