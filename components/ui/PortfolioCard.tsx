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
    <article className="group overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-white">
      <div
        className="relative h-72 overflow-hidden bg-gradient-to-br p-6"
        style={{ backgroundImage: accent }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4),transparent)]" />
        <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#111111] backdrop-blur">
          {category}
        </div>
        <div className="absolute bottom-5 left-5 rounded-[20px] bg-white/90 px-4 py-3 text-sm font-medium text-[#111111] backdrop-blur">
          Case Study
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#111111]">{title}</h3>
        <p className="mt-2 text-sm text-[#666666]">
          Premium digital direction, conversion-focused UX, and polished brand execution.
        </p>
      </div>
    </article>
  );
}
