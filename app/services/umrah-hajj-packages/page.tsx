import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function UmrahHajjPackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Umrah & Hajj Packages</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Comprehensive Umrah and Hajj packages with premium accommodations, guided tours, and complete travel
              arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Premium Umrah & Hajj Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation offers comprehensive Umrah and Hajj packages designed to provide pilgrims with a
                spiritually fulfilling and comfortable journey to the holy cities of Makkah and Madinah.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our packages are tailored to meet the diverse needs of pilgrims, ensuring a seamless and memorable
                experience from departure to return.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">5-Star Accommodations</h3>
                    <p className="text-muted-foreground">
                      Stay in premium hotels close to the holy sites for maximum convenience and comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Fully Guided Tours</h3>
                    <p className="text-muted-foreground">
                      Experienced guides to assist with rituals and provide spiritual and historical context.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Complete Travel Arrangements</h3>
                    <p className="text-muted-foreground">
                      Visa processing, transportation, meals, and all necessary services included.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/umrah-hajj-packages.jpg" alt="Umrah & Hajj Packages" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Umrah Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Standard Package"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Standard Package</h3>
                  <div className="text-3xl font-bold mb-2">₦4.5M</div>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Destinations: Jeddah, Makkah and Madinah</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Duration: 12 Days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Accommodations: 5-Star Hotels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Saudi Arabia Visa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fully Guided Tour</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Shuttle Service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Meals: Daily breakfast, select dinners</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden relative hover:scale-105 transition-transform duration-200">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg z-10">
                Popular
              </div>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Premium Package"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                  <div className="text-3xl font-bold mb-2">₦6.2M</div>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Destinations: Jeddah, Makkah and Madinah</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Duration: 15 Days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Accommodations: 5-Star Hotels (Premium)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Saudi Arabia Visa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Private Guided Tour</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Private Transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>All Meals Included</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="VIP Package" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">VIP Package</h3>
                  <div className="text-3xl font-bold mb-2">₦8.5M</div>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Destinations: Jeddah, Makkah and Madinah</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Duration: 18 Days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Accommodations: Luxury 5-Star Hotels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Saudi Arabia Visa (Express Processing)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated Personal Guide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Luxury Private Transportation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Gourmet Meals & Premium Services</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hajj Packages */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Hajj Packages</h2>

          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our Hajj packages are designed to provide pilgrims with a spiritually fulfilling and comfortable journey
            during this sacred pilgrimage. Contact us for detailed information about our upcoming Hajj packages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold mb-4">Package Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Accommodations near Haram in Makkah and Madinah</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Tent accommodations in Mina and Arafat</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Transportation between holy sites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Guidance for all Hajj rituals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Visa processing and documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Pre-departure orientation sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Islamic scholars for spiritual guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Medical support throughout the journey</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Ziyarat (visits) to historical Islamic sites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>24/7 support staff assistance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Inquire About Hajj Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">What Our Pilgrims Say</h2>
            <p className="text-muted-foreground">
              Hear from pilgrims who have experienced our Umrah and Hajj services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ibrahim Abubakar</h3>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "My Umrah experience with KRA Aviation was exceptional. The accommodations were excellent, the guides
                  were knowledgeable, and everything was well-organized. I highly recommend their services to anyone
                  planning their pilgrimage."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fatima Mohammed</h3>
                    <p className="text-sm text-muted-foreground">Abuja, Nigeria</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Hajj package provided by KRA Aviation exceeded my expectations. The staff was attentive, the
                  accommodations were comfortable, and the spiritual guidance was invaluable. It was truly a
                  life-changing experience."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ahmed Yusuf</h3>
                    <p className="text-sm text-muted-foreground">Kano, Nigeria</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I was impressed by the attention to detail and the level of service provided by KRA Aviation during
                  our Umrah trip. The proximity of our hotel to the Haram made our experience even more special. I will
                  definitely use their services again."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Begin Your Sacred Journey?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact us today to learn more about our Umrah and Hajj packages and start planning your spiritual
              journey.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Book Your Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

