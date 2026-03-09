'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const included = [
  'Acesso aos 2 dias de imersão presencial',
  'Kit do participante com Apostila física e Pasta personalizada',
  'Coffee break em todos os dias de evento',
  'Palestrantes renomados',
  'Carga horária de 16 horas aula',
];

export default function ImpKit() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.kit-text > *', {
        scrollTrigger: { trigger: '.kit-text', start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1,
      });
      gsap.from('.kit-check', {
        scrollTrigger: { trigger: '.kit-checks', start: 'top 80%', once: true },
        x: -30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030d1f] to-transparent z-20 pointer-events-none" />

      <div className="relative min-h-[500px] md:min-h-[600px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: "url('/improbidade/bg-vaga.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Product image overlaid on the right */}
        <div className="absolute right-[5%] bottom-0 hidden lg:flex items-end justify-center z-10 pointer-events-none">
          <Image
            src="/mochilaazul.png"
            alt="Kit do Participante — Mochila Plenum"
            width={750}
            height={600}
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center pt-16 pb-20 md:pt-20 md:pb-24 px-6 md:px-12">
          <div className="max-w-[1100px] mx-auto w-full">
            <div className="kit-text max-w-[550px]">
              {/* Title */}
              <h2 className="text-4xl sm:text-5xl md:text-[72px] font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent mb-4">
                Garanta a sua vaga
              </h2>

              {/* Subtitle */}
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                Invista na sua capacitação com acesso completo aos dias de imersão e material de apoio exclusivo.
              </p>

              {/* Label */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs uppercase font-bold tracking-widest mb-5">
                O que está incluso
              </span>

              {/* Items */}
              <div className="kit-checks flex flex-col gap-3.5 mb-8">
                {included.map((item) => (
                  <div key={item} className="kit-check flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#investimento"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3b82f6] hover:bg-[#60a5fa] text-white font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              >
                Ver Investimento
              </a>

              {/* Mobile product image */}
              <div className="lg:hidden mt-10 flex justify-center">
                <Image
                  src="/mochilaazul.png"
                  alt="Kit do Participante — Mochila Plenum"
                  width={400}
                  height={300}
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
