import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

export const Footer = () => (
    <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <img src={logoImage} alt="Glam Beauty Studio Logo" className="h-16 w-auto object-contain rounded-full bg-white p-1" />
                        <p className="text-background/80 text-sm">
                            Your premier destination for professional beauty services. Transform your look with our expert team.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#C99A6B] hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#C99A6B] hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold mb-3">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li>Shop No - G13, Sahara River View</li>
                            <li>Old Purulia Road, Kumar Basti</li>
                            <li>Mango, Jamshedpur 831012</li>
                            <li className="pt-2"><strong>Phone:</strong> +91 82940 40050</li>
                            <li><strong>Email:</strong> zebarifrzsus@gmail.com</li>
                            <li className="pt-2 text-[#C99A6B] font-medium">Mon-Sun - 10AM to 8PM</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li><a href="#hero" className="hover:text-background transition">Home</a></li>
                            <li><a href="#pricing" className="hover:text-background transition">Services</a></li>
                            <li><a href="#gallery" className="hover:text-background transition">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-background transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div className="space-y-4">
                        <h4 className="font-semibold mb-3">Policies</h4>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li><Link to="/privacy-policy" className="hover:text-background transition">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-background transition">Terms & Conditions</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-background transition">Refund Policy</Link></li>
                            <li><Link to="/cancellation-policy" className="hover:text-background transition">Cancellation Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-background/20 mb-8"></div>

                {/* Bottom Footer */}
                <div className="text-center text-sm text-background/80">
                    <p>© {new Date().getFullYear()} Glam Beauty Studio. All rights reserved.</p>
                    <p className="mt-2">
                        <span className="text-background/60">Designed with </span>
                        <span className="text-red-400">❤️</span>
                        <span className="text-background/60"> for beauty lovers</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
