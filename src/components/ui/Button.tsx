"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    isLoading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", isLoading, fullWidth, icon, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-none uppercase tracking-wide text-sm font-sans";

        const variants = {
            primary: "bg-white text-black hover:bg-accent hover:scale-[1.02] active:scale-[0.98]",
            outline: "bg-transparent border border-border text-white hover:border-white hover:bg-white/5",
            ghost: "bg-transparent text-secondary hover:text-white hover:bg-white/5",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
                disabled={isLoading}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {!isLoading && icon && <span className="mr-1">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
