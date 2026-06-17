import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Star, Sparkles, Check } from "lucide-react";

export const HeroSection = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const reviewCardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in left section content
            gsap.from([".hero-badge", ".hero-headline", ".hero-subheadline", ".hero-stats", ".hero-buttons"], {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
            });

            // Fade and scale in right section image
            gsap.from(".hero-image", {
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3,
            });

            // Floating animation for review card
            gsap.to(".review-card", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Floating badges animation
            gsap.to(".floating-badge-1", {
                y: -20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".floating-badge-2", {
                y: -25,
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5,
            });

            gsap.to(".floating-badge-3", {
                y: -18,
                duration: 4.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.25,
            });

            // Button hover effects
            const buttons = document.querySelectorAll(".hero-button");
            buttons.forEach((btn) => {
                btn.addEventListener("mouseenter", () => {
                    gsap.to(btn, { scale: 1.05, duration: 0.3, overwrite: "auto" });
                });
                btn.addEventListener("mouseleave", () => {
                    gsap.to(btn, { scale: 1, duration: 0.3, overwrite: "auto" });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden pt-16 lg:pt-20 pb-12 flex items-center"
            id="hero"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f4] via-[#f5f0ea] to-[#ece7df] -z-10" />

            {/* Decorative Background Elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C99A6B]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B5E3C]/8 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column */}
                    <div ref={leftRef} className="space-y-8">
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 w-fit">
                            <Sparkles className="w-4 h-4 text-[#C99A6B]" />
                            <span className="text-sm font-medium text-[#2B1D17]">✨ Trusted By 500+ Happy Clients</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="hero-headline font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#2B1D17] leading-tight">
                                Where Beauty Meets
                                <span className="block text-[#C99A6B]">Confidence</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="hero-subheadline text-lg text-[#8B5E3C] max-w-xl leading-relaxed">
                                Professional Hair Styling, Bridal Makeup, Skin Care and Beauty Services Tailored To Enhance Your Natural Beauty.
                            </p>
                        </div>

                        {/* Trust Indicators */}
                        <div className="hero-stats grid grid-cols-3 gap-4 py-8 border-y border-[#C99A6B]/20">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-[#C99A6B]">4.9/5</div>
                                <p className="text-sm text-[#8B5E3C]/70">⭐ Rating</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-[#C99A6B]">500+</div>
                                <p className="text-sm text-[#8B5E3C]/70">👩 Happy Clients</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-[#C99A6B]">8+</div>
                                <p className="text-sm text-[#8B5E3C]/70">💄 Years Experience</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="hero-button bg-[#C99A6B] hover:bg-[#b8894f] text-white px-8 rounded-full font-semibold text-lg transition-all duration-300"
                                onClick={() => scrollToSection("booking")}
                            >
                                Book Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="hero-button border-2 border-[#C99A6B] text-[#C99A6B] hover:bg-[#C99A6B]/5 px-8 rounded-full font-semibold text-lg transition-all duration-300"
                                onClick={() => scrollToSection("transformations")}
                            >
                                View Our Work
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div ref={rightRef} className="relative h-[450px] lg:h-[650px] w-full flex items-center justify-center">
                        {/* Main Hero Image */}
                        <div className="hero-image relative w-full h-full max-w-[550px] mx-auto">
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt="Glam Beauty Studio - Premium Beauty Services"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2f2f]/40 to-transparent" />
                            </div>
                        </div>

                        {/* Review Card - Glassmorphism */}
                        <div className="review-card absolute bottom-8 left-8 right-8 lg:bottom-20 lg:left-auto lg:right-0 lg:w-80 z-10">
                            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-xl">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
                                    ))}
                                </div>
                                <p className="text-[#3b2f2f] font-medium mb-3 italic">
                                    "Absolutely amazing service. The bridal makeup was flawless and lasted through my entire wedding!"
                                </p>
                                <p className="text-sm font-semibold text-[#d4a574]">— Priya Sharma</p>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="floating-badge-1 absolute top-12 lg:top-24 -left-4 lg:left-0 z-5">
                            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#C99A6B]" />
                                <span className="text-sm font-medium text-[#2B1D17]">✓ Certified Professionals</span>
                            </div>
                        </div>

                        <div className="floating-badge-2 absolute top-1/3 -right-6 lg:right-0 z-5">
                            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#C99A6B]" />
                                <span className="text-sm font-medium text-[#2B1D17]">✓ Premium Products</span>
                            </div>
                        </div>

                        <div className="floating-badge-3 absolute bottom-32 -right-4 lg:right-0 z-5">
                            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                                <Check className="w-4 h-4 text-[#C99A6B]" />
                                <span className="text-sm font-medium text-[#2B1D17]">✓ Personalized Care</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
