from bs4 import BeautifulSoup

with open('awais_site.html', 'r', encoding='utf-8') as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')

contact = soup.find(id='contact')
if contact:
    print('=== AWAIS CONTACT SECTION ===')
    print(contact.prettify()[:4000])

hero_socials = soup.find('div', class_=lambda c: c and 'social' in c.lower()) or soup.find(id='home')
if hero_socials:
    print('\n=== AWAIS HERO SOCIALS ===')
    # search for connect text
    for div in hero_socials.find_all('div'):
        if 'connect' in div.get_text(strip=True).lower() and len(div.get_text(strip=True)) < 30:
            print(div.parent.prettify()[:1500])
            break
