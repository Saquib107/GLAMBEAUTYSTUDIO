import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
            id="hero"
        >
            {/* Base image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(0.85)",
                }}
            />

            {/* Pink gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#e6a56f]/90 via-[#ecb38a]/85 to-[#f7d0b5]/95" />

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
                <div className="mx-auto max-w-4xl space-y-8">
                    <div className="mb-6 flex justify-center">
                        <Sparkles className="h-12 w-12 animate-pulse text-[#ffd9b3]" />
                    </div>

                    <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
                        Glam Beauty Studio: <br />
                        <span className="text-[#ffd9b3]">Elevate Your Style</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">
                        Where Luxury Meets Expertise. Your Premier Destination for Flawless
                        Hair, Makeup, and Bespoke Beauty Services.
                    </p>

                    <div className="flex justify-center gap-4 pt-8">
                        <Button
                            size="lg"
                            className="cursor-pointer"
                            onClick={() => scrollToSection("pricing")}
                        >
                            View Services
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="cursor-pointer border-white/70 bg-white/10 text-white hover:bg-white/20"
                            onClick={() => scrollToSection("contact")}
                        >
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom fade into page background */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
