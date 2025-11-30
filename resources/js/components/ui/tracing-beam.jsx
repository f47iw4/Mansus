import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function TracingBeam({ children, className }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setSvgHeight(ref.current.offsetHeight);
        }
    }, []);

    return (
        <div ref={ref} className={`relative ${className || ""}`}>
            {/* Tracing line */}
            <div className="absolute left-4 md:left-8 top-0 w-px h-full">
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    className="block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 18 V ${svgHeight * 0.8} l -18 18`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                        transition={{
                            duration: 10,
                        }}
                    />
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2={svgHeight}
                        >
                            <stop stopColor="#3b82f6" stopOpacity="0" />
                            <stop stopColor="#3b82f6" />
                            <stop offset="0.325" stopColor="#8b5cf6" />
                            <stop offset="1" stopColor="#ec4899" stopOpacity="0" />
                        </motion.linearGradient>
                    </defs>
                </svg>

                {/* Animated progress line */}
                <motion.div
                    className="absolute top-0 left-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
                    style={{
                        height: svgHeight,
                        scaleY: scaleY,
                    }}
                />

                {/* Animated dot */}
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-lg"
                    style={{
                        top: useSpring(scrollYProgress, {
                            stiffness: 100,
                            damping: 30,
                        }),
                    }}
                />
            </div>

            {/* Content with padding for the line */}
            <div className="pl-12 md:pl-20">
                {children}
            </div>
        </div>
    );
}
