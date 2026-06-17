import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        service: "Bridal Makeup",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        rating: 5,
        text: "Absolutely magical! The bridal makeup was flawless and lasted throughout my entire wedding. Zeba's attention to detail and professionalism made me feel so confident on my special day.",
    },
    {
        id: 2,
        name: "Anjali Patel",
        service: "Hair Spa Treatment",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5,
        text: "My hair has never looked and felt better! The hair spa treatment was incredibly rejuvenating. The team really knows their craft and uses premium products that actually work.",
    },
    {
        id: 3,
        name: "Kavya Deshmukh",
        service: "Party Makeup",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        rating: 5,
        text: "I had a last-minute event and Glam Beauty Studio fit me in perfectly. The makeup was stunning and lasted all evening. Professional, friendly, and worth every penny!",
    },
    {
        id: 4,
        name: "Sneha Gupta",
        service: "Facial Treatment",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5,
        text: "Best facial I've ever had. The team really listens to your concerns and customizes the treatment accordingly. My skin feels rejuvenated and glowing!",
    },
];

export const TestimonialCarousel = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonials-title, .testimonials-subtitle",
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".carousel-container",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Auto-rotate carousel
    useEffect(() => {
        if (!autoplay) return;

        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(autoplayRef.current);
    }, [autoplay]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const visibleSlides = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="testimonials-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Loved By Hundreds
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="testimonials-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Real stories from our happy clients about their beauty transformations.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="carousel-container relative">
                        {/* Carousel Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {visibleSlides.map((testimonial, idx) => (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-500 transform ${
                                        idx === 0
                                            ? "md:scale-105 md:z-10"
                                            : idx === 1
                                            ? "md:scale-100 md:z-5"
                                            : "hidden md:block md:scale-100 md:z-5"
                                    }`}
                                >
                                    <div className="bg-[#FAF7F4] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        {/* Header with Photo and Stars */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover border-3 border-[#C99A6B]"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-[#2B1D17] text-lg">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-[#C99A6B] text-sm font-medium">
                                                        {testimonial.service}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-[#C99A6B] text-[#C99A6B]"
                                                />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-[#8B5E3C] leading-relaxed italic">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between gap-8">
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToSlide(idx)}
                                        className={`transition-all duration-300 rounded-full ${
                                            idx === currentIndex
                                                ? "w-8 h-3 bg-[#C99A6B]"
                                                : "w-3 h-3 bg-[#C99A6B]/40 hover:bg-[#C99A6B]/60"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Trust Statistics */}
                    <div className="mt-16 grid grid-cols-3 gap-6 text-center">
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">500+</p>
                            <p className="text-[#8B5E3C] font-medium">Happy Clients</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">4.9★</p>
                            <p className="text-[#8B5E3C] font-medium">Average Rating</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">8+</p>
                            <p className="text-[#8B5E3C] font-medium">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
