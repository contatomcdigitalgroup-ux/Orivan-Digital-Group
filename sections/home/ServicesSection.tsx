import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <Container>
        <SectionTitle
          tag="O que fazemos"
          title="Nossas Soluções Digitais"
          description="Do planejamento à entrega, oferecemos soluções completas para fazer sua empresa crescer no digital."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
