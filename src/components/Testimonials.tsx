import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";
import SectionLabel from "./SectionLabel";

const testimonials = [
  { id: "1", videoId: "tCp0rUeoRH0" },
  { id: "2", videoId: "iv8vRgmML1s" },
  { id: "3", videoId: "pwfqGInWLfY" },
  { id: "4", videoId: "rAvbmnczbRQ" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getYouTubeThumbnail = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export default function Testimonials() {
  const [activeId, setActiveId] = useState(testimonials[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[0];

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setIsPlaying(true);
  };

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, rgba(245,184,0,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center">
          <SectionLabel>Student Success Stories</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-charcoal md:text-5xl">
            Hear Directly From Our Future Healers
          </h2>
          <div className="mx-auto my-6 h-px w-24 bg-gold" />
          <p className="mx-auto max-w-3xl text-charcoal/70">
            Discover how our integrated curriculum and hands-on hospital exposure shape the
            journeys of our B.A.M.S. students.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="relative rounded-r-3xl rounded-l-xl border border-gold/20 bg-white p-2 shadow-xl sm:p-4 md:p-6 lg:rounded-r-[2.5rem]">
              <div className="absolute inset-y-3 -right-3 -z-10 w-full rounded-r-3xl border border-gold/20 bg-cream shadow-sm lg:-right-4 lg:rounded-r-[2.5rem]" />
              <div className="absolute inset-y-6 -right-6 -z-20 w-full rounded-r-3xl border border-gold/10 bg-cream/80 lg:-right-8 lg:rounded-r-[2.5rem]" />
              <div className="absolute inset-y-0 left-0 w-8 rounded-l-xl bg-linear-to-r from-charcoal/20 to-transparent mix-blend-multiply" />

              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-charcoal shadow-inner md:rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full"
                  >
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${activeTestimonial.videoId}?autoplay=1&rel=0&controls=1&modestbranding=1`}
                        title="Student Testimonial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    ) : (
                      <div className="group relative h-full w-full cursor-pointer overflow-hidden">
                        <img
                          src={getYouTubeThumbnail(activeTestimonial.videoId)}
                          alt="Student testimonial thumbnail"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-charcoal/40 transition-colors duration-300 group-hover:bg-charcoal/55" />
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 text-charcoal shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:h-24 sm:w-24"
                          aria-label="Play video"
                        >
                          <Play className="ml-1 h-10 w-10 sm:h-12 sm:w-12" fill="currentColor" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {testimonials.map((testimonial) => {
              const isActive = activeId === testimonial.id;

              return (
                <motion.button
                  variants={fadeUp}
                  key={testimonial.id}
                  onClick={() => handleSelect(testimonial.id)}
                  className={`group relative flex flex-col items-start overflow-hidden rounded-2xl bg-white p-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                    isActive
                      ? "shadow-md ring-2 ring-gold ring-offset-2 ring-offset-cream"
                      : "border border-gold/20 shadow-sm hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={getYouTubeThumbnail(testimonial.videoId)}
                      alt="Testimonial video thumbnail"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-colors ${
                        isActive ? "bg-gold/20" : "bg-charcoal/35 group-hover:bg-charcoal/20"
                      }`}
                    >
                      {isActive && isPlaying ? (
                        <span className="flex items-center gap-1 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal backdrop-blur-sm">
                          Playing
                        </span>
                      ) : (
                        <PlayCircle className="h-8 w-8 text-white/95 shadow-sm transition-transform group-hover:scale-110" />
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
