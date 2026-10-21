import { CITY_CODE } from '../../lib/airports';

// Two rows of big country names drifting in opposite directions.
function Row({ countries, reverse = false, decorative = false }) {
    return (
        <div className="overflow-hidden">
            <div className={`${reverse ? 'board-track-rev' : 'board-track'} flex w-max items-baseline`}>
                {[0, 1].map((copy) => (
                    <ul key={copy} className="flex items-baseline shrink-0" aria-hidden={decorative || copy === 1 ? true : undefined}>
                        {countries.map((country) => (
                            <li key={country.code} className="flex items-baseline gap-2 pr-10 sm:pr-16 whitespace-nowrap">
                                <span className="t-display text-[clamp(2.6rem,6.5vw,5.75rem)] text-[#7C8995]">{country.name}</span>
                                <span className="text-sm font-medium text-primary-ink tabular-nums">
                                    {CITY_CODE[country.code] ?? country.code.toUpperCase()}
                                </span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default function Ticker({ countries }) {
    const shifted = [...countries.slice(7), ...countries.slice(0, 7)].reverse();

    return (
        <section aria-label="Negara tujuan yang tersedia" className="border-y border-hairline py-8 sm:py-12 space-y-2 sm:space-y-4">
            <Row countries={countries} />
            <Row countries={shifted} reverse decorative />
        </section>
    );
}
