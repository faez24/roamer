import { useEffect, useState } from 'react';

// Cheapest package start price, e.g. '9.000' -> 9000
const toNumber = (price) => Number(String(price).replace(/\D/g, ''));

export default function MobileCtaBar({ packages = [] }) {
    const lowest = packages.length ? Math.min(...packages.map((p) => toNumber(p.start))) : null;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <aside
            aria-label="Beli paket"
            inert={!visible}
            className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur border-t border-hairline px-4 pt-3 safe-area-bottom transition-transform duration-300 ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-mute">Mulai dari</p>
                    <p className="t-display text-xl">{lowest ? `Rp ${lowest.toLocaleString('id-ID')}` : 'Rp 55.000'}</p>
                </div>
                <a href="#paket" className="px-6 py-3 bg-primary text-midnight text-[15px] font-semibold rounded-full active:scale-[0.97] transition-transform">
                    Beli Sekarang
                </a>
            </div>
        </aside>
    );
}
