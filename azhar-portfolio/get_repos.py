import urllib.request
import json
import re

url = 'https://api.github.com/users/azhar-data/repos?sort=updated&per_page=100'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print(f'Total repos found via API: {len(data)}')
        with open('github_repos.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
        for r in data:
            print(f"- {r.get('name')}: {r.get('description')} ({r.get('language')}) -> {r.get('html_url')}")
except Exception as e:
    print('API Error:', e)
    # Scraping fallback
    purl = 'https://github.com/azhar-data?tab=repositories'
    req2 = urllib.request.Request(purl, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req2) as resp2:
            html = resp2.read().decode('utf-8')
            with open('github_repos.html', 'w', encoding='utf-8') as f:
                f.write(html)
            repos = re.findall(r'href="/azhar-data/([^"/]+)"\s+itemprop="name codeRepository"', html)
            print('Scraped Repos:', repos)
    except Exception as e2:
        print('Scrape Error:', e2)
