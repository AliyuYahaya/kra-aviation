import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import { services } from "@/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Charter brokerage, aircraft and fleet management, aviation consultancy, flight support and handling, travel management, protocol services, and Umrah and Hajj packages.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="light"
        title="Our services"
        description="We cover each stage of a client's aviation needs: planning and sourcing, operations, and support on the ground. Clients can use one service or combine several."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <div className="relative aspect-[3/2] overflow-hidden bg-navy-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="heading-display mt-5 text-xl text-navy-950 group-hover:text-ember-700 md:text-2xl">
                {service.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
