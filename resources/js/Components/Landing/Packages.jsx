import { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon, LongArrowRightIcon } from '../Icons';
import SectionHeading from '../SectionHeading';

const TABS = {
    all: 'Semua Destinasi',
    asia: 'Asia',
    eropa: 'Eropa',
    amerika: 'Amerika',
};

const PAGE_SIZE = 5;

function PackageCard({ pkg }) {
    const isRegional = pkg.type === 'eSIM Regional';
    const extra = pkg.codes.length - 5;

    return (
        <a href="#" className="group block relative">
            <div className="relative overflow-hidden rounded-t-2xl h-24 sm:h-28">
                {pkg.codes.length === 1 ? (
                    <img src={`https://flagcdn.com/w320/${pkg.codes[0]}.png`} alt={pkg.label} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="flex items-center -space-x-2">
                            {pkg.codes.slice(0, 5).map((code, i) => (
                                <div
                                    key={code}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-lg ring-1 ring-black/10 relative"
                                    style={{ zIndex: 10 - i }}
                                >
                                    <img src={`https://flagcdn.com/w80/${code}.png`} alt={code} className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {extra > 0 && (
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center relative" style={{ zIndex: 1 }}>
                                    <span className="text-[10px] font-bold text-white">+{extra}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <span
                    className={`absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wide text-white ${
                        isRegional ? 'bg-violet-500/90' : 'bg-emerald-500/90'
                    }`}
                >
                    {pkg.type}
                </span>
                <h3 className="absolute bottom-2.5 left-3 right-3 text-sm sm:text-base font-bold text-white drop-shadow-md truncate">{pkg.label}</h3>
            </div>
            <div className="bg-white border border-t-0 border-gray-200/80 rounded-b-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 group-hover:border-primary/30 transition-colors">
                <p className="text-[10px] sm:text-[11px] text-gray-400 mb-0.5">Mulai dari</p>
                <div className="flex items-baseline justify-between">
                    <span className="text-base sm:text-lg font-extrabold text-gray-900">Rp {pkg.start}</span>
                    <span className="text-primary text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-0.5">
                        Lihat
                        <ArrowRightIcon className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </a>
    );
}

export default function Packages({ packages }) {
    const [tab, setTab] = useState('asia');
    const [limit, setLimit] = useState(PAGE_SIZE);

    const filtered = tab === 'all' ? packages : packages.filter((p) => p.region === tab);
    const visible = filtered.slice(0, limit);
    const remaining = filtered.length - limit;
    const ctaLabel = tab === 'all' ? 'Lihat semua destinasi' : `Lihat paket ${TABS[tab]}`;

    const switchTab = (key) => {
        setTab(key);
        setLimit(PAGE_SIZE);
    };

    return (
        <section id="paket" className="py-16 sm:py-24 lg:py-28 bg-gray-50 relative overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
                    <SectionHeading
                        label="Paket Data"
                        title="Destinasi populer"
                        description="Pilih negara tujuan, bayar, dan langsung online. Semudah itu."
                    />

                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 shrink-0 self-start sm:self-auto shadow-sm">
                        {Object.entries(TABS).map(([key, label]) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => switchTab(key)}
                                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                                    tab === key ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {visible.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                {remaining > 0 && (
                    <div className="mt-6 sm:mt-8 text-center">
                        <button
                            type="button"
                            onClick={() => setLimit((l) => l + PAGE_SIZE)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-sm font-semibold text-gray-700 rounded-xl hover:border-primary/30 hover:text-primary transition-all cursor-pointer shadow-sm"
                        >
                            <span>Lihat lainnya</span>
                            <span className="text-xs text-gray-400 font-normal">({remaining} lagi)</span>
                            <ChevronDownIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}

                <div className="mt-10 sm:mt-14 text-center">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2.5 px-7 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-lg shadow-primary/20"
                    >
                        <span>{ctaLabel}</span>
                        <LongArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
