import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CTAButton from "@/components/ui/CTAButton";

const highlights = [
  { title: "Odonto Kapri", category: "Site Institucional", description: "Site completo para clínica odontológica com agendamento e portfólio de serviços." },
  { title: "Maria Julia", category: "Landing Page", description: "Landing page de alta conversão para profissional autônoma." },
  { title: "Íris Odontológica", category: "Site Institucional", description: "Presença digital completa para clínica odontológica especializada." },
];

export default function PortfolioHighlightSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionTitle
            tag="Portfólio"
            title="Projetos em Destaque"
          />
          <CTAButton href="/portfolio" variant="outline">
            Ver todos
          </CTAButton>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
