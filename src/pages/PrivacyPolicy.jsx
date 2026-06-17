import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <article className="prose prose-invert max-w-none">
                    <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

                    <p className="text-muted-foreground mb-6">
                        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Glam Beauty Studio ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p><strong>Personal Information:</strong> Name, email address, phone number, address, and appointment details</p>
                            <p><strong>Payment Information:</strong> Payment method details (processed securely through third-party providers)</p>
                            <p><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Processing and managing your appointments</li>
                            <li>Sending confirmation and reminder emails/SMS</li>
                            <li>Responding to your inquiries and support requests</li>
                            <li>Improving our services and website functionality</li>
                            <li>Sending promotional offers (with your consent)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may use third-party service providers (e.g., payment processors, email services) to assist in our operations. These providers are contractually obligated to use your information only as necessary to provide services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about this Privacy Policy, please contact us at:
                            <br />
                            <strong>Email:</strong> zebarifrzsus@gmail.com
                            <br />
                            <strong>Phone:</strong> +91 8294040050
                        </p>
                    </section>
                </article>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
