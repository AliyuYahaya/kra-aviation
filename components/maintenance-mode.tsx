import React from 'react'
import { Wrench, Plane, Clock } from 'lucide-react'

const MaintenanceMode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated plane icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-200 rounded-full w-32 h-32 mx-auto animate-pulse opacity-30"></div>
          <div className="relative bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg">
            <Plane className="w-16 h-16 text-blue-600 animate-bounce" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          We're Taking Off Soon!
        </h1>
        
        {/* Subheading */}
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          KRA Aviation is currently under maintenance
        </h2>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg font-semibold text-gray-700">Site Maintenance in Progress</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We're currently performing scheduled maintenance to improve your experience. 
            Our aviation services, pilot training programs, and expert consultations will be back online shortly.
          </p>
        </div>

        {/* Status indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Systems Online</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Updates in Progress</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">ETA: Soon</span>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-blue-600 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h3>
          <p className="mb-4">For urgent aviation services or inquiries, please contact us directly:</p>
          <div className="space-y-2">
            <p><strong>Email:</strong> info@kraaviation.com</p>
            <p><strong>Phone:</strong> +234 (0) XXX XXX XXXX</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>&copy; 2024 KRA Aviation. We'll be back soon!</p>
        </div>
      </div>
    </div>
  )
}

export default MaintenanceMode