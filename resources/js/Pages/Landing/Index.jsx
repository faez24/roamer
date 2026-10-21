import { Head } from '@inertiajs/react';
import { lazy } from 'react';
import LazySection from '../../Components/LazySection';
import Hero from '../../Components/Landing/Hero';
import Intro from '../../Components/Landing/Intro';
import MobileCtaBar from '../../Components/Landing/MobileCtaBar';
import Navbar from '../../Components/Landing/Navbar';
import Packages from '../../Components/Landing/Packages';
import Ticker from '../../Components/Landing/Ticker';

// Below-the-fold sections load their JS only when scrolled near.
const Testimonials = lazy(() => import('../../Components/Landing/Testimonials'));
const KuotaUmrohCta = lazy(() => import('../../Components/Landing/KuotaUmrohCta'));
const Faq = lazy(() => import('../../Components/Landing/Faq'));
const Footer = lazy(() => import('../../Components/Landing/Footer'));

export default function Index({ popular, destinations, ticker, packages, testimonials, faqs }) {
    return (
        <>
            <Head title="Paket Data Internasional" />
            <a
                href="#konten"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-midnight focus:font-semibold"
            >
                Lewati ke konten
            </a>
            <Intro />
            <Navbar />
            <main id="konten" tabIndex={-1} className="outline-none">
                <Hero destinations={destinations} popular={popular} />
                <Ticker countries={ticker} />
                <Packages packages={packages} />
                <LazySection minHeight={720} className="bg-midnight">
                    <Testimonials items={testimonials} />
                </LazySection>
                <LazySection minHeight={480} className="bg-white">
                    <KuotaUmrohCta />
                </LazySection>
                <LazySection id="faq" minHeight={640} className="bg-mist">
                    <Faq items={faqs} />
                </LazySection>
            </main>
            <LazySection minHeight={420} className="bg-white">
                <Footer />
            </LazySection>
            <MobileCtaBar packages={packages} />
        </>
    );
}
