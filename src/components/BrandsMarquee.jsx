import React from "react";

export const BrandsMarquee = () => {
    const brands = [
        { name: "MAC" },
        { name: "Huda Beauty" },
        { name: "NARS" },
        { name: "L'Oréal" },
        { name: "Kryolan" },
        { name: "Recode" },
        { name: "Forever52" },
        { name: "Charmacy Milano" },
        { name: "Matrix" },
        { name: "Streax" },
        { name: "Wella" },
        { name: "Schwarzkopf" },
    ];

    // Duplicate the array to create a seamless infinite loop.
    // 4 sets (2 in the first half, 2 in the second half) is enough to cover very wide screens.
    const duplicatedBrands = [
        ...brands, ...brands,
        ...brands, ...brands
    ];

    return (
        <div className="py-12 bg-white border-y border-[#e5dcd2] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#8B5E3C] uppercase">
                    Premium Brands We Use
                </p>
            </div>
            
            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                {/* 
                  Using gap-20 and pr-20 ensures that the total width is exactly N*item + N*gap.
                  This makes the 50% translation align perfectly with the start of the second half,
                  resulting in a seamless loop.
                */}
                <div className="animate-marquee w-max flex items-center gap-20 pr-20">
                    {duplicatedBrands.map((brand, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center justify-center shrink-0 min-w-max opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="text-4xl md:text-6xl font-sans font-extrabold tracking-widest text-[#2B1D17] uppercase">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
