import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

export default function Jewelry() {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';

    const [selectedCategory, setSelectedCategory] = useState('Todo');
    const [searchQuery, setSearchQuery] = useState(initialSearch);

    useEffect(() => {
        setSearchQuery(searchParams.get('search') || '');
    }, [searchParams]);

    const categories = ['Todo', 'Anillos', 'Collares', 'Pendientes', 'Pulseras'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-gray-900 mb-4">
                        Joyas Exclusivas
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {searchQuery
                            ? `Resultados de búsqueda para "${searchQuery}"`
                            : 'Descubre nuestra colección completa de joyas finas, diseñadas para realzar tu belleza natural.'}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-8 mb-12 text-sm uppercase tracking-widest text-gray-500 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`pb-1 transition-colors ${selectedCategory === category
                                    ? 'text-gray-900 border-b border-gray-900'
                                    : 'hover:text-gray-900'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <ProductGrid category={selectedCategory} searchQuery={searchQuery} />
            </div>
        </motion.div>
    );
}
