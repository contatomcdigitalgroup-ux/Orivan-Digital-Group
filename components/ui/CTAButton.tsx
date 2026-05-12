import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-700",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
