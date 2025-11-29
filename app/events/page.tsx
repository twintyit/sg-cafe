// app/events/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Данные о типах мероприятий (легко менять текст и картинки)
const eventTypes = [
    {
        title: "Geburtstage & Feiern",
        description: "Machen Sie Ihren besonderen Tag unvergesslich. Wir bieten Platz für bis zu 50 Personen, individuelle Dekoration und natürlich köstliche Torten.",
        image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=800&auto=format&fit=crop", // Праздник
        icon: "🎉"
    },
    {
        title: "Trauerfeiern",
        description: "Ein würdevoller Rahmen für den Abschied. In ruhiger Atmosphäre kümmern wir uns diskret um die Bewirtung Ihrer Gäste.",
        image: "", // Спокойная атмосфера (цветы/свечи)
        icon: "🕯️"
    },
    {
        title: "Geschäftstreffen",
        description: "Produktive Meetings bei bestem Kaffee. Nutzen Sie unsere ruhigen Ecken und das schnelle WLAN für Ihre geschäftlichen Besprechungen.",
        image: "", // Бизнес встреча
        icon: "🤝"
    },
    {
        title: "Weihnachtsfeiern",
        description: "Planen Sie Ihre Firmen- oder Familienfeier bei uns. Wir stellen Ihnen ein festliches Menü oder Buffet zusammen.",
        image: "", // Рождество/Ужин
        icon: "🎄"
    }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* --- 1. HERO HEADER (Заголовок) --- */}
            <div className="bg-primary-cafe py-16 px-4 text-center">
                <h1 className="text-white drop-shadow-md mb-4">Feiern & Tagen</h1>
                <p className="text-white/90 text-xl max-w-2xl mx-auto font-light">
                    Der perfekte Ort für Ihre Momente. Von der privaten Geburtstagsfeier bis zum geschäftlichen Meeting.
                </p>
            </div>

            {/* --- 2. INTRO TEXT --- */}
            <section className="py-12 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-primary-cafe mb-6">Ihr Event in der SG Gaststätte</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Suchen Sie einen gemütlichen und stilvollen Ort für Ihr nächstes Event?
                    Unser Café bietet flexible Räumlichkeiten, die wir ganz nach Ihren Wünschen gestalten.
                    Lassen Sie uns die Planung übernehmen, damit Sie sich ganz auf Ihre Gäste konzentrieren können.
                </p>
            </section>

            {/* --- 3. EVENT CARDS (Сетка карточек) --- */}
            <section className="px-4 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {eventTypes.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Картинка */}
                            <div className="relative h-64 w-full overflow-hidden">
                                {/* <Image
                                    // src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                /> */}
                                {/* Иконка поверх картинки */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-3xl shadow-sm">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Текст карточки */}
                            <div className="p-8">
                                <h3 className="text-primary-cafe mt-0 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 4. FEATURES (Иконки преимуществ) --- */}
            <section className="bg-light-cafe py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-primary-cafe mb-12">Unsere Ausstattung</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-4 text-accent-cafe">
                                📡
                            </div>
                            <span className="font-semibold text-dark-cafe">Free WiFi</span>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-4 text-accent-cafe">
                                🔊
                            </div>
                            <span className="font-semibold text-dark-cafe">Sound System</span>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-4 text-accent-cafe">
                                🍽️
                            </div>
                            <span className="font-semibold text-dark-cafe">Individuelles Buffet</span>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-4 text-accent-cafe">
                                🅿️
                            </div>
                            <span className="font-semibold text-dark-cafe">Parkplätze</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. CTA (Призыв к действию) --- */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto bg-white border-2 border-accent-cafe/20 rounded-2xl p-8 md:p-12 shadow-lg">
                    <h2 className="text-accent-cafe mt-0">Planen Sie Ihr Event mit uns!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Haben Sie Fragen oder möchten Sie einen Termin prüfen?
                        Rufen Sie uns an oder schreiben Sie uns eine Nachricht.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-accent-cafe text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-md"
                        >
                            Kontakt aufnehmen
                        </Link>
                        <a
                            href="tel:+49123456789"
                            className="border-2 border-primary-cafe text-primary-cafe px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-cafe hover:text-white transition-colors"
                        >
                            Anrufen
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}