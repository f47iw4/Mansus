import React from 'react';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <a href="/" className="text-2xl font-serif tracking-widest font-bold text-gray-900">
                        MANSUS
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition">Joyas</a>
                        <a href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition">Relojes</a>
                        <a href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition">Colecciones</a>
                        <a href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition">La Marca</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="text-gray-500 hover:text-gray-900 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-900 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
