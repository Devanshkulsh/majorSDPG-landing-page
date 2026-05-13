import logo from "@/assets/msds-logo.webp";
export default function Footer() {
  return (
    <footer className="bg-charcoal-deep border-t-4 border-gold pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="MSDS AMCH" className="h-12 w-12" />
            <span className="text-gold font-bold text-lg">MSDS AMCH</span>
          </div>
          <p className="text-cream/60 text-sm leading-relaxed">
            Preserving Ancient Wisdom. Building Modern Healers.
          </p>
        </div>
        {[
          { h: "Programs", links: ["BAMS", "MS Prasuti Tantra", "MS Shalya Tantra"] },
          { h: "Quick Links", links: ["About", "Facilities", "Admissions", "Contact"] },
          { h: "Legal", links: ["Privacy Policy", "Terms of Use", "Refund Policy"] },
        ].map((col) => (
          <div key={col.h}>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {col.h}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-cream/60 hover:text-gold text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gold/15 text-center text-cream/50 text-xs">
        © 2025 Major SD Singh PG Ayurvedic Medical College & Hospital. All Rights Reserved.
      </div>
    </footer>
  );
}
