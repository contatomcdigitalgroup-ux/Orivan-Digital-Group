import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { company } from "@/data/company";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem enrolação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CTAButton href="/contato" variant="secondary">
              Solicitar Orçamento
            </CTAButton>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
