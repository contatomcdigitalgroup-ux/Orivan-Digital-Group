import CTAButton from "@/components/ui/CTAButton";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Agência Digital
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {company.tagline}
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">
            {company.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contato" variant="primary">
              Fale Conosco
            </CTAButton>
            <CTAButton href="/portfolio" variant="outline">
              Ver Portfólio
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
