import { company, offices } from "@/data/site"

export default function MaintenanceMode() {
  return (
    <div className="flex min-h-screen flex-col bg-navy-950 text-white">

      <header className="container py-10">
        <img src="/brand/kra-logo-reversed.svg" alt={company.shortName} className="h-9 w-auto" />
      </header>

      <main className="container flex flex-1 flex-col justify-center pb-20">
        <h1 className="heading-display max-w-3xl text-4xl md:text-6xl">We are updating our website.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          The site will be back shortly. Our team is available as usual for charter, fleet management, flight support,
          travel and protocol enquiries.
        </p>
        <div className="mt-12 flex flex-col gap-3 text-lg">
          <a href={company.phoneHref} className="transition-colors hover:text-ember-300">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="transition-colors hover:text-ember-300">
            {company.email}
          </a>
        </div>
      </main>

      <footer className="container grid gap-6 border-t border-white/10 py-8 text-sm text-white/60 sm:grid-cols-3">
        {offices.map((office) => (
          <p key={office.city}>
            <span className="text-white">{office.city}</span> · {office.role}
          </p>
        ))}
      </footer>
    </div>
  )
}
