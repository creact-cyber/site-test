import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Chartians Reviews & Testimonials | SEBI RA Research Advisory',
  description:
    "Real feedback from traders who follow The Chartians' SEBI-registered research advisory. Honest testimonials, trade performance snapshots, and community experience.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/reviews',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://thechartians.com/reviews' },
  ],
}

const testimonials = [
  {
    name: 'Subscriber — Swing Trading Plan',
    text: '[Testimonial from subscriber — add real ones here]',
    rating: 5,
  },
  {
    name: 'Subscriber — FNO Plan',
    text: '[Testimonial from subscriber — add real ones here]',
    rating: 5,
  },
  {
    name: 'Subscriber — Combined Plan',
    text: '[Testimonial from subscriber — add real ones here]',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-sun' : 'text-ink/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            What Traders Say About The Chartians
          </h1>
          <p className="text-xl text-ink/70 mb-12">
            Real feedback from our SEBI-registered research community
          </p>

          {/* Testimonials */}
          <section className="mb-16" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-2xl font-bold text-primary mb-8">
              Subscriber Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-primary/10 rounded-2xl p-6 border border-primary/20"
                >
                  <StarRating rating={t.rating} />
                  <p className="text-ink/70 mt-4 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-bold text-ink text-sm">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* YouTube section */}
          <section className="mb-16" aria-labelledby="video-heading">
            <h2 id="video-heading" className="text-2xl font-bold text-primary mb-4">
              Community Feedback on YouTube
            </h2>
            <div className="bg-surface-light rounded-2xl p-8 border border-surface-dark text-center">
              <p className="text-ink/70 text-lg mb-4">
                [YouTube community feedback section — add video testimonials or screenshots here]
              </p>
              <a
                href="https://www.youtube.com/@chartians"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-primary font-bold hover:underline"
              >
                Visit our YouTube Channel →
              </a>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-sun/10 border border-sun/30 rounded-2xl p-6 mb-8">
            <p className="text-sm text-ink/70">
              <strong className="text-ink">Note:</strong> All testimonials are from actual
              subscribers. Individual results vary. Securities market investments are subject to market risks.
              Past performance is not indicative of future results. Testimonials reflect subscriber experience
              and not guaranteed trading outcomes.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/our-plans"
              className="inline-block bg-primary text-canvas px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all"
            >
              Explore Research Plans →
            </Link>
          </div>

          {/* SEBI Disclaimer */}
          <div className="mt-10 p-6 bg-surface-light rounded-2xl border border-surface-dark text-sm text-ink/55">
            <p>
              <strong>SEBI Registration:</strong> The Chartians | Research Analyst | INH000024231 | BSE Enlistment: 5641.
              Securities market investments are subject to market risks. Please read all related documents
              carefully before investing. Past performance is not indicative of future results.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
