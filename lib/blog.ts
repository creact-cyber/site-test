import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  category: string
  keywords: string[]
  image: string
  disclaimer: boolean
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string
}

export function getAllPostsMeta(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR)
  const posts = files
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((filename): BlogPostMeta => {
      const slug = filename.replace(/\.mdx?$/, '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        publishedAt: data.publishedAt ?? '',
        updatedAt: data.updatedAt ?? data.publishedAt ?? '',
        author: data.author ?? 'The Chartians Research Team',
        category: data.category ?? '',
        keywords: data.keywords ?? [],
        image: data.image ?? '/images/blog/default-og.jpg',
        disclaimer: data.disclaimer ?? true,
      }
    })

  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const extensions = ['.mdx', '.md']
  let filePath: string | null = null

  for (const ext of extensions) {
    const p = path.join(BLOG_DIR, `${slug}${ext}`)
    if (fs.existsSync(p)) {
      filePath = p
      break
    }
  }

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    publishedAt: data.publishedAt ?? '',
    updatedAt: data.updatedAt ?? data.publishedAt ?? '',
    author: data.author ?? 'The Chartians Research Team',
    category: data.category ?? '',
    keywords: data.keywords ?? [],
    image: data.image ?? '/images/blog/default-og.jpg',
    disclaimer: data.disclaimer ?? true,
    contentHtml,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}
