import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';
import FeaturedGrid from '../components/BentoGrid';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />

            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 text-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 block">Selección Exclusiva</span>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 dark:text-white">
                        Nuestros Favoritos
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-6"></div>
                </div>
                <ProductGrid />
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 block">Descubre Más</span>
                        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 dark:text-white">
                            Colecciones Destacadas
                        </h2>
                    </div>
                    <FeaturedGrid />

                    <div className="mt-16 text-center">
                        <div className="max-w-2xl mx-auto">
                            <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 block">La Excelencia</span>
                            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 dark:text-white mb-6">
                                Artesanía Sin Igual
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Cada pieza de MANSUS es el resultado de horas de dedicación de nuestros maestros artesanos.
                                Utilizamos solo los materiales más nobles y técnicas ancestrales combinadas con tecnología moderna
                                para crear joyas que perduran por generaciones.
                            </p>
                            <a href="/joyas" className="inline-block border-b border-gray-900 dark:border-white pb-1 text-sm uppercase tracking-widest text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300 transition">
                                Ver Catálogo Completo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
