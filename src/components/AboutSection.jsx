import { Heart, Award, Users } from "lucide-react";

export const AboutSection = () => {
    return (
        <section className="py-20 gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            The Art of Glamour, Perfected
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                        <p>
                            Welcome to <span className="font-semibold text-foreground">Glam Beauty Studio Ladies Parlour</span>, a sanctuary dedicated to the artistry of beauty and self-care. Founded on the belief that every woman deserves to look and feel radiant, we have built a studio that blends high-end luxury with genuine, personalized attention.
                        </p>
                        <p>
                            Our mission is simple: to transform your vision into reality. Whether you're preparing for the most important day of your life, refreshing your everyday look, or simply indulging in a moment of essential pampering, our certified and experienced artists are committed to delivering meticulous, stunning results every time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        <div className="bg-card p-8 rounded-2xl shadow-soft transition-smooth hover:shadow-elegant">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Team</h3>
                            <p className="text-muted-foreground">
                                Our staff is highly trained in the latest techniques, specializing in flawless HD makeup, precision styling, and hygienic skincare services.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl shadow-soft transition-smooth hover:shadow-elegant">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Premium Products</h3>
                            <p className="text-muted-foreground">
                                We exclusively use top-tier, international brands to ensure long-lasting quality and care for your skin and hair.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl shadow-soft transition-smooth hover:shadow-elegant">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Personalized Service</h3>
                            <p className="text-muted-foreground">
                                We take the time to consult with you, understand your unique style, and tailor every treatment to your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Sparkles = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
);
