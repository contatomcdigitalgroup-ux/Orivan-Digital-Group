import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessStep from "@/components/shared/ProcessStep";

const steps = [
  { title: "Reunião de Briefing", description: "Entendemos seu negócio, objetivos e público-alvo em uma conversa focada." },
  { title: "Planejamento Estratégico", description: "Definimos escopo, cronograma e entregáveis com clareza." },
  { title: "Design & Desenvolvimento", description: "Criamos e construímos com atualizações periódicas para você acompanhar." },
  { title: "Revisão & Ajustes", description: "Você aprova cada etapa antes de avançarmos." },
  { title: "Entrega & Suporte", description: "Publicamos e permanecemos disponíveis para o que precisar." },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#10141B]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <SectionTitle
            tag="Como trabalhamos"
            title="Processo Transparente do Início ao Fim"
            description="Seguimos um processo estruturado para garantir que cada projeto seja entregue no prazo, dentro do orçamento e com qualidade excepcional."
          />
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <ProcessStep key={step.title} number={i + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
