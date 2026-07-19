import re

src_file = r"c:\PROJECTS\beauty-studio\src\components\TestimonialsSection.jsx"
dest_file = r"c:\PROJECTS\beauty-studio\src\components\TestimonialCarousel.jsx"

# Read perfectly intact testimonials from TestimonialsSection.jsx
with open(src_file, "r", encoding="utf-8") as f:
    src_content = f.read()

match = re.search(r'const testimonials = (\[.*?\]);', src_content, re.DOTALL)
if match:
    array_str = match.group(1)
    
    # Convert format for TestimonialCarousel
    new_array_str = array_str.replace('review:', 'text:').replace('role:', 'service:')
    
    with open(dest_file, "r", encoding="utf-8") as f:
        dest_content = f.read()
        
    # 1. Replace the array
    dest_pattern = re.compile(r'const testimonials = \[.*?\];', re.DOTALL)
    new_dest_content = dest_pattern.sub(f"const testimonials = {new_array_str};", dest_content)
    
    # 2. Remove the ownerReply UI that we added earlier
    owner_ui_pattern = r'\{testimonial\.ownerReply && \(\s*<div className="mt-6 p-4 bg-\[#F5E6D3\].*?</p>\s*</div>\s*\)\}'
    new_dest_content = re.sub(owner_ui_pattern, '', new_dest_content, flags=re.DOTALL)
    
    with open(dest_file, "w", encoding="utf-8") as f:
        f.write(new_dest_content)
        
    print("Successfully restored TestimonialCarousel.jsx with original comments and removed owner replies.")
else:
    print("Failed to find testimonials array in TestimonialsSection.jsx")
