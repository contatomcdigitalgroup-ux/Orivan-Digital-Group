import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-sm transition-all"
    >
      {icon && <span className="text-2xl mb-4 block">{icon}</span>}
      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600">
        Saiba mais
        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
