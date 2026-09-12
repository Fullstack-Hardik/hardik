import type { Metadata } from 'next';
import Script from 'next/script';
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
    default: 'Hardik Yadav — Full-Stack Developer & AI Builder | Saharanpur',
    template: '%s | Hardik Yadav',
  },
  description:
    'Hardik Yadav is a Full-Stack Developer and AI Builder based in Saharanpur, India. Specializing in React, Next.js, AI integration, and scalable web architectures.',
  keywords: [
    'Hardik Yadav',
    'Full-Stack Developer',
    'AI Builder',
    'Software Engineer',
    'Web Developer Saharanpur',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Machine Learning',
    'UI/UX Designer',
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
    title: 'Hardik Yadav — Full-Stack Developer & AI Builder',
    description:
      'Hardik Yadav is a Full-Stack Developer and AI Builder based in Saharanpur, India. Specializing in React, Next.js, AI integration, and scalable web architectures.',
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
    title: 'Hardik Yadav — Full-Stack Developer & AI Builder',
    description:
      'Full-Stack Developer and AI Builder specializing in React, Next.js, AI integration, and scalable web architectures.',
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
    jobTitle: 'Full-Stack Developer & AI Builder',
    description:
      'Hardik Yadav is a Full-Stack Developer and AI Builder based in Saharanpur, India. He builds modern web applications, AI products, and digital experiences.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saharanpur',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India'
    },
    knowsAbout: ['Full-Stack Development', 'Artificial Intelligence', 'React', 'Next.js', 'Node.js', 'Machine Learning', 'UI/UX Design'],
    sameAs: [
      'https://github.com/Fullstack-Hardik',
      'https://www.linkedin.com/in/hardik-yadav-682016301/'
    ],
    worksFor: {
      '@id': `${SITE_URL}/#organization`
    },
    founder: {
      '@id': `${SITE_URL}/#organization`
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'HRDK Developers',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    founder: {
      '@id': `${SITE_URL}/#person`
    },
    description: 'Software company founded by Hardik Yadav, providing web development, UI/UX, and AI solutions.',
    sameAs: [
      'https://hardikyadav.vercel.app',
      'https://whoishardik.vercel.app',
      'https://hardikchatgpt.vercel.app',
      'https://hardikgoogle.vercel.app',
      'https://hardikai.vercel.app',
      'https://hardiky.vercel.app',
      'https://hardikcoding.vercel.app',
      'https://hardikdeveloper.vercel.app'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Hardik Yadav',
    description: 'Official website of Hardik Yadav, Full-Stack Developer and AI Builder.',
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-US'
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJLWTZ7RH9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJLWTZ7RH9');
          `}
        </Script>

        {/* Google Custom Search Engine */}
        <Script
          src="https://cse.google.com/cse.js?cx=c3e5033ac47574a79"
          strategy="afterInteractive"
        />

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
