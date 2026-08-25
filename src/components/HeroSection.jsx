import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in left section content
            gsap.from([".hero-eyebrow", ".hero-headline", ".hero-subheadline", ".hero-buttons", ".hero-tagline"], {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",
            });

            // Fade and scale in right section image
            gsap.from(".hero-image-wrapper", {
                opacity: 0,
                scale: 0.95,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.3,
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
            className="relative min-h-screen overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24 flex items-center bg-[#FAF7F4]"
            id="hero"
        >
            {/* Background - Soft ivory/cream to match Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f4] via-[#fdfbfa] to-[#f5f0ea] -z-10" />

            {/* Subtle Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C99A6B]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5E3C]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <div ref={leftRef} className="space-y-8 lg:space-y-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                        
                        {/* Eyebrow text */}
                        <div className="hero-eyebrow flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-12 h-[1px] bg-[#C99A6B]" />
                            <span className="text-sm font-medium tracking-widest text-[#C99A6B] uppercase">
                                WELCOME TO GLAM BEAUTY
                            </span>
                            <div className="w-12 h-[1px] bg-[#C99A6B] lg:hidden" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-headline font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#2B1D17] leading-[1.15] tracking-tight">
                            Where Beauty Meets <span className="block text-[#8B5E3C] mt-2 italic font-medium">Timeless Elegance.</span>
                        </h1>

                        {/* Description */}
                        <p className="hero-subheadline text-lg lg:text-xl text-[#8B5E3C] leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Step into a world of refined beauty and relaxation. At Glam Beauty, every detail is thoughtfully crafted to make you feel confident, radiant, and beautifully yourself.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start items-center">
                            <Button
                                size="lg"
                                className="hero-button bg-[#C99A6B] hover:bg-[#b8894f] text-white px-10 py-7 rounded-full text-base font-semibold transition-all duration-300 w-full sm:w-auto shadow-sm"
                                onClick={() => scrollToSection("booking")}
                            >
                                Book an Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="hero-button border border-[#C99A6B]/40 text-[#8B5E3C] hover:bg-[#C99A6B]/5 hover:border-[#C99A6B] hover:text-[#2B1D17] px-10 py-7 rounded-full text-base font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent"
                                onClick={() => scrollToSection("services")}
                            >
                                Explore Our Studio
                            </Button>
                        </div>

                        {/* Elegant Tagline below buttons */}
                        <p className="hero-tagline text-sm font-serif italic text-[#C99A6B] pt-4">
                            “Your beauty, our passion.”
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div ref={rightRef} className="relative h-[450px] sm:h-[550px] lg:h-[750px] w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Main Hero Image with minimal aesthetic */}
                        <div className="hero-image-wrapper relative w-full h-full max-w-[450px] lg:max-w-[90%] xl:max-w-[85%] mx-auto lg:mx-0">
                            {/* Decorative thin border slightly offset behind the image */}
                            <div className="absolute inset-0 border-[1px] border-[#C99A6B]/40 rounded-t-[100px] rounded-b-[100px] lg:rounded-t-full lg:rounded-b-full translate-x-4 translate-y-4 -z-10" />
                            
                            {/* Main Image Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-t-[100px] rounded-b-[100px] lg:rounded-t-full lg:rounded-b-full shadow-[0_15px_40px_rgba(43,29,23,0.06)] bg-white">
                                <img
                                    src={heroImage}
                                    alt="Glam Beauty Studio"
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Extremely light subtle blend layer to soften image, no dark overlay */}
                                <div className="absolute inset-0 bg-[#f5f0ea]/10 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

