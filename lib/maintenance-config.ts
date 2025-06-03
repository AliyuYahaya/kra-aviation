// Maintenance Mode Configuration
// Set MAINTENANCE_MODE to true to enable maintenance screen
// Set MAINTENANCE_MODE to false to show normal site

export const MAINTENANCE_MODE = true

// Optional: Add IP addresses that can bypass maintenance mode (for testing)
export const BYPASS_IPS = [
  // '192.168.1.100', // Example: your local IP
  // Add your IP addresses here if you want to bypass maintenance mode
]

// Optional: Add a bypass key in URL (?bypass=your-secret-key)
export const BYPASS_KEY = 'dev-access-2024'
