import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GroundHandlingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ground Handling Services</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Efficient passenger, baggage, and cargo handling services to ensure smooth airport operations across
              Nigeria.
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
                src="/placeholder.svg?height=800&width=600"
                alt="Ground Handling Services"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Professional Ground Handling Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation provides comprehensive ground handling services to airlines and private operators at
                airports across Nigeria, ensuring efficient and seamless operations on the ground.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced team delivers high-quality services with a focus on safety, efficiency, and passenger
                satisfaction, helping our clients maintain punctuality and operational excellence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Passenger Handling</h3>
                    <p className="text-muted-foreground">
                      Comprehensive passenger services from check-in to boarding, ensuring a smooth travel experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Baggage Handling</h3>
                    <p className="text-muted-foreground">
                      Efficient baggage processing, sorting, and delivery to ensure timely baggage handling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Ramp Services</h3>
                    <p className="text-muted-foreground">
                      Comprehensive aircraft handling on the ground, including loading, unloading, and aircraft
                      servicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Ground Handling Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Passenger Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Check-in and boarding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Special assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP handling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Arrival services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Transfer assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Baggage Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Baggage sorting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Loading and unloading</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Baggage tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Lost and found</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Special handling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ramp Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aircraft marshalling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Pushback and towing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Ground power unit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Air conditioning unit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aircraft cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cargo Handling</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cargo acceptance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cargo build-up and breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Warehouse management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Special cargo handling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Documentation processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Load Control</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Weight and balance calculations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Load planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Load sheet preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aircraft trim optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fuel monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Operations Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Flight monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Crew transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Weather briefing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Flight documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Communication services</span>
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Why Choose KRA Aviation Ground Handling?</h2>
            <p className="text-muted-foreground">
              Our ground handling services are designed to enhance operational efficiency, reduce turnaround times, and
              improve passenger satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our ground handling staff are highly trained and experienced in all aspects of airport operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-muted-foreground">
                We utilize the latest ground support equipment to ensure efficient and safe operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety Focus</h3>
              <p className="text-muted-foreground">
                Safety is our top priority, with strict adherence to international safety standards and practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-muted-foreground">
                We provide ground handling services at major airports across Nigeria, ensuring consistent service
                quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
              <p className="text-muted-foreground">
                We tailor our ground handling services to meet the specific needs of each airline and operator.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Operations</h3>
              <p className="text-muted-foreground">
                Our ground handling services are available 24/7, ensuring support for all flight schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Need Ground Handling Services?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our team to discuss your ground handling requirements and how we can support your operations at
              Nigerian airports.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

