"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Flight Operations", href: "/services/flight-operations" },
      { name: "Executive Jet Charter", href: "/services/executive-jet-charter" },
      { name: "Travel Management", href: "/services/travel-management" },
      { name: "Aircraft Management", href: "/services/aircraft-management" },
      { name: "Aviation Consulting", href: "/services/aviation-consulting" },
      { name: "Airport Protocol & Transfer", href: "/services/airport-protocol-transfer" },
      { name: "Umrah & Hajj Packages", href: "/services/umrah-hajj-packages" },
    ],
  },
  { name: "Aviation Club", href: "/aviation-club" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm " : "bg-white",
      )}
    >
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="inline-block">
          <img
            src="/images/kra-logo.png"
            alt="KRA Aviation Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.subItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-1 text-base font-medium text-primary",
                      pathname.startsWith(item.href) ? "text-secondary" : "text-primary hover:text-secondary",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link
                        href={subItem.href}
                        className={cn("w-full text-primary", pathname === subItem.href ? "font-medium text-secondary" : "text-primary bg-white")}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors text-primary",
                  pathname === item.href ? "text-secondary" : "text-primary hover:text-secondary",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
          <nav className="container mt-4 flex flex-col space-y-4 pb-8">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="flex flex-col space-y-2">
                  <div className="font-medium text-lg">{item.name}</div>
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-muted">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "text-base transition-colors",
                          pathname === subItem.href ? "text-secondary font-medium" : "text-muted-foreground",
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    pathname === item.href ? "text-secondary" : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className="pt-4 mt-4 border-t">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

