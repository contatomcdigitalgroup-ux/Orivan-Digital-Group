import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Produção de Vídeos",
  description: "Produção de vídeos profissionais para engajar seu público e aumentar suas vendas.",
};

export default function VideosPage() {
  const service = getServiceBySlug("videos");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
