import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SG Gaststätte",
  description: "Vereinsgaststätte SG Dietzenbach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Header />

        {/* Контейнер для контента. 
            2. flex-grow: растягивает этот блок, заставляя его занимать все доступное вертикальное пространство.
            3. pt-16: оставляем отступ от фиксированной шапки.
        */}
        <main className="grow ">
          {children}
        </main>

        {/* Подвал (останется в самом низу) */}
        <Footer />

      </body>
    </html>
  );
}
