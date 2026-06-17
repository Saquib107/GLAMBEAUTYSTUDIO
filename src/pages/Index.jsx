import { PricingSection } from "@/components/PricingSection";
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
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <div id="hero">
                <HeroSection />
            </div>

            {/* Signature Services Section */}
            <div id="services">
                <SignatureServicesSection />
            </div>

            {/* Pricing Section */}
            <div id="pricing-guide">
                <PricingSection />
            </div>

            {/* Beauty Transformations Section */}
            <div id="transformations">
                <BeautyTransformationsSection />
            </div>

            {/* Why Choose Us Section */}
            <div id="why-us">
                <WhyChooseUsSection />
            </div>

            {/* Special Offers Section */}
            <div id="offers">
                <SpecialOffersSection />
            </div>

            {/* Testimonial Carousel */}
            <div id="testimonials">
                <TestimonialCarousel />
            </div>

            {/* Booking Section */}
            <div id="booking">
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
