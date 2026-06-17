import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Star, Award, Sparkles, Heart, Users, Shield } from "lucide-react";

const features = [
    {
        id: 1,
        title: "8+ Years Experience",
        description: "Trusted by thousands of clients with proven expertise in beauty services.",
        icon: Award,
    },
    {
        id: 2,
        title: "Certified Beauty Experts",
        description: "Our team consists of professionally trained and certified beauty specialists.",
        icon: Shield,
    },
    {
        id: 3,
        title: "Premium International Products",
        description: "We use only top-tier, international brands for optimal results.",
        icon: Sparkles,
    },
    {
        id: 4,
        title: "Personalized Consultation",
        description: "Every client receives a customized consultation for their unique needs.",
        icon: Heart,
    },
    {
        id: 5,
        title: "500+ Happy Clients",
        description: "Join thousands of satisfied clients who trust our services.",
        icon: Users,
    },
    {
        id: 6,
        title: "Top Rated Beauty Studio",
        description: "Consistently rated 4.9/5 by our valued clients and community.",
        icon: Star,
    },
];

export const WhyChooseUsSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section title
            gsap.from(".why-title, .why-subtitle", {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });

            // Staggered animation for feature cards
            gsap.from(".why-card", {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-[#FAF7F4]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="why-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Why Clients Love Us
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="why-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Discover what makes Glam Beauty Studio the preferred choice for luxury beauty services.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    className="why-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                                >
                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-[#C99A6B]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C99A6B]/20 transition-colors duration-300">
                                        <IconComponent className="w-10 h-10 text-[#C99A6B]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-semibold text-[#2B1D17] mb-3">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#8B5E3C] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Trust Section */}
                    <div className="mt-16 bg-gradient-to-r from-[#2B1D17] to-[#8B5E3C] rounded-3xl p-12 text-white text-center">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                            Your Beauty, Our Priority
                        </h3>
                        <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                            At Glam Beauty Studio, we believe beauty is about confidence. We combine expert techniques, premium products, and personalized care to help you look and feel your absolute best.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                                <span className="text-2xl font-bold text-[#C99A6B]">4.9★</span> Rating
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                                <span className="text-2xl font-bold text-[#C99A6B]">500+</span> Clients
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                                <span className="text-2xl font-bold text-[#C99A6B]">8+</span> Years
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
