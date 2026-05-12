import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentials } from "@/data/company";

export default function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#10141B]">
      <Container>
        <SectionTitle
          tag="Por que a Orivan"
          title="O que nos diferencia"
          centered
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((diff) => (
            <div key={diff.title} className="p-6 bg-[#0B0F14] border border-white/[0.08] rounded-xl hover:border-white/20 transition-colors">
              <h3 className="font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>{diff.title}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
