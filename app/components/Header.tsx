"use client"

import Link from 'next/link';
import { sneaker } from '@lucide/lab';
import { Icon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';

const navLinks = [
    { label: 'Tepové zóny', href: '/tepove-zony' },
   { label: 'Vybavení', href: '/vybaveni' },
   { label: 'Galerie', href: '/galerie' },
   /* { label: 'Tipy', href: '/tipy' },*/
    { label: 'Kontakt', href: '/kontakt' }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white border-2 border-gray-100">
            <Container >
                <div className="flex items-center justify-between h-16">
                    {/* Logo sekce */}
                    <Link href="/" className="flex items-center gap-2">
                        <Icon
                            iconNode={sneaker}
                            className="w-8 h-8 text-(--blue-text)"
                            strokeWidth={2}
                        />
                        <span className="text-xl font-bold text-black tracking-tight">Runiq</span>
                    </Link>

                    {/* Navigace pro desktop */}
                    <nav className="flex items-center gap-8 max-md:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-black font-medium pb-1 group transition-colors hover:text-(--blue-text)"
                            >
                                {link.label}
                                {/* Animovaná čára */}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-(--blue-text) transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger menu tlačítko */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="hidden max-md:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-black" />
                        ) : (
                            <Menu className="w-6 h-6 text-black" />
                        )}
                    </button>
                </div>

                {/* Mobilní menu*/}
                {isOpen && (
                    <div className="hidden max-md:block absolute right-4 top-16 bg-white border border-gray-100 rounded-xl shadow-xl z-50 min-w-35 overflow-hidden mt-2">
                        <nav className="flex flex-col p-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-black font-medium hover:bg-gray-50 hover:text-(--blue-text) transition-colors rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}