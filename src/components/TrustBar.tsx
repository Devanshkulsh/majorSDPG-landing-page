import { TRUST_ITEMS } from "@/constants/data";
export default function TrustBar() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <section className="bg-gold py-5 overflow-hidden border-y-2 border-gold-dark">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="text-charcoal font-semibold text-sm md:text-base mx-8 inline-flex items-center gap-3 uppercase tracking-wider">
            <span className="text-charcoal/60">✦</span> {t}
          </span>
        ))}
      </div>
    </section>
  );
}
