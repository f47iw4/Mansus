import React, { useState, useEffect } from 'react';
import { ShoppingBag, Loader } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function ProductGrid({ category = 'Todo', searchQuery = '' }) {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/admin/api/productos');
                const data = response.data.data || response.data;
                // Map database products to frontend format
                const mappedProducts = data.map(p => ({
                    id: p.id_producto,
                    name: p.nombre,
                    price: parseFloat(p.precio),
                    image: p.imagen || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
                    category: p.categoria || 'General'
                }));
                setProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching products", error);
                // Fallback to empty array on error
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let result = products;

        // Filter by Category
        if (category !== 'Todo') {
            result = result.filter(p => p.category === category);
        }

        // Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        setFilteredProducts(result);
    }, [category, searchQuery, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader className="animate-spin text-gray-400" size={32} />
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No se encontraron productos.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="group relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Quick Add Button - Desktop (on hover) */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                                className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-full shadow-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 hover:text-white items-center gap-2 font-medium text-sm uppercase tracking-wider z-10"
                            >
                                <ShoppingBag size={18} />
                                Añadir al Carrito
                            </button>

                            {/* Quick Add Icon - Mobile (always visible) */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                                className="md:hidden absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300 z-10"
                            >
                                <ShoppingBag size={20} />
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
                                </div>
                                <p className="text-lg font-semibold text-gray-900 ml-2">€{product.price.toFixed(2)}</p>
                            </div>

                            {/* Mobile Add Button - Full Width */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                                className="md:hidden w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide"
                            >
                                <ShoppingBag size={16} />
                                Añadir
                            </button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
