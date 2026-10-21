import { useState } from 'react';
import { CITY_CODE, REGION_CODE } from '../../lib/airports';
import useInView from '../../lib/useInView';

const TABS = {
    all: 'Semua Destinasi',
    asia: 'Asia',
    eropa: 'Eropa',
    amerika: 'Amerika',
};

const PAGE_SIZE = 5;

// City codes printed under the name: one city, up to three cities, or the region.
function routeLabel(pkg) {
    const { codes, region } = pkg;
    if (codes.length > 3) return `${REGION_CODE[region] ?? region.toUpperCase()} · ${codes.length}+ negara`;
    return codes.map((c) => CITY_CODE[c] ?? c.toUpperCase()).join(' · ');
}

function Flags({ codes }) {
    if (codes.length === 1) {
        return (
            <img
                src={`https://flagcdn.com/w80/${codes[0]}.png`}
                alt=""
                width="44"
                height="32"
                loading="lazy"
                decoding="async"
                className="w-11 h-8 rounded-[4px] object-cover ring-1 ring-midnight/10 shrink-0"
            />
        );
    }

    return (
        <span className="flex -space-x-2.5 shrink-0" aria-hidden="true">
            {codes.slice(0, 3).map((c, i) => (
                <img
                    key={c}
                    src={`https://flagcdn.com/w80/${c}.png`}
                    alt=""
                    width="32"
                    height="32"
                    loading="lazy"
                    decoding="async"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                    style={{ zIndex: 3 - i }}
                />
            ))}
        </span>
    );
}

function PackageRow({ pkg, index }) {
    const [ref, inView] = useInView({ rootMargin: '0px 0px -40px 0px' });
    const isRegional = pkg.type === 'eSIM Regional';

    return (
        <li
            ref={ref}
            className={`reveal ${inView ? 'is-in' : ''} flex items-center gap-4 sm:gap-6 border-t border-hairline py-5 sm:py-6`}
            style={{ '--i': index % 6 }}
        >
            <Flags codes={pkg.codes} />

            <div className="min-w-0 flex-1">
                <h3 className="t-display text-[1.3rem] sm:text-[1.7rem] leading-[1.1]">{pkg.label}</h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mute">
                    <span className="tabular-nums">{routeLabel(pkg)}</span>
                    <span className={isRegional ? 'px-2 py-0.5 rounded-sm bg-midnight text-white text-xs font-medium' : 'text-xs'}>{pkg.type}</span>
                </p>
            </div>

            <div className="text-right shrink-0">
                <p className="text-sm text-mute">Mulai dari</p>
                <p className="t-display text-[1.45rem] sm:text-[2rem] tabular-nums">Rp {pkg.start}</p>
            </div>
        </li>
    );
}

export default function Packages({ packages }) {
    const [tab, setTab] = useState('asia');
    const [limit, setLimit] = useState(PAGE_SIZE);

    const filtered = tab === 'all' ? packages : packages.filter((p) => p.region === tab);
    const visible = filtered.slice(0, limit);
    const remaining = filtered.length - limit;

    const switchTab = (key) => {
        setTab(key);
        setLimit(PAGE_SIZE);
    };

    return (
        <section id="paket" className="bg-white pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
                <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16">
                    <div className="mb-10 lg:mb-0 lg:sticky lg:top-28 lg:self-start">
                        <h2 className="t-display text-[clamp(2.5rem,5.2vw,4.75rem)]">Destinasi populer</h2>
                        <p className="mt-5 text-lg text-mute leading-relaxed max-w-sm">Pilih negara tujuan, bayar, dan langsung online. Semudah itu.</p>

                        <div role="group" aria-label="Pilih wilayah" className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                            {Object.entries(TABS).map(([key, label]) => (
                                <button
                                    key={key}
                                    type="button"
                                    aria-pressed={tab === key}
                                    onClick={() => switchTab(key)}
                                    className={`pb-1 text-[17px] border-b-2 transition-colors cursor-pointer ${
                                        tab === key ? 'border-primary text-midnight font-medium' : 'border-transparent text-mute hover:text-midnight'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <ul key={tab} className="border-b border-hairline">
                            {visible.map((pkg, i) => (
                                <PackageRow key={pkg.id} pkg={pkg} index={i} />
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[17px]">
                            {remaining > 0 && (
                                <button type="button" onClick={() => setLimit((l) => l + PAGE_SIZE)} className="link-line cursor-pointer">
                                    Lihat lainnya ({remaining} lagi)
                                </button>
                            )}
                            {tab !== 'all' && (
                                <button type="button" onClick={() => switchTab('all')} className="link-line cursor-pointer">
                                    Lihat semua destinasi
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
