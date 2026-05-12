import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça os projetos desenvolvidos pela Orivan Digital Group. Sites, landing pages, softwares e muito mais.",
};

const projects = [
  { title: "Odonto Kapri", category: "Site Institucional", description: "Site completo para clínica odontológica com agendamento e portfólio de serviços." },
  { title: "Maria Julia", category: "Landing Page", description: "Landing page de alta conversão para profissional autônoma." },
  { title: "Íris Odontológica", category: "Site Institucional", description: "Presença digital completa para clínica odontológica especializada." },
  { title: "Anadelli", category: "Landing Page", description: "Landing page para profissional da saúde com foco em captação de pacientes." },
  { title: "CRM SaaS", category: "Software", description: "Sistema CRM desenvolvido sob medida para gestão de clientes." },
  { title: "Moodflix SaaS", category: "Software", description: "Plataforma de recomendação de filmes com IA integrada." },
  { title: "Calendário Automático", category: "IA & Automações", description: "Automação de postagens em redes sociais com planejamento inteligente." },
  { title: "Construtor de Quiz", category: "Software", description: "Ferramenta de criação de quizzes interativos para geração de leads." },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            tag="Portfólio"
            title="Projetos que geram resultados"
            description="Conheça alguns dos projetos que desenvolvemos para nossos clientes."
          />
        </Container>
      </section>

      <section className="py-4 pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Quer fazer parte do nosso portfólio?</h2>
            <p className="mt-3 text-gray-600">Entre em contato e vamos conversar sobre o seu projeto.</p>
            <div className="mt-6">
              <CTAButton href="/contato" variant="primary">Solicitar Orçamento</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
