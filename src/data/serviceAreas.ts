export interface ServiceArea {
  city: string;
  slug: string;
  region: string;
  /** Public, distinct reason to hire us in this town. Used by service pages and city pages. */
  note: string;
}

// Single source of truth for the area links. The route uses painting-contractor-${slug}.
export const SERVICE_AREAS: ServiceArea[] = [
  {
    city: "Edgartown",
    slug: "edgartown",
    region: "Martha's Vineyard",
    note: "Historic homes near the harbor, where trim profiles and approved exterior colors matter.",
  },
  {
    city: "Chilmark",
    slug: "chilmark",
    region: "Martha's Vineyard",
    note: "Up-island properties exposed to open ocean wind and salt.",
  },
  {
    city: "West Tisbury",
    slug: "west-tisbury",
    region: "Martha's Vineyard",
    note: "Farmhouse and cedar shingle exteriors that need breathable coatings.",
  },
  {
    city: "Falmouth",
    slug: "falmouth",
    region: "Cape Cod",
    note: "Coastal and village homes from Woods Hole to East Falmouth.",
  },
  {
    city: "Bourne",
    slug: "bourne",
    region: "Cape Cod",
    note: "Year round homes near the canal and the Buzzards Bay shoreline.",
  },
  {
    city: "Pocasset",
    slug: "pocasset",
    region: "Cape Cod",
    note: "Bourne village properties on the water and along Shore Road.",
  },
  {
    city: "Sandwich",
    slug: "sandwich",
    region: "Cape Cod",
    note: "Colonials, capes and historic village homes from Route 6A to the beach.",
  },
  {
    city: "Hyannis",
    slug: "hyannis",
    region: "Cape Cod",
    note: "Barnstable County homes, rentals and commercial fronts.",
  },
  {
    city: "West Bridgewater",
    slug: "west-bridgewater",
    region: "Plymouth County",
    note: "Inland homes facing frost heave, snow load and faster sun fading.",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}
