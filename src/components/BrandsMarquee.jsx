import React from "react";

export const BrandsMarquee = () => {
    const brands = [
        { name: "MAC", text: "MAC" },
        { name: "Huda Beauty", text: "HUDA BEAUTY" },
        { name: "NARS", text: "NARS" },
        { name: "L'Oréal", text: "L'ORÉAL" },
        { name: "Kryolan", text: "KRYOLAN" },
        { name: "Recode", text: "RECODE" },
        { name: "Forever 52", text: "FOREVER 52" },
        { name: "Charmacy Milano", text: "CHARMACY MILANO" },
        { name: "Matrix", text: "MATRIX" },
        { name: "Streax", text: "STREAX" },
        { name: "Wella", text: "WELLA" },
        { name: "Schwarzkopf", text: "SCHWARZKOPF" },
    ];

    // Duplicate the array to create a seamless infinite loop.
    // 4 sets (2 in the first half, 2 in the second half) is enough to cover very wide screens.
    const duplicatedBrands = [
        ...brands, ...brands,
        ...brands, ...brands
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
                <div className="animate-marquee w-max flex items-center gap-16 pr-16">
                    {duplicatedBrands.map((brand, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center justify-center shrink-0 min-w-max opacity-50 hover:opacity-100 transition-opacity duration-300"
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
