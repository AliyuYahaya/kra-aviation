import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function FlightOperationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Flight Operations</h1>
            <p className="text-lg md:text-xl text-gray-500">
              Comprehensive flight planning, dispatch, and operational support for airlines and private operators across
              Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Expert Flight Operations Support</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KRA Aviation provides comprehensive flight operations services to ensure safe, efficient, and compliant
                flight operations for airlines and private operators throughout Nigeria.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of experienced aviation professionals delivers tailored solutions to meet the unique
                operational requirements of each client, helping them optimize performance while maintaining the highest
                safety standards.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Flight Planning and Dispatch</h3>
                    <p className="text-muted-foreground">
                      Comprehensive flight planning services including route optimization, fuel calculations, and
                      weather analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Crew Management</h3>
                    <p className="text-muted-foreground">
                      Efficient crew scheduling, qualification tracking, and fatigue management to ensure regulatory
                      compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-primary">Operational Control Center</h3>
                    <p className="text-muted-foreground">
                      24/7 operational control center providing real-time monitoring and support for all flight
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/flight-operations.jpg" alt="Flight Operations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Flight Operations Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flight Planning</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Route optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Fuel calculations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Weather analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>NOTAM monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>ATC flight plan filing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crew Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Crew scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Qualification tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Fatigue management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Training records management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Crew briefing and debriefing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Operational Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>24/7 flight monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Delay management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Diversion coordination</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Emergency response</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Operational performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>NCAA compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Documentation management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Operational manual development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Audit preparation and support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Regulatory reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Fuel efficiency programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Schedule optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Cost reduction strategies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Performance analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Continuous improvement programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Safety Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Safety management system (SMS)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Risk assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Incident investigation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Safety reporting system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Safety training and awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Case Study: Optimizing Flight Operations
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Challenge</h3>
              <p className="text-muted-foreground mb-6">
                A Nigerian airline was experiencing operational inefficiencies, including frequent delays, high fuel
                consumption, and crew scheduling challenges, resulting in increased costs and customer dissatisfaction.
              </p>

              <h3 className="text-xl font-semibold mb-4">Solution</h3>
              <p className="text-muted-foreground mb-6">
                KRA Aviation implemented a comprehensive flight operations optimization program, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Advanced flight planning system with route optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Crew management software with fatigue risk management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>24/7 operational control center with real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Fuel efficiency program with performance monitoring</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>15% reduction in operational delays</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>8% decrease in fuel consumption</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>20% improvement in crew utilization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>Significant increase in customer satisfaction scores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 ">Ready to Optimize Your Flight Operations?</h2>
            <p className="text-gray-500 mb-8">
              Contact our team of flight operations experts to discuss how we can help improve the efficiency, safety,
              and profitability of your aviation operations.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

