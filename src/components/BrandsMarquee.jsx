import React from "react";

export const BrandsMarquee = () => {
    const brands = [
        { name: "MAC Cosmetics", text: "MAC" },
        { name: "Huda Beauty", text: "HUDA BEAUTY" },
        { name: "L'Oréal", text: "L'ORÉAL" },
        { name: "Kryolan", text: "KRYOLAN" },
        { name: "Bobbi Brown", text: "BOBBI BROWN" },
        { name: "NARS", text: "NARS" },
        { name: "Olaplex", text: "OLAPLEX" },
    ];

    // Duplicate the array to create a seamless infinite loop
    const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

    return (
        <div className="py-12 bg-white border-y border-[#e5dcd2] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#8B5E3C] uppercase">
                    Premium Brands We Use
                </p>
            </div>
            
            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex items-center space-x-16 px-8 group-hover:[animation-play-state:paused]">
                    {duplicatedBrands.map((brand, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center justify-center min-w-max opacity-50 hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="text-2xl md:text-3xl font-serif tracking-wider text-[#2B1D17]">
                                {brand.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
