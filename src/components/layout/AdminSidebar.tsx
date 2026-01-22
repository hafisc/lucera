"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-surface border-r border-border h-screen sticky top-0 flex flex-col">
            <div className="p-6 border-b border-border">
                <h1 className="font-heading text-2xl uppercase font-bold text-white tracking-tighter">
                    LUCERA <span className="text-xs text-accent block">Admin Panel</span>
                </h1>
            </div>

            <nav className="flex-1 p-4 flex flex-col gap-2">
                {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-none",
                                isActive
                                    ? "bg-white text-black"
                                    : "text-secondary hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border">
                <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 w-full transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
