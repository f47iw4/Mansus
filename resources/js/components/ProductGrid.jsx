import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { LoaderOne } from './ui/loader';
import { BackgroundGradient } from './ui/background-gradient';

export default function ProductGrid({ category = 'Todo', searchQuery = '', products: propProducts = null, title }) {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (propProducts) {
                setProducts(propProducts);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get('/api/productos');
                const data = response.data.data || response.data;
                // Map database products to frontend format
                const mappedProducts = data.map(p => ({
                    id: p.id_producto,
                    name: p.nombre,
                    price: parseFloat(p.precio),
                    precio: parseFloat(p.precio), // For CartContext compatibility
                    image: p.imagen || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
                    category: p.categoria || 'General'
                }));
                setProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching products", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [propProducts]);

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
                <LoaderOne />
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
        <div>
            {title && (
                <h2 className="text-2xl font-serif text-gray-900 mb-8 text-center md:text-left">{title}</h2>
            )}
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
                        >
                            <BackgroundGradient className="rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden">
                                <div className="group relative">
                                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Quick Add Button - Desktop (on hover) */}
                                        <motion.button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-full shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 hover:text-white items-center gap-2 font-medium text-sm uppercase tracking-wider z-10"
                                        >
                                            <ShoppingBag size={18} />
                                            Añadir al Carrito
                                        </motion.button>

                                        {/* Quick Add Icon - Mobile */}
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
                                    <div className="p-4 space-y-3">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <h3 className="text-sm font-semibold text-gray-900 dark:text-neutral-200 line-clamp-2">
                                                    {product.name}
                                                </h3>
                                                <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400 uppercase tracking-wide">{product.category}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                                €{product.price.toFixed(2)}
                                            </span>
                                            {/* Mobile Add Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    addToCart(product);
                                                }}
                                                className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all flex items-center gap-2 text-xs font-bold"
                                            >
                                                <ShoppingBag size={14} />
                                                Añadir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
