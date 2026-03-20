'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImpFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-logo', {
        scrollTrigger: { trigger: '.footer-logo', start: 'top 90%', once: true },
        y: 30, opacity: 0, duration: 0.6,
      });
      gsap.from('.footer-contact', {
        scrollTrigger: { trigger: '.footer-contact', start: 'top 90%', once: true },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1,
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative border-t border-white/5" style={{ background: '#020b18' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Logo */}
          <div className="footer-logo flex flex-col items-center lg:items-start gap-4">
            <Image
              src="/logo-plenum-aberta2.png"
              alt="Instituto Plenum Brasil"
              width={160}
              height={44}
              className="brightness-0 invert opacity-50 hover:opacity-70 transition-opacity duration-300"
            />
            <p className="text-sm text-white/20 text-center lg:text-left max-w-xs">
              Referência em capacitação e desenvolvimento de gestores públicos no Brasil.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
            <div className="footer-contact flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                <Phone className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white text-base font-bold">(31) 2531-1750</p>
                <p className="text-white/30 text-sm">(61) 3142-0868</p>
              </div>
            </div>

            <div className="footer-contact flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-white text-base font-bold">cursos@plenumbrasil.com.br</p>
            </div>

            <div className="footer-contact flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                <Globe className="w-4 h-4 text-blue-400" />
              </div>
              <a
                href="https://plenumbrasil.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-base font-bold hover:text-blue-300 transition-colors"
              >
                plenumbrasil.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/15 tracking-[0.2em]">
            &copy; 2026 Instituto Plenum Brasil. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/15 tracking-[0.2em] hover:text-white/30 transition-colors">
              Site desenvolvido por Pastel Apps
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5 text-white/30" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
