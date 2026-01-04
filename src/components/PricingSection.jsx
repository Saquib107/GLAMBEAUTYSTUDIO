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
        <section id="pricing" className="py-20 bg-[#faf7f4]">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#3b2f2f]">
                        Services & Pricing Guide
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#e2a173]" />
                </div>

                {/* Categories */}
                <div className="space-y-10">
                    {pricingData.map((category, idx) => (
                        <Card
                            key={idx}
                            className="rounded-2xl border border-black/5 bg-white shadow-sm"
                        >
                            <CardHeader className="pb-4">
                                <CardTitle className="font-serif text-2xl text-[#3b2f2f]">
                                    {category.category}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="px-4 pb-6">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-sm font-medium text-muted-foreground">
                                                Service
                                            </TableHead>
                                            <TableHead className="text-right text-sm font-medium text-muted-foreground">
                                                Price
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {category.services.map((service, i) => (
                                            <TableRow key={i}>
                                                <TableCell className="py-4 text-sm md:text-base text-[#3b2f2f]">
                                                    {service.name}
                                                </TableCell>
                                                <TableCell className="py-4 text-right text-sm md:text-base font-semibold text-[#e2a173]">
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
                <div className="mt-10 rounded-xl border border-black/5 bg-white p-6">
                    <p className="text-center text-sm text-muted-foreground">
                        <strong className="text-[#3b2f2f]">Note:</strong> Prices may vary based
                        on hair length, products used, and customization. Please contact us
                        for exact quotes.
                    </p>
                </div>
            </div>
        </section>
    );
};
