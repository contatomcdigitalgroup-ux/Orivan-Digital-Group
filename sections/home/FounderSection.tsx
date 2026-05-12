import Container from "@/components/ui/Container";
import { founder } from "@/data/company";

export default function FounderSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#161B22] border-y border-white/[0.06]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#10141B] border border-white/[0.08] mx-auto mb-8 flex items-center justify-center text-xl">
            👤
          </div>
          <blockquote
            className="text-xl sm:text-2xl font-medium leading-relaxed text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            &ldquo;Acreditamos que toda empresa, independente do tamanho, merece ter presença digital de qualidade. Essa é a missão da Orivan.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-white">{founder.name}</p>
            <p className="text-sm text-[#9CA3AF] mt-1">{founder.role}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
