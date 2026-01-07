"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Список твоих фото из папки public
const images = [
    "/fotos/cafe-4.jpg",
    "/fotos/cafe-1.jpg",
    "/fotos/cafe-8.jpg",
];

const tags = [" Essen -", "Events", "Sport"];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    // Автоматическая смена фото каждые 5 секунд
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* --- КАРУСЕЛЬ ФОНО --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={index}
                        // Начало: фото за пределами экрана справа
                        initial={{ x: "100%", opacity: 0 }}
                        // Анимация: фото встает по центру
                        animate={{ x: 0, opacity: 1 }}
                        // Выход: фото уходит влево
                        exit={{ x: "-100%", opacity: 0 }}
                        // Настройка скорости и плавности
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 }
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt="Gaststätte Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Затемнение фона */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            {/* --- КОНТЕНТ ПО ЦЕНТРУ --- */}
            <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">

                {/* 1. Логотип */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-3"
                >
                    <Image
                        src="/icons/logo-small.png" // Убедись, что путь верный
                        alt="Logo"
                        width={100}
                        height={100}
                        className="brightness-80 drop-shadow-2xl"
                    />
                </motion.div>

                {/* 2. Слова через тире — ГИГАНТСКИЙ, НО ЛЕГКИЙ */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="uppercase tracking-[0.4em] text-2xl md:text-xl mb-4 text-white/95"
                >
                    {tags.join(" ")}
                </motion.h2>

                {/* 3. Название кафе — МЕНЬШЕ, НО ПЛОТНОЕ И АКЦЕНТНОЕ */}
                <motion.h4
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-3xl uppercase tracking-wide"
                >
                    SG Gaststätte Dietzenbach
                </motion.h4>
            </div>
        </section>
    );
}