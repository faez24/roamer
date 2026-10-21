import { ArrowRightIcon, PlayIcon, YouTubeIcon } from '../Icons';
import SectionHeading from '../SectionHeading';

function TestimonialCard({ item }) {
    return (
        <a
            href="https://youtube.com/shorts/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative shrink-0 w-[200px] sm:w-auto aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} snap-start cursor-pointer`}
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('https://flagcdn.com/w640/${item.code}.png')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-200">
                    <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                </div>
            </div>

            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-red-500 rounded-md">
                <YouTubeIcon className="w-3 h-3 text-white" />
                <span className="text-[10px] font-bold text-white">Shorts</span>
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                <img src={`https://flagcdn.com/w40/${item.code}.png`} alt={item.code.toUpperCase()} className="w-4 h-3 rounded-[1px] object-cover" />
                <span className="text-[10px] font-semibold text-white">{item.country}</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <p className="text-[11px] text-white/60 leading-snug mb-1.5 line-clamp-2">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">{item.initials}</div>
                    <div>
                        <p className="text-xs font-semibold text-white leading-tight">{item.name}</p>
                        <p className="text-[10px] text-white/50">{item.plan}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function Testimonials({ items }) {
    return (
        <section className="py-16 sm:py-24 lg:py-28 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
                    <SectionHeading
                        label="Testimoni"
                        title="Cerita mereka pakai Roamer.id"
                        description="Pengalaman nyata dari traveler yang sudah merasakan kemudahan eSIM Roamer.id."
                    />
                    <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0">
                        Lihat semua
                        <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>

                <div
                    className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory scrollbar-hide"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {items.map((item) => (
                        <TestimonialCard key={item.name} item={item} />
                    ))}
                </div>

                <div className="mt-6 text-center sm:hidden">
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Lihat semua testimoni
                        <ArrowRightIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
