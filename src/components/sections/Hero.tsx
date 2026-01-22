"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button"; // Check path
import { ArrowRight } from "lucide-react";

const MARQUEE_TEXT = "LUCERA WORLDWIDE • EST 2026 • LIMITED DROP • NEW COLLECTION • READY TO WEAR • ";

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">
            {/* Background Simulation (Video Placeholder) */}
            <div className="absolute inset-0 z-0 bg-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80" />
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                {/* Optional decorative grid or noise can go here */}
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-[-5vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-secondary text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
                        Future Fashion
                    </span>
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.9] mb-6">
                        The New <span className="text-secondary/50">Era</span>
                    </h1>
                    <p className="max-w-md mx-auto text-secondary text-base md:text-lg mb-8 font-light">
                        Timeless pieces for the modern starboy. Defined by sharp edges and industrial luxury.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                            Shop Now
                        </Button>
                        <Button variant="outline">
                            View Lookbook
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Infinite Marquee Footer */}
            <div className="absolute bottom-0 left-0 w-full bg-black border-t border-white/10 overflow-hidden py-3 z-30">
                <div className="relative flex whitespace-nowrap overflow-hidden">
                    <motion.div
                        className="flex items-center gap-8 min-w-full font-heading text-sm md:text-lg uppercase tracking-widest text-secondary"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    >
                        {/* Duplicate text enough times to fill screen + buffer */}
                        {[...Array(10)].map((_, i) => (
                            <span key={i}>{MARQUEE_TEXT}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
