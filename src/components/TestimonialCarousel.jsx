import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Sahel+Ali%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Loved+the+service+at+%5B+Glam+Beauty+Parlor+%5D%21+%F0%9F%98%8A+The+staff+were+super+friendly+and+professional.+My+hair+felt+amazing+post-cut+and+color+-+exactly+what+I+wanted%21+%F0%9F%92%87%E2%80%8D%E2%99%80%EF%B8%8F+Highly+recommend+trying+them+out%21+%F0%9F%91%8D%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Loved the service at [ Glam Beauty Parlor ]! 😊 The staff were super friendly and professional. My hair felt amazing post-cut and color - exactly what I wanted! 💇‍♀️ Highly recommend trying them out! 👍",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 2,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Zoya+Khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Best+experience+raha+mera+glam+beauty+studio+mein+since+yeh+1+month+ka+free+course+tha+but+mujhe+yaha+bhut+kuch+sikhaya+gya+bhut+kuch+meine+sikha+mein+yaha+pe+apna+paid+course+bhi+karogi+jisme+advance+technique+sikhao+jaigi+or+yaha+ka+environment+bhut+jada+friendly+hai+or+teaching+style+bhut+amazing+hai+hath+pakad+ke+sikhaya+jata+hai+mein+sab+ko+yaha+aana+suggest+karogi%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Best experience raha mera glam beauty studio mein since yeh 1 month ka free course tha but mujhe yaha bhut kuch sikhaya gya bhut kuch meine sikha mein yaha pe apna paid course bhi karogi jisme advance technique sikhao jaigi or yaha ka environment bhut jada friendly hai or teaching style bhut amazing hai hath pakad ke sikhaya jata hai mein sab ko yaha aana suggest karogi",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 3,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Taliya+Eram%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22loved+my+visit+to+Glam+Beauty+Studio%21Fiza+is+such+a+sweetheart+%E2%80%93+her+polite+and+caring+attitude+made+my+visit+so+special.+Amazing+service.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "loved my visit to Glam Beauty Studio!Fiza is such a sweetheart – her polite and caring attitude made my visit so special. Amazing service.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 4,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Tamanna+Perween%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Experienced%2C+expert%2C+professional%2C+friendly%2C+caring%2C+diligent.+Awesome+hair+do%2C+fantastic+facial+effects%2C+beautiful+service%2C+excellent+results.+Thanku+for+the+best+service+%F0%9F%91%8D%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Experienced, expert, professional, friendly, caring, diligent. Awesome hair do, fantastic facial effects, beautiful service, excellent results. Thanku for the best service 👍",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 5,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Meenu+Csp%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Service+is+very+good+......I+got+a+hair+spa+and+facial+done%2C+and+the+results+were+great.+Plus%2C+their+behavior+is+very+nice.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Service is very good ......I got a hair spa and facial done, and the results were great. Plus, their behavior is very nice.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 6,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Sanober+Khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I%27m+student+of+glam+beauty+studio....+Best+experience%2C+ma%27am+was+very+kind+hearted%2C+I%27m+so+glad+to+be+part+of+this+batch....%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I'm student of glam beauty studio.... Best experience, ma'am was very kind hearted, I'm so glad to be part of this batch....❤️❤️❤️❤️",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 7,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Kaneez+Fatima%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Maine+yaha+1+month+course+Kiya+hai+free+of+course+or+mujhe+yaha+bahut+kuch+sikhne+ko+mila+hai+yaha+mam+bhi+bahut+hi+acchi+hai+yaha+ki+mera+yaha+pe+bahut+hi+accha+experience+rha+mujhe+yaha+aake+bahut+kuch+sikhne+ko+mila%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Maine yaha 1 month course Kiya hai free of course or mujhe yaha bahut kuch sikhne ko mila hai yaha mam bhi bahut hi acchi hai yaha ki mera yaha pe bahut hi accha experience rha mujhe yaha aake bahut kuch sikhne ko mila",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 8,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Sadaf+Tanweer%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Very+nice+service.Genuine+price+I+would+recommend+every+one+to+visit+once+and+take+the+service.Staffs+are+very+co+operative+and+friendly.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Very nice service.Genuine price I would recommend every one to visit once and take the service.Staffs are very co operative and friendly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 9,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Bushra+Tasneem%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I+had+an+absolutely+wonderful+experience+visiting+here+.+I+would+definitely+recommend+Glam+Beauty+Studio+to+anyone+looking+for+excellent+beauty+services.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I had an absolutely wonderful experience visiting here . I would definitely recommend Glam Beauty Studio to anyone looking for excellent beauty services.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 10,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22MD+SHAFIQUE%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I+am+the+student+of+glam+beauty+studio.As+my+experience+I+was+tought+everything+clearly+every+makeup+look+and+and+hairstyle+etc.I+am+happy+with+glam+beauty+studio+%F0%9F%92%96%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I am the student of glam beauty studio.As my experience I was tought everything clearly every makeup look and and hairstyle etc.I am happy with glam beauty studio 💖",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 11,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Richa%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Best+Services+at+reasonable+prices.+Owner%27s+behaviour+is+too+friendly..+Please+visit.+%F0%9F%99%82%E2%86%95%EF%B8%8F%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Best Services at reasonable prices. Owner's behaviour is too friendly.. Please visit. 🙂↕️",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 12,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Rahmat+Jahan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Great+service+received+at+the+parlour.+Staff+was+very+friendly+and+polite+and+I+enjoyed+the+service+and+vibe%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Great service received at the parlour. Staff was very friendly and polite and I enjoyed the service and vibe",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 13,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Khushboo+Kumari%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I+really+liked+your+behavior+and+your+work%2C+it+is+a+very+good+parlor%2C+you+can+go+there.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I really liked your behavior and your work, it is a very good parlor, you can go there.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 14,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Neelam+Aftab%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Wonderful+salon.+Elegant+service+is+provided+by+experience%2C+staff+and+beautician%2C+and+one+more+thing+which+I%E2%80%99d+like+the+most+is+guidance+to+your+skin+is+given+at+no+extra+cost+and+skin+treatment+is+according+to+the+type+of+your+skin.+I+liked+the+place%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Wonderful salon. Elegant service is provided by experience, staff and beautician, and one more thing which I’d like the most is guidance to your skin is given at no extra cost and skin treatment is according to the type of your skin. I liked the place",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 15,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Rashda+Tarannum+Tarannum%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Amazing+parlour+service+is+very+good+%F0%9F%91%8D+and+behavior+is+also+decoram+and+politeness%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Amazing parlour service is very good 👍 and behavior is also decoram and politeness",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 16,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Momina+Moin%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I+liked+their+service+very+much+and+the+price+is+very+affordable+as+well%2C+I+would+like+to+come+again+and+again.%2C%E2%99%A5%EF%B8%8F%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I liked their service very much and the price is very affordable as well, I would like to come again and again.,♥️",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 17,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Labanya+Shil%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Today+I+visited+glam+beauty+studio..+I+like+there+behaviour%F0%9F%98%8D+very+much+and+I+got+very+good+service+%F0%9F%98%8Aat+a+very+reasonable+price+..+thankyou+so+much+zeba+ji+%26+fiza%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Today I visited glam beauty studio.. I like there behaviour😍 very much and I got very good service 😊at a very reasonable price .. thankyou so much zeba ji & fiza❤️❤️❤️❤️",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 18,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Zainab+Perween%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22I%27m+so+impressed+with+the+results%21+The+%5Bspecific+service%2C+e.g.%2C+hair+straighting+was+excellent+I+am+very+happy..%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "I'm so impressed with the results! The [specific service, e.g., hair straighting was excellent I am very happy..",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 19,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22firoz+imam%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Very+nice+%2CI+like+your+work.very+very+thanx.+Glam+beauty+studio+is+best+in+jamshedpur.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Very nice ,I like your work.very very thanx. Glam beauty studio is best in jamshedpur.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 20,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Azharuddin+khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Good+behaviour+and+smart+makeup+artist+Unexpected+bridal+makeup%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Good behaviour and smart makeup artist Unexpected bridal makeup",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 21,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Puchku+Shil%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Very+good+service.nise+make-up.%F0%9F%A5%B0my+feelings+is+very+good+%F0%9F%91%8D%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Very good service.nise make-up.🥰my feelings is very good 👍",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 22,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Farhat+Rehan+Ahmad%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22My+wife+visit+this+place+and+she+was+happy+and+satisfied+with+the+amazing+staffs+and+their+hospitality.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "My wife visit this place and she was happy and satisfied with the amazing staffs and their hospitality.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 23,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Zoya+Ahamad%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Great+experience%2C+Fabulous+service+%2C+Always+great+to+come+here+%21%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Great experience, Fabulous service , Always great to come here !",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 24,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Chanchal%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Great+experience...+Excellent+service+%F0%9F%91%8D+must+visit.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Great experience... Excellent service 👍 must visit.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 25,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Bablimardi+Bablimardi%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Wow+very+nice+I+like+it%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Wow very nice I like it",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 26,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Shaheen+Parween%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Very+good+service%F0%9F%92%95%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Very good service💕",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 27,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Nikhat+Perween%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Amazing+services.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Amazing services.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 28,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Tilism+Bano%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Service+is+owsm%2C+satisfied%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Service is owsm, satisfied",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 29,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Rupsha+Dey%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Good+service%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Good service",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 30,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Wafa+Khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Very+good+services+very+satisfied.lov+it%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Very good services very satisfied.lov it",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 31,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Humdo+Sana%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Amazing+service%2C+clean+environment%2C+and+great+results.+Highly+recommended%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Amazing service, clean environment, and great results. Highly recommended",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 32,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Sonam+Perveen%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 33,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Syed+Zafar%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 34,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Noor+Saba%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 35,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Rafique+Ahmed%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 36,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Saiqua+Naaz%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 37,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Priyanshi+Singh%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 38,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Simranjeet+Kaur%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 39,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Md+Danish%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 40,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Rani+Kumari%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 41,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22azmi+md+imtiyaz+khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 42,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Nagma+Khan%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        id: 43,
        name: ""https://ui-avatars.com/api/?name=name%3A+%22Adeeba+Moin%22%2C%0A++++++++service%3A+%22Client%22%2C%0A++++++++text%3A+%22Highly+recommended%21+Excellent+service+at+Glam+Beauty+Studio.%22%2C%0A++++++++image%3A+&background=random&color=fff&size=150&font-size=0.33&bold=true"",
        service: "Client",
        text: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
];

export const TestimonialCarousel = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonials-title, .testimonials-subtitle",
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".carousel-container",
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Auto-rotate carousel
    useEffect(() => {
        if (!autoplay) return;

        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(autoplayRef.current);
    }, [autoplay]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 8000);
    };

    const visibleSlides = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="testimonials-title font-serif text-5xl md:text-6xl font-bold text-[#2B1D17]">
                            Loved By Hundreds
                        </h2>
                        <div className="w-24 h-1 bg-[#C99A6B] mx-auto rounded-full" />
                        <p className="testimonials-subtitle text-lg text-[#8B5E3C] max-w-2xl mx-auto">
                            Real stories from our happy clients about their beauty transformations.
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="carousel-container relative">
                        {/* Carousel Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {visibleSlides.map((testimonial, idx) => (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-500 transform ${
                                        idx === 0
                                            ? "md:scale-105 md:z-10"
                                            : idx === 1
                                            ? "md:scale-100 md:z-5"
                                            : "hidden md:block md:scale-100 md:z-5"
                                    }`}
                                >
                                    <div className="bg-[#FAF7F4] rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        {/* Header with Photo and Google Badge */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    loading="lazy"
                                                    className="w-16 h-16 rounded-full object-cover border-3 border-[#C99A6B]"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-[#2B1D17] text-lg">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-[#C99A6B] text-sm font-medium">
                                                        {testimonial.service}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Google Icon Badge */}
                                            <div className="flex-shrink-0 opacity-80">
                                                <svg width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
                                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.11 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                                    <path fill="none" d="M0 0h48v48H0z"/>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-[#C99A6B] text-[#C99A6B]"
                                                />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        {testimonial.text && (
                                            <p className="text-[#8B5E3C] leading-relaxed italic">
                                                "{testimonial.text}"
                                            </p>
                                        )}
                                        {testimonial.ownerReply && (
                                            <div className="mt-6 p-4 bg-[#F5E6D3] rounded-xl border border-[#E8CBAF] relative">
                                                <div className="absolute -top-2 left-6 w-4 h-4 bg-[#F5E6D3] border-l border-t border-[#E8CBAF] transform rotate-45"></div>
                                                <p className="text-sm font-bold text-[#2B1D17] mb-1">Glam Beauty Studio (Owner)</p>
                                                <p className="text-sm text-[#8B5E3C] leading-relaxed">{testimonial.ownerReply}</p>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between gap-8">
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Number Indicator */}
                            <div className="flex items-center justify-center font-semibold text-[#8B5E3C] bg-[#FAF7F4] px-6 py-2 rounded-full shadow-sm border border-[#E8CBAF]">
                                {currentIndex + 1} / {testimonials.length}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-[#C99A6B] hover:bg-[#b8894f] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Trust Statistics */}
                    <div className="mt-16 grid grid-cols-3 gap-6 text-center">
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">500+</p>
                            <p className="text-[#8B5E3C] font-medium">Happy Clients</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">4.9★</p>
                            <p className="text-[#8B5E3C] font-medium">Average Rating</p>
                        </div>
                        <div className="bg-[#FAF7F4] rounded-2xl p-6">
                            <p className="text-3xl font-bold text-[#C99A6B]">8+</p>
                            <p className="text-[#8B5E3C] font-medium">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
