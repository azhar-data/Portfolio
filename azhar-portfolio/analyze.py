from bs4 import BeautifulSoup
import re

with open('awais_site.html', 'r', encoding='utf-8') as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')

print('=== NAV / HEADER ===')
header = soup.find('header') or soup.find('nav')
if header:
    print(header.get_text(separator=' | ', strip=True))

print('\n=== ALL SECTIONS & IDS ===')
sections = soup.find_all('section')
print(f'Total sections: {len(sections)}')
for s in sections:
    sid = s.get('id', 'NO_ID')
    classes = ' '.join(s.get('class', []))
    h = s.find(['h1', 'h2', 'h3'])
    htext = h.get_text(strip=True) if h else 'No heading'
    print(f'Section id: {sid} | heading: {htext} | class: {classes[:60]}')

print('\n=== PROJECTS ===')
projects_section = soup.find(id='projects') or soup.find(id='work')
if projects_section:
    for h in projects_section.find_all(['h3', 'h4']):
        print('Project:', h.get_text(strip=True))

print('\n=== ALL H2 / H3 ===')
for h in soup.find_all(['h1', 'h2', 'h3']):
    print(f'{h.name}: {h.get_text(strip=True)}')

print('\n=== BUTTONS & CTAS ===')
for btn in soup.find_all(['button', 'a']):
    t = btn.get_text(strip=True)
    if t and len(t) < 40 and any(w in t.lower() for w in ['project', 'contact', 'resume', 'hire', 'talk', 'connect', 'case study', 'github']):
        print(f'{btn.name} ({btn.get("href", "")}): {t}')
