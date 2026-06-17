import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const transformations = [
    {
        id: 1,
        title: "Bridal Makeup Transformation",
        service: "Bridal Makeup",
        before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    },
    {
        id: 2,
        title: "Hair Transformation",
        service: "Hair Styling",
        before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
        id: 3,
        title: "Party Makeup Glam",
        service: "Party Makeup",
        before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    },
    {
        id: 4,
        title: "Facial Treatment Results",
        service: "Facial Treatments",
        before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    },
    {
        id: 5,
        title: "Bridal Hair & Makeup",
        service: "Bridal Makeup",
        before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
        id: 6,
        title: "Hair Spa & Styling",
        service: "Hair Spa",
        before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    },
];

export const BeautyTransformationsSection = () => {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sliderPositions, setSliderPositions] = useState({});

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".transformations-title, .transformations-subtitle",
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

            gsap.fromTo(".transformation-card",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Initialize slider positions
    useEffect(() => {
        const newPositions = {};
        transformations.forEach((item) => {
            newPositions[item.id] = 50;
        });
        setSliderPositions(newPositions);
    }, []);

    const handleSlider = (id, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPositions((prev) => ({
            ...prev,
            [id]: Math.max(0, Math.min(100, position)),
        }));
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={containerRef} className="py-20 bg-[#FAF7F4]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="transformations-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Our Work Speaks For Itself
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="transformations-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Real transformations. Real confidence. See the magic of professional beauty services.
                        </p>
                    </div>

                    {/* Transformations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transformations.map((item) => (
                            <div
                                key={item.id}
                                className="transformation-card group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-80">
                                    {/* Before/After Slider */}
                                    <div
                                        className="w-full h-full relative"
                                        onMouseMove={(e) => handleSlider(item.id, e)}
                                        onTouchMove={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const position =
                                                ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                                            setSliderPositions((prev) => ({
                                                ...prev,
                                                [item.id]: Math.max(0, Math.min(100, position)),
                                            }));
                                        }}
                                    >
                                        {/* After Image (Background) */}
                                        <img
                                            src={item.after}
                                            alt="After"
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Before Image (Overlay) */}
                                        <div
                                            className="absolute inset-0 overflow-hidden"
                                            style={{
                                                width: `${sliderPositions[item.id] || 50}%`,
                                            }}
                                        >
                                            <img
                                                src={item.before}
                                                alt="Before"
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Slider Handle */}
                                        <div
                                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                                            style={{
                                                left: `${sliderPositions[item.id] || 50}%`,
                                            }}
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                                                <ChevronLeft className="w-4 h-4 text-[#C99A6B] absolute left-1" />
                                                <ChevronRight className="w-4 h-4 text-[#C99A6B] absolute right-1" />
                                            </div>
                                        </div>

                                        {/* Labels */}
                                        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                            Before
                                        </div>
                                        <div className="absolute top-4 right-4 bg-[#C99A6B]/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                            After
                                        </div>
                                    </div>

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={() => setSelectedImage(item)}
                                            className="bg-[#C99A6B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b8894f] transition-colors"
                                        >
                                            View Full Size
                                        </button>
                                    </div>
                                </div>

                                {/* Card Info */}
                                <div className="mt-4">
                                    <p className="text-[#C99A6B] text-sm font-semibold">{item.service}</p>
                                    <h3 className="text-lg font-semibold text-[#2B1D17]">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <h3 className="font-serif text-3xl font-bold text-[#2B1D17] mb-4">
                            Ready for Your Transformation?
                        </h3>
                        <p className="text-[#8B5E3C] mb-6 max-w-2xl mx-auto">
                            Let our expert team create your perfect look. Book your appointment today!
                        </p>
                        <button
                            onClick={() => scrollToSection("booking")}
                            className="bg-[#C99A6B] hover:bg-[#b8894f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                        >
                            Book Your Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white hover:text-[#C99A6B] transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                            <img
                                src={selectedImage.after}
                                alt="Full view"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 text-center text-white">
                            <p className="text-[#C99A6B] font-semibold">{selectedImage.service}</p>
                            <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
