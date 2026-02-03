import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Networking } from "@/components/sections/Networking";

import { Speakers } from "@/components/sections/Speakers";
import { Schedule } from "@/components/sections/Schedule";
import { Themes } from "@/components/sections/Themes";
import { DownloadForm } from "@/components/sections/DownloadForm";
import { Location } from "@/components/sections/Location";
import { SocialProofVideo } from "@/components/sections/SocialProofVideo";
import { Investment } from "@/components/sections/Investment";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            "name": "3º Seminário Nacional de Contratações Públicas",
            "startDate": "2026-04-15T08:00:00",
            "endDate": "2026-04-17T18:00:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Expominas BH", // Assuming venue or generic BH based on Hero
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              }
            },
            "image": [
              "https://seminarionacionalcp.com.br/fundohero.png",
              "https://seminarionacionalcp.com.br/logoevento.png"
            ],
            "description": "O evento consolidado como referência para gestores. Debate técnico e estratégico em um ambiente imersivo e inovador.",
            "offers": {
              "@type": "Offer",
              "url": "https://seminarionacionalcp.com.br/#investimento",
              "availability": "https://schema.org/InStock"
            },
            "organizer": {
              "@type": "Organization",
              "name": "Grupo Plenum",
              "url": "https://seminarionacionalcp.com.br"
            }
          })
        }}
      />
      <Hero />
      <About />

      <Speakers />
      <Themes />
      <Schedule />
      <Networking />

      <DownloadForm />
      <Location />
      <SocialProofVideo />
      <Investment />
      <Footer />
    </main>
  );
}
