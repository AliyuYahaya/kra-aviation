import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/kra-logo.png"
                alt="KRA Aviation Logo"
                width={150}
                height={44}
                className="h-auto w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Nigeria's premier aviation services provider, offering comprehensive solutions for all your aviation
              needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/flight-operations" className="text-gray-300 hover:text-white transition-colors">
                  Flight Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-jet-charter"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Executive Jet Charter
                </Link>
              </li>
              <li>
                <Link href="/services/travel-management" className="text-gray-300 hover:text-white transition-colors">
                  Travel Management
                </Link>
              </li>
              <li>
                <Link href="/services/aircraft-management" className="text-gray-300 hover:text-white transition-colors">
                  Aircraft Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airport-protocol-transfer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Airport Protocol & Transfer
                </Link>
              </li>
              <li>
                <Link href="/services/umrah-hajj-packages" className="text-gray-300 hover:text-white transition-colors">
                  Umrah & Hajj Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/aviation-club" className="text-gray-300 hover:text-white transition-colors">
                  Aviation Club
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Head Office:</p>
                  <p className="text-gray-300">No 48 Lawan Dambuazu Road, Kano</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Abuja Office:</p>
                  <p className="text-gray-300">Nnamdi Azikiwe International Airport, Abuja</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                <span className="text-gray-300">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary flex-shrink-0" />
                <span className="text-gray-300">info@kraaviation.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KRA Aviation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

