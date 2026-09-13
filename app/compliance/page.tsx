import type { Metadata } from 'next'
import CompliancePage from '@/components/CompliancePage'

export const metadata: Metadata = {
  title: 'Compliance | Grievance Redressal | The Chartians',
  description:
    'Compliance documents for Chartians Market Research Private Limited (SEBI RA INH000024231) — Grievance Redressal Policy, Complaint Board, Investor Charter.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://thechartians.com/compliance',
  },
}

export default function ComplianceRoute() {
  return <CompliancePage />
}
