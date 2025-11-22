import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductGrid from './ProductGrid';

export default function App() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white selection:bg-red-100 selection:text-red-900">
            <Header />
            <main>
                <Hero />
                <ProductGrid />
            </main>
            <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-500">© 2025 Mansus Joyería. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
