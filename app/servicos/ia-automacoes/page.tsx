import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "IA & Automações",
  description: "Automatize processos e implemente inteligência artificial para ganhar produtividade.",
};

export default function IaAutomacoesPage() {
  const service = getServiceBySlug("ia-automacoes");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
