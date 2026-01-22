import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserSidebar } from "@/components/user/UserSidebar";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* SIDEBAR NAVIGATION */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <UserSidebar />
                    </aside>

                    {/* MAIN CONTENT AREA */}
                    <div className="flex-1 min-w-0">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
