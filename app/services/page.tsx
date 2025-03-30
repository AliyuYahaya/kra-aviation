import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Plane, Shield, Users, Award, Headphones, BarChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8">
              KRA Aviation offers comprehensive aviation services tailored to meet the diverse needs of the Nigerian
              aviation industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Flight Operations */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                  alt="Flight Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flight Operations</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive flight support including ground handling, fueling permits, over flight, landing, and
                  parking services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Flight planning and dispatch</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Crew scheduling and management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Operational control center</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/flight-operations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Executive Jet Charter */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2074&auto=format&fit=crop"
                  alt="Executive Jet Charter"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Executive Jet Charter</h3>
                <p className="text-muted-foreground mb-4">
                  Premium private jet charter services for business and leisure travel with the highest standards of
                  comfort and safety.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>On-demand charter flights</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP transportation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Customized flight experiences</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/executive-jet-charter">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Travel Management */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
                  alt="Travel Management"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive travel services including flight tickets, hotel reservations, and visa & insurance
                  assistance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Flight ticket booking</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Hotel reservations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Travel visa & insurance</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/travel-management">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Aircraft Management */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559686043-aef1b70a4d46?q=80&w=2070&auto=format&fit=crop"
                  alt="Aircraft Management"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aircraft Management</h3>
                <p className="text-muted-foreground mb-4">
                  Professional aircraft management services to optimize operations, reduce costs, and ensure regulatory
                  compliance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Maintenance oversight</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Crew management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Operational efficiency</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/aircraft-management">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Airport Protocol & Transfer */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop"
                  alt="Airport Protocol & Transfer"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Airport Protocol & Transfer</h3>
                <p className="text-muted-foreground mb-4">
                  VIP airport protocol services and premium ground transportation for a seamless travel experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP meet and greet</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fast-track immigration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury ground transportation</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/airport-protocol-transfer">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Umrah & Hajj Packages */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
                  alt="Umrah & Hajj Packages"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Umrah & Hajj Packages</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive Umrah and Hajj packages with premium accommodations, guided tours, and complete travel
                  arrangements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>5-star hotel accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fully guided tours</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Visa processing & transportation</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/umrah-hajj-packages">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a Customized Aviation Solution?</h2>
            <p className="text-muted-foreground mb-8">
              Contact our team to discuss your specific aviation requirements. We offer tailored solutions to meet your
              unique needs.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

