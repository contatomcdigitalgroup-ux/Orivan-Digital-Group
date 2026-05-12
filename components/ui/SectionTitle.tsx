interface SectionTitleProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({ tag, title, description, centered = false }: SectionTitleProps) {
  const align = centered ? "text-center items-center" : "";

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {tag && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4ADE80]">
          {tag}
        </span>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
