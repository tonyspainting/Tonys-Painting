import type { ServiceArea } from "./serviceAreas";

export interface CityRecord {
  city: string;
  slug: string;
  region: string;
  county: string;
  /** One sentence a person would use to describe the town. */
  intro: string;
  /** Why exteriors and interiors here behave the way they do. */
  climate: string;
  /** Local housing stock. Keeps each page factual and distinct. */
  housing: string;
  /** Streets or landmarks that anchor the page to the town. */
  landmarks: string[];
  /** Services that get requested most in this town, in priority order. */
  priorityServices: string[];
  /** What homeowners here usually ask for, in local terms. */
  localNeeds?: string[];
  /** Local questions answered on the page and marked up as FAQPage. */
  faqs?: { question: string; answer: string }[];
}

export const CITY_RECORDS: CityRecord[] = [
  {
    city: "Edgartown",
    slug: "edgartown",
    region: "Martha's Vineyard",
    county: "Dukes County",
    intro:
      "Edgartown runs from the harbor and North Water Street out toward Katama and the South Shore beaches.",
    climate:
      "Salt air and wind driven rain hit the east and south facing walls hardest. Painted trim and shutters near the water fail first, so those surfaces get inspected and primed before any finish coat.",
    housing:
      "Most of the work here is on historic homes, three season properties and rentals that need a finish ready for the summer rental calendar.",
    landmarks: ["North Water Street", "Katama", "Chappaquiddick", "Main Street Edgartown"],
    priorityServices: ["exterior-painting", "interior-painting", "carpentry", "deck-stairs"],
    localNeeds: [
      "Edgartown work is seasonal. Most calls are for rentals and second homes that have to be ready before the summer calendar starts, and for year round owners who want the work done while the house is empty. That shapes the schedule: exterior work is front loaded in late spring, interior work fills the shoulder months.",
      "Historic homes near the harbor come with trim profiles, shutters and colors that have to be right. We match the existing color from a sample, repair rather than replace wood where it can be saved, and keep the details that give the house its value.",
    ],
    faqs: [
      {
        question: "When should I book exterior painting in Edgartown?",
        answer:
          "Late spring through early fall, and earlier for the waterfront walls. Summer fills first, so calling in March or April gives the best choice of dates.",
      },
      {
        question: "Can you match the historic colors on my house?",
        answer:
          "Yes. We match from a sample of the existing paint or a color chip and test the color on the house before buying the full batch.",
      },
      {
        question: "Do you work on rentals between guests?",
        answer:
          "Yes. We work in turnover windows and can split a project so each room is finished and usable before the next guest arrives.",
      },
      {
        question: "Do you repair rot before painting near the harbor?",
        answer:
          "Yes. Soft trim and sills are common near the water. We replace the damaged wood, prime it and finish it so the repair disappears into the trim.",
      },
    ],
  },
  {
    city: "Chilmark",
    slug: "chilmark",
    region: "Martha's Vineyard",
    county: "Dukes County",
    intro:
      "Chilmark sits up island, from Menemsha and Squibnocket to the hills and farmland along State Road.",
    climate:
      "Open ocean exposure in Menemsha wears siding and trim faster than any inland town on the island. Cedar and shingle exteriors need breathable stains and clear finishes rather than film forming paint.",
    housing:
      "Working farms, shingle style homes and large seasonal properties, many with long exterior runs and outbuildings.",
    landmarks: ["Menemsha", "Squibnocket", "State Road", "Chilmark Tavern area"],
    priorityServices: ["exterior-painting", "deck-stairs", "interior-painting", "carpentry"],
    localNeeds: [
      "Up island properties face open ocean wind and salt. Siding and trim on the exposed side fail faster here than anywhere else we work, so those walls are inspected first and coated with a product made for that exposure.",
      "Cedar and shingle exteriors need to breathe. A film forming paint traps moisture and peels from the bottom up, so we use breathable stains and clear finishes that let the wood dry from the inside out.",
    ],
    faqs: [
      {
        question: "What is the best finish for cedar shingles in Chilmark?",
        answer:
          "A breathable stain or clear finish. Paint traps moisture in shingles and peels from the bottom up. We match the product to the age and condition of the shingle.",
      },
      {
        question: "How often does an up island house need repainting?",
        answer:
          "Exterior trim usually needs attention every four to five years and a full repaint closer to seven, because of wind and salt exposure.",
      },
      {
        question: "Do you work in Menemsha and Squibnocket?",
        answer:
          "Yes. We work across Chilmark, including Menemsha, Squibnocket and the State Road corridor.",
      },
      {
        question: "Can you work while we are off island?",
        answer:
          "Yes. Many clients are away for the season. We send photos at each stage and do the final walkthrough on video or in person when you return.",
      },
    ],
  },
  {
    city: "West Tisbury",
    slug: "west-tisbury",
    region: "Martha's Vineyard",
    county: "Dukes County",
    intro:
      "West Tisbury covers the middle of the island, from Lambert's Cove and Music Street to the State Road corridor.",
    climate:
      "Tree cover and humidity slow drying on north facing walls. We schedule exterior work around dew and shade so the coating cures instead of sitting wet overnight.",
    housing:
      "Cape style farmhouses, converted barns and cedar shingle homes where breathability matters as much as color.",
    landmarks: ["Lambert's Cove", "Music Street", "State Road", "West Tisbury Farmers Market"],
    priorityServices: ["exterior-painting", "interior-painting", "plastering", "flooring"],
    localNeeds: [
      "Tree cover and humidity change how paint cures. North facing walls stay damp longer, so we schedule those elevations for the sunniest part of the day and avoid coating late when dew will sit on the surface overnight.",
      "Farmhouses, converted barns and shingle homes are the norm. Many have long exterior runs and outbuildings, so the estimate covers each structure and the schedule groups them, keeping the crew from moving equipment every day.",
    ],
    faqs: [
      {
        question: "Why does paint fail on the north side of my house?",
        answer:
          "Shade and humidity slow drying. Mildew grows on damp surfaces and the coating never fully cures. Cleaning, a mildew resistant primer and better timing solve most of it.",
      },
      {
        question: "Do you paint barns and outbuildings?",
        answer:
          "Yes. Barns, garages and sheds are scoped with the house or separately, and we match the finish to the structure and its condition.",
      },
      {
        question: "Can you work around a farm schedule?",
        answer:
          "Yes. We plan access, parking and equipment around animals, deliveries and harvest dates.",
      },
      {
        question: "How long does a full exterior take in West Tisbury?",
        answer:
          "Most homes take five to ten working days, longer for large shingle properties or several buildings.",
      },
    ],
  },
  {
    city: "Falmouth",
    slug: "falmouth",
    region: "Cape Cod",
    county: "Barnstable County",
    intro:
      "Falmouth stretches from Woods Hole and the Heights to East Falmouth and Hatchville.",
    climate:
      "Cape humidity and salt fog shorten the life of exterior trim. Houses near the water usually need trim touch ups every four to five years and a full repaint inside seven.",
    housing:
      "A mix of year round homes, Victorian village houses and summer properties that get refreshed ahead of the season.",
    landmarks: ["Woods Hole", "Falmouth Heights", "Main Street Falmouth", "Hatchville"],
    priorityServices: ["exterior-painting", "interior-painting", "remodeling", "deck-stairs"],
    localNeeds: [
      "Falmouth runs from Woods Hole to East Falmouth, and the exposure changes with it. Houses near the water deal with salt fog and wind, while inland village homes deal with shade and slower drying. We look at the actual location before specifying the coating.",
      "A large share of the work is on year round homes with Victorian and village detailing, plus summer properties that need to be ready by Memorial Day. Trim and porches take the most time because that is where the detail is.",
    ],
    faqs: [
      {
        question: "How often should a Falmouth house be repainted?",
        answer:
          "Trim every four to five years near the water, with a full repaint closer to seven. Inland homes can stretch to eight or ten with good preparation.",
      },
      {
        question: "Do you paint porches and detailed trim?",
        answer:
          "Yes. Porches, columns, railings and decorative trim are common in Falmouth. They are brushed and finished carefully rather than sprayed and rushed.",
      },
      {
        question: "Do you work in Woods Hole and Falmouth Heights?",
        answer:
          "Yes, across Falmouth including Woods Hole, Falmouth Heights, Menauhant and Hatchville.",
      },
      {
        question: "Can you finish before the summer season?",
        answer:
          "If the booking is early enough. Exterior work fills quickly in spring, so the earlier the walkthrough, the better the choice of dates.",
      },
    ],
  },
  {
    city: "Bourne",
    slug: "bourne",
    region: "Cape Cod",
    county: "Barnstable County",
    intro:
      "Bourne borders the canal, from Buzzards Bay and Monument Beach to Sagamore and Bournedale.",
    climate:
      "Wind off the canal drives rain against siding on both sides of the water. Fasteners, caulk lines and sill trim fail first, so those get checked before painting begins.",
    housing:
      "Mostly year round homes and capes, with older canal side properties that need carpentry before paint.",
    landmarks: ["Cape Cod Canal", "Monument Beach", "Sagamore", "Buzzards Bay Village"],
    priorityServices: ["exterior-painting", "carpentry", "interior-painting", "flooring"],
    localNeeds: [
      "Bourne sits on both sides of the canal, and wind drives rain against the siding on either side. Fasteners, caulk lines and sill trim fail first, so those get checked before any paint goes on.",
      "Most of the housing is year round, with older canal side properties that need carpentry before paint. We price the repairs and the painting together so the sequence is right.",
    ],
    faqs: [
      {
        question: "Why does caulk fail so fast near the canal?",
        answer:
          "Wind driven rain and freeze thaw work the joints. We remove the old caulk, clean the joint and use a product rated for exterior movement.",
      },
      {
        question: "Do you repair siding before painting?",
        answer:
          "Yes. Loose or rotted siding is repaired or replaced, then primed before the finish coats go on.",
      },
      {
        question: "Do you cover Monument Beach and Sagamore?",
        answer:
          "Yes, plus Buzzards Bay, Bournedale and the rest of Bourne.",
      },
      {
        question: "How long does an exterior take in Bourne?",
        answer:
          "Five to ten working days for most homes, longer when carpentry is part of the scope.",
      },
    ],
  },
  {
    city: "Pocasset",
    slug: "pocasset",
    region: "Cape Cod",
    county: "Barnstable County",
    intro:
      "Pocasset is a Bourne village on Buzzards Bay, along Shore Road and the Pocasset River.",
    climate:
      "Waterfront homes on the bay face direct sun reflection and salt spray. Decks, railings and south facing siding take the most damage and are scheduled first.",
    housing:
      "Cottages, raised homes and waterfront properties, with cedar decks that need regular cleaning and sealing.",
    landmarks: ["Shore Road", "Pocasset River", "Monument Beach", "Buzzards Bay shoreline"],
    priorityServices: ["deck-stairs", "exterior-painting", "interior-painting", "carpentry"],
    localNeeds: [
      "Pocasset is a village on Buzzards Bay, and waterfront homes take reflected sun and salt spray. Decks, railings and south facing siding wear first and are scheduled before the rest of the house.",
      "Many properties are cottages and raised homes with cedar decks, so deck maintenance and exterior painting often go together. Doing both in one visit keeps the finish consistent and saves a setup.",
    ],
    faqs: [
      {
        question: "How often do decks in Pocasset need sealing?",
        answer:
          "Every two to three years on the water, slightly longer inland. South facing boards gray first.",
      },
      {
        question: "Do you work on raised homes and cottages?",
        answer:
          "Yes. We plan access and staging for raised structures and tight lots.",
      },
      {
        question: "Can you repair a deck before staining?",
        answer:
          "Yes. Soft boards, loose railings and failed fasteners are repaired before any finish is applied.",
      },
      {
        question: "Do you paint and stain in the same visit?",
        answer:
          "When the scope allows, yes. It saves setup time and keeps the finish consistent across the house and the deck.",
      },
    ],
  },
  {
    city: "Sandwich",
    slug: "sandwich",
    region: "Cape Cod",
    county: "Barnstable County",
    intro:
      "Sandwich is the oldest town on the Cape, along Route 6A from the village center to Sandwich and East Sandwich beaches.",
    climate:
      "Inland shade and coastal wind meet here. Historic village homes often need careful preparation because old layers of paint hide checked wood and loose caulk.",
    housing:
      "Colonial and cape style homes, homes in the historic district and properties with original trim and shutters.",
    landmarks: ["Route 6A", "Sandwich Village", "East Sandwich Beach", "Boardwalk Beach"],
    priorityServices: ["exterior-painting", "carpentry", "interior-painting", "plastering"],
    localNeeds: [
      "Sandwich is the oldest town on the Cape, and the historic village has original trim and shutters that need care. Old layers of paint can hide checked wood and loose caulk, so preparation takes longer here than on a newer house.",
      "Route 6A runs through the historic district, where exterior colors and details are part of the character. We match what is there and repair rather than replace wherever the wood can be saved.",
    ],
    faqs: [
      {
        question: "Do you work on historic homes in Sandwich village?",
        answer:
          "Yes. We repair and match original trim profiles and take care with approved colors in the historic district.",
      },
      {
        question: "Why does old paint peel in sheets?",
        answer:
          "Usually moisture trapped under a film forming coating. Scraping, sanding and a breathable approach solve it.",
      },
      {
        question: "Do you cover East Sandwich and the beaches?",
        answer:
          "Yes, including East Sandwich, Sandwich village and the Boardwalk area.",
      },
      {
        question: "How long does a historic exterior take?",
        answer:
          "Longer than new construction, often two to three weeks, because preparation and detail work take time.",
      },
    ],
  },
  {
    city: "Hyannis",
    slug: "hyannis",
    region: "Cape Cod",
    county: "Barnstable County",
    intro:
      "Hyannis is the commercial center of Barnstable, from Main Street and the harbor to Hyannisport and West Yarmouth line.",
    climate:
      "A dense mix of sun exposure, salt air and traffic. Commercial fronts and rental properties need durable, washable coatings because they are cleaned often.",
    housing:
      "Homes, condominiums, rental units and storefronts, with tight schedules around tenant turnover and summer season openings.",
    landmarks: ["Main Street Hyannis", "Hyannis Harbor", "Hyannisport", "Barnstable Road"],
    priorityServices: ["interior-painting", "exterior-painting", "construction-cleaning", "flooring"],
    localNeeds: [
      "Hyannis is a mix of homes, condos, rentals and commercial fronts, often on tight turnover schedules. Coatings need to be durable and washable because these surfaces are cleaned and used more than a typical house.",
      "Rental properties are usually painted between tenants, which means working in short windows and finishing a unit completely before the next arrival.",
    ],
    faqs: [
      {
        question: "Do you paint commercial fronts in Hyannis?",
        answer:
          "Yes. Storefronts, offices and common areas are scoped for durability and scheduled around business hours.",
      },
      {
        question: "Can you work between rentals?",
        answer:
          "Yes. We plan around turnover dates and finish a unit before it goes back on the market.",
      },
      {
        question: "What finish holds up best in a rental?",
        answer:
          "A washable matte on walls and a satin enamel on trim, with a durable product in hallways and bathrooms.",
      },
      {
        question: "Do you cover Hyannisport and the West Yarmouth line?",
        answer:
          "Yes, across Barnstable including Hyannisport and the West Yarmouth line.",
      },
    ],
  },
  {
    city: "West Bridgewater",
    slug: "west-bridgewater",
    region: "Plymouth County",
    county: "Plymouth County",
    intro:
      "West Bridgewater sits inland in Plymouth County, between Route 24 and the Town River.",
    climate:
      "Inland weather brings frost heave, snow load and strong late day sun. Wood expands and contracts more than on the coast, so caulk lines and trim joints need close attention.",
    housing:
      "Colonials, splits and newer construction, along with interior updates and kitchen or bathroom remodels.",
    landmarks: ["Route 24", "West Center Street", "Town River", "Route 106"],
    priorityServices: ["interior-painting", "remodeling", "flooring", "exterior-painting"],
    localNeeds: [
      "Inland weather brings frost heave, snow load and strong late day sun. Wood expands and contracts more than on the coast, so caulk lines and trim joints need closer attention.",
      "Most work is on colonials, splits and newer construction, plus interior updates and kitchen or bathroom remodels. Interior work often runs through the winter, when exterior painting is limited by temperature.",
    ],
    faqs: [
      {
        question: "When is the best time to paint a house in West Bridgewater?",
        answer:
          "Late spring through early fall for exteriors. Interiors can be done year round, and winter is a good time for them.",
      },
      {
        question: "Why do trim joints open up inland?",
        answer:
          "The wider temperature swing moves the wood more. Flexible caulk and proper priming keep the joints closed longer.",
      },
      {
        question: "Do you do interior work in winter?",
        answer:
          "Yes. Interior painting and remodeling run through the winter months.",
      },
      {
        question: "Do you cover the Route 24 and Route 106 areas?",
        answer:
          "Yes, across West Bridgewater including the Route 24 and Route 106 corridors.",
      },
    ],
  },
];

export function getCityBySlug(slug: string | undefined): CityRecord | undefined {
  if (!slug) return undefined;
  return CITY_RECORDS.find((c) => c.slug === slug);
}

export function getCityByLinkSlug(linkSlug: string | undefined): CityRecord | undefined {
  if (!linkSlug) return undefined;
  return CITY_RECORDS.find((c) => `painting-contractor-${c.slug}` === linkSlug);
}

export type { ServiceArea };
