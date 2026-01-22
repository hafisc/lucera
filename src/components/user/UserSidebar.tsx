"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, MapPin, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MENU_ITEMS = [
    { label: "Profile", href: "/user/profile", icon: User },
    { label: "My Orders", href: "/user/orders", icon: Package },
    { label: "Addresses", href: "/user/address", icon: MapPin },
];

export function UserSidebar() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col w-full md:w-64 gap-8">
            {/* DESKTOP HEADER - Hidden on mobile if you want cleaner look, or keep */}
            <div className="hidden md:block pb-6 border-b border-white/10">
                <h2 className="font-heading text-xl uppercase tracking-widest text-white">
                    My Account
                </h2>
                <p className="text-secondary text-xs mt-1">Welcome back, Starboy.</p>
            </div>

            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-1 scrollbar-hide">
                {MENU_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group relative flex items-center gap-3 px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 min-w-[140px] md:min-w-0 border-b md:border-b-0 border-transparent",
                                isActive
                                    ? "text-white bg-white/5 md:bg-transparent"
                                    : "text-secondary hover:text-white"
                            )}
                        >
                            {/* Active Indicator (Desktop: Vertical Line, Mobile: Bottom Border) */}

                            {/* Desktop Indicator - Left Border */}
                            <span className={cn(
                                "hidden md:block absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300",
                                isActive ? "bg-accent shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-transparent group-hover:bg-white/20"
                            )} />

                            <Icon className={cn("w-4 h-4", isActive ? "text-accent" : "text-neutral-500")} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}

                <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium uppercase tracking-wider text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 min-w-[140px] md:min-w-0 mt-0 md:mt-8">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </nav>
    );
}
