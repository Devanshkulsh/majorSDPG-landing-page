export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-sky text-xs font-semibold uppercase tracking-[0.3em] ${className}`}
    >
      <span className="h-px w-8 bg-sky" />
      {children}
      <span className="h-px w-8 bg-sky" />
    </div>
  );
}
