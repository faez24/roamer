import { useState } from 'react';
import { WHATSAPP_URL } from '../../lib/airports';
import { WhatsAppIcon } from '../Icons';

// One row of the Q&A table: the question sits on the left, its answer opens on the right.
function FaqRow({ id, item, open, onToggle }) {
    return (
        <div className="border-b border-hairline lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16">
            <h3>
                <button
                    type="button"
                    id={`${id}-q`}
                    aria-expanded={open}
                    aria-controls={`${id}-a`}
                    onClick={onToggle}
                    className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer"
                >
                    <span className="t-display text-[1.3rem] sm:text-[1.6rem] leading-[1.15] tracking-[-0.025em]">{item.q}</span>
                    <span aria-hidden="true" className="relative shrink-0 w-5 h-5 mt-1 lg:hidden">
                        <span className="absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-midnight" />
                        <span className={`absolute top-0 bottom-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-midnight transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
                    </span>
                    <span aria-hidden="true" className="hidden lg:block shrink-0 text-sm text-mute mt-1.5">{open ? 'Tutup' : 'Buka'}</span>
                </button>
            </h3>
            <div id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="pb-7 lg:pt-7 lg:pr-4 text-lg text-mute leading-relaxed max-w-2xl">
                        {item.a}
                        {item.link && (
                            <>
                                {' '}
                                <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-primary-ink font-medium underline underline-offset-4 hover:text-midnight">
                                    {item.link.label}
                                    <span className="sr-only"> (buka di tab baru)</span>
                                </a>
                                .
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Faq({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-mist py-20 sm:py-28">
            <div className="max-w-[88rem] mx-auto px-5 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
                    <div>
                        <h2 className="t-display text-[clamp(2.75rem,7vw,6.25rem)]">Punya pertanyaan?</h2>
                        <p className="mt-6 text-lg text-mute leading-relaxed max-w-md">
                            Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang layanan eSIM Roamer.id.
                        </p>
                    </div>

                    <div className="max-w-xs">
                        <p className="text-[17px] font-medium">Masih ada pertanyaan?</p>
                        <p className="mt-1 text-mute leading-snug">Tim kami siap membantu lewat WhatsApp kapan saja.</p>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-line mt-4 text-[17px]">
                            <WhatsAppIcon className="w-5 h-5" />
                            Hubungi via WhatsApp
                            <span className="sr-only"> (buka di tab baru)</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-midnight">
                    {items.map((item, i) => (
                        <FaqRow key={item.q} id={`faq-${i}`} item={item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
                    ))}
                </div>
            </div>
        </section>
    );
}
