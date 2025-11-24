import React from 'react';
import { motion } from 'framer-motion';

export default function Brand() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=2000"
                    alt="Workshop"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center text-white px-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest mb-6">MANSUS</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide uppercase">Desde 1985</p>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif text-gray-900 mb-6">Artesanía y Tradición</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            En MANSUS, creemos que cada pieza de joyería cuenta una historia única. Fundada en 1985 por maestros artesanos, nuestra marca se ha convertido en sinónimo de excelencia, calidad inquebrantable y diseño atemporal.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Cada diamante es seleccionado a mano, cada metal precioso es forjado con pasión, y cada reloj es ensamblado con la precisión que solo décadas de experiencia pueden otorgar. No solo vendemos joyas; creamos legados que perduran por generaciones.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1617038224558-28ad3fb558df?auto=format&fit=crop&q=80&w=1000"
                            alt="Craftsmanship"
                            className="w-full h-full object-cover rounded-sm shadow-2xl"
                        />
                    </motion.div>
                </div>

                <div className="mt-32 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif text-gray-900 mb-12">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Excelencia', desc: 'Búsqueda incansable de la perfección en cada detalle.' },
                            { title: 'Sostenibilidad', desc: 'Compromiso con el abastecimiento ético y responsable.' },
                            { title: 'Innovación', desc: 'Fusionando técnicas tradicionales con diseño moderno.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-6 bg-gray-50 rounded-lg"
                            >
                                <h3 className="text-xl font-serif text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
