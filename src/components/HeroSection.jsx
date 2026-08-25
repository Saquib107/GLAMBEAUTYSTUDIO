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
                y: -15,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-element-2", {
                y: 15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5,
            });
            gsap.to(".float-element-3", {
                y: -10,
                rotation: 10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
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
            className="relative min-h-[100dvh] lg:h-[100dvh] overflow-hidden pt-24 lg:pt-20 pb-10 flex items-center bg-[#FAF7F4]"
            id="hero"
        >
            {/* Background - Soft ivory/cream to match Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f4] via-[#fdfbfa] to-[#f5f0ea] -z-10" />

            {/* Subtle Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-[#C99A6B]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#8B5E3C]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

            {/* Elegant Watermark Text */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 -rotate-90 text-[15rem] font-serif font-bold text-[#C99A6B]/[0.03] whitespace-nowrap pointer-events-none -z-10 tracking-widest hidden lg:block">
                GLAMOUR
            </div>

            {/* Floating Decorative Icons */}
            <div className="float-element-1 absolute top-[20%] left-[5%] text-[#C99A6B]/30 hidden lg:block">
                <Sparkles size={32} strokeWidth={1} />
            </div>
            <div className="float-element-2 absolute bottom-[15%] left-[45%] text-[#C99A6B]/20 hidden lg:block">
                <Star size={24} strokeWidth={1} />
            </div>
            <div className="float-element-3 absolute top-[15%] right-[45%] text-[#8B5E3C]/20 hidden lg:block z-20">
                <Sparkles size={28} strokeWidth={1} />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                    {/* Left Column - Content */}
                    <div ref={leftRef} className="space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                        
                        {/* Eyebrow text */}
                        <div className="hero-eyebrow flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-12 h-[1px] bg-[#C99A6B]" />
                            <span className="text-xs lg:text-sm font-medium tracking-widest text-[#C99A6B] uppercase">
                                WELCOME TO GLAM BEAUTY
                            </span>
                            <div className="w-12 h-[1px] bg-[#C99A6B] lg:hidden" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-headline font-serif text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5rem] font-bold text-[#2B1D17] leading-[1.1] tracking-tight">
                            Where Beauty Meets <span className="block text-[#8B5E3C] mt-1 lg:mt-2 italic font-medium">Timeless Elegance.</span>
                        </h1>

                        {/* Description */}
                        <p className="hero-subheadline text-base sm:text-lg lg:text-xl text-[#8B5E3C] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                            Step into a world of refined beauty and relaxation. At Glam Beauty, every detail is thoughtfully crafted to make you feel confident, radiant, and beautifully yourself.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4 justify-center lg:justify-start items-center">
                            <Button
                                size="lg"
                                className="hero-button bg-[#C99A6B] hover:bg-[#b8894f] text-white px-8 lg:px-10 py-6 lg:py-7 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto shadow-sm"
                                onClick={() => scrollToSection("booking")}
                            >
                                Book an Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="hero-button border border-[#C99A6B]/40 text-[#8B5E3C] hover:bg-[#C99A6B]/5 hover:border-[#C99A6B] hover:text-[#2B1D17] px-8 lg:px-10 py-6 lg:py-7 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 w-full sm:w-auto bg-transparent"
                                onClick={() => scrollToSection("services")}
                            >
                                Explore Our Studio
                            </Button>
                        </div>

                        {/* Elegant Tagline below buttons */}
                        <p className="hero-tagline text-xs lg:text-sm font-serif italic text-[#C99A6B] pt-2 lg:pt-4">
                            “Your beauty, our passion.”
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div ref={rightRef} className="relative h-[350px] sm:h-[450px] lg:h-[70vh] w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Main Hero Image with minimal aesthetic */}
                        <div className="hero-image-wrapper relative w-full h-full max-w-[400px] lg:max-w-none lg:w-[90%] xl:w-[85%] mx-auto lg:mx-0">
                            {/* Decorative thin border slightly offset behind the image */}
                            <div className="absolute inset-0 border-[1px] border-[#C99A6B]/40 rounded-t-[100px] rounded-b-[100px] lg:rounded-t-full lg:rounded-b-full translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 -z-10" />
                            
                            {/* Floating decorative star near image */}
                            <div className="float-element-1 absolute -top-4 -right-4 lg:-top-6 lg:-right-6 text-[#C99A6B]/40 z-20 hidden sm:block">
                                <Star size={24} strokeWidth={1.5} className="fill-[#C99A6B]/10" />
                            </div>
                            
                            {/* Main Image Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-t-[100px] rounded-b-[100px] lg:rounded-t-full lg:rounded-b-full shadow-[0_15px_40px_rgba(43,29,23,0.08)] bg-white">
                                <img
                                    src={heroImage}
                                    alt="Glam Beauty Studio"
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Extremely light subtle blend layer to soften image */}
                                <div className="absolute inset-0 bg-[#f5f0ea]/10 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
