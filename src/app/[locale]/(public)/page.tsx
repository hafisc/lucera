import { Hero } from "@/components/sections/Hero";
import { ProductCard, Product } from "@/components/cards/ProductCard";

// Mock Data
const PRODUCTS: Product[] = [
    { id: "1", name: "Tactical Vest V2", price: "$120.00", category: "Outerwear" },
    { id: "2", name: "Cyber Cargo Pants", price: "$180.00", category: "Bottoms" },
    { id: "3", name: "Oversized 'Void' Tee", price: "$65.00", category: "Tops" },
    { id: "4", name: "Chrome Pendant Chain", price: "$45.00", category: "Accessories" },
    { id: "5", name: "Modular Hoodie", price: "$140.00", category: "Tops" },
    { id: "6", name: "Tech Runner 3000", price: "$220.00", category: "Footwear" },
    { id: "7", name: "Balaclava Mask", price: "$35.00", category: "Headwear" },
    { id: "8", name: "Industrial Belt", price: "$50.00", category: "Accessories" },
];

export default function HomePage() {
    return (
        <>
            {/* <Hero /> */}

            <section className="w-full py-24 px-6 md:px-12 bg-background z-10 relative">
                <div className="max-w-[1400px] mx-auto">
                    {/* Section Header */}
                    {/* <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-white/5 pb-6">
                        <h2 className="font-heading text-4xl md:text-5xl uppercase font-bold text-white tracking-tight">
                            Latest Drops
                        </h2>
                        <span className="text-secondary text-sm uppercase tracking-widest pb-1">
                            Fall / Winter 2026
                        </span>
                    </div> */}

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
                        {PRODUCTS.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* CTA at bottom of grid */}
                    <div className="flex justify-center mt-20">
                        <button className="text-white border-b border-white pb-1 uppercase text-sm tracking-widest hover:text-accent hover:border-accent transition-colors">
                            View All Products
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
