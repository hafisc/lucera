"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Layers,
    Settings,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { label: "CMS / Content", href: "/admin/cms", icon: Layers },
    { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Reusable Nav Item Component
    const NavItem = ({ item }: { item: typeof MENU_ITEMS[0] }) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
            <Link
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                    "group flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 relative",
                    isActive
                        ? "text-white bg-white/5"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                )}
            >
                {/* Active Indicator Bar */}
                {isActive && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white to-neutral-400"
                    />
                )}

                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-white" : "text-neutral-500 group-hover:text-white")} />
                <span className="uppercase tracking-wide">{item.label}</span>
            </Link>
        );
    };

    return (
        <>
            {/* MOBILE TRIGGER */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black border border-white/20 text-white"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                        />
                        {/* Sidebar Motion */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 left-0 w-64 bg-[#050505] border-r border-[#262626] z-50 flex flex-col md:hidden"
                        >
                            <div className="p-6 border-b border-[#262626] flex justify-between items-center">
                                <div>
                                    <h1 className="font-heading text-xl font-bold text-white tracking-tight">LUCERA</h1>
                                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Admin Panel</span>
                                </div>
                                <button onClick={() => setIsMobileOpen(false)} className="text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <nav className="flex-1 py-6 flex flex-col gap-1">
                                {MENU_ITEMS.map((item) => <NavItem key={item.href} item={item} />)}
                            </nav>
                            <div className="p-6 border-t border-[#262626]">
                                <button className="flex items-center gap-2 text-red-500 text-sm font-medium hover:text-red-400 uppercase tracking-wide">
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* DESKTOP SIDEBAR (Static) */}
            <aside className="hidden md:flex w-64 flex-col bg-[#050505] border-r border-[#262626] fixed inset-y-0 left-0">
                <div className="p-8 border-b border-[#262626]">
                    <h1 className="font-heading text-2xl font-bold text-white tracking-tight">LUCERA</h1>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] block mt-1">Admin Panel</span>
                </div>

                <nav className="flex-1 py-8 flex flex-col gap-1">
                    {MENU_ITEMS.map((item) => (
                        <NavItem key={item.href} item={item} />
                    ))}
                </nav>

                <div className="p-8 border-t border-[#262626]">
                    <button className="flex items-center gap-3 text-red-500 text-sm font-medium hover:text-red-400 uppercase tracking-wide transition-colors">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
