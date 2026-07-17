import re
import json

reviews_data = [
    {"name": "Sahel Ali", "review": "Loved the service at [ Glam Beauty Parlor ]! 😊 The staff were super friendly and professional. My hair felt amazing post-cut and color - exactly what I wanted! 💇‍♀️ Highly recommend trying them out! 👍"},
    {"name": "Zoya Khan", "review": "Best experience raha mera glam beauty studio mein since yeh 1 month ka free course tha but mujhe yaha bhut kuch sikhaya gya bhut kuch meine sikha mein yaha pe apna paid course bhi karogi jisme advance technique sikhao jaigi or yaha ka environment bhut jada friendly hai or teaching style bhut amazing hai hath pakad ke sikhaya jata hai mein sab ko yaha aana suggest karogi"},
    {"name": "Taliya Eram", "review": "loved my visit to Glam Beauty Studio!Fiza is such a sweetheart – her polite and caring attitude made my visit so special. Amazing service."},
    {"name": "Tamanna Perween", "review": "Experienced, expert, professional, friendly, caring, diligent. Awesome hair do, fantastic facial effects, beautiful service, excellent results. Thanku for the best service 👍"},
    {"name": "Meenu Csp", "review": "Service is very good ......I got a hair spa and facial done, and the results were great. Plus, their behavior is very nice."},
    {"name": "Sanober Khan", "review": "I'm student of glam beauty studio.... Best experience, ma'am was very kind hearted, I'm so glad to be part of this batch....❤️❤️❤️❤️"},
    {"name": "Kaneez Fatima", "review": "Maine yaha 1 month course Kiya hai free of course or mujhe yaha bahut kuch sikhne ko mila hai yaha mam bhi bahut hi acchi hai yaha ki mera yaha pe bahut hi accha experience rha mujhe yaha aake bahut kuch sikhne ko mila"},
    {"name": "Sadaf Tanweer", "review": "Very nice service.Genuine price I would recommend every one to visit once and take the service.Staffs are very co operative and friendly."},
    {"name": "Bushra Tasneem", "review": "I had an absolutely wonderful experience visiting here . I would definitely recommend Glam Beauty Studio to anyone looking for excellent beauty services."},
    {"name": "MD SHAFIQUE", "review": "I am the student of glam beauty studio.As my experience I was tought everything clearly every makeup look and and hairstyle etc.I am happy with glam beauty studio 💖"},
    {"name": "Richa", "review": "Best Services at reasonable prices. Owner's behaviour is too friendly.. Please visit. 🙂↕️"},
    {"name": "Rahmat Jahan", "review": "Great service received at the parlour. Staff was very friendly and polite and I enjoyed the service and vibe"},
    {"name": "Khushboo Kumari", "review": "I really liked your behavior and your work, it is a very good parlor, you can go there."},
    {"name": "Neelam Aftab", "review": "Wonderful salon. Elegant service is provided by experience, staff and beautician, and one more thing which I’d like the most is guidance to your skin is given at no extra cost and skin treatment is according to the type of your skin. I liked the place"},
    {"name": "Rashda Tarannum Tarannum", "review": "Amazing parlour service is very good 👍 and behavior is also decoram and politeness"},
    {"name": "Momina Moin", "review": "I liked their service very much and the price is very affordable as well, I would like to come again and again.,♥️"},
    {"name": "Labanya Shil", "review": "Today I visited glam beauty studio.. I like there behaviour😍 very much and I got very good service 😊at a very reasonable price .. thankyou so much zeba ji & fiza❤️❤️❤️❤️"},
    {"name": "Zainab Perween", "review": "I'm so impressed with the results! The [specific service, e.g., hair straighting was excellent I am very happy.."},
    {"name": "firoz imam", "review": "Very nice ,I like your work.very very thanx. Glam beauty studio is best in jamshedpur."},
    {"name": "Azharuddin khan", "review": "Good behaviour and smart makeup artist Unexpected bridal makeup"},
    {"name": "Puchku Shil", "review": "Very good service.nise make-up.🥰my feelings is very good 👍"},
    {"name": "Farhat Rehan Ahmad", "review": "My wife visit this place and she was happy and satisfied with the amazing staffs and their hospitality."},
    {"name": "Zoya Ahamad", "review": "Great experience, Fabulous service , Always great to come here !"},
    {"name": "Chanchal", "review": "Great experience... Excellent service 👍 must visit."},
    {"name": "Bablimardi Bablimardi", "review": "Wow very nice I like it"},
    {"name": "Shaheen Parween", "review": "Very good service💕"},
    {"name": "Nikhat Perween", "review": "Amazing services."},
    {"name": "Tilism Bano", "review": "Service is owsm, satisfied"},
    {"name": "Rupsha Dey", "review": "Good service"},
    {"name": "Wafa Khan", "review": "Very good services very satisfied.lov it"},
    {"name": "Humdo Sana", "review": "Amazing service, clean environment, and great results. Highly recommended"}
]

# Provide a list of images to cycle through
images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
]

formatted_testimonials = []
for i, r in enumerate(reviews_data):
    # Escape quotes if necessary
    review_text = r['review'].replace('"', '\\"')
    img = images[i % len(images)]
    formatted_testimonials.append(f'''    {{
        id: {i+1},
        name: "{r['name']}",
        role: "Client",
        review: "{review_text}",
        image: "{img}",
        rating: 5
    }}''')

array_content = "const testimonials = [\n" + ",\n".join(formatted_testimonials) + "\n];"

file_path = r"c:\PROJECTS\beauty-studio\src\components\TestimonialsSection.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the existing array
pattern = re.compile(r'const testimonials = \[.*?\];', re.DOTALL)
new_content = pattern.sub(array_content, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated TestimonialsSection.jsx with all reviews.")
