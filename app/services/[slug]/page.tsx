import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import PageHero from "@/components/site/page-hero"
import SectionHeading from "@/components/site/section-heading"
import ButtonLink from "@/components/site/button-link"
import CtaBand from "@/components/site/cta-band"
import { getService, services } from "@/data/services"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug)
  if (!service) return {}
  return { title: service.title, description: service.summary }
}

function joinList(items: string[]) {
  return items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : items[0]
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero
        variant="split"
        image={service.image}
        imageAlt={service.imageAlt}
        title={service.title}
        description={service.tagline}
        breadcrumbs={[{ name: "Services", href: "/services" }, { name: service.name }]}
      >
        <ButtonLink href="/contact" size="lg">
          {service.cta.label}
        </ButtonLink>
      </PageHero>

      {/* Introduction */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="heading-display text-3xl text-navy-950 md:text-4xl">{service.intro.heading}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy-700">
            {service.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.clients && (
              <p className="text-base text-muted-foreground">
                <span className="font-semibold text-navy-950">Who it is for:</span> {joinList(service.clients)}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section border-t border-navy-950/10 bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading title={service.capabilitiesHeading} />
          <dl className="divide-y divide-navy-950/10 border-y border-navy-950/10">
            {service.capabilities.map((capability) => (
              <div key={capability.title} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-semibold text-navy-950">{capability.title}</dt>
                <dd className="text-muted-foreground">{capability.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      {service.process && (
        <section className="section bg-navy-950 text-white">
          <div className="container">
            <SectionHeading tone="light" title={service.process.heading} />
            <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {service.process.steps.map((step, i) => (
                <li key={step.title}>
                  <p className="text-sm font-semibold text-ember-300">Step {i + 1}</p>
                  <h3 className="heading-display mt-2 text-xl">{step.title}</h3>
                  <p className="mt-2 text-white/75">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Packages */}
      {service.packages && (
        <section className="section">
          <div className="container">
            <SectionHeading title={service.packages.heading} description={service.packages.intro} />
            <div className="mt-12 grid border-y border-navy-950/15 lg:grid-cols-3 lg:divide-x lg:divide-navy-950/15">
              {service.packages.items.map((pkg) => (
                <div key={pkg.name} className="flex flex-col border-b border-navy-950/15 py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                  <h3 className="heading-display text-2xl text-navy-950">{pkg.name}</h3>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-navy-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-ember-700" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="text-link mt-8 self-start">
                    Enquire about {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra details */}
      {service.details && (
        <section className="section border-t border-navy-950/10 bg-white">
          <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <SectionHeading title={service.details.heading} description={service.details.intro} />
            <div className="grid gap-10 sm:grid-cols-2">
              {service.details.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-semibold text-navy-950">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-navy-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-ember-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="section border-t border-navy-950/10">
        <div className="container grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2 className="heading-display text-2xl text-navy-950">Other services</h2>
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={`/services/${other.slug}`} className="text-lg text-navy-950 underline-offset-4 hover:text-ember-700 hover:underline">
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand heading={service.cta.heading} body={service.cta.body} label={service.cta.label} />
    </>
  )
}
