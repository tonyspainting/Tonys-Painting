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
