import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsAndConditions = () => {
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
                    <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

                    <p className="text-muted-foreground mb-6">
                        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using the Glam Beauty Studio website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Glam Beauty Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or for any public display</li>
                            <li>Attempt to reverse engineer, decompile, or disassemble any software on the website</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials on Glam Beauty Studio's website are provided on an 'as is' basis. Glam Beauty Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Booking & Appointment</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p><strong>Confirmation:</strong> All bookings must be confirmed via call or WhatsApp before being finalized.</p>
                            <p><strong>Timing:</strong> Appointments should be booked at least 24 hours in advance, except for emergency services.</p>
                            <p><strong>Availability:</strong> Services are subject to availability and artist schedules.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitations of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In no event shall Glam Beauty Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Glam Beauty Studio's website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Accuracy of Materials</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials appearing on Glam Beauty Studio's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about these Terms & Conditions, please contact us at:
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

export default TermsAndConditions;
