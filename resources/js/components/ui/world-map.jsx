import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WorldMap({ dots = [] }) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (!canvasRef.current || dimensions.width === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw animated connections
        dots.forEach((dot, index) => {
            const { start, end } = dot;

            // Convert lat/lng to canvas coordinates (Mercator projection)
            const startX = ((start.lng + 180) * canvas.width) / 360;
            const startY = ((90 - start.lat) * canvas.height) / 180;
            const endX = ((end.lng + 180) * canvas.width) / 360;
            const endY = ((90 - end.lat) * canvas.height) / 180;

            // Draw curved line (Bezier curve)
            ctx.beginPath();
            ctx.moveTo(startX, startY);

            // Control point for curve (midpoint raised)
            const cpX = (startX + endX) / 2;
            const cpY = Math.min(startY, endY) - Math.abs(startX - endX) * 0.2;

            ctx.quadraticCurveTo(cpX, cpY, endX, endY);

            // Gradient stroke
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${0.6 + index * 0.1})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${0.6 + index * 0.1})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw start dot (pulse effect)
            const pulseSize = 6 + Math.sin(Date.now() / 500 + index) * 2;
            ctx.beginPath();
            ctx.arc(startX, startY, pulseSize, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(59, 130, 246, 0.9)";
            ctx.fill();
            ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw end dot
            ctx.beginPath();
            ctx.arc(endX, endY, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(147, 51, 234, 0.9)";
            ctx.fill();
            ctx.strokeStyle = "rgba(147, 51, 234, 0.3)";
            ctx.lineWidth = 3;
            ctx.stroke();
        });

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [dimensions, dots]);

    return (
        <div ref={containerRef} className="w-full h-full relative bg-slate-950 rounded-xl overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Canvas for animated lines */}
            <canvas
                ref={canvasRef}
                className="w-full h-full absolute top-0 left-0 z-10"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/10 pointer-events-none z-20" />

            {/* World Map SVG */}
            <svg
                className="w-full h-full absolute top-0 left-0 pointer-events-none opacity-30 z-0"
                viewBox="0 0 1000 500"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                        <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
                    </linearGradient>
                </defs>
                <g fill="url(#mapGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5">
                    {/* Simplified world continents */}
                    {/* North America */}
                    <path d="M 150 80 Q 180 70 200 85 L 220 90 L 240 95 Q 260 100 270 120 L 280 140 L 275 160 L 265 180 Q 250 190 235 185 L 210 180 L 190 175 Q 170 165 160 150 L 155 130 Q 145 110 150 80 Z" />

                    {/* South America */}
                    <path d="M 260 210 Q 270 200 280 210 L 290 230 L 295 260 Q 298 290 295 310 L 288 330 Q 280 345 270 340 L 255 335 L 245 320 Q 238 300 240 280 L 245 250 Q 250 225 260 210 Z" />

                    {/* Europe */}
                    <path d="M 480 90 Q 500 85 515 92 L 530 100 L 545 108 Q 555 115 558 125 L 560 140 Q 558 155 545 160 L 525 163 L 505 160 Q 490 155 485 145 L 482 130 Q 480 110 480 90 Z" />

                    {/* Africa */}
                    <path d="M 500 170 Q 520 165 540 172 L 555 185 L 565 205 Q 570 230 568 255 L 560 285 Q 550 305 535 315 L 515 320 Q 495 318 485 305 L 478 285 Q 475 260 478 235 L 485 205 Q 492 185 500 170 Z" />

                    {/* Asia */}
                    <path d="M 600 80 Q 630 75 660 82 L 690 92 L 720 105 Q 750 118 770 135 L 785 155 Q 795 175 790 195 L 780 215 Q 765 230 745 235 L 715 238 L 685 235 Q 655 228 635 215 L 615 195 Q 600 175 598 155 L 600 130 Q 602 105 600 80 Z" />

                    {/* Australia */}
                    <path d="M 760 310 Q 780 305 800 312 L 820 325 Q 835 340 838 358 L 835 375 Q 828 390 810 395 L 785 397 Q 765 393 755 380 L 750 360 Q 748 340 760 310 Z" />
                </g>
            </svg>
        </div>
    );
}
