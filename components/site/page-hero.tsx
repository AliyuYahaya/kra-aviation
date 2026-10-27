import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Crumb = { name: string; href?: string }

type PageHeroProps = {
  // photo: full-bleed image (homepage). split: text panel beside an image. dark/light: text only.
  variant: "photo" | "split" | "dark" | "light"
  title: React.ReactNode
  description?: React.ReactNode
  image?: string
  imageAlt?: string
  breadcrumbs?: Crumb[]
  children?: React.ReactNode
}

function Breadcrumbs({ items, tone }: { items: Crumb[]; tone: "dark" | "light" }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-8 text-sm", tone === "dark" ? "text-white/60" : "text-muted-foreground")}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((crumb, i) => (
          <li key={crumb.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="underline-offset-4 hover:underline">
                {crumb.name}
              </Link>
            ) : (
              <span className={tone === "dark" ? "text-white" : "text-navy-950"}>{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function PageHero({ variant, title, description, image, imageAlt = "", breadcrumbs, children }: PageHeroProps) {
  if (variant === "photo" && image) {
    return (
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-navy-950 text-white">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
        {/* Darkens the left side so the headline stays legible over the photo */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/10" />
        <div className="container pb-16 pt-24 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
            {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </section>
    )
  }

  if (variant === "split" && image) {
    return (
      <section className="grid bg-navy-950 text-white lg:min-h-[34rem] lg:grid-cols-2">
        <div className="container flex flex-col justify-center py-16 md:py-20 lg:mr-0 lg:max-w-[660px] lg:pr-16">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="dark" />}
          <h1 className="heading-display text-4xl md:text-5xl">{title}</h1>
          {description && <p className="mt-6 text-lg leading-relaxed text-white/75">{description}</p>}
          {children && <div className="mt-10">{children}</div>}
        </div>
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>
    )
  }

  const dark = variant === "dark"
  return (
    <section className={cn(dark ? "bg-navy-950 text-white" : "border-b border-navy-950/10 bg-background text-navy-950")}>
      <div className="container py-16 md:py-24">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone={dark ? "dark" : "light"} />}
        <div className="max-w-3xl">
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className={cn("mt-6 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted-foreground")}>
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  )
}
