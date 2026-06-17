import { Gift, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BusinessFeaturesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2B1D17] mb-4">
                        Exclusive Offers & Memberships
                    </h2>
                    <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full mb-6"></div>
                    <p className="text-[#8B5E3C] max-w-2xl mx-auto">
                        Treat yourself or a loved one to the gift of beauty. Explore our membership plans and gift vouchers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Gift Vouchers */}
                    <div className="bg-[#FAF7F4] rounded-2xl p-8 border border-[#e5dcd2] relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C99A6B]/10 rounded-full blur-2xl group-hover:bg-[#C99A6B]/20 transition-all duration-300"></div>
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e5dcd2]">
                                <Gift className="w-8 h-8 text-[#C99A6B]" />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif text-[#2B1D17] mb-2">Gift Vouchers</h3>
                                    <p className="text-[#8B5E3C] text-sm leading-relaxed">
                                        The perfect gift for any occasion. Purchase a Glam Beauty Studio digital gift card starting from ₹1000. Valid for all services.
                                    </p>
                                </div>
                                <Button 
                                    className="bg-transparent text-[#C99A6B] border border-[#C99A6B] hover:bg-[#C99A6B] hover:text-white rounded-full transition-colors"
                                    onClick={() => alert("Gift Voucher purchase functionality coming soon!")}
                                >
                                    Purchase Voucher
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* VIP Membership */}
                    <div className="bg-[#2B1D17] rounded-2xl p-8 border border-[#3b2f2f] relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C99A6B]/20 rounded-full blur-2xl group-hover:bg-[#C99A6B]/30 transition-all duration-300"></div>
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-[#3b2f2f] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#4a3b3b]">
                                <Sparkles className="w-8 h-8 text-[#C99A6B]" />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif text-white mb-2">VIP Membership</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Join our exclusive VIP club to enjoy flat 15% off on all services, priority booking, and a complimentary birthday makeover.
                                    </p>
                                </div>
                                <Button 
                                    className="bg-[#C99A6B] text-white hover:bg-[#b8894f] rounded-full transition-colors"
                                    onClick={() => alert("Membership registration coming soon!")}
                                >
                                    Join The Club
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
