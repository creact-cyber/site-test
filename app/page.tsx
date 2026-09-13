import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import TestimonialsV2 from '@/components/TestimonialsV2'
import Pricing from '@/components/Pricing'
import HowToJoin from '@/components/HowToJoin'
import Masterclass from '@/components/Masterclass'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Articles from '@/components/Articles'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ComplaintOverview from '@/components/ComplaintOverview'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'The Chartians | SEBI Registered Research Analyst (INH000024231) | Swing & F&O Trading India',
  description:
    "India's transparent, logic-based Swing Trading and F&O research by SEBI RA INH000024231. Price action setups, Nifty/BankNifty option strategies, and trading education. Join 50,000+ traders.",
  openGraph: {
    title: 'The Chartians — SEBI RA | Swing & F&O Research India',
    description:
      'Catch breakouts before they happen. Logic-based Swing & F&O research by SEBI Registered Research Analyst INH000024231.',
    url: 'https://thechartians.com/',
    images: [
      {
        url: '/images/og-banner.svg',
        width: 1200,
        height: 630,
        alt: 'The Chartians — SEBI Registered Research Analyst',
      },
    ],
  },
  alternates: {
    canonical: 'https://thechartians.com/',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Chartians',
  url: 'https://thechartians.com',
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={websiteSchema} />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <BentoGrid />
      </div>
      <TestimonialsV2 />
      <div id="plans">
        <Pricing />
      </div>
      <HowToJoin />
      <Masterclass />
      <Socials />
      <Stats />
      <HowItWorks />
      <div id="insights">
        <Articles />
      </div>
      <Testimonials />
      <FAQ />
      <ComplaintOverview />
    </>
  )
}
