import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif tracking-widest">MANSUS</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Creada por Fátima Amparo González Rhanny y Mohammed Amine Souk Hane Baddou.
                            MANSUS es más que joyería, es un viaje por el mundo capturado en cada pieza única.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:info@mansus.com" className="text-gray-400 hover:text-white transition">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Explorar</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/#/joyas" className="hover:text-white transition">Joyas</a></li>
                            <li><a href="/#/relojes" className="hover:text-white transition">Relojes</a></li>
                            <li><a href="/#/marca" className="hover:text-white transition">Nuestra Historia</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                                <span>Madrid, España<br />Calle Gran Vía 28</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0" />
                                <span>+34 91 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0" />
                                <span>info@mansus.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 MANSUS Joyería. Creada por Fátima Amparo González Rhanny y Mohammed Amine Souk Hane Baddou.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-600">Hecho con ❤️ en Madrid</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
