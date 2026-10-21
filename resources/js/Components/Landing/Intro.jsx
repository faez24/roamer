import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PlaneMark } from './Logo';

const STORAGE_KEY = 'roamer-intro';
const html = () => document.documentElement;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (a, b, t) => {
    const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
    return x * x * (3 - 2 * x);
};

function markSeen() {
    try {
        sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
        /* storage can be blocked; the intro would then replay, which is harmless */
    }
}

// The plane leaves the middle of the screen going left, then climbs into the logo slot in the navbar.
function flightKeyframes(dx, dy, scale) {
    const steps = 30;
    const frames = [];
    for (let i = 0; i <= steps; i += 1) {
        const t = i / steps;
        const u = easeInOut(t);
        // quadratic curve: start (0,0), control (dx,0), end (dx,dy)
        const x = 2 * u * (1 - u) * dx + u * u * dx;
        const y = u * u * dy;
        // nose heading follows the curve (left -> up); rest pose is nose-up, so rotate = heading + 90
        const heading = (Math.atan2(u * dy, (1 - u) * dx) * 180) / Math.PI;
        const rotate = (heading + 90) * smooth(0, 0.14, t);
        const s = 1 + (scale - 1) * u;
        frames.push({ offset: t, transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${s})` });
    }
    return frames;
}

export default function Intro() {
    const [mounted, setMounted] = useState(() => typeof document !== 'undefined' && html().dataset.intro === 'playing');
    const bgRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const slotRef = useRef(null);
    const planeRef = useRef(null);
    const flipRef = useRef(null);

    useEffect(() => {
        if (!mounted) return undefined;

        let ended = false;
        const animations = [];
        const app = document.getElementById('app');
        if (app) app.inert = true;

        const end = () => {
            if (ended) return;
            ended = true;
            animations.forEach((a) => a.cancel());
            html().dataset.intro = 'done';
            markSeen();
            if (app) app.inert = false;
            setMounted(false);
        };

        const run = (el, keyframes, options) => {
            const anim = el.animate(keyframes, { fill: 'both', ...options });
            animations.push(anim);
            return anim;
        };

        const play = async () => {
            await Promise.race([document.fonts?.ready, wait(900)]);
            if (ended) return;

            const ease = 'cubic-bezier(0.2, 0.7, 0.2, 1)';
            run(leftRef.current, [{ opacity: 0, transform: 'translateX(18px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 800, easing: ease });
            run(rightRef.current, [{ opacity: 0, transform: 'translateX(-18px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 800, easing: ease });
            // the plane opens up from edge-on, like turning a coin
            run(flipRef.current, [{ opacity: 0, transform: 'perspective(500px) rotateY(90deg)' }, { opacity: 1, transform: 'perspective(500px) rotateY(0deg)' }], { duration: 900, delay: 250, easing: ease });

            await wait(2000);
            if (ended) return;

            const target = document.getElementById('nav-mark');
            const from = planeRef.current.getBoundingClientRect();
            if (!target) {
                end();
                return;
            }
            const to = target.getBoundingClientRect();

            // lift the plane out of the lockup so it can travel; the slot keeps the layout steady
            const plane = planeRef.current;
            plane.style.position = 'fixed';
            plane.style.left = `${from.left}px`;
            plane.style.top = `${from.top}px`;
            plane.style.width = `${from.width}px`;
            plane.style.height = `${from.height}px`;
            plane.style.transformOrigin = 'center';

            const dx = to.left + to.width / 2 - (from.left + from.width / 2);
            const dy = to.top + to.height / 2 - (from.top + from.height / 2);
            const flight = 1100;

            const fade = [{ opacity: 1, filter: 'blur(0)' }, { opacity: 0, filter: 'blur(6px)' }];
            run(leftRef.current, fade, { duration: 450, easing: 'ease-in' });
            run(rightRef.current, fade, { duration: 450, easing: 'ease-in' });
            run(bgRef.current, [{ opacity: 1 }, { opacity: 0 }], { duration: 500, delay: flight * 0.55, easing: 'ease-out' });
            const fly = run(plane, flightKeyframes(dx, dy, to.width / from.width), { duration: flight, easing: 'linear' });

            // the page starts to arrive while the plane is still landing
            await wait(flight * 0.6);
            if (ended) return;
            html().dataset.intro = 'landing';

            await fly.finished.catch(() => {});
            end();
        };

        play();

        const skip = () => end();
        window.addEventListener('keydown', skip);
        window.addEventListener('pointerdown', skip);
        return () => {
            window.removeEventListener('keydown', skip);
            window.removeEventListener('pointerdown', skip);
            if (!ended) {
                ended = true;
                animations.forEach((a) => a.cancel());
                if (app) app.inert = false;
            }
        };
    }, [mounted]);

    if (!mounted) return null;

    const size = 'clamp(3.25rem, 7vw, 5.25rem)';
    const word = 't-display text-[clamp(2.6rem,8vw,6rem)] opacity-0';

    return createPortal(
        <div className="fixed inset-0 z-[100]" aria-hidden="true">
            <div ref={bgRef} className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 flex items-center justify-center gap-[clamp(0.6rem,2.4vw,2rem)]">
                <span ref={leftRef} className={word}>Roamer</span>
                <span ref={slotRef} className="relative inline-block shrink-0" style={{ width: size, height: size }}>
                    <span ref={planeRef} className="block w-full h-full will-change-transform">
                        <span ref={flipRef} className="block w-full h-full opacity-0">
                            <PlaneMark className="w-full h-full text-primary" />
                        </span>
                    </span>
                </span>
                <span ref={rightRef} className={`${word} text-primary`}>.id</span>
            </div>
        </div>,
        document.body,
    );
}
