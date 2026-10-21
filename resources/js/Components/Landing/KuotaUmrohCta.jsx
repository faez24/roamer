import { ExternalLinkIcon } from '../Icons';

export default function KuotaUmrohCta() {
    return (
        <section
            className="relative bg-cover bg-[center_60%] lg:bg-[center_40%] bg-no-repeat"
            style={{ backgroundImage: "url('/images/kuotaumroh.png')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/70 to-emerald-950/50 lg:from-emerald-950/80 lg:via-emerald-950/55 lg:to-emerald-950/30"></div>

            <div className="relative z-10">
                <svg viewBox="0 0 1440 120" fill="none" className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
                    <path d="M0 0H1440V60C1200 110 960 30 720 60C480 90 240 20 0 70V0Z" className="fill-gray-50" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
                <div className="max-w-xl lg:max-w-2xl">
                    <p className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Paket Umroh &amp; Haji</p>

                    <h2 className="mt-4 sm:mt-5 text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                        Pergi umroh?<br />
                        Paket data Arab Saudi<br />
                        ada di <span className="text-emerald-300">kuotaumroh.id</span>
                    </h2>

                    <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-md lg:max-w-lg">
                        Paket data khusus jamaah dengan coverage Makkah &amp; Madinah. Harga terjangkau, aktivasi mudah.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-3">
                        <a
                            href="https://kuotaumroh.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-emerald-900 text-sm sm:text-base font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Kunjungi kuotaumroh.id
                            <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <svg viewBox="0 0 1440 120" fill="none" className="w-full h-[40px] sm:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
                    <path d="M0 120H1440V60C1200 10 960 90 720 60C480 30 240 100 0 50V120Z" className="fill-white" />
                </svg>
            </div>
        </section>
    );
}
