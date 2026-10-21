import { useEffect, useState } from 'react';

export default function MobileCtaBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 px-4 py-3 safe-area-bottom transition-transform duration-300 ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-gray-400">Mulai dari</p>
                    <p className="text-base font-extrabold text-gray-900">Rp 55.000</p>
                </div>
                <a href="#paket" className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg active:scale-[0.97] transition-transform">
                    Beli Sekarang
                </a>
            </div>
        </div>
    );
}
