import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Orivan Digital Group. Solicite um orçamento ou tire suas dúvidas.",
};

export default function ContatoPage() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              tag="Contato"
              title="Vamos conversar sobre seu projeto"
              description="Preencha o formulário ou entre em contato diretamente pelos nossos canais."
            />
            <div className="mt-8 flex flex-col gap-4 text-sm">
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                <span className="text-lg">✉️</span>
                {company.email}
              </a>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                <span className="text-lg">💬</span>
                WhatsApp
              </a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                <span className="text-lg">📸</span>
                Instagram
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
