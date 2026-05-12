import Link from "next/link";

const services = [
  { label: "Landing Pages", href: "/servicos/landing-pages" },
  { label: "Sites Institucionais", href: "/servicos/sites-institucionais" },
  { label: "Softwares", href: "/servicos/softwares" },
  { label: "IA & Automações", href: "/servicos/ia-automacoes" },
  { label: "Produção de Vídeos", href: "/servicos/videos" },
];

const company = [
  { label: "Sobre", href: "/sobre" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10141B] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-bold text-xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Orivan<span className="text-[#4ADE80]">.</span>
            </Link>
            <p className="mt-4 text-sm text-[#9CA3AF] leading-relaxed max-w-xs">
              Agência digital focada em resultados. Transformamos ideias em soluções digitais que geram valor real.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5">Empresa</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Orivan Digital Group. Todos os direitos reservados.</p>
          <p>Desenvolvido com dedicação para entregar o melhor.</p>
        </div>
      </div>
    </footer>
  );
}
