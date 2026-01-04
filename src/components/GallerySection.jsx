import bridalImage from "@/assets/gallery-bridal-1.jpg";
import studioImage from "@/assets/gallery-studio-1.jpg";
import hairImage from "@/assets/gallery-hair-1.jpg";
import facialImage from "@/assets/gallery-facial-1.jpg";
import nailsImage from "@/assets/gallery-nails-1.jpg";
import makeupImage from "@/assets/gallery-makeup-1.jpg";

const galleryImages = [
    { src: bridalImage, alt: "Elegant bridal makeup with rose gold shimmer and statement necklace" },
    { src: studioImage, alt: "Luxurious salon interior with rose gold accents" },
    { src: hairImage, alt: "Elegant bridal hairstyling with flowers" },
    { src: facialImage, alt: "Premium facial treatment services" },
    { src: nailsImage, alt: "Professional nail art and manicure" },
    { src: makeupImage, alt: "Makeup artist professional workspace" }
];

export const GallerySection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Our Signature Work
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See the difference quality and passion make. Browse our portfolio of flawless transformations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-elegant"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
