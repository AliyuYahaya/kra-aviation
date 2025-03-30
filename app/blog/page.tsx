import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const latestPosts = blogPosts.slice(1)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">KRA Aviation News & Blog</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Stay updated with the latest news, insights, and developments in KRA Aviation and the Nigerian aviation
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog?category=kra-news">KRA News</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog?category=industry-updates">Industry Updates</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog?category=aviation-technology">Aviation Technology</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog?category=pilot-resources">Pilot Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Article</h2>

          <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-[300px] lg:h-auto">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="text-sm text-secondary font-medium mb-2">{featuredPost.category}</div>
                <h3 className="text-2xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">{featuredPost.date}</div>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center">
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card key={post.slug} className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-secondary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                    <Button asChild variant="link" className="p-0 h-auto text-secondary">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with the latest news and insights from KRA Aviation. Subscribe to our newsletter for
              exclusive content and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

