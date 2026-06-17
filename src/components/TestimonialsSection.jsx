import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Priya Sharma",
        service: "Bridal Makeup",
        review: "Zeba and her team made me feel like a queen on my wedding day. The makeup was flawless and lasted through the entire reception. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
        name: "Anjali Patel",
        service: "Hair Spa & Treatment",
        review: "My hair has never looked better! The hair spa treatment completely rejuvenated my damaged hair. Professional service and amazing results.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
        name: "Kavya Deshmukh",
        service: "Party Makeup",
        review: "Had a last-minute event and Glam Beauty Studio accommodated me perfectly. The makeup was stunning and the staff was super friendly!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
        name: "Sneha Gupta",
        service: "Facial & Skincare",
        review: "Best facial I've ever had. The products are premium quality and the team really cares about your skin health. Worth every penny!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="scroll-mt-24 py-20 bg-[#faf7f4]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            ⭐ Love From Our Clients
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Thousands of happy clients have transformed with our expert services. Here's what they say.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-elegant transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.service}
                                            </p>
                                            <div className="flex gap-1 mt-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 fill-[#e2a173] text-[#e2a173]"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        "{testimonial.review}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-muted-foreground mb-4">
                            📊 <span className="font-semibold text-foreground">500+</span> Happy Clients |
                            ⭐ <span className="font-semibold text-foreground">4.9/5</span> Average Rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
