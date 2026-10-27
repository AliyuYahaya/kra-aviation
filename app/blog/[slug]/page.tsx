import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import CtaBand from "@/components/site/cta-band"
import { blogPosts, getBlogPost } from "@/data/blog-posts"
import { formatDate } from "@/lib/format"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug)
  if (!post) notFound()

  const blocks = post.content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <>
      <article className="py-16 md:py-24">
        <header className="container max-w-3xl">
          <Link href="/blog" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Insights
          </Link>
          <h1 className="heading-display mt-6 text-4xl text-navy-950 md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{post.description}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            {post.author}, {formatDate(post.date)}, {post.readingMinutes} min read
          </p>
        </header>

        <div className="container mt-12 max-w-5xl">
          <div className="relative aspect-[21/9] bg-navy-100">
            <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="prose-article container mt-12 max-w-3xl">
          {blocks.map((block) =>
            block.startsWith("## ") ? <h2 key={block}>{block.slice(3)}</h2> : <p key={block}>{block}</p>,
          )}
        </div>
      </article>

      <CtaBand />
    </>
  )
}
