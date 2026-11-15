from bs4 import BeautifulSoup
import re

with open('awais_site.html', 'r', encoding='utf-8') as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')

print('=== CSS LINKS & STYLES ===')
for link in soup.find_all('link', rel='stylesheet'):
    print(link.get('href'))

# Let's inspect scripts and inline styles or next data
next_data = soup.find('script', id='__NEXT_DATA__')
if next_data:
    print('Found __NEXT_DATA__ length:', len(next_data.string or ''))

# Inspect Hero Section in detail
hero = soup.find('section', id='home')
if hero:
    print('\n=== HERO RAW TEXT & STRUCTURE ===')
    print(hero.prettify()[:2500])

# Inspect Work Section
work = soup.find('section', id='work')
if work:
    print('\n=== WORK SECTION (first project card) ===')
    cards = work.find_all('div', class_=re.compile(r'card|project|item|Work', re.I))
    print(f'Total cards matching: {len(cards)}')
    if cards:
        print(cards[0].prettify()[:2000])

# Inspect Colors & Theme
print('\n=== CSS CLASSES & STYLES ===')
styles = soup.find_all('style')
for s in styles:
    content = s.string or ''
    # Find color definitions or custom properties
    colors = re.findall(r'(--[a-zA-Z0-9_-]+:\s*[^;]+;)', content)
    if colors:
        print('Custom CSS variables:', colors[:30])
        break
