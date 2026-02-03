"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Palestrantes', href: '#palestrantes' },
        { name: 'Trilhas', href: '#trilhas' },
        { name: 'Programação', href: '#programacao' },
        { name: 'Investimento', href: '#investimento' },
        { name: 'Local', href: '#local' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 h-[71px] transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <Container className="h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo area */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logoevento.png"
                                alt="3º Seminário Nacional de Contratações Públicas"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wide font-inter"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full px-6 uppercase text-xs font-bold tracking-wider"
                        >
                            Quero Expor
                        </Button>
                        <Button
                            className="bg-[#FF8400] hover:bg-[#ff9526] text-white border-none rounded-full px-6 shadow-[0_0_20px_rgba(255,132,0,0.3)] hover:shadow-[0_0_30px_rgba(255,132,0,0.5)] uppercase text-xs font-bold tracking-wider transition-all"
                        >
                            Garantir Ingresso
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-white/90 hover:text-white py-2 border-b border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <Button variant="outline" className="w-full justify-center border-white/30 text-white">
                            Quero Expor
                        </Button>
                        <Button className="w-full justify-center bg-[#FF8400] text-white">
                            Garantir Ingresso
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
