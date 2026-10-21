export default function Ticker({ countries }) {
    return (
        <div className="border-y border-orange-100/60 bg-gradient-to-r from-orange-50/40 via-white to-orange-50/40 py-3.5 sm:py-4">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 overflow-hidden">
                <div className="ticker-track flex items-center gap-8 sm:gap-12 whitespace-nowrap">
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center gap-6 sm:gap-10 shrink-0" aria-hidden={copy === 1}>
                            {countries.map((country) => (
                                <span key={country.code} className="inline-flex items-center gap-2 text-[13px] text-gray-400 font-medium">
                                    <img
                                        src={`https://flagcdn.com/w40/${country.code}.png`}
                                        alt={country.code.toUpperCase()}
                                        className="w-5 h-3.5 rounded-[2px] object-cover"
                                    />
                                    {country.name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
