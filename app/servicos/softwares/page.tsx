import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Softwares",
  description: "Desenvolvimento de softwares customizados para automatizar e escalar seu negócio.",
};

export default function SoftwaresPage() {
  const service = getServiceBySlug("softwares");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
