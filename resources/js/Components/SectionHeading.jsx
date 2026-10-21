export default function SectionHeading({ label, title, description }) {
    return (
        <div>
            <div className="flex items-center gap-2.5 mb-3">
                <div className="w-1.5 h-6 rounded-full bg-primary"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{label}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            <p className="mt-2.5 text-sm sm:text-base text-gray-500 max-w-md">{description}</p>
        </div>
    );
}
