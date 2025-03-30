import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Plane, Shield, Users, Award, Clock, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-pattern">
        <div className="container px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-3xl text-primary md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Nigeria's Premier <span className="text-secondary">Aviation</span> Services Provider
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-500 max-w-2xl">
            Delivering excellence in flight operations, aircraft maintenance, ground handling, and aviation consulting
            across Nigeria.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Comprehensive aviation solutions tailored to meet the needs of the Nigerian aviation industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Flight Operations */}
            <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">Flight Operations</h3>
                <p className="text-gray-500 mb-4">
                  Comprehensive flight support including ground handling, fueling permits, and operational services.
                </p>
                <Link
                  href="/services/flight-operations"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Executive Jet Charter */}
            <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">Executive Jet Charter</h3>
                <p className="text-gray-500 mb-4">
                  Premium private jet charter services for business and leisure travel with highest standards.
                </p>
                <Link
                  href="/services/executive-jet-charter"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Travel Management */}
            <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">Travel Management</h3>
                <p className="text-gray-500 mb-4">
                  Flight tickets, hotel reservations, and visa & insurance assistance for seamless travel.
                </p>
                <Link
                  href="/services/travel-management"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Umrah & Hajj Packages */}
            <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">Umrah & Hajj Packages</h3>
                <p className="text-gray-500 mb-4">
                  Comprehensive Umrah and Hajj packages with premium accommodations and guided tours.
                </p>
                <Link
                  href="/services/umrah-hajj-packages"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-secondary">
            <Button asChild size="lg">
              <Link href="/services" className="text-secondary">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Aviation Club Section */}
      <section className="py-16 md:py-24 bg-white border-none">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">KRA Aviation Club</h2>
              <p className="text-lg text-gray-500 mb-6">
                Join our exclusive aviation club designed to help pilots maintain their skills and stay current with
                industry standards. Our comprehensive retraining programs are tailored for both experienced pilots and
                those looking to advance their careers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Regular Training Sessions</h3>
                    <p className="text-gray-500">
                      Access to scheduled training sessions led by experienced aviation professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Networking Opportunities</h3>
                    <p className="text-gray-500">
                      Connect with fellow pilots and aviation industry leaders across Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">Continuous Learning</h3>
                    <p className="text-gray-500">
                      Stay updated with the latest aviation regulations, technologies, and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/aviation-club">Join the Club</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559686043-aef1b70a4d46?q=80&w=2070&auto=format&fit=crop"
                alt="KRA Aviation Club"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest News</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Stay updated with the latest developments in KRA Aviation and the Nigerian aviation industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                  alt="News Image"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 25, 2025</div>
                <h3 className="text-xl text-primary font-semibold mb-2">KRA Aviation Expands Fleet with New Aircraft</h3>
                <p className="text-gray-500 mb-4">
                  KRA Aviation announces the addition of three new aircraft to its growing fleet, enhancing service
                  capacity across Nigeria.
                </p>
                <Link
                  href="/blog/kra-aviation-expands-fleet"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* News Item 2 */}
            <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop"
                  alt="News Image"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 18, 2025</div>
                <h3 className="text-xl text-primary font-semibold mb-2">Nigerian Aviation Industry Growth Forecast</h3>
                <p className="text-gray-500 mb-4">
                  Industry experts predict significant growth in Nigeria's aviation sector over the next five years.
                </p>
                <Link
                  href="/blog/nigerian-aviation-growth-forecast"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* News Item 3 */}
            <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop"
                  alt="News Image"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2025</div>
                <h3 className="text-xl text-primary font-semibold mb-2">KRA Aviation Club Hosts Pilot Training Workshop</h3>
                <p className="text-gray-500 mb-4">
                  The KRA Aviation Club successfully conducted a three-day training workshop for pilots across Nigeria.
                </p>
                <Link
                  href="/blog/pilot-training-workshop"
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="border bg-white text-primary">
              <Link href="/blog">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Flight with KRA Aviation?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Contact us today to learn more about our services and how we can support your aviation needs in Nigeria.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

