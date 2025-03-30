import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Contact Us | KRA Aviation",
  description: "Get in touch with KRA Aviation for all your aviation service needs in Nigeria.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-md hover:scale-105 transition-transform duration-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-1">+234 800 123 4567</p>
                <p className="text-muted-foreground">+234 900 876 5432</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:scale-105 transition-transform duration-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-1">info@kraaviation.com</p>
                <p className="text-muted-foreground">support@kraaviation.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:scale-105 transition-transform duration-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-1">Monday - Friday: 8am - 6pm</p>
                <p className="text-muted-foreground">Saturday: 9am - 1pm</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Interested In
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flight-operations">Flight Operations</SelectItem>
                    <SelectItem value="executive-jet-charter">Executive Jet Charter</SelectItem>
                    <SelectItem value="travel-management">Travel Management</SelectItem>
                    <SelectItem value="aircraft-management">Aircraft Management</SelectItem>
                    <SelectItem value="airport-protocol">Airport Protocol & Transfer</SelectItem>
                    <SelectItem value="umrah-hajj">Umrah & Hajj Packages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Head Office</h3>
                  <p className="text-muted-foreground">No 48 Lawan Dambuazu Road, Kano</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Abuja Office - Operation Base</h3>
                  <p className="text-muted-foreground">Nnamdi Azikiwe International Airport, Abuja</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Lagos Corporate Office</h3>
                  <p className="text-muted-foreground">Plot 1601 Adeola Hopewell, Victoria Island Lagos</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Airport Office Lagos</h3>
                  <p className="text-muted-foreground">Suite 208 Aviation plaza, Ikeja Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
          <Image src="/images/contact.jpg" alt="Map Location" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

