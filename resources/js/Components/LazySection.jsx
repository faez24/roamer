import { Suspense, useEffect, useState } from 'react';
import useInView from '../lib/useInView';

// Holds the section's place (and anchor id) until it is near the viewport or the
// browser is idle, then mounts the children. Children are React.lazy components,
// so their JS chunk is fetched after first paint instead of blocking it. Mounting
// on idle (not only on scroll) keeps the content reachable by keyboard, screen
// readers and find-in-page; images and videos inside still load lazily.
export default function LazySection({ id, minHeight = 480, className = '', children }) {
    const [ref, inView] = useInView({ rootMargin: '400px 0px' });
    const [idle, setIdle] = useState(false);

    useEffect(() => {
        const wake = () => setIdle(true);
        const onKey = (event) => event.key === 'Tab' && wake();
        window.addEventListener('keydown', onKey, { once: true });

        let handle;
        const schedule = () => {
            handle = 'requestIdleCallback' in window ? window.requestIdleCallback(wake, { timeout: 2500 }) : window.setTimeout(wake, 1500);
        };
        if (document.readyState === 'complete') schedule();
        else window.addEventListener('load', schedule, { once: true });

        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('load', schedule);
            if ('cancelIdleCallback' in window) window.cancelIdleCallback(handle);
            else window.clearTimeout(handle);
        };
    }, []);

    const mounted = inView || idle;

    return (
        <div id={id} ref={ref} className={className} style={mounted ? undefined : { minHeight }}>
            {mounted && <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>}
        </div>
    );
}
