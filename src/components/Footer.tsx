import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "/public/logo.webp";

const SOCIAL = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/majorsdsinghpg/",
    label: "Instagram",
    hover:
      "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:border-transparent",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/majorsdsamc/",
    label: "Facebook",
    hover: "hover:bg-blue-600 hover:border-transparent",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@majorsdsinghp.g.ayurvedicm4085",
    label: "YouTube",
    hover: "hover:bg-red-600 hover:border-transparent",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917300864280",
    label: "WhatsApp",
    hover: "hover:bg-green-500 hover:border-transparent",
  },
];

const COLUMNS = [
  {
    heading: "Programs",
    links: [
      { label: "BAMS", href: "#" },
      { label: "MS Prasuti Tantra", href: "#" },
      { label: "MS Shalya Tantra", href: "#" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Facilities", href: "#facilities" },
      { label: "Admissions", href: "#admissions" },
      { label: "Contact", href: "#lead" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

const CONTACT = [
  {
    icon: FiPhone,
    lines: [
      { label: "+91 7300864280", href: "tel:+917300864280" },
      { label: "+91 8840243743", href: "tel:+918840243743" },
    ],
  },
  {
    icon: FiMail,
    lines: [{ label: "majorsdsinghayd@gmail.com", href: "mailto:majorsdsinghayd@gmail.com" }],
  },
  {
    icon: FiMapPin,
    lines: [
      {
        label: "Bewar Road, Fatehgarh – Farrukhabad (U.P.) 209601",
        href: "https://maps.google.com/?q=Fatehgarh+Farrukhabad+UP+209601",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-deep overflow-hidden">
      {/* Top gold border with glow */}
      <div className="h-0.75 w-full bg-linear-to-r from-transparent via-gold to-transparent" />
      <div className="h-px w-full bg-gold/20" />

      {/* Ambient background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-md" />
                <img
                  src={logo}
                  alt="MSDS AMCH"
                  className="relative h-15 w-20 md:h-15 md:w-15 rounded-full object-cover ring-2 ring-gold/30"
                />
              </div>
              <div>
                <p className="text-gold font-black text-balance leading-tight tracking-wide">
                  Major S. D. Singh Ayurvedic Medical College
                </p>
                <p className="text-cream/40 text-[10px] uppercase tracking-widest">
                  Est. Since Decades
                </p>
              </div>
            </div>

            <p className="text-cream/55 text-sm leading-relaxed mb-6 max-w-xs">
              Preserving ancient Ayurvedic wisdom while building the next generation of modern
              healers at one of India's premier AYUSH institutions.
            </p>

            {/* Social icons */}
            <div>
              <p className="text-gold/60 text-[10px] uppercase tracking-widest font-semibold mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL.map(({ icon: Icon, href, label, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-full border border-gold/20 bg-white/5 flex items-center justify-center text-cream/60 hover:text-white transition-all duration-300 ${hover}`}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-gold font-bold mb-5 text-[11px] uppercase tracking-[0.15em]">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-cream/55 hover:text-gold text-sm transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-200 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CONTACT.map(({ icon: Icon, lines }) => (
            <div
              key={lines[0].label}
              className="flex items-start gap-3 bg-white/3 border border-gold/10 rounded-xl px-4 py-4 hover:border-gold/25 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Icon size={14} className="text-gold" />
              </div>
              <div className="min-w-0">
                {lines.map((line) => (
                  <a
                    key={line.label}
                    href={line.href}
                    target={line.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block text-cream/60 hover:text-gold text-xs leading-relaxed transition-colors duration-200 wrap-break-word"
                  >
                    {line.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gold/20 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-cream/35">
          <p>© 2025 Major SD Singh PG Ayurvedic Medical College & Hospital. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <span className="text-gold/20">·</span>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
            <span className="text-gold/20">·</span>
            <a href="#" className="hover:text-gold transition-colors">
              Refund
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
