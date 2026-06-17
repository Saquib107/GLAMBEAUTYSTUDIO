import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const RefundPolicy = () => {
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
                    <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>

                    <p className="text-muted-foreground mb-6">
                        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Refund Eligibility</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Refunds are available only in the following situations:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>The service was cancelled by Glam Beauty Studio</li>
                            <li>The service was not delivered as promised</li>
                            <li>The customer cancelled the appointment within 48 hours of booking</li>
                            <li>Payment was charged in error</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Non-Refundable Services</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            The following are non-refundable:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Services completed as per client's request</li>
                            <li>Services cancelled less than 24 hours before appointment</li>
                            <li>No-show appointments (more than 15 minutes late without notification)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Refund Process</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p><strong>Request Timeline:</strong> Refund requests must be made within 7 days of the service date.</p>
                            <p><strong>Processing Time:</strong> Approved refunds will be processed within 5-7 business days.</p>
                            <p><strong>Method:</strong> Refunds will be issued using the same payment method used for the original transaction.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. How to Request a Refund</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            To request a refund, please contact us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>By email: zebarifrzsus@gmail.com</li>
                            <li>By phone: +91 8294040050</li>
                            <li>In person at our salon</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Partial Refunds</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If a service is partially completed due to client dissatisfaction, a partial refund may be issued at our discretion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about our Refund Policy, please contact us at:
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

export default RefundPolicy;
