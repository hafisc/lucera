"use client";


import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <h1 className="font-heading text-3xl md:text-4xl uppercase font-bold text-white tracking-tight border-b border-white/10 pb-6">
                My Profile
            </h1>

            <div className="max-w-xl space-y-6">
                {/* AVATAR UPLOAD (Visual Only) */}
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-neutral-800 rounded-full border border-white/10 flex items-center justify-center text-2xl font-bold text-neutral-600">
                        HS
                    </div>
                    <div>
                        <Button variant="outline" className="text-xs py-2 h-auto mb-2">Change Avatar</Button>
                        <p className="text-xs text-secondary">Max size 2MB. JPG or PNG.</p>
                    </div>
                </div>

                {/* FORM */}
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-neutral-500">First Name</label>
                            <input
                                type="text"
                                defaultValue="Hafisc"
                                className="w-full bg-[#121212] border border-[#262626] text-white px-4 py-3 focus:outline-none focus:border-white transition-colors text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-neutral-500">Last Name</label>
                            <input
                                type="text"
                                defaultValue="Starboy"
                                className="w-full bg-[#121212] border border-[#262626] text-white px-4 py-3 focus:outline-none focus:border-white transition-colors text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Email Address</label>
                        <input
                            type="email"
                            defaultValue="starboy@lucera.id"
                            disabled
                            className="w-full bg-[#0A0A0A] border border-[#262626] text-neutral-500 px-4 py-3 cursor-not-allowed text-sm"
                        />
                    </div>

                    <Button fullWidth>Update Profile</Button>
                </form>
            </div>
        </div>
    );
}
