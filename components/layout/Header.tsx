// components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    // --- ЛОГИКА СТИЛЕЙ (Только фон и тень, высота теперь фиксированная) ---
    const getBackgroundClasses = () => {
        // 1. Самый верх -> Прозрачный
        if (scrollPos === 0) {
            return 'bg-transparent shadow-none white';
        }

        // 2. Чуть опустил (до 200px) -> Полупрозрачный
        if (scrollPos > 0 && scrollPos < 200) {
            return 'bg-primary-cafe-tr backdrop-blur-md shadow-sm';
        }

        // 3. Низ -> Белый
        return 'bg-primary-cafe shadow-md';
    };

    return (
        <>
            <header
                // h-24 = Фиксированная высота (96px) всегда
                // Убрали transition-all, чтобы не было анимации
                className={`fixed top-0 z-50 w-full h-24 ${getBackgroundClasses()}`}
            >
                <nav className="flex items-center justify-between px-4 max-w-7xl mx-auto h-full">

                    {/* Логотип */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/icons/logo.png"
                            alt="SG Gaststätte Logo"
                            width={70}
                            height={40}
                            priority
                            className="object-contain brightness-95" 
                        />

                        <span className="text-xl  text-white">
                            SG Gaststätte
                        </span>
                    </Link>

                    {/* ДЕСКТОПНАЯ НАВИГАЦИЯ */}
                    <DesktopNav />

                    {/* МОБИЛЬНАЯ КНОПКА-ГАМБУРГЕР */}
                    <button
                        className="md:hidden p-2 text-white hover:opacity-70"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Открыть меню"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                </nav>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}