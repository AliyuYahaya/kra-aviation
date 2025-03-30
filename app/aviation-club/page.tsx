import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Award, BookOpen, Calendar, Clock, Shield } from "lucide-react"

export default function AviationClubPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">KRA Aviation Club</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Join our exclusive aviation club designed to help pilots maintain their skills and stay current with
              industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/aviation-club.jpg" alt="Aviation Club" fill className="object-cover" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Elevate Your Aviation Career</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The KRA Aviation Club is a premier community for pilots and aviation professionals in Nigeria. We
                provide comprehensive retraining programs, networking opportunities, and continuous learning to help you
                advance your aviation career.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're an experienced pilot looking to maintain your skills or a new pilot seeking to build your
                career, our club offers the resources, training, and connections you need to succeed in the dynamic
                aviation industry.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Professional Development</h3>
                    <p className="text-muted-foreground">
                      Access to specialized training programs, workshops, and seminars led by industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Networking Opportunities</h3>
                    <p className="text-muted-foreground">
                      Connect with fellow aviation professionals, industry leaders, and potential employers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Exclusive Resources</h3>
                    <p className="text-muted-foreground">
                      Access to the latest industry publications, research, and tools to enhance your knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Membership Benefits</h2>
            <p className="text-muted-foreground">
              Join the KRA Aviation Club and enjoy a wide range of exclusive benefits designed to support your aviation
              career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Recurrent training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Simulator access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Type rating refreshers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Emergency procedures training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Networking Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Monthly meetups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry conferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Career fairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Social gatherings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Career counseling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Resume building</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Interview preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Leadership development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industry Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Guest speaker sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Technology demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aviation exhibitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Regulatory updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Technical seminars</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Online courses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry publications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Job board access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Member-only resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Mentorship opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pilot Retraining Programs</h2>
            <p className="text-muted-foreground">
              Our comprehensive retraining programs are designed to help pilots maintain their skills and stay current
              with industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Recurrent Training"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Recurrent Training</h3>
                <p className="text-muted-foreground mb-4">
                  Regular training sessions to help pilots maintain proficiency and meet regulatory requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Emergency procedures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aircraft systems review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Simulator sessions</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Type Rating Refresher"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Type Rating Refresher</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized training to help pilots maintain proficiency on specific aircraft types.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Aircraft-specific training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Systems and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Performance calculations</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="CRM Training" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">CRM Training</h3>
                <p className="text-muted-foreground mb-4">
                  Crew Resource Management training to enhance teamwork, communication, and decision-making skills.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Communication techniques</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Decision-making processes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Team coordination</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Regulatory Updates"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Regulatory Updates</h3>
                <p className="text-muted-foreground mb-4">
                  Stay current with the latest aviation regulations and requirements in Nigeria and internationally.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>NCAA regulations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>ICAO standards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Compliance requirements</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Members Say</h2>
            <p className="text-muted-foreground">
              Hear from pilots who have benefited from our Aviation Club membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Captain Adebayo Johnson</h3>
                    <p className="text-sm text-muted-foreground">Commercial Pilot, Lagos</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The KRA Aviation Club has been instrumental in helping me maintain my skills and stay current with
                  industry standards. The recurrent training programs are excellent, and the networking opportunities
                  have been invaluable for my career."
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
                    <h3 className="font-semibold">First Officer Chioma Okafor</h3>
                    <p className="text-sm text-muted-foreground">Airline Pilot, Abuja</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Joining the KRA Aviation Club was one of the best decisions I made for my career. The training
                  programs are top-notch, and the mentorship opportunities have helped me advance in my career faster
                  than I expected."
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
                    <h3 className="font-semibold">Captain Emmanuel Nwachukwu</h3>
                    <p className="text-sm text-muted-foreground">Flight Instructor, Port Harcourt</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a flight instructor, staying current with the latest training techniques and regulations is
                  crucial. The KRA Aviation Club provides all the resources I need to ensure I'm delivering the best
                  training to my students."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Membership Plans</h2>
            <p className="text-muted-foreground">
              Choose the membership plan that best suits your needs and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Basic Membership</h3>
                  <div className="text-3xl font-bold mb-2">₦50,000</div>
                  <p className="text-sm text-muted-foreground">per year</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Access to monthly meetups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry publications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Online resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Job board access</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md relative hover:scale-105 transition-transform duration-200">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Professional Membership</h3>
                  <div className="text-3xl font-bold mb-2">₦120,000</div>
                  <p
                    className="text-sm text-muted-
foreground"
                  >
                    per year
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>All Basic benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Quarterly training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Industry conferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Networking events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Career counseling</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Executive Membership</h3>
                  <div className="text-3xl font-bold mb-2">₦250,000</div>
                  <p className="text-sm text-muted-foreground">per year</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>All Professional benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Simulator time allocation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>One-on-one mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>VIP industry events</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Advance Your Aviation Career?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Join the KRA Aviation Club today and take your aviation career to new heights.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Join the Club</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

