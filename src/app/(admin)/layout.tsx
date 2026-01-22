import { AdminSidebar } from "@/components/layout/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <AdminSidebar />
            <main className="flex-1 overflow-auto">
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-black/50 backdrop-blur sticky top-0 z-10">
                    <h2 className="text-sm uppercase tracking-widest text-secondary">
                        Command Center
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 bg-white rounded-full" />
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
