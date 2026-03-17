import GsapVisibilityFix from '@/components/improbidade/GsapVisibilityFix';
import ImpHero from '@/components/improbidade/ImpHero';
import ImpAbout from '@/components/improbidade/ImpAbout';
import ImpDiferenciais from '@/components/improbidade/ImpDiferenciais';
import ImpProgram from '@/components/improbidade/ImpProgram';
import ImpSpeakers from '@/components/improbidade/ImpSpeakers';
import ImpFolderForm from '@/components/improbidade/ImpFolderForm';
import ImpLocation from '@/components/improbidade/ImpLocation';
import ImpTestimonials from '@/components/improbidade/ImpTestimonials';
import ImpInstitutions from '@/components/improbidade/ImpInstitutions';
import ImpGallery from '@/components/improbidade/ImpGallery';
import ImpKit from '@/components/improbidade/ImpKit';
import ImpInvestment from '@/components/improbidade/ImpInvestment';
import ImpFooter from '@/components/improbidade/ImpFooter';

export default function Home() {
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
