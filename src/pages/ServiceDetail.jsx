import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesContent = {
    "bridal-makeup": {
        title: "Luxury Bridal Makeup in Jamshedpur",
        description: "Your wedding day is one of the most important days of your life. Our expert bridal makeup artists ensure you look flawless, radiant, and picture-perfect from every angle.",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
        features: ["Pre-wedding Consultation", "HD / Airbrush Makeup options", "Premium International Brands (MAC, Huda Beauty)", "Hairstyling & Draping included", "Long-lasting & Water-resistant"]
    },
    "hair-treatments": {
        title: "Advanced Hair Treatments",
        description: "Revitalize your hair with our advanced treatments. From deep conditioning spas to keratin and smoothening, we restore your hair's natural shine and strength.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
        features: ["Customized Hair Spa", "Keratin & Botox Treatments", "Scalp health analysis", "L'Oréal Professionnel & Olaplex products", "Expert Stylists"]
    },
    "facials-skincare": {
        title: "Premium Facials & Skincare",
        description: "Experience glowing, healthy skin with our signature facials. We analyze your skin type and customize treatments to target your specific concerns.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
        features: ["Deep Cleansing & Exfoliation", "Anti-aging & Brightening Facials", "Dermatologically tested products", "Relaxing facial massage", "Instant glow results"]
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesContent[serviceId] || {
        title: "Premium Beauty Service",
        description: "We offer top-notch beauty and grooming services tailored to your needs. Contact us to learn more about this specific service.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
        features: ["Expert Consultation", "Premium Products", "Hygienic Environment", "Experienced Professionals", "Guaranteed Satisfaction"]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${service.title} | Glam Beauty Studio Jamshedpur`;
    }, [service.title]);

    return (
        <main className="min-h-screen bg-[#FAF7F4] flex flex-col">
            <Navigation />
            
            <div className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <Link to="/" className="inline-flex items-center text-[#8B5E3C] hover:text-[#C99A6B] mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#e5dcd2]">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="h-64 md:h-auto relative">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2B1D17] mb-4">
                                        {service.title}
                                    </h1>
                                    <p className="text-[#8B5E3C] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#2B1D17] text-lg">What's Included:</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-[#8B5E3C]">
                                                <CheckCircle2 className="w-5 h-5 text-[#C99A6B] mr-3 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-[#e5dcd2]">
                                    <Button 
                                        className="w-full bg-[#C99A6B] hover:bg-[#b8894f] text-white py-6 rounded-full text-lg shadow-md"
                                        onClick={() => window.location.href = '/#booking'}
                                    >
                                        Book This Service
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <WhatsAppButton />
            <MobileStickyBar />
        </main>
    );
};

export default ServiceDetail;
