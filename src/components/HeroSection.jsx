import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Star, Sparkles, Calendar, Phone, Scissors, CheckCircle } from "lucide-react";

export const HeroSection = () => {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    
    // Booking Form State
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        phone: ""
    });

    const handleBooking = (e) => {
        e.preventDefault();
        const phoneNumber = "918294040050";
        const message = `Hi Glam Beauty Studio! I'd like to book a quick appointment.\n\nService: ${formData.service || 'Not specified'}\nDate: ${formData.date || 'Not specified'}\nPhone: ${formData.phone || 'Not specified'}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Ken Burns zoom
            gsap.fromTo(bgRef.current, 
                { scale: 1 }, 
                { scale: 1.1, duration: 20, ease: "none", repeat: -1, yoyo: true }
            );

            // Fade in left section content sequentially
            gsap.from(".hero-anim", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });

            // Trust indicators fade in
            gsap.from(".trust-anim", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
                delay: 1.2
            });

            // Booking card entrance
            gsap.from(rightRef.current, {
                opacity: 0,
                x: 40,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.8
            });

            // Continuous floating animation for booking card
            gsap.to(rightRef.current, {
                y: -15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2
            });

            // Floating sparkles
            gsap.to(".sparkle-1", { y: -20, rotation: 15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(".sparkle-2", { y: -15, rotation: -15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
            gsap.to(".sparkle-3", { y: -25, rotation: 20, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
            
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 font-sans"
            id="hero"
        >
            {/* Background Image with Ken Burns Target */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A1A]">
                <img
                    ref={bgRef}
                    src={heroImage}
                    alt="Luxury Salon Background"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/50" />
            </div>

            {/* Decorative Gold/Rose-Gold Blobs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#B76E79]/10 rounded-full blur-[100px] -z-0 pointer-events-none" />

            {/* Sparkles */}
            <Sparkles className="sparkle-1 absolute top-32 left-[15%] w-6 h-6 text-[#D4AF37] opacity-60 pointer-events-none z-10" />
            <Sparkles className="sparkle-2 absolute bottom-40 left-[45%] w-8 h-8 text-[#B76E79] opacity-40 pointer-events-none z-10" />
            <Sparkles className="sparkle-3 absolute top-40 right-[10%] w-5 h-5 text-[#FDF8F4] opacity-50 pointer-events-none z-10" />

            <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
                    
                    {/* Left Column - Content (Spans 7 columns on Desktop) */}
                    <div ref={leftRef} className="lg:col-span-7 space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pt-10 lg:pt-0">
                        <div className="space-y-6">
                            <h1 className="hero-anim font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDF8F4] leading-[1.1] tracking-tight">
                                Luxury Beauty.<br/>
                                <span className="text-[#D4AF37]">Expert Care.</span><br/>
                                Timeless Confidence.
                            </h1>

                            <p className="hero-anim text-lg md:text-xl text-[#FDF8F4]/80 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                                Experience premium bridal makeup, professional hair styling, skincare, and nail artistry tailored to enhance your natural beauty.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Button
                                size="lg"
                                className="bg-[#D4AF37] hover:bg-[#b59228] text-[#1A1A1A] hover:text-[#1A1A1A] px-10 py-6 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1"
                                onClick={() => scrollToSection("booking")}
                            >
                                Book Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-2 border-[#FDF8F4]/30 text-[#FDF8F4] hover:bg-[#FDF8F4]/5 hover:border-[#D4AF37] px-10 py-6 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
                                onClick={() => scrollToSection("transformations")}
                            >
                                View Portfolio
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="hero-anim pt-10 lg:pt-14 mt-4 border-t border-[#FDF8F4]/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                            <div className="trust-anim flex flex-col items-center lg:items-start space-y-1">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                                    ))}
                                </div>
                                <span className="text-2xl font-bold text-[#FDF8F4]">4.9</span>
                                <span className="text-xs font-medium text-[#FDF8F4]/60 uppercase tracking-wider">Google Rating</span>
                            </div>
                            
                            <div className="trust-anim flex flex-col items-center lg:items-start space-y-1">
                                <span className="text-2xl font-bold text-[#D4AF37]">5000+</span>
                                <span className="text-xs font-medium text-[#FDF8F4]/60 uppercase tracking-wider text-center lg:text-left">Happy Clients</span>
                            </div>

                            <div className="trust-anim flex flex-col items-center lg:items-start space-y-1">
                                <span className="text-2xl font-bold text-[#D4AF37]">10+</span>
                                <span className="text-xs font-medium text-[#FDF8F4]/60 uppercase tracking-wider text-center lg:text-left">Years Exp.</span>
                            </div>

                            <div className="trust-anim flex flex-col items-center lg:items-start space-y-1">
                                <CheckCircle className="w-7 h-7 text-[#D4AF37] mb-1" />
                                <span className="text-xs font-medium text-[#FDF8F4]/60 uppercase tracking-wider text-center lg:text-left">Certified<br/>Pros</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Card (Spans 5 columns on Desktop) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end pb-12 lg:pb-0">
                        <div 
                            ref={rightRef}
                            className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
                        >
                            {/* Glass reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            
                            <h3 className="font-serif text-3xl text-[#FDF8F4] font-bold mb-6 text-center">
                                Book Your <span className="text-[#D4AF37] italic">Session</span>
                            </h3>

                            <form onSubmit={handleBooking} className="space-y-5 relative z-10">
                                {/* Service Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#FDF8F4]/80 flex items-center gap-2">
                                        <Scissors className="w-4 h-4 text-[#D4AF37]" /> Service Needed
                                    </label>
                                    <div className="relative">
                                        <select 
                                            required
                                            className="w-full bg-[#1A1A1A]/50 border border-white/20 rounded-xl px-4 py-3 text-[#FDF8F4] appearance-none focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            value={formData.service}
                                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        >
                                            <option value="" disabled className="text-black">Select a service...</option>
                                            <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
                                            <option value="Party Makeup" className="text-black">Party Makeup</option>
                                            <option value="Hair Styling & Cut" className="text-black">Hair Styling & Cut</option>
                                            <option value="Facial & Skincare" className="text-black">Facial & Skincare</option>
                                            <option value="Manicure / Pedicure" className="text-black">Manicure / Pedicure</option>
                                            <option value="Other Service" className="text-black">Other Service</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Date Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#FDF8F4]/80 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#D4AF37]" /> Preferred Date
                                    </label>
                                    <input 
                                        type="date" 
                                        required
                                        className="w-full bg-[#1A1A1A]/50 border border-white/20 rounded-xl px-4 py-3 text-[#FDF8F4] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all [color-scheme:dark]"
                                        value={formData.date}
                                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#FDF8F4]/80 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-[#D4AF37]" /> Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        className="w-full bg-[#1A1A1A]/50 border border-white/20 rounded-xl px-4 py-3 text-[#FDF8F4] placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    className="w-full bg-[#D4AF37] hover:bg-[#b59228] text-[#1A1A1A] py-6 rounded-xl font-bold text-lg mt-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                >
                                    Confirm Booking
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
