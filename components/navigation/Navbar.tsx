"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Landing Pages", href: "/servicos/landing-pages" },
      { label: "Sites Institucionais", href: "/servicos/sites-institucionais" },
      { label: "Softwares", href: "/servicos/softwares" },
      { label: "IA & Automações", href: "/servicos/ia-automacoes" },
      { label: "Produção de Vídeos", href: "/servicos/videos" },
    ],
  },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight">
            Orivan<span className="text-blue-600">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contato"
              className="ml-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Fale Conosco
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {links.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contato"
              className="mt-2 px-4 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
