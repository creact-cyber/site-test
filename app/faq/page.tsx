import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'FAQ — The Chartians | SEBI RA Research Advisory India',
  description:
    "Frequently asked questions about The Chartians' SEBI-registered research services, trade recommendations, risk management, and subscription plans.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/faq',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://thechartians.com/faq' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is The Chartians' experience in the Indian market?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Chartians has been providing research recommendations to traders in the Indian equity market for 6+ years. As SEBI-registered Research Analysts (INH000024231), we adhere to regulatory standards and focus on pure price action analysis without reliance on lagging indicators.',
      },
    },
    {
      '@type': 'Question',
      name: "What is The Chartians' SEBI Registration number?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our SEBI Registration number is INH000024231. We are a fully compliant Research Analyst firm dedicated to providing transparent, logic-based market analysis and educational content.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of research services does The Chartians provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide SEBI-compliant research recommendations for Swing Trading (cash stocks), F&O Index Option Buying (Nifty and BankNifty), and combined F&O + Swing plans. All recommendations include defined entry, stop-loss, and target levels. We are Research Analysts, not Investment Advisers, and do not manage portfolios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee trading returns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Securities market investments are subject to market risks. The Chartians provides research-based recommendations only. Past performance of our research is not indicative of future results. Please read all related documents carefully before investing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I receive trade recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recommendations are delivered through our SEBI-compliant Telegram research groups. Upon subscription, you will receive an invitation link. All trade setups include logic explanation, entry price, stop-loss, and target levels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which segment is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are new to the markets, we highly recommend starting with our Swing Trading plan (Cash Stocks). It carries relatively lower risk compared to FNO and gives you ample time to execute trades and learn price action logic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I share my group access with a friend or family member?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The subscription is strictly for a single user. Forwarding messages or sharing channel access is a violation of our terms and policies, which will lead to immediate termination of services without a refund.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my payment fails or gets deducted but I don\'t get access?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the amount is deducted but the transaction failed, it is usually auto-refunded by the gateway within 5-7 working days. If the transaction was successful, please share the payment ID with our support team to get your access manually approved.',
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <div className="pt-32 pb-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-ink/70 text-center max-w-2xl mx-auto">
            Everything you need to know about our SEBI-registered research advisory service.
          </p>
        </div>
      </div>
      <FAQ />
    </>
  )
}
