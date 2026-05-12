import CTAButton from "@/components/ui/CTAButton";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#0B0F14]">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ADE80]">
            Agência Digital Premium
          </span>
          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
            {company.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
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
