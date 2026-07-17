import re

src_file = r"c:\PROJECTS\beauty-studio\src\components\TestimonialsSection.jsx"
dest_file = r"c:\PROJECTS\beauty-studio\src\components\TestimonialCarousel.jsx"

with open(src_file, "r", encoding="utf-8") as f:
    src_content = f.read()

# Extract the array from TestimonialsSection.jsx
match = re.search(r'const testimonials = (\[.*?\]);', src_content, re.DOTALL)
if match:
    array_str = match.group(1)
    
    # Replace 'review:' with 'text:' and 'role:' with 'service:' to match TestimonialCarousel format
    # The image urls might have different query params but that's fine
    new_array_str = array_str.replace('review:', 'text:').replace('role:', 'service:')
    
    with open(dest_file, "r", encoding="utf-8") as f:
        dest_content = f.read()
        
    dest_pattern = re.compile(r'const testimonials = \[.*?\];', re.DOTALL)
    new_dest_content = dest_pattern.sub(f"const testimonials = {new_array_str};", dest_content)
    
    with open(dest_file, "w", encoding="utf-8") as f:
        f.write(new_dest_content)
        
    print("Successfully updated TestimonialCarousel.jsx")
else:
    print("Failed to find testimonials array in TestimonialsSection.jsx")
