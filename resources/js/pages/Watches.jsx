import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';

export default function Watches() {
    // Mock data for watches
    const watches = [
        { id: 101, name: 'Chronograph Master', price: 1250, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000', category: 'Classic' },
        { id: 102, name: 'Diver Pro 300', price: 890, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000', category: 'Sport' },
        { id: 103, name: 'Minimalist Black', price: 450, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1000', category: 'Modern' },
        { id: 104, name: 'Vintage Gold', price: 2100, image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=1000', category: 'Vintage' },
        { id: 105, name: 'Aviator Series', price: 950, image: 'https://images.unsplash.com/photo-1508057198894-247b986633e5?auto=format&fit=crop&q=80&w=1000', category: 'Sport' },
        { id: 106, name: 'Royal Oak Style', price: 3500, image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&q=80&w=1000', category: 'Luxury' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Watches"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-2xl px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-serif text-white mb-4"
                        >
                            Relojería de Precisión
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-200 text-lg"
                        >
                            Donde la ingeniería se encuentra con la elegancia.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="container mx-auto px-6 py-16">
                <ProductGrid products={watches} title="Nuestra Colección de Relojes" />
            </div>
        </div>
    );
}
