interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageAlt?: string;
}

export default function PortfolioCard({ title, category, description, imageAlt }: PortfolioCardProps) {
  return (
    <div className="group bg-[#10141B] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/20 transition-all">
      <div className="aspect-video bg-[#161B22] flex items-center justify-center">
        <span className="text-[#9CA3AF] text-sm">{imageAlt ?? title}</span>
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4ADE80]">
          {category}
        </span>
        <h3 className="mt-1 font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>{title}</h3>
        <p className="mt-1 text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
