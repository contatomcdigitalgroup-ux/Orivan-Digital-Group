import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import { company } from "@/data/company";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0B0F14]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Pronto para transformar sua presença digital?
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-lg">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem enrolação.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <CTAButton href="/contato" variant="primary">
              Solicitar Orçamento
            </CTAButton>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border border-white/20 text-[#D1D5DB] hover:border-white/40 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
