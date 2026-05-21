import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import '../src/index.css';

const siteUrl = 'https://yangai.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Agency Yangai | Thiết kế Website, Web App & Hệ thống AI cho doanh nghiệp',
    template: '%s | Agency Yangai',
  },
  description:
    'Agency Yangai — đơn vị chuyên thiết kế website, web app và hệ thống AI automation tại Việt Nam. Build gọn, định vị rõ, vận hành mượt cho team đang phát triển. Yangai builds premium websites, web apps & AI systems for growing teams.',
  keywords: [
    'Agency Yangai',
    'Yangai',
    'yangai.tech',
    'agency thiết kế website',
    'thiết kế website chuyên nghiệp',
    'web agency Vietnam',
    'web app development',
    'agency AI Việt Nam',
    'AI automation agency',
    'làm web trọn gói',
    'thiết kế landing page',
    'phát triển web app',
    'OpenAI workflow',
    'chatbot doanh nghiệp',
    'lập trình web app freelancer',
    'Vương Hoàng Giang',
    'digital product development',
  ],
  authors: [{ name: 'Agency Yangai', url: siteUrl }],
  creator: 'Agency Yangai',
  publisher: 'Agency Yangai',
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/?lang=vi',
      'en-US': '/?lang=en',
      'x-default': '/',
    },
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
    title: 'Agency Yangai | Web, App & AI Systems for Growing Teams',
    description:
      'Agency Yangai builds premium websites, web apps, and AI automation systems with sharp positioning, strong execution, and practical business clarity. Thiết kế Web, App & AI cho thương hiệu muốn phát triển nghiêm túc.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agency Yangai — Web, App & AI build studio',
      },
    ],
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Yangai | Web, App & AI Systems',
    description:
      'Premium Web, App, and AI builds for brands that need clearer growth and stronger digital execution.',
    images: ['/og-image.png'],
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
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: 'Agency Yangai',
  alternateName: ['Yangai', 'Agency Yangai Vietnam'],
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  description:
    'Agency Yangai is a Vietnam-based build studio focused on premium websites, web apps and AI automation systems for growing teams.',
  founder: {
    '@type': 'Person',
    name: 'Vuong Hoang Giang',
    alternateName: 'Vương Hoàng Giang',
    jobTitle: 'Founder and Developer',
    url: siteUrl,
    sameAs: ['https://www.facebook.com/smizxe/'],
  },
  foundingDate: '2023',
  areaServed: [
    { '@type': 'Country', name: 'Vietnam' },
    { '@type': 'Place', name: 'Global' },
  ],
  knowsAbout: [
    'Web Development',
    'Landing Page Design',
    'Web Application Development',
    'Mobile Application Development',
    'AI Automation',
    'OpenAI Integration',
    'Chatbot Development',
    'UX/UI Design',
    'Brand Positioning',
  ],
  knowsLanguage: ['vi', 'en'],
  serviceType: [
    'Website Development',
    'Landing Page Design',
    'Web App Development',
    'AI Automation Integration',
    'Digital Product Development',
  ],
  priceRange: '$$',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-388-307-551',
    email: 'vuonghoanggiang0811@gmail.com',
    contactType: 'customer support',
    availableLanguage: ['Vietnamese', 'English'],
    areaServed: ['VN', 'Global'],
  },
  sameAs: ['https://www.facebook.com/smizxe/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agency Yangai Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website & Landing Page Design',
          description:
            'Premium landing pages and brand websites built for clarity, trust and conversion.',
          serviceType: 'Web Design',
          provider: { '@id': `${siteUrl}/#organization` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web App & Mobile Product Development',
          description:
            'Web apps, mobile apps and internal tools shaped around real team workflows.',
          serviceType: 'Web Application Development',
          provider: { '@id': `${siteUrl}/#organization` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & Automation Systems',
          description:
            'Chatbots, OpenAI workflows and automation that remove repetitive work and surface useful actions.',
          serviceType: 'AI Automation',
          provider: { '@id': `${siteUrl}/#organization` },
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Agency Yangai',
  url: siteUrl,
  inLanguage: ['vi-VN', 'en-US'],
  publisher: { '@id': `${siteUrl}/#organization` },
  potentialAction: {
    '@type': 'ReadAction',
    target: [`${siteUrl}/`],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Work', item: `${siteUrl}/#work` },
    { '@type': 'ListItem', position: 4, name: 'Story', item: `${siteUrl}/#story` },
    { '@type': 'ListItem', position: 5, name: 'Reviews', item: `${siteUrl}/#testimonials` },
    { '@type': 'ListItem', position: 6, name: 'Contact', item: `${siteUrl}/#contact` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Agency Yangai cung cấp những dịch vụ gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agency Yangai cung cấp ba mảng chính: (1) Thiết kế website và landing page premium, (2) Phát triển web app, mobile app và công cụ nội bộ, (3) Tích hợp AI automation, chatbot và OpenAI workflow. Mỗi mảng đều được làm trọn gói từ định hướng, thiết kế đến triển khai.',
      },
    },
    {
      '@type': 'Question',
      name: 'Yangai khác gì so với các agency thiết kế website thông thường?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yangai là một studio nhỏ do founder Vương Hoàng Giang trực tiếp code, thiết kế và bàn giao. Không có nhiều lớp account manager, không dùng template chung. Mỗi dự án được xử lý sát từ định vị, art direction đến implementation cuối cùng.',
      },
    },
    {
      '@type': 'Question',
      name: 'Yangai có làm AI và tích hợp OpenAI không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Có. Yangai chuyên thiết kế hệ thống AI automation, chatbot, và OpenAI workflow tích hợp vào sản phẩm thực tế của doanh nghiệp. Mục tiêu là xử lý các tác vụ lặp lại, tăng tốc vận hành và để con người tập trung vào phần thực sự cần đến chuyên môn.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical Yangai project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most landing pages ship within 2-3 weeks. Full web apps and AI systems typically take 4-8 weeks depending on scope. Yangai keeps a lean process so momentum stays high without skipping the questions that matter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Yangai work with international clients outside Vietnam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Yangai works with brands and growing teams globally. Communication is handled in Vietnamese or English, and all deliverables are shipped remotely with clear async handoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chi phí làm việc với Yangai khoảng bao nhiêu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mỗi dự án có scope khác nhau nên Yangai luôn báo giá sau khi nhận brief. Mức giá trung bình ($$) — hợp lý với chất lượng và mức độ chăm chút. Gửi brief qua form trên website hoặc Zalo để nhận hướng đi cụ thể.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="alternate" hrefLang="vi-VN" href={`${siteUrl}/?lang=vi`} />
        <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
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
        <Script
          id="agency-yangai-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="agency-yangai-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
