import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import axios from 'axios';
import { LoaderOne } from '../components/ui/loader';

export default function Watches() {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWatches = async () => {
            try {
                const response = await axios.get('/api/productos');
                // Filter for watches and map to frontend format
                const allProducts = response.data;
                const watchProducts = allProducts
                    .filter(p => p.categoria === 'Relojes')
                    .map(p => ({
                        id: p.id_producto,
                        name: p.nombre,
                        price: parseFloat(p.precio),
                        precio: parseFloat(p.precio),
                        image: p.imagen || 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000',
                        category: p.categoria
                    }));
                setWatches(watchProducts);
            } catch (error) {
                console.error('Error fetching watches:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWatches();
    }, []);

    return (
        <div className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-gray-900 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury Watches"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                    <div className="max-w-3xl px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight"
                        >
                            Relojería de Precisión
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-white mx-auto mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-gray-200 text-xl font-light tracking-wide"
                        >
                            Donde la ingeniería se encuentra con la elegancia atemporal.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="container mx-auto px-6 py-16">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <LoaderOne />
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductGrid products={watches} title="Nuestra Colección de Relojes" />
                    </motion.div>
                )}
            </div>
        </div>
    );
}
