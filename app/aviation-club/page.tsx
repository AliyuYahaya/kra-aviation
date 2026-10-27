import type { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/site/page-hero"
import SectionHeading from "@/components/site/section-heading"
import ButtonLink from "@/components/site/button-link"
import CtaBand from "@/components/site/cta-band"
import { unsplash } from "@/data/site"

export const metadata: Metadata = {
  title: "Aviation Club",
  description:
    "The KRA Aviation Club offers pilots recurrent training, regulatory updates, workshops and contact with other aviation professionals.",
}

const programmes = [
  {
    title: "Recurrent training",
    description: "Regular sessions on emergency procedures and aircraft systems, to keep pilots current.",
  },
  {
    title: "Type rating refreshers",
    description: "Aircraft-specific training covering systems, procedures and performance calculations.",
  },
  {
    title: "Crew resource management",
    description: "How flight crews communicate, make decisions and coordinate as a team.",
  },
  {
    title: "Regulatory updates",
    description: "Briefings on NCAA regulations, ICAO standards and compliance requirements.",
  },
]

const benefits = [
  { title: "Training", items: ["Recurrent training sessions", "Type rating refreshers", "Emergency procedures training"] },
  { title: "Networking", items: ["Member meetups", "Industry conferences", "Social events"] },
  { title: "Career development", items: ["Career guidance", "CV and interview preparation", "Mentoring"] },
  { title: "Learning", items: ["Regulatory updates", "Technical seminars", "Guest speakers and workshops"] },
]

const memberships = [
  { name: "Basic", features: ["Member meetups", "Industry publications", "Online resources", "Job board access"] },
  {
    name: "Professional",
    features: ["Everything in Basic", "Quarterly training sessions", "Industry conferences", "Networking events", "Career guidance"],
  },
  {
    name: "Executive",
    features: ["Everything in Professional", "Additional training sessions", "One-to-one mentoring", "Invitations to industry events"],
  },
]

export default function AviationClubPage() {
  return (
    <>
      <PageHero
        variant="split"
        image={unsplash("1556388158-158ea5ccacbd", 1600)}
        imageAlt="Aircraft on final approach over a lit runway"
        title="KRA Aviation Club"
        description="Training and contact with other aviation professionals, for experienced pilots and for pilots working to advance their careers."
      >
        <ButtonLink href="/contact" size="lg">
          Join the club
        </ButtonLink>
      </PageHero>

      {/* Programmes */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeading title="Training programmes" />
          <dl className="divide-y divide-navy-950/10 border-y border-navy-950/10">
            {programmes.map((programme) => (
              <div key={programme.title} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-semibold text-navy-950">{programme.title}</dt>
                <dd className="text-muted-foreground">{programme.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-navy-950 text-white">
        <div className="container">
          <SectionHeading tone="light" title="What members get" />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="font-semibold">{benefit.title}</h3>
                <ul className="mt-3 space-y-1.5 text-white/75">
                  {benefit.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership plans */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Membership" description="Membership is annual. Contact us for current fees." />
          <div className="mt-12 grid divide-y divide-navy-950/15 border-y border-navy-950/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {memberships.map((plan) => (
              <div key={plan.name} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                <h3 className="heading-display text-2xl text-navy-950">{plan.name}</h3>
                <ul className="mt-5 space-y-2 text-navy-700">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="text-link mt-8 inline-block">
                  Ask about {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Keep your flying current"
        body="Contact us to join the KRA Aviation Club or to ask about upcoming training sessions."
        label="Join the club"
      />
    </>
  )
}
