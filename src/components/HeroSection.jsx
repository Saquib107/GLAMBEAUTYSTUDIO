import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

export const HeroSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in content with a premium, slow ease
            gsap.from([".hero-eyebrow", ".hero-headline", ".hero-subheadline", ".hero-tagline", ".hero-buttons"], {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
            });

            // Float animations for subtle decorative elements
            gsap.to(".float-element-1", {
                y: -15,
                rotation: 5,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-element-2", {
                y: 15,
                rotation: -5,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5,
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
            className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden pt-32 lg:pt-40 pb-20 flex items-center justify-center bg-[#FAF7F4]"
            id="hero"
        >
            {/* Background - Soft ivory/cream to match Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f4] via-[#fdfbfa] to-[#f5f0ea] -z-20" />

            {/* Subtle Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#C99A6B]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#8B5E3C]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

            {/* Large Subtle GBS Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] lg:text-[35rem] font-serif font-bold text-[#C99A6B]/[0.04] whitespace-nowrap pointer-events-none -z-10 tracking-widest select-none">
                GBS
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
                
                {/* Floating Decorative Icon near top left */}
                <div className="float-element-1 absolute top-0 left-[10%] lg:left-[20%] text-[#C99A6B]/40 hidden md:block z-0">
                    <Sparkles size={28} strokeWidth={1.5} />
                </div>
                
                {/* Floating Decorative Icon near bottom right */}
                <div className="float-element-2 absolute bottom-[10%] right-[10%] lg:right-[20%] text-[#C99A6B]/30 hidden md:block z-0">
                    <Star size={24} strokeWidth={1.5} className="fill-[#C99A6B]/10" />
                </div>

                <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 relative z-10 flex flex-col items-center">
                    
                    {/* Eyebrow text with elegant symmetrical lines */}
                    <div className="hero-eyebrow flex items-center justify-center gap-4 w-full">
                        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C99A6B]" />
                        <span className="text-xs lg:text-sm font-medium tracking-[0.2em] text-[#C99A6B] uppercase">
                            WELCOME TO GLAM BEAUTY STUDIO
                        </span>
                        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C99A6B]" />
                    </div>

                    {/* Main Headline */}
                    <h1 className="hero-headline font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-[#2B1D17] leading-[1.05] lg:leading-[1.02] tracking-tight whitespace-nowrap">
                        Where Beauty Meets <span className="block text-[#8B5E3C] mt-2 lg:mt-3 italic font-medium">Timeless Elegance.</span>
                    </h1>

                    {/* Description */}
                    <div className="space-y-3 lg:space-y-4 pt-2">
                        <p className="hero-subheadline text-base lg:text-xl text-[#8B5E3C]/90 leading-relaxed font-light mx-auto max-w-2xl whitespace-normal">
                            Step into a world of refined beauty and relaxation. At Glam Beauty Studio, every detail is thoughtfully crafted to make you feel confident, radiant, and beautifully yourself.
                        </p>

                        {/* Elegant Tagline / Signature */}
                        <p className="hero-tagline text-sm lg:text-lg font-serif italic text-[#C99A6B] pt-2">
                            “Your beauty, our passion.”
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-buttons flex flex-col sm:flex-row gap-5 pt-6 justify-center items-center w-full">
                        <Button
                            size="lg"
                            className="hero-button bg-[#C99A6B] hover:bg-[#b8894f] text-white px-10 py-7 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto shadow-sm"
                            onClick={() => scrollToSection("booking")}
                        >
                            Book an Appointment
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="hero-button border border-[#C99A6B]/40 text-[#8B5E3C] hover:bg-[#C99A6B]/5 hover:border-[#C99A6B] hover:text-[#2B1D17] px-10 py-7 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent"
                            onClick={() => scrollToSection("services")}
                        >
                            Explore Our Studio
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
