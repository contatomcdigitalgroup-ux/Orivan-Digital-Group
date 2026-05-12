export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "landing-pages",
    shortTitle: "Landing Pages",
    title: "Landing Pages que Convertem",
    description: "Páginas de alta conversão desenvolvidas para transformar visitantes em clientes. Design estratégico, copy persuasivo e performance otimizada.",
    icon: "📄",
    href: "/servicos/landing-pages",
    problem: "Muitas empresas investem em tráfego mas não conseguem converter visitantes em clientes. O problema está em páginas que não comunicam valor de forma clara e objetiva.",
    solution: "Desenvolvemos landing pages estratégicas com foco em conversão: estrutura persuasiva, design limpo e otimização para dispositivos móveis.",
    benefits: [
      "Alta taxa de conversão",
      "Design responsivo e moderno",
      "Carregamento ultra-rápido",
      "Integração com ferramentas de marketing",
      "Copy estratégico e persuasivo",
    ],
    process: [
      { title: "Briefing", description: "Entendemos seu produto, público-alvo e objetivos de conversão." },
      { title: "Estratégia", description: "Definimos estrutura, copy e elementos de prova social." },
      { title: "Design", description: "Criamos o visual focado na jornada do usuário." },
      { title: "Desenvolvimento", description: "Implementamos com foco em performance e SEO." },
      { title: "Entrega & Suporte", description: "Publicamos e acompanhamos os primeiros resultados." },
    ],
    faq: [
      { question: "Quanto tempo leva para criar uma landing page?", answer: "Em média 7 a 14 dias úteis, dependendo da complexidade." },
      { question: "Vocês fazem integração com ferramentas de email marketing?", answer: "Sim, integramos com as principais ferramentas como Mailchimp, ActiveCampaign e RD Station." },
    ],
  },
  {
    slug: "sites-institucionais",
    shortTitle: "Sites Institucionais",
    title: "Sites Institucionais Profissionais",
    description: "Sites completos que representam sua empresa com profissionalismo. Estrutura escalável, SEO avançado e gestão de conteúdo.",
    icon: "🏢",
    href: "/servicos/sites-institucionais",
    problem: "Um site desatualizado ou mal estruturado passa desconfiança e afasta clientes potenciais antes mesmo do primeiro contato.",
    solution: "Desenvolvemos sites institucionais modernos, rápidos e seguros que transmitem autoridade e credibilidade para sua empresa.",
    benefits: [
      "Design profissional e moderno",
      "SEO técnico avançado",
      "Painel de administração intuitivo",
      "Performance otimizada",
      "Segurança e LGPD",
    ],
    process: [
      { title: "Diagnóstico", description: "Analisamos o mercado, concorrência e objetivos." },
      { title: "Arquitetura", description: "Planejamos a estrutura de páginas e navegação." },
      { title: "Design", description: "Desenvolvemos o visual seguindo a identidade da empresa." },
      { title: "Desenvolvimento", description: "Construímos com Next.js para máxima performance." },
      { title: "Publicação", description: "Deploy, configuração de domínio e treinamento." },
    ],
    faq: [
      { question: "O site terá painel para editar conteúdo?", answer: "Sim, integramos com CMS headless para facilitar atualizações." },
      { question: "Vocês fazem manutenção após a entrega?", answer: "Oferecemos planos de manutenção mensal conforme necessidade." },
    ],
  },
  {
    slug: "softwares",
    shortTitle: "Softwares",
    title: "Desenvolvimento de Softwares",
    description: "Sistemas web e aplicativos sob medida para automatizar e escalar seus processos internos com eficiência.",
    icon: "💻",
    href: "/servicos/softwares",
    problem: "Processos manuais consomem tempo, geram erros e impedem o crescimento. Ferramentas genéricas não atendem necessidades específicas do seu negócio.",
    solution: "Desenvolvemos softwares customizados que resolvem exatamente o problema do seu negócio, com escalabilidade e segurança.",
    benefits: [
      "Solução 100% personalizada",
      "Integração com sistemas existentes",
      "Escalável e seguro",
      "Suporte técnico dedicado",
      "Código limpo e documentado",
    ],
    process: [
      { title: "Levantamento", description: "Mapeamos todos os requisitos e fluxos do sistema." },
      { title: "Prototipagem", description: "Criamos wireframes e validamos com o cliente." },
      { title: "Desenvolvimento", description: "Construção iterativa com entregas parciais." },
      { title: "Testes", description: "QA completo antes de cada entrega." },
      { title: "Deploy", description: "Publicação e treinamento da equipe." },
    ],
    faq: [
      { question: "Qual tecnologia vocês utilizam?", answer: "Next.js, Node.js, TypeScript e bancos de dados como PostgreSQL ou MongoDB conforme o projeto." },
      { question: "Vocês fazem manutenção contínua?", answer: "Sim, oferecemos contratos de manutenção e evolução do software." },
    ],
  },
  {
    slug: "ia-automacoes",
    shortTitle: "IA & Automações",
    title: "IA & Automações Inteligentes",
    description: "Automatize tarefas repetitivas e implemente inteligência artificial para ganhar produtividade e vantagem competitiva.",
    icon: "🤖",
    href: "/servicos/ia-automacoes",
    problem: "Tarefas repetitivas consomem tempo valioso da equipe. A falta de automação limita o crescimento e aumenta custos operacionais.",
    solution: "Implementamos automações e soluções de IA que eliminam trabalho manual, aceleram processos e geram insights estratégicos.",
    benefits: [
      "Redução de trabalho manual",
      "Menor margem de erro",
      "Respostas automatizadas 24/7",
      "Integração com seus sistemas",
      "Relatórios e analytics automáticos",
    ],
    process: [
      { title: "Mapeamento", description: "Identificamos processos que podem ser automatizados." },
      { title: "Estratégia", description: "Definimos as ferramentas e fluxos ideais." },
      { title: "Implementação", description: "Configuramos e desenvolvemos as automações." },
      { title: "Teste", description: "Validamos em ambiente controlado." },
      { title: "Ativação", description: "Go-live com acompanhamento próximo." },
    ],
    faq: [
      { question: "Que tipo de automações vocês desenvolvem?", answer: "Chatbots, automação de e-mail, integrações entre plataformas, geração de relatórios, e muito mais." },
      { question: "Preciso ter conhecimento técnico?", answer: "Não. Entregamos tudo configurado e treinamos sua equipe." },
    ],
  },
  {
    slug: "videos",
    shortTitle: "Produção de Vídeos",
    title: "Produção de Vídeos Profissionais",
    description: "Vídeos institucionais, de vendas e conteúdo que engajam e convertem. Roteiro, captação e edição profissional.",
    icon: "🎬",
    href: "/servicos/videos",
    problem: "Conteúdo em vídeo domina as redes sociais e aumenta a conversão, mas produzir vídeos com qualidade profissional exige expertise e equipamento.",
    solution: "Produzimos vídeos estratégicos que comunicam o valor da sua marca de forma visual e envolvente, aumentando engajamento e vendas.",
    benefits: [
      "Roteiro estratégico",
      "Qualidade cinematográfica",
      "Edição profissional",
      "Adaptado para cada plataforma",
      "Entrega em prazo ágil",
    ],
    process: [
      { title: "Briefing", description: "Entendemos o objetivo e o público do vídeo." },
      { title: "Roteiro", description: "Criamos um roteiro estratégico e persuasivo." },
      { title: "Produção", description: "Captação com equipamento profissional." },
      { title: "Edição", description: "Montagem, motion e trilha sonora." },
      { title: "Entrega", description: "Arquivos otimizados para cada plataforma." },
    ],
    faq: [
      { question: "Vocês fazem vídeos para redes sociais?", answer: "Sim, produzimos para Instagram, YouTube, TikTok e outras plataformas." },
      { question: "Vocês fazem a captação ou somente a edição?", answer: "Fazemos tanto captação completa quanto edição de materiais já gravados." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
