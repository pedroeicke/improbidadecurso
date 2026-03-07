'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Antonio Anastasia',
    role: 'Ministro do Tribunal de Contas da União',
    image: '/fotosdep/anastasia.png',
    quote: 'Eu defendo, como professor que sou, a permanente capacitação nas mais diversas áreas. No momento em que o Instituto Plenum faz um evento como esse nos temos que aplaudir.',
  },
  {
    name: 'Benjamin Zymler',
    role: 'Ministro do Tribunal de Contas da União',
    image: '/fotosdep/zymler.png',
    quote: 'Capacitar gestores públicos não é um diferencial — é um requisito de governança. Em um ambiente de crescente complexidade normativa e de maior rigor no controle, a formação contínua fortalece decisões, reduz riscos, melhora a qualidade do serviço e protege a Administração Pública.',
  },
  {
    name: 'Carlos Velloso',
    role: 'Ministro do TSE',
    image: '/fotosdep/carlos.png',
    quote: 'O Instituto ao promover a capacitação dos agentes públicos sobre o que pode e não pode fazer no período de eleição é de grande utilidade pública.',
  },
  {
    name: 'Jarbas Soares',
    role: 'Ex Procurador-Geral de Justiça de Minas Gerais',
    image: '/fotosdep/jarbas.png',
    quote: 'O gestor tem que se qualificar, preparar para gerir equipes competentes. O Instituto Plenum já adquiriu expertise e credibilidade.',
  },
];

export default function ImpTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.test-header', {
        scrollTrigger: { trigger: '.test-header', start: 'top 80%', once: true },
        y: 50, opacity: 0, duration: 0.8,
      });
      gsap.from('.test-card', {
        scrollTrigger: { trigger: '.test-grid', start: 'top 80%', once: true },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/4 blur-[150px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="test-header mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-tight leading-none text-white">
            Veja quem já esteve aqui
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="test-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="test-card relative pt-10">
              {/* Photo — overlapping top of card */}
              <div className="absolute top-0 left-6 z-10">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-900/30">
                  <Image src={t.image} alt={t.name} width={72} height={72} className="object-cover" />
                </div>
              </div>

              {/* Card */}
              <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 pt-12 flex flex-col hover:border-blue-500/20 transition-colors duration-300">
                {/* Quote */}
                <p className="text-white/60 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{t.name}</p>
                  <p className="text-blue-400/60 text-[11px] font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
