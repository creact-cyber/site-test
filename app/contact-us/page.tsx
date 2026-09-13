import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Contact The Chartians | SEBI RA Research Analyst Support',
  description:
    'Reach out to The Chartians for queries about our SEBI-registered research advisory service, subscription plans, or compliance matters.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/contact-us',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://thechartians.com/contact-us' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 border-b border-surface-dark pb-6">
            Contact The Chartians
          </h1>
          <p className="text-xl text-ink/70 mb-12">
            Reach us for subscription queries, support, or compliance matters. Our team is available
            9 AM – 6 PM, Monday to Saturday.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-primary mb-4">Support &amp; Subscriptions</h2>
              <dl className="space-y-3 text-ink/70">
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd>
                    <a href="mailto:chartiansresearch@gmail.com" className="text-primary underline">
                      chartiansresearch@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Phone / WhatsApp</dt>
                  <dd>
                    <a href="tel:+919274387982" className="text-primary underline">
                      +91 9274387982
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Telegram Support</dt>
                  <dd>
                    <a href="https://t.me/chartiansadmin" target="_blank" rel="noreferrer" className="text-primary underline">
                      @chartiansadmin
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-primary mb-4">Registered Address</h2>
              <address className="not-italic text-ink/70 space-y-1">
                <p>Chartians Market Research Private Limited</p>
                <p>SEBI RA: INH000024231</p>
                <p>509, Laxmi Enclave-2</p>
                <p>Opp Gajera School, Katargaam</p>
                <p>Surat – 395004</p>
                <p>Gujarat, India</p>
              </address>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-primary mb-4">Compliance Queries</h2>
              <p className="text-ink/70 mb-3">
                For compliance, grievances, or SEBI-related matters, please refer to our{' '}
                <a href="/compliance" className="text-primary underline">Compliance page</a> or
                contact our Compliance Officer directly.
              </p>
              <dl className="space-y-2 text-ink/70">
                <div>
                  <dt className="font-semibold text-ink">Compliance Officer</dt>
                  <dd>Rajnikant K. Bhalani</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">SEBI SCORES Portal</dt>
                  <dd>
                    <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer" className="text-primary underline">
                      scores.sebi.gov.in
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-primary mb-4">Join Our Community</h2>
              <p className="text-ink/70 mb-4">
                Follow our free Telegram channel for market updates and educational content.
              </p>
              <a
                href="https://t.me/chartians"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#1C7EA6] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1C7EA6]/90 transition-colors"
              >
                Join Free Telegram Channel →
              </a>
            </div>

          </div>

          <div className="mt-12 p-6 bg-surface-light rounded-2xl border border-surface-dark text-sm text-ink/55">
            <p>
              Securities market investments are subject to market risks. Please read all related documents
              carefully before investing. Past performance is not indicative of future results.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
