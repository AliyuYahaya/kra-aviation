import React from 'react'
import { Wrench, Plane, Clock, Shield, Users, Award, ArrowRight } from 'lucide-react'

const MaintenanceMode = () => {
  return (
    <div className="min-h-screen bg-gray-50 hero-pattern">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Animated plane icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-secondary/20 rounded-full w-32 h-32 mx-auto animate-pulse"></div>
            <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg border-4 border-secondary/20">
              <Plane className="w-16 h-16 text-secondary animate-bounce" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            We're Taking Off Soon!
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            KRA Aviation is currently under maintenance
          </h2>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-secondary mr-2" />
              <span className="text-lg font-semibold text-primary">Site Maintenance in Progress</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We're currently performing scheduled maintenance to improve your experience. 
              Our aviation services, pilot training programs, and expert consultations will be back online shortly.
            </p>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-primary">Systems Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-primary">Updates in Progress</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-primary">ETA: Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About KRA Aviation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nigeria's Premier Aviation Services Provider
            </p>
          </div>

          {/* Company Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Excellence in Aviation Services</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                KRA Aviation stands as Nigeria's premier aviation services provider, delivering excellence in flight operations, 
                aircraft maintenance, ground handling, and aviation consulting across Nigeria. With our commitment to safety, 
                reliability, and customer satisfaction, we've established ourselves as the trusted partner for all aviation needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Flight Operations */}
              <div className="text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Flight Operations</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive flight support including ground handling, fueling permits, and operational services.
                </p>
              </div>

              {/* Executive Jet Charter */}
              <div className="text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Executive Jet Charter</h4>
                <p className="text-gray-600 text-sm">
                  Premium private jet charter services for business and leisure travel with the highest standards.
                </p>
              </div>

              {/* Travel Management */}
              <div className="text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Travel Management</h4>
                <p className="text-gray-600 text-sm">
                  Flight tickets, hotel reservations, and visa & insurance assistance for seamless travel.
                </p>
              </div>

              {/* Umrah & Hajj Packages */}
              <div className="text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Umrah & Hajj Packages</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive Umrah and Hajj packages with premium accommodations and guided tours.
                </p>
              </div>
            </div>
          </div>

          {/* KRA Aviation Club Highlight */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg shadow-lg p-8 text-white mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">KRA Aviation Club</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Join our exclusive aviation club designed to help pilots maintain their skills and stay current with 
                  industry standards. Our comprehensive retraining programs are tailored for both experienced pilots and 
                  those looking to advance their careers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Regular training sessions with experienced professionals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Networking opportunities with industry leaders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Continuous learning and skill development</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <p className="text-sm text-gray-200">
                  Empowering Nigeria's aviation professionals through education and community
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose KRA Aviation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Why Choose KRA Aviation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Safety First</h4>
                <p className="text-gray-600">
                  Uncompromising commitment to safety standards and regulatory compliance in all our operations.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Excellence</h4>
                <p className="text-gray-600">
                  Delivering exceptional service quality that exceeds expectations across all aviation services.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Experience</h4>
                <p className="text-gray-600">
                  Years of expertise in the Nigerian aviation industry with a proven track record of success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-secondary text-white rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg mb-6 text-orange-100">
              For urgent aviation services or inquiries, please contact us directly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-orange-100">info@kraaviation.com</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-orange-100">+234 (0) XXX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-lg font-medium text-primary mb-2">KRA Aviation</p>
          <p className="text-sm">&copy; 2024 KRA Aviation. Nigeria's Premier Aviation Services Provider.</p>
          <p className="text-sm mt-1">We'll be back soon with enhanced services!</p>
        </div>
      </div>
    </div>
  )
}

export default MaintenanceMode