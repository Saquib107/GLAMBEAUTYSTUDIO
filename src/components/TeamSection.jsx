import { Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
    {
        name: "Zeba",
        title: "Founder & Lead Makeup Artist",
        specialty: "Bridal Makeup, HD Makeup, Party Makeup",
        experience: "8+ years",
        credentials: ["Certified Makeup Artist", "Bridal Specialist", "International Training"],
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&fit=crop",
    },
    {
        name: "Ritika",
        title: "Senior Hair Stylist",
        specialty: "Hair Spa, Treatments, Styling",
        experience: "6+ years",
        credentials: ["Professional Hair Stylist", "Hair Care Specialist", "Certified Beautician"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop",
    },
    {
        name: "Meera",
        title: "Skincare & Facial Expert",
        specialty: "Facials, Skincare Treatments",
        experience: "5+ years",
        credentials: ["Esthetician Certified", "Skin Care Specialist", "Chemical Peel Expert"],
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=250&h=250&fit=crop",
    },
];

export const TeamSection = () => {
    return (
        <section className="scroll-mt-24 py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Meet Our Expert Team
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our certified professionals bring years of experience, passion, and dedication to make you look and feel your best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="rounded-2xl border border-black/5 bg-white shadow-soft hover:shadow-elegant transition-all hover:translate-y-[-4px]"
                            >
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                                    />
                                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-medium mb-2">{member.title}</p>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {member.specialty}
                                    </p>

                                    <div className="bg-primary/10 rounded-lg py-3 mb-4">
                                        <p className="text-sm font-semibold text-primary">
                                            {member.experience} Experience
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {member.credentials.map((credential, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                                            >
                                                <Award className="w-4 h-4 text-primary" />
                                                {credential}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-[#e6a56f] via-[#ecb38a] to-[#f7d0b5] rounded-3xl p-8 text-center text-white">
                        <Sparkles className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">
                            Every Team Member Is Certified
                        </h3>
                        <p className="text-white/90">
                            We continuously train and update our team with the latest beauty trends and techniques to provide you with world-class service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
