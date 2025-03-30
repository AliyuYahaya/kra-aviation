import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-8 md:pt-12">
        <div className="container px-4">
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-1 h-4 w-4" />
                <span>By {post.author.name}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Tag className="mr-1 h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              {post.description}
            </p>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>
              
              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                    <p className="text-muted-foreground">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              {/* Related Articles */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <Link href={`/blog/${relatedPost.slug}`} className="text-base font-medium hover:text-secondary">
                          {relatedPost.title}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                
                <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>
    </>
  )
}


