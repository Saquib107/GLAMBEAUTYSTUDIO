import { Phone, Calendar, MessageCircle } from "lucide-react";

export const MobileStickyBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5dcd2] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden pb-safe">
            <div className="flex justify-between items-center h-16">
                <a 
                    href="tel:+919876543210" 
                    className="flex-1 flex flex-col items-center justify-center gap-1 text-[#8B5E3C] hover:text-[#C99A6B] h-full transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
                </a>
                
                <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-500 h-full border-x border-[#e5dcd2] transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
                </a>
                
                <button 
                    onClick={() => {
                        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#C99A6B] hover:bg-[#b8894f] text-white h-full transition-colors"
                >
                    <Calendar className="w-5 h-5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Book Now</span>
                </button>
            </div>
        </div>
    );
};
