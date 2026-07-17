import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sahel Ali",
        service: "Client",
        text: "Loved the service at [ Glam Beauty Parlor ]! 😊 The staff were super friendly and professional. My hair felt amazing post-cut and color - exactly what I wanted! 💇‍♀️ Highly recommend trying them out! 👍",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "Zoya Khan",
        service: "Client",
        text: "Best experience raha mera glam beauty studio mein since yeh 1 month ka free course tha but mujhe yaha bhut kuch sikhaya gya bhut kuch meine sikha mein yaha pe apna paid course bhi karogi jisme advance technique sikhao jaigi or yaha ka environment bhut jada friendly hai or teaching style bhut amazing hai hath pakad ke sikhaya jata hai mein sab ko yaha aana suggest karogi",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Taliya Eram",
        service: "Client",
        text: "loved my visit to Glam Beauty Studio!Fiza is such a sweetheart – her polite and caring attitude made my visit so special. Amazing service.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 4,
        name: "Tamanna Perween",
        service: "Client",
        text: "Experienced, expert, professional, friendly, caring, diligent. Awesome hair do, fantastic facial effects, beautiful service, excellent results. Thanku for the best service 👍",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 5,
        name: "Meenu Csp",
        service: "Client",
        text: "Service is very good ......I got a hair spa and facial done, and the results were great. Plus, their behavior is very nice.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 6,
        name: "Sanober Khan",
        service: "Client",
        text: "I'm student of glam beauty studio.... Best experience, ma'am was very kind hearted, I'm so glad to be part of this batch....❤️❤️❤️❤️",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 7,
        name: "Kaneez Fatima",
        service: "Client",
        text: "Maine yaha 1 month course Kiya hai free of course or mujhe yaha bahut kuch sikhne ko mila hai yaha mam bhi bahut hi acchi hai yaha ki mera yaha pe bahut hi accha experience rha mujhe yaha aake bahut kuch sikhne ko mila",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 8,
        name: "Sadaf Tanweer",
        service: "Client",
        text: "Very nice service.Genuine price I would recommend every one to visit once and take the service.Staffs are very co operative and friendly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 9,
        name: "Bushra Tasneem",
        service: "Client",
        text: "I had an absolutely wonderful experience visiting here . I would definitely recommend Glam Beauty Studio to anyone looking for excellent beauty services.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 10,
        name: "MD SHAFIQUE",
        service: "Client",
        text: "I am the student of glam beauty studio.As my experience I was tought everything clearly every makeup look and and hairstyle etc.I am happy with glam beauty studio 💖",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 11,
        name: "Richa",
        service: "Client",
        text: "Best Services at reasonable prices. Owner's behaviour is too friendly.. Please visit. 🙂↕️",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 12,
        name: "Rahmat Jahan",
        service: "Client",
        text: "Great service received at the parlour. Staff was very friendly and polite and I enjoyed the service and vibe",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 13,
        name: "Khushboo Kumari",
        service: "Client",
        text: "I really liked your behavior and your work, it is a very good parlor, you can go there.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 14,
        name: "Neelam Aftab",
        service: "Client",
        text: "Wonderful salon. Elegant service is provided by experience, staff and beautician, and one more thing which I’d like the most is guidance to your skin is given at no extra cost and skin treatment is according to the type of your skin. I liked the place",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 15,
        name: "Rashda Tarannum Tarannum",
        service: "Client",
        text: "Amazing parlour service is very good 👍 and behavior is also decoram and politeness",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 16,
        name: "Momina Moin",
        service: "Client",
        text: "I liked their service very much and the price is very affordable as well, I would like to come again and again.,♥️",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 17,
        name: "Labanya Shil",
        service: "Client",
        text: "Today I visited glam beauty studio.. I like there behaviour😍 very much and I got very good service 😊at a very reasonable price .. thankyou so much zeba ji & fiza❤️❤️❤️❤️",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 18,
        name: "Zainab Perween",
        service: "Client",
        text: "I'm so impressed with the results! The [specific service, e.g., hair straighting was excellent I am very happy..",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 19,
        name: "firoz imam",
        service: "Client",
        text: "Very nice ,I like your work.very very thanx. Glam beauty studio is best in jamshedpur.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 20,
        name: "Azharuddin khan",
        service: "Client",
        text: "Good behaviour and smart makeup artist Unexpected bridal makeup",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 21,
        name: "Puchku Shil",
        service: "Client",
        text: "Very good service.nise make-up.🥰my feelings is very good 👍",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 22,
        name: "Farhat Rehan Ahmad",
        service: "Client",
        text: "My wife visit this place and she was happy and satisfied with the amazing staffs and their hospitality.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 23,
        name: "Zoya Ahamad",
        service: "Client",
        text: "Great experience, Fabulous service , Always great to come here !",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 24,
        name: "Chanchal",
        service: "Client",
        text: "Great experience... Excellent service 👍 must visit.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 25,
        name: "Bablimardi Bablimardi",
        service: "Client",
        text: "Wow very nice I like it",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 26,
        name: "Shaheen Parween",
        service: "Client",
        text: "Very good service💕",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 27,
        name: "Nikhat Perween",
        service: "Client",
        text: "Amazing services.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 28,
        name: "Tilism Bano",
        service: "Client",
        text: "Service is owsm, satisfied",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 29,
        name: "Rupsha Dey",
        service: "Client",
        text: "Good service",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 30,
        name: "Wafa Khan",
        service: "Client",
        text: "Very good services very satisfied.lov it",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 31,
        name: "Humdo Sana",
        service: "Client",
        text: "Amazing service, clean environment, and great results. Highly recommended",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 32,
        name: "Sonam Perveen",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 33,
        name: "Syed Zafar",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 34,
        name: "Noor Saba",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 35,
        name: "Rafique Ahmed",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 36,
        name: "Saiqua Naaz",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 37,
        name: "Priyanshi Singh",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 38,
        name: "Simranjeet Kaur",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 39,
        name: "Md Danish",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 40,
        name: "Rani Kumari",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 41,
        name: "azmi md imtiyaz khan",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 42,
        name: "Nagma Khan",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 43,
        name: "Adeeba Moin",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
];

export const TestimonialCarousel = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonials-title, .testimonials-subtitle",
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

            gsap.fromTo(".carousel-container",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Auto-rotate carousel
    useEffect(() => {
        if (!autoplay) return;

        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(autoplayRef.current);
    }, [autoplay]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const visibleSlides = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="testimonials-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Loved By Hundreds
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="testimonials-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Real stories from our happy clients about their beauty transformations.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="carousel-container relative">
                        {/* Carousel Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {visibleSlides.map((testimonial, idx) => (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-500 transform ${
                                        idx === 0
                                            ? "md:scale-105 md:z-10"
                                            : idx === 1
                                            ? "md:scale-100 md:z-5"
                                            : "hidden md:block md:scale-100 md:z-5"
                                    }`}
                                >
                                    <div className="bg-[#FAF7F4] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        {/* Header with Photo and Google Badge */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    loading="lazy"
                                                    className="w-16 h-16 rounded-full object-cover border-3 border-[#C99A6B]"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-[#2B1D17] text-lg">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-[#C99A6B] text-sm font-medium">
                                                        {testimonial.service}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Google Icon Badge */}
                                            <div className="flex-shrink-0 opacity-80">
                                                <svg width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
                                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.11 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                                    <path fill="none" d="M0 0h48v48H0z"/>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-[#C99A6B] text-[#C99A6B]"
                                                />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-[#8B5E3C] leading-relaxed italic">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between gap-8">
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToSlide(idx)}
                                        className={`transition-all duration-300 rounded-full ${
                                            idx === currentIndex
                                                ? "w-8 h-3 bg-[#C99A6B]"
                                                : "w-3 h-3 bg-[#C99A6B]/40 hover:bg-[#C99A6B]/60"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Trust Statistics */}
                    <div className="mt-16 grid grid-cols-3 gap-6 text-center">
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">500+</p>
                            <p className="text-[#8B5E3C] font-medium">Happy Clients</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">4.9★</p>
                            <p className="text-[#8B5E3C] font-medium">Average Rating</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">8+</p>
                            <p className="text-[#8B5E3C] font-medium">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
