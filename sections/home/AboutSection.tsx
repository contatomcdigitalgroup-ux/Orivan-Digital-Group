import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0B0F14]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
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
              <div key={stat.label} className="p-6 bg-[#10141B] border border-white/[0.08] rounded-xl">
                <p
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-[#9CA3AF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
