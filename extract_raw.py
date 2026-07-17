import re
import json

transcript_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\dd1d0121-01b7-44ea-9c64-cc72d34f0feb\.system_generated\logs\transcript.jsonl"
raw_text = ""
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT' and 'Google review summary' in data.get('content', ''):
                raw_text = data.get('content')
                break
        except:
            pass

print("Found raw text:", bool(raw_text))

# Let's write the raw text to a file so we can easily inspect it if needed
with open("raw_reviews.txt", "w", encoding="utf-8") as f:
    f.write(raw_text)

