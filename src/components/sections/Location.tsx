import React from 'react';
import { Container } from '../ui/Container';
import { MapPin, Phone, Building2 } from 'lucide-react';

export function Location() {
    return (
        <section className="py-20 bg-black border-t border-white/5 relative" id="local">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Info - Left Side */}
                    <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium">
                                <MapPin className="w-4 h-4 text-[#FBB03B]" />
                                <span className="text-[#FBB03B]">Localização Privilegiada</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white font-sequel-medium">Onde vai <span className="text-[#FBB03B]">ser</span></h2>
                            <p className="text-white/60 text-lg leading-relaxed font-light">
                                Um espaço de excelência preparado para receber os maiores especialistas do país com conforto e acessibilidade.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                <div className="w-12 h-12 rounded-2xl bg-[#FBB03B]/10 text-[#FBB03B] flex items-center justify-center shrink-0 group-hover:bg-[#FBB03B] group-hover:text-white transition-colors border border-[#FBB03B]/20">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl text-white">Faculdade de Direito da UFMG</h3>
                                    <p className="text-white/50 leading-relaxed font-light">
                                        Avenida João Pinheiro, 100 – Centro <br />
                                        Belo Horizonte / MG • CEP 30.130-180
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                <div className="w-12 h-12 rounded-2xl bg-[#FBB03B]/20 text-[#FBB03B] flex items-center justify-center shrink-0 group-hover:bg-[#FBB03B] group-hover:text-white transition-colors border border-[#FBB03B]/20">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl text-white">Hospedagem Parceira</h3>
                                    <p className="text-white/50 leading-relaxed font-light">
                                        Solicite a lista de hotéis parceiros com tarifas especiais para participantes de cursos do Instituto Plenum Brasil.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 flex flex-col sm:flex-row gap-6 border-t border-white/10">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#FBB03B]/10 flex items-center justify-center text-[#FBB03B] transition-all border border-[#FBB03B]/30">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider">Informações</p>
                                        <a href="tel:3125311776" className="font-bold text-white text-lg hover:text-[#FBB03B] transition-all">(31) 2531-1776</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#FBB03B]/10 flex items-center justify-center text-[#FBB03B] transition-all border border-[#FBB03B]/30">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider">Atendimento</p>
                                        <a href="tel:3140034961" className="font-bold text-white text-lg hover:text-[#FBB03B] transition-all">(31) 4003-4961</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed - Right Side */}
                    <div className="lg:w-1/2 h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative border border-white/10 order-1 lg:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9649262321777!2d-43.94151851384342!3d-19.925882790365527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e686e23e61%3A0xfb45aeef3d8c0cd4!2sFaculdade%20de%20Direito%20da%20UFMG!5e0!3m2!1spt-BR!2sbr!4v1769994180604!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        {/* Dark gradient overlay for better glass effect visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
                            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                <h3 className="text-xl font-bold font-sequel-medium text-white drop-shadow-lg">Auditório Central UFMG</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
