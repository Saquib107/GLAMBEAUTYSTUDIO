import re
import json

# Read raw text
with open("raw_reviews.txt", "r", encoding="utf-8") as f:
    raw_text = f.read()

# Split raw text into lines
lines = [line.strip() for line in raw_text.split('\n') if line.strip()]

# Helper to find owner reply after a given name
def get_owner_reply(name):
    # Find the line index of the name
    start_idx = -1
    for i, line in enumerate(lines):
        if line == name:
            start_idx = i
            break
    
    if start_idx == -1:
        return ""
        
    # Scan forward from start_idx for "Glam Beauty Studio (owner)"
    # We should stop if we hit another known name, but for simplicity we'll just look for the first owner reply
    # before the next "Glam Beauty Studio (owner)" or next name.
    # Actually, just look for the next "Glam Beauty Studio (owner)" within the next 30 lines
    for i in range(start_idx, min(start_idx + 30, len(lines))):
        if lines[i] == "Glam Beauty Studio (owner)":
            # The next line is the time (e.g. "a year ago")
            # The line after that is the reply
            if i + 2 < len(lines):
                reply = lines[i+2]
                # If the reply is empty or just another known string, we might need to handle it
                # But usually it's the reply text.
                # If reply is "See translation (English)", skip it and take next line
                if reply == "See translation (English)":
                    reply = lines[i+3]
                
                # If the reply spans multiple lines, we might miss some, but in our dump they seem to be 1 line.
                return reply.replace('"', '\\"')
    return ""

# Read existing TestimonialCarousel.jsx
file_path = r"c:\PROJECTS\beauty-studio\src\components\TestimonialCarousel.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We need to extract the existing testimonials array
match = re.search(r'const testimonials = (\[.*?\]);', content, re.DOTALL)
if match:
    array_str = match.group(1)
    
    # We will use eval-like parsing or regex to add ownerReply
    # Easiest way: regex to find name and inject ownerReply
    names = re.findall(r'name:\s*"([^"]+)"', array_str)
    
    new_array_str = array_str
    for name in names:
        reply = get_owner_reply(name)
        if reply:
            # find the block for this name and insert ownerReply
            # pattern: name: "Name", ... image: "url", \n rating: 5
            # We'll just replace `rating: 5` with `rating: 5, ownerReply: "reply"`
            
            # Since names are unique enough, we can find the block
            block_pattern = r'(name:\s*"' + re.escape(name) + r'".*?rating:\s*5)'
            
            def replacer(m):
                return m.group(1) + f',\n        ownerReply: "{reply}"'
                
            new_array_str = re.sub(block_pattern, replacer, new_array_str, flags=re.DOTALL)

    # Now replace the array in the file
    content = content.replace(array_str, new_array_str)

    # 2. Fix the dots overflow:
    # Find the dots indicator div and replace it
    dots_pattern = r'\{/\* Dots Indicator \*/\}.*?</div>'
    
    new_indicator = '''{/* Number Indicator */}
                            <div className="flex items-center justify-center font-semibold text-[#8B5E3C] bg-[#FAF7F4] px-6 py-2 rounded-full shadow-sm border border-[#E8CBAF]">
                                {currentIndex + 1} / {testimonials.length}
                            </div>'''
                            
    content = re.sub(dots_pattern, new_indicator, content, flags=re.DOTALL)
    
    # 3. Add owner reply UI
    # Find: </p>\n                                    </div>\n                                </div>
    ui_insert_pattern = r'(<p className="text-\[#8B5E3C\] leading-relaxed italic">.*?\{testimonial\.text\}".*?</p>)'
    
    owner_ui = '''$1
                                        {testimonial.ownerReply && (
                                            <div className="mt-6 p-4 bg-[#F5E6D3] rounded-xl border border-[#E8CBAF] relative">
                                                <div className="absolute -top-2 left-6 w-4 h-4 bg-[#F5E6D3] border-l border-t border-[#E8CBAF] transform rotate-45"></div>
                                                <p className="text-sm font-bold text-[#2B1D17] mb-1">Glam Beauty Studio (Owner)</p>
                                                <p className="text-sm text-[#8B5E3C] leading-relaxed">{testimonial.ownerReply}</p>
                                            </div>
                                        )}'''
                                        
    content = re.sub(ui_insert_pattern, owner_ui, content, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("Successfully updated TestimonialCarousel.jsx with owner replies and removed dots.")
else:
    print("Could not find testimonials array.")
