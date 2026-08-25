import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Sparkles, Star } from "lucide-react";

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

            // Float animations for decorative elements
            gsap.to(".float-element-1", {
                y: -10,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-element-2", {
                y: 10,
                rotation: 5,
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
            className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-20 flex items-center bg-[#FAF7F4]"
            id="hero"
        >
            {/* Background - Soft ivory/cream to match Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f4] via-[#fdfbfa] to-[#f5f0ea] -z-10" />

            {/* Subtle Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-[#C99A6B]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-[#8B5E3C]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <div ref={leftRef} className="space-y-4 lg:space-y-5 max-w-xl mx-auto lg:mx-0 text-center lg:text-left z-10 relative">
                        
                        {/* Floating Decorative Icon near heading */}
                        <div className="float-element-1 absolute -top-10 -left-6 text-[#C99A6B]/40 hidden lg:block z-0">
                            <Sparkles size={24} strokeWidth={1.5} />
                        </div>

                        {/* Eyebrow text with elegant line */}
                        <div className="hero-eyebrow flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C99A6B] lg:from-[#C99A6B] lg:to-[#C99A6B]" />
                            <span className="text-xs lg:text-sm font-medium tracking-[0.2em] text-[#C99A6B] uppercase">
                                WELCOME TO GLAM BEAUTY
                            </span>
                            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C99A6B] lg:hidden" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-headline font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#2B1D17] leading-[1.15] tracking-tight relative z-10 whitespace-nowrap">
                            Where Beauty Meets <span className="block text-[#8B5E3C] mt-1 lg:mt-2 italic font-medium">Timeless Elegance.</span>
                        </h1>

                        {/* Description */}
                        <div className="space-y-2 lg:space-y-3">
                            <p className="hero-subheadline text-base lg:text-lg text-[#8B5E3C]/90 leading-relaxed font-light mx-auto lg:mx-0 max-w-lg whitespace-normal">
                                Step into a world of refined beauty and relaxation. At Glam Beauty, every detail is thoughtfully crafted to make you feel confident, radiant, and beautifully yourself.
                            </p>

                            {/* Elegant Tagline / Signature */}
                            <p className="hero-tagline text-sm lg:text-base font-serif italic text-[#C99A6B]/90">
                                “Your beauty, our passion.”
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 justify-center lg:justify-start items-center">
                            <Button
                                size="lg"
                                className="hero-button bg-[#C99A6B] hover:bg-[#b8894f] text-white px-8 py-6 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto shadow-sm"
                                onClick={() => scrollToSection("booking")}
                            >
                                Book an Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="hero-button border border-[#C99A6B]/40 text-[#8B5E3C] hover:bg-[#C99A6B]/5 hover:border-[#C99A6B] hover:text-[#2B1D17] px-8 py-6 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent"
                                onClick={() => scrollToSection("services")}
                            >
                                Explore Our Studio
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div ref={rightRef} className="relative w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                        {/* Main Hero Image Container - Asymmetric elegant shape */}
                        <div className="hero-image-wrapper relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[480px] aspect-[4/5] mx-auto lg:mx-0">
                            
                            {/* Decorative thin border offset behind the image */}
                            <div className="absolute inset-0 border-[1px] border-[#C99A6B]/40 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] lg:rounded-tl-[80px] lg:rounded-br-[80px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] translate-x-4 translate-y-4 -z-10" />
                            
                            {/* Floating decorative star near image */}
                            <div className="float-element-2 absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 text-[#C99A6B]/50 z-20 hidden sm:block">
                                <Star size={28} strokeWidth={1.5} className="fill-[#C99A6B]/10" />
                            </div>
                            
                            {/* Image Wrapper */}
                            <div className="relative w-full h-full overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] lg:rounded-tl-[80px] lg:rounded-br-[80px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] shadow-[0_15px_40px_rgba(43,29,23,0.08)] bg-white">
                                <img
                                    src={heroImage}
                                    alt="Glam Beauty Studio"
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Extremely light subtle blend layer to soften image */}
                                <div className="absolute inset-0 bg-[#f5f0ea]/5 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
