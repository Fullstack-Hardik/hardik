import type { Metadata } from 'next';
import './globals.css';

import ClickSpark from '@/components/ui/ClickSpark';
import SmoothScroll from '@/components/ui/SmoothScroll';

const SITE_URL = 'https://hardikyadav.vercel.app';

export const metadata: Metadata = {
  verification: {
    google: 'G-MCfspvx9O7zZA50yCn9vyam-q_GCguhEWLJwNp9vw',
  },
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hardik Yadav — Full-Stack Developer, Software Engineer & AI Builder',
    template: '%s | Hardik Yadav',
  },
  description:
    'Hardik Yadav is a full-stack developer and software engineer building modern web applications, AI products, APIs and digital experiences with React, Next.js, Node.js and modern cloud technologies.',
  keywords: [
    'Hardik Yadav',
    'Hardik developer',
    'Hardik full stack developer',
    'Hardik coding',
    'Hardik software engineer',
    'Hardik React developer',
    'Hardik Next.js developer',
    'Hardik Node.js developer',
    'full stack developer',
    'web developer India',
    'React developer',
    'Next.js developer',
    'Node.js developer',
  ],
  authors: [{ name: 'Hardik Yadav', url: SITE_URL }],
  creator: 'Hardik Yadav',
  publisher: 'Hardik Yadav',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Hardik Yadav',
    title: 'Hardik Yadav — Full-Stack Developer, Software Engineer & AI Builder',
    description:
      'Hardik Yadav is a full-stack developer and software engineer building modern web applications, AI products, APIs and digital experiences with React, Next.js, Node.js and modern cloud technologies.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Hardik Yadav — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardik Yadav — Full-Stack Developer, Software Engineer & AI Builder',
    description:
      'Full-stack developer building web applications, AI products and APIs with React, Next.js and Node.js.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Hardik Yadav',
    alternateName: ['Hardik', 'HRDK'],
    url: SITE_URL,
    jobTitle: 'Full-Stack Developer',
    description:
      'Full-stack developer and software engineer building web applications, APIs, AI products and digital experiences.',
    sameAs: [
      'https://github.com/Fullstack-Hardik',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Hardik Yadav',
    description: 'Official website of Hardik Yadav, full-stack developer and software engineer.',
    publisher: { '@id': `${SITE_URL}/#person` },
  };

  return (
    <html lang="en" className="motion-pending">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <SmoothScroll>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </SmoothScroll>
      </body>
    </html>
  );
}
