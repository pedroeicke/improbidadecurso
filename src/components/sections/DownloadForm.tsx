"use client";

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Download, FileText } from 'lucide-react';

const STATES = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const ORGS = [
    "Prefeitura",
    "Câmara Municipal",
    "Órgão Estadual",
    "Órgão Federal",
    "Outros"
];

export function DownloadForm() {
    const [captcha, setCaptcha] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (captcha !== "2") {
            alert("Verificação incorreta. Quanto é 1 + 1?");
            return;
        }
        setLoading(true);

        // Trigger the actual download
        const link = document.createElement('a');
        link.href = '/3° Seminário Nacional de Contratações Públicas - Abril 2026.pdf';
        link.download = '3° Seminário Nacional de Contratações Públicas - Abril 2026.pdf';
        document.body.appendChild(link);

        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
            setLoading(false);
        }, 1000);
    };

    return (
        <section className="py-20 lg:py-24 bg-black relative overflow-hidden" style={{ backgroundImage: 'url(/bgaa.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1930f9]/30 rounded-full blur-[100px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBB03B]/20 text-[#FBB03B] border border-[#FBB03B]/30 backdrop-blur-md">
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium">Material Exclusivo</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-sequel-medium text-white leading-tight">
                            Baixe o Folder <br /> <span className="text-[#FBB03B]">Completo do Evento</span>
                        </h2>
                        <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg font-light">
                            Tenha acesso a todos os detalhes técnicos, programação detalhada hora a hora, currículo completo dos palestrantes e informações de investimento.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                <FileText className="w-6 h-6 text-[#FBB03B]" />
                                <div>
                                    <p className="text-sm font-bold text-white">PDF Completo</p>
                                    <p className="text-xs text-white/50">Versão Atualizada</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#FBB03B]"></div>

                        <h3 className="text-2xl font-bold mb-2 text-white font-sequel-medium">Preencha seus dados</h3>
                        <p className="text-white/50 text-sm mb-8">Download imediato após o preenchimento.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Nome Completo *</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white placeholder-white/20" placeholder="Seu nome" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Email Corporativo *</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white placeholder-white/20" placeholder="seu@email.com" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Estado *</label>
                                    <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white max-h-40 [&>option]:bg-slate-900">
                                        <option value="">UF</option>
                                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Cidade *</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white placeholder-white/20" placeholder="Cidade" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Órgão Representante</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white [&>option]:bg-slate-900">
                                    <option value="">Selecione o tipo</option>
                                    {ORGS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">Quanto é 1 + 1? *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#1930f9] focus:bg-white/10 focus:ring-1 focus:ring-[#1930f9] outline-none transition-all text-white placeholder-white/20"
                                    placeholder="Responda o número"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                />
                            </div>

                            <Button
                                fullWidth
                                size="lg"
                                className="mt-2 bg-[#FBB03B] hover:bg-[#FBB03B]/90 text-black border-none font-bold py-6 rounded-xl shadow-lg shadow-[#FBB03B]/20"
                                disabled={loading}
                            >
                                {loading ? "Baixando..." : "BAIXAR AGORA"}
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
