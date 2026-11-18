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
    generalLiability: "$1M por ocorrência / $2M agregado",
    short: "Licensed & insured",
  },
} as const;

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
