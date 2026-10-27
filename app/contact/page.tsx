import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/site/contact-form"
import { brochure, company, offices } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KRA Aviation Services Ltd in Kano, Abuja or Lagos about charter, fleet management, flight support, travel or protocol services.",
}

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div>
          <h1 className="heading-display text-4xl text-navy-950 md:text-5xl">Let&apos;s build the next connection</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            If you need a charter, fleet management support, aviation advice or a long-term partner, we would like to
            hear from you.
          </p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">Phone</dt>
              <dd>
                <a href={company.phoneHref} className="heading-display text-2xl text-navy-950 hover:text-ember-700">
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${company.email}`} className="break-all text-lg text-navy-950 hover:text-ember-700">
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>

          <h2 className="mt-12 text-sm font-semibold text-muted-foreground">Offices</h2>
          <ul className="mt-3 divide-y divide-navy-950/10 border-y border-navy-950/10">
            {offices.map((office) => (
              <li key={office.city} className="py-4">
                <p className="font-semibold text-navy-950">
                  {office.city} <span className="font-normal text-muted-foreground">· {office.role}</span>
                </p>
                {office.address && <p className="mt-1 text-navy-700">{office.address}</p>}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-muted-foreground">
            Want an overview first?{" "}
            <a href={brochure.href} download={brochure.fileName} className="text-link">
              Download our brochure
            </a>{" "}
            (PDF, {brochure.size}) or{" "}
            <Link href="/brochure" className="text-link">
              view it online
            </Link>
            .
          </p>
        </div>

        <div className="border-t border-navy-950/10 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <h2 className="heading-display text-2xl text-navy-950 md:text-3xl">Send an enquiry</h2>
          <p className="mb-10 mt-3 text-muted-foreground">
            For a charter, include your dates, route and number of passengers. That lets us source aircraft options
            straight away.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
