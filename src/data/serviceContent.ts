import { getCollectionBySlug } from "./portfolio";

export interface ServiceAnswer {
  question: string;
  answer: string;
}

export interface BudgetLink {
  label: string;
  to: string;
}

export interface ServiceContent {
  /** Direct answer to the buyer intent question. Rendered as the Overview paragraph. */
  answer: string;
  /** What the price depends on. Rendered as short paragraphs under the answer. */
  priceFactors: string[];
  /** Overview H2. Written as the question the buyer actually types into Google. */
  overviewHeading: string;
  /** Result oriented list used in the "What is included" column. */
  included: string[];
  /** Answers rendered on screen and marked up as FAQPage. */
  faqs: ServiceAnswer[];
  /** Service slugs shown as next steps. */
  relatedServices: string[];
  /** Portfolio collection shown as a link to the work. */
  portfolioSlug?: string;
  /** Images used by the "Selected projects" gallery. */
  gallery?: string[];
}

/** Shared closing line. Links to the estimate form instead of quoting a price. */
export const ESTIMATE_LINK: BudgetLink = {
  label: "Request a written estimate",
  to: "/contact",
};

export const ESTIMATE_SENTENCE =
  "Every project starts with a written estimate at no cost. We measure the space, list what the work covers and put the full scope in writing, so you know exactly what you are approving before anything begins.";

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "exterior-painting": {
    overviewHeading: "What does an exterior painting estimate include in Massachusetts?",
    answer:
      "Exterior painting is quoted after we walk the house, not over the phone. You receive a written estimate at no cost that lists every surface, the preparation required and the coating specified for each material, so the scope is clear before any work is approved. We measure the exterior, inspect all four sides and flag any wood or caulk that needs repair.",
    priceFactors: [
      "Preparation drives the scope more than paint does. Scraping, sanding, caulking and priming take more hours than rolling paint, and they decide whether the finish survives one winter or ten. The estimate shows how much preparation your home needs.",
      "Siding material changes the approach. Cedar and older wood absorb differently than vinyl, shingles or fiber cement, and each one needs its own primer and finish schedule. The estimate names the primer and the finish coat we will apply.",
      "Coastal exposure on Martha's Vineyard adds real work. Salt air, wind driven rain and sun on the south and west walls break down coatings faster, so those faces are called out separately in the scope.",
      "Height and access shape the schedule. Three story walls, tight lots, roof lines and dormers require ladders, staging or lifts, and the estimate states how access is handled.",
      "Weather windows set the start date. We paint when surface and air temperature stay above fifty degrees and dry conditions hold long enough for the coating to cure. Your written estimate includes a realistic finish window.",
    ],
    included: [
      "A written scope that lists every surface before work begins",
      "Power washing that removes chalk, pollen and mildew instead of painting over it",
      "Scraping, sanding and spot priming of bare or failing wood",
      "Caulking and sealing joints, gaps and penetrations that let water in",
      "Benjamin Moore exterior products matched to siding material and exposure",
      "Trim, shutters, doors, soffits and fascia finished to the same standard as the walls",
      "Daily cleanup, walkthrough and a closed touch up list before we leave",
    ],
    faqs: [
      {
        question: "How much does exterior house painting cost in Massachusetts?",
        answer:
          "The cost depends on the size of the home, siding condition and how much preparation the surface needs. We do not quote a number without seeing the property, because a phone estimate would either be too high or too low. Request a free written estimate and we will measure the house, inspect every side and list the full scope with pricing before you commit.",
      },
      {
        question: "How long does exterior house painting take in Massachusetts?",
        answer:
          "A typical single family home takes five to ten working days once preparation begins. Larger homes, extensive scraping or coastal properties with difficult access can run two to three weeks. We give you a start date and a realistic finish window before the crew arrives.",
      },
      {
        question: "How often should a house in Massachusetts be repainted?",
        answer:
          "Most wood sided homes need a full repaint every seven to ten years. Homes on Martha's Vineyard and along the Cape often sit closer to the seven year mark because salt air and wind driven rain wear the south and west walls first. A light recoat of the trim every four to five years extends the life of the whole job.",
      },
      {
        question: "Do you repair damaged siding and rotten trim before painting?",
        answer:
          "Yes. We inspect the exterior for soft wood, rot and loose caulk during the estimate. Minor repairs are folded into the paint scope. Larger carpentry is quoted separately in the written estimate, so you see the cost and decide before any work starts.",
      },
      {
        question: "Can you paint in winter or during rain?",
        answer:
          "We paint when the surface and air temperature stay above fifty degrees and the surface is dry. Rain days pause the work rather than compromise the finish. In colder months we schedule weather windows and tell you in advance how they affect your dates.",
      },
      {
        question: "Is your exterior painting work insured?",
        answer:
          "Yes. Tony's Painting and Remodeling is licensed and insured. We protect plants, walks and decks for the duration of the project and carry insurance while the work is underway.",
      },
    ],
    relatedServices: ["interior-painting", "deck-stairs", "carpentry"],
    portfolioSlug: "exterior-painting-and-siding",
    gallery: [
      "/images/project-02.jpg",
      "/images/project-12.jpg",
      "/images/project-14.jpg",
      "/images/project-13.jpg",
      "/images/project-03.jpg",
      "/images/project-01.jpg",
    ],
  },
};

export function getServiceContent(slug: string | undefined): ServiceContent | undefined {
  if (!slug) return undefined;
  return SERVICE_CONTENT[slug];
}

/** Resolves a collection slug to its display title, so internal links always print a real label. */
export function getPortfolioTitle(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  return getCollectionBySlug(slug)?.title;
}
