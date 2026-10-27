import type React from "react"
import type { Metadata } from "next"
import { Archivo, Public_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MaintenanceMode from "@/components/maintenance-mode"
import { MAINTENANCE_MODE } from "@/lib/maintenance-config"
import { company } from "@/data/site"

const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
// Archivo's width axis lets headings run slightly expanded, close to the logo's wordmark
const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "KRA Aviation Services Ltd provides integrated air charter, aircraft management, flight support and aviation advisory solutions from Kano, Abuja and Lagos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        {MAINTENANCE_MODE ? (
          <MaintenanceMode />
        ) : (
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  )
}
