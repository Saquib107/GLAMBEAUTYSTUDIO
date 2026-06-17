import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Why are you considered the best bridal makeup artist in Jamshedpur?",
        answer: "We use premium international brands like MAC, Huda Beauty, and Bobbi Brown, combined with years of professional training to ensure your bridal look is flawless, long-lasting, and perfectly suited to your features and wedding attire."
    },
    {
        question: "Do you offer ladies beauty parlour services near me for regular maintenance?",
        answer: "Yes! Located centrally in Sahara River View, Mango, we offer a full range of regular maintenance services including threading, waxing, manicures, and pedicures in a hygienic and luxurious environment."
    },
    {
        question: "Should I book my bridal makeup appointment in advance?",
        answer: "Absolutely. We recommend booking your bridal makeup at least 2-3 months in advance, especially during the peak wedding season in Jamshedpur, to secure your preferred dates and allow time for a trial session."
    },
    {
        question: "What products do you use for hair spa and skin treatments?",
        answer: "We use only top-tier, authentic products such as Olaplex, L'Oréal Professionnel for hair, and premium dermatologically tested skincare brands for our facials to ensure the best and safest results for our clients."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-[#FAF7F4]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2B1D17] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-xl shadow-sm border border-[#e5dcd2] overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="font-semibold text-[#2B1D17] pr-8">{faq.question}</h3>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-[#C99A6B] flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#C99A6B] flex-shrink-0" />
                                )}
                            </button>
                            
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-[#8B5E3C] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
