import { company } from "@/data/site"
import ButtonLink from "@/components/site/button-link"

type CtaBandProps = {
  heading?: string
  body?: string
  label?: string
  href?: string
}

export default function CtaBand({
  heading = "Let's build the next connection.",
  body = "Tell us what you need: a charter, fleet management, aviation advice or a long-term partnership. Our team in Kano, Abuja and Lagos will take it from there.",
  label = "Contact us",
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <h2 className="heading-display text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{body}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start">
          <ButtonLink href={href} size="lg">
            {label}
          </ButtonLink>
          <a href={company.phoneHref} className="text-white/75 underline-offset-4 hover:text-white hover:underline">
            or call {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
