import Link from "next/link"
import { company, mainNav, offices } from "@/data/site"
import { services } from "@/data/services"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-block" aria-label={`${company.shortName} home`}>
              <img src="/brand/kra-logo-reversed.svg" alt={company.shortName} className="h-10 w-auto" />
            </Link>
            <p className="mt-6 max-w-xs text-white/75">{company.tagline}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">Services</h3>
              <ul className="mt-3 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="inline-block py-2 text-white/70 hover:text-white lg:py-1">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-3 text-sm">
                {mainNav
                  .filter((item) => item.href !== "/services")
                  .map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="inline-block py-2 text-white/70 hover:text-white lg:py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href="/brochure" className="inline-block py-2 text-white/70 hover:text-white lg:py-1">
                    Corporate brochure (PDF)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Offices</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {offices.map((office) => (
                  <li key={office.city}>
                    <p>{office.city}</p>
                    <p className="text-white/60">{office.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:gap-8">
          <a href={company.phoneHref} className="hover:text-white">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="break-all hover:text-white">
            {company.email}
          </a>
          <p>{offices[0].address}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <p>Operating under an Air Operator&apos;s Permit (AOP)</p>
        </div>
      </div>
    </footer>
  )
}
