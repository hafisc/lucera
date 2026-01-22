import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Oswald for Heading, Inter for Body
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
    display: "swap",
});

export const metadata: Metadata = {
    title: "LUCERA | High-End Streetwear",
    description: "Timeless pieces for the modern starboy. Industrial Luxury. Est 2026.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${oswald.variable} bg-background text-foreground antialiased selection:bg-accent selection:text-black`}
            >
                {children}
            </body>
        </html>
    );
}
