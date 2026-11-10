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
  /** O que muda no orçamento nesta cidade. */
  budgetNotes?: string[];
  /** Coleção de portfólio mostrada como trabalho recente na cidade. */
  portfolioSlug?: string;
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
    budgetNotes: [
      "Historic trim, shutters and porches add preparation and brush work. On a harbor house the millwork is a larger share of the scope than the siding, and that detail is where most of the labor goes.",
      "Rental properties are usually painted in turnover windows, which can mean a tighter schedule and a premium for working around guests. Freight to the island adds to material cost, so we order once and confirm quantities.",
      "Waterfront elevations near the harbor need more frequent attention, and the estimate separates those walls because they drive the maintenance cycle.",
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
      {
        question: "How far in advance should I schedule a summer repaint?",
        answer:
          "Book in late winter or early spring. Exterior work on the island fills quickly, and March or early April gives the widest choice of dates.",
      },
      {
        question: "Do you handle ferry deliveries and materials?",
        answer:
          "Yes. We schedule deliveries around the boats and confirm quantities before ordering, so a missed crossing does not stop the crew.",
      },
      {
        question: "Does a historic home cost more to paint?",
        answer:
          "Usually yes, because trim, shutters and porches take more preparation and brush work than siding. The estimate separates those items so you can see where the cost is.",
      },
    ],
    portfolioSlug: "residential-interior-martha-s-vineyard",
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
    budgetNotes: [
      "Ocean exposure drives the maintenance cycle. Walls facing Menemsha and the open water are recoated more often, and the estimate calls those elevations out separately.",
      "Cedar and shingle exteriors need breathable products, which cost more than a standard acrylic and take more care to apply evenly. Access to remote properties and travel time are also part of the number.",
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
      {
        question: "How often does an exposed wall need recoating?",
        answer:
          "Every three to five years on the most exposed faces, longer on sheltered sides. Wind driven salt is what shortens the cycle.",
      },
      {
        question: "Do you work on the island in winter?",
        answer:
          "Exterior work is limited by temperature and wind. Interiors run year round, and exterior projects are scheduled from late spring.",
      },
      {
        question: "Can you work while the house is closed for the season?",
        answer:
          "Yes. Many Chilmark homes are seasonal. We coordinate access and send photos at each stage.",
      },
    ],
    portfolioSlug: "exterior-painting-and-siding",
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
    budgetNotes: [
      "Long exterior runs, outbuildings and shingle siding add surface area and time. A farmhouse with a barn and a shed is priced as three structures, not one.",
      "Shade and humidity mean longer drying times, so preparation and coating take more calendar days even when the labor hours are similar. We schedule around dew rather than rushing a coat.",
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
      {
        question: "Do you price barns and outbuildings separately?",
        answer:
          "Yes. Each structure is listed with its own surface area and condition, so the estimate shows where the work is.",
      },
      {
        question: "How does shade affect the schedule?",
        answer:
          "North facing walls dry slower, so they are planned for the sunniest hours and never coated late in the day.",
      },
      {
        question: "Can you match paint on an older farmhouse?",
        answer:
          "Yes. We match from a sample or a chip and test it on the house before ordering the full quantity.",
      },
    ],
    portfolioSlug: "deck-restoration",
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
    budgetNotes: [
      "Exposure changes block by block. A house near Woods Hole or the Heights needs a shorter cycle than one inland off Hatchville, and trim near the water drives the cost.",
      "Victorian and village detailing means more brush work on porches and trim. Summer deadlines add a scheduling premium, so booking early is both easier and cheaper.",
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
      {
        question: "Does a water view change the maintenance cycle?",
        answer:
          "Yes. Salt fog and wind shorten the life of trim near the water, often to four or five years.",
      },
      {
        question: "Do you charge more for summer deadlines?",
        answer:
          "We do not add a deadline fee, but a late booking limits the dates available. Early spring is the best window.",
      },
      {
        question: "Do you paint porches and columns?",
        answer:
          "Yes. Porches, columns and railings are common in Falmouth and are brushed and finished carefully.",
      },
    ],
    portfolioSlug: "exterior-painting-and-siding",
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
    budgetNotes: [
      "Wind off the canal drives rain into joints, so caulk and fasteners need more attention, and that preparation is a larger line in the estimate.",
      "Older canal side homes often need carpentry before paint. We price the repairs separately so you can see what is structural and what is finish.",
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
      {
        question: "Does canal exposure cost more to paint?",
        answer:
          "The labor is similar; the preparation and the frequency are higher. We call out the exposed walls in the scope.",
      },
      {
        question: "Can you repair siding and paint in one project?",
        answer:
          "Yes. Carpentry is priced separately, then scheduled with the paint so the sequence is right.",
      },
      {
        question: "When is the best season in Bourne?",
        answer:
          "Late spring through early fall, with trim touch ups any time the temperature holds above fifty.",
      },
    ],
    portfolioSlug: "deck-restoration",
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
    budgetNotes: [
      "Waterfront decks take reflected sun and salt, so deck work is usually on a two to three year cycle, shorter than inland decks.",
      "Small lots and raised homes add access time. Tight properties need staging and protection planned before the crew arrives, and that is part of the estimate.",
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
      {
        question: "Do you bundle deck and house painting?",
        answer:
          "Yes, when the scope allows. It saves setup time and keeps the finish consistent.",
      },
      {
        question: "How often does a waterfront deck need sealing?",
        answer:
          "Every two to three years, with south facing boards needing attention first.",
      },
      {
        question: "Can you work on a tight lot?",
        answer:
          "Yes. We plan staging, parking and protection for neighbors before starting.",
      },
    ],
    portfolioSlug: "deck-restoration",
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
    budgetNotes: [
      "Historic district homes need color review and care with original trim, which adds time before the first coat.",
      "Old layers of paint hide checked wood and loose caulk. Preparation is the largest variable here, and the estimate lists what we expect to find and how we will handle it.",
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
      {
        question: "Do I need approval for exterior colors in the historic district?",
        answer:
          "Some properties do. We tell you at the estimate stage what the town requires and plan the review into the schedule.",
      },
      {
        question: "Why is preparation higher on older homes?",
        answer:
          "Multiple paint layers, checked wood and loose caulk all take time to correct before a coating will hold.",
      },
      {
        question: "Can you match original trim profiles?",
        answer:
          "Yes. We source or mill a match and blend new work with the existing trim.",
      },
    ],
    portfolioSlug: "exterior-painting-and-siding",
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
    budgetNotes: [
      "Rentals and commercial spaces need durable, washable coatings and fast turnarounds, which changes both the product specification and the scheduling.",
      "Work in occupied buildings happens after hours or between tenants, and that premium is part of the number.",
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
      {
        question: "Do you paint commercial spaces after hours?",
        answer:
          "Yes. Storefronts and offices can be scheduled outside business hours to keep them open.",
      },
      {
        question: "What coating works best for rentals?",
        answer:
          "A washable matte on walls, satin enamel on trim, and a scrubbable product in hallways and bathrooms.",
      },
      {
        question: "Can you finish a unit between tenants?",
        answer:
          "Yes. We plan around the turnover date and finish before the next arrival.",
      },
    ],
    portfolioSlug: "commercial-school-painting",
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
    budgetNotes: [
      "Inland freeze and thaw moves wood more, so caulk and trim joints need more attention. Repainting cycles are longer than on the coast, but preparation is not lighter.",
      "Larger colonials and splits have more wall area, and interior work in winter is scheduled around heat and ventilation.",
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
      {
        question: "How often should an inland house be repainted?",
        answer:
          "Every eight to ten years with good preparation, with trim touched up in between.",
      },
      {
        question: "Do you work in winter?",
        answer:
          "Interior work yes. Exterior work depends on temperature and dry conditions.",
      },
      {
        question: "Does a larger house cost more per square foot?",
        answer:
          "Usually less per square foot, because setup and travel are spread over more area, but the total is higher.",
      },
    ],
    portfolioSlug: "kitchen-and-bath-remodeling",
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
