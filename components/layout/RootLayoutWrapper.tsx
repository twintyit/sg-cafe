// components/layout/RootLayoutWrapper.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
// Импортируем Header и Footer здесь:
import Header from './Header';
import Footer from './Footer';

export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isStudioRoute = pathname.startsWith('/studio');

    // 1. ЕСЛИ это Studio, мы возвращаем только тег <body> с контентом
    if (isStudioRoute) {
        return (
            // Мы не ставим здесь классы min-h-screen и flex-col, т.к. Sanity сам задает стили
            <body>
                {children}
            </body>
        );
    }

    // 2. ДЛЯ ВСЕХ ОСТАЛЬНЫХ СТРАНИЦ: возвращаем body со всеми компонентами сайта
    return (
        // Классы берем из твоего старого layout.tsx
        <body className="flex flex-col min-h-screen">
            <Header />

            {/* Main tag с flex-grow, как у тебя было */}
            <main className="grow bg-light-cafe">
                {children}
            </main>

            <Footer />
        </body>
    );
}