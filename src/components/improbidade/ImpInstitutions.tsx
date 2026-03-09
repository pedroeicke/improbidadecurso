'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const logos = [
  { src: '/logos instituicoes/1.png', alt: 'Instituição 1' },
  { src: '/logos instituicoes/2.png', alt: 'Instituição 2' },
  { src: '/logos instituicoes/3.png', alt: 'Instituição 3' },
  { src: '/logos instituicoes/4.png', alt: 'Instituição 4' },
  { src: '/logos instituicoes/5.png', alt: 'Instituição 5' },
];

export default function ImpInstitutions() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: -totalWidth });
    const tween = gsap.to(track, {
      x: 0,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 relative overflow-hidden bg-[#030d1f]">
      {/* Neon line top */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r w-1/2 mx-auto from-transparent via-blue-500/50 to-transparent blur-sm" />
      {/* Neon line bottom */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r w-1/2 mx-auto from-transparent via-blue-500/50 to-transparent blur-sm" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Left — text */}
        <div className="shrink-0 md:w-[320px] text-center md:text-left">
          <h3 className="text-3xl md:text-[32px] font-extrabold tracking-tight leading-snug bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Instituições Que Já<br />Se Capacitaram Conosco
          </h3>
        </div>

        {/* Right — carousel with shadow fade */}
        <div className="relative flex-1 overflow-hidden w-full">
          {/* Shadow coming from left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030d1f] to-transparent z-10 pointer-events-none" />
          {/* Shadow fading on right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030d1f] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track — duplicated for seamless loop */}
          <div ref={trackRef} className="flex items-center gap-14 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-36 w-72 flex items-center justify-center opacity-50 grayscale"
              >
                <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
