import React from "react";
import { motion } from "framer-motion";

export function BackgroundGradient({ children, className = "", containerClassName = "" }) {
    return (
        <div className={`relative group ${containerClassName}`}>
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundSize: "200% 200%",
                }}
            />
            <div className={`relative ${className}`}>
                {children}
            </div>
        </div>
    );
}
