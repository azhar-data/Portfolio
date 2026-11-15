import urllib.request
import json
import base64

with open('github_repos.json', 'r', encoding='utf-8') as f:
    repos = json.load(f)

for r in repos:
    name = r['name']
    if name in ['azhar-data', 'Portfolio']:
        continue
    print(f"\n================ {name} ================")
    # Try fetching README.md
    readme_url = f"https://api.github.com/repos/azhar-data/{name}/readme"
    req = urllib.request.Request(readme_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            content = base64.b64decode(data['content']).decode('utf-8', errors='ignore')
            print(f"README ({len(content)} chars):")
            print(content[:800])
    except Exception as e:
        print(f"No README via API: {e}")
        # Try fetching file tree
        contents_url = f"https://api.github.com/repos/azhar-data/{name}/contents"
        req2 = urllib.request.Request(contents_url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req2) as resp2:
                files = json.loads(resp2.read().decode('utf-8'))
                file_names = [f['name'] for f in files]
                print(f"Files in root: {file_names}")
        except Exception as e2:
            print(f"Error fetching files: {e2}")
