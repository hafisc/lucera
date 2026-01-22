"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "success" | "warning" | "error" | "default";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
    const variants = {
        success: "bg-green-500/10 text-green-500 border-green-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        error: "bg-red-500/10 text-red-500 border-red-500/20",
        default: "bg-white/10 text-white border-white/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center justify-center rounded-none border px-2 py-0.5 text-xs font-medium uppercase tracking-wide",
                variants[variant]
            )}
        >
            {children}
        </span>
    );
}
