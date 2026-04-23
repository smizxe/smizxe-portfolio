import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import '../src/index.css';

const siteUrl = 'https://yangai.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Agency Yangai | Web, App, and AI Systems for Growing Teams',
    template: '%s | Agency Yangai',
  },
  description:
    'Agency Yangai builds premium websites, web apps, and AI automation systems for teams that need clearer positioning, stronger execution, and practical digital products.',
  keywords: [
    'Agency Yangai',
    'Yangai',
    'web agency Vietnam',
    'web app development',
    'AI automation agency',
    'website design',
    'landing page design',
    'OpenAI automation',
    'digital product development',
  ],
  authors: [{ name: 'Agency Yangai', url: siteUrl }],
  creator: 'Agency Yangai',
  publisher: 'Agency Yangai',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Agency Yangai',
    title: 'Agency Yangai | Web, App, and AI Systems for Growing Teams',
    description:
      'Agency Yangai builds premium websites, web apps, and AI automation systems with sharp positioning, strong execution, and practical business clarity.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agency Yangai website preview',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Yangai | Web, App, and AI Systems for Growing Teams',
    description:
      'Premium Web, App, and AI builds for brands that need clearer growth and stronger digital execution.',
    images: ['/og-image.png'],
    creator: '@yangai',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Agency Yangai',
  alternateName: 'Yangai',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    'Agency Yangai builds premium websites, web apps, and AI automation systems for growing teams.',
  founder: {
    '@type': 'Person',
    name: 'Vuong Hoang Giang',
    jobTitle: 'Founder and Developer',
  },
  areaServed: ['Vietnam', 'Global'],
  serviceType: [
    'Website Development',
    'Landing Page Design',
    'Web App Development',
    'AI Automation Integration',
    'Digital Product Development',
  ],
  priceRange: '$$',
  sameAs: ['https://www.facebook.com/smizxe/'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Agency Yangai',
  url: siteUrl,
  inLanguage: ['en', 'vi'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="agency-yangai-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="agency-yangai-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
