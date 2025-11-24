import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';

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
            // Redirect to home after 3 seconds
            setTimeout(() => navigate('/'), 3000);
        }, 2000);
    };

    if (orderComplete) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md"
                >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Pedido Confirmado!</h2>
                    <p className="text-gray-600 mb-6">
                        Gracias por tu compra. Recibirás un email de confirmación en breve.
                    </p>
                    <p className="text-sm text-gray-500">Redirigiendo a la tienda...</p>
                </motion.div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Volver a la tienda
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
                >
                    <ArrowLeft size={20} />
                    Volver a la tienda
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Información de Envío</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre completo"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Teléfono"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Dirección"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Ciudad"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                    />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Código Postal"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                    />
                                </div>

                                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                                    <Truck size={20} className="text-green-600 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Envío Gratis</p>
                                        <p>Entrega estimada: 3-5 días laborables</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isProcessing ? (
                                        <>Procesando...</>
                                    ) : (
                                        <>
                                            <CreditCard size={20} />
                                            Confirmar Pedido
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Resumen del Pedido</h3>
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                                            <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                                            <p className="text-sm font-medium text-gray-900 mt-1">€{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900">€{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Envío</span>
                                    <span className="text-green-600 font-medium">Gratis</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                                    <span>Total</span>
                                    <span>€{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-6 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                                <ShieldCheck size={16} className="text-green-600" />
                                <span>Compra 100% segura</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
