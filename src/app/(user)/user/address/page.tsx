"use client";

import { Plus, MapPin, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

// MOCK DATA
const ADDRESSES = [
    {
        id: 1,
        label: "Main HQ",
        name: "Hafisc Starboy",
        details: "Jl. Sudirman No. 1, SCBD, Jakarta Selatan, 12190",
        phone: "+62 812 3456 7890",
        isDefault: true,
    },
    {
        id: 2,
        label: "Studio",
        name: "Hafisc Creative",
        details: "Jl. Kemang Raya No. 15, Jakarta Selatan, 12730",
        phone: "+62 819 0000 1111",
        isDefault: false,
    }
];

export default function AddressPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <h1 className="font-heading text-3xl md:text-4xl uppercase font-bold text-white tracking-tight">
                    Shipping Details
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ADD NEW CARD */}
                <button className="flex flex-col items-center justify-center min-h-[200px] border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all group gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Plus className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-widest text-secondary group-hover:text-white">
                        Add New Address
                    </span>
                </button>

                {/* EXISTING ADDRESS CARD */}
                {ADDRESSES.map((addr) => (
                    <div key={addr.id} className="relative bg-[#121212] border border-[#262626] p-6 flex flex-col justify-between group hover:border-[#404040] transition-colors min-h-[200px]">

                        {addr.isDefault && (
                            <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-black bg-white px-2 py-1">
                                Primary
                            </span>
                        )}

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-neutral-500 mt-0.5" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">{addr.label}</h4>
                                    <p className="text-secondary text-sm mt-1">{addr.name}</p>
                                </div>
                            </div>

                            <p className="text-neutral-400 text-sm leading-relaxed pl-8">
                                {addr.details} <br />
                                <span className="text-neutral-500">{addr.phone}</span>
                            </p>
                        </div>

                        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/5">
                            <button className="text-secondary hover:text-white text-xs uppercase tracking-wider flex items-center gap-1">
                                <Pencil className="w-3 h-3" /> Edit
                            </button>
                            {!addr.isDefault && (
                                <button className="text-red-500 hover:text-red-400 text-xs uppercase tracking-wider flex items-center gap-1 ml-2">
                                    <Trash2 className="w-3 h-3" /> Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
