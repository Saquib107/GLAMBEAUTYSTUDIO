import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    const navLinks = [
        { name: "About", id: "about" },
        { name: "Gallery", id: "gallery" },
        { name: "Services", id: "pricing" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-[#fdf2e9]/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="flex items-center gap-2 font-serif text-xl font-bold text-foreground transition hover:text-primary cursor-pointer"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <span>Glam Beauty Studio</span>
                    </button>


                    {/* Desktop menu */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium text-foreground/80 transition hover:text-primary cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="border-t border-border/40 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-sm font-medium text-foreground/80 transition hover:text-primary cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
