"use client";

import React from "react";

// Seminar Speaker Data - Same source as original
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
    }
];

const SpeakerHorizontalCarousel = () => {
    // Duplicate items for infinite loop
    // Duplicate items for infinite loop
    const carouselItems = [...speakers, ...speakers];

    return (
        <div
            className="relative w-full overflow-hidden mt-8"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <div
                className="flex gap-4 w-max"
                style={{
                    animation: 'marqueeLeft 40s linear infinite'
                }}
            >
                {carouselItems.map((speaker, index) => (
                    <div
                        key={`h-speaker-${index}`}
                        className="relative flex-none h-[280px] w-[200px] rounded-2xl overflow-hidden group bg-black border border-white/30"
                    >
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center">
                            <h3 className="text-white text-sm font-bold font-sequel-medium leading-tight mb-1">
                                {speaker.name}
                            </h3>
                            <p className="text-white/70 text-xs leading-tight">
                                {speaker.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeakerHorizontalCarousel;
