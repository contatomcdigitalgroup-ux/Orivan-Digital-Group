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
    primary: "bg-[#4ADE80] text-[#0B0F14] hover:bg-[#66FF99]",
    secondary: "bg-[#4ADE80] text-[#0B0F14] hover:bg-[#66FF99]",
    outline: "border border-white/20 text-[#D1D5DB] hover:border-white/40 hover:text-white",
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
