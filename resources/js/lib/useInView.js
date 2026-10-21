import { useEffect, useRef, useState } from 'react';

// Fires once when the element nears the viewport, then stops observing.
export default function useInView({ rootMargin = '0px', threshold = 0 } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || inView) return undefined;

        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [inView, rootMargin, threshold]);

    return [ref, inView];
}

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
