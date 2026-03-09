import type { Metadata } from 'next';
import GsapVisibilityFix from '@/components/improbidade/GsapVisibilityFix';
import ImpHero from '@/components/improbidade/ImpHero';
import ImpAbout from '@/components/improbidade/ImpAbout';
import ImpDiferenciais from '@/components/improbidade/ImpDiferenciais';
import ImpProgram from '@/components/improbidade/ImpProgram';
import ImpSpeakers from '@/components/improbidade/ImpSpeakers';
import ImpLocation from '@/components/improbidade/ImpLocation';
import ImpTestimonials from '@/components/improbidade/ImpTestimonials';
import ImpInstitutions from '@/components/improbidade/ImpInstitutions';
import ImpGallery from '@/components/improbidade/ImpGallery';
import ImpKit from '@/components/improbidade/ImpKit';
import ImpInvestment from '@/components/improbidade/ImpInvestment';
import ImpFolderForm from '@/components/improbidade/ImpFolderForm';
import ImpFooter from '@/components/improbidade/ImpFooter';

export const metadata: Metadata = {
  title: 'Imersão Nova Lei de Improbidade Administrativa | Plenum Brasil',
  description:
    'Imersão presencial sobre a Nova Lei de Improbidade Administrativa na Prática do STF, STJ e TSE. 14 e 15 de maio de 2026, Brasília/DF. Com Min. Teodoro Santos Silva, Min. Paulo Sérgio Domingues e Dr. Igor Pereira Pinheiro.',
  keywords: [
    'improbidade administrativa',
    'lei 14.230',
    'STF',
    'STJ',
    'TSE',
    'curso improbidade',
    'plenum brasil',
    'imersão jurídica',
    'direito administrativo',
  ],
  openGraph: {
    title: 'Imersão Nova Lei de Improbidade Administrativa | Plenum Brasil',
    description:
      'Imersão presencial com ministros do STJ e promotor do MPCE. 14 e 15 de maio de 2026, Brasília/DF. 16h de carga horária.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function ImprobidadeAdministrativaPage() {
  return (
    <main className="improbidade-page overflow-x-hidden" style={{ background: '#030d1f' }}>
      <GsapVisibilityFix />
      <ImpHero />
      <ImpAbout />
      <ImpDiferenciais />
      <ImpProgram />
      <ImpSpeakers />
      <ImpFolderForm />
      <ImpLocation />
      <ImpTestimonials />
      <ImpInstitutions />
      <ImpGallery />
      <ImpKit />
      <ImpInvestment />
      <ImpFooter />
    </main>
  );
}
