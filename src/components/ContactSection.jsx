import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
    return (
        <section className="scroll-mt-24 bg-background py-20" id="contact">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    {/* Heading */}
                    <div className="mb-12 space-y-4 text-center">
                        <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                            Connect With Glam Beauty Studio
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            We are excited to welcome you! Whether you have a question about a
                            service, want to book a consultation, or need to schedule your
                            next pampering session, our team is ready to assist you.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="mb-8 grid gap-6 md:grid-cols-2">
                        {/* Location + Phone */}
                        <Card className="border-border/50 shadow-soft">
                            <CardContent className="space-y-6 p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-foreground">
                                            Location
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Shop No - G13, Sahara River View,
                                            <br />
                                            Old Purulia Road, Kumar Basti,
                                            <br />
                                            Mango, Jamshedpur, Jharkhand 831012
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-foreground">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Call or WhatsApp:
                                            <br />
                                            <a
                                                className="cursor-pointer text-primary hover:underline"
                                                href="tel:+918294040050"
                                            >
                                                +91 8294040050
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Email + Hours */}
                        <Card className="border-border/50 shadow-soft">
                            <CardContent className="space-y-6 p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-foreground">Email</h3>
                                        <p className="text-muted-foreground">
                                            <a
                                                href="mailto:info@glambeautystudio.com"
                                                className="cursor-pointer text-primary hover:underline"
                                            >
                                                zebarifrzsus@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-foreground">Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday – Sunday: 10:00 AM to 8:00 PM
                                            <br />
                                            Except Friday: 4:00 AM to 8:00 PM
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Social banner */}
                    <Card className="border-none shadow-elegant rounded-3xl bg-gradient-to-r from-[#e6a56f] via-[#ecb38a] to-[#f7d0b5]">
                        <CardContent className="p-10 text-center text-white">
                            <h3 className="mb-4 font-serif text-2xl font-semibold md:text-3xl">
                                Follow Us on Social Media
                            </h3>
                            <p className="mb-6 text-sm text-white/90 md:text-base">
                                Stay updated with our latest looks, special offers, and studio
                                news!
                            </p>
                            <div className="flex justify-center space-x-6">
                                <a
                                    href="https://www.instagram.com/glambeautystudioby.zeba?igsh=MTRsbjlrY3J3cHluZA=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                >
                                    <Instagram className="h-7 w-7 text-white" />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/17yXP2xeb7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                >
                                    <Facebook className="h-7 w-7 text-white" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
