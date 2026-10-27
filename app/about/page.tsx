import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/site/page-hero"
import SectionHeading from "@/components/site/section-heading"
import BrochureLinks from "@/components/site/brochure-links"
import CtaBand from "@/components/site/cta-band"
import { cn } from "@/lib/utils"
import {
  growthRoadmap,
  mission,
  reasonsToPartner,
  regulatoryStatus,
  teamDisciplines,
  unsplash,
  values,
  vision,
} from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "KRA Aviation Services Ltd is a Nigerian aviation company operating under an AOP, with offices in Kano, Abuja and Lagos and partners in China, South Africa and the Middle East.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="dark"
        title="Built for trust, planned for growth"
        description="KRA Aviation Services Ltd provides air charter, aircraft management, flight support and aviation advisory services to clients in Nigeria and abroad."
      >
        <BrochureLinks tone="light" />
      </PageHero>

      {/* Who we are */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="heading-display text-3xl text-navy-950 md:text-4xl">Who we are</h2>
          <div className="space-y-5 text-lg leading-relaxed text-navy-700">
            <p>
              KRA Aviation Services Ltd is a Nigerian aviation company. We arrange air charters, manage aircraft,
              coordinate flight support and advise on aviation projects.
            </p>
            <p>
              Our clients include government institutions, private organisations, high-net-worth individuals and
              international business partners. We put safety first, follow procedures carefully and build long-term
              relationships with the people we work with.
            </p>
            <p>
              We operate under an Air Operator&apos;s Permit (AOP). We are working through the regulatory pathway
              towards an Air Transport Licence (ATL) and then an Air Operator&apos;s Certificate (AOC). That is the
              route to full scheduled airline operations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="section border-t border-navy-950/10 bg-white">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-sm font-semibold text-ember-700">Vision</h2>
            <p className="heading-display mt-3 text-2xl leading-snug text-navy-950">{vision}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ember-700">Mission</h2>
            <p className="mt-3 text-xl leading-relaxed text-navy-700">{mission}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-t border-navy-950/10 bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading title="Core values" />
          <dl className="divide-y divide-navy-950/10 border-y border-navy-950/10">
            {values.map((value) => (
              <div key={value.name} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-semibold text-navy-950">{value.name}</dt>
                <dd className="text-muted-foreground">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Regulatory status */}
      <section className="section bg-navy-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading
            tone="light"
            title="Safety and regulatory status"
            description="We are committed to full compliance with Nigerian Civil Aviation Authority (NCAA) requirements and international safety standards, supported by structured safety and quality management systems."
          />
          <ol className="divide-y divide-white/15 border-y border-white/15">
            {regulatoryStatus.map((item) => (
              <li key={item.code} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <div>
                  <p className="heading-display text-lg">{item.stage}</p>
                  <p className="text-sm text-white/60">{item.code}</p>
                </div>
                <p>
                  <span className={cn("font-semibold", item.status === "Active" ? "text-ember-300" : "text-white")}>
                    {item.status}.
                  </span>{" "}
                  <span className="text-white/75">{item.detail}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="container py-16 md:py-24 lg:mr-0 lg:max-w-[660px] lg:pr-16">
            <SectionHeading
              title="Leadership and team"
              description="A management team and board of directors lead the company. They are supported by professionals in:"
            />
            <ul className="mt-8 list-disc space-y-3 pl-5 text-navy-700 marker:text-ember-600">
              {teamDisciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src={unsplash("1540962351504-03099e0a754b", 1400)}
              alt="Business jet on the apron with its airstair lowered"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why KRA */}
      <section className="section border-t border-navy-950/10">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading title="Why partner with KRA" />
          <ul className="list-disc space-y-3 pl-5 text-lg text-navy-700 marker:text-ember-600">
            {reasonsToPartner.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Growth roadmap */}
      <section className="section border-t border-navy-950/10">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading
            title="Growth strategy"
            description="We plan to grow from an AOP operator and aviation services provider into a scheduled airline. We welcome investors and partners who want a safe, reliable and competitive Nigerian aviation sector."
          />
          <ol className="divide-y divide-navy-950/10 border-y border-navy-950/10">
            {growthRoadmap.map((step) => (
              <li key={step.horizon} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <p className="font-semibold text-navy-950">{step.horizon}</p>
                <p className="text-navy-700">{step.focus}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-navy-950/10 bg-white">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="heading-display text-2xl text-navy-950">Corporate brochure</h2>
            <p className="mt-2 text-muted-foreground">The information on this page, in one document to save or share.</p>
          </div>
          <BrochureLinks />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
