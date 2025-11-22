import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // In a real app, we would fetch from the API.
        // For now, we'll use the data passed from the blade view or fetch it.
        // Let's assume we fetch it.
        // Since we haven't set up a JSON API endpoint yet (only returning views),
        // we might need to adjust the controller or mock it here.
        // For this demo, I'll mock it to ensure the UI looks good immediately.

        setProducts([
            { id: 1, nombre: 'Seamaster Diver 300M', precio: 5600, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop' },
            { id: 2, nombre: 'Speedmaster Moonwatch', precio: 7200, image: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?w=800&auto=format&fit=crop' },
            { id: 3, nombre: 'Constellation Co-Axial', precio: 9100, image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&auto=format&fit=crop' },
            { id: 4, nombre: 'De Ville Prestige', precio: 4200, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop' },
        ]);
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-gray-900 mb-4">Catálogo Exclusivo</h2>
                    <div className="w-16 h-0.5 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 bg-white aspect-[3/4]">
                                <img
                                    src={product.image}
                                    alt={product.nombre}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 translate-y-full group-hover:translate-y-0 transition duration-300 text-center">
                                    <span className="text-xs uppercase tracking-widest text-gray-900">Vista Rápida</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-serif text-gray-900 mb-2">{product.nombre}</h3>
                                <p className="text-sm text-gray-500 tracking-wider">${product.precio.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
