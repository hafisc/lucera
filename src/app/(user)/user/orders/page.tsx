"use client";

import { Package, Truck, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Reusing our sharp button
import Link from "next/link";
import { cn } from "@/lib/utils";

// Types
type OrderStatus = "Unpaid" | "Processing" | "Shipped" | "Completed";

interface Order {
    id: string;
    date: string;
    total: string;
    status: OrderStatus;
    items: string[]; // Image URLs
}

// MOCK DATA
const ORDERS: Order[] = [
    {
        id: "#LCR-2026-X892",
        date: "Oct 24, 2026",
        total: "Rp 3.500.000",
        status: "Processing",
        items: ["/mock/item1.jpg", "/mock/item2.jpg"]
    },
    {
        id: "#LCR-2026-B110",
        date: "Sep 12, 2026",
        total: "Rp 1.200.000",
        status: "Completed",
        items: ["/mock/item3.jpg"]
    }
];

const StatusBadge = ({ status }: { status: OrderStatus }) => {
    const styles = {
        Unpaid: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10",
        Processing: "text-blue-500 border-blue-500/20 bg-blue-500/10",
        Shipped: "text-white border-white/40 bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]", // Chrome effect
        Completed: "text-green-500 border-green-500/20 bg-green-500/10",
    };

    const Icons = {
        Unpaid: Clock,
        Processing: Package,
        Shipped: Truck,
        Completed: CheckCircle2
    };

    const Icon = Icons[status];

    return (
        <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] uppercase tracking-wider font-medium", styles[status])}>
            <Icon className="w-3 h-3" />
            {status}
        </span>
    );
};

export default function OrderHistoryPage() {
    if (ORDERS.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 bg-white/5 p-12">
                <Package className="w-12 h-12 text-neutral-600 mb-4" />
                <h3 className="font-heading text-2xl uppercase text-white mb-2">No Orders Yet</h3>
                <p className="text-secondary mb-6 max-w-sm">You haven&apos;t started your era yet. Browse our collection and start building your legacy.</p>
                <Link href="/shop">
                    <Button variant="primary">Shop Now</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <h1 className="font-heading text-3xl md:text-4xl uppercase font-bold text-white tracking-tight border-b border-white/10 pb-6">
                Order History
            </h1>

            <div className="flex flex-col gap-6">
                {ORDERS.map((order) => (
                    <div
                        key={order.id}
                        className="bg-[#121212] border border-[#262626] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-[#404040] transition-colors"
                    >
                        {/* Order Info */}
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="font-mono text-white font-bold">{order.id}</span>
                                <StatusBadge status={order.status} />
                            </div>
                            <div className="text-sm text-secondary">
                                <span className="mr-4">Date: {order.date}</span>
                                <span className="text-white font-medium">Total: {order.total}</span>
                            </div>

                            {/* Thumbnails (Mock) */}
                            <div className="flex gap-2 mt-4">
                                {order.items.map((_, i) => (
                                    <div key={i} className="w-10 h-12 bg-neutral-800 border border-white/10" />
                                ))}
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button variant="outline" className="w-full md:w-auto text-xs px-4 py-2">
                                View Details
                            </Button>
                            {order.status !== 'Completed' && (
                                <Button variant="ghost" className="hidden md:flex text-xs">
                                    Track Package
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
