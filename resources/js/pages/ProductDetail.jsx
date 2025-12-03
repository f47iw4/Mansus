import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Star, Truck, ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { LoaderOne } from '../components/ui/loader';
import { motion } from 'framer-motion';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/productos/${id}`);
                const data = response.data.data || response.data;

                // Ensure price is a number
                const formattedProduct = {
                    ...data,
                    price: parseFloat(data.precio),
                    image: data.imagen || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
                    features: [
                        data.material || 'Material Premium',
                        data.categoria || 'Joyería Exclusiva',
                        'Certificado de Autenticidad',
                        'Garantía de por vida'
                    ]
                };

                setProduct(formattedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!product) return;

        // Format for cart context
        const cartItem = {
            id: product.id_producto,
            name: product.nombre,
            price: product.price,
            precio: product.price,
            image: product.image,
            category: product.categoria
        };

        addToCart(cartItem);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <LoaderOne />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <h2 className="text-2xl font-serif mb-4">Producto no encontrado</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 container mx-auto px-6 bg-white dark:bg-gray-900 min-h-screen">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
                <ArrowLeft size={20} />
                Volver a la colección
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Images Section */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="aspect-square bg-gray-50 dark:bg-gray-800 overflow-hidden rounded-2xl shadow-sm"
                    >
                        <img
                            src={product.image}
                            alt={product.nombre}
                            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="mb-4 flex items-center gap-4">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs uppercase tracking-wider font-medium rounded-full">
                                {product.categoria}
                            </span>
                            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="text-gray-400 ml-2 text-xs">(Nuevo)</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight">
                            {product.nombre}
                        </h1>

                        <p className="text-3xl text-gray-900 dark:text-white font-light mb-8">
                            €{product.price.toFixed(2)}
                        </p>

                        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-none">
                            <p>{product.descripcion}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`w-full py-5 uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 font-medium rounded-xl shadow-lg ${isAdded
                                    ? 'bg-green-600 text-white scale-100'
                                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1'
                                    }`}
                            >
                                {isAdded ? (
                                    <>
                                        <Check size={20} />
                                        ¡Añadido al Carrito!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingBag size={20} />
                                        Añadir al Carrito
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                Envío asegurado gratuito a todo el mundo · Devoluciones gratuitas en 30 días
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white">
                                    <Truck size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Envío Express</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Entrega en 24-48 horas laborables</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white">
                                    <ShieldCheck size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Garantía Oficial</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Certificado de autenticidad incluido</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
