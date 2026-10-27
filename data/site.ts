// Company facts and wording from the KRA Aviation Services Ltd corporate brochure (v2).

export const unsplash = (id: string, width = 2000) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`

export const company = {
  name: "KRA Aviation Services Ltd",
  shortName: "KRA Aviation",
  tagline: "Connecting Nigeria to the World, Safely and Professionally.",
  email: "kra.aviation@gmail.com",
  phone: "+234 701 117 4741",
  phoneHref: "tel:+2347011174741",
  website: "www.kraaviation.com",
}

export const offices = [
  {
    city: "Kano",
    role: "Head Office",
    address: "No. 48 Lawan Dambazau Road, Kano, Nigeria",
    focus: "Corporate administration and governance.",
  },
  {
    city: "Abuja",
    role: "Operations Base",
    focus: "Flight operations, client coordination and government liaison.",
  },
  {
    city: "Lagos",
    role: "Corporate Office",
    focus: "Business development, commercial relations and engagement with international partners.",
  },
]

export const vision =
  "To become a leading Nigerian and African aviation group, known for safety, reliability and good service, and operating domestic and international flights as a fully certificated airline."

export const mission =
  "To provide safe, efficient aviation services through skilled people, strong international partnerships, regulatory compliance and sound corporate governance, and to create lasting value for our clients, partners, investors and communities."

export const values = [
  { name: "Professionalism", description: "We hold every operation and client interaction to a consistent, high standard." },
  { name: "Discipline", description: "We follow procedures, regulations and safety protocols every time." },
  { name: "Honesty", description: "We are open and truthful in all our dealings." },
  { name: "Trustworthiness", description: "We keep our promises and protect client confidentiality." },
  { name: "Confidence", description: "We act with competence and make clear decisions." },
  { name: "Customer care", description: "We treat every client with courtesy and respect, and pay attention to what they need." },
  { name: "Dedication", description: "We keep improving and we invest in long-term relationships." },
]

export const clientSegments = [
  { name: "Government institutions", value: "Official travel, delegation charters, protocol services and aviation advisory." },
  { name: "Private organisations", value: "Corporate charters, travel management and flight support." },
  { name: "Individuals and VIPs", value: "Private charter, concierge travel and protocol assistance." },
  {
    name: "International partners and investors",
    value: "Market-entry support, partnership structuring and aviation investment advisory.",
  },
  { name: "Aircraft owners and operators", value: "Fleet management, compliance support and operational oversight." },
]

export const partnerships = [
  { region: "China", focus: "Aircraft sourcing, technical cooperation, trade and investment links." },
  {
    region: "South Africa",
    focus: "Aviation expertise, maintenance and technical support networks, and regional business connections.",
  },
  { region: "Middle East", focus: "Charter, travel, investment and business partnerships with Gulf markets." },
]

export const regulatoryStatus = [
  { stage: "Air Operator's Permit", code: "AOP", status: "Active", detail: "Our current basis of operations." },
  { stage: "Air Transport Licence", code: "ATL", status: "In process", detail: "Application submitted." },
  { stage: "Air Operator's Certificate", code: "AOC", status: "Planned", detail: "To follow the ATL." },
]

export const teamDisciplines = [
  "Aviation operations",
  "Technical and regulatory matters",
  "Business development",
  "Finance",
  "Corporate communications",
  "Law",
]

export const reasonsToPartner = [
  "We operate under an AOP and have a defined path to the ATL and AOC.",
  "Our management and governance structures support steady, disciplined growth.",
  "Clients get charter, fleet management, flight support, travel and protocol services from one provider.",
  "Our partners in China, South Africa and the Middle East extend what we can source and deliver.",
  "We have offices in Kano, Abuja and Lagos.",
  "We adapt our services to government, corporate and private clients.",
]

export const growthRoadmap = [
  { horizon: "Near term", focus: "Strengthen charter, fleet management, handling and travel services. Secure the ATL." },
  { horizon: "Medium term", focus: "Obtain the AOC and launch scheduled domestic flights on key routes." },
  {
    horizon: "Long term",
    focus: "Expand into regional West African and international routes, with support from our partners in Asia, Africa and the Middle East.",
  },
]

export const brochure = {
  href: "/downloads/kra-aviation-corporate-brochure.pdf",
  fileName: "KRA-Aviation-Corporate-Brochure.pdf",
  size: "1.2 MB",
  pages: 8,
}

export const mainNav = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Aviation Club", href: "/aviation-club" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
]
