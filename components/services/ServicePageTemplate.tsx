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
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              {service.icon} {service.shortTitle}
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/contato" variant="primary">Solicitar Orçamento</CTAButton>
              <CTAButton href="/portfolio" variant="outline">Ver Projetos</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Problema */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle tag="O problema" title="Você já passou por isso?" />
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">{service.problem}</p>
          </div>
        </Container>
      </section>

      {/* Solução */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle tag="A solução" title="Como resolvemos" />
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">{service.solution}</p>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle tag="Benefícios" title="O que você recebe" />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Processo */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionTitle
              tag="Processo"
              title="Como trabalhamos neste serviço"
              description="Cada etapa é planejada para garantir qualidade e transparência do início ao fim."
            />
            <div className="flex flex-col gap-6">
              {service.process.map((step, i) => (
                <ProcessStep key={step.title} number={i + 1} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle tag="FAQ" title="Perguntas frequentes" />
          <div className="mt-8 flex flex-col gap-4 max-w-2xl">
            {service.faq.map((item) => (
              <div key={item.question} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Pronto para começar?</h2>
            <p className="mt-4 text-gray-400">
              Fale conosco e receba uma proposta personalizada para o seu projeto.
            </p>
            <div className="mt-8">
              <CTAButton href="/contato" variant="secondary">Solicitar Orçamento</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
