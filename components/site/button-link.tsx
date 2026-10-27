import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "outline-light" | "outline-dark"
  size?: "default" | "lg"
  className?: string
}

// Full class names so Tailwind keeps them in the build
const variants = {
  primary: "btn-primary",
  "outline-light": "btn-outline-light",
  "outline-dark": "btn-outline-dark",
}

export default function ButtonLink({ href, children, variant = "primary", size = "default", className }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn("btn", variants[variant], size === "lg" && "btn-lg", className)}>
      {children}
    </Link>
  )
}
