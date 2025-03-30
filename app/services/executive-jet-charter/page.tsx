import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ExecutiveJetCharterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Executive Jet Charter</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Premium private jet charter services for business and leisure travel with the highest standards of comfort
              and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/executive-jet-charter.jpg"
                alt="Executive Jet Charter"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Luxury Private Jet Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation offers premium executive jet charter services tailored to meet the unique needs of
                discerning clients who value privacy, flexibility, and comfort.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're traveling for business or leisure, our executive jet charter services provide a seamless
                and luxurious travel experience from departure to arrival.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">On-Demand Charter Flights</h3>
                    <p className="text-muted-foreground">
                      Flexible scheduling to accommodate your travel needs with minimal notice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">VIP Transportation</h3>
                    <p className="text-muted-foreground">
                      Luxury ground transportation services to and from the airport for a seamless journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Customized Flight Experiences</h3>
                    <p className="text-muted-foreground">
                      Personalized services including gourmet catering, entertainment, and special accommodations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Fleet */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Executive Fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Light Jets" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Light Jets</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for short to medium-range trips with seating for 6-8 passengers. Ideal for business executives
                  and small groups.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Range: Up to 2,000 miles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Speed: 400-480 mph</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cabin Height: 4.5-5 feet</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Midsize Jets" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Midsize Jets</h3>
                <p className="text-muted-foreground mb-4">
                  Offering a balance of range, speed, and comfort for medium to long-range trips with seating for 8-10
                  passengers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Range: Up to 3,000 miles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Speed: 450-530 mph</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cabin Height: 5.5-5.9 feet</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Heavy Jets" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Heavy Jets</h3>
                <p className="text-muted-foreground mb-4">
                  Luxurious and spacious aircraft for long-range international travel with seating for 10-16 passengers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Range: Up to 6,000 miles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Speed: 500-560 mph</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cabin Height: 6+ feet</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Benefits of Private Jet Charter</h2>
            <p className="text-muted-foreground">
              Experience the ultimate in luxury, convenience, and efficiency with our executive jet charter services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
              <p className="text-muted-foreground">
                Avoid long check-in lines, security delays, and layovers. Fly directly to your destination on your
                schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy & Confidentiality</h3>
              <p className="text-muted-foreground">
                Conduct business meetings, make confidential calls, or simply relax in complete privacy during your
                flight.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
              <p className="text-muted-foreground">
                Change your departure time, add destinations, or extend your stay with minimal notice and maximum
                convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfort & Luxury</h3>
              <p className="text-muted-foreground">
                Enjoy spacious cabins, luxurious seating, gourmet catering, and personalized service throughout your
                journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Access to Remote Locations</h3>
              <p className="text-muted-foreground">
                Fly directly to smaller airports closer to your final destination, avoiding major hubs and reducing
                ground travel time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Productivity</h3>
              <p className="text-muted-foreground">
                Transform travel time into productive work time with onboard amenities including Wi-Fi, workspaces, and
                communication systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">How It Works</h2>
            <p className="text-muted-foreground">
              Booking your private jet charter with KRA Aviation is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Request a Quote</h3>
              <p className="text-muted-foreground">
                Contact us with your travel details including dates, destinations, number of passengers, and any special
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Receive Options</h3>
              <p className="text-muted-foreground">
                Our team will provide you with aircraft options, pricing, and itinerary details tailored to your
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Confirm Booking</h3>
              <p className="text-muted-foreground">
                Once you've selected your preferred option, we'll secure the aircraft and finalize all arrangements for
                your journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative hover:scale-105 transition-transform duration-200">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Enjoy Your Flight</h3>
              <p className="text-muted-foreground">
                Arrive at the private terminal just minutes before departure and enjoy a seamless, luxurious travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Experience Luxury Air Travel?</h2>
            <p className="text-gray-500 mb-8">
              Contact our team to discuss your executive jet charter requirements and receive a personalized quote.
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

