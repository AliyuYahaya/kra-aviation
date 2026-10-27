import type { LucideIcon } from "lucide-react"
import { Plane, Gauge, Compass, TowerControl, Globe2, ShieldCheck, Moon } from "lucide-react"
import { unsplash } from "@/data/site"

// Service copy is based on the KRA Aviation Services Ltd company profile.
// Umrah & Hajj is not in the profile; its content carries over from the previous site.

export type Service = {
  slug: string
  title: string
  // Short label for navigation and cards
  name: string
  icon: LucideIcon
  // Hero subtitle
  tagline: string
  // One or two sentence card description
  summary: string
  image: string
  imageAlt: string
  intro: { heading: string; paragraphs: string[] }
  capabilitiesHeading: string
  capabilities: { title: string; description: string }[]
  clients?: string[]
  process?: { heading: string; steps: { title: string; description: string }[] }
  packages?: {
    heading: string
    intro?: string
    note?: string
    items: { name: string; description?: string; features: string[]; featured?: boolean }[]
  }
  details?: { heading: string; intro?: string; groups: { title: string; items: string[] }[] }
  cta: { heading: string; body: string; label: string }
}

export const services: Service[] = [
  {
    slug: "charter-brokerage",
    title: "Charter Brokerage",
    name: "Charter Brokerage",
    icon: Plane,
    tagline:
      "Tailored private, executive, group and cargo charter solutions, from the first enquiry to arrival.",
    summary:
      "Private, executive, group and cargo charters sourced from vetted operators, with flight planning and permits handled for you.",
    image: unsplash("1540962351504-03099e0a754b"),
    imageAlt: "Private jet on the apron with its airstair lowered",
    intro: {
      heading: "The right aircraft, sourced and managed for you",
      paragraphs: [
        "KRA sources suitable aircraft from vetted operators and matches them to your mission, whether that is a single executive, a government delegation, a group movement or time-critical cargo.",
        "We handle flight planning and permits, and one contact stays with you from booking to arrival.",
      ],
    },
    capabilitiesHeading: "What we arrange",
    capabilities: [
      {
        title: "Private & executive charter",
        description: "Discreet, flexible travel for executives, VIPs and high-net-worth individuals.",
      },
      {
        title: "Group charter",
        description: "Aircraft sized for delegations, corporate teams and group movements.",
      },
      {
        title: "Cargo charter",
        description: "Charter capacity for time-critical and specialised cargo.",
      },
      {
        title: "Vetted operators",
        description: "Aircraft sourced from operators we have checked, matched to your route and requirements.",
      },
      {
        title: "Flight planning & permits",
        description: "We coordinate flight planning, overflight and landing permits on your behalf.",
      },
      {
        title: "Booking to arrival",
        description: "One point of contact who supports you through every stage of the trip.",
      },
    ],
    clients: ["Government institutions", "Private organisations", "Individuals and VIPs"],
    process: {
      heading: "How a charter comes together",
      steps: [
        {
          title: "Tell us the mission",
          description: "Share your dates, route, passenger numbers or cargo, and any special requirements.",
        },
        {
          title: "Receive options",
          description: "We source suitable aircraft from vetted operators and present clear options.",
        },
        {
          title: "Confirm and plan",
          description: "Once you choose, we secure the aircraft and coordinate flight planning and permits.",
        },
        {
          title: "Fly",
          description: "We stay with you from departure to arrival.",
        },
      ],
    },
    cta: {
      heading: "Planning a charter?",
      body: "Tell us where and when, and we will come back with suitable aircraft options.",
      label: "Request a charter",
    },
  },
  {
    slug: "aircraft-fleet-management",
    title: "Aircraft & Fleet Management",
    name: "Aircraft & Fleet Management",
    icon: Gauge,
    tagline:
      "End-to-end management for aircraft owners and operators, protecting safety, compliance and asset value.",
    summary:
      "Operational oversight, crew coordination, maintenance planning, compliance and cost control for aircraft owners and operators.",
    image: unsplash("1569154941061-e231b4725ef1"),
    imageAlt: "Aircraft parked in front of a modern airport terminal",
    intro: {
      heading: "Day-to-day management for owners and operators",
      paragraphs: [
        "Owning or operating an aircraft brings a constant stream of operational, technical and regulatory decisions. KRA takes that workload on, so the aircraft stays safe, compliant and ready to fly.",
        "Our management covers day-to-day oversight through to long-term cost control and protecting the value of your asset.",
      ],
    },
    capabilitiesHeading: "What we manage",
    capabilities: [
      {
        title: "Operational oversight",
        description: "Day-to-day supervision of your aircraft's operations.",
      },
      {
        title: "Crew coordination",
        description: "Scheduling and coordination of crew around your flying programme.",
      },
      {
        title: "Maintenance planning",
        description: "Planning maintenance with technical partners to keep the aircraft available.",
      },
      {
        title: "Regulatory compliance",
        description: "Keeping documentation and operations aligned with NCAA requirements.",
      },
      {
        title: "Cost control",
        description: "Visibility and discipline over the cost of operating your aircraft.",
      },
      {
        title: "Asset-value protection",
        description: "Decisions made with the long-term value of the aircraft in mind.",
      },
    ],
    clients: ["Aircraft owners", "Aircraft operators"],
    cta: {
      heading: "Talk to us about your aircraft",
      body: "Tell us about your aircraft and how you use it, and we will outline how KRA can manage it.",
      label: "Discuss management",
    },
  },
  {
    slug: "aviation-consultancy",
    title: "Airline & General Aviation Consultancy",
    name: "Aviation Consultancy",
    icon: Compass,
    tagline:
      "Advisory for airline start-ups, operators and investors, from regulatory pathways to operational readiness.",
    summary:
      "Regulatory pathways, business planning, fleet selection, route development, safety systems and operational readiness.",
    image: unsplash("1517479149777-5f3b1511d5ad"),
    imageAlt: "Aircraft wing above the clouds at dusk",
    intro: {
      heading: "Advice from an operator on the same path",
      paragraphs: [
        "KRA is itself progressing from an Air Operator's Permit towards an Air Transport Licence and Air Operator's Certificate. That first-hand experience informs the advice we give to start-ups, operators and investors.",
        "We help clients understand the regulatory pathway, build a sound business case and prepare their operations for what comes next.",
      ],
    },
    capabilitiesHeading: "Where we advise",
    capabilities: [
      {
        title: "Regulatory pathways",
        description: "Guidance through AOP, ATL and AOC requirements.",
      },
      {
        title: "Business planning",
        description: "Business plans and models for new and growing aviation ventures.",
      },
      {
        title: "Fleet selection",
        description: "Choosing aircraft that fit the mission, network and budget.",
      },
      {
        title: "Route development",
        description: "Assessing and developing routes and network opportunities.",
      },
      {
        title: "Safety systems",
        description: "Helping establish the safety systems an operation needs.",
      },
      {
        title: "Operational readiness",
        description: "Preparing people, processes and documentation for operations.",
      },
    ],
    clients: ["Airline start-ups", "Operators", "Investors"],
    cta: {
      heading: "Building an aviation venture?",
      body: "Tell us what stage you are at and what you are trying to achieve. We will explain where we can help.",
      label: "Speak to an adviser",
    },
  },
  {
    slug: "flight-support-handling",
    title: "Flight Support & Handling",
    name: "Flight Support & Handling",
    icon: TowerControl,
    tagline:
      "Coordination of everything an aircraft, its crew and its passengers need on the ground, at Nigerian and international airports.",
    summary:
      "Ground handling, flight planning, overflight and landing permits, transport, catering, fuelling and crew and passenger facilitation.",
    image: unsplash("1542296332-2e4473faf563"),
    imageAlt: "Airliner on the apron at sunset with ground support vehicles",
    intro: {
      heading: "One coordinator for every movement on the ground",
      paragraphs: [
        "Every arrival and departure depends on many parties working together. KRA coordinates them, from ground handling and fuel to permits, catering and transport, so your crew and passengers move without friction.",
        "We support operators at Nigerian airports and, through our network, at international airports.",
      ],
    },
    capabilitiesHeading: "What we coordinate",
    capabilities: [
      {
        title: "Ground handling",
        description: "Coordination of ground handling for arriving and departing aircraft.",
      },
      {
        title: "Flight planning",
        description: "Flight planning support for your routes.",
      },
      {
        title: "Overflight & landing permits",
        description: "Applications and follow-up for overflight and landing permits.",
      },
      {
        title: "Fuelling",
        description: "Fuel arranged ahead of arrival.",
      },
      {
        title: "Catering & transport",
        description: "Catering and ground transportation for crew and passengers.",
      },
      {
        title: "Crew & passenger facilitation",
        description: "Assistance for crew and passengers through the airport.",
      },
    ],
    clients: ["Aircraft operators", "Private organisations", "Charter clients"],
    cta: {
      heading: "Flying into Nigeria?",
      body: "Send us your schedule and requirements and we will coordinate support on the ground.",
      label: "Request flight support",
    },
  },
  {
    slug: "travel-management",
    title: "Travel Management",
    name: "Travel Management",
    icon: Globe2,
    tagline: "Corporate and government travel, planned and managed end to end.",
    summary:
      "Ticketing, itinerary planning, visa guidance, group travel and cost-effective travel programmes for organisations.",
    image: unsplash("1530521954074-e64f6810b32d"),
    imageAlt: "Traveller waiting in an airport lounge as an aircraft takes off",
    intro: {
      heading: "Travel that runs to plan",
      paragraphs: [
        "KRA manages travel for corporate and government clients, from a single ticket to a full programme for a delegation or team.",
        "We plan itineraries, guide travellers through visa requirements and keep programmes cost-effective.",
      ],
    },
    capabilitiesHeading: "What we handle",
    capabilities: [
      {
        title: "Ticketing",
        description: "Domestic and international flight bookings.",
      },
      {
        title: "Itinerary planning",
        description: "Itineraries planned around your schedule and objectives.",
      },
      {
        title: "Visa guidance",
        description: "Guidance on visa requirements and applications.",
      },
      {
        title: "Group travel",
        description: "Coordinated travel for delegations, teams and groups.",
      },
      {
        title: "Cost-effective programmes",
        description: "Travel programmes designed to control cost.",
      },
    ],
    clients: ["Government institutions", "Private organisations", "Individuals and VIPs"],
    cta: {
      heading: "Have a trip or programme to plan?",
      body: "Share your travel requirements and our team will put together a plan.",
      label: "Plan travel",
    },
  },
  {
    slug: "protocol-services",
    title: "Protocol Services",
    name: "Protocol Services",
    icon: ShieldCheck,
    tagline: "Discreet, professional support for VIPs and government delegations.",
    summary:
      "Airport reception, fast-track facilitation, lounge access, security coordination and on-ground assistance.",
    image: unsplash("1464037866556-6812c9d1c72e"),
    imageAlt: "Aircraft at the gate under a dramatic evening sky",
    intro: {
      heading: "Arrivals and departures, handled with discretion",
      paragraphs: [
        "For VIPs and official delegations, the airport is part of the visit. KRA provides professional protocol support so guests are received properly and move through quickly and securely.",
        "We coordinate every touchpoint, from reception at the aircraft to on-ground assistance after arrival.",
      ],
    },
    capabilitiesHeading: "What we provide",
    capabilities: [
      {
        title: "Airport reception",
        description: "Guests met and received on arrival.",
      },
      {
        title: "Fast-track facilitation",
        description: "Assistance through airport formalities.",
      },
      {
        title: "Lounge access",
        description: "Lounge arrangements before departure and between flights.",
      },
      {
        title: "Security coordination",
        description: "Coordination with security for principals and delegations.",
      },
      {
        title: "On-ground assistance",
        description: "Support for guests on the ground throughout their visit.",
      },
    ],
    clients: ["Government delegations", "VIPs", "Corporate visitors"],
    cta: {
      heading: "Expecting a VIP or delegation?",
      body: "Share the arrival details and we will arrange protocol support.",
      label: "Arrange protocol",
    },
  },
  {
    slug: "umrah-hajj-packages",
    title: "Umrah & Hajj Packages",
    name: "Umrah & Hajj",
    icon: Moon,
    tagline: "Umrah and Hajj journeys to Makkah and Madinah, with travel, accommodation and guidance arranged.",
    summary: "Umrah and Hajj packages with accommodation, guided support and complete travel arrangements.",
    image: unsplash("1591604129939-f1efa4d9f7fa"),
    imageAlt: "Al-Masjid an-Nabawi in Madinah at golden hour",
    intro: {
      heading: "Travel, accommodation and guidance for pilgrims",
      paragraphs: [
        "KRA arranges Umrah and Hajj packages for pilgrims travelling to the holy cities of Makkah and Madinah.",
        "Packages are tailored to the needs of each pilgrim, with travel, accommodation and guidance arranged from departure to return.",
      ],
    },
    capabilitiesHeading: "Included in our packages",
    capabilities: [
      {
        title: "Accommodation",
        description: "Hotels close to the holy sites.",
      },
      {
        title: "Guided support",
        description: "Guides to assist with rituals throughout the journey.",
      },
      {
        title: "Visa processing",
        description: "Saudi Arabia visa processing and documentation.",
      },
      {
        title: "Transport",
        description: "Transport between Jeddah, Makkah and Madinah.",
      },
    ],
    packages: {
      heading: "Umrah packages",
      intro: "Three ways to travel. Contact us for current dates and prices.",
      items: [
        {
          name: "Standard",
          features: [
            "Jeddah, Makkah and Madinah",
            "12 days",
            "5-star hotels",
            "Saudi Arabia visa",
            "Guided tour",
            "Shuttle service",
            "Daily breakfast, select dinners",
          ],
        },
        {
          name: "Premium",
          featured: true,
          features: [
            "Jeddah, Makkah and Madinah",
            "15 days",
            "Premium 5-star hotels",
            "Saudi Arabia visa",
            "Private guided tour",
            "Private transportation",
            "All meals included",
          ],
        },
        {
          name: "VIP",
          features: [
            "Jeddah, Makkah and Madinah",
            "18 days",
            "Luxury 5-star hotels",
            "Saudi Arabia visa (express processing)",
            "Dedicated personal guide",
            "Luxury private transportation",
            "Premium meals and services",
          ],
        },
      ],
    },
    details: {
      heading: "Hajj packages",
      intro: "Contact us for details of our upcoming Hajj packages.",
      groups: [
        {
          title: "Package features",
          items: [
            "Accommodation near the Haram in Makkah and Madinah",
            "Tent accommodation in Mina and Arafat",
            "Transport between the holy sites",
            "Guidance for all Hajj rituals",
            "Visa processing and documentation",
          ],
        },
        {
          title: "Additional services",
          items: ["Pre-departure orientation sessions", "Ziyarat to historical Islamic sites"],
        },
      ],
    },
    cta: {
      heading: "Planning Umrah or Hajj?",
      body: "Contact us for current Umrah and Hajj dates, prices and availability.",
      label: "Enquire now",
    },
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
