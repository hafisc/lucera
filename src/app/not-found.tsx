import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
            <h1 className="font-heading text-9xl font-bold text-neutral-800">404</h1>
            <h2 className="font-heading text-2xl uppercase tracking-widest mt-4 mb-2">Page Not Found</h2>
            <p className="text-secondary max-w-md mb-8">
                The page you are looking for does not exist or has been moved to another dimension.
            </p>
            <Link href="/">
                <Button variant="primary">Return Home</Button>
            </Link>
        </div>
    );
}
