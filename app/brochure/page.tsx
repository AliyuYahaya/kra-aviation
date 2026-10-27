import type { Metadata } from "next"
import Image from "next/image"
import { Download, ExternalLink } from "lucide-react"
import PageHero from "@/components/site/page-hero"
import { brochure } from "@/data/site"

export const metadata: Metadata = {
  title: "Corporate brochure",
  description: "View or download the KRA Aviation Services Ltd corporate brochure (PDF).",
}

export default function BrochurePage() {
  return (
    <>
      <PageHero
        variant="light"
        title="Corporate brochure"
        description={`Our services, offices, partnerships, regulatory status and growth plans. PDF, ${brochure.pages} pages, ${brochure.size}.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={brochure.href} download={brochure.fileName} className="btn btn-primary btn-lg">
            <Download className="h-4 w-4" />
            Download PDF
          </a>
          <a href={brochure.href} target="_blank" rel="noopener" className="btn btn-outline-dark btn-lg">
            <ExternalLink className="h-4 w-4" />
            Open in a new tab
          </a>
        </div>
      </PageHero>

      <section className="section pt-12">
        <div className="container">
          {/* Embedded viewer on larger screens. Mobile browsers handle embedded PDFs poorly, so they get the cover and the buttons above. */}
          <object
            data={`${brochure.href}#view=FitH`}
            type="application/pdf"
            aria-label="KRA Aviation corporate brochure"
            className="hidden h-[85vh] w-full border border-navy-950/15 bg-navy-100 lg:block"
          >
            <p className="p-8 text-muted-foreground">
              Your browser cannot show the PDF here.{" "}
              <a href={brochure.href} download={brochure.fileName} className="text-link">
                Download the brochure
              </a>{" "}
              instead.
            </p>
          </object>

          <a href={brochure.href} target="_blank" rel="noopener" className="block lg:hidden">
            <Image
              src="/downloads/kra-aviation-corporate-brochure-cover.jpg"
              alt="Cover of the KRA Aviation corporate brochure"
              width={990}
              height={1400}
              sizes="100vw"
              className="mx-auto w-full max-w-md border border-navy-950/15"
            />
          </a>
        </div>
      </section>
    </>
  )
}
