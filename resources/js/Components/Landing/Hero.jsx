import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRightIcon, SearchIcon } from '../Icons';
import Ribbon from './Ribbon';

// "USA" is a popular chip but the country is listed as Amerika Serikat (US)
const ALIAS = { usa: 'US', amerika: 'US' };

function DestinationSearch({ destinations, popular, onRowsChange }) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);
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
        return destinations.filter((d) => d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q) || ALIAS[q] === d.code);
    }, [query, destinations]);

    const expanded = open && filtered.length > 0;

    // tells the hero how many rows are showing so it can make room for them
    useEffect(() => {
        onRowsChange?.(expanded ? Math.min(filtered.length, 4) : 0);
    }, [expanded, filtered.length, onRowsChange]);

    const choose = () => {
        setOpen(false);
        setActive(-1);
        window.location.hash = 'paket';
    };

    const onKeyDown = (event) => {
        if (event.key === 'Escape') {
            setOpen(false);
            setActive(-1);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            setActive((i) => (i + 1) % filtered.length);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
            setActive((i) => (i <= 0 ? filtered.length - 1 : i - 1));
        } else if (event.key === 'Enter' && expanded && active >= 0) {
            event.preventDefault();
            choose();
        }
    };

    return (
        <div className="relative z-30 mx-auto mt-9 sm:mt-11 max-w-xl text-left hero-fade" style={{ '--d': '900ms' }}>
            <div className="relative" ref={wrapperRef}>
                <div className="flex items-center gap-3 border-b-2 border-midnight/80 focus-within:border-primary transition-colors">
                    <span className="text-midnight/60" aria-hidden="true">
                        <SearchIcon className="w-6 h-6" />
                    </span>
                    <input
                        type="text"
                        role="combobox"
                        aria-expanded={expanded}
                        aria-controls="hasil-negara"
                        aria-autocomplete="list"
                        aria-activedescendant={expanded && active >= 0 ? `negara-${filtered[active].code}` : undefined}
                        autoComplete="off"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setOpen(true);
                            setActive(-1);
                        }}
                        onFocus={() => setOpen(true)}
                        onKeyDown={onKeyDown}
                        placeholder="Mau ke mana? Cari negara tujuan..."
                        aria-label="Cari negara tujuan"
                        className="w-full py-4 bg-transparent text-xl sm:text-2xl tracking-[-0.02em] text-midnight placeholder-midnight/80 focus:outline-none"
                    />
                    <a
                        href="#paket"
                        className="hidden sm:inline-flex items-center gap-2 mb-2 px-5 py-2.5 bg-primary text-midnight text-[15px] font-semibold rounded-full hover:bg-primary-light transition-colors shrink-0"
                    >
                        Cari Paket
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                </div>

                <p className="sr-only" role="status" aria-live="polite">
                    {open ? (filtered.length ? `${filtered.length} negara ditemukan` : 'Negara tidak ditemukan') : ''}
                </p>

                {expanded && (
                    <div
                        id="hasil-negara"
                        role="listbox"
                        tabIndex={-1}
                        aria-label="Negara tujuan"
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-hairline rounded-xl shadow-[0_24px_48px_-24px_rgba(13,34,54,0.35)] z-40 overflow-hidden max-h-72 overflow-y-auto"
                    >
                        {filtered.map((item, i) => (
                            <a
                                key={item.code}
                                id={`negara-${item.code}`}
                                role="option"
                                aria-selected={active === i}
                                tabIndex={-1}
                                href="#paket"
                                onClick={choose}
                                onMouseEnter={() => setActive(i)}
                                className={`flex items-center justify-between gap-4 px-4 py-3.5 transition-colors border-b border-hairline last:border-0 ${
                                    active === i ? 'bg-mist' : 'hover:bg-mist'
                                }`}
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <img
                                        src={`https://flagcdn.com/w80/${item.code.toLowerCase()}.png`}
                                        alt=""
                                        width="32"
                                        height="24"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-8 h-6 rounded-[3px] object-cover shrink-0 ring-1 ring-midnight/10"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-[17px] font-medium text-midnight truncate">{item.name}</p>
                                        <p className="text-sm text-mute">{item.spec}</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-[17px] font-medium text-midnight">{item.price}</p>
                                    <p className="text-sm text-primary-ink">Hemat {item.discount}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[15px]">
                <span className="text-mute">Populer:</span>
                {popular.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => {
                            setQuery(tag);
                            setOpen(true);
                            setActive(-1);
                        }}
                        className="link-line pb-0.5 cursor-pointer"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function Hero({ destinations, popular }) {
    const [rows, setRows] = useState(0);

    return (
        <section id="beranda" className="relative bg-white min-h-[100svh]">
            <Ribbon className="ribbon-fade absolute inset-0 w-full h-full pointer-events-none" />

            <div
                className="relative w-full max-w-[88rem] mx-auto px-5 sm:px-8 pt-32 pb-20 sm:pt-40 text-center transition-[padding] duration-300 ease-out"
                style={rows ? { paddingBottom: `max(5rem, calc(${rows * 4.65}rem - 1.2rem))` } : undefined}
            >
                <h1 className="t-display text-[clamp(3.4rem,9vw,8rem)] leading-[0.98]">
                    <span className="hero-line" style={{ '--i': 0 }}><span>Mendarat,</span></span>{' '}
                    <span className="hero-line" style={{ '--i': 1 }}><span>langsung online.</span></span>
                </h1>

                <p className="hero-fade mx-auto mt-8 sm:mt-10 text-lg sm:text-xl text-mute leading-relaxed max-w-md" style={{ '--d': '700ms' }}>
                    Beli paket data, scan QR code, langsung online. Tanpa ribet, tanpa antri, tanpa kartu SIM fisik.
                </p>

                <DestinationSearch destinations={destinations} popular={popular} onRowsChange={setRows} />
            </div>
        </section>
    );
}
