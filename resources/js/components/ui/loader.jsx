import React from "react";
import { motion } from "framer-motion";

export function LoaderOne() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-16 h-16">
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-gray-200"
                />
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute inset-2 rounded-full border-4 border-purple-500 border-t-transparent"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </div>
    );
}
