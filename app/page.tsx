import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/site/page-hero"
import SectionHeading from "@/components/site/section-heading"
import ButtonLink from "@/components/site/button-link"
import CtaBand from "@/components/site/cta-band"
import { services } from "@/data/services"
import { blogPosts } from "@/data/blog-posts"
import { brochure, clientSegments, offices, partnerships, unsplash } from "@/data/site"
import { formatDate } from "@/lib/format"

export default function Home() {
  const latestPost = blogPosts[0]

  return (
    <>
      <PageHero
        variant="photo"
        image={unsplash("1474302770737-173ee21bab63", 2400)}
        imageAlt="Business jet on the runway at sunset"
        title="Connecting Nigeria to the world, safely and professionally."
        description="Air charter, aircraft management, flight support and aviation advisory for government institutions, private organisations, VIPs and international partners."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Request a charter
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="outline-light">
            See our services
          </ButtonLink>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="heading-display text-3xl text-navy-950 md:text-4xl">Your aviation partner for every journey</h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy-700">
            <p>
              KRA Aviation Services Ltd is a Nigerian aviation company. We arrange air charters, manage aircraft,
              coordinate flight support and advise on aviation projects, from offices in Kano, Abuja and Lagos.
            </p>
            <p>
              We operate under an Air Operator&apos;s Permit, and our partners in China, South Africa and the Middle
              East give clients access to aircraft sources and specialist support abroad.
            </p>
            <p>
              <Link href="/about" className="text-link">
                More about KRA
              </Link>
              <span className="mx-3 text-navy-300" aria-hidden>
                |
              </span>
              <a href={brochure.href} download={brochure.fileName} className="text-link">
                Download our brochure (PDF, {brochure.size})
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section border-t border-navy-950/10 bg-white">
        <div className="container">
          <SectionHeading
            title="Our services"
            description="Seven services covering planning, sourcing, operations and support on the ground."
          />
          <ul className="mt-12 divide-y divide-navy-950/10 border-y border-navy-950/10">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] md:items-center md:gap-10"
                >
                  <h3 className="heading-display text-xl text-navy-950 group-hover:text-ember-700 md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground">{service.summary}</p>
                  <ArrowRight className="hidden h-5 w-5 text-navy-950 group-hover:text-ember-700 md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading title="Who we work with" />
          <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {clientSegments.map((segment) => (
              <div key={segment.name}>
                <dt className="font-semibold text-navy-950">{segment.name}</dt>
                <dd className="mt-1 text-muted-foreground">{segment.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Presence and partnerships */}
      <section className="section bg-navy-950 text-white">
        <div className="container">
          <SectionHeading
            tone="light"
            title="Based in Nigeria, connected internationally"
            description="Three offices in Nigeria, and partners abroad who give clients access to aircraft sources, specialist services and investment networks."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-sm font-semibold text-white/60">Offices</h3>
              <ul className="mt-4 divide-y divide-white/15 border-t border-white/15">
                {offices.map((office) => (
                  <li key={office.city} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <p className="heading-display text-xl">{office.city}</p>
                    <p className="text-white/75">
                      <span className="text-white">{office.role}.</span> {office.focus}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60">Partnerships</h3>
              <ul className="mt-4 divide-y divide-white/15 border-t border-white/15">
                {partnerships.map((partner) => (
                  <li key={partner.region} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <p className="heading-display text-xl">{partner.region}</p>
                    <p className="text-white/75">{partner.focus}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aviation Club */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]">
            <Image
              src={unsplash("1556388158-158ea5ccacbd", 1400)}
              alt="Aircraft on final approach over a lit runway"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="container flex flex-col justify-center py-16 lg:ml-0 lg:max-w-[660px] lg:pl-16">
            <SectionHeading
              title="KRA Aviation Club"
              description="The club helps pilots keep their skills current through recurrent training, workshops and contact with other aviation professionals."
            />
            <p className="mt-8">
              <Link href="/aviation-club" className="text-link">
                About the club
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Latest article */}
      {latestPost && (
        <section className="section border-t border-navy-950/10">
          <div className="container grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <h2 className="heading-display text-3xl text-navy-950 md:text-4xl">Insights</h2>
            <Link href={`/blog/${latestPost.slug}`} className="group block max-w-2xl">
              <p className="text-sm text-muted-foreground">
                {latestPost.category}, {formatDate(latestPost.date)}
              </p>
              <h3 className="heading-display mt-2 text-2xl text-navy-950 group-hover:text-ember-700 md:text-3xl">
                {latestPost.title}
              </h3>
              <p className="mt-3 text-lg text-muted-foreground">{latestPost.description}</p>
              <span className="text-link mt-6 inline-block">Read the article</span>
            </Link>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
