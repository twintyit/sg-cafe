import React from 'react';
import { client } from "@/sanity/lib/client"; // Предполагаю, что клиент вынесен в отдельный файл по структуре Next/Sanity

interface MenuBtn {
    _id: string;
    label: string;
    fileUrl: string;
}

async function getMenuButtons(): Promise<MenuBtn[]> {
    try {
        const data = await client.fetch<MenuBtn[]>(`
      *[_type == "menuBtn"] | order(priority asc) {
        _id,
        label,
        "fileUrl": file.asset->url
      }
    `);
        return data;
    } catch (error) {
        console.error("Sanity error:", error);
        return [];
    }
}

export default async function MenuPage() {
    const buttons = await getMenuButtons();

    return (
        // Используем кремовый фон [#FDFCF0]
        <section id="menu" className=" bg-light-cafe flex flex-col items-center justify-center p-6">

            {/* Заголовок: Минимализм. Глубокий синий [#1B263B] */}
            <div className="text-center mb-16">
                <span className="text-primary-cafe text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
                    Auswahl
                </span>
                <h2 className="text-4xl md:text-5xl font-extralight text-dark-cafe tracking-tight">
                    Speisekarte
                </h2>
                {/* Короткая тонкая линия вместо длинного текста */}
                <div className="mt-6 w-90 h-[1px] bg-accent-cafe  mx-auto"></div>
            </div>

            {/* Список кнопок: Понятно и четко */}
            <div className="grid grid-cols-1 gap-4 w-full max-w-[320px]">
                {buttons.length === 0 ? (
                    <p className="text-[#1B263B]/50 text-center font-light italic">Momentan keine Karten.</p>
                ) : (
                    buttons.map((btn) => (
                        <a
                            key={btn._id}
                            href={btn.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden"
                        >
                            {/* Кнопка: Глубокий синий фон, кремовый текст */}
                            <div className="
                w-full py-5 px-8 
                bg-accent-cafe text-[#FDFCF0] 
                text-center uppercase tracking-[0.2em] text-xs font-medium
                border
                transition-all duration-500 ease-in-out
                group-hover:bg-transparent group-hover:text-[#1B263B]
              ">
                                {btn.label}
                            </div>
                        </a>
                    ))
                )}
            </div>

            {/* Маленькое примечание снизу */}
            <p className="mt-12 text-[10px] uppercase tracking-widest text-[#1B263B]/40 font-light">
                Klicken zum Öffnen (PDF)
            </p>

        </section>
    );
}