import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/blog'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Trading Education & Market Research | The Chartians Blog',
  description:
    'Free educational articles on price action trading, Nifty/BankNifty F&O strategies, swing trading setups, and Indian stock market analysis. By SEBI RA INH000024231.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://thechartians.com/blog',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thechartians.com/blog' },
  ],
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta()

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-5xl mx-auto">

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Trading Education &amp; Market Research
            </h1>
            <p className="text-xl text-ink/70 max-w-2xl">
              Free educational content on price action trading, F&amp;O strategies, and Indian market
              analysis. By The Chartians — SEBI RA INH000024231.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-ink/70 text-lg">No posts yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-paper border border-surface-dark rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                      {post.category}
                    </div>
                    <h2 className="text-lg font-bold text-ink mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink/70 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-ink/70">
                      <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                      <span className="text-primary font-bold">Read →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="mt-16 p-6 bg-primary/10 rounded-2xl border border-primary/20">
            <h2 className="text-xl font-bold text-primary mb-2">Want research-backed setups in your Telegram?</h2>
            <p className="text-ink/70 mb-4">
              Join India&apos;s transparent trading research community. SEBI-registered Swing &amp; F&amp;O setups with
              defined SL and targets.
            </p>
            <Link
              href="/our-plans"
              className="inline-block bg-primary text-canvas px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Explore our SEBI-registered research plans →
            </Link>
          </div>

          <div className="mt-8 text-xs text-ink/55">
            <p>
              All articles are for educational purposes only. Securities market investments are subject to
              market risks. Past performance is not indicative of future results.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
