from bs4 import BeautifulSoup

with open('awais_site.html', 'r', encoding='utf-8') as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')

print('--- GITHUB SVG ---')
for svg in soup.find_all('svg', class_='lucide-github'):
    print(svg.prettify())
    break

print('\n--- LINKEDIN SVG ---')
for svg in soup.find_all('svg', class_='lucide-linkedin'):
    print(svg.prettify())
    break

print('\n--- WHATSAPP SVG ---')
for a in soup.find_all('a', href=lambda h: h and 'wa.me' in h):
    svg = a.find('svg')
    if svg:
        print(svg.prettify())
        break
