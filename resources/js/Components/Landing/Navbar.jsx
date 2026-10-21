import { useEffect, useState } from 'react';
import { CloseIcon, GlobeIcon, MenuIcon } from '../Icons';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <GlobeIcon className="w-[18px] h-[18px] text-white" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            Roamer<span className="text-primary">.id</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#paket" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Paket Data</a>
                        <a href="#faq" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
                        <a href="#paket" className="inline-flex items-center px-5 py-2 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                            Beli Sekarang
                        </a>
                    </div>

                    <button
                        type="button"
                        className="md:hidden p-2 -mr-2"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <CloseIcon className="w-5 h-5 text-gray-700" /> : <MenuIcon className="w-5 h-5 text-gray-700" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white" onClick={() => setMenuOpen(false)}>
                    <div className="px-5 py-4 space-y-1">
                        <a href="#paket" className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">Paket Data</a>
                        <a href="#faq" className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">FAQ</a>
                        <div className="pt-2">
                            <a href="#paket" className="block text-center px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg">Beli Sekarang</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
