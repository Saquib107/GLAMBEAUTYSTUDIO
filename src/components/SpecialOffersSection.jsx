import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const offers = [
    {
        id: 1,
        name: "Bridal Package",
        description: "Complete bridal makeup with trial, reception makeup, and makeup touch-ups.",
        originalPrice: "₹15,000",
        discountedPrice: "₹9,000",
        discount: "40%",
        services: ["HD Bridal Makeup", "Reception Makeup", "Touch-ups"],
    },
    {
        id: 2,
        name: "Hair Spa Package",
        description: "Intensive hair spa treatment with scalp massage and conditioning.",
        originalPrice: "₹2,000",
        discountedPrice: "₹1,400",
        discount: "30%",
        services: ["Hair Spa", "Scalp Massage", "Deep Conditioning"],
    },
    {
        id: 3,
        name: "Skin Glow Package",
        description: "Complete skincare transformation with facial, cleanup, and massage.",
        originalPrice: "₹3,500",
        discountedPrice: "₹2,625",
        discount: "25%",
        services: ["Luxury Facial", "Clean-up", "Face Massage"],
    },
];

export const SpecialOffersSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animate section title
            gsap.fromTo(".offers-title, .offers-subtitle",
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

            // Staggered animation for offer cards
            gsap.fromTo(".offer-card",
                { opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "back.out",
                }
            );

            // Pulse animation on discount badges
            gsap.to(".discount-badge", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                },
                scale: 1.05,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="offers-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Special Offers
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="offers-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Exclusive packages at unbeatable prices. Limited time offers!
                        </p>
                    </div>

                    {/* Offers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {offers.map((offer) => (
                            <Card
                                key={offer.id}
                                className="offer-card relative bg-[#FAF7F4] border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                            >
                                {/* Discount Badge */}
                                <div className="discount-badge absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-[#C99A6B] to-[#8B5E3C] rounded-full flex items-center justify-center shadow-lg">
                                    <div className="text-center">
                                        <p className="text-white font-bold text-2xl">{offer.discount}</p>
                                        <p className="text-white/80 text-xs">OFF</p>
                                    </div>
                                </div>

                                <CardContent className="p-8 h-full flex flex-col">
                                    {/* Offer Name */}
                                    <h3 className="text-2xl font-semibold text-[#2B1D17] mb-2">
                                        {offer.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#8B5E3C] text-sm leading-relaxed mb-6 flex-grow">
                                        {offer.description}
                                    </p>

                                    {/* Services Included */}
                                    <ul className="mb-6 space-y-2">
                                        {offer.services.map((service, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-[#8B5E3C] text-sm">
                                                <span className="w-1.5 h-1.5 bg-[#C99A6B] rounded-full" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Pricing */}
                                    <div className="mb-6 pb-6 border-b border-[#e5dcd2]">
                                        <p className="text-[#8B5E3C] text-sm line-through mb-2">
                                            {offer.originalPrice}
                                        </p>
                                        <p className="text-[#C99A6B] font-bold text-3xl">
                                            {offer.discountedPrice}
                                        </p>
                                    </div>

                                    {/* Button */}
                                    <Button
                                        className="w-full bg-[#C99A6B] hover:bg-[#b8894f] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg"
                                        onClick={() => scrollToSection("booking")}
                                    >
                                        <Zap className="w-4 h-4" />
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Limited Time Notice */}
                    <div className="text-center">
                        <p className="text-[#8B5E3C] text-sm font-medium">
                            ⏰ Limited time offers. Valid for bookings made this month only.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
