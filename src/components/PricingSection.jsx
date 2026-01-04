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
            { name: "Hand / Leg Waxing", price: "₹800" },
        ],
    },
];

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="mb-12 text-center space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
                            Services & Pricing
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid gap-8">
                        {pricingData.map((category, idx) => (
                            <Card key={idx} className="border border-border/50">
                                <CardHeader className="bg-primary/5">
                                    <CardTitle className="font-serif text-2xl md:text-3xl font-semibold">
                                        {category.category}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="p-0">
                                    {/* MOBILE FIX */}
                                    <div className="w-full overflow-x-auto">
                                        <Table className="min-w-[520px]">
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-2/3 py-3 text-xs md:text-sm font-semibold text-muted-foreground">
                                                        Service
                                                    </TableHead>
                                                    <TableHead className="py-3 text-right text-xs md:text-sm font-semibold text-muted-foreground">
                                                        Price
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>

                                            <TableBody>
                                                {category.services.map((service, serviceIdx) => (
                                                    <TableRow key={serviceIdx}>
                                                        <TableCell className="py-3 text-sm md:text-base">
                                                            {service.name}
                                                        </TableCell>
                                                        <TableCell className="py-3 text-right text-sm md:text-base font-semibold text-primary">
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
                    <div className="mt-10 rounded-xl border border-border/50 bg-muted/50 p-6">
                        <p className="text-center text-sm md:text-base text-muted-foreground">
                            <strong className="text-foreground">Note:</strong> Prices may vary
                            depending on hair length, product choice, and customization.
                            Contact us for a personalized quote.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

