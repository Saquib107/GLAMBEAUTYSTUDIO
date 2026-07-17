import re
import json
import sys

try:
    with open(r"C:\Users\Lenovo\.gemini\antigravity\brain\dd1d0121-01b7-44ea-9c64-cc72d34f0feb\.system_generated\steps\44\content.md", "r", encoding="utf-8") as f:
        content = f.read()

    # Justdial uses Next.js, check __NEXT_DATA__
    match = re.search(r'id="__NEXT_DATA__" type="application/json">({.*?})</script>', content)
    if match:
        data = json.loads(match.group(1))
        # Let's try to find strings that look like reviews
        def find_strings(d, strings):
            if isinstance(d, dict):
                for k, v in d.items():
                    if k in ['review', 'text', 'comment', 'rev_text', 'ReviewText']:
                        if isinstance(v, str) and len(v) > 20:
                            strings.add(v)
                    find_strings(v, strings)
            elif isinstance(d, list):
                for v in d:
                    find_strings(v, strings)
        
        found = set()
        find_strings(data, found)
        
        print("Found possible reviews from Next Data:")
        for s in found:
            print("-", s)
    else:
        print("No Next Data found.")
        
except Exception as e:
    print("Error:", e)
