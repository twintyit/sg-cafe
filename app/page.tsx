import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* --- 1. HERO SECTION (Главный экран) --- */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

        {/* Фоновое изображение (Затемненное) */}
        <div className="absolute inset-0 z-0">
          {/* Вставь сюда свое фото интерьера или блюда */}
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=710x10000:format=jpg/path/sce9a381b3942ba28/image/i8e838cdb6542e731/version/1459254534/image.jpg"
            alt="Cafe Interior"
            fill
            className="object-cover"
            priority
          />
          {/* Затемнение фона, чтобы текст читался (черный слой 50%) */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Контент поверх фото */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          {/* h1 автоматически берет стили из globals.css (большой шрифт) */}
          <h1 className="drop-shadow-md">
            Willkommen in der <span className="text-amber-300">SG Gaststätte</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 drop-shadow-sm font-light">
            Genießen Sie erstklassigen Kaffee, hausgemachte Kuchen und eine gemütliche Atmosphäre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Кнопка 1: Твой акцентный цвет */}
            <Link
              href="/menu"
              className="bg-accent-cafe text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Unser Menü ansehen
            </Link>

            {/* Кнопка 2: Прозрачная с белой обводкой */}
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-dark-cafe transition-colors"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. FEATURES SECTION (Преимущества) --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-primary-cafe mb-12">Das macht uns besonders</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Карточка 1 */}
            <div className="p-6 bg-light-cafe rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-accent-cafe">Bester Kaffee</h3>
              <p>Frisch geröstete Bohnen und Barista-Qualität in jeder Tasse.</p>
            </div>

            {/* Карточка 2 */}
            <div className="p-6 bg-light-cafe rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🍰</div>
              <h3 className="text-accent-cafe">Hausgemacht</h3>
              <p>Unsere Kuchen und Speisen werden täglich frisch für Sie zubereitet.</p>
            </div>

            {/* Карточка 3 */}
            <div className="p-6 bg-light-cafe rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-accent-cafe">Gemütlichkeit</h3>
              <p>Ein Ort zum Entspannen, Treffen mit Freunden und Genießen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. TEASER SECTION (О нас / Картинка + Текст) --- */}
      <section className="py-20 px-4 bg-light-cafe/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Изображение */}
          <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            {/* <Image
              // src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious Food"
              fill
              className="object-cover"
            /> */}
          </div>

          {/* Текст */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="mt-0 text-primary-cafe">Über uns</h2>
            <p className="text-lg text-gray-700 mb-6">
              Seit mehr als 10 Jahren servieren wir unseren Gästen nicht nur Speisen, sondern Erlebnisse.
              Wir glauben an lokale Zutaten, traditionelle Rezepte und eine Prise Liebe in jedem Gericht.
            </p>
            <Link href="/about-us" className="text-accent-cafe font-bold text-xl hover:underline">
              Mehr über unsere Geschichte &rarr;
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}