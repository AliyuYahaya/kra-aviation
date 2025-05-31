import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MaintenanceMode from "@/components/maintenance-mode"
import { MAINTENANCE_MODE } from "@/lib/maintenance-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KRA Aviation | Nigeria's Premier Aviation Services",
  description: "KRA Aviation provides top-tier aviation services, pilot training, and aviation news across Nigeria.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {MAINTENANCE_MODE ? (
            <MaintenanceMode />
          ) : (
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'