import Container from "@/components/ui/Container";
import { founder } from "@/data/company";

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-900 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-6 flex items-center justify-center text-2xl">
            👤
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-100">
            &ldquo;Acreditamos que toda empresa, independente do tamanho, merece ter presença digital de qualidade. Essa é a missão da Orivan.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-white">{founder.name}</p>
            <p className="text-sm text-gray-400">{founder.role}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
