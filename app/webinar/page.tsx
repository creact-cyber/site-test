import type { Metadata } from 'next'
import WebinarPage from '@/components/WebinarPage'

export const metadata: Metadata = {
  title: 'Webinar Courses | Price Action Trading Education | The Chartians',
  description:
    'Compare The Chartians educational courses: Index Trading, stock-option breakout setup, and Full Price Action Mastery. SEBI RA INH000024231.',
  alternates: {
    canonical: 'https://thechartians.com/webinar',
  },
}

export default function WebinarRoute() {
  return <WebinarPage />
}
