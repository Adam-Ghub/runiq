"use client"

import Link from 'next/link';
import { sneaker } from '@lucide/lab';
import { Icon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Plans', href: '/plans' },
    { label: 'Coaching', href: '/coaching' },
    { label: 'About', href: '/about' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo sekce */}
                    <div className="flex items-center gap-2">
                        <Icon
                            iconNode={sneaker}
                            className="w-8 h-8 text-[var(--blue-text)]"
                            strokeWidth={2}
                        />
                        <span className="text-xl font-bold text-black tracking-tight">Runiq</span>
                    </div>

                    {/* Navigace pro desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-black font-medium pb-1 group transition-colors hover:text-[var(--blue-text)]"
                            >
                                {link.label}
                                {/* Animovaná čára */}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--blue-text)] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger menu tlačítko */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                    <div className="md:hidden absolute right-4 top-16 bg-white border border-gray-100 rounded-xl shadow-xl z-50 min-w-[140px] overflow-hidden mt-2">
                        <nav className="flex flex-col p-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-black font-medium hover:bg-gray-50 hover:text-[var(--blue-text)] transition-colors rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}