// app/menu/page.tsx
import React from 'react';

// ЭТО ТЕСТОВЫЕ ДАННЫЕ (Пока без Sanity)
// Мы просто имитируем, как это будет выглядеть
const testButtons = [
    {
        id: 1,
        label: "Wochenkarte (Mittagstisch)",
        subtext: "Gültig: Di - Sa, 11:00 - 14:30",
        href: "/menus/menu-lunch.pdf"
    },
    {
        id: 2,
        label: "Saisonkarte (Pfifferlinge)",
        subtext: "Frische Pilzgerichte",
        href: "/menus/menu-season.pdf"
    },
    {
        id: 3,
        label: "Hauptspeisekarte",
        subtext: "Unsere Klassiker & Schnitzel",
        href: "/menus/menu-main.pdf"
    }
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center pt-32 pb-20 px-4">

            {/* 1. ЗАГОЛОВОК (Стиль как на фото "Brunch & Dine") */}
            <h1 className="text-4xl md:text-6xl font-light text-dark-cafe mb-8 text-center tracking-wide">
                Unsere Speisekarten
            </h1>

            {/* 2. ОПИСАНИЕ */}
            <div className="max-w-2xl text-center text-gray-500 mb-16 leading-relaxed font-light text-lg">
                <p className="mb-4">
                    Unsere Küchenchefs haben mit Leidenschaft und Kreativität eine Auswahl
                    an Speisen zusammengestellt, die Deinen Gaumen verwöhnen werden.
                </p>
                <p>
                    Hier können Sie unsere aktuellen Karten als PDF ansehen oder herunterladen.
                </p>
            </div>

            {/* 3. КНОПКИ (Столбиком) */}
            <div className="flex flex-col gap-6 w-full max-w-sm">

                {testButtons.map((btn) => (
                    <a
                        key={btn.id}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        {/* Сама кнопка */}
                        <div className="
              w-full text-center py-5 px-6 
              bg-accent-cafe text-white 
              uppercase tracking-[0.2em] text-sm font-semibold
              shadow-md transition-all duration-300
              group-hover:bg-opacity-90 group-hover:shadow-lg group-hover:-translate-y-1
            ">
                            {btn.label}
                        </div>

                        {/* Подпись под кнопкой (опционально, для красоты) */}
                        <div className="text-center text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {btn.subtext}
                        </div>
                    </a>
                ))}

            </div>

            {/* Декор внизу */}
            <div className="mt-20 w-16 h-1 bg-gray-200 rounded-full"></div>

        </main>
    );
}