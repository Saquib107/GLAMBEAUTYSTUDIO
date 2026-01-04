import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
    const about = useScrollAnimation();
    const gallery = useScrollAnimation();
    const pricing = useScrollAnimation();
    const contact = useScrollAnimation();

    return (
        <main className="min-h-screen">
            <Navigation />
            <div id="hero">
                <HeroSection />
            </div>
            <div
                id="about"
                ref={about.ref}
                className={`transition-all duration-700 ${about.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <AboutSection />
            </div>
            <div
                id="gallery"
                ref={gallery.ref}
                className={`transition-all duration-700 ${gallery.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <GallerySection />
            </div>
            <div
                id="pricing"
                ref={pricing.ref}
                className={`transition-all duration-700 ${pricing.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <PricingSection />
            </div>
            <div
                id="contact"
                ref={contact.ref}
                className={`transition-all duration-700 ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <ContactSection />
            </div>

            <footer className="bg-foreground text-background py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Glam Beauty Studio. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
};

export default Index;
