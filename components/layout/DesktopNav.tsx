// components/layout/DesktopNav.tsx
import React from 'react';
import NavLink from '../NavLink'; // Импортируем наш универсальный компонент

const navItems = [
    { name: 'Startseite', href: '/' },
    { name: 'Menü', href: '/menu' },
    { name: 'Veranstaltungen', href: '/events' },
    { name: 'Über uns', href: '/about-us' },
    { name: 'Kontakt', href: '/contact' },
];

export default function DesktopNav() {
    return (
        // hidden md:flex -> Скрываем на мобильных, показываем (flex) на экранах шире 768px
        <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    href={item.href}
                    // Здесь можно задать размер шрифта специально для десктопа
                    className="text-lg tracking-wide text-accent-cafe "
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
}