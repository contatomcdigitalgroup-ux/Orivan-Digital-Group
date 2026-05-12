import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Landing Pages",
  description: "Criamos landing pages de alta conversão que transformam visitantes em clientes.",
};

export default function LandingPagesPage() {
  const service = getServiceBySlug("landing-pages");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
