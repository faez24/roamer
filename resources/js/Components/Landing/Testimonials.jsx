import { useState } from 'react';
import { ExternalLinkIcon, PlayIcon } from '../Icons';

const YOUTUBE_URL = 'https://www.youtube.com/results?search_query=testimoni+esim+roamer.id';

// A still frame until pressed; the iframe only exists after the click, so nothing heavy loads up front.
function VideoFrame({ item }) {
    const [playing, setPlaying] = useState(false);
    const [thumbFallback, setThumbFallback] = useState(false);
    const id = item.youtube;
    const frame = 'relative block w-full aspect-video overflow-hidden rounded-2xl bg-midnight-2';

    if (!id) return null;

    if (playing) {
        return (
            <div className={frame}>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
                    title={`Testimoni ${item.name}`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        );
    }

    return (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`${item.country}: putar video testimoni ${item.name}`} className={`${frame} group cursor-pointer`}>
            <img
                src={`https://i.ytimg.com/vi/${id}/${thumbFallback ? 'hqdefault' : 'sddefault'}.jpg`}
                onError={() => setThumbFallback(true)}
                alt=""
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-primary text-midnight flex items-center justify-center transition-transform group-hover:scale-110">
                    <PlayIcon className="w-7 h-7 ml-0.5" />
                </span>
            </span>
            <span className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-white">
                <img src={`https://flagcdn.com/w40/${item.code}.png`} alt="" width="20" height="15" loading="lazy" decoding="async" className="w-5 h-[15px] rounded-[2px] object-cover" />
                {item.country}
            </span>
        </button>
    );
}

export default function Testimonials({ items }) {
    const [index, setIndex] = useState(0);
    const item = items[index];

    return (
        <section className="bg-midnight text-white py-20 sm:py-28">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div>
                        <h2 className="t-display text-[clamp(2.5rem,5.2vw,4.75rem)] max-w-3xl">Cerita mereka pakai Roamer.id</h2>
                        <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-md">
                            Pengalaman nyata dari traveler yang sudah merasakan kemudahan eSIM Roamer.id.
                        </p>
                    </div>
                    <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="link-line text-[17px] hover:text-primary-light shrink-0">
                        Lihat semua
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span className="sr-only">(buka di tab baru)</span>
                    </a>
                </div>

                <div className="mt-14 sm:mt-20 grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:items-center">
                    <div aria-live="polite">
                        <div key={index} className="quote-in">
                            <blockquote className="t-display text-[clamp(2rem,4.4vw,4.1rem)] leading-[1.08] tracking-[-0.03em]">
                                &ldquo;{item.quote}&rdquo;
                            </blockquote>
                            <p className="mt-8 text-lg text-white/75">
                                <span className="text-white">{item.name}</span>
                                <span className="mx-3 text-white/40" aria-hidden="true">/</span>
                                {item.plan}
                            </p>
                        </div>
                    </div>

                    <VideoFrame key={index} item={item} />
                </div>

                <div role="group" aria-label="Pilih testimoni" className="mt-12 sm:mt-16 flex gap-8 overflow-x-auto scrollbar-hide border-t border-white/20">
                    {items.map((entry, i) => (
                        <button
                            key={entry.name}
                            type="button"
                            aria-pressed={index === i}
                            onClick={() => setIndex(i)}
                            className={`shrink-0 -mt-px pt-5 text-left border-t-2 transition-colors cursor-pointer ${
                                index === i ? 'border-primary text-white' : 'border-transparent text-white/65 hover:text-white'
                            }`}
                        >
                            <span className="block text-[17px] font-medium">{entry.name}</span>
                            <span className="block text-sm">{entry.country}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
