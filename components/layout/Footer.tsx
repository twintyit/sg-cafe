// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-light-cafe border-t border-gray-100">

            {/* --- ВЕРХНЯЯ ЧАСТЬ: КОНТАКТЫ И КАРТА (Как на скринах) --- */}
            <div className="max-w-4xl mx-auto py-16 px-4 text-center">

                {/* 1. Заголовок и Адрес */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-accent-cafe uppercase tracking-widest mb-4">
                        Wir freuen uns auf Sie!
                    </h2>
                    <p className="text-dark-cafe text-lg leading-relaxed">
                        Musterstraße 12, 10115 Berlin<br />
                        (Ecke Hauptstraße, direkt am Park)
                    </p>
                </div>

                {/* 2. Блок контактов (Сетка) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

                    {/* Колонка: Ресторан / Кафе */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-accent-cafe uppercase tracking-wider mb-4">
                            Café & Restaurant
                        </h3>
                        <a href="tel:+49123456789" className="text-dark-cafe hover:text-accent-cafe transition-colors flex items-center gap-2 mb-2 text-lg">
                            📞 +49 (030) 123 45 67
                        </a>
                        <a href="mailto:info@sg-gaststaette.de" className="text-dark-cafe hover:text-accent-cafe transition-colors flex items-center gap-2 text-lg">
                            ✉️ info@sg-gaststaette.de
                        </a>
                    </div>

                    {/* Колонка: События / Банкеты (как на скрине "Банкет-менеджер") */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-accent-cafe uppercase tracking-wider mb-4">
                            Events & Feiern
                        </h3>
                        <a href="tel:+49123987654" className="text-dark-cafe hover:text-accent-cafe transition-colors flex items-center gap-2 mb-2 text-lg">
                            📞 +49 (0170) 987 65 43
                        </a>
                        <a href="mailto:events@sg-gaststaette.de" className="text-dark-cafe hover:text-accent-cafe transition-colors flex items-center gap-2 text-lg">
                            ✉️ events@sg-gaststaette.de
                        </a>
                    </div>

                </div>

                {/* 3. Карта (Google Maps Embed) */}
                {/* Я поставил grayscale, чтобы карта выглядела стильно и не отвлекала цветами */}
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.728790589874!2d13.402438315807663!3d52.52000657981414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1614264624329!5m2!1sde!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.3)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        title="Standortkarte"
                    ></iframe>
                </div>

            </div>

            {/* --- НИЖНЯЯ ЧАСТЬ: ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ (Темный фон) --- */}
            <div className="bg-primary-cafe text-white py-8 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Копирайт */}
                    <div className="text-sm opacity-80">
                        © {new Date().getFullYear()} SG Gaststätte. Alle Rechte vorbehalten.
                    </div>

                    {/* Соцсети (Иконки) */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-accent-cafe transition-colors" aria-label="Instagram">
                            📸
                        </a>
                        <a href="#" className="hover:text-accent-cafe transition-colors" aria-label="Facebook">
                            📘
                        </a>
                        <a href="#" className="hover:text-accent-cafe transition-colors" aria-label="TripAdvisor">
                            🦉
                        </a>
                    </div>

                    {/* ⚠️ ВАЖНО ДЛЯ ГЕРМАНИИ: Юридические ссылки */}
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/impressum" className="hover:text-accent-cafe transition-colors uppercase tracking-wide">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="hover:text-accent-cafe transition-colors uppercase tracking-wide">
                            Datenschutz
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}