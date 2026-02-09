"use client";

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Instagram, Linkedin, UserCheck } from 'lucide-react';

const SPEAKERS = [
    {
        name: "Teodoro Silva Santos",
        role: "Ministro do Superior Tribunal de Justiça (STJ)",
        bio: "Doutor em Direito Constitucional (UNIFOR), com pós-doutorado pela Universidade do Minho – Portugal. Atua como Ministro do STJ, integrando a segunda turma, especializada em Direito Público, além de ser professor e autor de obras jurídicas.",
        image: "/prof/teodoro.jpg",
    },
    {
        name: "Antonio Anastasia",
        role: "Ministro do Tribunal de Contas da União (TCU)",
        bio: "Bacharel em Direito (UFMG) e Mestre em Direito Administrativo (UFMG). Foi Professor de Direito Administrativo da Faculdade de Direito da UFMG entre 1993 e 2022. Atuou como Governador do Estado de Minas Gerais (2010–2014), Vice-Governador (2007–2010) e Senador da República por Minas Gerais (2015–2022). Exerceu ainda os cargos de Secretário-Executivo dos Ministérios do Trabalho e da Justiça, Secretário de Estado em diversas pastas do Governo de Minas Gerais e Presidente da Fundação João Pinheiro.",
        image: "/prof/anastasia.jpg",
    },
    {
        name: "Benjamin Zymler",
        role: "Ministro do Tribunal de Contas da União (TCU)",
        bio: "Coordenador do Fórum de Infraestrutura da Fundação Getúlio Vargas (FGV Conhecimento) e membro da FGV Justiça. É graduado em Engenharia Elétrica pelo Instituto Militar de Engenharia (IME) e em Direito pela Universidade de Brasília (UnB), pela qual também é Mestre em Direito e Estado. Atuou como Conselheiro do Tribunal de Contas do Distrito Federal, Procurador-Geral do Ministério Público junto ao TCDF e Juiz do Tribunal Regional do Trabalho da 10ª Região.",
        image: "/prof/zymler.jpg",
    },
    {
        name: "Cristina Fortini",
        role: "Professora Doutora pela UFMG",
        bio: "Doutora em Direito pela UFMG. Professora do Mestrado, Doutorado e Graduação da Faculdade de Direito da UFMG. Foi Presidente do IBDA e do IMDA, além de Procuradora-Geral Adjunta e Controladora-Geral do Município de Belo Horizonte. Atua como representante de Minas Gerais no IDASAN e diretora do IBEJI/MG.",
        image: "/prof/cristina.jpg",
    },
    {
        name: "Jorge Ulisses Jacoby Fernandes",
        role: "Doutrinador e Mestre em Direito",
        bio: "Mestre em Direito Público e Professor de Direito Administrativo. Atuou como Conselheiro do Tribunal de Contas do Distrito Federal, Procurador-Geral do Ministério Público junto ao TCDF e Juiz do Tribunal Regional do Trabalho da 10ª Região. É escritor, consultor e palestrante, com ampla produção acadêmica em Direito Administrativo, publicada nas principais revistas jurídicas do país, além de atuar como conselheiro editorial da Editora Fórum e consultor do Banco Mundial.",
        image: "/prof/jorge.jpg",
    },
    {
        name: "Christianne Stroppa",
        role: "Professora Doutora e Mestre pela PUC-SP",
        bio: "Doutora e Mestre pela PUC/SP, advogada e consultora em Licitações e Contratos Administrativos, ex-Assessora de Gabinete no TCM/SP, professora convidada de pós-graduações, autora e palestrante na área da contratação pública, membro do IBDA, IDAP, IASP, INCP e IDASAN.",
        image: "/prof/stroppa.jpg",
    },
    {
        name: "José Roberto Tiossi Junior",
        role: "Mestre em Direito",
        bio: "Advogado. Mestre em Direito. Professor convidado de Licitações e Contratos em cursos de Pós-graduação. Diretor do IPDA - Instituto Paranaense de Direito Administrativo. Fundador do Portal Licitações Municipais.",
        image: "/prof/tiossi.jpg",
    },
    {
        name: "Viviane Mafissoni",
        role: "Advocacia Geral da União (AGU)",
        bio: "Especialista em Direito Público, com formação em Alta Liderança pela FDC e estudos em Combate à Corrupção nas Contratações Públicas pela Universidade de Lisboa, atua como Diretora de Comunicação e RP do INCP_BR e Coordenadora-Geral de Logística da AGU, sendo advogada, professora de pós-graduação, autora e palestrante em contratações públicas, além de membra consultora da OAB/DF.",
        image: "/prof/viviane.jpg",
    },
    {
        name: "Pedro Azevedo",
        role: "Auditor de Controle Externo do TCE/MG",
        bio: "Mestre em Administração Pública pela Fundação João Pinheiro e pós-graduado em Direito Público, Analista de Controle Externo do TCE/MG, ex-Coordenador de Fiscalização da Macrogestão Governamental, advogado e professor nas áreas de Orçamento Público, Direito Financeiro e Direito Administrativo.",
        image: "/prof/pedro.jpg",
    },
    {
        name: "Eduardo Grossi",
        role: "Procurador do Estado de Minas Gerais",
        bio: "Mestre em Direito e Administração Pública pela UFMG. Procurador Chefe da Central de Compras da Secretaria de Estado de Planejamento e Gestão de Minas Gerais - SEPLAG. Professor MBA em Concessões e Parcerias da PUC Minas.",
        image: "/prof/grossi.jpg",
    },
    {
        name: "Igor Pereira Pinheiro",
        role: "Promotor de Justiça do MPCE",
        bio: "Doutorando, Mestre e Especialista em Ciências Jurídico-Políticas pela Universidade de Lisboa, com pós-graduação em Licitações e Contratos Administrativos, professor e palestrante de Escolas do MP e da Magistratura, ex-Coordenador do GAPEL/CE e integrante do GAEP/MPCE, além de Coordenador Editorial do Grupo Mizuno nas áreas de Direito Administrativo, Anticorrupção e Eleitoral.",
        image: "/prof/igor.jpg",
    },
    {
        name: "Carlos Tiago J. de Azevedo",
        role: "Presidente do Instituto MG",
        bio: "Especialista em Administração Pública e mestrando em Direito (FDSM). Sociólogo e cientista político, com mais de 18 anos de experiência em gestão pública municipal e mais de 3.500 horas de palestras. Foi Secretário de Planejamento e Desenvolvimento Econômico e é professor da PUC-MG na área de Gestão e Captação de Recursos.",
        image: "/prof/carlos.jpg",
    },
    {
        name: "Raquel Carvalho",
        role: "Procuradora do Estado de Minas Gerais",
        bio: "Mestre em Direito Administrativo pela Faculdade de Direito da UFMG, Professora de Direito Administrativo, Palestrante e autora de livros.",
        image: "/prof/raquel.jpg",
    },
    {
        name: "Antônio Lima",
        role: "Professor Especialista",
        bio: "Servidor público desde 2010, com atuação como Pregoeiro e Diretor-Geral de Licitações, engenheiro de produção, pós-graduando em Licitações e Contratos, professor e palestrante, criador da página Licitação da Depressão (@licitacaodadepressao) e conteudista do ConLicitação e da Bolsa Nacional de Compras.",
        image: "/prof/antonio.png",
    },
    {
        name: "Raphael Rodrigues",
        role: "Professor Doutor pela UFMG",
        bio: "Doutor e Mestre em Direito pela UFMG, Professor de Direito Administrativo da UFMG, do Programa de Pós-Graduação da Escola Superior Dom Helder Câmara e do Instituto Plenum Brasil. Atuou como Consultor-Geral de Técnica Legislativa do Estado de Minas Gerais e é advogado e sócio do escritório Cavalcanti Lembi, Azevedo e Rodrigues Advogados.",
        image: "/prof/rapahel.jpg",
    },
    {
        name: "Andryu Lemos",
        role: "Mestre em Administração Pública (IDP)",
        bio: "Mestre em Administração Pública pelo IDP, é advogado e especialista em Planejamento e Gestão Pública (Universidade de Pernambuco). Consultor e professor, com atuação consolidada em gestão pública, parcerias e concessões, licitações e contratos, gestão jurídica no setor público e execução orçamentária e financeira, sendo autor de publicações em periódicos e obras voltadas à área de contratações públicas.",
        image: "/prof/andryu.png",
    },
];

export function Speakers() {
    const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

    return (
        <section className="relative pt-[70px] pb-20 lg:pb-32 bg-white overflow-hidden" id="palestrantes">
            <Container className="relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                        <UserCheck className="w-5 h-5 text-[#3b82f6]" />
                        <span className="text-black font-bold tracking-widest uppercase text-xs font-inter">
                            APRENDA COM QUEM FAZ ACONTECER
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-sequel-medium text-black mb-6 uppercase">
                        Palestrantes <br /> Confirmados
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-start gap-x-[15px] gap-y-[22px]">
                    {SPEAKERS.map((speaker, index) => {
                        const isExpanded = expandedIndices.has(index);

                        return (
                            <div
                                key={index}
                                className={`w-[357px] ${isExpanded ? 'h-auto' : 'min-h-[680px]'} flex-none group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 border border-gray-100`}
                            >
                                {/* Image Container */}
                                <div className="h-[315px] relative overflow-hidden bg-gray-100 flex-none">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Name Bar */}
                                <div className="bg-gradient-to-r from-[#1930f9] to-[#001b85] p-5 relative z-10 w-full min-h-[85px] flex flex-col justify-center flex-none">
                                    <h3 className="text-base font-semibold text-white uppercase font-inter mb-1 leading-tight tracking-wide line-clamp-2">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-white/70 text-xs font-light">{speaker.role}</p>
                                </div>

                                {/* Content Body */}
                                <div className="flex-1 p-6 pb-8 flex flex-col bg-white">
                                    {/* Tag */}
                                    <div className="mb-3 flex-none">
                                        <span className="inline-block px-4 py-1 border border-[#FBB03B] text-[#FBB03B] bg-[#FBB03B]/10 text-[10px] font-bold uppercase rounded-full">
                                            Palestrante
                                        </span>
                                    </div>

                                    {/* Bio */}
                                    <div className="flex-1">
                                        <p className={`text-gray-600 text-[13px] leading-relaxed font-inter ${isExpanded ? '' : 'line-clamp-4'}`}>
                                            {speaker.bio}
                                        </p>
                                    </div>

                                    {/* Ver Mais/Menos Button */}
                                    <button
                                        onClick={() => {
                                            setExpandedIndices(prev => {
                                                const next = new Set(prev);
                                                if (isExpanded) {
                                                    next.delete(index);
                                                } else {
                                                    next.add(index);
                                                }
                                                return next;
                                            });
                                        }}
                                        className="mt-4 text-[#3b82f6] text-[11px] font-bold uppercase tracking-widest hover:underline flex-none text-left"
                                    >
                                        {isExpanded ? 'Ver Menos' : 'Ver Mais'}
                                    </button>

                                    {/* Footer: Socials + Logo */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-none mt-4">
                                        <div className="flex gap-4">
                                            <a href="#" className="bg-transparent text-gray-400 hover:text-blue-600 transition-colors p-1">
                                                <Instagram className="h-5 w-5" />
                                            </a>
                                            <a href="#" className="bg-transparent text-gray-400 hover:text-blue-700 transition-colors p-1">
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        </div>
                                        <div className="font-bold text-gray-300 text-xl uppercase tracking-tighter flex items-center gap-1">
                                            <span className="text-blue-600">●</span> sncp
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="w-[357px] flex-none" aria-hidden="true" />
                    <div className="w-[357px] flex-none" aria-hidden="true" />
                </div>
            </Container>
        </section>
    );
}
