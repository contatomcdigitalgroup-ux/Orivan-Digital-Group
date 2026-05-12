import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Sites Institucionais",
  description: "Sites institucionais profissionais que transmitem autoridade e credibilidade para sua empresa.",
};

export default function SitesInstitucionaisPage() {
  const service = getServiceBySlug("sites-institucionais");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
