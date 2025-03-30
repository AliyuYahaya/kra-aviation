import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, BarChart, Clock, Wrench } from "lucide-react"

export default function AircraftManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Aircraft Management Services</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Comprehensive aircraft management solutions for private and corporate aircraft owners in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6">Professional Aircraft Management</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation offers comprehensive aircraft management services designed to maximize the value of your
                aircraft investment while minimizing the complexities of ownership. Our team of experienced aviation
                professionals handles every aspect of aircraft operation, maintenance, and administration.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-primary">Safety & Compliance</h3>
                    <p className="text-muted-foreground">
                      Ensuring your aircraft meets all regulatory requirements and safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <BarChart className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-primary">Cost Management</h3>
                    <p className="text-muted-foreground">
                      Optimizing operational costs while maintaining the highest standards of service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-primary">Availability & Scheduling</h3>
                    <p className="text-muted-foreground">
                      Ensuring your aircraft is ready when you need it with efficient scheduling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Wrench className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-primary">Maintenance Management</h3>
                    <p className="text-muted-foreground">
                      Comprehensive maintenance programs to keep your aircraft in optimal condition.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Inquire About Management</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop"
                alt="Aircraft Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Management Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific aircraft and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Operational Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Flight planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Crew recruitment and management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Safety management systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Ground handling arrangements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Maintenance Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Scheduled maintenance planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Unscheduled maintenance coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Parts inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Warranty administration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Maintenance tracking and records</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Financial Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Budget planning and expense tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Invoice processing and payment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Revenue optimization for charter operations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Financial reporting and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Insurance management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Professional Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why aircraft owners across Nigeria trust KRA Aviation with their valuable assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
                <p className="text-muted-foreground">
                  Rigorous safety protocols and experienced crew management to ensure the highest standards of safety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-muted-foreground">
                  Optimized operations and bulk purchasing power to reduce overall ownership costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                <p className="text-muted-foreground">
                  Professional management of all operational details, allowing owners to focus on their core activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Asset Preservation</h3>
                <p className="text-muted-foreground">
                  Proactive maintenance and care to maintain aircraft value and extend service life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6">Ready to Optimize Your Aircraft Ownership?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Contact our aircraft management team today to discuss how we can tailor our services to your specific needs.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

