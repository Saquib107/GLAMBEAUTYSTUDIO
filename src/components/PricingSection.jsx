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
            { name: "Engagement Makeup ", price: "Starting From ₹5,000" },
            { name: "Party/Cocktail Makeup", price: "Starting From ₹2,500" },
            { name: "Occasion Hair Styling", price: "Starting From ₹500" },
            { name: "Mahendi", price: "Starting From ₹300" },
        ],
    },
    {
        category: "Hair Styling & Treatments",
        services: [
            { name: "Hair Spa", price: "Starting From ₹600" },
            { name: "Straightening/Smoothening/Rebounding", price: "Starting From ₹3,000" },
            { name: "Hair Treatment", price: "Starting From ₹4,000" },
            { name: "Haircut", price: "Starting From ₹300" },
        ],
    },
    {
        category: "Essential Maintenance",
        services: [
            { name: "Eyebrow Threading", price: "₹40" },
            { name: "Upper Lip/Chin Threading", price: "₹30" },
            { name: "Full Face Waxing", price: "₹300" },
        ],
    },
    {
        category: "Skincare & Facials",
        services: [
            { name: "Basic Clean-Up", price: "₹600" },
            { name: "Signature Luxury Facial", price: "₹1,200" },
            { name: "Hydrating Gold Facial", price: "₹2,000" },
        ],
    },
    {
        category: "Hands & Feet",
        services: [
            { name: "Classic Manicure", price: "₹400" },
            { name: "Spa Pedicure", price: "₹600" },
            { name: "Hand/Leg Waxing", price: "₹800" },
        ],
    },
];

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Section heading */}
                    <div className="mb-12 space-y-4 text-center">
                        <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
                            Services &amp; Pricing Guide
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                    </div>

                    {/* Pricing cards */}
                    <div className="grid gap-8">
                        {pricingData.map((category, idx) => (
                            <Card
                                key={idx}
                                className="border border-border/50 shadow-soft"
                            >
                                <CardHeader className="bg-primary/5">
                                    <CardTitle className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                                        {category.category}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="p-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-b border-border/60">
                                                <TableHead className="w-2/3 py-3 text-sm font-semibold text-muted-foreground">
                                                    Service
                                                </TableHead>
                                                <TableHead className="py-3 text-right text-sm font-semibold text-muted-foreground">
                                                    Price
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {category.services.map((service, serviceIdx) => (
                                                <TableRow
                                                    key={serviceIdx}
                                                    className="border-b border-border/40 last:border-b-0"
                                                >
                                                    <TableCell className="py-4 text-base">
                                                        {service.name}
                                                    </TableCell>
                                                    <TableCell className="py-4 text-right text-base font-semibold text-primary">
                                                        {service.price}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="mt-8 rounded-xl border border-border/50 bg-muted/50 p-6">
                        <p className="text-center text-muted-foreground">
                            <strong className="text-foreground">Note on Pricing:</strong> Prices
                            are subject to change based on hair length, product selection, and
                            customization. Please contact us for a detailed quote on full
                            packages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
