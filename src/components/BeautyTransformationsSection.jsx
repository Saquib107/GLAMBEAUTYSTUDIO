import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const transformations = [
    {
        id: 1,
        title: "Bridal Makeup Transformation",
        service: "Bridal Makeup",
        before: "/images/bridal_before.jpg",
        after: "/images/bridal_after.jpg",
    },
    {
        id: 2,
        title: "Hair Transformation",
        service: "Hair Styling",
        before: "/images/hair_before.jpg",
        after: "/images/hair_after.jpg",
    },
    {
        id: 3,
        title: "Party Makeup Glam",
        service: "Party Makeup",
        before: "/images/party_before.jpg",
        after: "/images/party_after.jpg",
    },
    {
        id: 4,
        title: "Hair Color Transformation",
        service: "Hair Color",
        before: "/images/hair_color_before.jpg",
        after: "/images/hair_color_after.jpg",
    },
    {
        id: 5,
        title: "Bridal Hair & Makeup",
        service: "Bridal Makeup",
        before: "/images/bridal_hair_makeup_before.jpg",
        after: "/images/bridal_hair_makeup_after.jpg",
    },
    {
        id: 6,
        title: "Hair Spa & Styling",
        service: "Hair Spa",
        before: "/images/hair_spa_before.jpg",
        after: "/images/hair_spa_after.jpg",
    },
];

export const BeautyTransformationsSection = () => {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sliderPositions, setSliderPositions] = useState({});
    const [modalSliderPosition, setModalSliderPosition] = useState(50);

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
                                <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500 h-80 border border-[#e5dcd2]">
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
                                            className="w-full h-full object-cover select-none pointer-events-none"
                                        />

                                        {/* Before Image (Overlay) */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                clipPath: `polygon(0 0, ${sliderPositions[item.id] || 50}% 0, ${sliderPositions[item.id] || 50}% 100%, 0 100%)`,
                                            }}
                                        >
                                            <img
                                                src={item.before}
                                                alt="Before"
                                                loading="lazy"
                                                className="w-full h-full object-cover select-none pointer-events-none"
                                            />
                                        </div>

                                        {/* Elegant Slider Handle */}
                                        <div
                                            className="absolute top-0 bottom-0 w-[1.5px] bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
                                            style={{
                                                left: `${sliderPositions[item.id] || 50}%`,
                                            }}
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1.5px] border-white/50">
                                                <ChevronLeft className="w-4 h-4 text-[#8B5E3C] -mr-[2px]" />
                                                <ChevronRight className="w-4 h-4 text-[#8B5E3C] -ml-[2px]" />
                                            </div>
                                        </div>

                                        {/* Expand Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(item);
                                            }}
                                            className="absolute bottom-4 right-4 bg-black/30 border border-white/20 text-white p-2.5 rounded-full backdrop-blur-md shadow-sm hover:bg-black/50 hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            title="View Full Size"
                                        >
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Card Info */}
                                <div className="mt-5 text-center">
                                    <p className="text-[#C99A6B] text-[11px] uppercase tracking-widest font-semibold mb-1">{item.service}</p>
                                    <h3 className="text-[17px] font-serif font-bold text-[#2B1D17]">{item.title}</h3>
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
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => {
                                setSelectedImage(null);
                                setModalSliderPosition(50);
                            }}
                            className="absolute -top-12 right-0 text-white hover:text-[#C99A6B] transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div 
                            className="relative max-h-[60vh] md:max-h-[80vh] rounded-2xl overflow-hidden cursor-ew-resize mx-auto w-fit shadow-2xl"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const position = ((e.clientX - rect.left) / rect.width) * 100;
                                setModalSliderPosition(Math.max(0, Math.min(100, position)));
                            }}
                            onTouchMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                                setModalSliderPosition(Math.max(0, Math.min(100, position)));
                            }}
                        >
                            <img
                                src={selectedImage.after}
                                alt="After Full view"
                                className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain block pointer-events-none"
                            />
                            
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: `polygon(0 0, ${modalSliderPosition}% 0, ${modalSliderPosition}% 100%, 0 100%)`,
                                }}
                            >
                                <img
                                    src={selectedImage.before}
                                    alt="Before Full view"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>

                            {/* Modal Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
                                style={{
                                    left: `${modalSliderPosition}%`,
                                }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] border-2 border-white/50">
                                    <ChevronLeft className="w-5 h-5 text-[#8B5E3C] -mr-[2px]" />
                                    <ChevronRight className="w-5 h-5 text-[#8B5E3C] -ml-[2px]" />
                                </div>
                            </div>

                        </div>
                        <div className="mt-6 text-center text-white">
                            <p className="text-[#C99A6B] font-semibold text-lg">{selectedImage.service}</p>
                            <h2 className="text-3xl font-bold">{selectedImage.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
