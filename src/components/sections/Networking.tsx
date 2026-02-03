
import React from 'react';
import { Container } from '../ui/Container';
import {
    Users,
    Gavel,
    Scale,
    PieChart,
    ClipboardCheck,
    ShieldCheck,
    Building2,
    Landmark,
    BookOpen,
    Briefcase
} from 'lucide-react';

const AUDIENCE_LIST = [
    { label: "Agentes de contratação e membros das comissões", icon: Users },
    { label: "Pregoeiros e equipes de apoio", icon: Gavel },
    { label: "Assessores jurídicos e contadores", icon: Scale },
    { label: "Ordenadores de despesa", icon: PieChart },
    { label: "Fiscais e gestores de contratos", icon: ClipboardCheck },
    { label: "Servidores do controle interno e Tribunais de Contas", icon: ShieldCheck },
    { label: "Agentes públicos em geral", icon: Building2 },
    { label: "Prefeitos, secretários municipais e vereadores", icon: Landmark },
    { label: "Assessores legislativos", icon: BookOpen },
    { label: "Fornecedores e prestadores de serviço", icon: Briefcase }
];

export function Networking() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-[#030303] relative overflow-hidden" id="publico-alvo">

            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-16 text-center px-4">
                <div className="inline-block mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#FBB03B] uppercase border border-[#FBB03B]/30 px-3 py-1 rounded-full bg-[#FBB03B]/10">
                        QUEM DEVE PARTICIPAR
                    </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-sequel-medium font-normal text-white uppercase leading-none tracking-tight mb-4">
                    Público <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB03B] to-[#FCBC2A]">Alvo</span>
                </h2>
                <div className="h-1 w-24 bg-[#FBB03B] rounded-full shadow-[0_0_20px_rgba(251,176,59,0.5)]" />
            </div>

            {/* Floating Pills Layout - Full Width */}
            <div className="px-4 lg:px-16 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-3 lg:gap-4">
                    {AUDIENCE_LIST.map((item, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Pill Container */}
                            <div className="relative w-full max-w-full px-4 py-3 lg:px-6 lg:py-4 rounded-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#FBB03B]/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,176,59,0.2)] cursor-pointer overflow-hidden">


                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FBB03B]/0 via-[#FBB03B]/10 to-[#FBB03B]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative flex items-center gap-2 lg:gap-3">
                                    <div className="flex-none w-8 h-8 lg:w-8 lg:h-8 rounded-full bg-[#FBB03B]/10 border border-[#FBB03B]/30 text-[#FBB03B] flex items-center justify-center group-hover:bg-[#FBB03B]/20 group-hover:border-[#FBB03B]/50 transition-all duration-300">
                                        <item.icon className="w-4 h-4 lg:w-4 lg:h-4" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-medium text-sm lg:text-base whitespace-normal text-left leading-tight transition-colors duration-300">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
