import React from 'react';
import { motion } from 'framer-motion';

const BentoGridItem = ({ title, description, header, className, icon }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ${className}`}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default function FeaturedGrid() {
    const items = [
        {
            title: "Colección Eterna",
            description: "Joyas que trascienden el tiempo con diseños clásicos y elegantes.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" /></div>,
            className: "md:col-span-2",
        },
        {
            title: "Minimalismo Puro",
            description: "La belleza de la simplicidad en cada detalle.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1887&auto=format&fit=crop" className="w-full h-full object-cover" /></div>,
            className: "md:col-span-1",
        },
        {
            title: "Artesanía Local",
            description: "Hecho a mano por maestros artesanos de nuestra región.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" /></div>,
            className: "md:col-span-1",
        },
        {
            title: "Edición Limitada",
            description: "Piezas únicas para momentos inolvidables.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1887&auto=format&fit=crop" className="w-full h-full object-cover" /></div>,
            className: "md:col-span-2",
        },
    ];

    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                />
            ))}
        </BentoGrid>
    );
}
