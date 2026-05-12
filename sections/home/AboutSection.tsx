import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              tag="Sobre nós"
              title={`Quem é a ${company.shortName}?`}
              description={company.description}
            />
            <div className="mt-8">
              <CTAButton href="/sobre" variant="outline">
                Conheça nossa história
              </CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "50+", label: "Projetos entregues" },
              { number: "100%", label: "Satisfação garantida" },
              { number: "3+", label: "Anos de mercado" },
              { number: "24h", label: "Suporte ativo" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
