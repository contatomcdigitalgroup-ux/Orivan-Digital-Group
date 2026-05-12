import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import ProcessStep from "@/components/shared/ProcessStep";
import { Service } from "@/data/services";

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#0B0F14]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4ADE80]">
              {service.icon} {service.shortTitle}
            </span>
            <h1
              className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-[#9CA3AF] leading-relaxed">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/contato" variant="primary">Solicitar Orçamento</CTAButton>
              <CTAButton href="/portfolio" variant="outline">Ver Projetos</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Problema */}
      <section className="py-18 bg-[#10141B]">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle tag="O problema" title="Você já passou por isso?" />
            <p className="mt-5 text-[#9CA3AF] leading-relaxed text-lg">{service.problem}</p>
          </div>
        </Container>
      </section>

      {/* Solução */}
      <section className="py-18 bg-[#0B0F14]">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle tag="A solução" title="Como resolvemos" />
            <p className="mt-5 text-[#9CA3AF] leading-relaxed text-lg">{service.solution}</p>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="py-18 bg-[#10141B]">
        <Container>
          <SectionTitle tag="Benefícios" title="O que você recebe" />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 p-4 bg-[#0B0F14] rounded-xl border border-white/[0.08]">
                <span className="text-[#4ADE80] font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-sm text-[#D1D5DB]">{benefit}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Processo */}
      <section className="py-18 bg-[#0B0F14]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <SectionTitle
              tag="Processo"
              title="Como trabalhamos neste serviço"
              description="Cada etapa é planejada para garantir qualidade e transparência do início ao fim."
            />
            <div className="flex flex-col gap-8">
              {service.process.map((step, i) => (
                <ProcessStep key={step.title} number={i + 1} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-18 bg-[#10141B]">
        <Container>
          <SectionTitle tag="FAQ" title="Perguntas frequentes" />
          <div className="mt-10 flex flex-col gap-4 max-w-2xl">
            {service.faq.map((item) => (
              <div key={item.question} className="p-5 bg-[#0B0F14] rounded-xl border border-white/[0.08]">
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-[#161B22] border-t border-white/[0.06]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Pronto para começar?
            </h2>
            <p className="mt-4 text-[#9CA3AF]">
              Fale conosco e receba uma proposta personalizada para o seu projeto.
            </p>
            <div className="mt-8">
              <CTAButton href="/contato" variant="primary">Solicitar Orçamento</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
