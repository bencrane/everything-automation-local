import json

# Load new values
with open('dynamic_vars/airtable_data.json', 'r') as f:
    meta = json.load(f)

# Read original index.html
with open('index.html', 'r') as f:
    html = f.read()

# Targeted replacements
html = html.replace(
    '<title>Everything Automation</title>',
    f"<title>{meta['title']}</title>"
).replace(
    'name="description" content="Installable automation systems. Buy once. Own forever."',
    f'name="description" content="{meta["description"]}"'
).replace(
    'name="author" content="Everything Automation"',
    f'name="author" content="{meta["author"]}"'
).replace(
    'property="og:title" content="Everything Automation"',
    f'property="og:title" content="{meta["og_title"]}"'
).replace(
    'property="og:description" content="Installable automation systems. Buy once. Own forever."',
    f'property="og:description" content="{meta["og_description"]}"'
).replace(
    'name="twitter:site" content="@everythingauto"',
    f'name="twitter:site" content="{meta["twitter_site"]}"'
)

# Save modified file
with open('index.html', 'w') as f:
    f.write(html)

print("✅ Metadata injected.")
