'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Check, ChevronDown, ArrowRight, Phone, CreditCard, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Acesso aos 2 dias de imersão presencial',
  'Kit do participante com Apostila física e Pasta personalizada',
  'Coffee break em todos os dias de evento',
  'Palestrantes renomados',
  'Carga horária de 16 horas aula',
];

function AnimatedPrice({ value, prefix = 'R$ ' }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(el, {
          textContent: 0,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate() {
            el.textContent = prefix + Number(el.textContent?.replace(/[^\d]/g, '') || 0).toLocaleString('pt-BR');
          },
          onComplete() {
            el.textContent = prefix + value.toLocaleString('pt-BR') + ',00';
          },
        });
      },
    });
  }, [value, prefix]);

  return <span ref={ref}>{prefix}{value.toLocaleString('pt-BR')},00</span>;
}

export default function ImpInvestment() {
  const [faqOpen, setFaqOpen] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFaq = (id: string) => setFaqOpen((prev) => (prev === id ? null : id));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.inv-header', {
        scrollTrigger: { trigger: '.inv-header', start: 'top 80%', once: true },
        y: 50, opacity: 0, duration: 0.8,
      });
      gsap.from('.inv-card', {
        scrollTrigger: { trigger: '.inv-card', start: 'top 80%', once: true },
        y: 60, opacity: 0, scale: 0.95, duration: 0.8, ease: 'back.out(1.5)',
      });
      gsap.from('.inv-payment', {
        scrollTrigger: { trigger: '.inv-payment', start: 'top 85%', once: true },
        y: 30, opacity: 0, duration: 0.6,
      });
      gsap.from('.inv-faq', {
        scrollTrigger: { trigger: '.inv-faq', start: 'top 85%', once: true },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="investimento" className="relative py-24 lg:py-32" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/4 blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="inv-header mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-tight leading-none bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">
            Investimento
          </h2>
        </div>

        {/* Pricing Card — seminario style */}
        <div className="inv-card relative group max-w-xl mx-auto mb-8">
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600/40 via-cyan-500/40 to-blue-600/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          <div className="relative bg-gradient-to-br from-[#0d2854]/80 to-[#030d1f] rounded-3xl p-8 border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Inscrição Presencial</h3>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-white/80 text-sm mb-1">Lote Promocional</p>
                  <p className="text-4xl font-bold text-white">
                    <AnimatedPrice value={2890} />
                  </p>
                  <p className="text-white/60 text-sm mt-1">Por Inscrição</p>
                </div>
                <div className="h-px bg-white/20" />
                <div>
                  <p className="text-white/80 text-sm mb-2">Valor Normal</p>
                  <p className="text-3xl font-bold text-white">R$ 3.790<span className="text-xl">,00</span></p>
                  <p className="text-white/60 text-sm mt-1">Por Inscrição</p>
                </div>
                <p className="text-xs text-white/50 italic">*Desconto para grupos a partir de 04 servidores do mesmo órgão</p>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-4">Incluso na inscrição</h4>
                <ul className="space-y-3">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90 text-sm">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=553125311750&text=Ol%C3%A1!%20Gostaria%20de%20me%20inscrever%20no%20curso%20de%20Improbidade%20Administrativa."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-auto"
              >
                <span className="w-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full py-4 text-lg font-bold uppercase tracking-wider backdrop-blur-sm transition-all group/btn">
                  Inscreva-se Agora <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Book section — outside the card */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-8 max-w-xl mx-auto">
          <div className="relative flex-shrink-0">
            {/* Soft white glow behind the book */}
            <div className="absolute inset-0 bg-white/[0.04] rounded-full blur-2xl scale-110" />
            <Image
              src="/imglivro.png"
              alt="Livro Nova Lei de Improbidade Administrativa Comentada"
              width={180}
              height={250}
              className="relative z-10 object-contain drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            />
          </div>
          <div>
            <h4 className="text-blue-400 font-bold text-lg uppercase tracking-wider mb-2">Nova Edição</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Os participantes receberão, como cortesia, um exemplar da 3ª edição do livro <strong className="text-white/90">Nova Lei de Improbidade Administrativa Comentada</strong>, do Dr. Igor Pinheiro.
            </p>
          </div>
        </div>

        {/* Payment methods */}
        <div className="inv-payment rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/30">Meios de Pagamento:</p>
                <p className="text-sm text-white/60">Boleto, Transferência, Cheque, Depósito, TED, PIX</p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=553125311750&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20pagamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              (31) 2531-1750
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {[
            {
              id: 'cancel',
              title: 'Política de Cancelamento',
              content: (
                <div className="space-y-2">
                  <p>Cancelamentos até <strong className="text-white">72 horas antes</strong> do evento terão reembolso integral.</p>
                  <p>No-show: taxa de <strong className="text-white">50% do valor</strong> da inscrição.</p>
                  <p>Substituição de participantes é permitida mediante comunicação prévia.</p>
                </div>
              ),
            },
            {
              id: 'company',
              title: 'Dados da Empresa',
              content: (
                <div className="space-y-1">
                  <p><strong className="text-white">Instituto Plenum Brasil</strong></p>
                  <p>CNPJ: 21.803.699/0001-50</p>
                  <p>Rua Espírito Santo, 1204 — 5° andar, Sala 504</p>
                  <p>Centro — Belo Horizonte/MG — CEP 30.160-031</p>
                  <p className="flex items-center gap-2 mt-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    (31) 2531-1750 / (31) 4003-4961
                  </p>
                  <p>cursos@plenumbrasil.com.br | instituto@plenumbrasil.com.br</p>
                </div>
              ),
            },
          ].map(({ id, title, content }) => (
            <div key={id} className="inv-faq rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden hover:border-white/[0.12] transition-colors">
              <button
                onClick={() => toggleFaq(id)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-white font-bold text-sm uppercase tracking-wider">{title}</span>
                <div className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${faqOpen === id ? 'rotate-180 bg-blue-500/10' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-white/40" />
                </div>
              </button>
              <div
                className="grid transition-all duration-500 ease-in-out"
                style={{ gridTemplateRows: faqOpen === id ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm text-white/40 leading-relaxed">
                    {content}
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
