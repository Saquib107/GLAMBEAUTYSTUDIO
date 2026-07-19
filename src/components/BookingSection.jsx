import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const BookingSection = () => {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "bridal-makeup",
        date: "",
        time: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".booking-title, .booking-subtitle",
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".booking-card",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send to WhatsApp
        const phoneNumber = "918294040050";
        const message = `Hi Glam Beauty Studio! I'd like to book an appointment.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        setSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "bridal-makeup",
                date: "",
                time: "",
                message: "",
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section ref={containerRef} className="py-20 bg-[#FAF7F4]" id="booking">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="booking-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Book Your Appointment
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="booking-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Reserve your time with us. Quick, easy, and secure booking in just a few steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Contact Information */}
                        <div className="space-y-8">
                            {/* Location Card */}
                            <div className="booking-card bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-[#C99A6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-7 h-7 text-[#C99A6B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2B1D17] mb-2">
                                            Location
                                        </h3>
                                        <a 
                                            href="https://maps.app.goo.gl/cAWHPUfZ1KC7eCrVA?g_st=aw" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[#8B5E3C] leading-relaxed hover:text-[#C99A6B] transition-colors block"
                                        >
                                            Shop No - G13, Sahara River View,
                                            <br />
                                            Old Purulia Road, Kumar Basti,
                                            <br />
                                            Mango, Jamshedpur, Jharkhand 831012
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="booking-card bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-[#C99A6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-7 h-7 text-[#C99A6B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2B1D17] mb-2">
                                            Phone & WhatsApp
                                        </h3>
                                        <a
                                            href="tel:+918294040050"
                                            className="text-[#C99A6B] hover:text-[#b8894f] font-semibold transition-colors"
                                        >
                                            8294040050
                                        </a>
                                        <p className="text-[#8B5E3C] text-sm mt-1">
                                            Call or WhatsApp us anytime
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="booking-card bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-[#C99A6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-7 h-7 text-[#C99A6B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2B1D17] mb-2">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:zebarifrzsus@gmail.com"
                                            className="text-[#C99A6B] hover:text-[#b8894f] font-semibold transition-colors"
                                        >
                                            zebarifrzsus@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="booking-card bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 bg-[#C99A6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-7 h-7 text-[#C99A6B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2B1D17] mb-2">
                                            Working Hours
                                        </h3>
                                        <p className="text-[#8B5E3C]">
                                            <span className="font-semibold">Mon-Sun:</span> 10:00 AM - 8:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Booking Form */}
                        <div className="booking-card bg-white rounded-2xl p-8 shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Service *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all bg-white"
                                    >
                                        <option value="bridal-makeup">Bridal Makeup</option>
                                        <option value="hair-styling">Hair Styling</option>
                                        <option value="hair-spa">Hair Spa</option>
                                        <option value="facial">Facial Treatments</option>
                                        <option value="party-makeup">Party Makeup</option>
                                        <option value="skin-care">Skin Care</option>
                                    </select>
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[#2B1D17] font-semibold mb-2">
                                        Special Requests (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-4 py-3 border border-[#e5dcd2] rounded-lg focus:outline-none focus:border-[#C99A6B] focus:ring-2 focus:ring-[#C99A6B]/20 transition-all resize-none"
                                        placeholder="Any special requests or notes?"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-[#C99A6B] hover:bg-[#b8894f] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                                >
                                    <Send className="w-5 h-5" />
                                    {submitted ? "Booking Sent!" : "Send Booking Request"}
                                </Button>

                                {submitted && (
                                    <div className="bg-[#C99A6B]/10 border border-[#C99A6B] rounded-lg p-4 text-center text-[#8B5E3C]">
                                        ✓ Booking request sent to WhatsApp! We'll confirm shortly.
                                    </div>
                                )}

                                <p className="text-xs text-[#8B5E3C] text-center">
                                    Your information is secure and will only be used to confirm your appointment.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-96">
                        <iframe
                            src="https://maps.google.com/maps?q=Shop%20no%20G13,%20Glam%20Beauty%20Studio,%20sahara%20river%20view,%20Old%20Purulia%20Rd,%20Kumar%20Basti,%20Mango,%20Jamshedpur,%20Jharkhand%20831012&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
