"use client";

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MapPin, ArrowRight, ArrowUpRight, Download, Users, FileText } from 'lucide-react';
import SpeakerVerticalCarousel from '../ui/SpeakerVerticalCarousel';
import SpeakerHorizontalCarousel from '../ui/SpeakerHorizontalCarousel';

export function Hero() {
    return (
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
            {/* ... background elements ... */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/fundohero.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3 z-0"></div>

            <Container className="relative z-10 h-full flex flex-col justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8 pt-10">

                        {/* Main Headline - Logo */}
                        <div className="relative">
                            <img
                                src="/logoevento.png"
                                alt="Seminário Nacional de Contratações Públicas"
                                className="w-full max-w-[85vw] lg:max-w-[600px] h-auto object-contain"
                            />
                        </div>

                        {/* Date and Location */}
                        <div className="pt-4 border-l-4 border-[#FCBC2A] pl-6">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white font-sequel-medium leading-tight uppercase">
                                15, 16 e 17 de Abril
                            </h2>
                            <p className="text-white font-bold mt-2 uppercase text-lg tracking-wide">
                                Belo Horizonte - MG
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-400 max-w-lg font-inter font-light leading-relaxed">
                            O evento consolidado como referência para gestores. Debate técnico e estratégico em um ambiente imersivo e inovador.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                            <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#FBB03B] hover:bg-[#e09b35] text-white border-none rounded-full px-6 py-6 lg:px-12 lg:py-8 text-base lg:text-lg font-medium shadow-[0_0_20px_rgba(251,176,59,0.3)] hover:shadow-[0_0_40px_rgba(251,176,59,0.5)] transition-all tracking-wide">
                                Garantir meu lugar <ArrowUpRight className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-white/20 text-white hover:bg-white/5 rounded-full px-6 py-6 lg:px-8 lg:py-8 text-xs lg:text-base backdrop-blur-sm transition-all hover:border-white/50 uppercase font-bold tracking-wider">
                                Baixar o Folder <Download className="h-4 w-4" />
                            </Button>
                        </div>

                    </div>

                    {/* Right: Vertical Carousel - Hidden on mobile */}
                    <div className="hidden lg:flex absolute top-0 right-0 lg:right-0 h-full items-start justify-end pt-0">
                        {/* Glow behind carousel */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-50 blur-3xl pointer-events-none rounded-full"></div>
                        <SpeakerVerticalCarousel />
                    </div>

                </div>

                {/* Bottom Info Section: Cards */}
                <div className="mt-8 lg:mt-24 grid grid-cols-2 md:flex md:flex-row gap-3 lg:gap-[25px]">
                    <div className="flex flex-col justify-between p-4 lg:p-6 rounded-[20px] lg:rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md w-full md:w-[276px] h-full min-h-[140px] md:h-[155px] flex-none hover:bg-white/10 transition-colors">
                        <Users className="h-5 w-5 lg:h-6 lg:w-6 text-white mb-2 md:mb-0" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-[10px] lg:text-base font-bold text-white font-sequel-medium uppercase tracking-wide leading-tight mb-1">
                                NETWORKING
                            </h3>
                            <p className="text-[9px] lg:text-xs text-white/90 font-inter leading-relaxed hidden sm:block">
                                Conecte-se com líderes,<br /> creators e marcas do mercado.
                            </p>
                            <p className="text-[9px] lg:text-xs text-white/90 font-inter leading-relaxed sm:hidden">
                                Conecte-se com líderes do mercado.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-4 lg:p-6 rounded-[20px] lg:rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md w-full md:w-[276px] h-full min-h-[140px] md:h-[155px] flex-none hover:bg-white/10 transition-colors">
                        <FileText className="h-5 w-5 lg:h-6 lg:w-6 text-white mb-2 md:mb-0" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-[10px] lg:text-base font-bold text-white font-sequel-medium uppercase tracking-wide leading-tight mb-1">
                                CONTEÚDO PRÁTICO
                            </h3>
                            <p className="text-[9px] lg:text-xs text-white/90 font-inter leading-relaxed hidden sm:block">
                                Workshops e painéis hands-on<br /> para você sair com tudo em ação.
                            </p>
                            <p className="text-[9px] lg:text-xs text-white/90 font-inter leading-relaxed sm:hidden">
                                Workshops e painéis hands-on.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Speaker Carousel - Below Bottom Cards */}
                <div className="lg:hidden w-full mt-8 overflow-hidden max-w-[calc(100vw-2rem)]">
                    <SpeakerHorizontalCarousel />
                </div>
            </Container>
        </section >
    );
}
