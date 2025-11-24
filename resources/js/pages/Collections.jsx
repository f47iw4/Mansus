import React from 'react';
import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        title: 'Aurora Boreal',
        description: 'Inspirada en las luces del norte, esta colección captura la magia del cielo nocturno.',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Minimalismo Puro',
        description: 'Líneas limpias y formas geométricas para la mujer moderna.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2574&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Herencia Real',
        description: 'Piezas clásicas que evocan la grandeza de las antiguas monarquías.',
        image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2574&auto=format&fit=crop'
    }
];

export default function Collections() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-gray-900 mb-4">
                        Nuestras Colecciones
                    </h1>
                    <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
                </div>

                <div className="space-y-32">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="w-full md:w-1/2 h-[600px] overflow-hidden group">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left px-8">
                                <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">Colección {2025}</span>
                                <h2 className="text-4xl font-serif text-gray-900 mb-6">{collection.title}</h2>
                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    {collection.description}
                                </p>
                                <button className="bg-gray-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gray-800 transition">
                                    Ver Colección
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
