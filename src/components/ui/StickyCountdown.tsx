"use client";

import React, { useState, useEffect } from 'react';

export function StickyCountdown() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [lastScrollY, setLastScrollY] = useState(0);

    // Event date: April 15, 2026
    const eventDate = new Date('2026-04-15T08:00:00');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show countdown only when scrolling DOWN and past hero
            // Hide when scrolling UP or near top
            if (currentScrollY < 600) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling UP - hide countdown
                setIsVisible(false);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling DOWN - show countdown
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) => value.toString().padStart(2, '0');
    const isTimeUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-white/10 h-[80px] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between md:justify-center md:gap-8">

                {/* Left Side: Label and Countdown */}
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-4">
                    <span className="text-white/60 text-[10px] uppercase tracking-wider font-inter mb-0.5 md:mb-0">O Evento começa em:</span>

                    {isTimeUp ? (
                        <span className="text-white font-bold text-sm md:text-lg">É hoje!</span>
                    ) : (
                        <div className="flex items-center gap-1 text-white font-bold font-inter text-[10px] sm:text-xs md:text-lg">
                            <span className="bg-white/10 px-1.5 py-1 rounded">{formatTime(timeLeft.days)}d</span>
                            <span className="text-white/40">:</span>
                            <span className="bg-white/10 px-1.5 py-1 rounded">{formatTime(timeLeft.hours)}h</span>
                            <span className="text-white/40">:</span>
                            <span className="bg-white/10 px-1.5 py-1 rounded">{formatTime(timeLeft.minutes)}m</span>
                            <span className="text-white/40">:</span>
                            <span className="bg-white/10 px-1.5 py-1 rounded">{formatTime(timeLeft.seconds)}s</span>
                        </div>
                    )}
                </div>

                {/* Right Side: Button */}
                <a
                    href="#investimento"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wide hover:bg-gradient-to-r hover:from-[#1930f9] hover:to-[#3b82f6] hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                    Comprar agora
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
