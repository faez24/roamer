import { ExternalLinkIcon } from '../Icons';

export default function KuotaUmrohCta() {
    return (
        <section className="bg-kuota-mint py-20 sm:py-28">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
                <div className="border-t border-kuota/30 pt-12 sm:pt-16 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16 lg:items-start">
                    <div>
                        <h2 className="t-display text-[clamp(2.25rem,4.8vw,4.5rem)] text-[#111827]">Pergi umroh? Paket data Arab Saudi ada di kuotaumroh.id</h2>
                        <p className="mt-6 text-lg text-[#374151] leading-relaxed max-w-md">
                            Paket data khusus jamaah dengan coverage Makkah &amp; Madinah. Harga terjangkau, aktivasi mudah.
                        </p>
                    </div>

                                        <div className="relative mt-10 lg:mt-0 overflow-hidden rounded-2xl bg-[#BDE9D8] aspect-[16/10]">
                        <img
                            src="/images/kuotaumroh-800.webp"
                            srcSet="/images/kuotaumroh-800.webp 800w, /images/kuotaumroh-1400.webp 1400w"
                            sizes="(min-width: 1024px) 700px, 100vw"
                            width="1400"
                            height="823"
                            alt="Ka'bah dan Masjidil Haram dengan pesawat terbang di atas awan"
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover object-[55%_50%]"
                        />
                        <p className="absolute left-5 bottom-5 sm:left-7 sm:bottom-6 text-base font-semibold text-kuota-deep">Paket Umroh &amp; Haji</p>
                    </div>
                </div>

                <a
                    href="https://kuotaumroh.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 sm:mt-16 flex items-end justify-between gap-6 border-b-2 border-kuota pb-4 sm:pb-6 text-kuota transition-colors hover:border-kuota-deep hover:text-kuota-deep"
                >
                    <span className="t-display text-[clamp(2rem,6.2vw,5.5rem)]">Kunjungi kuotaumroh.id</span>
                    <ExternalLinkIcon className="shrink-0 mb-1 w-[clamp(1.5rem,4vw,3.5rem)] h-[clamp(1.5rem,4vw,3.5rem)]" />
                    <span className="sr-only">(buka di tab baru)</span>
                </a>
            </div>
        </section>
    );
}
