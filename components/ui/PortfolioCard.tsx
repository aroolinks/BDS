type PortfolioCardProps = {
  title: string;
  category: string;
  accent: string;
};

export default function PortfolioCard({
  title,
  category,
  accent,
}: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
      <div
        className="relative h-72 overflow-hidden bg-gradient-to-br p-6"
        style={{ backgroundImage: accent }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          {category}
        </div>
        <div className="absolute bottom-5 left-5 rounded-[20px] bg-white/10 px-4 py-3 text-sm font-medium text-white/80 backdrop-blur">
          Case Study
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/60">
          Premium digital direction, conversion-focused UX, and polished brand execution.
        </p>
      </div>
    </article>
  );
}
