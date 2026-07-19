import os

# Replacements to make
replacements = {
    # Phone numbers
    "98765 43210": "82940 40050",
    "9876543210": "8294040050",
    
    # Emails
    "info@glambeautystudio.com": "zebarifrzsus@gmail.com",
    
    # Working hours
    '<span className="font-semibold">Mon-Thu, Sat-Sun:</span> 10:00 AM - 8:00 PM': '<span className="font-semibold">Mon-Sun:</span> 10:00 AM - 8:00 PM',
    '<li className="flex items-start gap-4">\n                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">\n                                            <Clock className="h-6 w-6 text-primary" />\n                                        </div>\n                                        <div>\n                                            <h3 className="font-semibold text-lg text-card-foreground">Working Hours</h3>\n                                            <p className="text-muted-foreground mt-1">\n                                                Mon-Thu, Sat-Sun: 10:00 AM - 8:00 PM<br/>\n                                                Except Friday: 4:00 PM to 8:00 PM\n                                            </p>\n                                        </div>\n                                    </li>': '<li className="flex items-start gap-4">\n                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">\n                                            <Clock className="h-6 w-6 text-primary" />\n                                        </div>\n                                        <div>\n                                            <h3 className="font-semibold text-lg text-card-foreground">Working Hours</h3>\n                                            <p className="text-muted-foreground mt-1">\n                                                Mon-Sun: 10:00 AM - 8:00 PM\n                                            </p>\n                                        </div>\n                                    </li>',
    "Open Mon-Sun: 10AM - 8PM": "Mon-Sun - 10AM to 8PM"
}

# The BookingSection has a multi-line Friday block we need to remove
booking_friday_block = '''                                    <div className="flex justify-between items-center text-sm p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                            <span className="font-semibold">Friday:</span> 4:00 PM - 8:00 PM
                                        </div>'''

components_dir = r"c:\PROJECTS\beauty-studio\src\components"

for filename in os.listdir(components_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        original_content = content
        
        # Apply standard replacements
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        # Apply special removal for BookingSection Friday
        if "BookingSection.jsx" in filename:
            content = content.replace(booking_friday_block, "")
            
        if content != original_content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated {filename}")

print("Contact info update complete!")
