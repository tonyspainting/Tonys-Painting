// Dados oficiais da empresa usados em textos e schema.
// Fonte: cartão de registro HIC (MA) e apólice de seguro da Tony's Painting MV, LLC.
export const BUSINESS = {
  legalName: "Tony's Painting MV, LLC",
  displayName: "Tony's Painting & Remodeling",
  hic: {
    number: "210672",
    expires: "2027-12-28",
    label: "MA HIC #210672",
  },
  insurance: {
    generalLiability: "$1M per occurrence / $2M aggregate",
    short: "Licensed & insured",
  },
} as const;

/** Perfis oficiais usados em links e no schema (sameAs). */
export const SOCIAL = {
  instagram: "https://www.instagram.com/tonyspainting_remodeling/",
  facebook: "https://www.facebook.com/tonyspaintingmvLLC/",
  googleReviews: "https://maps.google.com/?cid=275691574893894892",
  googleWriteReview: "https://g.page/r/CexcHtUGdNMDEAE/review",
} as const;

export interface BusinessLocation {
  id: string;
  label: string;
  street: string;
  city: string;
  region: string;
  postalCode?: string;
}

/** As três bases de operação. A primeira é a sede registrada (HIC e apólice). */
export const LOCATIONS: BusinessLocation[] = [
  { id: "vineyard", label: "Vineyard Haven", street: "11 Cook Rd", city: "Vineyard Haven", region: "MA", postalCode: "02568" },
  { id: "pocasset", label: "Pocasset", street: "2 Williams Ave", city: "Pocasset", region: "MA" },
  {
    id: "east-bridgewater",
    label: "East Bridgewater",
    street: "516 N Bedford St, 2nd Floor",
    city: "East Bridgewater",
    region: "MA",
    postalCode: "02333",
  },
];

export function formatLocation(location: BusinessLocation): string {
  const tail = [location.city, location.region].filter(Boolean).join(", ");
  const withZip = location.postalCode ? `${tail} ${location.postalCode}` : tail;
  return `${location.street}, ${withZip}`;
}

/** Consulta usada no Google Maps: apartamento atrapalha o geocoding. */
export function locationQuery(location: BusinessLocation): string {
  // O Maps geocodifica melhor só com a rua; apto/andar atrapalham.
  const street = location.street.split(",")[0];
  return formatLocation({ ...location, street });
}

/** Campos de credencial/licença para o JSON-LD (schema.org). */
export const BUSINESS_CREDENTIALS = {
  identifier: {
    "@type": "PropertyValue",
    name: "Massachusetts HIC Registration",
    value: BUSINESS.hic.number,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Massachusetts Home Improvement Contractor (HIC)",
    identifier: BUSINESS.hic.number,
    validIn: { "@type": "AdministrativeArea", name: "Massachusetts" },
  },
} as const;
