import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Legal & Policies | The Chartians',
  description:
    'Legal documents for Chartians Market Research Private Limited (SEBI RA INH000024231) — Disclaimer, Terms & Conditions, Privacy Policy, Refund Policy.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://thechartians.com/legal',
  },
}

export default function LegalRoute() {
  return <LegalPage />
}
