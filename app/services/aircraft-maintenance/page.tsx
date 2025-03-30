import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AircraftMaintenancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-6">Aircraft Maintenance</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Expert maintenance, repair, and overhaul services for all types of aircraft, ensuring airworthiness and
              safety.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Comprehensive Aircraft Maintenance Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation provides industry-leading aircraft maintenance services to ensure the safety, reliability,
                and efficiency of your aircraft operations in Nigeria and beyond.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of certified aircraft maintenance engineers and technicians delivers exceptional service with a
                focus on quality, compliance, and minimizing aircraft downtime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Line and Base Maintenance</h3>
                    <p className="text-muted-foreground">
                      Routine inspections, troubleshooting, and repairs to keep your aircraft in optimal condition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Component Repair and Overhaul</h3>
                    <p className="text-muted-foreground">
                      Specialized repair and overhaul services for aircraft components and systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Airworthiness Management</h3>
                    <p className="text-muted-foreground">
                      Comprehensive airworthiness management to ensure regulatory compliance and safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Aircraft Maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Maintenance Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Line Maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Daily and weekly checks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Component replacement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Defect rectification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Pre-flight inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Base Maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>A, B, C, and D checks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Structural repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Major modifications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Interior refurbishment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Avionics upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Component Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Component repair</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Overhaul services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Non-destructive testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Component exchange</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Warranty management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Engine Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Engine performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Borescope inspections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Engine troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Engine removal and installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Engine preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Airworthiness Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Airworthiness review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Maintenance program development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Reliability monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Technical records management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>24/7 AOG support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Engineering consultancy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Technical documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Maintenance planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Technical training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Our Certifications and Approvals</h2>
            <p className="text-muted-foreground">
              KRA Aviation maintains the highest standards of quality and safety, backed by industry certifications and
              regulatory approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="NCAA Certification"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">NCAA Approved</h3>
              <p className="text-sm text-muted-foreground">
                Nigerian Civil Aviation Authority Approved Maintenance Organization
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="EASA Certification"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">EASA Part-145</h3>
              <p className="text-sm text-muted-foreground">
                European Union Aviation Safety Agency Approved Maintenance Organization
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="FAA Certification"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">FAA Part-145</h3>
              <p className="text-sm text-muted-foreground">Federal Aviation Administration Approved Repair Station</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="ISO Certification"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">Quality Management System Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Need Aircraft Maintenance Services?</h2>
            <p className="text-gray-500 mb-8">
              Contact our maintenance team to discuss your aircraft maintenance requirements and how we can help keep
              your fleet safe and airworthy.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

