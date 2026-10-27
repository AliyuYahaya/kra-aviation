import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/site/page-hero"
import { blogPosts } from "@/data/blog-posts"
import { formatDate } from "@/lib/format"

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles from KRA Aviation Services Ltd on Nigerian aviation, charter, regulation and operations.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        variant="light"
        title="Insights"
        description="Articles from our team on Nigerian aviation, regulation and the services we provide."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container">
          <ul className="max-w-3xl divide-y divide-navy-950/10 border-y border-navy-950/10">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <p className="text-sm text-muted-foreground">
                    {post.category}, {formatDate(post.date)}, {post.readingMinutes} min read
                  </p>
                  <h2 className="heading-display mt-2 text-2xl text-navy-950 group-hover:text-ember-700 md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
