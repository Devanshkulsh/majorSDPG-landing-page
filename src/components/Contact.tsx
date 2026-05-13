import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi";
import { NAV_LINKS } from "@/constants/data";
import SectionLabel from "./SectionLabel";

const CONTACT_ITEMS = [
  {
    icon: FiPhone,
    label: "Phone",
    lines: [
      { text: "+91 7311125822", href: "tel:+917311125822" },
      { text: "+91 9554964680", href: "tel:+919554964680" },
    ],
  },
  {
    icon: FiMail,
    label: "Email",
    lines: [
      { text: "majorsdsinghayd@gmail.com", href: "mailto:majorsdsinghayd@gmail.com" },
    ],
  },
  {
    icon: FiMapPin,
    label: "Address",
    lines: [
      {
        text: "Bewar Road, Fatehgarh – Farrukhabad (U.P.) 209601",
        href: "https://maps.google.com/?q=Major+S.D.+Singh+PG+Ayurvedic+Medical+College",
      },
    ],
  },
];

const SOCIAL = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/majorsdsamc/",
    bg: "hover:bg-blue-600",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/majorsdsinghpg/",
    bg: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@majorsdsinghp.g.ayurvedicm4085",
    bg: "hover:bg-red-600",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/917300864280",
    bg: "hover:bg-green-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #B8860B 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Visit or{" "}
            <span className="relative inline-block">
              <span className="text-gold-dark">Connect</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-gold/0 via-gold to-gold/0" />
            </span>{" "}
            with Us
          </h2>
          <p className="mt-4 text-charcoal/50 max-w-md mx-auto text-base">
            We're always happy to answer your questions about admissions, campus life, or anything else.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </motion.div>

        {/* Main layout: left info panel + right map */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* LEFT: info panel — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact details card */}
            <div className="bg-white rounded-2xl border border-gold/20 shadow-[0_8px_40px_rgba(184,134,11,0.08)] overflow-hidden flex-1">
              {/* Card header */}
              <div className="bg-charcoal-deep px-6 py-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                  <FiMapPin size={14} className="text-gold" />
                </div>
                <div>
                  <p className="text-cream font-bold text-sm">Our Address</p>
                  <p className="text-cream/40 text-[10px] uppercase tracking-widest">Major S.D. Singh PG AMCH</p>
                </div>
              </div>

              {/* Contact rows */}
              <div className="px-6 py-5 space-y-5">
                {CONTACT_ITEMS.map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors duration-200">
                      <Icon size={14} className="text-gold-dark" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-charcoal/35 font-semibold mb-1">{label}</p>
                      {lines.map((line) => (
                        <a
                          key={line.text}
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-start gap-1 text-charcoal/75 hover:text-gold-dark text-sm leading-relaxed transition-colors duration-200 wrap-break-word group/link"
                        >
                          <span>{line.text}</span>
                          {line.href.startsWith("http") && (
                            <FiExternalLink size={10} className="mt-1 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/917300864280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
                >
                  <FaWhatsapp size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick links card */}
            <div className="bg-white rounded-2xl border border-gold/20 shadow-[0_8px_40px_rgba(184,134,11,0.08)] px-6 py-5">
              <p className="text-[10px] uppercase tracking-widest text-gold/70 font-bold mb-4">Quick Links</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group flex items-center gap-2 text-charcoal/60 hover:text-gold-dark text-sm transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-2.5 h-[1.5px] bg-gold transition-all duration-200 shrink-0" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social icons */}
              <div className="mt-5 pt-5 border-t border-gold/10">
                <p className="text-[10px] uppercase tracking-widest text-gold/70 font-bold mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {SOCIAL.map(({ icon: Icon, label, href, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-charcoal/50 hover:text-white transition-all duration-300 ${bg} hover:border-transparent hover:shadow-md`}
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: map — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            {/* Map wrapper */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_8px_40px_rgba(184,134,11,0.1)] min-h-105">
              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 z-10 h-0.75 bg-linear-to-r from-transparent via-gold to-transparent" />

              <iframe
                title="MSDS AMCH Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908113.1788198057!2d78.91146252625563!3d27.240582361050407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3002fa39fef9%3A0x2f4d08d951adeac1!2sMajor%20S.D.%20Singh%20PG%20Ayurvedic%20Medical%20College!5e0!3m2!1sen!2sin!4v1778667869231!5m2!1sen!2sin"
                className="w-full h-full absolute inset-0 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direction button */}
            <a
              href="https://maps.google.com/?q=Major+S.D.+Singh+PG+Ayurvedic+Medical+College+Farrukhabad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-charcoal-deep hover:bg-charcoal text-cream font-bold px-6 py-4 rounded-2xl text-sm border border-gold/20 hover:border-gold/50 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
            >
              <FiMapPin size={15} className="text-gold" />
              <span>Get Directions on Google Maps</span>
              <FiExternalLink size={13} className="text-gold/50 group-hover:text-gold transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
