import { motion } from "framer-motion";

const APPLICATION_FORM_DIV_ID = "formsID7375";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,JVBERi0xLjQK";
    link.download = "MSDS_BAMS_Brochure.pdf";
    link.click();
  };

  const scrollToLeadForm = () => {
    const form = document.getElementById(APPLICATION_FORM_DIV_ID);
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-x-hidden bg-charcoal-deep">
      <div className="absolute inset-0 z-0">
        <img src="/hero.webp" alt="College Campus" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal-deep/95 via-charcoal-deep/80 to-charcoal-deep/90 sm:bg-linear-to-r" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 xl:py-40">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex w-full flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-md sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
              </span>
              Admissions Open | Session 2026-2027
            </motion.div>

            <motion.h1
              variants={item}
              className="mb-4 text-3xl font-extrabold leading-[1.15] text-cream sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-gold">Major S. D. Singh</span>{" "}
              <br className="hidden sm:block" />
              Ayurvedic Medical College
            </motion.h1>

            <motion.h2
              variants={item}
              className="mb-6 max-w-xl text-lg font-medium text-cream/90 sm:text-2xl"
            >
              Classical Ayurveda, clinical confidence, and research-minded care.
            </motion.h2>

            <motion.p
              variants={item}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base md:text-lg"
            >
              Join Major SD Singh PG Ayurvedic Medical College & Hospital for a focused B.A.M.S.
              journey built on strong classroom learning, extensive hospital exposure, and a
              disciplined approach to professional practice.
            </motion.p>

            <motion.div
              variants={item}
              className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:justify-start"
            >
              <button
                onClick={scrollToLeadForm}
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-gold px-10 py-4 text-base font-bold text-charcoal shadow-xl shadow-gold/20 transition-all hover:bg-gold-dark active:scale-95"
              >
                Apply Now
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center rounded-full border-2 border-cream/20 bg-white/5 px-10 py-4 text-base font-bold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold active:scale-95"
              >
                Campus Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            className="relative z-20 w-full max-w-lg lg:w-112.5 xl:w-125"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-1 shadow-2xl backdrop-blur-xl sm:rounded-3xl">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h3 className="font-bold text-charcoal">Registration Form</h3>
              </div>
              <div
                id={APPLICATION_FORM_DIV_ID}
                className="h-125 w-full overflow-y-auto bg-white sm:h-137.5"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-sky/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
