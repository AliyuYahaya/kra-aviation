export interface BlogPost {
  slug: string
  title: string
  description: string
  // Body text. Separate paragraphs with a blank line. Start a line with "## " for a section heading.
  content: string
  author: string // "KRA Aviation"
  date: string // ISO, e.g. "2025-03-25"
  category: string
  image: string // full URL
  readingMinutes: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-aviation-nigeria",
    title: "Aviation in Nigeria: Opportunities and Challenges",
    description:
      "Where Nigerian aviation stands today, where it can grow, and what holds it back.",
    content: `Nigeria has a large population, an active business community and long distances between its major cities. Air travel connects those cities faster than road or rail, so demand for flights stays steady. The industry still faces real problems, and they affect airlines, airports and passengers every day.

This article covers the current state of the industry, the main opportunities for growth, the challenges operators face, and what needs to happen next.

## The current state of the industry

The Nigerian Civil Aviation Authority (NCAA) regulates civil aviation in Nigeria. It licenses operators, oversees safety and sets the rules that airlines, charter operators and maintenance organisations must follow.

Lagos, Abuja, Kano and Port Harcourt all have international airports. Smaller airports serve state capitals and other cities, though facilities and service levels vary from one airport to the next.

Domestic airlines carry passengers between Nigerian cities, and foreign carriers fly many of the long-haul international routes. Business aviation, including private jets and charter flights, serves companies, government and individuals who need flexible schedules or routes that scheduled airlines do not fly.

## Opportunities for growth

Air connectivity. Nigeria's position in West Africa makes it a good base for regional and international flights. More direct routes would cut travel times for business travellers and make trade and investment easier.

Infrastructure. Many airports need upgraded terminals, runways and equipment. Maintenance, repair and overhaul (MRO) facilities are another gap. Without enough local capacity, operators may need to send aircraft abroad for heavy maintenance, which adds cost and keeps aircraft out of service for longer. Investment in airports and MRO centres would also create jobs.

Technology. Tools such as biometric check-in and predictive maintenance can shorten queues at the airport and reduce the time aircraft spend on the ground for unplanned repairs.

People. The industry needs pilots, engineers, air traffic controllers and cabin crew. More aviation training in Nigeria would create jobs for young Nigerians and reduce reliance on foreign staff.

## Challenges facing the industry

Regulation. Operators and investors need rules that are clear, consistent and in line with international standards. When rules change often or are applied unevenly, it is harder to plan and harder to attract investment. The NCAA has made progress here, but there is still work to do.

Infrastructure. Some airports lack adequate facilities. Road links between airports and city centres can be poor, and air traffic control systems need investment. These gaps slow down operations and can affect safety.

Operating costs. Fuel and maintenance are among the largest costs for any operator, and both put heavy pressure on Nigerian airlines. Domestic carriers also compete with international airlines, which makes it harder to stay profitable.

Security. Airport security needs constant attention. Better screening and closer coordination between security agencies protect passengers, staff and aircraft.

## The way forward

The government can help by keeping policy stable, offering incentives to investors and funding infrastructure. Regulators should hold operators to international safety and security standards without adding paperwork that slows things down.

Airlines need efficient operations and good customer service to stay competitive. Airports need modern facilities and equipment to improve the passenger experience and attract more airlines.

Most of these problems need government, regulators, airlines and airports to act together. Fixing one part of the system does little if the other parts stay the same.

At KRA Aviation, we work on these issues every day through charter brokerage, aircraft and fleet management, aviation consultancy, and flight support and handling.`,
    author: "KRA Aviation",
    date: "2025-03-25",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    readingMinutes: 3,
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
