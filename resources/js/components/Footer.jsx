import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif tracking-widest">MANSUS</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevando el arte de la joyería contemporánea.
                            Diseños exclusivos para momentos inolvidables.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Explorar</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Nuevas Llegadas</a></li>
                            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition">Colección Nupcial</a></li>
                            <li><a href="#" className="hover:text-white transition">Regalos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Ayuda</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Envíos y Devoluciones</a></li>
                            <li><a href="#" className="hover:text-white transition">Guía de Tallas</a></li>
                            <li><a href="#" className="hover:text-white transition">Cuidado de Joyas</a></li>
                            <li><a href="#" className="hover:text-white transition">Contáctanos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir novedades exclusivas.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-transparent border-b border-gray-700 py-2 text-sm focus:outline-none focus:border-white transition"
                            />
                            <button className="text-sm uppercase tracking-widest text-left hover:text-gray-300 transition">
                                Suscribirse →
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2025 MANSUS Joyería. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacidad</a>
                        <a href="#" className="hover:text-white transition">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
