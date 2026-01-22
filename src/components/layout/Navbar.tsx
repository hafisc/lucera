"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/shop", label: "Shop" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 md:px-12 border-b border-transparent transition-all duration-300",
                    scrolled ? "bg-black/50 backdrop-blur-md border-white/5" : "bg-transparent"
                )}
            >
                {/* LOGO */}
                <Link href="/" className="z-50">
                    <span className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase chrome-text">
                        LUCERA
                    </span>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors uppercase tracking-widest relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* ICONS & MOBILE TOGGLE */}
                <div className="flex items-center gap-6 z-50 text-white">
                    <button className="hover:text-accent transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="relative hover:text-accent transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-white text-[8px] font-bold text-black">
                            0
                        </span>
                    </button>
                    <button className="hover:text-accent transition-colors hidden md:block">
                        <User className="w-5 h-5" />
                    </button>


                    <button
                        className="md:hidden hover:text-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // smooth scale-like easing
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white pt-20"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-heading text-6xl font-bold uppercase tracking-tight hover:text-stroke-white text-transparent bg-clip-text bg-white transition-all hover:tracking-normal"
                                        style={{ WebkitTextStroke: "1px transparent" }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex flex-col items-center gap-4 text-secondary text-sm"
                        >
                            <p>EST. 2026 • WORLDWIDE</p>
                            <div className="flex gap-4">
                                <span className="underline">LOGIN</span>
                                <span className="underline">SEARCH</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
