import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const pricingData = [
    {
        category: "Bridal & Event Glam",
        services: [
            { name: "Bridal Makeup (Full Package)", price: "Starting From ₹8,000" },
            { name: "Engagement Makeup", price: "Starting From ₹5,000" },
            { name: "Party / Cocktail Makeup", price: "Starting From ₹2,500" },
            { name: "Occasion Hair Styling", price: "Starting From ₹500" },
            { name: "Mahendi", price: "Starting From ₹300" },
        ],
    },
    {
        category: "Hair Styling & Treatments",
        services: [
            { name: "Hair Spa", price: "Starting From ₹600" },
            { name: "Straightening / Smoothening", price: "Starting From ₹3,000" },
            { name: "Hair Treatment", price: "Starting From ₹4,000" },
            { name: "Haircut", price: "Starting From ₹300" },
        ],
    },
    {
        category: "Essential Maintenance",
        services: [
            { name: "Eyebrow Threading", price: "₹40" },
            { name: "Upper Lip / Chin Threading", price: "₹30" },
            { name: "Full Face Waxing", price: "₹300" },
        ],
    },
];

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Heading */}
                <div className="mb-12 text-center space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold">
                        Services & Pricing
                    </h2>
                    <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                </div>

                <div className="space-y-8">
                    {pricingData.map((category, idx) => (
                        <Card key={idx} className="border border-border/50">
                            <CardHeader className="bg-primary/5">
                                <CardTitle className="font-serif text-2xl md:text-3xl">
                                    {category.category}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                {/* ✅ MOBILE VIEW */}
                                <div className="space-y-4 md:hidden">
                                    {category.services.map((service, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between border-b pb-3 last:border-none"
                                        >
                                            <span className="text-sm text-foreground">
                                                {service.name}
                                            </span>
                                            <span className="text-sm font-semibold text-primary">
                                                {service.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* ✅ DESKTOP TABLE */}
                                <div className="hidden md:block">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-2/3">Service</TableHead>
                                                <TableHead className="text-right">Price</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {category.services.map((service, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>{service.name}</TableCell>
                                                    <TableCell className="text-right font-semibold text-primary">
                                                        {service.price}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-10 rounded-xl border bg-muted/50 p-6">
                    <p className="text-center text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> Prices may vary
                        based on hair length, product selection, and customization.
                    </p>
                </div>
            </div>
        </section>
    );
};
