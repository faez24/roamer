import { Head } from '@inertiajs/react';
import Faq from '../../Components/Landing/Faq';
import Footer from '../../Components/Landing/Footer';
import Hero from '../../Components/Landing/Hero';
import KuotaUmrohCta from '../../Components/Landing/KuotaUmrohCta';
import MobileCtaBar from '../../Components/Landing/MobileCtaBar';
import Navbar from '../../Components/Landing/Navbar';
import Packages from '../../Components/Landing/Packages';
import Testimonials from '../../Components/Landing/Testimonials';
import Ticker from '../../Components/Landing/Ticker';

export default function Index({ popular, destinations, ticker, packages, testimonials, faqs }) {
    return (
        <>
            <Head title="Paket Data Internasional" />
            <Navbar />
            <Hero destinations={destinations} popular={popular} />
            <Ticker countries={ticker} />
            <Packages packages={packages} />
            <Testimonials items={testimonials} />
            <KuotaUmrohCta />
            <Faq items={faqs} />
            <Footer />
            <MobileCtaBar />
        </>
    );
}
