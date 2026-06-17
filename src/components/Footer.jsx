import { Link } from "react-router-dom";

export const Footer = () => (
    <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Glam Beauty Studio</h3>
                        <p className="text-background/80 text-sm">
                            Your premier destination for professional beauty services. Transform your look with our expert team.
                        </p>
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
