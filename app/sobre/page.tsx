import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { company, founder, differentials } from "@/data/company";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a Orivan Digital Group, nossa história, missão e os valores que guiam cada projeto.",
};

export default function SobrePage() {
  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle
              tag="Quem somos"
              title={`Sobre a ${company.name}`}
              description={company.description}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                tag="Fundador"
                title={founder.name}
              />
              <p className="mt-2 text-blue-600 font-medium">{founder.role}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{founder.bio}</p>
            </div>
            <div className="w-full aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              Foto do fundador
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            tag="Diferenciais"
            title="Por que escolher a Orivan?"
            centered
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentials.map((diff) => (
              <div key={diff.title} className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-semibold text-gray-900">{diff.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Vamos construir juntos?</h2>
            <p className="mt-4 text-gray-400">Entre em contato e descubra como podemos ajudar seu negócio.</p>
            <div className="mt-8">
              <CTAButton href="/contato" variant="secondary">Fale Conosco</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
