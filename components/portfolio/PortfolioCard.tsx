interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageAlt?: string;
}

export default function PortfolioCard({ title, category, description, imageAlt }: PortfolioCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm">{imageAlt ?? title}</span>
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {category}
        </span>
        <h3 className="mt-1 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
