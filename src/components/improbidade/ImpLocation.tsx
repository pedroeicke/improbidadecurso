'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Phone, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImpLocation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loc-label', {
        scrollTrigger: { trigger: '.loc-label', start: 'top 85%', once: true },
        y: 20, opacity: 0, duration: 0.5,
      });
      gsap.from('.loc-title', {
        scrollTrigger: { trigger: '.loc-title', start: 'top 85%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.loc-desc', {
        scrollTrigger: { trigger: '.loc-desc', start: 'top 85%', once: true },
        y: 30, opacity: 0, duration: 0.7,
      });
      gsap.from('.loc-card', {
        scrollTrigger: { trigger: '.loc-cards', start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.2)',
      });
      gsap.from('.loc-phone', {
        scrollTrigger: { trigger: '.loc-phones', start: 'top 85%', once: true },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1,
      });
      gsap.from('.loc-map', {
        scrollTrigger: { trigger: '.loc-map', start: 'top 85%', once: true },
        y: 60, opacity: 0, scale: 0.97, duration: 1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="local" className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/4 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left — Info */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            {/* Label */}
            <div className="loc-label flex items-center gap-2 tracking-[0.2em] text-base font-bold text-blue-400">
              <MapPin className="w-4 h-4" />
              <span>Localização</span>
            </div>

            {/* Title */}
            <h2 className="loc-title text-3xl sm:text-4xl lg:text-[72px] font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">
                Onde vai ser
              </span>
            </h2>

            {/* Description */}
            <p className="loc-desc text-white/40 text-base lg:text-lg leading-relaxed max-w-lg">
              Um espaço de excelência em Brasília preparado para receber os maiores especialistas do país com conforto, infraestrutura completa e acessibilidade.
            </p>

            {/* Cards */}
            <div className="loc-cards space-y-3">
              {/* Address */}
              <div className="loc-card flex items-start gap-4 p-5 rounded-2xl border border-transparent bg-transparent hover:border-blue-500/20 hover:bg-blue-500/[0.04] transition-all duration-300 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#3b82f6] text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Sede Plenum Brasil</h3>
                  <p className="text-white/40 leading-relaxed text-base">
                    Setor Comercial Sul, Quadra 6, Bloco A<br />
                    Brasília / DF
                  </p>
                </div>
              </div>

              {/* Hotel */}
              <div className="loc-card flex items-start gap-4 p-5 rounded-2xl border border-transparent bg-transparent hover:border-blue-500/20 hover:bg-blue-500/[0.04] transition-all duration-300 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#3b82f6] text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Hospedagem Parceira</h3>
                  <p className="text-white/40 leading-relaxed text-base">
                    Solicite a lista de hotéis parceiros com tarifas especiais para participantes de cursos do Instituto Plenum Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="loc-phones pt-4 flex flex-col sm:flex-row gap-6 border-t border-white/[0.06]">
              <div className="loc-phone flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/30 tracking-wider mb-0.5">Informações</p>
                  <a href="tel:3125311750" className="font-bold text-white text-base hover:text-blue-400 transition-colors">(31) 2531-1750</a>
                </div>
              </div>
              <div className="loc-phone flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/30 tracking-wider mb-0.5">Atendimento</p>
                  <a href="tel:6131420868" className="font-bold text-white text-base hover:text-blue-400 transition-colors">(61) 3142-0868</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="loc-map lg:w-1/2 h-[380px] lg:h-[480px] w-full rounded-3xl overflow-hidden relative border border-white/[0.08] shadow-[0_0_60px_rgba(0,0,0,0.5)] order-1 lg:order-2 group">
            {/* Hover glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.396!2d-47.8825!3d-15.7939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b38e0e9c5e7%3A0x2ef16bcaf1df24e7!2sSetor%20Comercial%20Sul%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030d1f]/60 via-transparent to-transparent pointer-events-none" />

              {/* Glass label */}
              <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <div className="bg-white/[0.08] backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/[0.15] shadow-2xl">
                  <p className="text-white font-bold text-base">Sede Plenum Brasil — Brasília/DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
