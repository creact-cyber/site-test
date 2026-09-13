import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import SchemaMarkup from '@/components/SchemaMarkup'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | The Chartians`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://thechartians.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thechartians.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thechartians.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://thechartians.com/blog/${slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'The Chartians',
      url: 'https://thechartians.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Chartians',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thechartians.com/images/chartians-logo.svg',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://thechartians.com/blog/${slug}`,
    },
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <div className="pt-40 pb-24 px-4 bg-paper min-h-screen">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70 mb-8">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
              {post.category}
            </span>
            <time dateTime={post.publishedAt} className="text-sm text-ink/70">
              Published: {post.publishedAt}
            </time>
            <span className="text-sm text-ink/70">By {post.author}</span>
          </div>

          {/* Article Content */}
          <article>
            <div
              className="prose prose-lg max-w-none text-ink/70
                prose-headings:text-ink prose-headings:font-bold
                prose-a:text-primary prose-strong:text-ink
                prose-table:text-sm prose-li:text-ink/70
                prose-blockquote:border-primary prose-blockquote:text-ink/70"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
            <p className="text-ink/70 mb-4">
              Want research-backed Swing and F&amp;O setups in your Telegram?{' '}
            </p>
            <Link
              href="/our-plans"
              className="inline-block bg-primary text-canvas px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Explore our SEBI-registered research plans →
            </Link>
          </div>

          {/* Read Next */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-primary font-bold hover:underline">
              ← Back to all articles
            </Link>
          </div>

          {/* SEBI Disclaimer */}
          {post.disclaimer && (
            <div className="mt-10 p-6 bg-surface-light rounded-2xl border border-surface-dark text-sm text-ink/55">
              <p>
                <strong className="text-ink/70">Disclaimer:</strong> The Chartians is a SEBI
                Registered Research Analyst (INH000024231). This content is for educational and
                informational purposes only and does not constitute personalised investment advice.
                Securities market investments are subject to market risks. Please read all related
                documents carefully before investing. Past performance is not indicative of future results.
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
