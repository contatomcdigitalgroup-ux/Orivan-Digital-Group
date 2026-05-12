import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça todas as soluções digitais da Orivan Digital Group: Landing Pages, Sites Institucionais, Softwares, IA & Automações e Produção de Vídeos.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle
              tag="Serviços"
              title="Soluções digitais para cada etapa do seu negócio"
              description="Oferecemos um ecossistema completo de serviços digitais. Do design ao desenvolvimento, da automação à produção de conteúdo."
            />
          </div>
        </Container>
      </section>

      <section className="py-4 pb-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
