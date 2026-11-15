import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { hero, about } from '@/data/content';
import ThemeProvider from '@/components/providers/ThemeProvider';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A0F1C',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://azhar-data.github.io'),
  title: {
    default: `${hero.name} | ${hero.title} & AI Architect`,
    template: `%s | ${hero.name}`,
  },
  description: `${hero.name} is an AI Engineer specializing in Machine Learning, Deep Learning, Natural Language Processing, and Agentic AI. Explore projects, case studies, and technical expertise.`,
  keywords: [
    'Muhammad Azhar',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Agentic AI',
    'Generative AI',
    'RAG',
    'LangChain',
    'FastAPI',
    'Python',
    'Data Science Lahore',
    'Pakistan AI Engineer',
  ],
  authors: [{ name: hero.name, url: 'https://github.com/azhar-data' }],
  creator: hero.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azhar-data.github.io',
    title: `${hero.name} | ${hero.title}`,
    description: hero.headline,
    siteName: `${hero.name} Portfolio`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${hero.name} - AI Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hero.name} | ${hero.title}`,
    description: hero.headline,
    images: ['/images/og-image.png'],
    creator: '@azhar_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: hero.name,
    jobTitle: hero.title,
    description: about.bio,
    url: 'https://azhar-data.github.io',
    sameAs: [
      'https://github.com/azhar-data',
      'https://www.linkedin.com/in/muhammad-azhar-ai-engin',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Agentic AI',
      'Natural Language Processing',
      'Large Language Models',
      'Python',
      'FastAPI',
      'TensorFlow',
      'PyTorch',
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-navy-950 text-muted font-sans antialiased selection:bg-accent-blue/30 selection:text-white">
        <ThemeProvider>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
