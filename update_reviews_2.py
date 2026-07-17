import re

new_reviews = [
    "Sonam Perveen",
    "Syed Zafar",
    "Noor Saba",
    "Rafique Ahmed",
    "Saiqua Naaz",
    "Priyanshi Singh",
    "Simranjeet Kaur",
    "Md Danish",
    "Rani Kumari",
    "azmi md imtiyaz khan",
    "Nagma Khan",
    "Adeeba Moin"
]

images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
]

formatted_testimonials = []
start_id = 32
for i, name in enumerate(new_reviews):
    img = images[i % len(images)]
    formatted_testimonials.append(f'''    {{
        id: {start_id + i},
        name: "{name}",
        role: "Client",
        review: "Highly recommended! Excellent service at Glam Beauty Studio.",
        image: "{img}",
        rating: 5
    }}''')

new_objects_str = ",\n" + ",\n".join(formatted_testimonials) + "\n];"

file_path = r"c:\PROJECTS\beauty-studio\src\components\TestimonialsSection.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the closing bracket of the array
pattern = re.compile(r'\n\];', re.DOTALL)
new_content = pattern.sub(new_objects_str, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated TestimonialsSection.jsx with 12 additional empty reviews.")
