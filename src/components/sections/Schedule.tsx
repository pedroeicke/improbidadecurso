"use client";

"use client";

import React from 'react';
import { Container } from '../ui/Container';
import { Clock, Calendar, MessageSquare, Mic, Sparkles, Coffee, Ticket, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const DAYS_CONFIG = [
    { id: '15', label: '15 DE ABRIL', subLabel: 'QUARTA-FEIRA' },
    { id: '16', label: '16 DE ABRIL', subLabel: 'QUINTA-FEIRA' },
    { id: '17', label: '17 DE ABRIL', subLabel: 'SEXTA-FEIRA' },
];

const FULL_SCHEDULE = {
    '15': [
        { time: "12:00", title: "Início do credenciamento", type: "checkin" },
        { time: "13:30", title: "Abertura", type: "checkin" },
        { time: "14:00", title: "Palestra 1 - O futuro das compras públicas: o mercado digital e a ruptura do modelo tradicional", description: "Palestrante: Cristiana Fortini (MG)", type: "lecture" },
        { time: "15:00", title: "Palestra 2 - Pregão eletrônico, plataformas e IA: como o agente de contratação decide na era digital", description: "Palestrante: Antônio Lima (MG)", type: "lecture" },
        { time: "16:00", title: "Palestra 3 - Contratação direta: dispensa e inexigibilidade com segurança e celeridade", description: "Palestrante: José Roberto Tiossi Junior (PR)", type: "lecture" },
        { time: "17:00", title: "Palestra 4 - Sanções administrativas aplicáveis aos licitantes e contratados na Lei 14.133/21: como instruir o processo de aplicação de penalidades", description: "Palestrante: Viviane Mafissoni (DF)", type: "lecture" },
        { time: "18:00", title: "Encerramento do dia", type: "closing" },
    ],
    '16': [
        { time: "08:00", title: "Abertura", type: "checkin" },
        { time: "08:30", title: "Palestra 5 - Credenciamento: cabimento, modelos de gestão e critérios de seleção de fornecedor", description: "Palestrante: Raquel Carvalho (MG)", type: "lecture" },
        { time: "09:30", title: "Palestra 6 - SICX, mercados fluidos e o colapso da lógica tradicional de compras públicas", description: "Palestrante: Eduardo Grossi (MG)", type: "lecture" },
        { time: "10:45", title: "Palestra 7 - O olhar do Tribunal de Contas sobre os consórcios públicos: licitações, contratações diretas e atas de registro de preços", description: "Palestrante: Pedro Azevedo (MG)", type: "lecture" },
        { time: "12:00", title: "Intervalo para almoço", type: "break" },
        { time: "14:00", title: "Palestra 8 - Boas práticas de governança pública: os caminhos para efetiva implementação do compliance licitatório", description: "Palestrante: Igor Pereira Pinheiro (CE)", type: "lecture" },
        { time: "15:00", title: "Palestra 9 - Desafios da fase de planejamento e pontos de atenção para os agentes de contratação", description: "Palestrante: Jorge Ulisses Jacoby Fernandes (DF)", type: "lecture" },
        { time: "16:00", title: "Palestra 10 - O novo modelo de controle externo das contratações públicas frente às inovações na Lei 14.133/21, na visão do TCU", description: "Palestrante: Ministro Benjamin Zymler (DF)", type: "lecture" },
        { time: "17:00", title: "Palestra 11 - Parecer jurídico e análise de documentação com apoio de IA: produtividade com segurança jurídica", description: "Palestrante: Raphael Rodrigues (MG)", type: "lecture" },
    ],
    '17': [
        { time: "08:00", title: "Abertura", type: "checkin" },
        { time: "08:30", title: "Palestra 12 - O desafio da aplicação da Lei nº 14.133/2021: o descompasso entre a norma federal e a realidade dos entes públicos", description: "Palestrante: Carlos Tiago J. de Azevedo (MG)", type: "lecture" },
        { time: "09:10", title: "Palestra 13 - As controladorias como linhas de defesa das contratações públicas: um novo olhar sobre o sistema de Controle Interno", description: "Palestrante: Christianne Stroppa (SP)", type: "lecture" },
        { time: "10:10", title: "Palestra 14 - Entendimentos do STJ sobre ilícitos praticados pelos licitantes e contratados", description: "Palestrante: Ministro Teodoro Silva Santos (DF)", type: "lecture" },
        { time: "11:00", title: "Palestra 15 - 5 anos da Lei 14.133/2021: avanços, desafios e o futuro da contratação pública na prática", description: "Palestrante: Ministro Antonio Anastasia (MG)", type: "lecture" },
        { time: "12:00", title: "Encerramento final do evento", type: "closing" },
    ]
};

const getIcon = (type: string) => {
    switch (type) {
        case 'lecture': return <Mic className="w-4 h-4" />;
        case 'checkin': return <Ticket className="w-4 h-4" />;
        case 'break': return <Coffee className="w-4 h-4" />;
        case 'closing': return <Sparkles className="w-4 h-4" />;
        default: return <Clock className="w-4 h-4" />;
    }
};

const generateGoogleCalendarUrl = (day: string, time: string, title: string, description: string) => {
    // Event Date: April 2026
    const dateStr = `2026-04-${day}`;

    // Parse start time (e.g. "14:00")
    const [hours, minutes] = time.split(':').map(Number);

    // Create Date object for Start Time (Local BH Time)
    // We construct it as UTC then subtract 3 hours to simulate local time input, 
    // but easier is just manually formatting since we know the offset.
    // Let's do simple string manipulation to get UTC.
    // BH is UTC-3. So UTC = Local + 3 hours.

    let startHourUTC = hours + 3;
    let endHourUTC = startHourUTC + 1; // Assume 1 hour duration

    // Handle day rollover if needed (unlikely for 14:00-18:00 but good practice)
    // For simplicity in this specific event context (afternoon lectures), we assume same day UTC.

    const formatTime = (h: number, m: number) => {
        return `${h.toString().padStart(2, '0')}${m.toString().padStart(2, '0')}00Z`;
    };

    const startDateTime = `202604${day}T${formatTime(startHourUTC, minutes)}`;
    const endDateTime = `202604${day}T${formatTime(endHourUTC, minutes)}`;

    const details = description ? encodeURIComponent(description) : '';
    const eventTitle = encodeURIComponent(title);
    const location = encodeURIComponent("Auditório Faculdade de Direito da UFMG, Av. João Pinheiro, 100 - Centro, Belo Horizonte - MG");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDateTime}/${endDateTime}&details=${details}&location=${location}`;
};

export function Schedule() {
    const speakerImages: Record<string, string> = {
        "Cristiana Fortini": "/prof/cristina.jpg",
        "Antônio Lima": "/prof/antonio.png",
        "José Roberto Tiossi": "/prof/tiossi.jpg",
        "Viviane Mafissoni": "/prof/viviane.jpg",
        "Raquel Carvalho": "/prof/raquel.jpg",
        "Eduardo Grossi": "/prof/grossi.jpg",
        "Pedro Azevedo": "/prof/pedro.jpg",
        "Igor Pereira Pinheiro": "/prof/igor.jpg",
        "Jorge Ulisses Jacoby Fernandes": "/prof/jorge.jpg",
        "Benjamin Zymler": "/prof/zymler.jpg",
        "Raphael Rodrigues": "/prof/rapahel.jpg",
        "Carlos Tiago": "/prof/carlos.jpg",
        "Christianne Stroppa": "/prof/stroppa.jpg",
        "Teodoro Silva Santos": "/prof/teodoro.jpg",
        "Antonio Anastasia": "/prof/anastasia.jpg",
    };

    const getSpeakerImage = (description?: string) => {
        if (!description) return null;
        const key = Object.keys(speakerImages).find(k => description.includes(k.split(' ')[0])); // Simple partial match
        return key ? speakerImages[key] : null;
    };

    return (
        <section className="py-20 lg:py-32 bg-white relative" id="programacao">
            <Container>
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
                        <Calendar className="w-4 h-4" />
                        15, 16 E 17 DE ABRIL
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-sequel-medium font-normal text-black uppercase leading-none tracking-tight">
                        Programação<br />do Evento
                    </h2>
                </div>

                <div className="flex flex-col">
                    {DAYS_CONFIG.map((day) => {
                        const schedule = FULL_SCHEDULE[day.id as keyof typeof FULL_SCHEDULE];

                        return (
                            <div key={day.id} className="flex flex-col lg:flex-row gap-8 lg:gap-6 border-b border-gray-200 py-16 last:border-0">

                                {/* LEFT COLUMN: Sticky Date Header */}
                                <div className="lg:w-48 flex-none">
                                    <div className="lg:sticky lg:top-32 text-left">
                                        <div className="inline-block">
                                            <span className="text-6xl lg:text-8xl font-sequel-medium font-bold text-black tracking-tighter leading-none block">
                                                {day.id}
                                            </span>
                                            <span className="text-xl lg:text-2xl text-[#FBB03B] font-bold uppercase tracking-wide block -mt-1 mb-2">
                                                DE ABRIL
                                            </span>
                                            <div className="h-1 w-12 bg-black rounded-full mb-3"></div>
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                                {day.subLabel}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Events List */}
                                <div className="flex-1">
                                    <div className="space-y-4">
                                        {schedule.map((item, index) => {
                                            const speakerImg = getSpeakerImage(item.description);
                                            const isSystemEvent = !item.description;

                                            return (
                                                <div key={index} className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#FBB03B]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row">

                                                    {/* LEFT: Image or Icon Section */}
                                                    <div className={`relative h-80 md:h-auto ${isSystemEvent ? 'md:w-24 bg-gray-100/50' : 'md:w-48'} flex-none`}>
                                                        {speakerImg ? (
                                                            <>
                                                                <img
                                                                    src={speakerImg}
                                                                    alt="Speaker"
                                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5"></div>
                                                            </>
                                                        ) : (
                                                            <div className={`w-full h-full flex items-center justify-center text-gray-400 group-hover:text-[#FBB03B] transition-colors ${item.type === 'checkin' ? 'bg-blue-50/50 text-blue-400' :
                                                                item.type === 'break' ? 'bg-orange-50/50 text-orange-400' :
                                                                    'bg-gray-100/50'
                                                                }`}>
                                                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                                                    {item.type === 'lecture' && <Mic className="w-8 h-8" />}
                                                                    {item.type === 'checkin' && <Ticket className="w-8 h-8" />}
                                                                    {item.type === 'break' && <Coffee className="w-8 h-8" />}
                                                                    {item.type === 'closing' && <Sparkles className="w-8 h-8" />}
                                                                    {!['lecture', 'checkin', 'break', 'closing'].includes(item.type) && <Clock className="w-8 h-8" />}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* RIGHT: Content */}
                                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                                        {/* Time */}
                                                        <div className="flex items-center gap-2 text-[#FBB03B] font-bold tracking-wide text-sm font-inter uppercase mb-2">
                                                            <Clock className="w-4 h-4" />
                                                            {item.time}
                                                        </div>

                                                        {/* Title */}
                                                        <h4 className="text-lg md:text-xl font-sequel-medium text-gray-900 leading-snug group-hover:text-[#FBB03B] transition-colors mb-3">
                                                            {item.title}
                                                        </h4>

                                                        {/* Content Body */}
                                                        {item.description ? (
                                                            <div className="flex flex-col items-start gap-4">
                                                                <p className="text-gray-600 text-sm md:text-base border-l-2 border-[#FBB03B] pl-3 py-1">
                                                                    {item.description.split('(')[0]}
                                                                    {item.description.includes('(') && (
                                                                        <span className="text-gray-400 ml-1">
                                                                            ({item.description.split('(')[1]}
                                                                        </span>
                                                                    )}
                                                                </p>

                                                                {/* Add to Calendar Button (Only for lectures) */}
                                                                {item.type === 'lecture' && (
                                                                    <a
                                                                        href={generateGoogleCalendarUrl(day.id, item.time, item.title, item.description)}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 hover:text-[#FBB03B] bg-gray-50 hover:bg-[#FBB03B]/10 border border-transparent hover:border-[#FBB03B]/20 px-3 py-1.5 rounded-md transition-all duration-300"
                                                                    >
                                                                        <Calendar className="w-3.5 h-3.5" />
                                                                        Adicionar Palestra ao Google Agenda
                                                                    </a>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <div className="mt-1">
                                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block ${item.type === 'checkin' ? 'bg-blue-50 text-blue-600' :
                                                                    item.type === 'break' ? 'bg-orange-50 text-orange-600' :
                                                                        'bg-gray-100 text-gray-500'
                                                                    }`}>
                                                                    {item.type === 'checkin' ? 'Credenciamento' : item.type === 'break' ? 'Intervalo' : 'Encerramento'}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Subtle Diagonal Decorator */}
                                                    <div className="hidden lg:block absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
