// Lista única de serviços usada nos formulários do site.
// A ordem é a mesma exibida no menu de serviços.
export const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Remodeling",
  "Deck and Stairs",
  "Construction Cleaning",
  "General Carpentry",
  "Flooring",
  "Ceramic Tile",
  "Fence",
  "Plastering",
  "Countertop",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
