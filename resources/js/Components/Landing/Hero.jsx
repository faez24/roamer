import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRightIcon, SearchIcon } from '../Icons';

function GlobeArt() {
    return (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] sm:translate-x-1/6 lg:translate-x-0 opacity-[0.18] pointer-events-none">
            <svg viewBox="0 0 600 600" fill="none" className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
                <circle cx="300" cy="300" r="280" stroke="#FF4F00" strokeWidth="1.5" />
                <ellipse cx="300" cy="300" rx="180" ry="280" stroke="#FF4F00" strokeWidth="1" />
                <ellipse cx="300" cy="300" rx="90" ry="280" stroke="#FF4F00" strokeWidth="0.75" />
                <path d="M20 300h560" stroke="#FF4F00" strokeWidth="1" />
                <path d="M60 180h480" stroke="#FF4F00" strokeWidth="0.75" />
                <path d="M60 420h480" stroke="#FF4F00" strokeWidth="0.75" />
                <path d="M110 100h380" stroke="#FF4F00" strokeWidth="0.5" />
                <path d="M110 500h380" stroke="#FF4F00" strokeWidth="0.5" />
                <path d="M180 200 Q300 150 400 220 Q450 280 380 350" stroke="#FF4F00" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
                <circle cx="180" cy="200" r="5" fill="#FF4F00" />
                <circle cx="380" cy="350" r="5" fill="#FF4F00" />
                <circle cx="400" cy="220" r="3" fill="#FF4F00" />
            </svg>
        </div>
    );
}

function DestinationSearch({ destinations, popular }) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const onPointerDown = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        return () => document.removeEventListener('mousedown', onPointerDown);
    }, []);

    const filtered = useMemo(() => {
        if (!query) return destinations.slice(0, 5);
        const q = query.toLowerCase();
        return destinations.filter((d) => d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q));
    }, [query, destinations]);

    return (
        <div className="mt-8 sm:mt-10 max-w-xl">
            <div className="relative" ref={wrapperRef}>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                    <div className="pl-4 pr-2 text-gray-400">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setOpen(true)}
                        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
                        placeholder="Mau ke mana? Cari negara tujuan..."
                        className="w-full py-3.5 sm:py-4 pr-4 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none"
                    />
                    <a href="#paket" className="hidden sm:inline-flex items-center gap-1.5 mr-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0">
                        Cari Paket
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                </div>

                {open && filtered.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl shadow-gray-200/50 z-40 overflow-hidden max-h-72 overflow-y-auto">
                        {filtered.map((item) => (
                            <a
                                key={item.code}
                                href="#paket"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                                        <img src={`https://flagcdn.com/w80/${item.code.toLowerCase()}.png`} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.spec}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">{item.price}</p>
                                    <p className="text-[10px] text-primary font-semibold">Hemat {item.discount}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-400 py-1">Populer:</span>
                {popular.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => {
                            setQuery(tag);
                            setOpen(true);
                        }}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function Hero({ destinations, popular }) {
    return (
        <section className="pt-28 pb-10 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/50 to-white">
            <GlobeArt />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase">eSIM Data Internasional</p>

                    <h1 className="mt-4 text-[2rem] leading-[1.15] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900">
                        Internet cepat<br className="hidden sm:block" /> di 100+ negara,<br />
                        <span className="text-primary">tanpa ganti SIM.</span>
                    </h1>

                    <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                        Beli paket data, scan QR code, langsung online. Tanpa ribet, tanpa antri, tanpa kartu SIM fisik.
                    </p>
                </div>

                <DestinationSearch destinations={destinations} popular={popular} />
            </div>
        </section>
    );
}
