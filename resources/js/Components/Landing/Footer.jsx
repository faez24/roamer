const navigation = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Paket Data', href: '#paket' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Tentang Kami', href: null },
];

const destinations = ['Jepang', 'Korea Selatan', 'Thailand', 'Singapura', 'Amerika Serikat'];

const contacts = ['hello@roamer.id', '+62 812 3456 7890', 'Jakarta, Indonesia'];

function Plane({ className }) {
    return (
        <svg viewBox="-16 -14 32 28" className={className} fill="currentColor" aria-hidden="true">
            <path d="M14 0 L4 -3 L-1 -12 L-5 -12 L-3 -3 L-9 -2 L-12 -6 L-14 -6 L-12 0 L-14 6 L-12 6 L-9 2 L-3 3 L-5 12 L-1 12 L4 3 Z" transform="rotate(-90)" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="bg-white border-t border-hairline pb-24 sm:pb-0">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
                <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
                    <div>
                        <h2 className="sr-only">Navigasi</h2>
                        <ul className="space-y-1">
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    {item.href ? (
                                        <a href={item.href} className="t-display text-[2rem] sm:text-[2.4rem] leading-[1.15] hover:text-primary-ink transition-colors">
                                            {item.label}
                                        </a>
                                    ) : (
                                        <span className="t-display text-[2rem] sm:text-[2.4rem] leading-[1.15] text-mute">{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-[17px] font-medium mb-4">Destinasi</h2>
                            <ul className="space-y-2.5">
                                {destinations.map((name) => (
                                    <li key={name}>
                                        <a href="#paket" className="text-[17px] text-mute hover:text-midnight transition-colors">{name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[17px] font-medium mb-4">Kontak</h2>
                            <ul className="space-y-2.5">
                                {contacts.map((line) => (
                                    <li key={line} className="text-[17px] text-mute">{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-14 sm:mt-20 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-mute">
                    <p>&copy; {new Date().getFullYear()} Roamer.id. Semua hak dilindungi.</p>
                    <div className="flex items-center gap-6">
                        <span>Kebijakan Privasi</span>
                        <span>Syarat &amp; Ketentuan</span>
                    </div>
                </div>

                <div className="mt-10 sm:mt-16 flex items-center justify-between gap-2 overflow-hidden pb-6 sm:pb-8" aria-hidden="true">
                    <span className="t-display text-[clamp(3.6rem,17vw,15rem)] leading-[0.9]">Roamer</span>
                    <Plane className="w-[clamp(1.75rem,6vw,5rem)] shrink-0 text-midnight" />
                    <span className="t-display text-[clamp(3.6rem,17vw,15rem)] leading-[0.9] text-primary">.id</span>
                </div>
            </div>
        </footer>
    );
}
