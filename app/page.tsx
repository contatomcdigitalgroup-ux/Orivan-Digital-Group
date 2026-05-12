import type { Metadata } from "next";
import HeroSection from "@/sections/home/HeroSection";
import ServicesSection from "@/sections/home/ServicesSection";
import AboutSection from "@/sections/home/AboutSection";
import FounderSection from "@/sections/home/FounderSection";
import DifferentialsSection from "@/sections/home/DifferentialsSection";
import PortfolioHighlightSection from "@/sections/home/PortfolioHighlightSection";
import ProcessSection from "@/sections/home/ProcessSection";
import CTASection from "@/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Orivan Digital Group | Agência Digital",
  description: "Agência digital especializada em Landing Pages, Sites Institucionais, Softwares, IA & Automações e Produção de Vídeos.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FounderSection />
      <DifferentialsSection />
      <PortfolioHighlightSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
