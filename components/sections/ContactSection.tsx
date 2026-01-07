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
        <main className="min-h-scree">

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

        </main>
    );
}