import React from 'react';
import Link from 'next/link';
import NavLink from '../NavLink';

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const navItems = [
    { name: 'Startseite', href: '/' },
    { name: 'Menü', href: '/menu' },
    { name: 'Veranstaltungen', href: '/events' },
    { name: 'Über uns', href: '/about-us' },
    { name: 'Kontakt', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[1000] md:hidden"
            onClick={onClose}
        >
            {/* Затемнение всего остального экрана (backdrop) */}
            <div className="absolute inset-0 backdrop-blur-sm" />

            <nav
                // Убрали отсюда bg-primary-cafe и opacity
                className="relative h-full w-full shadow-xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* --- СЛОЙ 1: ФОН (Полупрозрачный) --- */}
                {/* absolute inset-0 растягивает этот div на весь родительский nav */}
                <div className="absolute inset-0 bg-primary-cafe opacity-70"></div>

                {/* --- СЛОЙ 2: КОНТЕНТ (Непрозрачный) --- */}
                {/* relative z-10 поднимает контент над фоном */}
                <div className="relative z-10 h-full w-full flex flex-col">

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white text-4xl p-2 hover:text-amber-300 transition-colors"
                        aria-label="Menü schließen"
                    >
                        &times;
                    </button>

                    <ul className="pt-10 px-8 space-y-5">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-2xl" // Для мобилки задаем крупный шрифт
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}