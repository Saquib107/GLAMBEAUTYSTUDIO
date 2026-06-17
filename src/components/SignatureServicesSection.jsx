import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Wand2, Droplets, Sparkles as SparklesIcon, Palette, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        id: 1,
        name: "Bridal Makeup",
        description: "Stunning HD bridal makeup for your special day with long-lasting finishes.",
        price: "₹5,000",
        icon: Palette,
    },
    {
        id: 2,
        name: "Hair Styling",
        description: "Professional hair styling for every occasion with premium care.",
        price: "₹500",
        icon: Scissors,
    },
    {
        id: 3,
        name: "Hair Spa",
        description: "Rejuvenating hair spa treatments to restore shine and health.",
        price: "₹600",
        icon: Droplets,
    },
    {
        id: 4,
        name: "Facial Treatments",
        description: "Customized facials using premium products for radiant skin.",
        price: "₹1,200",
        icon: SparklesIcon,
    },
    {
        id: 5,
        name: "Party Makeup",
        description: "Glamorous makeup looks for parties and special events.",
        price: "₹2,500",
        icon: Wand2,
    },
    {
        id: 6,
        name: "Skin Care",
        description: "Professional skincare treatments tailored to your skin type.",
        price: "₹600",
        icon: Leaf,
    },
];

export const SignatureServicesSection = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section title
            gsap.from(".services-title, .services-subtitle", {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });

            // Staggered animation for service cards
            gsap.from(".service-card", {
                opacity: 0,
                y: 30,
                stagger: 0.12,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={containerRef} className="py-20 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="services-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Our Signature Services
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="services-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Luxury beauty treatments designed to help you look and feel your absolute best.
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <Card
                                    key={service.id}
                                    className="service-card bg-[#FAF7F4] border-[#e5dcd2] hover:shadow-lg transition-all duration-300 group rounded-2xl overflow-hidden"
                                    ref={(el) => {
                                        if (el) cardsRef.current[index] = el;
                                    }}
                                >
                                    <CardContent className="p-8 h-full flex flex-col">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-[#C99A6B]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C99A6B]/20 transition-colors duration-300">
                                            <IconComponent className="w-8 h-8 text-[#C99A6B]" />
                                        </div>

                                        {/* Service Name */}
                                        <h3 className="text-2xl font-semibold text-[#2B1D17] mb-3">
                                            {service.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#8B5E3C] text-sm leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Price */}
                                        <div className="mb-6 pt-4 border-t border-[#e5dcd2]">
                                            <p className="text-[#C99A6B] font-semibold text-lg">
                                                Starting from <span className="text-xl">{service.price}</span>
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <Button
                                            className="w-full bg-[#C99A6B] hover:bg-[#b8894f] text-white rounded-full font-semibold transition-all duration-300"
                                            onClick={() => scrollToSection("booking")}
                                        >
                                            Book Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* CTA Banner */}
                    <div className="mt-16 bg-gradient-to-r from-[#C99A6B] via-[#d4a97d] to-[#8B5E3C] rounded-3xl p-12 text-center text-white">
                        <h3 className="font-serif text-4xl font-bold mb-4">
                            Don't See Your Service?
                        </h3>
                        <p className="text-lg mb-6 text-white/90">
                            We offer customized beauty treatments. Contact us to discuss your specific needs.
                        </p>
                        <Button
                            className="bg-white text-[#C99A6B] hover:bg-gray-100 rounded-full font-semibold px-8"
                            onClick={() => scrollToSection("booking")}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
