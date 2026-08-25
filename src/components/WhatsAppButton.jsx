import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    const handleWhatsApp = () => {
        const phoneNumber = "918294040050"; // +91 8294040050
        const message = "Hi! I'd like to book an appointment at Glam Beauty Studio.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <button
            onClick={handleWhatsApp}
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 md:bottom-8 md:right-8"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />
        </button>
    );
};
