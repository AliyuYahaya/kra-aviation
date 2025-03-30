import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AviationConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Aviation Consulting</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Strategic advisory services for airlines, airports, and aviation businesses across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Expert Aviation Consulting Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation provides comprehensive consulting services to help aviation businesses optimize operations,
                improve efficiency, and achieve strategic objectives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of experienced aviation consultants brings deep industry knowledge and practical expertise to
                deliver tailored solutions for the unique challenges facing the Nigerian aviation sector.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Business Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Strategic planning and business development services to help aviation businesses achieve
                      sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      Expert guidance on navigating complex aviation regulations and ensuring full compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Operational Efficiency</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analysis and optimization of aviation operations to improve performance and reduce
                      costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Aviation Consulting"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Consulting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Business plan development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Market analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Route network planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Fleet planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Growth strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cost reduction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Performance improvement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Resource optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Quality management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Regulatory Affairs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Compliance assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Certification support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Regulatory documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Audit preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Regulatory liaison</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Safety Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>SMS implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Safety risk assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Safety culture development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Safety training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Safety performance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Financial Advisory</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Financial analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Investment planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Cost management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Revenue optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Financial restructuring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Human Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Workforce planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Training needs analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Competency frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Organizational development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                    <span>Change management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Our Consulting Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to deliver effective consulting solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Assessment</h3>
              <p className="text-muted-foreground">
                We conduct a thorough assessment of your current operations, challenges, and objectives to understand
                your specific needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Analysis</h3>
              <p className="text-muted-foreground">
                Our experts analyze the data and information gathered to identify opportunities for improvement and
                develop strategic recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Implementation</h3>
              <p className="text-muted-foreground">
                We work closely with your team to implement the recommended solutions, providing guidance and support
                throughout the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Evaluation</h3>
              <p className="text-muted-foreground">
                We continuously monitor and evaluate the results of the implemented solutions, making adjustments as
                needed to ensure optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Success Stories</h2>
            <p className="text-muted-foreground">
              See how our consulting services have helped aviation businesses across Nigeria achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Airline Operational Efficiency</h3>
                <p className="text-muted-foreground mb-4">
                  We helped a Nigerian airline improve operational efficiency, resulting in a 15% reduction in costs and
                  improved on-time performance.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-secondary">
                  <Link href="#" className="flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Airport Revenue Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Our consulting team helped a regional airport increase non-aeronautical revenue by 25% through
                  strategic commercial development.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-secondary">
                  <Link href="#" className="flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Transform Your Aviation Business?</h2>
            <p className="text-gray-500 mb-8">
              Contact our consulting team to discuss how we can help you overcome challenges and achieve your strategic
              objectives.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

