import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "About The Chartians | SEBI RA INH000024231 | Price Action Trading Experts",
  description:
    "Meet the team behind The Chartians — SEBI-registered Research Analysts with 6+ years of experience in pure price action trading, Swing setups, and F&O research for Indian markets.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/about-us',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://thechartians.com/about-us' },
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rajnikant K. Bhalani',
  jobTitle: 'SEBI Registered Research Analyst & Compliance Officer',
  worksFor: {
    '@type': 'Organization',
    name: 'Chartians Market Research Private Limited',
    url: 'https://thechartians.com',
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={personSchema} />

      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70 mb-8">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium">About Us</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 border-b border-surface-dark pb-6">
            About The Chartians — India&apos;s Transparent F&amp;O &amp; Swing Research Team
          </h1>

          {/* Who We Are */}
          <section className="mb-12" aria-labelledby="who-we-are">
            <h2 id="who-we-are" className="text-2xl md:text-3xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-4">
              The Chartians is a SEBI-registered Research Analyst entity (Registration No.{' '}
              <strong className="text-ink">INH000024231</strong>, BSE Enlistment: 5641) providing
              independent research recommendations for Indian equity and F&amp;O markets.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed mb-4">
              We are <strong className="text-ink">not</strong> SEBI-registered Investment Advisers and
              do not manage client portfolios or provide personalised investment advice. We provide research
              recommendations only.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed">
              Operating from Surat, Gujarat, our research focuses exclusively on Indian equity markets —
              Nifty, BankNifty, and NSE-listed cash stocks. Every recommendation includes a defined entry,
              stop-loss, and target level with full logic explanation.
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="mb-12" aria-labelledby="philosophy">
            <h2 id="philosophy" className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Philosophy</h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-4">
              We use <strong className="text-ink">pure price action analysis</strong> — no indicators,
              no algorithmic black boxes, no guesswork. We read support, resistance, breakout structures, and
              volume patterns to identify high-probability setups where risk is clearly defined before entry.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed mb-4">
              Every research recommendation we share includes full logic, a defined entry point,
              a stop-loss level, and a target — minimum Risk:Reward of 1:2. You understand the
              <em> why</em> behind every setup, not just the levels.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed">
              This is how we build transparent, accountable research — consistent with our SEBI obligations
              as a Registered Research Analyst.
            </p>
          </section>

          {/* Credentials */}
          <section className="mb-12" aria-labelledby="credentials">
            <h2 id="credentials" className="text-2xl md:text-3xl font-bold text-primary mb-6">Credentials &amp; Registration</h2>
            <div className="bg-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">SEBI Registration:</dt>
                  <dd className="text-ink/70">Research Analyst | <strong className="text-ink">INH000024231</strong></dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">BSE Enlistment:</dt>
                  <dd className="text-ink/70">5641</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">Registration Date:</dt>
                  <dd className="text-ink/70">15th December 2025</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">Compliance Officer:</dt>
                  <dd className="text-ink/70">Rajnikant K. Bhalani</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">Contact:</dt>
                  <dd className="text-ink/70">
                    <a href="mailto:chartiansresearch@gmail.com" className="text-primary hover:underline">chartiansresearch@gmail.com</a>{' '}
                    | +91-9274387982
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">Registered Address:</dt>
                  <dd className="text-ink/70">509, Laxmi Enclave-2, Opp Gajera School, Katargaam, Surat – 395004, Gujarat, India</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="font-bold text-ink sm:w-48 shrink-0">Experience:</dt>
                  <dd className="text-ink/70">6+ years in Indian equity and F&amp;O markets</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* What We Are NOT */}
          <section className="mb-12" aria-labelledby="not-section">
            <h2 id="not-section" className="text-2xl md:text-3xl font-bold text-primary mb-4">What We Are Not</h2>
            <div className="bg-sun/10 border border-sun/30 rounded-2xl p-6">
              <p className="text-ink/70 text-lg leading-relaxed mb-3">
                The Chartians is <strong className="text-ink">not</strong> a SEBI-registered
                Investment Adviser (RIA). We do not provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink/70 text-lg">
                <li>Portfolio allocation advice or personalised financial planning</li>
                <li>Portfolio management services</li>
                <li>Guaranteed return products or schemes</li>
                <li>Any assurance of profits or risk-free trading</li>
              </ul>
              <p className="text-ink/70 text-lg leading-relaxed mt-3">
                We provide independent research analysis only, in compliance with SEBI Research Analyst
                Regulations 2014.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/our-plans"
              className="inline-block bg-primary text-canvas px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Our Research Plans →
            </Link>
          </div>

          {/* SEBI Disclaimer */}
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
