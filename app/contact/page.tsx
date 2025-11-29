// app/about-us/page.tsx
import React from 'react';
import Image from 'next/image';

// Данные команды (легко добавить новых сотрудников)
const teamMembers = [
    {
        name: "Maria Müller",
        role: "Inhaberin & Herz des Cafés",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        desc: "Liebt es, neue Tortenrezepte zu kreieren."
    },
    {
        name: "Thomas Schmidt",
        role: "Chef-Barista",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        desc: "Kennt jede Kaffeebohne beim Vornamen."
    },
    {
        name: "Julia Weber",
        role: "Serviceleitung",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
        desc: "Sorgt dafür, dass sich jeder Gast wie zu Hause fühlt."
    }
];

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* --- 1. HERO HEADER --- */}
            <div className="bg-light-cafe py-16 px-4 text-center">
                <h1 className="text-primary-cafe drop-shadow-sm mb-4">Über uns</h1>
                <p className="text-xl text-dark-cafe/80 max-w-2xl mx-auto font-light">
                    Mehr als nur Kaffee. Ein Ort der Begegnung, der Tradition und des Genusses.
                </p>
            </div>

            {/* --- 2. UNSERE GESCHICHTE (Текст + Картинка) --- */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Левая часть: Картинка */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* <Image
                            // src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop"
                            alt="Altes Foto vom Café oder Innenraum"
                            fill
                            className="object-cover"
                        /> */}
                    </div>

                    {/* Правая часть: Текст */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-accent-cafe mt-0">Unsere Geschichte</h2>
                        <h3 className="text-primary-cafe text-2xl mt-2 mb-6">Wie alles begann...</h3>

                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Die SG Gaststätte wurde vor über 15 Jahren mit einem einfachen Traum gegründet:
                            Einen Ort zu schaffen, an dem die Zeit für einen Moment stillsteht.
                            Was als kleines Familienprojekt begann, hat sich zu einem Treffpunkt für Jung und Alt entwickelt.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Wir glauben an das Handwerk. Deshalb backen wir unsere Kuchen noch selbst,
                            beziehen unsere Zutaten von regionalen Bauern und rösten unseren Kaffee schonend.
                            Jede Tasse erzählt unsere Geschichte der Leidenschaft.
                        </p>

                        {/* Подпись (декоративный элемент) */}
                        <div className="mt-8 font-handwriting text-3xl text-primary-cafe opacity-80">
                            Ihre Familie Schneider
                        </div>
                    </div>

                </div>
            </section>

            {/* --- 3. UNSERE PHILOSOPHIE (Иконки) --- */}
            <section className="bg-primary-cafe text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-white mb-12 border-b border-white/20 pb-4 inline-block">Unsere Philosophie</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Value 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-4xl">❤️</span>
                            </div>
                            <h3 className="text-white mt-0 mb-3">Herzlichkeit</h3>
                            <p className="text-white/80">
                                Bei uns sind Sie kein Kunde, sondern Gast. Ein Lächeln gehört für uns genauso dazu wie der Milchschaum auf dem Cappuccino.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-4xl">🌿</span>
                            </div>
                            <h3 className="text-white mt-0 mb-3">Qualität & Region</h3>
                            <p className="text-white/80">
                                Wir verzichten auf Fertigprodukte. Unsere Eier kommen vom Hof nebenan, das Mehl aus der lokalen Mühle.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-4xl">🕰️</span>
                            </div>
                            <h3 className="text-white mt-0 mb-3">Tradition</h3>
                            <p className="text-white/80">
                                Wir bewahren alte Rezepte und Traditionen, interpretieren sie aber modern. Ein Stück Heimat auf dem Teller.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 4. DAS TEAM (Круглые фото) --- */}
            <section className="py-20 px-4 max-w-7xl mx-auto text-center">
                <h2 className="text-primary-cafe mb-12">Das Team hinter der Theke</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Фото с эффектом при наведении */}
                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-light-cafe shadow-lg group-hover:border-accent-cafe transition-colors duration-300">
                                {/* <Image
                                    // src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                /> */}
                            </div>

                            <h3 className="text-dark-cafe text-xl mb-1">{member.name}</h3>
                            <span className="text-accent-cafe font-bold uppercase tracking-wider text-sm mb-3 block">
                                {member.role}
                            </span>
                            <p className="text-gray-500 italic text-sm max-w-xs">
                                "{member.desc}"
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}