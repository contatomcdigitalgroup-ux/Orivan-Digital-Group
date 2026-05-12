import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentials } from "@/data/company";

export default function DifferentialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <Container>
        <SectionTitle
          tag="Por que a Orivan"
          title="O que nos diferencia"
          centered
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff) => (
            <div key={diff.title} className="p-5 border border-gray-200 rounded-xl">
              <h3 className="font-semibold text-gray-900">{diff.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
