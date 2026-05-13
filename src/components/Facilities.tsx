import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { FACILITIES } from "@/constants/data";
import SectionLabel from "./SectionLabel";

type FacilityItem = (typeof FACILITIES)[number];

// Tilt card with spotlight effect
function FacilityCard({ f, i }: { f: FacilityItem; i: number }) {
  const Icon = f.icon;
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

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
      transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
      style={{ perspective: 800 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative h-full bg-white rounded-2xl border border-gold/20 overflow-hidden cursor-default group transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(212,160,0,0.18)]"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-gold via-gold-dark to-gold" />

        {/* Spotlight overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(212,160,0,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Number watermark */}
        <div className="absolute top-4 right-5 text-[4rem] font-black text-gold/6 leading-none select-none pointer-events-none">
          {String(i + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 flex flex-col h-full">
          {/* Icon bubble */}
          <div className="mb-5 w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
            <Icon className="text-2xl text-gold-dark" />
          </div>

          <h3 className="text-charcoal font-bold text-lg mb-2 leading-snug group-hover:text-gold-dark transition-colors duration-200">
            {f.title}
          </h3>

          <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
            {f.desc}
          </p>

          {/* Bottom arrow indicator */}
          <div className="mt-5 flex items-center gap-1 text-gold text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <span>Learn more</span>
            <span>→</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-cream py-28 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #B8860B 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blurred gold orb */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
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
            <span className="text-gold-dark">Students</span>
          </h2>
          <p className="mt-4 text-charcoal/50 max-w-xl mx-auto text-base">
            Every corner of our campus is designed to inspire, educate, and heal.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((f, i) => (
            <FacilityCard key={f.title + i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
