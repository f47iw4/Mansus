import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2504&auto=format&fit=crop',
        title: 'MANSUS JOYERÍA',
        subtitle: 'Nueva Colección',
        cta: 'Descubrir Catálogo'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
        title: 'ELEGANCIA ATEMPORAL',
        subtitle: 'Relojes Exclusivos',
        cta: 'Ver Relojes'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2515&auto=format&fit=crop',
        title: 'BRILLO ETERNO',
        subtitle: 'Diamantes Certificados',
        cta: 'Explorar'
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-screen bg-gray-900 overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                    <motion.h2
                        key={`sub-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-gray-300"
                    >
                        {slides[current].subtitle}
                    </motion.h2>
                    <motion.h1
                        key={`title-${current}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wider mb-10 text-white"
                    >
                        {slides[current].title}
                    </motion.h1>
                    <motion.button
                        key={`btn-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="border border-white px-10 py-4 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-gray-900 transition duration-300"
                    >
                        {slides[current].cta}
                    </motion.button>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition p-2"
            >
                <ChevronLeft size={40} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition p-2"
            >
                <ChevronRight size={40} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
