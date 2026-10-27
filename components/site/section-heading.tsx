import type React from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: React.ReactNode
  description?: React.ReactNode
  tone?: "dark" | "light"
  className?: string
}

export default function SectionHeading({ title, description, tone = "dark", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className={cn("heading-display text-3xl md:text-4xl", tone === "light" ? "text-white" : "text-navy-950")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", tone === "light" ? "text-white/75" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  )
}
