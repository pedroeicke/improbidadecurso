'use client';

import { useCallback, useEffect, useRef } from 'react';
import { BookOpen, Scale, Search, ShieldCheck, MessageSquare, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: BookOpen, title: 'Atualização sobre a Legislação e suas Mudanças Práticas', description: 'Panorama objetivo do que mudou e do que foi consolidado a partir da Lei 14.230/2021.' },
  { icon: Scale, title: 'Compreensão do Novo Desenho Jurídico', description: 'Leitura estruturada dos conceitos, requisitos e limites atualmente vigentes na improbidade administrativa.' },
  { icon: Search, title: 'Análise dos Precedentes do STF, STJ e TSE', description: 'Seleção comentada dos entendimentos mais relevantes, por temas e efeitos vinculantes.' },
  { icon: ShieldCheck, title: 'Interpretação Objetiva dos Institutos Centrais', description: 'Foco em critérios jurídicos e dogmáticos para compreensão e aplicação adequada.' },
  { icon: MessageSquare, title: 'Debate Qualificado sobre Reflexos Eleitorais', description: 'Aprofundamento didático das conexões com o Direito Eleitoral e contencioso eleitoral.' },
  { icon: FileText, title: 'Referências Técnicas para Jurisprudência', description: 'Organização de fontes e parâmetros para atualização e acompanhamento permanente.' },
];

function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className || ''}`}
    >
      {children}
    </div>
  );
}

export default function ImpDiferenciais() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.diff-header', {
        scrollTrigger: { trigger: '.diff-header', start: 'top 80%', once: true },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.diff-card', {
        scrollTrigger: { trigger: '.diff-grid', start: 'top 75%', once: true },
        y: 60, opacity: 0, rotateX: 15, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        transformOrigin: 'bottom center',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="diff-header mb-16 text-center">
          <h2
            className="text-4xl lg:text-5xl font-light tracking-tight leading-snug max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #9ca3af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            O novo cenário da improbidade exige clareza sobre conceitos, requisitos e entendimentos consolidados.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="diff-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <SpotlightCard
                key={card.title}
                className="diff-card group rounded-[20px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-7 hover:border-[#3b82f6]/30 hover:bg-[#3b82f6]/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg uppercase mb-3 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed group-hover:text-white/60 transition-colors">
                    {card.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
