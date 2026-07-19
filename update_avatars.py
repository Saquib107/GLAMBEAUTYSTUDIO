import re
import urllib.parse

file_path = r"c:\PROJECTS\beauty-studio\src\components\TestimonialCarousel.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to replace the image URL with a UI Avatar based on the user's name
# Pattern to match a block like: name: "Sahel Ali", ... image: "url"
def replacer(match):
    name = match.group(1)
    encoded_name = urllib.parse.quote_plus(name)
    avatar_url = f"https://ui-avatars.com/api/?name={encoded_name}&background=random&color=fff&size=150&font-size=0.33&bold=true"
    
    original_block = match.group(0)
    image_url_match = match.group(2)
    
    new_block = original_block.replace(image_url_match, f'"{avatar_url}"')
    return new_block

pattern = r'(name:\s*"([^"]+)".*?image:\s*)("[^"]+")'

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated avatars in TestimonialCarousel.jsx")
