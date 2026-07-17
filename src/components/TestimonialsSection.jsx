import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Bride-to-be",
        review: "Zeba and her team at the Agrico studio are simply magical! They made me feel like a queen on my wedding day. The bridal makeup was flawless, and the entire staff was so professional and accommodating. Best in Jamshedpur!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Anjali Gupta",
        role: "Regular Client",
        review: "I've been visiting Glam Beauty Studio for months now. The hair spa treatment is amazing and completely rejuvenated my damaged hair. It's definitely the top beauty parlor in Jamshedpur with premium service.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Sneha Singh",
        role: "Event Guest",
        review: "Had a last-minute family event and Glam Beauty Studio accommodated me perfectly. The party makeup was stunning and lasted all night. Highly recommend this place near the Mosque in Agrico!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 4,
        name: "Neha Patel",
        role: "Skincare Enthusiast",
        review: "Best facial I've ever had in Jamshedpur. The products they use are premium quality and the team really cares about your skin health. The 4.9 rating they have online is truly well-deserved!",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
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
                                                {testimonial.role}
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
