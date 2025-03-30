import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TravelManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Travel Management</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Comprehensive travel services including flight tickets, hotel reservations, and visa & insurance
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Professional Travel Management Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation offers comprehensive travel management services designed to make your journey seamless and
                stress-free, whether you're traveling for business or leisure.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced travel consultants provide personalized service and attention to detail, ensuring that
                every aspect of your travel experience is carefully planned and executed.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Flight Ticket Booking</h3>
                    <p className="text-muted-foreground">
                      Competitive fares on domestic and international flights with all major airlines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Hotel Reservations</h3>
                    <p className="text-muted-foreground">
                      Access to preferred rates at a wide range of accommodations worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Travel Visa & Insurance</h3>
                    <p className="text-muted-foreground">
                      Expert assistance with visa applications and comprehensive travel insurance coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Travel Management"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Travel Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Flight Ticket Booking</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Domestic and international flights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Competitive fares and discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Group booking management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>24/7 flight monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Rescheduling and cancellation assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hotel Reservations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Global hotel network</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Preferred rates and special offers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury and business accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Group booking coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Customized accommodation solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Travel Visa & Insurance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Visa application assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Document preparation and verification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive travel insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Medical and evacuation coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Trip cancellation protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Airport Protocol & Transfer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP meet and greet services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fast-track immigration assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury ground transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Airport lounge access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Baggage handling assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Corporate Travel Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated corporate travel consultants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Travel policy implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Expense management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Group and conference travel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Vacation Packages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Customized vacation planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>All-inclusive resort packages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cruise bookings and excursions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Adventure and specialty travel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Honeymoon and special occasion travel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Why Choose KRA Travel Management</h2>
            <p className="text-muted-foreground">
              Experience the difference of working with travel management professionals who are dedicated to exceeding
              your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                Dedicated travel consultants who understand your preferences and requirements, providing tailored
                solutions for every journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time and Cost Savings</h3>
              <p className="text-muted-foreground">
                Access to competitive rates, exclusive deals, and efficient booking processes that save you both time
                and money.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance for any travel-related issues or emergencies, ensuring peace of mind
                throughout your journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise and Experience</h3>
              <p className="text-muted-foreground">
                Benefit from our team's extensive knowledge of destinations, travel regulations, and industry best
                practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Solutions</h3>
              <p className="text-muted-foreground">
                One-stop shop for all your travel needs, from flights and accommodations to visas, insurance, and ground
                transportation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Integration</h3>
              <p className="text-muted-foreground">
                Advanced booking tools and mobile solutions that provide convenience and real-time updates for your
                travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Simplify Your Travel Experience?</h2>
            <p className="text-gray-500 mb-8">
              Contact our travel management team today to discuss your travel needs and discover how we can enhance your
              journey.
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

