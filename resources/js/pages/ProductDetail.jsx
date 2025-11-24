import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, Star, Truck, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    // Mock product data (in a real app, fetch based on ID)
    const product = {
        id: parseInt(id),
        name: 'Anillo de Diamante Solitario',
        price: 1299.00,
        description: 'Un anillo clásico y atemporal que captura la esencia de la elegancia. Forjado en oro blanco de 18 quilates y coronado con un diamante de corte brillante certificado.',
        images: [
            'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000'
        ],
        features: ['Oro Blanco 18k', 'Diamante 0.5ct', 'Certificado GIA', 'Garantía de por vida']
    };

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="pt-24 pb-16 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Images */}
                <div className="space-y-4">
                    <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {product.images.map((img, idx) => (
                            <div key={idx} className="aspect-square bg-gray-100 overflow-hidden rounded-lg">
                                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-2 flex items-center gap-2 text-yellow-500 text-sm">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <span className="text-gray-500">(24 reseñas)</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-2xl text-gray-900 font-light mb-6">€{product.price.toFixed(2)}</p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="space-y-4 mb-8">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`w-full py-4 uppercase tracking-widest transition-all flex items-center justify-center gap-3 mb-8 font-medium rounded-lg ${isAdded
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
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

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                            <Truck size={20} />
                            <span>Envío Gratuito</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                            <ShieldCheck size={20} />
                            <span>Garantía de 2 años</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
