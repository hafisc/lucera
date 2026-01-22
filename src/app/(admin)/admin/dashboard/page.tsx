"use client";

import { StatCard } from "@/components/admin/dashboard/StatCard";
import { Badge } from "@/components/admin/ui/Badge";
import { DollarSign, ShoppingCart, Package, Users, MoreHorizontal } from "lucide-react";

// MOCK DATA
const DO_RECENT_ORDERS = [
    { id: "ORD-001", customer: "Kai Cenat", date: "Oct 24, 2026", total: "Rp 3.500.000", status: "Paid" },
    { id: "ORD-002", customer: "IShowSpeed", date: "Oct 24, 2026", total: "Rp 1.200.000", status: "Pending" },
    { id: "ORD-003", customer: "Adin Ross", date: "Oct 23, 2026", total: "Rp 850.000", status: "Failed" },
    { id: "ORD-004", customer: "Duke Dennis", date: "Oct 23, 2026", total: "Rp 4.200.000", status: "Paid" },
    { id: "ORD-005", customer: "Fanum", date: "Oct 22, 2026", total: "Rp 2.150.000", status: "Paid" },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* HEADER */}
            <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white tracking-tight mb-2">
                    Overview
                </h1>
                <p className="text-neutral-400 text-sm">Welcome back. Here's what's happening today.</p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Total Revenue"
                    value="Rp 128.5M"
                    trend="+12.5%"
                    trendUp={true}
                    icon={DollarSign}
                />
                <StatCard
                    title="Total Orders"
                    value="1,245"
                    trend="+8.2%"
                    trendUp={true}
                    icon={ShoppingCart}
                />
                <StatCard
                    title="Products Sold"
                    value="850"
                    trend="-2.4%"
                    trendUp={false}
                    icon={Package}
                />
                <StatCard
                    title="Active Users"
                    value="45.2K"
                    trend="+5.6%"
                    trendUp={true}
                    icon={Users}
                />
            </div>

            {/* RECENT ACTIVITY TABLE */}
            <div className="bg-[#121212] border border-[#262626]">
                <div className="p-6 border-b border-[#262626] flex justify-between items-center">
                    <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                        Recent Orders
                    </h3>
                    <button className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#0A0A0A] text-neutral-400 uppercase text-xs font-medium tracking-wide">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Total</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#262626]">
                            {DO_RECENT_ORDERS.map((order) => (
                                <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-white group-hover:text-accent font-mono text-xs">{order.id}</td>
                                    <td className="px-6 py-4 text-neutral-300">{order.customer}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={order.status === "Paid" ? "success" : order.status === "Pending" ? "warning" : "error"}>
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-500">{order.date}</td>
                                    <td className="px-6 py-4 text-right font-medium text-white">{order.total}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="text-neutral-500 hover:text-white transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
