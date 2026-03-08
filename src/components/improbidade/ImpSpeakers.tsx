'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  {
    name: 'Dr. Igor Pereira Pinheiro',
    role: 'Promotor de Justiça do MPCE\nCoordenador da Imersão Improbidade Administrativa',
    subtitle: '',
    image: '/improbidade/speakers/igor-pinheiro.png',
    bio: 'Doutorando, Mestre e Especialista em Ciências Jurídico-Políticas pela Universidade de Lisboa, com pós-graduação em Licitações e Contratos Administrativos. Professor e palestrante de Escolas do MP e da Magistratura, ex-Coordenador do GAPEL/CE e integrante do GAEP/MPCE, além de Coordenador Editorial do Grupo Mizuno nas áreas de Direito Administrativo, Anticorrupção e Eleitoral.',
  },
  {
    name: 'Min. Teodoro Silva Santos',
    role: 'Ministro do Superior Tribunal de Justiça (STJ)',
    subtitle: '',
    image: '/improbidade/speakers/teodoro-santos.png',
    bio: 'Doutor em Direito Constitucional (UNIFOR), com pós-doutorado pela Universidade do Minho Portugal. Atua como Ministro do STJ, integrando a segunda turma, especializada em Direito Público, além de ser professor e autor de obras jurídicas.',
  },
  {
    name: 'Min. Paulo Sérgio Domingues',
    role: 'Ministro do Superior Tribunal de Justiça (STJ)',
    subtitle: '',
    image: '/improbidade/speakers/paulo-domingues.png',
    bio: 'Mestrado em Direito pela Johann Wolfgang Goethe Universität (Frankfurt am Main-Alemanha). Ministro do Superior Tribunal de Justiça, com vasta experiência em Direito Administrativo e Processual.',
  },
];

export default function ImpSpeakers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.speakers-header', {
        scrollTrigger: { trigger: '.speakers-header', start: 'top 80%', once: true },
        y: 50, opacity: 0, duration: 0.8,
      });
      gsap.from('.speaker-card', {
        scrollTrigger: { trigger: '.speakers-list', start: 'top 75%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="palestrantes" className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/4 blur-[150px]" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="speakers-header mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-tight leading-none bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">
            Palestrantes
          </h2>
        </div>

        {/* Stacked speaker cards (PDF page 8 layout) */}
        <div className="speakers-list flex flex-col gap-16">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="speaker-card relative">
              {/* Glass card */}
              <div className="relative rounded-3xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-md overflow-visible group hover:border-blue-500/20 transition-colors duration-500">
                {/* Background glow */}
                <div className="absolute -inset-2 rounded-3xl bg-[#3b82f6]/[0.03] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text content — left side with padding for image on desktop */}
                <div className="p-8 md:p-10 md:pr-[280px]">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1 whitespace-pre-line">
                    {speaker.role}
                  </p>
                  {speaker.subtitle && (
                    <p className="text-amber-400/70 text-xs font-semibold uppercase tracking-widest mb-5">
                      {speaker.subtitle}
                    </p>
                  )}
                  {!speaker.subtitle && <div className="mb-5" />}
                  <p className="text-white/45 text-sm leading-relaxed max-w-[520px]">
                    {speaker.bio}
                  </p>
                </div>

                {/* Photo — right side, head extends above card (desktop) */}
                <div className="hidden md:block absolute bottom-0 right-0 z-10">
                  <div
                    className="w-[240px] h-[280px] overflow-hidden"
                    style={{ borderRadius: '120px 120px 0 0' }}
                  >
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={240}
                      height={320}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 -z-10 blur-3xl bg-[#3b82f6]/8 scale-75" />
                </div>

                {/* Photo — mobile (centered) */}
                <div className="md:hidden flex justify-center px-8 pb-8">
                  <div className="w-[180px] h-[240px] rounded-t-full overflow-hidden border border-white/10">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={180}
                      height={240}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
