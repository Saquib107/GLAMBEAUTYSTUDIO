import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SignatureServicesSection } from "@/components/SignatureServicesSection";
import { BeautyTransformationsSection } from "@/components/BeautyTransformationsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SpecialOffersSection } from "@/components/SpecialOffersSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
    const services = useScrollAnimation();
    const transformations = useScrollAnimation();
    const whyUs = useScrollAnimation();
    const offers = useScrollAnimation();
    const testimonials = useScrollAnimation();
    const booking = useScrollAnimation();

    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <div id="hero">
                <HeroSection />
            </div>

            {/* Signature Services Section */}
            <div
                id="services"
                ref={services.ref}
                className={`transition-all duration-700 ${services.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <SignatureServicesSection />
            </div>

            {/* Beauty Transformations Section */}
            <div
                id="transformations"
                ref={transformations.ref}
                className={`transition-all duration-700 ${transformations.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <BeautyTransformationsSection />
            </div>

            {/* Why Choose Us Section */}
            <div
                id="why-us"
                ref={whyUs.ref}
                className={`transition-all duration-700 ${whyUs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <WhyChooseUsSection />
            </div>

            {/* Special Offers Section */}
            <div
                id="offers"
                ref={offers.ref}
                className={`transition-all duration-700 ${offers.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <SpecialOffersSection />
            </div>

            {/* Testimonial Carousel */}
            <div
                id="testimonials"
                ref={testimonials.ref}
                className={`transition-all duration-700 ${testimonials.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <TestimonialCarousel />
            </div>

            {/* Booking Section */}
            <div
                id="booking"
                ref={booking.ref}
                className={`transition-all duration-700 ${booking.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <BookingSection />
            </div>

            {/* Footer */}
            <Footer />

            {/* WhatsApp Button */}
            <WhatsAppButton />
        </main>
    );
};

export default Index;
