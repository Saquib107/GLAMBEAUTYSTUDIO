import React from "react";

export const BrandsMarquee = () => {
    const brands = [
        { name: "MAC", text: "MAC" },
        { name: "HUDA", text: "HUDA" },
        { name: "NARS", text: "NARS" },
        { name: "LOREAL", text: "LOREAL" },
        { name: "KRYLON", text: "KRYLON" },
        { name: "RECODE", text: "RECODE" },
        { name: "FOREVER 52", text: "FOREVER 52" },
        { name: "CHARMACY MILANO", text: "CHARMACY MILANO" },
        { name: "MATRIX", text: "MATRIX" },
        { name: "STREAX", text: "STREAX" },
        { name: "WELLA", text: "WELLA" },
        { name: "SCHWARZKOPH", text: "SCHWARZKOPH" },
    ];

    // Duplicate the array to create a seamless infinite loop.
    // We need an even number of sets so that the first half equals the second half,
    // which allows transform: translateX(-50%) to loop seamlessly.
    // We use enough sets to ensure it covers very wide screens (e.g., 4k).
    const duplicatedBrands = [
        ...brands, ...brands, ...brands, ...brands,
        ...brands, ...brands, ...brands, ...brands
    ];

    return (
        <div className="py-12 bg-white border-y border-[#e5dcd2] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#8B5E3C] uppercase">
                    Premium Brands We Use
                </p>
            </div>
            
            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                {/* 
                  Using gap-16 and pr-16 ensures that the total width is exactly N*item + N*gap.
                  This makes the 50% translation align perfectly with the start of the second half,
                  resulting in a seamless loop.
                */}
                <div className="animate-marquee w-max flex items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
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
