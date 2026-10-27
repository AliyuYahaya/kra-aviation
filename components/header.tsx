"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { company, mainNav } from "@/data/site"
import { services } from "@/data/services"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950 text-white">
      <div className="container flex h-20 items-center justify-between gap-8">
        <Link href="/" className="shrink-0" aria-label={`${company.shortName} home`}>
          <img src="/brand/kra-logo-reversed.svg" alt={company.shortName} className="h-8 w-auto md:h-9" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) =>
            item.href === "/services" ? (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 py-7 text-sm font-medium",
                    isActive(item.href) ? "text-white" : "text-white/75 hover:text-white",
                  )}
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute -left-6 top-full w-80 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="border border-white/10 bg-navy-950 py-2 shadow-xl">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className={cn(
                            "block px-6 py-2.5 text-sm hover:bg-white/5",
                            pathname === `/services/${service.slug}` ? "text-ember-300" : "text-white/85",
                          )}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-sm font-medium", isActive(item.href) ? "text-white" : "text-white/75 hover:text-white")}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={company.phoneHref} className="text-sm text-white/75 hover:text-white">
            {company.phone}
          </a>
          <Link href="/contact" className="btn btn-primary h-10 px-5">
            Request a charter
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-20 overflow-y-auto bg-navy-950 lg:hidden">
          <nav aria-label="Mobile" className="container flex flex-col pb-12 pt-4">
            {mainNav.map((item) => (
              <div key={item.name} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className={cn("heading-display block py-5 text-2xl", isActive(item.href) && "text-ember-300")}
                >
                  {item.name}
                </Link>
                {item.href === "/services" && (
                  <ul className="-mt-2 pb-5">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`} className="block py-2.5 text-white/75">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn btn-primary btn-lg mt-8">
              Request a charter
            </Link>
            <div className="mt-8 space-y-1 text-sm text-white/70">
              <a href={company.phoneHref} className="block">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="block">
                {company.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
