import type { Metadata } from 'next'
import Pricing from '@/components/Pricing'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Trading Research Plans | FNO + Swing Advisory | The Chartians SEBI RA',
  description:
    'Choose your research plan — FNO option buying setups, Swing/positional stock picks, or combined F&O + Swing service. All plans by SEBI-registered Research Analyst INH000024231.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/our-plans',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Plans', item: 'https://thechartians.com/our-plans' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Financial Research Advisory',
  provider: {
    '@type': 'Organization',
    name: 'The Chartians',
    url: 'https://thechartians.com',
  },
  description:
    'SEBI-registered research recommendations for Swing Trading and F&O Index Option Buying in Indian markets.',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Research Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'FNO Research Plan',
          description:
            'Intraday and positional Nifty/BankNifty option buying setups with defined SL and targets.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Swing Trading Research Plan',
          description:
            'Positional cash stock breakout setups with price action logic, SL, and targets. R:R 1:2 and above only.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'FNO + Swing Combined Plan',
          description:
            'Full access to both F&O index option buying and swing/positional cash stock research recommendations.',
        },
      },
    ],
  },
}

export default function OurPlansPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <div className="pt-32 pb-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            SEBI-Registered Research Plans
          </h1>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            Choose the right research plan for your trading style. All recommendations are by SEBI RA
            INH000024231 with defined entry, stop-loss, and target levels.
          </p>
        </div>
      </div>
      <Pricing />
    </>
  )
}
