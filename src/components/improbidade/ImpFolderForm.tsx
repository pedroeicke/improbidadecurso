'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const estados = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA',
  'PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
];

export default function ImpFolderForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    estado: '',
    cidade: '',
    orgao: '',
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.folder-anim',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://modelolpcursoplenum.vercel.app/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          form_type: 'folder',
          course_id: '09c14df3-1292-48b6-81a4-9a9f125849a8',
        }),
      });
    } catch {
      // fail silently
    }
    setSubmitted(true);
    window.open('/folder-improbidade.pdf', '_blank');
  };

  const inputClasses =
    'w-full px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white text-base placeholder:text-white/25 focus:outline-none focus:border-blue-500/40 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all';

  return (
    <section ref={sectionRef} id="folder" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#030d1f' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/4 blur-[150px]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="folder-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest w-fit mb-6">
              <Download className="w-4 h-4" />
              Material Exclusivo
            </div>

            <h2 className="folder-anim text-3xl sm:text-5xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-5">
              <span className="bg-gradient-to-b from-white via-white/90 to-white/55 bg-clip-text text-transparent">Baixe o Folder</span>
              <br />
              <span className="text-white/40">Completo do Evento</span>
            </h2>

            <p className="folder-anim text-white/50 text-base lg:text-lg leading-relaxed max-w-[480px] mb-8">
              Tenha acesso a programação detalhada, currículo completo dos palestrantes e informações sobre o investimento.
            </p>

            <div className="folder-anim inline-flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl w-fit hover:border-blue-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base">PDF Completo</span>
                <span className="text-white/40 text-sm">Versão Atualizada</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:w-1/2 w-full folder-anim">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl scale-105 pointer-events-none bg-blue-500/[0.04]" />

              <div className="relative rounded-3xl p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-colors">
                {submitted ? (
                  <div className="text-center py-16 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Enviado com sucesso!</h3>
                    <p className="text-white/50 text-base max-w-[280px]">O folder será aberto em uma nova aba.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">Preencha seus dados</h3>
                      <p className="text-white/40 text-base">Download imediato após o preenchimento.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="text-white text-xs font-bold tracking-widest block mb-2">Nome Completo *</label>
                        <input type="text" name="nome" required value={form.nome} onChange={handleChange} placeholder="Seu nome" className={inputClasses} />
                      </div>
                      <div>
                        <label className="text-white text-xs font-bold tracking-widest block mb-2">WhatsApp *</label>
                        <input type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" className={inputClasses} />
                      </div>
                      <div>
                        <label className="text-white text-xs font-bold tracking-widest block mb-2">Email Corporativo *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="seu@email.com" className={inputClasses} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-white text-xs font-bold tracking-widest block mb-2">Estado *</label>
                          <select name="estado" required value={form.estado} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                            <option value="" className="bg-[#030d1f]">UF</option>
                            {estados.map((uf) => (
                              <option key={uf} value={uf} className="bg-[#030d1f]">{uf}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-white text-xs font-bold tracking-widest block mb-2">Cidade *</label>
                          <input type="text" name="cidade" required value={form.cidade} onChange={handleChange} placeholder="Cidade" className={inputClasses} />
                        </div>
                      </div>
                      <div>
                        <label className="text-white text-xs font-bold tracking-widest block mb-2">Órgão Representante</label>
                        <select name="orgao" value={form.orgao} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                          <option value="" className="bg-[#030d1f]">Selecione o tipo</option>
                          <option value="Prefeitura" className="bg-[#030d1f]">Prefeitura</option>
                          <option value="Camara" className="bg-[#030d1f]">Câmara Municipal</option>
                          <option value="Governo Estadual" className="bg-[#030d1f]">Governo Estadual</option>
                          <option value="Outro" className="bg-[#030d1f]">Outro</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3b82f6] hover:bg-[#60a5fa] text-white text-base font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        Baixar Agora
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
