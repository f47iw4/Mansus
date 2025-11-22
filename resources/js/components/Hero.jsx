import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-[70vh] bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-60">
                <img
                    src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2504&auto=format&fit=crop"
                    alt="Luxury Watch"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-sm uppercase tracking-[0.3em] mb-4 text-gray-300">Nueva Colección</h2>
                <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wider mb-8">
                    MANSUS JOYERÍA
                </h1>
                <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 transition duration-300">
                    Descubrir Catálogo
                </button>
            </div>
        </div>
    );
}
