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
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
