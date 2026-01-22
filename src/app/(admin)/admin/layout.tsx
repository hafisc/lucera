import { AdminSidebar } from "@/components/admin/sidebar/AdminSidebar";

export default function AdminLayout2({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
            <AdminSidebar />

            {/* MAIN CONTENT AREA */}
            {/* Shifted by w-64 on desktop to account for fixed sidebar */}
            <main className="md:pl-64 flex flex-col min-h-screen transition-all duration-300">

                {/* TOPBAR */}
                <header className="h-16 border-b border-[#262626] flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        {/* Breadcrumbs or Title could go here */}
                        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                            Command Center
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-[10px] text-neutral-500 uppercase">Super Admin</p>
                        </div>
                        <div className="h-8 w-8 bg-neutral-800 rounded-full border border-neutral-700" />
                    </div>
                </header>

                {/* CONTENT SCROLLABLE */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
