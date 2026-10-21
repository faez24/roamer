// Roamer emblem: a plane with its nose straight up.
export function PlaneMark({ className = '', id }) {
    return (
        <svg id={id} viewBox="-16 -16 32 32" className={className} fill="currentColor" aria-hidden="true">
            <path d="M14 0 L4 -3 L-1 -12 L-5 -12 L-3 -3 L-9 -2 L-12 -6 L-14 -6 L-12 0 L-14 6 L-12 6 L-9 2 L-3 3 L-5 12 L-1 12 L4 3 Z" transform="rotate(-90)" />
        </svg>
    );
}
