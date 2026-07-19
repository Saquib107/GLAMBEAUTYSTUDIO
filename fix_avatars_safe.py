import urllib.parse
import re

files = [
    r"c:\PROJECTS\beauty-studio\src\components\TestimonialsSection.jsx",
    r"c:\PROJECTS\beauty-studio\src\components\TestimonialCarousel.jsx"
]

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    current_name = None
    for i in range(len(lines)):
        line = lines[i]
        
        # Check if line has a name
        name_match = re.search(r'name:\s*"([^"]+)"', line)
        if name_match:
            current_name = name_match.group(1)
            
        # Check if line has an image and we have a name
        if current_name and 'image: "' in line and 'unsplash.com' in line:
            encoded = urllib.parse.quote_plus(current_name)
            avatar_url = f"https://ui-avatars.com/api/?name={encoded}&background=random&color=fff&size=150&font-size=0.33&bold=true"
            
            # replace the unsplash URL with the new URL
            lines[i] = re.sub(r'image:\s*"[^"]+"', f'image: "{avatar_url}"', line)
            
    # For TestimonialCarousel.jsx, also fix the slide logic
    content = "".join(lines)
    if "TestimonialCarousel.jsx" in file_path:
        content = content.replace("setCurrentIndex((prev) => (prev + 1) % testimonials.length)", "setCurrentIndex((prev) => (prev + 3) % testimonials.length)")
        content = content.replace("setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)", "setCurrentIndex((prev) => {\n            let next = prev - 3;\n            while (next < 0) next += testimonials.length;\n            return next % testimonials.length;\n        })")
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Safely updated avatars and slide logic!")
