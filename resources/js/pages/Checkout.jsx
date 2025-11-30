import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, Check, Loader, Package2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Checkout() {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate checkout process
        setTimeout(() => {
            setIsProcessing(false);
            setOrderComplete(true);
            clearCart();
            // Redirect to home after 4 seconds
            setTimeout(() => navigate('/'), 4000);
        }, 2000);
    };

    if (orderComplete) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl text-center max-w-md border border-gray-100 dark:border-gray-700"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
                    >
                        <Check size={48} className="text-white" strokeWidth={3} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        ¡Pedido Confirmado!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-300 mb-2"
                    >
                        Gracias por tu compra. Recibirás un email de confirmación en breve.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl"
                    >
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Número de Pedido</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </motion.div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
                        <Loader className="animate-spin" size={16} />
                        Redirigiendo a la tienda...
                    </p>
                </motion.div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Package2 size={40} className="text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tu carrito está vacío</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Añade productos para continuar con la compra</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 font-medium"
                    >
                        Volver a la tienda
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -5 }}
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 font-medium"
                >
                    <ArrowLeft size={20} />
                    Volver a la tienda
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                Información de Envío
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        name="name"
                                        placeholder="Nombre completo *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                    />
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                    />
                                </div>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="tel"
                                    name="phone"
                                    placeholder="Teléfono *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                />
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    name="address"
                                    placeholder="Dirección *"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        name="city"
                                        placeholder="Ciudad *"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                    />
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        name="postalCode"
                                        placeholder="Código Postal *"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                    />
                                </div>

                                <div className="flex gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl text-sm text-gray-700">
                                    <Truck size={24} className="text-green-600 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Envío Gratis</p>
                                        <p>Entrega estimada: 3-5 días laborables</p>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 text-lg"
                                >
                                    <AnimatePresence mode="wait">
                                        {isProcessing ? (
                                            <motion.div
                                                key="processing"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Loader className="animate-spin" size={20} />
                                                Procesando...
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="confirm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <CreditCard size={20} />
                                                Confirmar Pedido
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-  700 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Resumen del Pedido</h3>
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {cart.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">{item.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Cantidad: {item.quantity}</p>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">€{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900 font-medium">€{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Envío</span>
                                    <span className="text-green-600 font-semibold">Gratis</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold pt-3 border-t border-gray-200">
                                    <span>Total</span>
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        €{cartTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl">
                                <ShieldCheck size={20} className="text-green-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700">Compra 100% segura y protegida</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
