import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export default function AirportProtocolTransferPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Airport Protocol & Transfer Services</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Seamless airport experience with VIP protocol services and premium transfers across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Premium Airport Experience</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our Airport Protocol & Transfer services are designed to provide a seamless, stress-free experience for
                travelers arriving at or departing from Nigerian airports. We handle all aspects of your airport
                journey, from expedited check-in and immigration to luxury transfers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">VIP meet and greet services</p>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">Fast-track immigration and customs clearance</p>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">Luggage assistance and porter services</p>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">Luxury vehicle transfers to your destination</p>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-1">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground">Access to VIP lounges and private terminals</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Book This Service</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop"
                alt="Airport Protocol Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Protocol & Transfer Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of airport protocol and transfer packages designed to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Package */}
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Standard Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Meet and greet at arrival hall</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Assistance with luggage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Standard sedan transfer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Basic immigration assistance</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold mb-6">₦45,000</div>
                <Button asChild className="w-full">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-none shadow-md relative">
              <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Premium Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP meet and greet at airside</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fast-track immigration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Porter service for luggage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury SUV transfer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Access to VIP lounge</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold mb-6">₦85,000</div>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">VIP Package</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Exclusive airside meet and greet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated immigration officer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Premium porter service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury sedan or SUV with chauffeur</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Private terminal access where available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Refreshments during transfer</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold mb-6">₦150,000</div>
                <Button asChild className="w-full">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Airports Covered */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Airports We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our airport protocol and transfer services are available at major airports across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Lagos</h3>
                <p className="text-muted-foreground">Murtala Muhammed International Airport</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Abuja</h3>
                <p className="text-muted-foreground">Nnamdi Azikiwe International Airport</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Port Harcourt</h3>
                <p className="text-muted-foreground">Port Harcourt International Airport</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Kano</h3>
                <p className="text-muted-foreground">Mallam Aminu Kano International Airport</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Need service at another airport? Contact us for availability.</p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Experience VIP Airport Service?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Book our Airport Protocol & Transfer services today and enjoy a stress-free airport experience.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

