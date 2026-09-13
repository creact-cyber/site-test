import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEBIDisclaimer from '@/components/SEBIDisclaimer'
import SkipNav from '@/components/SkipNav'
import Ticker from '@/components/Ticker'
import StarBackground from '@/components/StarBackground'
import EnquiryForm from '@/components/EnquiryForm'
import FloatingChat from '@/components/FloatingChat'
import Script from 'next/script'
import { MotionConfig } from 'framer-motion'

export const metadata: Metadata = {
  metadataBase: new URL('https://thechartians.com'),
  title: {
    default: 'The Chartians | SEBI Registered Research Analyst (INH000024231) | Swing & F&O Trading India',
    template: '%s | The Chartians',
  },
  description:
    "India's transparent, logic-based Swing Trading and F&O research by SEBI RA INH000024231. Price action setups, Nifty/BankNifty option strategies, and trading education. Join 50,000+ traders.",
  openGraph: {
    type: 'website',
    siteName: 'The Chartians',
    images: [
      {
        url: '/images/og-banner.svg',
        width: 1200,
        height: 630,
        alt: 'The Chartians — SEBI Registered Research Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/chartians-logo.svg',
    apple: '/images/chartians-logo.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Chartians',
  legalName: 'Chartians Market Research Private Limited',
  url: 'https://thechartians.com',
  logo: 'https://thechartians.com/images/chartians-logo.svg',
  description:
    'SEBI Registered Research Analyst providing logic-based Swing Trading and F&O research for Indian markets.',
  telephone: '+919274387982',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '509, Laxmi Enclave-2, Opp Gajera School, Katargaam',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    postalCode: '395004',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'chartiansresearch@gmail.com',
    telephone: '+919274387982',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.youtube.com/@chartians',
    'https://t.me/chartians',
    'https://x.com/chartians',
    'https://www.instagram.com/the.chartians/',
  ],
  identifier: {
    '@type': 'PropertyValue',
    name: 'SEBI Registration Number',
    value: 'INH000024231',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0T6G2L9X3K"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0T6G2L9X3K');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink overflow-x-hidden font-sans">
        <MotionConfig reducedMotion="user" transition={{ type: 'spring', bounce: 0, duration: 0.4 }}>
          <SkipNav />
          <StarBackground />
          <Ticker />
          <Navigation />
          <main id="main-content" className="flex-grow pt-24" role="main" tabIndex={-1}>
            {children}
          </main>
          <section aria-label="Enquiry Form">
            <EnquiryForm />
          </section>
          <SEBIDisclaimer />
          <Footer />
          <FloatingChat />
        </MotionConfig>
      </body>
    </html>
  )
}
