import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyCountdown } from "@/components/ui/StickyCountdown";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "3º Seminário Nacional de Contratações Públicas",
    template: "%s | 3º Seminário Nacional de Contratações Públicas"
  },
  description: "O maior evento de contratações públicas. Debate técnico e estratégico em um ambiente imersivo e inovador. 15, 16 e 17 de Abril em Belo Horizonte.",
  keywords: ["Contratações Públicas", "Seminário", "Licitações", "Gestão Pública", "Administração", "Direito Administrativo", "Belo Horizonte", "Plenum"],
  authors: [{ name: "Grupo Plenum" }],
  creator: "Grupo Plenum",
  publisher: "Grupo Plenum",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "3º Seminário Nacional de Contratações Públicas",
    description: "O maior evento de contratações públicas. Debate técnico e estratégico em um ambiente imersivo e inovador. 15, 16 e 17 de Abril.",
    url: "https://seminarionacionalcp.com.br",
    siteName: "3º Seminário Nacional CP",
    images: [
      {
        url: "/fundohero.png", // Fallback image, ideally should be a specific OG image
        width: 1200,
        height: 630,
        alt: "3º Seminário Nacional de Contratações Públicas",
      },
      {
        url: "/logoevento.png",
        width: 800,
        height: 600,
        alt: "Logo Seminário",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3º Seminário Nacional de Contratações Públicas",
    description: "O maior evento de contratações públicas. 15 a 17 de Abril em BH.",
    images: ["/fundohero.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className="font-inter antialiased bg-black text-white selection:bg-[#FBB03B] selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <StickyCountdown />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
