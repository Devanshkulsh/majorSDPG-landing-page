import { TRUST_ITEMS } from "@/constants/data";

export default function TrustBar() {
  // Triple the items to ensure no gaps on very wide screens or during fast scrolls
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <section className="bg-gold py-3 md:py-5 overflow-hidden border-y border-gold-dark/30 relative">
      <div className="flex items-center">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {items.map((t, i) => (
            <span
              key={i}
              className="text-charcoal font-bold text-[10px] xs:text-xs md:text-base mx-4 md:mx-10 inline-flex items-center gap-2 md:gap-4 uppercase tracking-widest sm:tracking-tighter lg:tracking-widest"
            >
              <span className="text-charcoal/40 text-xs md:text-xl">✦</span>
              {t}
            </span>
          ))}
        </div>

        {/* Duplicate set for seamless looping coverage */}
        <div className="flex animate-marquee whitespace-nowrap aria-hidden:true will-change-transform">
          {items.map((t, i) => (
            <span
              key={`dup-${i}`}
              className="text-charcoal font-bold text-[10px] xs:text-xs md:text-base mx-4 md:mx-10 inline-flex items-center gap-2 md:gap-4 uppercase tracking-widest sm:tracking-tighter lg:tracking-widest"
            >
              <span className="text-charcoal/40 text-xs md:text-xl">✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
