'use client';

import { useEffect, useRef } from 'react';
import { Users, Scale, Landmark, Gavel, GraduationCap, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  { icon: Users, label: 'Agentes públicos em geral' },
  { icon: Scale, label: 'Advogados e Assessores Jurídicos' },
  { icon: Landmark, label: 'Procuradores de municípios e estados' },
  { icon: Gavel, label: 'Promotores de Justiça' },
  { icon: Briefcase, label: 'Magistrados' },
  { icon: GraduationCap, label: 'Pós-graduandos de Direito Administrativo e Eleitoral' },
];

export default function ImpAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: { trigger: '.about-title', start: 'top 85%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 85%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.15,
      });
      gsap.from('.about-info', {
        scrollTrigger: { trigger: '.about-info', start: 'top 85%', once: true },
        y: 20, opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)',
      });
      gsap.from('.audience-card', {
        scrollTrigger: { trigger: '.audience-grid', start: 'top 75%', once: true },
        y: 40, opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.08, ease: 'back.out(1.2)',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/4 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <div>
            <h2 className="about-title text-4xl lg:text-[72px] font-bold tracking-tight leading-none mb-8">
              <span className="block bg-gradient-to-b from-white via-white/80 to-gray-400 bg-clip-text text-transparent">
                Apresentação
              </span>
            </h2>

            <div className="space-y-4 text-white/45 text-base lg:text-lg leading-relaxed">
              <p className="about-text">
                A imersão <strong className="text-white/80">Nova Lei de Improbidade Administrativa na Prática do STF, STJ e TSE</strong> foi
                estruturada para oferecer uma leitura atual, organizada e tecnicamente segura do novo cenário inaugurado pela
                Lei 14.230/2021, considerando a amplitude das mudanças e, principalmente, o que vem sendo efetivamente
                consolidado nas decisões dos Tribunais Superiores.
              </p>
              <p className="about-text">
                Ao longo dos módulos, o participante percorre os fundamentos da tutela da probidade, o redesenho dos institutos centrais
                e a sistematização dos precedentes mais relevantes (STF, STJ e TSE — 2022 a 2026), com abordagem didática e foco em
                compreensão aplicada, inclusive sobre os reflexos eleitorais do tema.
              </p>
            </div>

          </div>

          {/* Right - Audience Cards */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#3b82f6] flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </span>
              <h3 className="text-2xl font-bold uppercase text-white tracking-tight">Para quem é?</h3>
            </div>
            <div className="audience-grid grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="audience-card group flex items-center gap-3 px-5 py-4 rounded-[20px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#3b82f6]/30 hover:bg-[#3b82f6]/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-white/70 text-base font-medium group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
