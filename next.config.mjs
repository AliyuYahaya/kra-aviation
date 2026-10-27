let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Service URLs from the previous site structure
    return [
      ["executive-jet-charter", "charter-brokerage"],
      ["aircraft-management", "aircraft-fleet-management"],
      ["aircraft-maintenance", "aircraft-fleet-management"],
      ["aviation-consulting", "aviation-consultancy"],
      ["flight-operations", "flight-support-handling"],
      ["ground-handling", "flight-support-handling"],
      ["airport-protocol-transfer", "protocol-services"],
    ].map(([from, to]) => ({ source: `/services/${from}`, destination: `/services/${to}`, permanent: true }))
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
