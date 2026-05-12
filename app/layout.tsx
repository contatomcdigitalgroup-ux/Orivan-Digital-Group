import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orivan Digital Group | Agência Digital",
    template: "%s | Orivan Digital Group",
  },
  description:
    "Agência digital especializada em Landing Pages, Sites Institucionais, Softwares, IA & Automações e Produção de Vídeos.",
  metadataBase: new URL("https://orivandigital.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Orivan Digital Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
