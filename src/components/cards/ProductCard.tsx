"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export interface Product {
    id: string;
    name: string;
    price: string;
    image?: string;
    category?: string;
}

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group relative flex flex-col gap-3">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-white/5">

                {/* Placeholder / Image */}
                <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 ease-out group-hover:scale-105">
                    {/* If we had real images, they would go here. For now, a stylish gradient placeholder */}
                    <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-700 flex items-center justify-center text-neutral-600 font-heading text-4xl opacity-30">
                        LUCERA
                    </div>
                </div>

                {/* Quick Add Button (Bottom Center) - appears on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 px-4">
                    <Button variant="primary" fullWidth className="text-xs py-2 h-10 shadow-xl" icon={<Plus className="w-3 h-3" />}>
                        Quick Add
                    </Button>
                </div>

                {/* Badges / Tags could go here */}
                {product.category && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-white border border-white/10">
                        {product.category}
                    </span>
                )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 items-start">
                <h3 className="font-bold text-white text-[10px] md:text-sm uppercase tracking-wide group-hover:text-accent transition-colors cursor-pointer line-clamp-1">
                    {product.name}
                </h3>
                <p className="text-secondary text-[10px] md:text-sm font-light">
                    {product.price}
                </p>
            </div>
        </div>
    );
}
