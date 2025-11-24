import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">Selección Exclusiva</span>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900">
                        Nuestros Favoritos
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
                </div>
                <ProductGrid />
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop"
                                alt="Artesanía"
                                className="w-full h-[600px] object-cover shadow-xl"
                            />
                        </div>
                        <div className="order-1 md:order-2 md:pl-12">
                            <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">La Excelencia</span>
                            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-900 mb-6">
                                Artesanía Sin Igual
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Cada pieza de MANSUS es el resultado de horas de dedicación de nuestros maestros artesanos.
                                Utilizamos solo los materiales más nobles y técnicas ancestrales combinadas con tecnología moderna
                                para crear joyas que perduran por generaciones.
                            </p>
                            <button className="border-b border-gray-900 pb-1 text-sm uppercase tracking-widest hover:text-gray-600 hover:border-gray-600 transition">
                                Conoce nuestra historia
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
