export function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 py-12 px-6 md:px-12 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="font-heading text-2xl uppercase font-bold text-white">LUCERA</h2>
                    <p className="text-secondary text-sm max-w-xs">
                        Redefining modern streetwear with industrial aesthetics and timeless design.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-secondary">
                    {/* <div className="flex flex-col gap-2">
                        <span className="text-white font-medium uppercase mb-2">Shop</span>
                        <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
                        <a href="#" className="hover:text-white transition-colors">Best Sellers</a>
                        <a href="#" className="hover:text-white transition-colors">Accessories</a>
                    </div> */}
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-medium uppercase mb-2">Legal</span>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Returns</a>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-neutral-500 uppercase">
                <span>© 2026 Lucera Inc.</span>
                <span>Made in Kediri</span>
            </div>
        </footer>
    );
}
