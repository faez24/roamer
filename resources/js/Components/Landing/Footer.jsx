import { GlobeIcon } from '../Icons';

const linkClass = 'text-sm text-gray-500 hover:text-white transition-colors';

const navigation = [
    { label: 'Beranda', href: '#' },
    { label: 'Paket Data', href: '#paket' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Tentang Kami', href: '#' },
];

const destinations = ['Jepang', 'Korea Selatan', 'Thailand', 'Singapura', 'Amerika Serikat'];

const contacts = ['hello@roamer.id', '+62 812 3456 7890', 'Jakarta, Indonesia'];

function Column({ title, children }) {
    return (
        <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">{title}</h4>
            <ul className="space-y-2.5">{children}</ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 pb-20 sm:pb-0">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    <div className="col-span-2 lg:col-span-1">
                        <a href="#" className="flex items-center gap-2.5 mb-4">
                            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                                <GlobeIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-base font-bold text-white">
                                Roamer<span className="text-primary">.id</span>
                            </span>
                        </a>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                            Paket data internasional terjangkau. Tetap terhubung di mana pun Anda berada.
                        </p>
                    </div>

                    <Column title="Navigasi">
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className={linkClass}>{item.label}</a>
                            </li>
                        ))}
                    </Column>

                    <Column title="Destinasi">
                        {destinations.map((name) => (
                            <li key={name}>
                                <a href="#" className={linkClass}>{name}</a>
                            </li>
                        ))}
                    </Column>

                    <Column title="Kontak">
                        {contacts.map((line) => (
                            <li key={line} className="text-sm text-gray-500">{line}</li>
                        ))}
                    </Column>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Roamer.id. Semua hak dilindungi.</p>
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Kebijakan Privasi</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Syarat &amp; Ketentuan</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
