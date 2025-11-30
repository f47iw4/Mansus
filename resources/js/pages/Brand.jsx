import React from 'react';
import { motion } from 'framer-motion';
import { TracingBeam } from '../components/ui/tracing-beam';

export default function Brand() {
    const journeyContent = [
        {
            badge: "El Origen",
            title: "Un Viaje que Comenzó en Marruecos",
            image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Somos <span className="font-bold text-gray-900 dark:text-white">Fátima Amparo González Rhanny</span> y <span className="font-bold text-gray-900 dark:text-white">Mohammed Amine Souk Hane Baddou</span>, y nuestra pasión por la joyería nació en un encuentro de dos mundos: las tradiciones mediterráneas y la magia de los zocos de Marrakech, donde el oro y la plata cobran vida en manos de maestros artesanos.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Juntos decidimos emprender un viaje que cambiaría nuestras vidas para siempre: recorrer el mundo en busca de inspiración, técnicas ancestrales y las historias más bellas que solo las joyas pueden contar. MANSUS nació de ese viaje compartido, de nuestra búsqueda incansable de belleza y significado.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Cada pieza que creamos lleva consigo un pedazo de los lugares que hemos visitado, de las culturas que hemos conocido juntos, y del amor que hemos descubierto por este noble oficio.
                    </p>
                </>
            )
        },
        {
            badge: "Italia - Florencia",
            title: "La Cuna del Renacimiento",
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        En Florencia, aprendimos el arte de la orfebrería italiana. Los maestros del Ponte Vecchio nos enseñaron que la verdadera elegancia reside en la simplicidad sublime. Allí nació nuestro amor por las líneas limpias y los diseños atemporales que hoy caracterizan a MANSUS.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Las cúpulas de la catedral de Santa María del Fiore, los mosaicos dorados y la luz toscana se reflejan en cada collar que diseñamos con inspiración renacentista.
                    </p>
                </>
            )
        },
        {
            badge: "India - Jaipur",
            title: "La Ciudad Rosa de las Gemas",
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Jaipur nos reveló los secretos del tallado de piedras preciosas. En los mercados centenarios, conocimos a lapidarios que han perfeccionado su arte durante generaciones. Aprendimos a ver la luz dentro de cada gema, a comprender cómo una esmeralda guarda en su interior el verde de mil jardines.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Los colores vibrantes de los saris, el oro de los palacios Rajput, y la energía de sus bazares inspiraron nuestras colecciones más audaces y coloridas.
                    </p>
                </>
            )
        },
        {
            badge: "Japón - Kioto",
            title: "El Minimalismo Zen",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Los jardines zen de Kioto nos enseñaron que el espacio vacío es tan importante como la materia. Los maestros relojeros japoneses nos mostraron que la precisión es una forma de respeto, y que cada segundo cuenta una historia.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        La filosofía del "wabi-sabi" - encontrar belleza en la imperfección - influyó profundamente en cómo concebimos nuestros diseños modernos: elegantes, discretos, pero profundamente significativos.
                    </p>
                </>
            )
        },
        {
            badge: "Suiza - Ginebra",
            title: "La Precisión Absoluta",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        En los talleres de alta relojería de Ginebra, comprendimos que el lujo verdadero se mide en la perfección invisible. Cada engranaje, cada rubí sintético en el movimiento, cada acabado pulido a mano.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Los Alpes nevados, la precisión suiza, y el lago Lemán se reflejan en nuestra colección de relojes: piezas donde el tiempo se detiene para admirar la artesanía.
                    </p>
                </>
            )
        },
        {
            badge: "España - Madrid",
            title: "Un Hogar, Una Familia",
            image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1200",
            description: (
                <>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Después de años viajando, Madrid se convirtió en nuestro hogar. Aquí establecimos el primer atelier de MANSUS, en el corazón de la ciudad, donde cada mañana despertamos con la misma emoción del primer día.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Nuestro taller es un reflejo de todos los lugares que visitamos: las técnicas italianas, las gemas indias, el minimalismo japonés, la precisión suiza, y el alma marroquí que siempre nos acompaña.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-gray-900 dark:text-white">
                        Hoy, MANSUS es más que una marca de joyas. Es un puente entre culturas, una celebración de la diversidad, y un homenaje a todos los maestros que generosamente compartieron su sabiduría con nosotros.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative h-screen bg-gray-900 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2400"
                        alt="World Travel"
                        className="w-full h-full object-cover opacity-50"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

                <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="text-center text-white max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wider mb-6">
                                MANSUS
                            </h1>
                            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
                            <p className="text-xl md:text-3xl font-light tracking-wide mb-4">
                                Un Viaje Alrededor del Mundo
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 font-light italic">
                                Por Fátima Amparo González Rhanny
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 font-light italic">
                                y Mohammed Amine Souk Hane Baddou
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white rounded-full p-1"
                    >
                        <motion.div className="w-1 h-2 bg-white rounded-full mx-auto" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Journey Timeline */}
            <div className="py-20 bg-gray-50 dark:bg-gray-800">
                <TracingBeam className="px-6">
                    <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                        {journeyContent.map((item, index) => (
                            <motion.div
                                key={`content-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="mb-16"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-medium shadow-lg">
                                    {item.badge}
                                </div>

                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                                    {item.title}
                                </h2>

                                <div className="prose prose-lg max-w-none">
                                    {item.image && (
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="mb-8"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                                            />
                                        </motion.div>
                                    )}
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                        {item.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </TracingBeam>
            </div>

            {/* Final CTA */}
            <div className="py-24 bg-gray-900 dark:bg-black text-white">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Cada Joya, Una Historia
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Descubre piezas únicas que llevan consigo la esencia de cinco continentes
                            y la pasión de dos artesanos que recorrieron el mundo para traerte lo mejor.
                        </p>
                        <motion.a
                            href="/#/joyas"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                        >
                            Explorar Colección
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
