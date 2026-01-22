"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    trendUp: boolean; // true = green, false = red
    icon: LucideIcon;
}

export function StatCard({ title, value, trend, trendUp, icon: Icon }: StatCardProps) {
    return (
        <div className="bg-[#121212] border border-[#262626] p-6 flex flex-col justify-between group hover:border-[#404040] transition-colors h-32">
            <div className="flex justify-between items-start">
                <h3 className="text-neutral-400 text-xs font-medium uppercase tracking-widest">
                    {title}
                </h3>
                <Icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
            </div>

            <div className="flex items-end justify-between">
                <span className="font-heading text-3xl font-bold text-white tracking-tight">
                    {value}
                </span>
                <span className={`text-xs font-medium ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
                    {trend}
                </span>
            </div>
        </div>
    );
}
