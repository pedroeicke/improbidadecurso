"use client";

import React from "react";

// Seminar Speaker Data
const speakers = [
    {
        id: 1,
        name: "Teodoro Silva Santos",
        role: "Ministro do STJ",
        image: "/prof/teodoro.jpg",
    },
    {
        id: 2,
        name: "Antonio Anastasia",
        role: "Ministro do TCU",
        image: "/prof/anastasia.jpg",
    },
    {
        id: 3,
        name: "Benjamin Zymler",
        role: "Ministro do TCU",
        image: "/prof/zymler.jpg",
    },
    {
        id: 4,
        name: "Cristina Fortini",
        role: "Professora Doutora",
        image: "/prof/cristina.jpg",
    },
    {
        id: 5,
        name: "Jorge Ulisses Jacoby Fernandes",
        role: "Mestre em Direito",
        image: "/prof/jorge.jpg",
    },
    {
        id: 6,
        name: "Christianne Stroppa",
        role: "Professora Doutora",
        image: "/prof/stroppa.jpg",
    },
    {
        id: 7,
        name: "José Roberto Tiossi Junior",
        role: "Mestre em Direito",
        image: "/prof/tiossi.jpg",
    },
    {
        id: 8,
        name: "Viviane Mafissoni",
        role: "Advocacia Geral da União",
        image: "/prof/viviane.jpg",
    },
    {
        id: 9,
        name: "Pedro Azevedo",
        role: "Auditor do TCE/MG",
        image: "/prof/pedro.jpg",
    },
    {
        id: 10,
        name: "Eduardo Grossi",
        role: "Procurador do Estado MG",
        image: "/prof/grossi.jpg",
    },
    {
        id: 11,
        name: "Igor Pereira Pinheiro",
        role: "Promotor do MPCE",
        image: "/prof/igor.jpg",
    },
    {
        id: 12,
        name: "Carlos Tiago J. de Azevedo",
        role: "Presidente do Instituto MG",
        image: "/prof/carlos.jpg",
    },
    {
        id: 13,
        name: "Raquel Carvalho",
        role: "Procuradora do Estado MG",
        image: "/prof/raquel.jpg",
    },
    {
        id: 14,
        name: "Antônio Lima",
        role: "Professor Especialista",
        image: "/prof/antonio.png",
    },
    {
        id: 15,
        name: "Raphael Rodrigues",
        role: "Professor Doutor",
        image: "/prof/rapahel.jpg",
    },
    {
        id: 16,
        name: "Andryu Lemos",
        role: "Mestre em Administração Pública",
        image: "/prof/andryu.png",
    },
];

const SpeakerVerticalCarousel = () => {
    // Split speakers into two distinct groups to avoid duplicates
    const half = Math.ceil(speakers.length / 2);
    const col1Speakers = speakers.slice(0, half);
    const col2Speakers = speakers.slice(half);

    // Duplicate each set for its own infinite loop
    const col1Items = [...col1Speakers, ...col1Speakers];
    const col2Items = [...col2Speakers, ...col2Speakers];

    return (
        <div
            className="relative h-full w-full max-w-[557px] overflow-hidden flex gap-[25px]"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 12.5%, black 87.5%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12.5%, black 87.5%, transparent)'
            }}
        >
            {/* Column 1: Scrolling Down */}
            <div className="flex-1 overflow-hidden relative">
                <div
                    className="flex flex-col gap-4"
                    style={{
                        animation: 'marqueeDown 60s linear infinite'
                    }}
                >
                    {col1Items.map((speaker, index) => (
                        <div
                            key={`col1-${index}`}
                            className="relative flex-none h-[355px] w-[266px] rounded-3xl overflow-hidden group bg-black border border-white/30"
                        >
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-center">
                                <h3 className="text-white text-lg font-bold font-sequel-medium leading-tight">
                                    {speaker.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 2: Scrolling Up */}
            <div className="flex-1 overflow-hidden relative">
                <div
                    className="flex flex-col gap-4"
                    style={{
                        animation: 'marqueeUp 60s linear infinite'
                    }}
                >
                    {col2Items.map((speaker, index) => (
                        <div
                            key={`col2-${index}`}
                            className="relative flex-none h-[355px] w-[266px] rounded-3xl overflow-hidden group bg-black border border-white/30"
                        >
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-center">
                                <h3 className="text-white text-lg font-bold font-sequel-medium leading-tight">
                                    {speaker.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeakerVerticalCarousel;
