import { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon } from '../Icons';
import { PlaneMark } from './Logo';

const links = [
    { label: 'Paket Data', href: '#paket' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 text-midnight transition-colors duration-300 ${
                scrolled || menuOpen ? 'bg-white/95 backdrop-blur border-b border-hairline' : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav aria-label="Utama">
                <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
                        <a href="#beranda" className="flex items-center gap-2 text-[1.4rem] font-bold tracking-[-0.04em]">
                            <PlaneMark id="nav-mark" className="w-6 h-6 text-primary" />
                            <span className="nav-reveal">
                                Roamer<span className="text-primary">.id</span>
                            </span>
                        </a>

                        <div className="nav-reveal hidden md:flex items-center gap-9">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} className="text-[15px] text-midnight/80 hover:text-midnight transition-colors">
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#paket"
                                className="inline-flex items-center px-5 py-2.5 bg-primary text-midnight text-[15px] font-semibold rounded-full hover:bg-primary-light transition-colors"
                            >
                                Beli Sekarang
                            </a>
                        </div>

                        <button
                            ref={menuButtonRef}
                            type="button"
                            className="nav-reveal md:hidden p-2 -mr-2"
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            aria-controls="menu-mobile"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div id="menu-mobile" className="md:hidden bg-white border-t border-hairline" onClick={() => setMenuOpen(false)}>
                        <div className="px-5 py-5">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} className="block py-4 text-3xl t-display border-b border-hairline">
                                    {link.label}
                                </a>
                            ))}
                            <a href="#paket" className="mt-6 block text-center px-5 py-3.5 bg-primary text-midnight text-base font-semibold rounded-full">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
