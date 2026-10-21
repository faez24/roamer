import { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon, WhatsAppIcon } from '../Icons';

const dotPattern = {
    backgroundImage: 'radial-gradient(circle, #FF4F00 1px, transparent 1px)',
    backgroundSize: '24px 24px',
};

function FaqItem({ index, item, open, onToggle }) {
    return (
        <div
            className={`group rounded-2xl border transition-all duration-300 cursor-pointer ${
                open ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
            onClick={onToggle}
        >
            <div className="px-5 sm:px-6 py-4 sm:py-5">
                <div className="flex items-start gap-4">
                    <span
                        className={`shrink-0 w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                            open ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                        }`}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                            <h3 className={`font-semibold text-sm sm:text-[15px] transition-colors duration-300 pr-2 ${open ? 'text-white' : 'text-gray-900'}`}>
                                {item.q}
                            </h3>
                            <div
                                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    open ? 'bg-white/10 rotate-180' : 'bg-gray-100'
                                }`}
                            >
                                <ChevronDownIcon className={`w-3.5 h-3.5 transition-colors duration-300 ${open ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                        </div>
                        <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                    {item.a}
                                    {item.link && (
                                        <>
                                            {' '}
                                            <a
                                                href={item.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline font-medium"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {item.link.label}
                                            </a>
                                            .
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Faq({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.03] pointer-events-none" style={dotPattern}></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.03] pointer-events-none" style={dotPattern}></div>

            <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-5 lg:gap-16 xl:gap-20">
                    <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start mb-10 sm:mb-14 lg:mb-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full mb-5">
                            <HelpCircleIcon className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary">FAQ</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight leading-tight text-gray-900">
                            Punya<br className="hidden lg:block" /> pertanyaan?
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
                            Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang layanan eSIM Roamer.id.
                        </p>

                        <div className="mt-6 lg:mt-8 p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-[13px] font-medium text-gray-900">Masih ada pertanyaan?</p>
                            <p className="mt-1 text-xs text-gray-400 leading-relaxed">Tim kami siap membantu lewat WhatsApp kapan saja.</p>
                            <a href="#" className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                                <WhatsAppIcon className="w-3.5 h-3.5" />
                                Hubungi via WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                        {items.map((item, i) => (
                            <FaqItem
                                key={item.q}
                                index={i}
                                item={item}
                                open={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
