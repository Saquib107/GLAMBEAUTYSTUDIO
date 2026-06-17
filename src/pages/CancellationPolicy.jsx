import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const CancellationPolicy = () => {
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
                    <h1 className="text-4xl font-bold text-foreground mb-8">Cancellation Policy</h1>

                    <p className="text-muted-foreground mb-6">
                        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Cancellation Timeline</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p><strong>More than 48 hours before:</strong> Free cancellation with full refund</p>
                            <p><strong>24-48 hours before:</strong> 50% refund deducted from the service price</p>
                            <p><strong>Less than 24 hours before:</strong> No refund issued (full charge applies)</p>
                            <p><strong>No-show (no notification):</strong> Full charge applies</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. How to Cancel</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            To cancel your appointment, please contact us as soon as possible through:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>WhatsApp: +91 8294040050</li>
                            <li>Phone: +91 8294040050</li>
                            <li>Email: zebarifrzsus@gmail.com</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Rescheduling</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you wish to reschedule your appointment rather than cancel, you can do so without penalty if requested at least 24 hours in advance. Subject to artist availability.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Studio Cancellations</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            In case Glam Beauty Studio needs to cancel an appointment due to unforeseen circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Full refund will be issued</li>
                            <li>You will be notified as soon as possible</li>
                            <li>We will offer priority rebooking at your convenience</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Special Events & Bridal Packages</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            For bridal and special event packages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>50% advance payment is required at booking</li>
                            <li>Cancellation more than 30 days before: Full refund of advance</li>
                            <li>Cancellation 7-30 days before: 50% of advance refunded</li>
                            <li>Cancellation less than 7 days before: No refund</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Late Arrivals</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Please arrive 10 minutes early for your appointment. If you're more than 15 minutes late without prior notification, your appointment may be cancelled and a full charge will apply.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about our Cancellation Policy, please contact us at:
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

export default CancellationPolicy;
