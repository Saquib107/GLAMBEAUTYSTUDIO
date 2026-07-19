import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Sahel Ali",
        role: "Client",
        review: "Loved the service at [ Glam Beauty Parlor ]! 😊 The staff were super friendly and professional. My hair felt amazing post-cut and color - exactly what I wanted! 💇‍♀️ Highly recommend trying them out! 👍",
        image: "https://ui-avatars.com/api/?name=Sahel+Ali&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 2,
        name: "Zoya Khan",
        role: "Client",
        review: "Best experience raha mera glam beauty studio mein since yeh 1 month ka free course tha but mujhe yaha bhut kuch sikhaya gya bhut kuch meine sikha mein yaha pe apna paid course bhi karogi jisme advance technique sikhao jaigi or yaha ka environment bhut jada friendly hai or teaching style bhut amazing hai hath pakad ke sikhaya jata hai mein sab ko yaha aana suggest karogi",
        image: "https://ui-avatars.com/api/?name=Zoya+Khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 3,
        name: "Taliya Eram",
        role: "Client",
        review: "loved my visit to Glam Beauty Studio!Fiza is such a sweetheart – her polite and caring attitude made my visit so special. Amazing service.",
        image: "https://ui-avatars.com/api/?name=Taliya+Eram&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 4,
        name: "Tamanna Perween",
        role: "Client",
        review: "Experienced, expert, professional, friendly, caring, diligent. Awesome hair do, fantastic facial effects, beautiful service, excellent results. Thanku for the best service 👍",
        image: "https://ui-avatars.com/api/?name=Tamanna+Perween&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 5,
        name: "Meenu Csp",
        role: "Client",
        review: "Service is very good ......I got a hair spa and facial done, and the results were great. Plus, their behavior is very nice.",
        image: "https://ui-avatars.com/api/?name=Meenu+Csp&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 6,
        name: "Sanober Khan",
        role: "Client",
        review: "I'm student of glam beauty studio.... Best experience, ma'am was very kind hearted, I'm so glad to be part of this batch....❤️❤️❤️❤️",
        image: "https://ui-avatars.com/api/?name=Sanober+Khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 7,
        name: "Kaneez Fatima",
        role: "Client",
        review: "Maine yaha 1 month course Kiya hai free of course or mujhe yaha bahut kuch sikhne ko mila hai yaha mam bhi bahut hi acchi hai yaha ki mera yaha pe bahut hi accha experience rha mujhe yaha aake bahut kuch sikhne ko mila",
        image: "https://ui-avatars.com/api/?name=Kaneez+Fatima&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 8,
        name: "Sadaf Tanweer",
        role: "Client",
        review: "Very nice service.Genuine price I would recommend every one to visit once and take the service.Staffs are very co operative and friendly.",
        image: "https://ui-avatars.com/api/?name=Sadaf+Tanweer&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 9,
        name: "Bushra Tasneem",
        role: "Client",
        review: "I had an absolutely wonderful experience visiting here . I would definitely recommend Glam Beauty Studio to anyone looking for excellent beauty services.",
        image: "https://ui-avatars.com/api/?name=Bushra+Tasneem&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 10,
        name: "MD SHAFIQUE",
        role: "Client",
        review: "I am the student of glam beauty studio.As my experience I was tought everything clearly every makeup look and and hairstyle etc.I am happy with glam beauty studio 💖",
        image: "https://ui-avatars.com/api/?name=MD+SHAFIQUE&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 11,
        name: "Richa",
        role: "Client",
        review: "Best Services at reasonable prices. Owner's behaviour is too friendly.. Please visit. 🙂↕️",
        image: "https://ui-avatars.com/api/?name=Richa&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 12,
        name: "Rahmat Jahan",
        role: "Client",
        review: "Great service received at the parlour. Staff was very friendly and polite and I enjoyed the service and vibe",
        image: "https://ui-avatars.com/api/?name=Rahmat+Jahan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 13,
        name: "Khushboo Kumari",
        role: "Client",
        review: "I really liked your behavior and your work, it is a very good parlor, you can go there.",
        image: "https://ui-avatars.com/api/?name=Khushboo+Kumari&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 14,
        name: "Neelam Aftab",
        role: "Client",
        review: "Wonderful salon. Elegant service is provided by experience, staff and beautician, and one more thing which I’d like the most is guidance to your skin is given at no extra cost and skin treatment is according to the type of your skin. I liked the place",
        image: "https://ui-avatars.com/api/?name=Neelam+Aftab&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 15,
        name: "Rashda Tarannum Tarannum",
        role: "Client",
        review: "Amazing parlour service is very good 👍 and behavior is also decoram and politeness",
        image: "https://ui-avatars.com/api/?name=Rashda+Tarannum+Tarannum&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 16,
        name: "Momina Moin",
        role: "Client",
        review: "I liked their service very much and the price is very affordable as well, I would like to come again and again.,♥️",
        image: "https://ui-avatars.com/api/?name=Momina+Moin&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 17,
        name: "Labanya Shil",
        role: "Client",
        review: "Today I visited glam beauty studio.. I like there behaviour😍 very much and I got very good service 😊at a very reasonable price .. thankyou so much zeba ji & fiza❤️❤️❤️❤️",
        image: "https://ui-avatars.com/api/?name=Labanya+Shil&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 18,
        name: "Zainab Perween",
        role: "Client",
        review: "I'm so impressed with the results! The [specific service, e.g., hair straighting was excellent I am very happy..",
        image: "https://ui-avatars.com/api/?name=Zainab+Perween&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 19,
        name: "firoz imam",
        role: "Client",
        review: "Very nice ,I like your work.very very thanx. Glam beauty studio is best in jamshedpur.",
        image: "https://ui-avatars.com/api/?name=firoz+imam&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 20,
        name: "Azharuddin khan",
        role: "Client",
        review: "Good behaviour and smart makeup artist Unexpected bridal makeup",
        image: "https://ui-avatars.com/api/?name=Azharuddin+khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 21,
        name: "Puchku Shil",
        role: "Client",
        review: "Very good service.nise make-up.🥰my feelings is very good 👍",
        image: "https://ui-avatars.com/api/?name=Puchku+Shil&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 22,
        name: "Farhat Rehan Ahmad",
        role: "Client",
        review: "My wife visit this place and she was happy and satisfied with the amazing staffs and their hospitality.",
        image: "https://ui-avatars.com/api/?name=Farhat+Rehan+Ahmad&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 23,
        name: "Zoya Ahamad",
        role: "Client",
        review: "Great experience, Fabulous service , Always great to come here !",
        image: "https://ui-avatars.com/api/?name=Zoya+Ahamad&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 24,
        name: "Chanchal",
        role: "Client",
        review: "Great experience... Excellent service 👍 must visit.",
        image: "https://ui-avatars.com/api/?name=Chanchal&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 25,
        name: "Bablimardi Bablimardi",
        role: "Client",
        review: "Wow very nice I like it",
        image: "https://ui-avatars.com/api/?name=Bablimardi+Bablimardi&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 26,
        name: "Shaheen Parween",
        role: "Client",
        review: "Very good service💕",
        image: "https://ui-avatars.com/api/?name=Shaheen+Parween&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 27,
        name: "Nikhat Perween",
        role: "Client",
        review: "Amazing services.",
        image: "https://ui-avatars.com/api/?name=Nikhat+Perween&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 28,
        name: "Tilism Bano",
        role: "Client",
        review: "Service is owsm, satisfied",
        image: "https://ui-avatars.com/api/?name=Tilism+Bano&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 29,
        name: "Rupsha Dey",
        role: "Client",
        review: "Good service",
        image: "https://ui-avatars.com/api/?name=Rupsha+Dey&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 30,
        name: "Wafa Khan",
        role: "Client",
        review: "Very good services very satisfied.lov it",
        image: "https://ui-avatars.com/api/?name=Wafa+Khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 31,
        name: "Humdo Sana",
        role: "Client",
        review: "Amazing service, clean environment, and great results. Highly recommended",
        image: "https://ui-avatars.com/api/?name=Humdo+Sana&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 32,
        name: "Sonam Perveen",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Sonam+Perveen&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 33,
        name: "Syed Zafar",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Syed+Zafar&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 34,
        name: "Noor Saba",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Noor+Saba&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 35,
        name: "Rafique Ahmed",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Rafique+Ahmed&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 36,
        name: "Saiqua Naaz",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Saiqua+Naaz&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 37,
        name: "Priyanshi Singh",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Priyanshi+Singh&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 38,
        name: "Simranjeet Kaur",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Simranjeet+Kaur&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 39,
        name: "Md Danish",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Md+Danish&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 40,
        name: "Rani Kumari",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Rani+Kumari&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 41,
        name: "azmi md imtiyaz khan",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=azmi+md+imtiyaz+khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 42,
        name: "Nagma Khan",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Nagma+Khan&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    },
    {
        id: 43,
        name: "Adeeba Moin",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://ui-avatars.com/api/?name=Adeeba+Moin&background=random&color=fff&size=150&font-size=0.33&bold=true",
        rating: 5
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="scroll-mt-24 py-20 bg-[#faf7f4]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            ⭐ Love From Our Clients
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Thousands of happy clients have transformed with our expert services. Here's what they say.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-elegant transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                            <div className="flex gap-1 mt-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 fill-[#e2a173] text-[#e2a173]"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        "{testimonial.review}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-muted-foreground mb-4">
                            📊 <span className="font-semibold text-foreground">500+</span> Happy Clients |
                            ⭐ <span className="font-semibold text-foreground">4.9/5</span> Average Rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
