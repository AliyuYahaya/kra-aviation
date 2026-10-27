import Link from "next/link"
import { Download, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { brochure } from "@/data/site"

// Download button plus a "view online" link, with the file type and size shown so visitors know what they get.
export default function BrochureLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light"
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
      <a href={brochure.href} download={brochure.fileName} className="btn btn-primary btn-lg">
        <Download className="h-5 w-5" />
        Download brochure
      </a>
      <div className={cn("flex items-center gap-3 text-sm", light ? "text-white/75" : "text-muted-foreground")}>
        <FileText className="h-5 w-5 shrink-0" />
        <span>
          PDF, {brochure.pages} pages, {brochure.size}
          <br />
          <Link
            href="/brochure"
            className={cn(
              "font-semibold underline underline-offset-4",
              light ? "text-white hover:text-ember-300" : "text-navy-950 hover:text-ember-700",
            )}
          >
            View it online
          </Link>
        </span>
      </div>
    </div>
  )
}
